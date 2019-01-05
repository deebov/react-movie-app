import React, { Component } from 'react';
import { connect } from 'react-redux';

import { Movie as MoviePresentational } from '../../components/Movie/Movie';
import { fetchMovie } from '../../store/actions';
import Spinner from '../../components/Spinner/Spinner';

class Movie extends Component {
  componentDidMount() {
    this.props.onFetchMovie(this.props.id);
  }

  render() {
    let movie = null;
    if (this.props.loading) {
      movie = (
        <div style={{ paddingTop: '60px' }}>
          <Spinner />
        </div>
      );
    } else if (this.props.movie) {
      movie = <MoviePresentational movie={this.props.movie} />;
    }
    return <div>{movie}</div>;
  }
}

const mapStateToProps = state => {
  return {
    movie: state.movie.movie,
    loading: state.movie.loading
  };
};

const mapDispatchToProps = dispatch => {
  return {
    onFetchMovie: id => dispatch(fetchMovie(id))
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Movie);
