import React from 'react';
import { ResultSearch } from './ResultSearch';
import { useDispatch, useGlobalContext } from '../../state/StateContext';
import {
  updateForm,
  searchLocationByCityApi,
  displayList,
  getWeatherByCoord,
  displayModal,
} from '../../state/Actions';
import '../../Style/SearchBar.css';

export const SearchBar = (): JSX.Element => {
  const dispatch = useDispatch();
  const state = useGlobalContext();

  const handle_click = (event: React.MouseEvent<HTMLDivElement>) => {
    navigator.geolocation.getCurrentPosition(async (position) => {
      await getWeatherByCoord(
        position.coords.latitude,
        position.coords.longitude,
        dispatch
      );
      dispatch(displayModal(true));
    });
  };

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
        <div className='ui label' onClick={handle_click}>
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
