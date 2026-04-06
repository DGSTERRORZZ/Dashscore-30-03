// ==================== DADOS DOS JOGADORES BRASILEIRÃO 2026 ====================

const playersData = [
    // FLAMENGO
    { id: 1, name: "Lucas Paquetá", nationality: "Brasil", club: "Flamengo", position: "Meia Atacante", value: 35000000, valueStr: "€35M", flag: "🇧🇷", number: 10, image: "lucas-paqueta.png" },
    { id: 2, name: "Pedro", nationality: "Brasil", club: "Flamengo", position: "Centroavante", value: 17000000, valueStr: "€17M", flag: "🇧🇷", number: 9, image: "pedro.png" },
    { id: 3, name: "Gerson", nationality: "Brasil", club: "Flamengo", position: "Meia Central", value: 22000000, valueStr: "€22M", flag: "🇧🇷", number: 8, image: "gerson.png" },
    { id: 4, name: "Arrascaeta", nationality: "Uruguai", club: "Flamengo", position: "Meia Atacante", value: 15000000, valueStr: "€15M", flag: "🇺🇾", number: 14, image: "arrascaeta.png" },
    { id: 5, name: "Samuel Lino", nationality: "Brasil", club: "Flamengo", position: "Ponta Esquerda", value: 17000000, valueStr: "€17M", flag: "🇧🇷", number: 16, image: "samuel-lino.png" },
    { id: 6, name: "Léo Ortiz", nationality: "Brasil", club: "Flamengo", position: "Zagueiro", value: 14000000, valueStr: "€14M", flag: "🇧🇷", number: 3, image: "leo-ortiz.png" },
    { id: 7, name: "Danilo", nationality: "Brasil", club: "Flamengo", position: "Zagueiro", value: 2500000, valueStr: "€2.5M", flag: "🇧🇷", number: 13, image: "danilo.png" },
    { id: 8, name: "Emerson Royal", nationality: "Brasil", club: "Flamengo", position: "Lateral Direito", value: 7000000, valueStr: "€7M", flag: "🇧🇷", number: 22, image: "emerson-royal.png" },
    { id: 9, name: "Ayrton Lucas", nationality: "Brasil", club: "Flamengo", position: "Lateral Esquerdo", value: 4000000, valueStr: "€4M", flag: "🇧🇷", number: 6, image: "ayrton-lucas.png" },
    { id: 10, name: "Erick Pulgar", nationality: "Chile", club: "Flamengo", position: "Volante", value: 5000000, valueStr: "€5M", flag: "🇨🇱", number: 5, image: "erick-pulgar.png" },
    { id: 11, name: "Agustín Rossi", nationality: "Argentina", club: "Flamengo", position: "Goleiro", value: 10000000, valueStr: "€10M", flag: "🇦🇷", number: 1, image: "rossi.png" },
    { id: 12, name: "Everton Cebolinha", nationality: "Brasil", club: "Flamengo", position: "Ponta Esquerda", value: 7000000, valueStr: "€7M", flag: "🇧🇷", number: 11, image: "everton-cebolinha.png" },
    { id: 13, name: "Luiz Araújo", nationality: "Brasil", club: "Flamengo", position: "Ponta Direita", value: 7000000, valueStr: "€7M", flag: "🇧🇷", number: 7, image: "luiz-araujo.png" },
    { id: 14, name: "Gonzalo Plata", nationality: "Equador", club: "Flamengo", position: "Ponta Direita", value: 8000000, valueStr: "€8M", flag: "🇪🇨", number: 19, image: "gonzalo-plata.png" },
    { id: 15, name: "Nicolás de la Cruz", nationality: "Uruguai", club: "Flamengo", position: "Meia Central", value: 9000000, valueStr: "€9M", flag: "🇺🇾", number: 18, image: "nicolas-de-la-cruz.png" },
    
    // PALMEIRAS
    { id: 16, name: "Vitor Roque", nationality: "Brasil", club: "Palmeiras", position: "Centroavante", value: 45000000, valueStr: "€45M", flag: "🇧🇷", number: 9, image: "vitor-roque.png" },
    { id: 17, name: "Andreas Pereira", nationality: "Brasil", club: "Palmeiras", position: "Meia Central", value: 18000000, valueStr: "€18M", flag: "🇧🇷", number: 10, image: "andreas-pereira.png" },
    { id: 18, name: "Raphael Veiga", nationality: "Brasil", club: "Palmeiras", position: "Meia Atacante", value: 15000000, valueStr: "€15M", flag: "🇧🇷", number: 23, image: "raphael-veiga.png" },
    { id: 19, name: "Richard Ríos", nationality: "Colômbia", club: "Palmeiras", position: "Meia Central", value: 12000000, valueStr: "€12M", flag: "🇨🇴", number: 27, image: "richard-rios.png" },
    { id: 20, name: "Flaco López", nationality: "Argentina", club: "Palmeiras", position: "Centroavante", value: 12000000, valueStr: "€12M", flag: "🇦🇷", number: 42, image: "flaco-lopez.png" },
    { id: 21, name: "Gustavo Gómez", nationality: "Paraguai", club: "Palmeiras", position: "Zagueiro", value: 8000000, valueStr: "€8M", flag: "🇵🇾", number: 15, image: "gustavo-gomez.png" },
    { id: 22, name: "Murilo", nationality: "Brasil", club: "Palmeiras", position: "Zagueiro", value: 7000000, valueStr: "€7M", flag: "🇧🇷", number: 26, image: "murilo.png" },
    { id: 23, name: "Piquerez", nationality: "Uruguai", club: "Palmeiras", position: "Lateral Esquerdo", value: 12000000, valueStr: "€12M", flag: "🇺🇾", number: 22, image: "piquerez.png" },
    { id: 24, name: "Khellven", nationality: "Brasil", club: "Palmeiras", position: "Lateral Direito", value: 6000000, valueStr: "€6M", flag: "🇧🇷", number: 2, image: "khellven.png" },
    { id: 25, name: "Carlos Miguel", nationality: "Brasil", club: "Palmeiras", position: "Goleiro", value: 8000000, valueStr: "€8M", flag: "🇧🇷", number: 1, image: "carlos-miguel.png" },
    { id: 26, name: "Mauricio", nationality: "Brasil", club: "Palmeiras", position: "Meia Atacante", value: 10000000, valueStr: "€10M", flag: "🇧🇷", number: 18, image: "mauricio.png" },
    { id: 27, name: "Marlon Freitas", nationality: "Brasil", club: "Palmeiras", position: "Meia Central", value: 9000000, valueStr: "€9M", flag: "🇧🇷", number: 8, image: "marlon-freitas.png" },
    { id: 28, name: "Fuchs", nationality: "Brasil", club: "Palmeiras", position: "Zagueiro", value: 5000000, valueStr: "€5M", flag: "🇧🇷", number: 4, image: "fuchs.png" },
    
    // CORINTHIANS
    { id: 29, name: "Memphis Depay", nationality: "Holanda", club: "Corinthians", position: "Ponta Esquerda", value: 12000000, valueStr: "€12M", flag: "🇳🇱", number: 94, image: "memphis-depay.png" },
    { id: 30, name: "Yuri Alberto", nationality: "Brasil", club: "Corinthians", position: "Centroavante", value: 12000000, valueStr: "€12M", flag: "🇧🇷", number: 9, image: "yuri-alberto.png" },
    { id: 31, name: "Rodrigo Garro", nationality: "Argentina", club: "Corinthians", position: "Meia Atacante", value: 14000000, valueStr: "€14M", flag: "🇦🇷", number: 10, image: "rodrigo-garro.png" },
    { id: 32, name: "André Carrillo", nationality: "Peru", club: "Corinthians", position: "Meia Central", value: 4000000, valueStr: "€4M", flag: "🇵🇪", number: 18, image: "andre-carrillo.png" },
    { id: 33, name: "Raniele", nationality: "Brasil", club: "Corinthians", position: "Volante", value: 6000000, valueStr: "€6M", flag: "🇧🇷", number: 14, image: "raniele.png" },
    { id: 34, name: "André Ramalho", nationality: "Brasil", club: "Corinthians", position: "Zagueiro", value: 4000000, valueStr: "€4M", flag: "🇧🇷", number: 5, image: "andre-ramalho.png" },
    { id: 35, name: "Matheuzinho", nationality: "Brasil", club: "Corinthians", position: "Lateral Direito", value: 7000000, valueStr: "€7M", flag: "🇧🇷", number: 23, image: "matheuzinho.png" },
    { id: 36, name: "Hugo Souza", nationality: "Brasil", club: "Corinthians", position: "Goleiro", value: 6000000, valueStr: "€6M", flag: "🇧🇷", number: 1, image: "hugo-souza.png" },
    { id: 37, name: "Gustavo Henrique", nationality: "Brasil", club: "Corinthians", position: "Zagueiro", value: 5000000, valueStr: "€5M", flag: "🇧🇷", number: 3, image: "gustavo-henrique.png" },
    { id: 38, name: "Matheus Bidu", nationality: "Brasil", club: "Corinthians", position: "Lateral Esquerdo", value: 4000000, valueStr: "€4M", flag: "🇧🇷", number: 21, image: "matheus-bidu.png" },
    { id: 39, name: "Breno Bidon", nationality: "Brasil", club: "Corinthians", position: "Meia Central", value: 5000000, valueStr: "€5M", flag: "🇧🇷", number: 27, image: "breno-bidon.png" },
    
    // SÃO PAULO
    { id: 40, name: "Lucas Moura", nationality: "Brasil", club: "São Paulo", position: "Ponta Direita", value: 15000000, valueStr: "€15M", flag: "🇧🇷", number: 7, image: "lucas-moura.png" },
    { id: 41, name: "Calleri", nationality: "Argentina", club: "São Paulo", position: "Centroavante", value: 12000000, valueStr: "€12M", flag: "🇦🇷", number: 9, image: "calleri.png" },
    { id: 42, name: "Oscar", nationality: "Brasil", club: "São Paulo", position: "Meia Atacante", value: 8000000, valueStr: "€8M", flag: "🇧🇷", number: 8, image: "oscar.png" },
    { id: 43, name: "Luciano", nationality: "Brasil", club: "São Paulo", position: "Centroavante", value: 8000000, valueStr: "€8M", flag: "🇧🇷", number: 10, image: "luciano.png" },
    { id: 44, name: "Marcos Antônio", nationality: "Brasil", club: "São Paulo", position: "Meia Central", value: 7000000, valueStr: "€7M", flag: "🇧🇷", number: 25, image: "marcos-antonio.png" },
    { id: 45, name: "Arboleda", nationality: "Equador", club: "São Paulo", position: "Zagueiro", value: 5000000, valueStr: "€5M", flag: "🇪🇨", number: 5, image: "arboleda.png" },
    { id: 46, name: "Alan Franco", nationality: "Argentina", club: "São Paulo", position: "Zagueiro", value: 6000000, valueStr: "€6M", flag: "🇦🇷", number: 28, image: "alan-franco.png" },
    { id: 47, name: "Wendell", nationality: "Brasil", club: "São Paulo", position: "Lateral Esquerdo", value: 5000000, valueStr: "€5M", flag: "🇧🇷", number: 6, image: "wendell.png" },
    { id: 48, name: "Rafael", nationality: "Brasil", club: "São Paulo", position: "Goleiro", value: 3000000, valueStr: "€3M", flag: "🇧🇷", number: 23, image: "rafael.png" },
    { id: 49, name: "Igor Vinícius", nationality: "Brasil", club: "São Paulo", position: "Lateral Direito", value: 3000000, valueStr: "€3M", flag: "🇧🇷", number: 2, image: "igor-vinicius.png" },
    { id: 50, name: "Ferreira", nationality: "Brasil", club: "São Paulo", position: "Ponta Esquerda", value: 7000000, valueStr: "€7M", flag: "🇧🇷", number: 47, image: "ferreira.png" },
    { id: 51, name: "Bobadilla", nationality: "Paraguai", club: "São Paulo", position: "Meia Central", value: 6000000, valueStr: "€6M", flag: "🇵🇾", number: 21, image: "bobadilla.png" },
    
    // SANTOS
    { id: 52, name: "Lautaro Díaz", nationality: "Argentina", club: "Santos", position: "Centroavante", value: 6000000, valueStr: "€6M", flag: "🇦🇷", number: 9, image: "lautaro-diaz.png" },
    { id: 53, name: "Rollheiser", nationality: "Argentina", club: "Santos", position: "Ponta Direita", value: 7000000, valueStr: "€7M", flag: "🇦🇷", number: 7, image: "rollheiser.png" },
    { id: 54, name: "Barreal", nationality: "Argentina", club: "Santos", position: "Ponta Esquerda", value: 6000000, valueStr: "€6M", flag: "🇦🇷", number: 11, image: "barreal.png" },
    { id: 55, name: "Gabriel Menino", nationality: "Brasil", club: "Santos", position: "Meia Central", value: 5000000, valueStr: "€5M", flag: "🇧🇷", number: 8, image: "gabriel-menino.png" },
    { id: 56, name: "Zé Rafael", nationality: "Brasil", club: "Santos", position: "Meia Central", value: 6000000, valueStr: "€6M", flag: "🇧🇷", number: 5, image: "ze-rafael.png" },
    { id: 57, name: "Zé Ivaldo", nationality: "Brasil", club: "Santos", position: "Zagueiro", value: 4000000, valueStr: "€4M", flag: "🇧🇷", number: 3, image: "ze-ivaldo.png" },
    { id: 58, name: "Luan Peres", nationality: "Brasil", club: "Santos", position: "Zagueiro", value: 4000000, valueStr: "€4M", flag: "🇧🇷", number: 4, image: "luan-peres.png" },
    { id: 59, name: "Vinicius Lira", nationality: "Brasil", club: "Santos", position: "Lateral Esquerdo", value: 2000000, valueStr: "€2M", flag: "🇧🇷", number: 6, image: "vinicius-lira.png" },
    { id: 60, name: "Igor Vinicius", nationality: "Brasil", club: "Santos", position: "Lateral Direito", value: 3000000, valueStr: "€3M", flag: "🇧🇷", number: 2, image: "igor-vinicius-santos.png" },
    { id: 61, name: "Gabriel Brazão", nationality: "Brasil", club: "Santos", position: "Goleiro", value: 4000000, valueStr: "€4M", flag: "🇧🇷", number: 1, image: "gabriel-brazao.png" },
    { id: 62, name: "Wesley", nationality: "Brasil", club: "Santos", position: "Ponta Direita", value: 3000000, valueStr: "€3M", flag: "🇧🇷", number: 10, image: "wesley-santos.png" },
    
    // BOTAFOGO
    { id: 63, name: "Arthur Cabral", nationality: "Brasil", club: "Botafogo", position: "Centroavante", value: 12000000, valueStr: "€12M", flag: "🇧🇷", number: 9, image: "arthur-cabral.png" },
    { id: 64, name: "Artur", nationality: "Brasil", club: "Botafogo", position: "Ponta Direita", value: 10000000, valueStr: "€10M", flag: "🇧🇷", number: 7, image: "artur.png" },
    { id: 65, name: "Vitinho", nationality: "Brasil", club: "Botafogo", position: "Ponta Esquerda", value: 8000000, valueStr: "€8M", flag: "🇧🇷", number: 11, image: "vitinho-botafogo.png" },
    { id: 66, name: "Alex Telles", nationality: "Brasil", club: "Botafogo", position: "Lateral Esquerdo", value: 7000000, valueStr: "€7M", flag: "🇧🇷", number: 13, image: "alex-telles.png" },
    { id: 67, name: "Barboza", nationality: "Argentina", club: "Botafogo", position: "Zagueiro", value: 6000000, valueStr: "€6M", flag: "🇦🇷", number: 4, image: "barboza.png" },
    { id: 68, name: "Danilo Barbosa", nationality: "Brasil", club: "Botafogo", position: "Meia Central", value: 5000000, valueStr: "€5M", flag: "🇧🇷", number: 5, image: "danilo-barbosa.png" },
    { id: 69, name: "Léo Linck", nationality: "Brasil", club: "Botafogo", position: "Goleiro", value: 3000000, valueStr: "€3M", flag: "🇧🇷", number: 1, image: "leo-linck.png" },
    { id: 70, name: "Newton", nationality: "Brasil", club: "Botafogo", position: "Meia Central", value: 6000000, valueStr: "€6M", flag: "🇧🇷", number: 8, image: "newton.png" },
    { id: 71, name: "Santi Rodríguez", nationality: "Argentina", club: "Botafogo", position: "Meia Atacante", value: 7000000, valueStr: "€7M", flag: "🇦🇷", number: 10, image: "santi-rodriguez.png" },
    { id: 72, name: "Bastos", nationality: "Angola", club: "Botafogo", position: "Zagueiro", value: 4000000, valueStr: "€4M", flag: "🇦🇴", number: 3, image: "bastos.png" },
    { id: 73, name: "Júnior Santos", nationality: "Brasil", club: "Botafogo", position: "Centroavante", value: 5000000, valueStr: "€5M", flag: "🇧🇷", number: 11, image: "junior-santos.png" },
    { id: 74, name: "Cuiabano", nationality: "Brasil", club: "Botafogo", position: "Lateral Esquerdo", value: 4000000, valueStr: "€4M", flag: "🇧🇷", number: 16, image: "cuiabano.png" },
    
    // ATLÉTICO-MG
    { id: 75, name: "Hulk", nationality: "Brasil", club: "Atlético-MG", position: "Centroavante", value: 6000000, valueStr: "€6M", flag: "🇧🇷", number: 7, image: "hulk.png" },
    { id: 76, name: "Dudu", nationality: "Brasil", club: "Atlético-MG", position: "Ponta Esquerda", value: 8000000, valueStr: "€8M", flag: "🇧🇷", number: 10, image: "dudu.png" },
    { id: 77, name: "Paulinho", nationality: "Brasil", club: "Atlético-MG", position: "Ponta Direita", value: 12000000, valueStr: "€12M", flag: "🇧🇷", number: 9, image: "paulinho.png" },
    { id: 78, name: "Renan Lodi", nationality: "Brasil", club: "Atlético-MG", position: "Lateral Esquerdo", value: 8000000, valueStr: "€8M", flag: "🇧🇷", number: 44, image: "renan-lodi.png" },
    { id: 79, name: "Alan Franco", nationality: "Argentina", club: "Atlético-MG", position: "Meia Central", value: 6000000, valueStr: "€6M", flag: "🇦🇷", number: 5, image: "alan-franco-atletico.png" },
    { id: 80, name: "Everson", nationality: "Brasil", club: "Atlético-MG", position: "Goleiro", value: 4000000, valueStr: "€4M", flag: "🇧🇷", number: 22, image: "everson.png" },
    { id: 81, name: "Maycon", nationality: "Brasil", club: "Atlético-MG", position: "Meia Central", value: 5000000, valueStr: "€5M", flag: "🇧🇷", number: 8, image: "maycon.png" },
    { id: 82, name: "Bernard", nationality: "Brasil", club: "Atlético-MG", position: "Ponta Esquerda", value: 5000000, valueStr: "€5M", flag: "🇧🇷", number: 11, image: "bernard.png" },
    { id: 83, name: "Zaracho", nationality: "Argentina", club: "Atlético-MG", position: "Meia Atacante", value: 8000000, valueStr: "€8M", flag: "🇦🇷", number: 10, image: "zaracho.png" },
    { id: 84, name: "Alonso", nationality: "Paraguai", club: "Atlético-MG", position: "Zagueiro", value: 5000000, valueStr: "€5M", flag: "🇵🇾", number: 4, image: "alonso.png" },
    { id: 85, name: "Ruan Tressoldi", nationality: "Brasil", club: "Atlético-MG", position: "Zagueiro", value: 6000000, valueStr: "€6M", flag: "🇧🇷", number: 3, image: "ruan-tressoldi.png" },
    
    // GRÊMIO
    { id: 86, name: "Carlos Vinicius", nationality: "Brasil", club: "Grêmio", position: "Centroavante", value: 8000000, valueStr: "€8M", flag: "🇧🇷", number: 9, image: "carlos-vinicius.png" },
    { id: 87, name: "Tetê", nationality: "Brasil", club: "Grêmio", position: "Ponta Direita", value: 9000000, valueStr: "€9M", flag: "🇧🇷", number: 7, image: "tete.png" },
    { id: 88, name: "Cristaldo", nationality: "Argentina", club: "Grêmio", position: "Meia Atacante", value: 7000000, valueStr: "€7M", flag: "🇦🇷", number: 10, image: "cristaldo.png" },
    { id: 89, name: "Amuzu", nationality: "Bélgica", club: "Grêmio", position: "Ponta Esquerda", value: 8000000, valueStr: "€8M", flag: "🇧🇪", number: 11, image: "amuzu.png" },
    { id: 90, name: "Arthur", nationality: "Brasil", club: "Grêmio", position: "Meia Central", value: 7000000, valueStr: "€7M", flag: "🇧🇷", number: 8, image: "arthur-gremio.png" },
    { id: 91, name: "Wagner Leonardo", nationality: "Brasil", club: "Grêmio", position: "Zagueiro", value: 5000000, valueStr: "€5M", flag: "🇧🇷", number: 4, image: "wagner-leonardo.png" },
    { id: 92, name: "Marlon", nationality: "Brasil", club: "Grêmio", position: "Lateral Esquerdo", value: 5000000, valueStr: "€5M", flag: "🇧🇷", number: 6, image: "marlon-gremio.png" },
    { id: 93, name: "Weverton", nationality: "Brasil", club: "Grêmio", position: "Goleiro", value: 5000000, valueStr: "€5M", flag: "🇧🇷", number: 12, image: "weverton-gremio.png" },
    { id: 94, name: "Kannemann", nationality: "Argentina", club: "Grêmio", position: "Zagueiro", value: 4000000, valueStr: "€4M", flag: "🇦🇷", number: 4, image: "kannemann.png" },
    { id: 95, name: "Villasanti", nationality: "Paraguai", club: "Grêmio", position: "Meia Central", value: 7000000, valueStr: "€7M", flag: "🇵🇾", number: 20, image: "villasanti.png" },
    { id: 96, name: "João Pedro", nationality: "Brasil", club: "Grêmio", position: "Lateral Direito", value: 3000000, valueStr: "€3M", flag: "🇧🇷", number: 2, image: "joao-pedro.png" },
    
    // INTERNACIONAL
    { id: 97, name: "Rafael Borré", nationality: "Colômbia", club: "Internacional", position: "Centroavante", value: 7000000, valueStr: "€7M", flag: "🇨🇴", number: 19, image: "rafael-borre.png" },
    { id: 98, name: "Enner Valencia", nationality: "Equador", club: "Internacional", position: "Centroavante", value: 8000000, valueStr: "€8M", flag: "🇪🇨", number: 13, image: "enner-valencia.png" },
    { id: 99, name: "Alan Patrick", nationality: "Brasil", club: "Internacional", position: "Meia Atacante", value: 9000000, valueStr: "€9M", flag: "🇧🇷", number: 10, image: "alan-patrick.png" },
    { id: 100, name: "Bernabei", nationality: "Argentina", club: "Internacional", position: "Lateral Esquerdo", value: 7000000, valueStr: "€7M", flag: "🇦🇷", number: 6, image: "bernabei.png" },
    { id: 101, name: "Rochet", nationality: "Uruguai", club: "Internacional", position: "Goleiro", value: 6000000, valueStr: "€6M", flag: "🇺🇾", number: 1, image: "rochet.png" },
    { id: 102, name: "Wanderson", nationality: "Brasil", club: "Internacional", position: "Ponta Esquerda", value: 7000000, valueStr: "€7M", flag: "🇧🇷", number: 11, image: "wanderson.png" },
    { id: 103, name: "Mercado", nationality: "Argentina", club: "Internacional", position: "Zagueiro", value: 3000000, valueStr: "€3M", flag: "🇦🇷", number: 25, image: "mercado.png" },
    { id: 104, name: "Bruno Henrique", nationality: "Brasil", club: "Internacional", position: "Meia Central", value: 5000000, valueStr: "€5M", flag: "🇧🇷", number: 8, image: "bruno-henrique.png" },
    { id: 105, name: "Bustos", nationality: "Argentina", club: "Internacional", position: "Lateral Direito", value: 4000000, valueStr: "€4M", flag: "🇦🇷", number: 16, image: "bustos.png" },
    { id: 106, name: "Vitão", nationality: "Brasil", club: "Internacional", position: "Zagueiro", value: 5000000, valueStr: "€5M", flag: "🇧🇷", number: 44, image: "vitao.png" },
    { id: 107, name: "Maurício", nationality: "Brasil", club: "Internacional", position: "Ponta Direita", value: 5000000, valueStr: "€5M", flag: "🇧🇷", number: 27, image: "mauricio-internacional.png" },
    
    // CRUZEIRO
    { id: 108, name: "Kaio Jorge", nationality: "Brasil", club: "Cruzeiro", position: "Centroavante", value: 8000000, valueStr: "€8M", flag: "🇧🇷", number: 9, image: "kaio-jorge.png" },
    { id: 109, name: "Matheus Pereira", nationality: "Brasil", club: "Cruzeiro", position: "Meia Atacante", value: 12000000, valueStr: "€12M", flag: "🇧🇷", number: 10, image: "matheus-pereira-cruzeiro.png" },
    { id: 110, name: "Fabrício Bruno", nationality: "Brasil", club: "Cruzeiro", position: "Zagueiro", value: 8000000, valueStr: "€8M", flag: "🇧🇷", number: 4, image: "fabricio-bruno.png" },
    { id: 111, name: "Cássio", nationality: "Brasil", club: "Cruzeiro", position: "Goleiro", value: 3000000, valueStr: "€3M", flag: "🇧🇷", number: 1, image: "cassio.png" },
    { id: 112, name: "William", nationality: "Brasil", club: "Cruzeiro", position: "Lateral Direito", value: 4000000, valueStr: "€4M", flag: "🇧🇷", number: 12, image: "william.png" },
    { id: 113, name: "Marlon", nationality: "Brasil", club: "Cruzeiro", position: "Lateral Esquerdo", value: 4000000, valueStr: "€4M", flag: "🇧🇷", number: 3, image: "marlon-cruzeiro.png" },
    { id: 114, name: "Lucas Romero", nationality: "Argentina", club: "Cruzeiro", position: "Volante", value: 5000000, valueStr: "€5M", flag: "🇦🇷", number: 29, image: "lucas-romero.png" },
    { id: 115, name: "Lucas Silva", nationality: "Brasil", club: "Cruzeiro", position: "Meia Central", value: 2000000, valueStr: "€2M", flag: "🇧🇷", number: 16, image: "lucas-silva.png" },
    { id: 116, name: "Wanderson", nationality: "Brasil", club: "Cruzeiro", position: "Ponta Esquerda", value: 6000000, valueStr: "€6M", flag: "🇧🇷", number: 11, image: "wanderson-cruzeiro.png" },
    { id: 117, name: "Villalba", nationality: "Paraguai", club: "Cruzeiro", position: "Zagueiro", value: 5000000, valueStr: "€5M", flag: "🇵🇾", number: 3, image: "villalba.png" },
    { id: 118, name: "Ramiro", nationality: "Brasil", club: "Cruzeiro", position: "Meia Central", value: 2000000, valueStr: "€2M", flag: "🇧🇷", number: 17, image: "ramiro.png" },
    
    // VASCO
    { id: 119, name: "Philippe Coutinho", nationality: "Brasil", club: "Vasco", position: "Meia Atacante", value: 8000000, valueStr: "€8M", flag: "🇧🇷", number: 11, image: "philippe-coutinho.png" },
    { id: 120, name: "Dimitri Payet", nationality: "França", club: "Vasco", position: "Meia Atacante", value: 5000000, valueStr: "€5M", flag: "🇫🇷", number: 10, image: "dimitri-payet.png" },
    { id: 121, name: "Thiago Mendes", nationality: "Brasil", club: "Vasco", position: "Volante", value: 4000000, valueStr: "€4M", flag: "🇧🇷", number: 5, image: "thiago-mendes.png" },
    { id: 122, name: "Robert Renan", nationality: "Brasil", club: "Vasco", position: "Zagueiro", value: 5000000, valueStr: "€5M", flag: "🇧🇷", number: 3, image: "robert-renan.png" },
    { id: 123, name: "Piton", nationality: "Brasil", club: "Vasco", position: "Lateral Esquerdo", value: 4000000, valueStr: "€4M", flag: "🇧🇷", number: 6, image: "piton.png" },
    { id: 124, name: "Léo Jardim", nationality: "Brasil", club: "Vasco", position: "Goleiro", value: 5000000, valueStr: "€5M", flag: "🇧🇷", number: 1, image: "leo-jardim.png" },
    { id: 125, name: "Adson", nationality: "Brasil", club: "Vasco", position: "Ponta Direita", value: 4000000, valueStr: "€4M", flag: "🇧🇷", number: 7, image: "adson.png" },
    { id: 126, name: "David", nationality: "Brasil", club: "Vasco", position: "Ponta Esquerda", value: 3000000, valueStr: "€3M", flag: "🇧🇷", number: 16, image: "david.png" },
    { id: 127, name: "Hugo Moura", nationality: "Brasil", club: "Vasco", position: "Meia Central", value: 2000000, valueStr: "€2M", flag: "🇧🇷", number: 25, image: "hugo-moura.png" },
    { id: 128, name: "Paulo Henrique", nationality: "Brasil", club: "Vasco", position: "Lateral Direito", value: 2000000, valueStr: "€2M", flag: "🇧🇷", number: 2, image: "paulo-henrique.png" },
    { id: 129, name: "GB", nationality: "Brasil", club: "Vasco", position: "Centroavante", value: 4000000, valueStr: "€4M", flag: "🇧🇷", number: 9, image: "gb.png" },
    
    // BAHIA
    { id: 130, name: "Willian José", nationality: "Brasil", club: "Bahia", position: "Centroavante", value: 7000000, valueStr: "€7M", flag: "🇧🇷", number: 9, image: "willian-jose.png" },
    { id: 131, name: "Everton Ribeiro", nationality: "Brasil", club: "Bahia", position: "Meia Atacante", value: 3000000, valueStr: "€3M", flag: "🇧🇷", number: 10, image: "everton-ribeiro.png" },
    { id: 132, name: "Jean Lucas", nationality: "Brasil", club: "Bahia", position: "Meia Central", value: 6000000, valueStr: "€6M", flag: "🇧🇷", number: 8, image: "jean-lucas.png" },
    { id: 133, name: "Acevedo", nationality: "Uruguai", club: "Bahia", position: "Volante", value: 5000000, valueStr: "€5M", flag: "🇺🇾", number: 5, image: "acevedo.png" },
    { id: 134, name: "Ronaldo", nationality: "Brasil", club: "Bahia", position: "Goleiro", value: 3000000, valueStr: "€3M", flag: "🇧🇷", number: 1, image: "ronaldo-bahia.png" },
    { id: 135, name: "Cauly", nationality: "Brasil", club: "Bahia", position: "Meia Atacante", value: 5000000, valueStr: "€5M", flag: "🇧🇷", number: 7, image: "cauly.png" },
    { id: 136, name: "Luciano Juba", nationality: "Brasil", club: "Bahia", position: "Lateral Esquerdo", value: 4000000, valueStr: "€4M", flag: "🇧🇷", number: 16, image: "luciano-juba.png" },
    { id: 137, name: "Ademir", nationality: "Brasil", club: "Bahia", position: "Ponta Direita", value: 5000000, valueStr: "€5M", flag: "🇧🇷", number: 11, image: "ademir.png" },
    { id: 138, name: "Erick Pulga", nationality: "Brasil", club: "Bahia", position: "Ponta Direita", value: 5000000, valueStr: "€5M", flag: "🇧🇷", number: 20, image: "erick-pulga.png" },
    { id: 139, name: "Kanu", nationality: "Brasil", club: "Bahia", position: "Zagueiro", value: 3000000, valueStr: "€3M", flag: "🇧🇷", number: 3, image: "kanu.png" },
    { id: 140, name: "Gilberto", nationality: "Brasil", club: "Bahia", position: "Lateral Direito", value: 3000000, valueStr: "€3M", flag: "🇧🇷", number: 2, image: "gilberto.png" },
    
    // VITÓRIA
    { id: 141, name: "Erick", nationality: "Brasil", club: "Vitória", position: "Centroavante", value: 2000000, valueStr: "€2M", flag: "🇧🇷", number: 9, image: "erick.png" },
    { id: 142, name: "Aitor", nationality: "Espanha", club: "Vitória", position: "Ponta Direita", value: 1500000, valueStr: "€1.5M", flag: "🇪🇸", number: 7, image: "aitor.png" },
    { id: 143, name: "Ramon", nationality: "Brasil", club: "Vitória", position: "Meia Central", value: 1000000, valueStr: "€1M", flag: "🇧🇷", number: 8, image: "ramon.png" },
    { id: 144, name: "Riccieli", nationality: "Brasil", club: "Vitória", position: "Zagueiro", value: 1000000, valueStr: "€1M", flag: "🇧🇷", number: 4, image: "riccieli.png" },
    { id: 145, name: "Gabriel", nationality: "Brasil", club: "Vitória", position: "Goleiro", value: 800000, valueStr: "€800k", flag: "🇧🇷", number: 1, image: "gabriel-vitoria.png" },
    { id: 146, name: "Osvaldo", nationality: "Brasil", club: "Vitória", position: "Ponta Esquerda", value: 1200000, valueStr: "€1.2M", flag: "🇧🇷", number: 10, image: "osvaldo.png" },
    { id: 147, name: "Wesley", nationality: "Brasil", club: "Vitória", position: "Centroavante", value: 1000000, valueStr: "€1M", flag: "🇧🇷", number: 9, image: "wesley-vitoria.png" },
    { id: 148, name: "Léo Gomes", nationality: "Brasil", club: "Vitória", position: "Lateral Esquerdo", value: 800000, valueStr: "€800k", flag: "🇧🇷", number: 6, image: "leo-gomes.png" },
    { id: 149, name: "Zeca", nationality: "Brasil", club: "Vitória", position: "Lateral Direito", value: 900000, valueStr: "€900k", flag: "🇧🇷", number: 2, image: "zeca.png" },
    { id: 150, name: "Rodrigo Andrade", nationality: "Brasil", club: "Vitória", position: "Meia Central", value: 700000, valueStr: "€700k", flag: "🇧🇷", number: 5, image: "rodrigo-andrade.png" },
    { id: 151, name: "Camutanga", nationality: "Brasil", club: "Vitória", position: "Zagueiro", value: 800000, valueStr: "€800k", flag: "🇧🇷", number: 3, image: "camutanga.png" }
];

