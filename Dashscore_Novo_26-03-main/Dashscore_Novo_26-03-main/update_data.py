# update_data.py
# Script para atualizar dados do FBref - RODE MANUALMENTE QUANDO QUISER

import requests
from bs4 import BeautifulSoup
import pandas as pd
import json
import time
from datetime import datetime
import os

HEADERS = {
    'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36'
}

URL = 'https://fbref.com/en/comps/24/2026/2026-Serie-A-Stats'

def update_players_data():
    print("🔄 Atualizando dados dos jogadores...")
    print(f"📡 Fonte: {URL}")
    
    try:
        response = requests.get(URL, headers=HEADERS)
        response.raise_for_status()
        time.sleep(2)
        html = response.text
    except Exception as e:
        print(f"❌ Erro: {e}")
        return False
    
    soup = BeautifulSoup(html, 'lxml')
    table = soup.find('table', {'id': 'stats_standard_9'})
    
    if not table:
        print("❌ Tabela não encontrada")
        return False
    
    df = pd.read_html(str(table))[0]
    df = df[df['Rk'] != 'Rk']
    df = df.dropna(subset=['Player'])
    
    # Renomear colunas
    df.rename(columns={
        'Player': 'jogador',
        'Nation': 'nacionalidade',
        'Pos': 'posicao',
        'Age': 'idade',
        'MP': 'jogos',
        'Gls': 'gols',
        'Ast': 'assistencias',
        'Min': 'minutos'
    }, inplace=True)
    
    # Converter para lista
    players = df.to_dict(orient='records')
    
    # Criar diretório se não existir
    os.makedirs('public/data', exist_ok=True)
    
    # Salvar JSON
    output = {
        'source': 'FBref.com',
        'last_update': datetime.now().strftime('%d/%m/%Y %H:%M:%S'),
        'total_players': len(players),
        'players': players
    }
    
    with open('public/data/players_stats.json', 'w', encoding='utf-8') as f:
        json.dump(output, f, indent=2, ensure_ascii=False)
    
    print(f"\n✅ ATUALIZADO! {len(players)} jogadores")
    print(f"📅 Última atualização: {output['last_update']}")
    print(f"📁 Arquivo: public/data/players_stats.json")
    
    return True

if __name__ == "__main__":
    update_players_data()
    input("\nPressione ENTER para sair...")