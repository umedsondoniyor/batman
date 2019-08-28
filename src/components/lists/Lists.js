import React, { Component } from 'react'
import {Consumer} from '../../context'
import Spinner from '../layout/Spinner'
import List from '../lists/List'

 class Lists extends Component {
    render() {
        return (
            <Consumer>
                {value => {
                    const {movie_list, heading}= value
                   if (movie_list === undefined || movie_list.length === 0) {
                       return <Spinner/>
                   } else {
                       return (
                           <React.Fragment>
                               <h3 className="text-center mb-4">{heading}</h3>
                           <div className="row">
                                {movie_list.map(item => (                                                            
                                    <List key={item.show.id} list={item}/>
                                ))}
                           </div>
                           </React.Fragment>
                       )
                   }
                }}
            </Consumer>
        )
    }
}
export default Lists;