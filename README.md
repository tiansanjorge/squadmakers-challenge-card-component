# Tarjeta-lib

Librería de componentes de React para mostrar tarjetas de personajes estilo Rick & Morty.

## Instalación

1. Cloná el repositorio o descargá el archivo comprimido `tarjeta-lib-1.0.0.tgz` generado por `npm pack`.
2. Copiá ese archivo `.tgz` al directorio raíz del proyecto donde lo vas a usar.
3. Desde la terminal, en el proyecto destino:

```bash
npm install ./tarjeta-lib-1.0.0.tgz
```

> **Importante**: El archivo `.tgz` debe estar en la misma ruta desde donde ejecutás el comando. No se instala desde cualquier lugar del sistema.

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

Esta librería usa Tailwind CSS. Asegurate de tenerlo configurado en tu proyecto para que los estilos se apliquen correctamente.
