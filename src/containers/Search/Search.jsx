import React, { Component } from 'react';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import PropTypes from 'prop-types';

import { search } from '../../store/actions';
import SearchBar from '../../components/SearchBar/SearchBar';
import MovieCards from '../../components/MovieCards/MovieCards';
import Overlay from '../../components/Overlay/Overlay';
import { addGenres } from '../../utils';

class Search extends Component {
  state = {
    query: '',
    showOverlay: false,
    results: null,
    pathname: this.props.location.pathname,
  };

  onInputChangeHandler = event => {
    const query = event.target.value;

    this.setState({ query, showOverlay: query.length });
    this.props.onSearch(query);
  };

  static getDerivedStateFromProps(nextProps, state) {
    if (nextProps.location.pathname !== state.pathname) {
      return {
        query: '',
        showOverlay: false,
        pathname: nextProps.location.pathname,
      };
    }

    if (nextProps.results && nextProps.genres && !state._genres) {
      return { results: addGenres(nextProps.results, nextProps.genres) };
    }

    return null;
  }

  render() {
    let results = null;
    if (this.state.results && this.state.showOverlay) {
      document.body.style.overflow = 'hidden';
      results = <MovieCards list={this.state.results} />;
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

Search.propTypes = {
  results: PropTypes.oneOfType([PropTypes.array, PropTypes.object]),
  genres: PropTypes.oneOfType([PropTypes.array, PropTypes.object]),
  loading: PropTypes.bool,
  onSearch: PropTypes.func,
};

const mapStateToProps = state => {
  return {
    results: state.search.results,
    genres: state.genres.genres,
    loading: state.search.loading,
  };
};

const mapDispatchToProps = dispatch => {
  return {
    onSearch: query => dispatch(search(query)),
  };
};

export default withRouter(
  connect(
    mapStateToProps,
    mapDispatchToProps
  )(Search)
);
