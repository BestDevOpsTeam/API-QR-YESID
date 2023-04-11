#!/bin/bash
    #clear

#####################################################################################################
# Seccion 1: Variables
var=$1
#####################################################################################################
    #source  gitbash.sh
#####################################################################################################
# Seccion 2: Ayuda
#####################################################################################################

#Ayuda de Shell gitbash 
    if [[ $var == "-h" ]]
    then
        echo '------------------------------------------------------------------------------------'
        echo -e "\t\t# Ejemplo de ejecución gitbash"
        echo '------------------------------------------------------------------------------------'
        echo '# Ejecute gitbash de acuerdo con la estructura:                                                                '
        echo -e '\n # ./gitbash.sh [comentario] [rama]'
        echo -e '\n # ./gitbash.sh "Subir bash" "gh-pages"'
        echo -e "\n-------------------------------Fin del Script---------------------------------------" 
        read -p "Presione la tecla [Enter] para continuar..." readEnterKey          
        exit 0
    fi
#Validar parámetro de Shell gitbash
    if [[ -z $comment ]] || [[ -z $rama ]]  # Si no se envia los patametros
    then
        echo  '------------------------------------------------------------------------------------'
        echo  ' >>> Requiere parametros para ejecutar gitbash.sh. Se recomienda usar la ayuda  >>>>           '
        echo  ' >>> [ ./orquestador.sh -h ] >>>>                          '
        echo  '------------------------------------------------------------------------------------'
        exit 1
    fi