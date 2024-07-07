import axios from 'axios';

export const FETCH_BOOKS_REQUEST = 'FETCH_BOOKS_REQUEST';
export const FETCH_BOOKS_SUCCESS = 'FETCH_BOOKS_SUCCESS';
export const FETCH_BOOKS_FAILURE = 'FETCH_BOOKS_FAILURE';
export const SORT_BOOKS = 'SORT_BOOKS';

export const fetchBooksRequest = () => ({
  type: FETCH_BOOKS_REQUEST,
});

export const fetchBooksSuccess = (data) => ({
  type: FETCH_BOOKS_SUCCESS,
  payload: data,
});

export const fetchBooksFailure = (error) => ({
  type: FETCH_BOOKS_FAILURE,
  payload: error,
});

export const sortBooks = (sortBy, order) => ({
  type: SORT_BOOKS,
  payload: { sortBy, order },
});

export const fetchBooks = () => {
  return (dispatch) => {
    dispatch(fetchBooksRequest());
    axios
      .get('https://api.nytimes.com/svc/books/v3/lists/current/hardcover-fiction.json?api-key=your_api_key')
      .then((response) => {
        dispatch(fetchBooksSuccess(response.data.results.books));
      })
      .catch((error) => {
        dispatch(fetchBooksFailure(error.message));
      });
  };
};
