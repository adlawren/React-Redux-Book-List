import React, { Component } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { selectBook } from '../actions/index';

class BookList extends Component {
  renderList() {
    return this.props.books.map(book => {
      return (
        <li
          className="list-group-item"
          key={book.title}
          onClick={() => this.props.selectBook(book)}>
            {book.title}
        </li>
      );
    });
  }

  render() {
    return (
      <ul className="list-group col-sm-4">
        {this.renderList()}
      </ul>
    );
  }
}

function mapStateToProps(state) {
  // Whatever is returned will show up as props in BookList
  return {
    books: state.books
  };
}

function mapDispatchToProps(dispatch) {
  // Whenever selectBook is called, the result should be passed
  // to all of our reducers
  return bindActionCreators({ selectBook }, dispatch);
}

// Promote BookList from a component to a container - it needs to know about this new dispatch method, selectBook, and make it available as a prop
export default connect(mapStateToProps, mapDispatchToProps)(BookList);
