import React from 'react'

const List = (props) => {

    const {list} = props

    return (
        
        <div className="col-md-6">
            <div className="card mb-3">
                <div className="row no-gutters">
                    <div className="col-md-4">
                         <img src={list.show.image.medium} className="card-img" alt=""/>
                    </div>
                    <div className="col-md-8">
                        <div className="card-body">
                            <h5 className="card-title"><i className="fa fa-film"></i> {list.show.name}</h5>
                            <p className="card-text"><strong>Type:</strong> {list.show.type} <strong>Released in:</strong> {list.show.premiered}</p>
                            <p className="card-text"><strong>Rating: </strong>{list.show.rating.average}</p>

                            <p className="card-text"><small className="text-muted">{list.show.genres}</small></p>
                        </div>
                    </div>
                </div>
            </div>                           
        </div>
    )
}

export default List