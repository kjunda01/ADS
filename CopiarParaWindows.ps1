# Diretório de origem onde os arquivos estão localizados
$SOURCE_DIR = "vscode-config"

# Diretório de destino para colar os arquivos
$DEST_DIR = "$env:APPDATA\Code\User"

# Copiar settings.json
Copy-Item "$SOURCE_DIR\settings.json" -Destination $DEST_DIR -Force

# Copiar keybindings.json
Copy-Item "$SOURCE_DIR\keybindings.json" -Destination $DEST_DIR -Force

# Mensagem de sucesso
Write-Host "Configurações do VS Code coladas em $DEST_DIR"
