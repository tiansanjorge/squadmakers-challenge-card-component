# Tarjeta-lib

Librería de componentes de React para mostrar tarjetas de personajes estilo Rick & Morty.

## Instalación

1. Cloná el repositorio o descargá el archivo comprimido `tarjeta-lib-1.0.0.tgz` generado por `npm pack`.
2. Copiá ese archivo `.tgz` al directorio raíz del proyecto donde lo vas a usar.
3. Desde la terminal, en el proyecto destino:

```bash
npm install ./tarjeta-lib-1.0.0.tgz
```

> **Importante**: El archivo `.tgz` debe estar en la raiz del proyecto, desde donde ejecutás el comando.

## Uso

Una vez instalada, podés importar el componente de esta manera:

```tsx
import { Tarjeta } from "tarjeta-lib";

<Tarjeta
  nombre="Rick Sanchez"
  especie="Humano"
  imagen="https://rickandmortyapi.com/api/character/avatar/1.jpeg"
  ultimaUbicacion="Earth (C-137)"
  primeraAparicion="Pilot"
  estado="Vivo"
  esFavorito={true}
  onClick={() => alert("Hiciste clic")}
/>;
```

## Props disponibles

```ts
type TarjetaProps = {
  nombre: string;
  especie: string;
  imagen: string;
  ultimaUbicacion: string;
  primeraAparicion: string;
  estado: "Vivo" | "Muerto" | "Desconocido";
  esFavorito?: boolean;
  onClick?: () => void;
};
```

## Estilos

Esta librería usa Tailwind CSS v3 y es necesario agregar una linea en el archivo `tailwind.config.js` del proyecto donde consumís la librería para que se escaneen sus estilos.

Dentro de la propiedad content agregá esta ruta:
`"./node_modules/tarjeta-lib/dist/components/\*_/_.{js,ts,jsx,tsx}"`

```js
// Ejemplo:
/** @type {import('tailwindcss').Config} \*/
export default {
  content: [
    "./index.html",
    "./src/**/_.{js,ts,jsx,tsx}",
    `./node_modules/tarjeta-lib/dist/components/\*\*/_.{js,ts,jsx,tsx}"`, // ← Agregar esta linea
  ],
  theme: {
    extend: {},
  },
  plugins: [],
};
```
