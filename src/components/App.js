import React from 'react';
import { Provider } from 'react-redux';
import store from '../store';
import BooksList from './BooksList';

const App = () => {
  return (
    <Provider store={store}>
      <div className="App">
        <BooksList />
      </div>
    </Provider>
  );
};

export default App;
