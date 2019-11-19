import React, { Component } from 'react';

import MovieList from './MovieList';
import SearchBar from './SearchBar';
import data from '../data';

class MovieLibrary extends Component {
  constructor(props) {
    super(props);
    this.state = {
      searchText: '',
      bookmarkedOnly: true,
      selectedGenre: '',
      movies: data,
    };
    this.handleSearchTextChange = this.handleSearchTextChange.bind(this);
    this.handleBookmarkToggling = this.handleBookmarkToggling.bind(this);
    this.handleSelectedGenreChange = this.handleSelectedGenreChange.bind(this);
  }

  handleSearchTextChange(event) {
    this.setState({ searchText: event.target.value.toLowerCase() });
  }

  handleBookmarkToggling(event) {
    this.setState({ bookmarkedOnly: !!event.target.checked });
  }

  handleSelectedGenreChange(event) {
    this.setState({ selectedGenre: event.target.value });
  }

  filteredMovies() {
    const { searchText, bookmarkedOnly, selectedGenre, movies } = this.state;
    let filteredMovies = movies.filter((movie) => {
      const { title, subtitle, storyline } = movie;
      if (title.toLocaleLowerCase().includes(searchText)) return true;
      if (subtitle.toLocaleLowerCase().includes(searchText)) return true;
      if (storyline.toLocaleLowerCase().includes(searchText)) return true;
      return false;
    });

    if (bookmarkedOnly) {
      filteredMovies = filteredMovies.filter((movie) => movie.bookmarked);
    }

    if (selectedGenre) {
      filteredMovies = filteredMovies.filter((movie) => (
        movie.genre === selectedGenre
      ));
    }

    return filteredMovies;
  }

  render() {
    const { searchText, bookmarkedOnly, selectedGenre } = this.state;
    const filteredMovies = this.filteredMovies();

    return (
      <>
        <SearchBar
          searchText={searchText}
          onSearchTextChange={this.handleSearchTextChange}
          bookmarkedOnly={bookmarkedOnly}
          onBookmarkedChange={this.handleBookmarkToggling}
          selectedGenre={selectedGenre}
          onSelectedGenreChange={this.handleSelectedGenreChange}
        />
        <MovieList movies={filteredMovies} />
      </>
    );
  }
}

export default MovieLibrary;
