import { Tarjeta } from "./components/Tarjeta/Tarjeta";

function App() {
  return (
    <div className="min-h-screen bg-gray-100 flex items-center justify-center p-8">
      <Tarjeta
        nombre="Morty Smith"
        especie="Humano"
        imagen="https://rickandmortyapi.com/api/character/avatar/2.jpeg"
        ultimaUbicacion="Citadel of Ricks"
        primeraAparicion="Pilot"
        estado="Vivo"
        esFavorito={true}
        onClick={() => alert("Haz hecho clic en la tarjeta")}
      />
    </div>
  );
}

export default App;
