#!/bin/bash

# Script de build para Jekyll con supresión de advertencias de Sass

echo "🚀 Iniciando build de Jekyll..."

# Configurar variables de entorno
export GEM_HOME="$HOME/.gems"
export PATH="$HOME/.gems/bin:$PATH"

# Limpiar directorio de destino
echo "🧹 Limpiando directorio _site..."
rm -rf _site

# Build para desarrollo (sin baseurl)
if [ "$1" = "dev" ]; then
    echo "🔧 Build para desarrollo..."
    bundle exec jekyll build 2>/dev/null || bundle exec jekyll build
    echo "✅ Build de desarrollo completado"
    echo "📁 Archivos generados en: _site/"
    
# Build para producción (con baseurl)
else
    echo "🏭 Build para producción..."
    bundle exec jekyll build --baseurl "/Edisson-Giovanni-Z-Lopez" 2>/dev/null || bundle exec jekyll build --baseurl "/Edisson-Giovanni-Z-Lopez"
    echo "✅ Build de producción completado"
    echo "📁 Archivos generados en: _site/"
    echo "🌐 Configurado para: https://giovanemere.github.io/Edisson-Giovanni-Z-Lopez"
fi

echo "🎉 Build finalizado exitosamente!"
