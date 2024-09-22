#!/bin/bash

# Diretório de destino para salvar as configurações
CONFIG_DIR="vscode-config"

# Crie a pasta de destino se não existir
mkdir -p $CONFIG_DIR

# Copiar as configurações (settings.json)
cp ~/.config/Code/User/settings.json $CONFIG_DIR/settings.json

# Copiar os atalhos personalizados (keybindings.json)
cp ~/.config/Code/User/keybindings.json $CONFIG_DIR/keybindings.json

# Exportar as extensões instaladas para extensions.txt
code --list-extensions > $CONFIG_DIR/extensions.txt

# Mensagem de sucesso
echo "Configurações do VS Code exportadas para a pasta $CONFIG_DIR"
