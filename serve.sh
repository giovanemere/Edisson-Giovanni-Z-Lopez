#!/bin/bash

# Script para servidor de desarrollo Jekyll

echo "🚀 Iniciando servidor de desarrollo Jekyll..."

# Configurar variables de entorno
export GEM_HOME="$HOME/.gems"
export PATH="$HOME/.gems/bin:$PATH"

# Verificar si el puerto está en uso
if lsof -Pi :4000 -sTCP:LISTEN -t >/dev/null ; then
    echo "⚠️  El puerto 4000 está en uso. Deteniendo procesos Jekyll..."
    pkill -f jekyll
    sleep 2
fi

echo "🔧 Configuración:"
echo "   - Host: 0.0.0.0"
echo "   - Puerto: 4000"
echo "   - URL: http://localhost:4000"
echo "   - LiveReload: Habilitado"
echo ""

# Iniciar servidor con supresión de advertencias de Sass
echo "🌐 Iniciando servidor..."
bundle exec jekyll serve --baseurl "" --host 0.0.0.0 --port 4000 --livereload 2>/dev/null || \
bundle exec jekyll serve --baseurl "" --host 0.0.0.0 --port 4000 --livereload

echo "🛑 Servidor detenido"
