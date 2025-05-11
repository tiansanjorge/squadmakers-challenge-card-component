import React from "react";

export interface TarjetaProps {
  nombre: string;
  especie: string;
  imagen: string;
  ubicacion: string;
  origen: string;
  estado: "Vivo" | "Muerto" | "Desconocido";
  esFavorito?: boolean;
  onClick?: () => void;
  onToggleFavorito?: () => void;
}

export const Tarjeta: React.FC<TarjetaProps> = ({
  nombre,
  especie,
  imagen,
  ubicacion,
  origen,
  estado,
  esFavorito = false,
  onClick,
  onToggleFavorito,
}) => {
  const starSrc = esFavorito ? "/star-full.png" : "/star-empty.png";
  const starAlt = esFavorito ? "Quitar de favoritos" : "Agregar a favoritos";

  return (
    <div
      className="flex flex-col sm:flex-row bg-white rounded-lg shadow-md hover:shadow-lg transition cursor-pointer w-full max-w-[31.75rem]"
      onClick={onClick}
    >
      {/* Imagen + Estrella */}
      <div className="relative w-full sm:w-auto">
        <img
          src={imagen}
          alt={nombre}
          className="w-full sm:w-36 h-60 sm:h-36 object-cover rounded-t-lg sm:rounded-t-none sm:rounded-l-lg"
        />
        <button
          onClick={(e) => {
            e.stopPropagation();
            onToggleFavorito?.();
          }}
          className="absolute top-2 right-2 sm:left-2 sm:right-auto bg-lime-200 rounded-full w-11 h-11 flex items-center justify-center shadow"
          aria-label="Toggle favorito"
        >
          <img src={starSrc} alt={starAlt} className="w-5 h-5" />
        </button>
      </div>

      {/* Contenido */}
      <div className="flex flex-col justify-between font-semibold p-3 w-full sm:min-h-[9rem] gap-2">
        <div className="flex items-start justify-between w-full">
          <div>
            <h2 className="text-gray-800 mb-1">{nombre}</h2>
            <p className="text-sm text-gray-400">{especie}</p>
          </div>
          <span
            className={`text-sm font-semibold px-2 py-1 rounded-full flex items-center gap-1 self-start ${
              estado === "Vivo"
                ? "bg-lime-200 text-green-800"
                : estado === "Muerto"
                ? "bg-red-200 text-red-800"
                : "bg-gray-200 text-gray-800"
            }`}
          >
            <img
              src={
                estado === "Vivo"
                  ? "/alive.png"
                  : estado === "Muerto"
                  ? "/dead.png"
                  : "/unknown.png"
              }
              alt={estado}
              className="w-4 h-4"
            />
            {estado}
          </span>
        </div>

        {/* <div className="flex gap-4 text-sm mt-2">
          <div className="grid-cols-6 flex flex-col">
            <p className="text-xs font-bold text-gray-400 mb-1">
              Last known location
            </p>
            <p className="text-gray-500">{ubicacion}</p>
          </div>
          <div className="grid-cols-6 flex flex-col">
            <p className="text-xs font-bold text-gray-400 mb-1">
              First seen in
            </p>
            <p className="text-gray-500">{origen}</p>
          </div>
        </div> */}

        <div className="grid grid-cols-12 gap-4 text-sm mt-2">
          <div className="col-span-6 flex flex-col">
            <p className="text-xs font-bold text-gray-400 mb-1">
              Last known location
            </p>
            <p className="text-gray-500">{ubicacion}</p>
          </div>
          <div className="col-span-6 flex flex-col">
            <p className="text-xs font-bold text-gray-400 mb-1">
              First seen in
            </p>
            <p className="text-gray-500">{origen}</p>
          </div>
        </div>
      </div>
    </div>
  );
};
