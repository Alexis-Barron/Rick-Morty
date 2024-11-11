import imgRickMorty from "./img/rick-morty.png"
import './App.css'
import { useState } from "react"
import Character from "./components/Character"
import Episode from "./components/Episode"

function App() {
  const [characters, setCharacters] = useState(null)
  const [episodes, setEpisodes] = useState(null)
  const [view, setView] = useState("home")

  const repApi = async () => {
    const api = await fetch("https://rickandmortyapi.com/api/character")
    const characterApi = await api.json()
    setCharacters(characterApi.results)
    setView("characters")
  }

  const repApiep = async () => {
    const api = await fetch("https://rickandmortyapi.com/api/episode")
    const episodeApi = await api.json()
    setEpisodes(episodeApi.results)
    setView("episodes")
  }

  const resetView = () => {
    setCharacters(null)
    setEpisodes(null)
    setView("home")
  }

  return (
    <div className="App">
      <header className="App-header">
        <h1 className="title">Rick & Morty</h1>

        {view === "home" && (
          <>
            <img src={imgRickMorty} alt="Rick y Morty" className="img-home" />
            <button onClick={repApi} className="btn-search">
              Buscar personajes
            </button>
            <br />
            <button onClick={repApiep} className="btn-search">
              Buscar episodios
            </button>
          </>
        )}

        {view === "characters" && characters && (
          <Character characters={characters} setCharacters={setCharacters} />
        )}

        {view === "episodes" && episodes && (
          <Episode episodes={episodes} setEpisodes={setEpisodes} />
        )}

        {(view === "characters" || view === "episodes") && (
          <button onClick={resetView} className="btn-search">
            Volver al home
          </button>
        )}
      </header>

      <footer className="footer">
        <p>&copy; 2024 Rick & Morty App. Alexis Barron.</p>
      </footer>
    </div>
  )
}

export default App
