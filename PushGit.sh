#/bin/bash
clear

# set variables
username=$1
token=$2
repo=$3
comment=$4

# Ejecucion

    cd /home/giovanemere/Aprovisionamiento_Linux
    git clone https://$username:$token@github.com/$repo
    git status
    git add .
    git commit -m "add Components"
    git push origin master
