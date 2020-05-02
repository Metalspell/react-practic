import React from 'react';
import {moviesData} from'./moviesData';
import './Films.css';


function removeMovie(movie) {
  const updateMovies = this.state.movies.filter(function(item){
    return item.id !== movie.id;
  })
  console.log(updateMovies)
  this.setState({
    movies: updateMovies
  })
}

class Films extends React.Component {
	constructor() {
		super();

		this.state = {
			movies: moviesData
		};
	}

	render() {
		return (
			<div className="filmsList">
				{this.state.movies.map((movie) => {
					return (
						<div>
						<p>{movie.title}</p>
						<button onClick={removeMovie.bind(this, movie) }
						>
							Delete film</button>
						</div>
					);
				})}
			</div>
		)
	}
}

export default Films;