// Funções auxiliares
function getPlayerImage(playerName) {
    const player = playersData.find(p => p.name === playerName);
    if (player && player.image) return `images/jogadores/${player.image}`;
    return null;
}

function getClubShield(clubName) {
    const clubMap = {
        "Flamengo": "escudo-flamengo.png", "Palmeiras": "escudo-palmeiras.png",
        "Corinthians": "escudo-corinthians.png", "São Paulo": "escudo-saopaulo.png",
        "Santos": "escudo-santos.png", "Botafogo": "escudo-botafogo.png",
        "Atlético-MG": "escudo-atletico-mg.png", "Grêmio": "escudo-gremio.png",
        "Internacional": "escudo-inter.png", "Cruzeiro": "escudo-cruzeiro.png",
        "Vasco": "escudo-vasco.png", "Bahia": "escudo-bahia.png", "Vitória": "escudo-vitoria.png"
    };
    return clubMap[clubName] ? `images/escudos/${clubMap[clubName]}` : null;
}

function getNumericValue(valueStr) {
    const match = valueStr.match(/€(\d+(?:\.\d+)?)(M|k)/);
    if (!match) return 0;
    let value = parseFloat(match[1]);
    if (match[2] === 'M') value = value * 1000000;
    if (match[2] === 'k') value = value * 1000;
    return value;
}

