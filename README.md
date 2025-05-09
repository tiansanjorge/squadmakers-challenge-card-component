# Tarjeta Lib

Librería de componentes desarrollada para el Squadmakers Challenge. Exporta un único componente `Tarjeta`, diseñado para visualizar información de personajes de Rick & Morty.

## 🚀 Instalación

1. Construí el paquete:

```bash
npm run build
npm pack
```

2. Copiá el archivo `.tgz` generado a la raíz del proyecto consumidor.

3. Instalalo localmente:

```bash
npm install ./tarjeta-lib-1.0.0.tgz
```

## 🏗️ Arquitectura

- Componente `Tarjeta` basado en React.
- Estilos con TailwindCSS.
- Exportación de componentes mediante `exports` en `package.json`.
- Compatible con React 18 y 19.

## 📦 Dependencias destacadas

- `react`, `react-dom` (peer dependencies)
- `tailwindcss`
- `vite` para entorno de desarrollo
- `vitest`, `@testing-library/react` para testing
- ESLint y Prettier configurados

## ⚠️ Nota importante

Esta librería fue desarrollada utilizando **TailwindCSS v3**. No es compatible con Tailwind v4 debido a conflictos de compilación al ser utilizada como dependencia empaquetada (`.tgz`).

Esta librería fue construida usando **TailwindCSS v3** para garantizar compatibilidad con consumidores empaquetados mediante `.tgz`, ya que la reciente v4 de Tailwind introduce cambios que afectan a librerías distribuidas en este formato.

## ✅ Testing

```bash
npm run test
```
