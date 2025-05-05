// import { render, screen, fireEvent } from "@testing-library/react";
// import { Tarjeta } from "./Tarjeta";
// import type { TarjetaProps } from "./Tarjeta";
// import { vi } from "vitest";

// const mockProps: TarjetaProps = {
//   nombre: "Rick Sanchez",
//   especie: "Humano",
//   imagen: "https://rickandmortyapi.com/api/character/avatar/1.jpeg",
//   ultimaUbicacion: "Earth (C-137)",
//   primeraAparicion: "Pilot",
//   estado: "Vivo",
// };

// describe("Tarjeta", () => {
//   it("renderiza sin errores", () => {
//     render(<Tarjeta {...mockProps} />);
//     expect(screen.getByText("Rick Sanchez")).toBeInTheDocument();
//   });

//   it("muestra la estrella de favorito si esFavorito es true", () => {
//     render(<Tarjeta {...mockProps} esFavorito />);
//     expect(screen.getByText("★")).toBeInTheDocument();
//   });

//   it("muestra la estrella vacía si esFavorito es false o no está", () => {
//     render(<Tarjeta {...mockProps} />);
//     expect(screen.getByText("☆")).toBeInTheDocument();
//   });

//   it("ejecuta onClick al hacer click", () => {
//     const handleClick = vi.fn();
//     render(<Tarjeta {...mockProps} onClick={handleClick} />);
//     fireEvent.click(screen.getByText("Rick Sanchez"));
//     expect(handleClick).toHaveBeenCalledTimes(1);
//   });
// });
