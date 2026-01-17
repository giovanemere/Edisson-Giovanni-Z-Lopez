#!/bin/bash

echo "🔄 PLAN COMPLETO DE ACTUALIZACIÓN CV"
echo "=================================="

# 1. ACTUALIZAR DATOS CENTRALIZADOS
echo "📝 PASO 1: Actualizar _data/cv.yml"
echo "   - Información personal (ubicación, contacto)"
echo "   - Experiencia profesional nueva"
echo "   - Habilidades y certificaciones"
echo "   - Proyectos recientes"
echo ""

# 2. ACTUALIZAR DOCUMENTO DESCARGABLE
echo "📄 PASO 2: Actualizar CV descargable"
echo "   - Reemplazar docs/HVEdissonZuniga2026.docx"
echo "   - Verificar que el nombre sea consistente"
echo ""

# 3. REGENERAR SITIO
echo "🏗️ PASO 3: Regenerar sitio web"
echo "   - Ejecutar: ./update-cv.sh"
echo "   - Verificar cambios localmente"
echo ""

# 4. DESPLEGAR CAMBIOS
echo "🚀 PASO 4: Desplegar a GitHub"
echo "   - Ejecutar: ./deploy.sh"
echo "   - Verificar en GitHub Pages"
echo ""

# 5. VERIFICAR FUNCIONAMIENTO
echo "✅ PASO 5: Verificar sitio live"
echo "   - Revisar: https://giovanemere.github.io/Edisson-Giovanni-Z-Lopez/"
echo "   - Probar descarga del CV"
echo ""

echo "⚡ COMANDO RÁPIDO COMPLETO:"
echo "./update-cv.sh && ./deploy.sh"
echo ""

echo "📋 CHECKLIST DE ACTUALIZACIÓN:"
echo "□ Actualizar _data/cv.yml"
echo "□ Reemplazar archivo CV en docs/"
echo "□ Ejecutar update-cv.sh"
echo "□ Ejecutar deploy.sh"
echo "□ Verificar sitio live"
