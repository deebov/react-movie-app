import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';

import { fetchPopular } from '../../store/actions';
import MovieCards from '../../components/MovieCards/MovieCards';
import { addGenres } from '../../utils';
// import withPaginated from '../../hoc/withPaginated/withPaginated';
import withInfiniteScroll from '../../hoc/withInfiniteScroll/withInfiniteScroll';

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
        <MovieCardsWithInfiniteScroll
          list={this.state.movies}
          page={this.state.page}
          loading={this.props.loading}
          onPaginatedSearch={this.onPaginatedSearch}
        />
      </div>
    );
  }
}

const MovieCardsWithInfiniteScroll = withInfiniteScroll(MovieCards);

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
