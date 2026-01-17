# 🔄 PROCESO ESTÁNDAR DE ACTUALIZACIÓN CV

## ⚡ Comando Rápido (2 minutos)
```bash
# Ver plan completo
./update-plan.sh

# Actualización completa
./update-cv.sh && ./deploy.sh
```

## 📋 Proceso Detallado

### 1. 📝 Actualizar Datos Centralizados
```bash
nano _data/cv.yml
```
**Actualizar:**
- ✅ Información personal (ubicación, contacto)
- ✅ Experiencia profesional nueva
- ✅ Habilidades y certificaciones
- ✅ Proyectos recientes

### 2. 📄 Actualizar CV Descargable
```bash
# Reemplazar archivo CV
cp nuevo_cv.docx docs/HVEdissonZuniga2026.docx
```

### 3. 🏗️ Regenerar Sitio
```bash
./update-cv.sh
```

### 4. 🚀 Desplegar Cambios
```bash
./deploy.sh
```

### 5. ✅ Verificar Funcionamiento
- **Sitio**: https://giovanemere.github.io/Edisson-Giovanni-Z-Lopez/
- **CV**: https://giovanemere.github.io/Edisson-Giovanni-Z-Lopez/docs/HVEdissonZuniga2026.docx

## 🎯 Checklist de Actualización

- [ ] Actualizar `_data/cv.yml`
- [ ] Reemplazar archivo CV en `docs/`
- [ ] Ejecutar `./update-cv.sh`
- [ ] Ejecutar `./deploy.sh`
- [ ] Verificar sitio live
- [ ] Probar descarga del CV

## 📊 Campos Principales en cv.yml

```yaml
personal:
  location: "Nueva Ciudad, Colombia"  # ← ACTUALIZAR
  phone: "+57 XXX XXX XXXX"         # ← ACTUALIZAR
  
experience:
  - company: "Nueva Empresa"         # ← AGREGAR
    position: "Nuevo Cargo"
    period: "2024 - Presente"
    
skills:
  nueva_categoria:                   # ← AGREGAR
    - name: "Nueva Tecnología"
```

## ⏱️ Frecuencia Recomendada
- **Cambio de trabajo**: Inmediato
- **Nuevas certificaciones**: Mensual
- **Proyectos destacados**: Trimestral
- **Información personal**: Según necesidad

---

**Tiempo total**: 2-5 minutos por actualización
