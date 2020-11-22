import React from 'react';
import { ResultSearch } from './ResultSearch';
import { useDispatch, useGlobalContext } from '../../state/StateContext';
import {
  updateForm,
  searchLocationByCityApi,
  displayList,
} from '../../state/Actions';
import '../../Style/SearchBar.css';

export const SearchBar = (): JSX.Element => {
  const dispatch = useDispatch();
  const state = useGlobalContext();
  const handle_change = (event: React.ChangeEvent<HTMLInputElement>) => {
    dispatch(updateForm(event.target.value));
    setTimeout(
      () => searchLocationByCityApi(event.target.value, dispatch),
      500
    );
  };
  return (
    <div className='SearchBar'>
      <div className='ui fluid labeled icon input'>
        <div className='ui label'>
          <i className='location arrow icon' />
        </div>
        <input
          type='text'
          placeholder='Enter a city...'
          value={state.formValue}
          onChange={handle_change}
        />
        <i
          className='circular search link icon'
          onClick={() => {
            dispatch(displayList(true));
          }}
        />
      </div>
      <ResultSearch />
    </div>
  );
};
