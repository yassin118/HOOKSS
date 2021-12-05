import React from 'react'
import { useParams } from 'react-router-dom'

function Trailer({ movies }) {
    let { id } = useParams();
    const movie = movies.find((e) => id === e.id);

    return (
        <div className="trailer-main">
            <iframe
                title="trailer"
                width="800"
                height="350"
            ></iframe>
        </div>
    )
}

export default Trailer