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

# Push al repositorio
echo "🌐 Desplegando a GitHub..."
git push origin main

echo "✅ Despliegue completado"
echo "🔗 Sitio se actualizará automáticamente en: https://giovanemere.github.io/Edisson-Giovanni-Z-Lopez/"
echo "⏱️ El despliegue puede tomar 1-2 minutos"
