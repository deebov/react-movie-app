import React, { Component } from 'react';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import PropTypes from 'prop-types';
import { compose } from 'recompose';

import { search } from '../../store/actions';
import SearchBar from '../../components/SearchBar/SearchBar';
import MovieCards from '../../components/MovieCards/MovieCards';
import Overlay from '../../components/Overlay/Overlay';
import { addGenres } from '../../utils';
import withLoading from '../../hoc/withLoading';
import withPaginated from '../../hoc/withPaginated/withPaginated';

class Search extends Component {
  state = {
    query: '',
    showOverlay: false,
    results: null,
    pathname: this.props.location.pathname,
    page: 1,
  };

  onInputChangeHandler = event => {
    const query = event.target.value;

    this.setState({ query, showOverlay: query.length });
    // Search for the query
    this.props.onSearch(query, 1);
  };

  static getDerivedStateFromProps(nextProps, state) {
    if (nextProps.location.pathname !== state.pathname) {
      // set state to the initial state if pathname was changed
      return {
        query: '',
        showOverlay: false,
        pathname: nextProps.location.pathname,
        page: 1,
      };
    }

    if (nextProps.results && nextProps.genres) {
      // If query wasn't changed
      if (nextProps.page > state.page) {
        return {
          results: addGenres(
            [...state.results, ...nextProps.results],
            nextProps.genres
          ),
          page: nextProps.page,
        };
        // If query was changed
      } else if (nextProps.page === 1) {
        return {
          results: addGenres(nextProps.results, nextProps.genres),
          page: nextProps.page,
        };
      }
    }

    return null;
  }

  onPaginated = () =>
    this.props.onSearch(this.state.query, this.state.page + 1);

  render() {
    // set the initial `results`
    let results = null;
    if (this.state.results && this.state.showOverlay) {
      // show MovieCards if `results` and `showOverlay`'s value is true
      document.body.style.overflow = 'hidden';
      results = (
        <MovieCardsWithInfiniteScroll
          list={this.state.results}
          loading={this.props.loading}
          onPaginated={this.onPaginated}
          page={!this.props.isLastPage}
          withPaginated
        />
      );
    } else {
      document.body.style.overflow = 'auto';
    }

    return (
      <div>
        <SearchBar
          value={this.state.query}
          onChange={this.onInputChangeHandler}
          loading={!!this.props.loading && !!this.state.showOverlay}
        />
        {this.state.showOverlay ? <Overlay>{results}</Overlay> : null}
      </div>
    );
  }
}

const MovieCardsWithInfiniteScroll = compose(
  withPaginated,
  withLoading
)(MovieCards);

Search.propTypes = {
  results: PropTypes.oneOfType([PropTypes.array, PropTypes.object]),
  genres: PropTypes.oneOfType([PropTypes.array, PropTypes.object]),
  loading: PropTypes.bool,
  isLastPage: PropTypes.bool,
  page: PropTypes.number,
  onSearch: PropTypes.func,
};

const mapStateToProps = state => {
  return {
    results: state.search.results,
    genres: state.genres.genres,
    loading: state.search.loading,
    isLastPage: state.search.requestInfo.isLastPage,
    page: state.search.requestInfo.page,
  };
};

const mapDispatchToProps = dispatch => {
  return {
    onSearch: (query, page) => dispatch(search(query, page)),
  };
};

export default withRouter(
  connect(
    mapStateToProps,
    mapDispatchToProps
  )(Search)
);
