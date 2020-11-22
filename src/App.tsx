import React from 'react';
import { StateProvider } from './state/StateContext';
import { stateReducer } from './state/reducer';
import { initialState } from './state/InitialState';
import { SearchBar } from './components/homePage/SearchBar';
import { HomeList } from './components/homePage/HomeList';
import { Modal } from './components/Modal';

import './Style/App.css';

export const App = (): JSX.Element => {
  return (
    <StateProvider reducer={stateReducer} initialState={initialState}>
      <div className='App ui container'>
        <SearchBar />
        <HomeList />
      </div>
      <Modal />
    </StateProvider>
  );
};
