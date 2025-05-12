# Tarjeta Lib

Librería de componentes desarrollada para el Squadmakers Challenge. Exporta un único componente `Tarjeta`, diseñado para visualizar información de personajes de Rick & Morty.

## 🚀 Instalación

1. **Descargá el archivo `.tgz` directamente desde este repositorio** (siempre se encuentra la última versión):

[Descargar tarjeta-lib-1.0.0.tgz](https://github.com/usuario/repo-name/raw/main/tarjeta-lib-1.0.0.tgz)

2. Copiá el archivo a la raíz del proyecto donde lo vas a usar.

3. Instalalo localmente:

```bash
npm install ./tarjeta-lib-1.0.0.tgz
```

---

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

## 📌 Nota sobre compatibilidad

Los proyectos que la utilicen deben estar también configurados con **Tailwind v3**, ya que esta librería fue construida con esa versión para asegurar compatibilidad al empaquetarla como `.tgz`. Tailwind v4 introduce cambios que afectan este formato.

## ✅ Testing

```bash
npm run test
```
