import React, { Component } from 'react'
import axios from 'axios'

const Context = React.createContext();

export class Provider extends Component {
    state = {
        movie_list: [],
        heading:'10 Batman Movies List'
    }

    componentDidMount(){
        axios.get(`http://api.tvmaze.com/search/shows?q=:batman&apikey=${process.env.REACT_APP_TVMAZE_KEY}`)
            .then(res => {
                // console.log(res.data)
                this.setState({movie_list: res.data})
            })
            .catch(err => console.log(err))
    }

    render() {
        return (
            <Context.Provider value={this.state}>
                {this.props.children}
            </Context.Provider>
        )
    }
}

export const Consumer = Context.Consumer;
