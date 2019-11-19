import React, { Component } from 'react';

class SearchBar extends Component {
  render() {
    const {
      searchText,
      onSearchTextChange,
      bookmarkedOnly,
      onBookmarkedChange,
      selectedGenre,
      onSelectedGenreChange,
    } = this.props;

    return (
      <form>
        <label>
          Filtrar por:
          <input type="text" value={searchText} onChange={onSearchTextChange} />
        </label>
        <label>
          Somente favoritos
          <input
            name="bookmarked"
            type="checkbox"
            checked={bookmarkedOnly}
            onChange={onBookmarkedChange}
          />
        </label>
        <label>
          Filtrar por gênero:
          <select value={selectedGenre} onChange={onSelectedGenreChange}>
            <option value="">Todos</option>
            <option value="comedy">Comédia</option>
            <option value="fantasy">Fantasia</option>
            <option value="action">Ação</option>
          </select>
        </label>
      </form>
    );
  }
}

export default SearchBar;