function filterByValue(players, range) {
    if (range === "all") return players;
    return players.filter(player => {
        const value = getNumericValue(player.valueStr);
        switch(range) {
            case "0-5": return value < 5000000;
            case "5-10": return value >= 5000000 && value < 10000000;
            case "10-15": return value >= 10000000 && value < 15000000;
            case "15-20": return value >= 15000000 && value < 20000000;
            case "20-30": return value >= 20000000 && value < 30000000;
            case "30-50": return value >= 30000000 && value < 50000000;
            case "50+": return value >= 50000000;
            default: return true;
        }
    });
}

// ==================== MAPEAMENTO DAS FORMAÇÕES (4 LINHAS CORRETAS) ====================

const formationPositionMap = {
    "4-3-3": {
        positions: ["Goleiro", "Lateral Esquerdo", "Zagueiro", "Zagueiro", "Lateral Direito", "Meia Central", "Meia Central", "Meia Central", "Ponta Esquerda", "Centroavante", "Ponta Direita"],
        indices: [10, 6, 7, 8, 9, 3, 4, 5, 0, 1, 2]
    },
    "4-4-2": {
        positions: ["Goleiro", "Lateral Esquerdo", "Zagueiro", "Zagueiro", "Lateral Direito", "Meia Central", "Meia Central", "Meia Central", "Meia Central", "Centroavante", "Centroavante"],
        indices: [10, 6, 7, 8, 9, 12, 3, 4, 13, 1, 11]
    },
    "4-2-3-1": {
        // LINHA 1: Goleiro | LINHA 2: 4 Defensores | LINHA 3: 2 Volantes | LINHA 4: 3 Meias Atacantes | LINHA 5: 1 Centroavante
        positions: ["Goleiro", "Lateral Direito", "Zagueiro", "Zagueiro", "Lateral Esquerdo", "Volante", "Volante", "Meia Atacante", "Meia Atacante", "Meia Atacante", "Centroavante"],
        indices: [10, 9, 7, 8, 6, 14, 16, 12, 3, 13, 1]
    },
    "3-4-3": {
        positions: ["Goleiro", "Zagueiro", "Zagueiro", "Zagueiro", "Meia Central", "Meia Central", "Meia Central", "Meia Central", "Ponta Esquerda", "Centroavante", "Ponta Direita"],
        indices: [10, 7, 8, 17, 12, 3, 4, 13, 0, 1, 2]
    },
    "3-5-2": {
        positions: ["Goleiro", "Zagueiro", "Zagueiro", "Zagueiro", "Meia Central", "Meia Central", "Meia Central", "Meia Central", "Meia Central", "Centroavante", "Centroavante"],
        indices: [10, 7, 8, 17, 12, 3, 4, 5, 13, 1, 11]
    },
    "4-1-2-1-2": {
        // LINHA 1: Goleiro | LINHA 2: 4 Defensores | LINHA 3: 1 Volante | LINHA 4: 2 Meias Centrais | LINHA 5: 1 Meia Atacante | LINHA 6: 2 Centroavantes
        positions: ["Goleiro", "Lateral Direito", "Zagueiro", "Zagueiro", "Lateral Esquerdo", "Volante", "Meia Central", "Meia Central", "Meia Atacante", "Centroavante", "Centroavante"],
        indices: [10, 9, 7, 8, 6, 14, 3, 4, 5, 1, 11]
    },
    "5-3-2": {
        positions: ["Goleiro", "Lateral Esquerdo", "Zagueiro", "Zagueiro", "Zagueiro", "Lateral Direito", "Meia Central", "Meia Central", "Meia Central", "Centroavante", "Centroavante"],
        indices: [10, 18, 7, 8, 17, 19, 3, 4, 5, 1, 11]
    },
    "4-5-1": {
        positions: ["Goleiro", "Lateral Esquerdo", "Zagueiro", "Zagueiro", "Lateral Direito", "Meia Central", "Meia Central", "Meia Central", "Meia Central", "Meia Central", "Centroavante"],
        indices: [10, 6, 7, 8, 9, 12, 3, 4, 5, 13, 1]
    }
};

