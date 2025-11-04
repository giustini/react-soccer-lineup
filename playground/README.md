# ⚽ React Soccer Lineup Playground

Un proyecto playground completo para probar todas las funcionalidades de la librería **react-soccer-lineup** (versión 1.0.0-beta.1).

## 🚀 Tecnologías

- **Vite** - Build tool y dev server rápido
- **React** - Biblioteca de UI
- **TypeScript** - Tipado estático
- **Chakra UI v3** - Sistema de diseño moderno y responsive

## 📦 Instalación

```bash
npm install
```

## 🏃 Ejecutar

```bash
# Modo desarrollo
npm run dev

# Build de producción
npm run build

# Preview del build
npm run preview
```

## ✨ Funcionalidades Probadas

Este playground permite probar todas las funcionalidades de `react-soccer-lineup`:

### Tamaños del Campo
- ✅ `small` - Campo pequeño
- ✅ `normal` - Tamaño normal
- ✅ `big` - Campo grande
- ✅ `responsive` - Responsive (se adapta al contenedor)
- ✅ `fill` - Llena el contenedor

### Patrones del Césped
- ✅ `lines` - Líneas verticales
- ✅ `squares` - Patrón de cuadros
- ✅ `circles` - Patrón de círculos
- ✅ Sin patrón (por defecto)

### Configuraciones de Equipos
- ✅ **4-4-2** - Formación clásica
- ✅ **4-3-3** - Formación ofensiva
- ✅ **3-5-2** - Formación con 3 defensas
- ✅ **4-2-3-1** - Formación con volante creativo

### Posiciones de Jugadores
- ✅ `gk` - Portero
- ✅ `df` - Defensas
- ✅ `cdm` - Centrocampistas defensivos
- ✅ `cm` - Centrocampistas
- ✅ `cam` - Centrocampistas ofensivos
- ✅ `fw` - Delanteros

### Estilos Personalizados
- ✅ Colores de equipos personalizados
- ✅ Colores de bordes
- ✅ Colores de números
- ✅ Colores de nombres
- ✅ Estilos individuales por jugador

### Interactividad
- ✅ Callbacks `onClick` en jugadores
- ✅ Notificaciones toast al seleccionar jugadores
- ✅ Selección visual del jugador seleccionado

### Características Adicionales
- ✅ Solo equipo local
- ✅ Dos equipos (local y visitante)
- ✅ Campo vacío sin jugadores
- ✅ Selector de color del campo

## 🎨 Características de la UI

- ✅ **Totalmente responsive** - Se adapta a móviles, tablets y desktop
- ✅ **Diseño moderno** - Interfaz limpia y cuidada con Chakra UI v3
- ✅ **Ejemplos interactivos** - Múltiples ejemplos para probar todas las funcionalidades
- ✅ **Controles en tiempo real** - Cambia tamaño, patrón, formación y color al instante
- ✅ **Feedback visual** - Notificaciones toast al interactuar con jugadores

## 📚 Estructura del Proyecto

```
playground/
├── src/
│   ├── App.tsx          # Componente principal con todos los ejemplos
│   ├── main.tsx         # Punto de entrada con ChakraProvider
│   └── index.css        # Estilos globales mínimos
├── package.json
└── README.md
```

## 🔧 Scripts Disponibles

- `npm run dev` - Inicia el servidor de desarrollo
- `npm run build` - Crea el build de producción
- `npm run preview` - Previsualiza el build de producción
- `npm run lint` - Ejecuta el linter

## 📝 Notas

- El proyecto utiliza Chakra UI v3, que tiene una API diferente a la v2
- Los componentes de react-soccer-lineup no exportan tipos TypeScript, por lo que se han definido manualmente
- El playground incluye datos de ejemplo con nombres de jugadores reales para mejor visualización

## 📄 Licencia

MIT
