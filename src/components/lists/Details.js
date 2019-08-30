import React, { Component } from 'react'
import {Link} from 'react-router-dom'
import axios from 'axios'
import Spinner from '../layout/Spinner';

 class Details extends Component {

    state = {
        image:{},
        more_details:{}
    }

    componentDidMount(){
        axios.get(`http://api.tvmaze.com/shows/${this.props.match.params.id}`)
        .then(res => {        
            console.log(res.data)  
            this.setState({more_details: res.data})
            this.setState({image: res.data.image.original})
        })
       
        .catch(err => console.log(err))
    }
    render() {
        const {image,more_details} = this.state;
        console.log(more_details)
        if (image===undefined||
            more_details===undefined||
            Object.keys(image).length===0||
            Object.keys(more_details).length===0) {
            return <Spinner/>
        } else {
            return (
                <React.Fragment>
                    <Link to="/" className="btn btn-dark btn-sm mb-5">Go Back</Link>

                    <div className="card text-center bg-dark text-white border-warning mt-1">                       
                        <div className="card-header mb-4">
                            <h5><strong>More Details</strong></h5>
                        </div>
                        <div className="col-md-3 mx-auto d-block">
                            <img src={image} className="card-img" alt=""/>
                        </div>
                        <div className="card-body">
                            <h5 className="card-title">{more_details.name} </h5>
                            <div dangerouslySetInnerHTML={{ __html: this.state.more_details.summary }}></div>                            
                        </div>
                        <div className="card-footer text-white">
                        <strong>Average Rating: {more_details.rating.average}</strong>
                        </div>
                    </div>
                    
                </React.Fragment>
            )
        }
    }
}

export default Details
