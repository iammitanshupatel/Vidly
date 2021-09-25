import React from "react";
import { getMovies } from "../services/fakeMovieService";
import Like from "./common/like";

class Movies extends React.Component {
  state = {
    movies: getMovies(),
  };
  handleDelete = (movie) => {
    const movies = this.state.movies.filter((m) => m._id !== movie._id);
    this.setState({ movies });
  };
  handleLike = (movie) => {
    const movies = [...this.state.movies];
    const index = movies.indexOf(movie);
    movies[index].liked = !movies[index].liked;
    this.setState({ movies });
  };
  render() {
    const { length: moviesCount } = this.state.movies;
    if (moviesCount === 0) {
      return <p>There are no movies in database</p>;
    }
    return (
      <>
        <p>Showing {moviesCount} movies in the database</p>
        <table className="table">
          <thead>
            <tr>
              <th>Title</th>
              <th>Genre</th>
              <th>Stock</th>
              <th>Rate</th>
              <th></th>
              <th></th>
            </tr>
          </thead>
          <tbody>
            {this.state.movies.map((x) => {
              return (
                <tr key={x._id}>
                  <td>{x.title}</td>
                  <td>{x.genre.name}</td>
                  <td>{x.numberInStock}</td>
                  <td>{x.dailyRentalRate}</td>
                  <td>
                    <Like
                      toggleClick={() => this.handleLike(x)}
                      liked={x.liked}
                    />
                  </td>
                  <td>
                    <button
                      onClick={() => this.handleDelete(x)}
                      className="btn btn-danger btn-sm"
                    >
                      Delete
                    </button>
                  </td>
                </tr>
              );
            })}
          </tbody>
        </table>
      </>
    );
  }
}

export default Movies;