const compatiblePositionsMap = {
    "Goleiro": ["Goleiro"],
    "Lateral Esquerdo": ["Lateral Esquerdo", "Zagueiro"],
    "Lateral Direito": ["Lateral Direito", "Zagueiro"],
    "Zagueiro": ["Zagueiro", "Lateral Esquerdo", "Lateral Direito", "Volante"],
    "Volante": ["Volante", "Meia Central", "Zagueiro"],
    "Meia Central": ["Meia Central", "Volante", "Meia Atacante"],
    "Meia Atacante": ["Meia Atacante", "Meia Central", "Centroavante"],
    "Ponta Esquerda": ["Ponta Esquerda", "Meia Central", "Centroavante"],
    "Ponta Direita": ["Ponta Direita", "Meia Central", "Centroavante"],
    "Centroavante": ["Centroavante", "Ponta Esquerda", "Ponta Direita", "Meia Atacante"]
};

const formations = {
    "4-3-3": { attack: 3, midfield: 3, defense: 4 },
    "4-4-2": { attack: 2, midfield: 4, defense: 4 },
    "4-2-3-1": { attack: 1, midfield: 5, defense: 4 },
    "3-4-3": { attack: 3, midfield: 4, defense: 3 },
    "3-5-2": { attack: 2, midfield: 5, defense: 3 },
    "4-1-2-1-2": { attack: 2, midfield: 4, defense: 4 },
    "5-3-2": { attack: 2, midfield: 3, defense: 5 },
    "4-5-1": { attack: 1, midfield: 5, defense: 4 }
};

