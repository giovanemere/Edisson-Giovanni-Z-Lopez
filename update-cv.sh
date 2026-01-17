#!/bin/bash

echo "🔄 Actualizando sitio web desde datos centralizados..."

# Verificar que existe el archivo de datos
if [ ! -f "_data/cv.yml" ]; then
    echo "❌ Error: No se encuentra _data/cv.yml"
    echo "💡 Ejecuta primero: ./cleanup.sh"
    exit 1
fi

# Regenerar sitio
echo "🏗️ Regenerando sitio web..."
bundle exec jekyll build

# Verificar si hay CV en docs para enlazar
if [ -f "docs/HVEdissonZuniga2026.docx" ]; then
    echo "📄 CV disponible en: docs/HVEdissonZuniga2026.docx"
fi

echo "✅ Sitio actualizado exitosamente"
echo "🌐 Para ver localmente: bundle exec jekyll serve"
