import { Tarjeta } from "./components/Tarjeta/Tarjeta.js";

function App() {
  return (
    <div className="min-h-screen bg-gray-100 flex items-center justify-center p-8">
      <Tarjeta
        nombre="Morty Smith"
        especie="Humano"
        imagen="https://rickandmortyapi.com/api/character/avatar/2.jpeg"
        ubicacion="Citadel of Ricks"
        origen="Pilot"
        estado="Desconocido"
        esFavorito={true}
        onClick={() => alert("Haz hecho clic en la tarjeta")}
      />
    </div>
  );
}

export default App;
