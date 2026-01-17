#!/bin/bash

echo "🚀 Desplegando cambios al repositorio..."

# Verificar que tenemos cambios
if [ -z "$(git status --porcelain)" ]; then
    echo "ℹ️ No hay cambios para desplegar"
    exit 0
fi

# Mostrar cambios
echo "📋 Cambios a desplegar:"
git status --short

# Agregar todos los archivos
git add .

# Commit con mensaje automático
TIMESTAMP=$(date '+%Y-%m-%d %H:%M')
git commit -m "Update CV and site structure - $TIMESTAMP"

# Verificar rama actual y hacer push
CURRENT_BRANCH=$(git branch --show-current)
echo "🌐 Desplegando desde rama: $CURRENT_BRANCH"
git push origin $CURRENT_BRANCH

echo "✅ Despliegue completado"
echo "🔗 Sitio se actualizará automáticamente en: https://giovanemere.github.io/Edisson-Giovanni-Z-Lopez/"
echo "⏱️ El despliegue puede tomar 1-2 minutos"
