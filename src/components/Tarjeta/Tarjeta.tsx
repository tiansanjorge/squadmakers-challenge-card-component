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
      className="flex bg-white items-center rounded-lg shadow-md hover:shadow-lg transition cursor-pointer min-w-[31.75rem] max-w-[31.75rem]"
      onClick={onClick}
    >
      {/* Imagen + Estrella */}
      <div className="relative flex-shrink-0 flex items-center justify-center">
        <img
          src={imagen}
          alt={nombre}
          className="w-36 h-36 object-cover rounded-l-lg"
        />
        <button
          onClick={(e) => {
            e.stopPropagation();
            onToggleFavorito?.();
          }}
          className="absolute top-2 left-2 bg-lime-200 rounded-full w-11 h-11 flex items-center justify-center shadow"
          aria-label="Toggle favorito"
        >
          <img src={starSrc} alt={starAlt} className="w-5 h-5" />
        </button>
      </div>

      {/* Contenido */}
      <div className="flex flex-col justify-between font-semibold p-3 w-full h-full min-h-[9rem]">
        <div className="flex flex-1 items-start justify-between mb-1 w-full">
          <div className="flex flex-col">
            <h2 className=" text-gray-800 mb-1">{nombre}</h2>
            <p className="text-sm text-gray-400">{especie}</p>
          </div>
          <span
            className={`text-sm font-semibold px-2 py-1 rounded-full self-start flex items-center gap-1 ${
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
        <div className="flex flex-1 items-center gap-10 text-sm flex-wrap w-full min-h-0">
          <div className="flex flex-col max-w-[50%] overflow-hidden">
            <p className="text-xs font-bold text-gray-400 mb-1">
              Last known location:
            </p>
            <p className=" text-gray-500">{ubicacion}</p>
          </div>
          <div className="flex flex-col max-w-[50%] overflow-hidden">
            <p className="text-xs font-bold text-gray-400 mb-1">
              First seen in:
            </p>
            <p className=" text-gray-500">{origen}</p>
          </div>
        </div>
      </div>
    </div>
  );
};
