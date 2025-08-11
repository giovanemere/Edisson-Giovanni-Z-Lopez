# Edisson Giovanni Zuñiga Lopez - Guía de Desarrollo

## 🚀 Desarrollo Local

### Prerrequisitos
- Ruby 3.2+
- Bundler
- Git

### Instalación
```bash
# Clonar el repositorio
git clone https://github.com/giovanemere/Edisson-Giovanni-Z-Lopez.git
cd Edisson-Giovanni-Z-Lopez

# Instalar dependencias
bundle install
```

### Scripts de Desarrollo

#### Servidor de Desarrollo
```bash
# Iniciar servidor local en http://localhost:4000
./serve.sh
```

#### Build para Producción
```bash
# Build para GitHub Pages
./build.sh

# Build para desarrollo local
./build.sh dev
```

### Comandos Manuales

#### Servidor Local
```bash
bundle exec jekyll serve --baseurl "" --host 0.0.0.0 --port 4000 --livereload
```

#### Build Manual
```bash
# Para producción
bundle exec jekyll build --baseurl "/Edisson-Giovanni-Z-Lopez"

# Para desarrollo
bundle exec jekyll build
```

## 📁 Estructura del Proyecto

```
├── _config.yml          # Configuración de Jekyll
├── assets/
│   └── css/
│       └── style.scss   # Estilos personalizados
├── _site/               # Archivos generados (no versionar)
├── build.sh             # Script de build
├── serve.sh             # Script de servidor de desarrollo
├── Gemfile              # Dependencias Ruby
└── README.md
```

## 🎨 Personalización

Los estilos personalizados se encuentran en `assets/css/style.scss`. Este archivo:
- Importa el tema base `jekyll-theme-architect`
- Añade estilos personalizados
- Incluye mejoras responsivas

## 🚀 Despliegue

El sitio está configurado para desplegarse automáticamente en GitHub Pages:
- URL: https://giovanemere.github.io/Edisson-Giovanni-Z-Lopez
- Branch: `main`
- Directorio: `/` (raíz)

## 📝 Notas Técnicas

### Advertencias de Sass
Las advertencias sobre `@import` son del tema base `jekyll-theme-architect` y no afectan la funcionalidad:
```
DEPRECATION WARNING [import]: Sass @import rules are deprecated...
```
Estas advertencias se suprimen automáticamente en los scripts de build.

### Configuración
- **Baseurl**: `/Edisson-Giovanni-Z-Lopez` para GitHub Pages
- **Tema**: jekyll-theme-architect con personalizaciones
- **Plugins**: jekyll-feed, jekyll-sitemap, jekyll-seo-tag

## 🛠️ Solución de Problemas

### Error de faraday-retry
Si aparece el error "To use retry middleware with Faraday v2.0+, install `faraday-retry` gem":
```bash
bundle install
```

### Problemas de permisos con gems
```bash
export GEM_HOME="$HOME/.gems"
export PATH="$HOME/.gems/bin:$PATH"
gem install bundler
```

### Puerto 4000 en uso
```bash
pkill -f jekyll
```

### Build falla
```bash
# Limpiar y reinstalar dependencias
rm -rf _site
bundle clean --force
bundle install
./build.sh
```

## 📞 Contacto

- **Email**: giovanemere@gmail.com
- **LinkedIn**: [edisson-giovanni-zuñiga-lopez](https://linkedin.com/in/edisson-giovanni-zuñiga-lopez)
- **GitHub**: [giovanemere](https://github.com/giovanemere)
