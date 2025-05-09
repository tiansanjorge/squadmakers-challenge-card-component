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
  return (
    <div
      className="flex gap-4 p-4 bg-white rounded-xl shadow-md hover:shadow-lg transition cursor-pointer max-w-md"
      onClick={onClick}
    >
      {/* Imagen + Estrella */}
      <div className="relative">
        <img
          src={imagen}
          alt={nombre}
          className="w-24 h-24 rounded-full object-cover"
        />
        <button
          onClick={(e) => {
            e.stopPropagation();
            onToggleFavorito?.();
          }}
          className="absolute top-0 left-0 bg-lime-200 rounded-full w-6 h-6 flex items-center justify-center shadow"
          aria-label="Toggle favorito"
        >
          <span className="text-green-700 text-sm leading-none">
            {esFavorito ? "★" : "☆"}
          </span>
        </button>
      </div>

      {/* Contenido */}
      <div className="flex flex-col justify-center flex-1">
        <div className="flex items-center justify-between mb-1">
          <h2 className="text-xl font-bold text-gray-900">{nombre}</h2>
          <span
            className={`text-xs font-semibold px-2 py-1 rounded-full ${
              estado === "Vivo"
                ? "bg-lime-200 text-green-800"
                : estado === "Muerto"
                ? "bg-red-200 text-red-800"
                : "bg-gray-200 text-gray-800"
            }`}
          >
            {estado}
          </span>
        </div>

        <p className="text-sm text-gray-500 mb-1">{especie}</p>
        <p className="text-sm text-gray-600">
          <span className="font-medium">Last known location:</span> {ubicacion}
        </p>
        <p className="text-sm text-gray-600">
          <span className="font-medium">First seen in:</span> {origen}
        </p>
      </div>
    </div>
  );
};
