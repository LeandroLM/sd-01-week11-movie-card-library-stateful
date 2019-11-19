import React, { Component } from 'react';

import MovieList from './MovieList';
import movies from '../data';

class MovieLibrary extends Component {
  render() {
    return (
      <MovieList movies={movies} />
    );
  }
}

export default MovieLibrary;
