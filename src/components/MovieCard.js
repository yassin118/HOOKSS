import React from 'react'
import { Link } from 'react-router-dom'



function MovieCard({ movie }) {
    return (
    <div>
        <Link className="link-2" to={`/Trailer/${movie.id}`}>
            <div className="image-container">
                <div>
                    <rate className="stars1" value={movie.rate} editing={false} />
                </div>
                <img style={{width:"150px", height:"200px"}} src={movie.poster} alt={movie.title}></img>
                <b><h6 className="title-img">{movie.title}</h6></b>
            </div>
        </Link>
    </div>
    )
} 

export default MovieCard