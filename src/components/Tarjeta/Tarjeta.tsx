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
}) => {
  return (
    <div
      className="flex gap-4 p-4 bg-white rounded-xl shadow-md hover:shadow-lg transition cursor-pointer max-w-md"
      onClick={onClick}
    >
      <img
        src={imagen}
        alt={nombre}
        className="w-24 h-24 rounded-full object-cover"
      />

      <div className="flex flex-col justify-center flex-1">
        <div className="flex items-center justify-between mb-1">
          <h2 className="text-xl font-bold text-gray-900">{nombre}</h2>
          <span className="text-yellow-400 text-lg">
            {esFavorito ? "★" : "☆"}
          </span>
        </div>

        <p className="text-sm text-gray-500 mb-1">{especie}</p>
        <p className="text-sm text-gray-600">
          <span className="font-medium">Última ubicación:</span> {ubicacion}
        </p>
        <p className="text-sm text-gray-600">
          <span className="font-medium">Primera aparición:</span> {origen}
        </p>
        <p
          className={`text-sm font-semibold mt-1 ${
            estado === "Vivo"
              ? "text-green-500"
              : estado === "Muerto"
              ? "text-red-500"
              : "text-gray-500"
          }`}
        >
          {estado}
        </p>
      </div>
    </div>
  );
};
