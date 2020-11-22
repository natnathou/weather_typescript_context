import React from 'react';
import { displayList } from '../../state/Actions';
import { useDispatch, useGlobalContext } from '../../state/StateContext';
import '../../Style/ResultSearch.css';

export const ResultSearch = (): JSX.Element => {
  const state = useGlobalContext();

  const dispatch = useDispatch();

  const handle_click = (event: React.MouseEvent<HTMLDivElement>) => {
    dispatch(displayList(false));
  };

  const listResult = () => {
    return state.searchCityList.list.data.results.map((datas, index) => {
      return (
        <div
          className='item'
          key={index}
          lat-coord={datas.geometry.lat}
          lng-coord={datas.geometry.lng}
          onClick={handle_click}
        >
          {datas.formatted}
        </div>
      );
    });
  };

  return (
    <div className='ui list divided ResultSearch'>
      {state.searchCityList.display ? listResult() : null}
    </div>
  );
};
