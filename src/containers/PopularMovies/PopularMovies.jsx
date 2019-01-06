import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { compose } from 'recompose';

import { fetchPopular } from '../../store/actions';
import MovieCards from '../../components/MovieCards/MovieCards';
import { addGenres } from '../../utils';
import withPaginated from '../../hoc/withPaginated/withPaginated';
import withInfiniteScroll from '../../hoc/withInfiniteScroll/withInfiniteScroll';
import withLoading from '../../hoc/withLoading';

class PopularMovies extends Component {
  state = {
    movies: null,
    page: null,
    _genres: false
  };

  componentDidMount() {
    this.props.onFetchPopular(1);
  }

  static getDerivedStateFromProps(nextProps) {
    if (nextProps.popular && nextProps.genres) {
      return {
        movies: addGenres(nextProps.popular, nextProps.genres),
        page: nextProps.page
      };
    }

    return null;
  }

  onPaginatedSearch = () => this.props.onFetchPopular(this.state.page + 1);

  render() {
    return (
      <div>
        <AdvancedMovieCards
          list={this.state.movies}
          page={this.state.page}
          loading={this.props.loading}
          error={this.props.error}
          onPaginatedSearch={this.onPaginatedSearch}
        />
      </div>
    );
  }
}

const AdvancedMovieCards = compose(
  withPaginated,
  withInfiniteScroll,
  withLoading
)(MovieCards);

PopularMovies.propTypes = {
  popular: PropTypes.oneOfType([PropTypes.array, PropTypes.object]),
  loading: PropTypes.bool,
  genres: PropTypes.oneOfType([PropTypes.array, PropTypes.object]),
  onFetchPopular: PropTypes.func
};

const mapStateToProps = state => {
  return {
    popular: state.popular.movies,
    loading: state.popular.loading,
    genres: state.genres.genres,
    error: state.popular.error,
    page: state.popular.popularInfo.page
  };
};

const mapDispatchToProps = dispatch => {
  return { onFetchPopular: page => dispatch(fetchPopular(page)) };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(PopularMovies);
