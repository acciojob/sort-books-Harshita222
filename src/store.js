import { createStore, applyMiddleware, combineReducers } from 'redux';
import thunk from 'redux-thunk';
import booksReducer from './reducers/booksReducer';

// Combine all reducers
const rootReducer = combineReducers({
  books: booksReducer,
});

// Create the store with middleware
const store = createStore(rootReducer, applyMiddleware(thunk));

export default store;
