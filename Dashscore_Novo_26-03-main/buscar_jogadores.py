import requests
import json
import os
from datetime import datetime

API_KEY = "68fb85d214e042478a5db52d11705c17"  # Coloque sua chave

headers = {
    'X-Auth-Token': API_KEY
}

print("🚀 DASHSCORE - BUSCANDO DADOS DO BRASILEIRÃO 2026")
print("=" * 50)

# 1. Buscar times
print("\n📋 Buscando times...")
url_teams = 'https://api.football-data.org/v4/competitions/2013/teams'
response = requests.get(url_teams, headers=headers)

if response.status_code != 200:
    print(f"❌ Erro: {response.status_code}")
    exit()

dados = response.json()
teams = []

for time in dados.get('teams', []):
    teams.append({
        'id': time['id'],
        'name': time['name'],
        'short_name': time.get('shortName', ''),
        'tla': time.get('tla', ''),
        'crest': time.get('crest', '')
    })

print(f"✅ {len(teams)} times encontrados!")

# 2. Buscar jogadores de cada time
all_players = []

for time in teams:
    print(f"\n⚽ Buscando jogadores do {time['name']}...")
    
    url_players = f'https://api.football-data.org/v4/teams/{time["id"]}'
    response = requests.get(url_players, headers=headers)
    
    if response.status_code == 200:
        time_dados = response.json()
        
        for jogador in time_dados.get('squad', []):
            all_players.append({
                'id': jogador['id'],
                'name': jogador['name'],
                'position': jogador.get('position', 'N/A'),
                'nationality': jogador.get('nationality', 'N/A'),
                'team': time['name']
            })
        
        print(f"   → {len(time_dados.get('squad', []))} jogadores")
    else:
        print(f"   ❌ Erro ao buscar jogadores: {response.status_code}")

# 3. Salvar dados
os.makedirs('public/data', exist_ok=True)

output = {
    'source': 'Football-Data.org',
    'last_update': datetime.now().strftime('%d/%m/%Y %H:%M:%S'),
    'teams': teams,
    'players': all_players,
    'total_teams': len(teams),
    'total_players': len(all_players)
}

with open('public/data/brasileirao.json', 'w', encoding='utf-8') as f:
    json.dump(output, f, indent=2, ensure_ascii=False)

print("\n" + "=" * 50)
print("✅ FINALIZADO!")
print(f"📁 Arquivo: public/data/brasileirao.json")
print(f"🏆 Times: {len(teams)}")
print(f"⚽ Jogadores: {len(all_players)}")
print("\n💡 Agora recarregue seu site (F5) para ver os dados!")