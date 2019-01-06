import React from 'react';

const withInfiniteScroll = Component =>
  class WithInfiniteScroll extends React.Component {
    componentDidMount() {
      window.addEventListener('scroll', this.onScroll, false);
    }

    componentWillUnmount() {
      window.removeEventListener('scroll', this.onScroll, false);
    }

    onScroll = () => {
      if (
        window.innerHeight + window.scrollY >=
          document.body.offsetHeight - 100 &&
        this.props.list.length &&
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

export default withInfiniteScroll;
