import React from 'react';
import { StateProvider } from './state/StateContext';
import { stateReducer } from './state/reducer';
import { initialState } from './state/InitialState';
import { SearchBar } from './components/SearchBar';
import './Style/App.css';

export const App = (): JSX.Element => {
  return (
    <StateProvider reducer={stateReducer} initialState={initialState}>
      <div className="App ui container">
        <SearchBar />
      </div>
    </StateProvider>
  );
};
