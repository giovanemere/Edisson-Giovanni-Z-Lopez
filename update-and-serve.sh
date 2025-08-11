#!/bin/bash

echo "🚀 Actualizando sitio web con CV actualizado..."

# Construir el sitio
echo "📦 Construyendo el sitio..."
bundle exec jekyll build

# Servir el sitio localmente
echo "🌐 Sirviendo el sitio en http://localhost:4000"
echo "📄 Tu CV actualizado estará disponible en: http://localhost:4000/cv.html"
echo ""
echo "Presiona Ctrl+C para detener el servidor"
echo ""

bundle exec jekyll serve --host 0.0.0.0 --port 4000 --livereload