// Variáveis globais
let currentSlot = null;
let currentLineup = Array(20).fill(null);
let savedLineups = JSON.parse(localStorage.getItem('fantasyLineups') || '[]');
let currentFormation = "4-3-3";
let modalCurrentClubFilter = "all";
let modalCurrentCountryFilter = "all";
let modalCurrentValueRange = "all";
let modalCurrentPositionFilter = "all";
let modalSearchText = "";

// Função para calcular valor total do time
function calculateTotalValue() {
    let total = 0;
    currentLineup.forEach(player => {
        if (player && player.value) total += player.value;
    });
    const totalElement = document.getElementById("totalTeamValue");
    if (totalElement) {
        if (total >= 1000000000) totalElement.innerHTML = `€${(total / 1000000000).toFixed(1)}B`;
        else if (total >= 1000000) totalElement.innerHTML = `€${(total / 1000000).toFixed(1)}M`;
        else totalElement.innerHTML = `€${(total / 1000).toFixed(0)}k`;
    }
    return total;
}

// Função para renderizar lista de jogadores no modal
function renderPlayersList() {
    const container = document.getElementById("playersListContainer");
    if (!container || !currentSlot) return;
    
    const slotPosition = currentSlot.getAttribute("data-position");
    let filtered = playersData.filter(p => p.position === slotPosition);
    
    if (modalSearchText) {
        filtered = filtered.filter(p => 
            p.name.toLowerCase().includes(modalSearchText.toLowerCase()) ||
            p.club.toLowerCase().includes(modalSearchText.toLowerCase()) ||
            p.nationality.toLowerCase().includes(modalSearchText.toLowerCase())
        );
    }
    if (modalCurrentClubFilter !== "all") filtered = filtered.filter(p => p.club === modalCurrentClubFilter);
    if (modalCurrentCountryFilter !== "all") filtered = filtered.filter(p => p.nationality === modalCurrentCountryFilter);
    if (modalCurrentPositionFilter !== "all") filtered = filtered.filter(p => p.position === modalCurrentPositionFilter);
    filtered = filterByValue(filtered, modalCurrentValueRange);

    if (filtered.length === 0) {
        container.innerHTML = '<div class="no-results">Nenhum jogador encontrado 😢</div>';
        return;
    }
    
    container.innerHTML = filtered.map(player => {
        const playerImage = getPlayerImage(player.name);
        const clubShield = getClubShield(player.club);
        return `
            <div class="player-item" data-player='${JSON.stringify(player)}'>
                <div class="player-info">
                    <div class="player-fav-avatar" style="width: 50px; height: 50px; background: #3f5da8; border-radius: 50%; overflow: hidden;">
                        ${playerImage ? `<img src="${playerImage}" style="width:100%;height:100%;object-fit:cover;" onerror="this.src='${clubShield || player.flag}'">` : (clubShield ? `<img src="${clubShield}" style="width:100%;height:100%;object-fit:contain;padding:5px;">` : `<div style="display:flex;align-items:center;justify-content:center;height:100%;">${player.flag || "⚽"}</div>`)}
                    </div>
                    <div style="flex:1;">
                        <div class="player-name">${player.name}<span class="position-badge">${player.position}</span></div>
                        <div class="player-details"><span>🏠 ${player.club}</span><span>🌍 ${player.nationality}</span><span>💰 ${player.valueStr}</span></div>
                    </div>
                </div>
                <div class="player-club">${player.club}</div>
            </div>
        `;
    }).join("");
    
    document.querySelectorAll(".player-item").forEach(item => {
        item.addEventListener("click", () => addPlayerToSlot(JSON.parse(item.dataset.player)));
    });
}
// fantasy.js - função para listar jogadores reais
async function listarJogadoresReais(filtroTime = null) {
    const dados = await carregarDadosBrasileirao();
    if (!dados) return;
    
    let jogadores = dados.players;
    
    // Filtrar por time se necessário
    if (filtroTime && filtroTime !== 'all') {
        jogadores = jogadores.filter(j => j.team === filtroTime);
    }
    
    const container = document.getElementById('playersListContainer');
    container.innerHTML = jogadores.map(jogador => `
        <div class="player-card-modal" onclick="selecionarJogador('${jogador.id}', '${jogador.name}', '${jogador.team}', '${jogador.position}')">
            <div class="player-modal-icon">⚽</div>
            <div class="player-modal-info">
                <div class="player-modal-name">${jogador.name}</div>
                <div class="player-modal-team">${jogador.team} • ${jogador.position}</div>
                <div class="player-modal-nationality">${jogador.nationality}</div>
            </div>
        </div>
    `).join('');
}

