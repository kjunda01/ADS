#!/bin/bash
# Coletar informações do PC
nome_pc=$(hostname)
ip_pc=$(hostname -I | awk '{print $1}')
hora_pc=$(date +"%d-%m-%Y às %Hh %Mm %Ss")

# Criar a mensagem inicial
mensagem_inicial="O SEU COMPUTADOR DESKTOP FOI LIGADO!!\n\n---- Infos do PC ----\nNome do PC: $nome_pc\nIP do PC: $ip_pc\nHora do PC: $hora_pc\n"

# Listar programas abertos
programas_abertos=$(wmctrl -lp | awk 'NR>1 {
    id = $3;  # ID do processo
    title = ""; 
    for (i=4; i<=NF; i++) { 
        title = title $i " ";  # Constrói o título da janela a partir da quarta coluna
    }
    title = substr(title, 1, length(title) - 1);  # Remove o último espaço
    printf "%02d - %s - %s\n", NR - 1, id, title; 
}' | sed 's/kjunda01-desktop//g' | sed 's/^ *//g' | sed 's/ - / - /g')

# Criar a mensagem completa para API
mensagem_api="$mensagem_inicial\n---- Programas abertos ----\n$programas_abertos"

# Enviar a mensagem para a API
curl -G --data-urlencode "text=$mensagem_api" "http://api.callmebot.com/whatsapp.php?source=web&phone=+553599010664&apikey=6890722"

# Enviar a mensagem por e-mail
echo -e "$mensagem_api" | mutt -s "O seu PC DESKTOP foi ligado em $hora_pc" -- sinvaljuniorlms@gmail.com

