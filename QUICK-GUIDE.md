# 🚀 Guía Rápida de Mantenimiento

## ⚡ Actualización Express (2 minutos)

### 1. Actualizar Información Personal
```bash
# Editar datos centralizados
nano _data/cv.yml

# Regenerar y desplegar
./update-cv.sh && git add . && git commit -m "Update CV" && git push
```

### 2. Cambiar CV Descargable
```bash
# Reemplazar archivo
cp nuevo_cv.pdf docs/
git add docs/ && git commit -m "Update CV document" && git push
```

## 🔧 Comandos Útiles

```bash
# Desarrollo local
bundle exec jekyll serve --livereload

# Build producción
./build.sh

# Ver cambios
git status && git diff

# Despliegue rápido
git add . && git commit -m "Quick update" && git push
```

## 📊 Estructura de Datos (_data/cv.yml)

```yaml
personal:
  name: "Tu Nombre"
  title: "Tu Título"
  # ... más campos

experience:
  - company: "Empresa"
    position: "Cargo"
    period: "2024 - Presente"
    # ... más campos
```

## 🌐 URLs Importantes

- **Sitio**: https://giovanemere.github.io/Edisson-Giovanni-Z-Lopez/
- **Admin**: https://github.com/giovanemere/Edisson-Giovanni-Z-Lopez
- **Actions**: https://github.com/giovanemere/Edisson-Giovanni-Z-Lopez/actions

---
*Para documentación completa ver: [ARCHITECTURE.md](ARCHITECTURE.md)*