// Chamar ao abrir o modal
document.getElementById('playerModal')?.addEventListener('show', () => {
    listarJogadoresReais();
});

// Função para adicionar jogador ao slot (com verificação de repetidos)
function addPlayerToSlot(player) {
    if (!currentSlot) return;
    
    const isPlayerAlreadyInTeam = currentLineup.some(p => p !== null && p.id === player.id);
    if (isPlayerAlreadyInTeam) {
        alert(`⚠️ ${player.name} já está no seu time!`);
        document.getElementById("playerModal")?.classList.remove("active");
        currentSlot = null;
        return;
    }
    
    const slotElement = currentSlot;
    const playerCard = slotElement.querySelector(".player-card");
    const allSlots = document.querySelectorAll(".player-slot:not(.hidden-slot)");
    const index = Array.from(allSlots).indexOf(slotElement);
    if (index !== -1) currentLineup[index] = player;
    
    const playerImage = getPlayerImage(player.name);
    const clubShield = getClubShield(player.club);
    playerCard.classList.remove("empty");
    playerCard.classList.add("filled");
    playerCard.innerHTML = `
        <div class="player-icon">${playerImage ? `<img src="${playerImage}" onerror="this.src='${clubShield || player.flag}'">` : (clubShield ? `<img src="${clubShield}">` : player.flag)}</div>
        <div class="player-name" title="${player.name}">${player.name}</div>
        <div class="player-meta" title="${player.club}">${player.club}</div>
        <div class="player-meta" title="${player.nationality} • ${player.valueStr}">${player.nationality} • ${player.valueStr}</div>
    `;
    
    calculateTotalValue();
    document.getElementById("playerModal")?.classList.remove("active");
    currentSlot = null;
}

function openPositionModal(slot) {
    currentSlot = slot;
    const posName = slot.getAttribute("data-pos-name") || slot.getAttribute("data-position");
    document.getElementById("currentPositionTag").innerHTML = `📍 ${posName}`;
    modalSearchText = "";
    modalCurrentClubFilter = "all";
    modalCurrentCountryFilter = "all";
    modalCurrentValueRange = "all";
    modalCurrentPositionFilter = "all";
    document.getElementById("playerSearchInput").value = "";
    renderPlayersList();
    document.getElementById("playerModal").classList.add("active");
}

function clearModalFilters() {
    modalSearchText = "";
    modalCurrentClubFilter = "all";
    modalCurrentCountryFilter = "all";
    modalCurrentValueRange = "all";
    modalCurrentPositionFilter = "all";
    document.getElementById("playerSearchInput").value = "";
    renderPlayersList();
}

