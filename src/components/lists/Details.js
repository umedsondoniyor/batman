import React, { Component } from "react";
import axios from "axios";
import Spinner from "../layout/Spinner";

class Details extends Component {
  state = {
    more_details: undefined
  };

  componentDidMount() {
    const { id, handleDetailsFetch, more_details } = this.props;
    if (!id) return;
    if (!more_details) {
      axios
        .get(`http://api.tvmaze.com/shows/${this.props.id}`)
        .then(res => {
          this.setState({ more_details: res.data });
          handleDetailsFetch(res.data);
        })
        .catch(err => console.log(err));
    } else {
      this.setState({ more_details });
    }
  }
  render() {
    const { more_details } = this.state;
    if (!more_details) {
      return <Spinner />;
    } else {
      return (
        <React.Fragment>
          <div className="card text-center bg-dark text-white border-warning mt-3">
            <div className="card-body">
              <div
                dangerouslySetInnerHTML={{__html: this.state.more_details.summary}}
              ></div>
            </div>        
          </div>
        </React.Fragment>
      );
    }
  }
}

export default Details;
