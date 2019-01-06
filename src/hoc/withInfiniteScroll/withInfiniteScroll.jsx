import React from 'react';
import PropTypes from 'prop-types';

const withInfiniteScroll = Component =>
  class WithInfiniteScroll extends React.Component {
    componentDidMount() {
      window.addEventListener('scroll', this.onScroll, false);
    }

    componentWillUnmount() {
      window.removeEventListener('scroll', this.onScroll, false);
    }

    onScroll = () => {
      const list = this.props.list || [];
      if (
        window.innerHeight + window.scrollY >=
          document.body.offsetHeight - 100 &&
        list.length &&
        !this.props.loading &&
        !this.props.error
      ) {
        this.props.onPaginatedSearch();
      }
    };

    render() {
      return (
        <div>
          <Component {...this.props} />
        </div>
      );
    }
  };

withInfiniteScroll.propTypes = {
  Component: PropTypes.element,
};

export default withInfiniteScroll;
