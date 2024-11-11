export default function Episode(props) {
    const { episodes } = props;


    return (
        <div className="episodes">
            <h1>Episodios</h1>
            <div className="container-episodes">
                {episodes && episodes.length > 0 ? (
                    episodes.map((episode, index) => (
                        <div className="episode-container" key={index}>

                            <div>
                                <h3>{episode.name}</h3>
                                <p>
                                    <span className="text-grey">Fecha de emisión:</span>
                                    <span>{episode.air_date}</span>
                                </p>
                                <p>
                                    <span className="text-grey">Episodio:</span>
                                    <span>{episode.episode}</span>
                                </p>

                                {/* Enlace al episodio */}
                                <p>
                                    <span className="text-grey">Ver episodio:</span>
                                    <a href={episode.url} target="_blank" rel="noopener noreferrer">
                                        Ver en la API
                                    </a>
                                </p>
                            </div>
                        </div>
                    ))
                ) : (
                    <p>No se encontraron episodios.</p>
                )}
            </div>
        </div>
    );
}