// Função para preencher o time com jogadores de um clube
function fillTeamWithClub(clubName) {
    const teamPlayers = [...playersData.filter(p => p.club === clubName)];
    if (teamPlayers.length === 0) {
        alert(`Nenhum jogador encontrado para o ${clubName}!`);
        return false;
    }
    
    const config = formationPositionMap[currentFormation];
    if (!config) return false;
    
    const newLineup = Array(20).fill(null);
    let availablePlayers = [...teamPlayers];
    
    for (let i = 0; i < config.positions.length; i++) {
        const targetPos = config.positions[i];
        const slotIndex = config.indices[i];
        let playerIndex = availablePlayers.findIndex(p => p.position === targetPos);
        
        if (playerIndex === -1) {
            const alternatives = compatiblePositionsMap[targetPos] || [targetPos];
            for (const altPos of alternatives) {
                playerIndex = availablePlayers.findIndex(p => p.position === altPos);
                if (playerIndex !== -1) break;
            }
        }
        if (playerIndex !== -1) {
            newLineup[slotIndex] = availablePlayers[playerIndex];
            availablePlayers.splice(playerIndex, 1);
        }
    }
    
    for (let i = 0; i < config.positions.length; i++) {
        const slotIndex = config.indices[i];
        if (!newLineup[slotIndex] && availablePlayers.length > 0) {
            newLineup[slotIndex] = availablePlayers.shift();
        }
    }
    
    currentLineup = newLineup;
    
    const allSlots = document.querySelectorAll(".player-slot:not(.hidden-slot)");
    allSlots.forEach((slot, index) => {
        const player = currentLineup[index];
        const playerCard = slot.querySelector(".player-card");
        if (player) {
            const playerImage = getPlayerImage(player.name);
            const clubShield = getClubShield(player.club);
            playerCard.classList.remove("empty");
            playerCard.classList.add("filled");
            playerCard.innerHTML = `
                <div class="player-icon">${playerImage ? `<img src="${playerImage}" onerror="this.src='${clubShield || player.flag}'">` : (clubShield ? `<img src="${clubShield}">` : player.flag)}</div>
                <div class="player-name" title="${player.name}">${player.name}</div>
                <div class="player-meta" title="${player.club}">${player.club}</div>
                <div class="player-meta" title="${player.nationality} • ${player.valueStr}">${player.nationality} • ${player.valueStr}</div>
            `;
        } else {
            playerCard.classList.remove("filled");
            playerCard.classList.add("empty");
            playerCard.innerHTML = `<div class="player-icon">👤</div><div class="player-name">Vago</div><div class="player-meta">Clique no +</div>`;
        }
    });
    
    calculateTotalValue();
    alert(`Time do ${clubName} montado com sucesso!`);
    return true;
}

// Função para mudar a formação (PRESERVA OS JOGADORES)
function changeFormation(formation) {
    const oldFormation = currentFormation;
    currentFormation = formation;
    document.getElementById("formationBtn").innerHTML = formation + " ▼";
    
    const attackRow = document.getElementById("attackRow");
    const midfieldRow = document.getElementById("midfieldRow");
    const defenseRow = document.getElementById("defenseRow");
    const currentPlayers = [...currentLineup];
    const oldConfig = formationPositionMap[oldFormation];
    const newConfig = formationPositionMap[formation];
    
    if (!oldConfig || !newConfig) {
        clearLineup();
        adjustRowDisplay(attackRow, formations[formation].attack);
        adjustRowDisplay(midfieldRow, formations[formation].midfield);
        adjustRowDisplay(defenseRow, formations[formation].defense);
        reindexSlots();
        calculateTotalValue();
        return;
    }
    
    // Mapear jogadores por posição na formação antiga
    const playersByOldPosition = {};
    for (let i = 0; i < oldConfig.positions.length; i++) {
        const position = oldConfig.positions[i];
        const slotIndex = oldConfig.indices[i];
        const player = currentPlayers[slotIndex];
        if (player && player.id !== -1) {
            if (!playersByOldPosition[position]) playersByOldPosition[position] = [];
            playersByOldPosition[position].push(player);
        }
    }
    
    // Coletar jogadores em posições não mapeadas
    currentPlayers.forEach((player, idx) => {
        if (player && player.id !== -1) {
            const oldSlotIndex = oldConfig.indices.indexOf(idx);
            if (oldSlotIndex === -1) {
                if (!playersByOldPosition["outros"]) playersByOldPosition["outros"] = [];
                playersByOldPosition["outros"].push(player);
            }
        }
    });
    
    const newLineup = Array(20).fill(null);
    let availablePlayers = [];
    
    // Realocar jogadores para a nova formação
    for (let i = 0; i < newConfig.positions.length; i++) {
        const targetPosition = newConfig.positions[i];
        const targetIndex = newConfig.indices[i];
        let playerToPlace = null;
        
        if (playersByOldPosition[targetPosition] && playersByOldPosition[targetPosition].length > 0) {
            playerToPlace = playersByOldPosition[targetPosition].shift();
        }
        if (!playerToPlace) {
            const compatiblePositions = compatiblePositionsMap[targetPosition] || [targetPosition];
            for (const compatPos of compatiblePositions) {
                if (playersByOldPosition[compatPos] && playersByOldPosition[compatPos].length > 0) {
                    playerToPlace = playersByOldPosition[compatPos].shift();
                    break;
                }
            }
        }
        if (playerToPlace) newLineup[targetIndex] = playerToPlace;
    }
    
    // Coletar jogadores não alocados
    for (const position in playersByOldPosition) {
        if (playersByOldPosition[position] && playersByOldPosition[position].length > 0) {
            availablePlayers.push(...playersByOldPosition[position]);
        }
    }
    
    // Preencher slots vazios com os jogadores restantes
    for (let i = 0; i < newConfig.positions.length; i++) {
        const targetIndex = newConfig.indices[i];
        if (!newLineup[targetIndex] && availablePlayers.length > 0) {
            newLineup[targetIndex] = availablePlayers.shift();
        }
    }
    
    currentLineup = newLineup;
    
    const formationConfig = formations[formation];
    if (formationConfig) {
        adjustRowDisplay(attackRow, formationConfig.attack);
        adjustRowDisplay(midfieldRow, formationConfig.midfield);
        adjustRowDisplay(defenseRow, formationConfig.defense);
    }
    
    reindexSlots();
    
    const allSlots = document.querySelectorAll(".player-slot:not(.hidden-slot)");
    allSlots.forEach((slot, index) => {
        const player = currentLineup[index];
        const playerCard = slot.querySelector(".player-card");
        if (player && player.id !== -1) {
            const playerImage = getPlayerImage(player.name);
            const clubShield = getClubShield(player.club);
            playerCard.classList.remove("empty");
            playerCard.classList.add("filled");
            playerCard.innerHTML = `
                <div class="player-icon">${playerImage ? `<img src="${playerImage}" onerror="this.src='${clubShield || player.flag}'">` : (clubShield ? `<img src="${clubShield}">` : player.flag)}</div>
                <div class="player-name" title="${player.name}">${player.name}</div>
                <div class="player-meta" title="${player.club}">${player.club}</div>
                <div class="player-meta" title="${player.nationality} • ${player.valueStr}">${player.nationality} • ${player.valueStr}</div>
            `;
        } else {
            playerCard.classList.remove("filled");
            playerCard.classList.add("empty");
            playerCard.innerHTML = `<div class="player-icon">👤</div><div class="player-name">Vago</div><div class="player-meta">Clique no +</div>`;
        }
    });
    
    calculateTotalValue();
}

function adjustRowDisplay(row, count) {
    if (!row) return;
    const slots = row.querySelectorAll(".player-slot");
    slots.forEach((slot, index) => {
        if (index < count) {
            slot.style.display = "flex";
            if (slot.classList.contains("hidden-slot")) slot.classList.remove("hidden-slot");
        } else {
            slot.style.display = "none";
            if (!slot.classList.contains("hidden-slot")) slot.classList.add("hidden-slot");
        }
    });
}

function reindexSlots() {
    const allSlots = document.querySelectorAll(".player-slot:not(.hidden-slot)");
    allSlots.forEach((slot, newIndex) => slot.setAttribute("data-index", newIndex));
}

