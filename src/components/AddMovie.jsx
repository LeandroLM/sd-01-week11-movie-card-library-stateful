import React from 'react';
import movieGenres from '../genres';

class AddMovie extends React.Component {
  static newState() {
    return {
      subtitle: '',
      title: '',
      imagePath: '',
      storyline: '',
      rating: 0,
      genre: 'Action',
    };
  }

  constructor(props) {
    super(props);
    this.state = AddMovie.newState();
    this.addMovie = this.addMovie.bind(this);
  }

  addMovie() {
    const { onClick } = this.props;
    onClick(this.state);
    this.setState(AddMovie.newState());
  }

  handleChange(stateProperty, newStateValue) {
    this.setState({ [stateProperty]: newStateValue });
  }

  renderTitleInput() {
    const { title } = this.state;
    const inputIdentifier = 'title';

    return (
      <label htmlFor={inputIdentifier}>
        Título
        {this.renderInput({
          type: 'text',
          id: inputIdentifier,
          initialValue: title,
          mappedState: 'title',
        })}
      </label>
    );
  }

  renderSubtitleInput() {
    const { subtitle } = this.state;
    const inputIdentifier = 'subtitle';

    return (
      <label htmlFor={inputIdentifier}>
        Subtítulo
        {this.renderInput({
          type: 'text',
          id: inputIdentifier,
          initialValue: subtitle,
          mappedState: 'subtitle',
        })}
      </label>
    );
  }

  renderImageInput() {
    const { imagePath } = this.state;
    const inputIdentifier = 'image';

    return (
      <label htmlFor={inputIdentifier}>
        Imagem
        {this.renderInput({
          type: 'text',
          id: inputIdentifier,
          initialValue: imagePath,
          mappedState: 'imagePath',
        })}
      </label>
    );
  }

  renderStorylineInput() {
    const { storyline } = this.state;
    const inputIdentifier = 'storyline';

    return (
      <label htmlFor={inputIdentifier}>
        Sinopse
        <textarea
          id={inputIdentifier}
          value={storyline}
          onChange={(event) => this.handleChange('storyline', event.target.value)}
        />
      </label>
    );
  }

  renderRatingInput() {
    const { rating } = this.state;
    const inputIdentifier = 'rating';

    return (
      <label htmlFor={inputIdentifier}>
        Avaliação
        <input
          type="number"
          step={0.1}
          min={0}
          max={5}
          value={rating}
          onChange={(event) => this.handleChange('rating', parseFloat(event.target.value))}
        />
      </label>
    );
  }

  renderGenreSelection() {
    const { genre } = this.state;
    const inputIdentifier = 'genre';

    return (
      <label htmlFor={inputIdentifier}>
        Movie Genre
        <select value={genre} onChange={(event) => this.handleChange('genre', event.target.value)}>
          {movieGenres.map((movieGenre) => (
            <option
              key={movieGenre}
              value={movieGenre}
            >
              {movieGenre}
            </option>
          ))}
        </select>
      </label>
    );
  }

  renderInput({ type, id, initialValue, mappedState }) {
    return (
      <input
        type={type}
        id={id}
        value={initialValue}
        onChange={(event) => this.handleChange(mappedState, event.target.value)}
      />
    );
  }

  renderSubmitButton() {
    return (
      <button
        type="button"
        onClick={this.addMovie}
      >
        Add movie
      </button>
    );
  }

  render() {
    return (
      <div className="add-movie">
        <form>
          {this.renderTitleInput()}
          {this.renderSubtitleInput()}
          {this.renderImageInput()}
          {this.renderStorylineInput()}
          {this.renderRatingInput()}
          {this.renderGenreSelection()}
          {this.renderSubmitButton()}
        </form>
      </div>
    );
  }
}

export default AddMovie;
