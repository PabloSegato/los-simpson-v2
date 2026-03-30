# 🎬 Los Simpson - Springfield Database

Aplicación web interactiva para explorar personajes de Los Simpson usando React y Vite.

## ✨ Características

- 🔍 **Búsqueda** de personajes en tiempo real
- 👥 **Filtros** por género (Masculino/Femenino/Vivos)
- 📄 **Paginación** inteligente
- 📊 Estadísticas de la base de datos

---

## 🛠️ Tecnologías

- **React 19.2.4** - Interfaz de usuario
- **Vite 8.0.1** - Build tool
- **The Simpsons API** - Datos

---

## 🚀 Instalación

```bash
# Clonar
git clone https://github.com/tu-usuario/los-simpson-v2.git
cd los-simpson-v2-main

# Instalar
npm install

# Desarrollar
npm run dev

# Producción
npm run build
```

---

## 📁 Estructura

```
src/
├── components/Cards.jsx      # Tarjetas de personajes
├── hooks/useFetch.jsx        # Hook API
├── App.jsx                   # Componente principal
└── constants.js              # URL API
```

---

## 📖 Scripts

| Comando | Descripción |
|---------|-------------|
| `npm run dev` | Inicia servidor desarrollo |
| `npm run build` | Build producción |
| `npm run lint` | Verificar código |

---

## 🔗 API

**The Simpsons API**: `https://thesimpsonsapi.com/api`

Endpoint: `/characters?page={number}`

---