function clearLineup() {
    currentLineup = Array(20).fill(null);
    document.querySelectorAll(".player-slot").forEach(slot => {
        const playerCard = slot.querySelector(".player-card");
        playerCard.classList.remove("filled");
        playerCard.classList.add("empty");
        playerCard.innerHTML = `<div class="player-icon">👤</div><div class="player-name">Vago</div><div class="player-meta">Clique no +</div>`;
    });
    calculateTotalValue();
}

function saveLineup() {
    const nameInput = document.getElementById("lineupName");
    const name = nameInput ? nameInput.value.trim() : "";
    if (!name) { alert("Por favor, insira um nome para a escalação!"); return; }
    const hasPlayers = currentLineup.some(p => p !== null);
    if (!hasPlayers) { alert("Adicione pelo menos um jogador antes de salvar!"); return; }
    const lineup = { id: Date.now(), name: name, players: [...currentLineup], formation: currentFormation, date: new Date().toLocaleDateString() };
    savedLineups.unshift(lineup);
    if (savedLineups.length > 5) savedLineups.pop();
    localStorage.setItem('fantasyLineups', JSON.stringify(savedLineups));
    renderSavedLineups();
    if (nameInput) nameInput.value = "";
    alert(`Escalação "${name}" salva com sucesso!`);
}

function renderSavedLineups() {
    const container = document.getElementById("savedLineups");
    if (!container) return;
    if (savedLineups.length === 0) {
        container.innerHTML = '<p style="font-size: 13px; color: #e0e0e0;">Nenhuma escalação salva ainda.</p>';
        return;
    }
    container.innerHTML = savedLineups.map(lineup => `
        <div class="saved-lineup-item" data-id="${lineup.id}">
            <strong>${lineup.name}</strong><br>
            <small>${lineup.date} - ${lineup.formation}</small>
            <span style="float: right; color: #ffd966;">↻ carregar</span>
        </div>
    `).join("");
    document.querySelectorAll(".saved-lineup-item").forEach(item => {
        item.addEventListener("click", () => loadLineup(parseInt(item.dataset.id)));
    });
}

function loadLineup(id) {
    const lineup = savedLineups.find(l => l.id === id);
    if (!lineup) return;
    if (lineup.formation && lineup.formation !== currentFormation) changeFormation(lineup.formation);
    currentLineup = [...lineup.players];
    const allSlots = document.querySelectorAll(".player-slot:not(.hidden-slot)");
    allSlots.forEach((slot, index) => {
        const player = currentLineup[index];
        const playerCard = slot.querySelector(".player-card");
        if (player) {
            const playerImage = getPlayerImage(player.name);
            const clubShield = getClubShield(player.club);
            playerCard.classList.remove("empty");
            playerCard.classList.add("filled");
            playerCard.innerHTML = `
                <div class="player-icon">${playerImage ? `<img src="${playerImage}" onerror="this.src='${clubShield || player.flag}'">` : (clubShield ? `<img src="${clubShield}">` : player.flag)}</div>
                <div class="player-name" title="${player.name}">${player.name}</div>
                <div class="player-meta" title="${player.club}">${player.club}</div>
                <div class="player-meta" title="${player.nationality} • ${player.valueStr}">${player.nationality} • ${player.valueStr}</div>
            `;
        } else {
            playerCard.classList.remove("filled");
            playerCard.classList.add("empty");
            playerCard.innerHTML = `<div class="player-icon">👤</div><div class="player-name">Vago</div><div class="player-meta">Clique no +</div>`;
        }
    });
    const nameInput = document.getElementById("lineupName");
    if (nameInput) nameInput.value = lineup.name;
    calculateTotalValue();
    alert(`Escalação "${lineup.name}" carregada!`);
}

function openFilterModal(modalId) { document.getElementById(modalId).classList.add("active"); }
function closeFilterModal(modalId) { document.getElementById(modalId).classList.remove("active"); }

// Configurar eventos
function setupEventListeners() {
    document.querySelectorAll(".plus-btn").forEach(btn => {
        btn.addEventListener("click", (e) => {
            e.stopPropagation();
            const slot = btn.closest(".player-slot");
            if (slot && slot.style.display !== "none") openPositionModal(slot);
        });
    });

    document.getElementById("formationBtn")?.addEventListener("click", () => openFilterModal("formationModal"));
    document.querySelectorAll(".formation-option").forEach(opt => {
        opt.addEventListener("click", () => { changeFormation(opt.dataset.formation); closeFilterModal("formationModal"); });
    });

    document.getElementById("closeModalBtn")?.addEventListener("click", () => {
        document.getElementById("playerModal").classList.remove("active");
        currentSlot = null;
    });
    document.getElementById("playerModal")?.addEventListener("click", (e) => {
        if (e.target === document.getElementById("playerModal")) {
            document.getElementById("playerModal").classList.remove("active");
            currentSlot = null;
        }
    });

    document.getElementById("playerSearchInput")?.addEventListener("input", (e) => {
        modalSearchText = e.target.value;
        renderPlayersList();
    });
    document.getElementById("filterClubBtnModal")?.addEventListener("click", () => openFilterModal("clubFilterModal"));
    document.getElementById("filterCountryBtnModal")?.addEventListener("click", () => openFilterModal("countryFilterModal"));
    document.getElementById("filterValueBtnModal")?.addEventListener("click", () => openFilterModal("valueFilterModal"));
    document.getElementById("filterPositionBtnModal")?.addEventListener("click", () => openFilterModal("positionFilterModal"));
    document.getElementById("clearFiltersBtn")?.addEventListener("click", clearModalFilters);

    document.querySelectorAll("#clubFilterList .filter-option").forEach(opt => {
        opt.addEventListener("click", () => {
            modalCurrentClubFilter = opt.dataset.club;
            closeFilterModal("clubFilterModal");
            renderPlayersList();
        });
    });
    document.querySelectorAll("#countryFilterList .filter-option").forEach(opt => {
        opt.addEventListener("click", () => {
            modalCurrentCountryFilter = opt.dataset.country;
            closeFilterModal("countryFilterModal");
            renderPlayersList();
        });
    });
    document.querySelectorAll("#valueFilterList .filter-option").forEach(opt => {
        opt.addEventListener("click", () => {
            modalCurrentValueRange = opt.dataset.value;
            closeFilterModal("valueFilterModal");
            renderPlayersList();
        });
    });
    document.querySelectorAll("#positionFilterList .filter-option").forEach(opt => {
        opt.addEventListener("click", () => {
            modalCurrentPositionFilter = opt.dataset.position;
            closeFilterModal("positionFilterModal");
            renderPlayersList();
        });
    });

    document.querySelectorAll(".close-club, .close-country, .close-value, .close-position, .close-formation").forEach(btn => {
        btn.addEventListener("click", () => btn.closest(".modal-overlay").classList.remove("active"));
    });
    document.querySelectorAll(".modal-overlay").forEach(modal => {
        modal.addEventListener("click", (e) => { if (e.target === modal) modal.classList.remove("active"); });
    });

    // Times na lateral - PREENCHE O TIME INTEIRO
    document.querySelectorAll(".team-row").forEach(team => {
        team.addEventListener("click", () => {
            const teamName = team.querySelector("span:last-child").textContent;
            if (confirm(`Deseja preencher toda a escalação com os jogadores do ${teamName}?`)) {
                fillTeamWithClub(teamName);
            }
        });
    });

    const globalSearch = document.getElementById("globalSearch");
    if (globalSearch) {
        globalSearch.addEventListener("input", (e) => {
            const searchTerm = e.target.value;
            if (searchTerm.length > 0 && currentSlot) {
                modalSearchText = searchTerm;
                modalCurrentClubFilter = "all";
                modalCurrentCountryFilter = "all";
                modalCurrentValueRange = "all";
                modalCurrentPositionFilter = "all";
                renderPlayersList();
                document.getElementById("playerModal").classList.add("active");
            }
        });
    }

    document.getElementById("clearLineupBtn")?.addEventListener("click", clearLineup);
    document.getElementById("saveLineupBtn")?.addEventListener("click", saveLineup);
}

// Inicializar
document.addEventListener("DOMContentLoaded", () => {
    renderSavedLineups();
    setupEventListeners();
    changeFormation("4-3-3");
});