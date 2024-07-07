import {
    FETCH_BOOKS_REQUEST,
    FETCH_BOOKS_SUCCESS,
    FETCH_BOOKS_FAILURE,
    SORT_BOOKS,
  } from '../actions/bookActions';
  
  const initialState = {
    loading: false,
    books: [],
    error: '',
    sortBy: 'title',
    order: 'asc',
  };
  
  const booksReducer = (state = initialState, action) => {
    switch (action.type) {
      case FETCH_BOOKS_REQUEST:
        return {
          ...state,
          loading: true,
        };
      case FETCH_BOOKS_SUCCESS:
        return {
          loading: false,
          books: action.payload,
          error: '',
        };
      case FETCH_BOOKS_FAILURE:
        return {
          loading: false,
          books: [],
          error: action.payload,
        };
      case SORT_BOOKS:
        const { sortBy, order } = action.payload;
        const sortedBooks = [...state.books].sort((a, b) => {
          if (a[sortBy] < b[sortBy]) return order === 'asc' ? -1 : 1;
          if (a[sortBy] > b[sortBy]) return order === 'asc' ? 1 : -1;
          return 0;
        });
        return {
          ...state,
          books: sortedBooks,
          sortBy,
          order,
        };
      default:
        return state;
    }
  };
  
  export default booksReducer;
  