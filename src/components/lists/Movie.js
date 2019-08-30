import React from 'react'
import {Link} from 'react-router-dom'
import Moment from 'react-moment'

const Movie = (props) => {

    const {movie} = props

    return (
        
        <div className="col-md-6">
            <div className="card mb-3 bg-dark text-white border-warning">
                <div className="row no-gutters">
                    <div className="col-md-4">
                         <img src={movie.show.image.medium} className="card-img" alt=""/>
                    </div>
                    <div className="col-md-8">
                        <div className="card-body">
                            <h5 className="card-title"><i className="fa fa-film"></i> {movie.show.name}</h5>
                            <p className="card-text"><strong>Type:</strong> {movie.show.type}</p>
                            <p className="card-text"><strong>Released in:</strong> <Moment format="DD/MM/YYYY">{movie.show.premiered}</Moment></p>
                            <p className="card-text"><strong>Rating: </strong>{movie.show.rating.average}</p>                            
                           
                            <Link to={`details/movie/${movie.show.id}`} className="btn btn-secondary btn-block btn-6">
                                View More 
                            </Link>

                        </div>
                    </div>
                </div>
            </div>                           
        </div>
        
    )
}

export default Movie