import React, { Component } from 'react';
import { connect } from 'react-redux';
import { fetchPopular } from '../../store/actions';
import MovieCards from '../../components/MovieCards/MovieCards';
import { addGenres } from '../../utils';

class PopularMovies extends Component {
  state = {
    movies: null,
    _genres: false
  };

  async componentDidMount() {
    await this.props.onFetchPopular();
  }

  static getDerivedStateFromProps(nextProps, state) {
    if (nextProps.popular && nextProps.genres && !state._genres) {
      state._genres = true;
      return { movies: addGenres(nextProps.popular, nextProps.genres) };
    }

    return null;
  }

  render() {
    return (
      <div>
        <MovieCards movies={this.state.movies} />
      </div>
    );
  }
}

const mapStateToProps = state => {
  return { popular: state.popular.movies, genres: state.genres.genres };
};

const mapDispatchToProps = dispatch => {
  return { onFetchPopular: () => dispatch(fetchPopular()) };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(PopularMovies);
