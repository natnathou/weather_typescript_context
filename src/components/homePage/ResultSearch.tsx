import React from 'react';
import {
  displayList,
  displayModal,
  getWeatherByCoord,
  updateCityName,
} from '../../state/Actions';
import { useDispatch, useGlobalContext } from '../../state/StateContext';
import '../../Style/ResultSearch.css';

export const ResultSearch = (): JSX.Element => {
  const state = useGlobalContext();

  const dispatch = useDispatch();

  const handle_click = async (event: React.MouseEvent<HTMLDivElement>) => {
    const lat = parseFloat(
      event.currentTarget.getAttribute('lat-coord') as string
    );
    const lng = parseFloat(
      event.currentTarget.getAttribute('lng-coord') as string
    );

    await getWeatherByCoord(lat, lng, dispatch);
    let target = event.target as Element;
    dispatch(updateCityName(target.innerHTML));
    dispatch(displayList(false));
    dispatch(displayModal(true));
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
