import React, { useEffect, useState } from 'react';
import axios from 'axios';
import EpisodeCard from "./EpisodeCard.js"

export default function EpisodeList() {
    const [episodes, setEpisodes] = useState([])
    useEffect(() => {
        axios.get(`https://rickandmortyapi.com/api/episode/`)
        .then(response => {
            console.log("episode", response)
            setEpisodes(response.data.results)
        })
        .catch(error => {
            console.log("down", error)
        })
    }, [])
    return (
        <section className="episode-list grid-view">
            {episodes.map(episode => {
                return <div>
                    <EpisodeCard
                        name={episode.name}
                        episode={episode.episode}
                        airdate={episode.air_date}
                        characters={episode.characters.length}
                    />
                </div>
            })}
        
        </section>
    )
}