import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';

import { Movie as MoviePresentational } from '../../components/Movie/Movie';
import { fetchMovie } from '../../store/actions';
import Spinner from '../../components/Spinner/Spinner';

class Movie extends Component {
  componentDidMount() {
    // Load movie's detail
    this.props.onFetchMovie(this.props.id);
  }

  render() {
    // set initial movie
    let movie = null;
    if (this.props.loading) {
      // show spinner if movie is being loaded
      movie = (
        <div style={{ paddingTop: '60px' }}>
          <Spinner />
        </div>
      );
    } else if (this.props.movie) {
      // show Movie component if movie is loaded
      movie = <MoviePresentational movie={this.props.movie} />;
    }
    return <div>{movie}</div>;
  }
}

Movie.propTypes = {
  movie: PropTypes.object,
  loading: PropTypes.bool,
  onFetchMovie: PropTypes.func,
};

const mapStateToProps = state => {
  return {
    movie: state.movie.movie,
    loading: state.movie.loading,
  };
};

const mapDispatchToProps = dispatch => {
  return {
    onFetchMovie: id => dispatch(fetchMovie(id)),
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Movie);
