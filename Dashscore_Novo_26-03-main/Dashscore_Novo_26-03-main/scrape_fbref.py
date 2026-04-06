# scrape_fbref.py
# Script para coletar dados do FBref e exportar para JSON

import requests
from bs4 import BeautifulSoup
import pandas as pd
import json
import time
import re
from datetime import datetime

# Configurações
HEADERS = {
    'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/120.0.0.0 Safari/537.36'
}

# URL do Brasileirão Série A 2026
URL = 'https://fbref.com/en/comps/24/2026/2026-Serie-A-Stats'

def fetch_page(url):
    """Faz a requisição da página e retorna o HTML"""
    try:
        response = requests.get(url, headers=HEADERS)
        response.raise_for_status()
        time.sleep(2)  # Delay para não sobrecarregar o servidor
        return response.text
    except Exception as e:
        print(f"❌ Erro ao acessar {url}: {e}")
        return None

def extract_players_table(html):
    """Extrai a tabela de jogadores do HTML"""
    soup = BeautifulSoup(html, 'lxml')
    
    # Buscar tabela de estatísticas padrão (standard stats)
    table = soup.find('table', {'id': 'stats_standard_9'})
    
    if not table:
        print("❌ Tabela de jogadores não encontrada")
        return None
    
    # Converter tabela HTML para DataFrame do pandas
    df = pd.read_html(str(table))[0]
    
    # Limpar dados
    # Remover linhas de cabeçalho duplicadas
    df = df[df['Rk'] != 'Rk']
    df = df.dropna(subset=['Player'])
    
    # Renomear colunas para português
    df.rename(columns={
        'Rk': 'ranking',
        'Player': 'jogador',
        'Nation': 'nacionalidade',
        'Pos': 'posicao',
        'Age': 'idade',
        'MP': 'jogos',
        'Starts': 'titular',
        'Min': 'minutos',
        'Gls': 'gols',
        'Ast': 'assistencias',
        'CrdY': 'cartoes_amarelos',
        'CrdR': 'cartoes_vermelhos'
    }, inplace=True)
    
    # Limpar nacionalidade (remover bandeira e códigos)
    df['nacionalidade'] = df['nacionalidade'].str.replace(r'[^a-zA-Z]', '', regex=True)
    
    # Converter colunas numéricas
    numeric_cols = ['jogos', 'titular', 'minutos', 'gols', 'assistencias', 'cartoes_amarelos', 'cartoes_vermelhos']
    for col in numeric_cols:
        df[col] = pd.to_numeric(df[col], errors='coerce').fillna(0).astype(int)
    
    return df

def extract_teams_table(html):
    """Extrai a tabela de times do HTML"""
    soup = BeautifulSoup(html, 'lxml')
    
    # Buscar tabela de times
    table = soup.find('table', {'id': 'stats_squads_standard_9'})
    
    if not table:
        print("⚠️ Tabela de times não encontrada")
        return None
    
    df = pd.read_html(str(table))[0]
    df = df.dropna(subset=['Squad'])
    df = df[df['Squad'] != 'Squad']
    
    df.rename(columns={
        'Squad': 'time',
        'MP': 'jogos',
        'W': 'vitorias',
        'D': 'empates',
        'L': 'derrotas',
        'Pts': 'pontos',
        'Pts/MP': 'aproveitamento'
    }, inplace=True)
    
    return df

def save_to_json(data, filename):
    """Salva os dados em um arquivo JSON"""
    output_path = f'public/data/{filename}'
    
    # Criar diretório se não existir
    import os
    os.makedirs('public/data', exist_ok=True)
    
    with open(output_path, 'w', encoding='utf-8') as f:
        json.dump(data, f, indent=2, ensure_ascii=False)
    
    print(f"✅ Dados salvos em {output_path}")
    return output_path

def main():
    print("🚀 Iniciando coleta de dados do FBref...")
    print(f"📡 Acessando: {URL}")
    
    # Buscar página
    html = fetch_page(URL)
    if not html:
        print("❌ Falha ao carregar a página")
        return
    
    # Extrair jogadores
    print("📊 Extraindo dados dos jogadores...")
    players_df = extract_players_table(html)
    
    if players_df is not None:
        # Converter para lista de dicionários
        players_list = players_df.to_dict(orient='records')
        
        # Adicionar timestamp
        output = {
            'source': 'FBref.com',
            'last_update': datetime.now().isoformat(),
            'total_players': len(players_list),
            'players': players_list
        }
        
        # Salvar JSON
        save_to_json(output, 'brasileirao_players.json')
        
        # Exibir primeiros registros
        print(f"\n📋 Primeiros 5 jogadores:")
        print(players_df.head().to_string())
        
        # Estatísticas básicas
        print(f"\n📈 ESTATÍSTICAS:")
        print(f"   Total de jogadores: {len(players_list)}")
        print(f"   Total de gols: {players_df['gols'].sum()}")
        print(f"   Média de gols: {players_df['gols'].mean():.2f}")
        print(f"   Maior artilheiro: {players_df.loc[players_df['gols'].idxmax(), 'jogador']} ({players_df['gols'].max()} gols)")
    
    # Extrair times
    print("\n🏆 Extraindo dados dos times...")
    teams_df = extract_teams_table(html)
    
    if teams_df is not None:
        teams_list = teams_df.to_dict(orient='records')
        save_to_json({'teams': teams_list}, 'brasileirao_teams.json')
        print(f"   Total de times: {len(teams_list)}")
    
    print("\n✅ Coleta finalizada com sucesso!")

if __name__ == "__main__":
    main()