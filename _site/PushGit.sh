#!/bin/bash

# Script mejorado para despliegue del portafolio
# Autor: Edisson Giovanni Zuñiga Lopez
# Email: giovanemere@gmail.com

# Colores para output
RED='\033[0;31m'
GREEN='\033[0;32m'
YELLOW='\033[1;33m'
BLUE='\033[0;34m'
NC='\033[0m' # No Color

# Función para mostrar mensajes con colores
print_message() {
    echo -e "${2}${1}${NC}"
}

# Función para mostrar el banner
show_banner() {
    echo -e "${BLUE}"
    echo "╔══════════════════════════════════════════════════════════════╗"
    echo "║                    PORTFOLIO DEPLOYMENT                      ║"
    echo "║              Edisson Giovanni Zuñiga Lopez                   ║"
    echo "║                  Arquitecto DevOps Senior                    ║"
    echo "╚══════════════════════════════════════════════════════════════╝"
    echo -e "${NC}"
}

# Función para verificar si estamos en un repositorio git
check_git_repo() {
    if [ ! -d ".git" ]; then
        print_message "❌ Error: No estás en un repositorio Git" $RED
        exit 1
    fi
}

# Función para verificar el estado del repositorio
check_git_status() {
    if [ -n "$(git status --porcelain)" ]; then
        print_message "📝 Hay cambios pendientes por confirmar" $YELLOW
        git status --short
        return 0
    else
        print_message "✅ El repositorio está limpio" $GREEN
        return 1
    fi
}

# Función para construir el sitio Jekyll
build_jekyll() {
    print_message "🔨 Construyendo el sitio Jekyll..." $BLUE
    
    if command -v bundle &> /dev/null; then
        if [ -f "Gemfile" ]; then
            bundle install --quiet
            bundle exec jekyll build
        else
            jekyll build
        fi
    else
        print_message "⚠️  Bundle no encontrado, usando Jekyll directamente" $YELLOW
        jekyll build
    fi
    
    if [ $? -eq 0 ]; then
        print_message "✅ Sitio construido exitosamente" $GREEN
    else
        print_message "❌ Error al construir el sitio" $RED
        exit 1
    fi
}

# Función principal de despliegue
deploy() {
    local commit_message="$1"
    
    # Verificar si hay cambios
    if check_git_status; then
        # Agregar todos los archivos
        print_message "📦 Agregando archivos al staging..." $BLUE
        git add .
        
        # Confirmar cambios
        print_message "💾 Confirmando cambios..." $BLUE
        if [ -n "$commit_message" ]; then
            git commit -m "$commit_message"
        else
            git commit -m "🚀 Actualización del portafolio - $(date '+%Y-%m-%d %H:%M:%S')"
        fi
        
        # Subir cambios
        print_message "🚀 Desplegando a GitHub Pages..." $BLUE
        git push origin main
        
        if [ $? -eq 0 ]; then
            print_message "✅ Despliegue exitoso!" $GREEN
            print_message "🌐 Tu sitio estará disponible en: https://giovanemere.github.io/Edisson-Giovanni-Z-Lopez/" $BLUE
            print_message "⏱️  Puede tomar unos minutos en actualizarse" $YELLOW
        else
            print_message "❌ Error en el despliegue" $RED
            exit 1
        fi
    else
        print_message "ℹ️  No hay cambios para desplegar" $BLUE
    fi
}

# Función para mostrar ayuda
show_help() {
    echo -e "${BLUE}Uso del script:${NC}"
    echo "  ./PushGit.sh [mensaje]     - Desplegar con mensaje personalizado"
    echo "  ./PushGit.sh --build      - Solo construir el sitio"
    echo "  ./PushGit.sh --status     - Mostrar estado del repositorio"
    echo "  ./PushGit.sh --help       - Mostrar esta ayuda"
    echo ""
    echo -e "${BLUE}Ejemplos:${NC}"
    echo "  ./PushGit.sh \"Actualización de diseño\""
    echo "  ./PushGit.sh --build"
    echo "  ./PushGit.sh --status"
}

# Función para mostrar información del proyecto
show_info() {
    echo -e "${BLUE}📊 Información del Proyecto:${NC}"
    echo "  Repositorio: $(git remote get-url origin 2>/dev/null || echo 'No configurado')"
    echo "  Rama actual: $(git branch --show-current 2>/dev/null || echo 'No disponible')"
    echo "  Último commit: $(git log -1 --pretty=format:'%h - %s (%cr)' 2>/dev/null || echo 'No disponible')"
    echo "  Archivos modificados: $(git status --porcelain | wc -l)"
}

# Script principal
main() {
    show_banner
    check_git_repo
    
    case "$1" in
        --help|-h)
            show_help
            ;;
        --build|-b)
            build_jekyll
            ;;
        --status|-s)
            show_info
            check_git_status
            ;;
        --info|-i)
            show_info
            ;;
        *)
            show_info
            echo ""
            deploy "$1"
            ;;
    esac
}

# Ejecutar script principal
main "$@"
