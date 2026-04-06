#!/bin/bash
echo "========================================"
echo "  DASHSCORE - ATUALIZAR DADOS DO FBREF"
echo "========================================"
echo ""
echo "Atualizando dados..."
echo ""

python3 update_data.py

echo ""
echo "========================================"
echo "  ATUALIZAÇÃO CONCLUÍDA!"
echo "========================================"
read -p "Pressione ENTER para sair..."