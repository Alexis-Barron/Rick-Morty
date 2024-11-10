import imgRickMorty from "./img/rick-morty.png"
import './App.css';
import { useState } from "react";
import Character from "./components/Character";

function App() {
  const[characters, setCharacters] = useState(null)


  const repApi = async ()=>{
    const api = await fetch("https://rickandmortyapi.com/api/character")
    const characterApi = await api.json()
    setCharacters(characterApi.results)
  }
  return (
    <div className="App">
      <header className="App-header">
        <h1 className="title">Rick & morty</h1>
        {characters ? (
          <Character characters={characters} setCharacters={setCharacters} />
        ):(
          <>
          <img src={imgRickMorty} alt="Rick $ morty" className="img-home"/>
          <button onClick={repApi} className="btn-search">Buscar personajes</button>
          </>
        )}
        
      
      </header>
    </div>
  );
}
export default App;
