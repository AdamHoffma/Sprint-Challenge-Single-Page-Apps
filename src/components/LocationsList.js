import React, { useEffect, useState } from 'react';
import axios from 'axios';
import LocationCard from "./LocationCard.js"

export default function LocationsList() {
    const [locations, setLocations] = useState([]);
    useEffect(() => {
        axios.get(`https://rickandmortyapi.com/api/location/`)
        .then(response => {
            console.log('location', response)
            setLocations(response.data.results)
        })
        .catch(error => {
            console.log("down", error)
        })
    }, [])
    return ( 
        <section className='location-list grid-view'>
        {locations.map(location => {
            return <div>
                <LocationCard
                name={location.name}
                type={location.type}
                dimension={location.dimension}
                residents={location.residents.length}

                />
            </div>
        })}
        
        
        
        </section>
    )
}


