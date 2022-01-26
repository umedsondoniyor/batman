import React, { Component } from "react";
import Moment from "react-moment";
import Details from "./Details";

class Movie extends Component {
  state = {
    detailsRequested: false,
    more_details: undefined,
  };

  handleDetailsRequest = () => {
    this.setState((prevState) => ({
      detailsRequested: !prevState.detailsRequested,
    }));
  };

  handleDetailsFetch = (more_details) => {
    this.setState({ more_details });
  };

  render() {
    const { movie } = this.props;
    const { detailsRequested, more_details } = this.state;
    return (
      <div className="col-md-12">
        <div className="card mb-3 bg-dark text-white border-warning text-center text-yellow">
          <div className="row no-gutters">
            <div className="col-md-4">
              {movie.show.image ? (
                <img
                  src={movie.show.image.medium}
                  className="card-img"
                  alt=""
                />
              ) : (
                <img
                  src="https://avatars.githubusercontent.com/u/8350817?v=4"
                  className="card-img"
                  alt="batman"
                />
              )}
            </div>
            <div className="col-md-8">
              <div className="card-body">
                <h5 className="card-title">
                  <i className="fa fa-film"></i> {movie.show.name}
                </h5>
                <p className="card-text">
                  <strong>Type:</strong> {movie.show.type}
                </p>
                <p className="card-text">
                  <strong>Released in:</strong>{" "}
                  <Moment format="DD/MM/YYYY">{movie.show.premiered}</Moment>
                </p>
                <p className="card-text">
                  <strong>Rating: </strong>
                  {movie.show.rating.average}
                </p>

                {detailsRequested && (
                  <Details
                    id={movie.show.id}
                    more_details={more_details}
                    handleDetailsFetch={this.handleDetailsFetch}
                  />
                )}
              </div>
              <div className="card-footer">
                <button
                  className="btn btn-secondary btn-block text-yellow font-weight-bold"
                  onClick={this.handleDetailsRequest}
                >
                  {detailsRequested ? "Hide" : "View More"}
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
export default Movie;
