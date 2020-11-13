import React from 'react';
import { useDispatch, useGlobalContext } from '../../state/StateContext';
import { updateForm } from '../../state/Actions';
import '../../Style/SearchBar.css';

export const SearchBar = (): JSX.Element => {
  const dispatch = useDispatch();
  const state = useGlobalContext();
  const handle_click = (event: React.ChangeEvent<HTMLInputElement>) => {
    dispatch(updateForm(event.target.value));
  };
  return (
    <div className="SearchBar">
      <div className="ui fluid labeled icon input">
        <div className="ui label">
          <i className="location arrow icon" />
        </div>
        <input
          type="text"
          placeholder="Enter a city..."
          value={state.formValue}
          onChange={handle_click}
        />
        <i className="circular search link icon" />
      </div>
    </div>
  );
};
