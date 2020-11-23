import React from 'react';
import ReactDOM from 'react-dom';
import { City, displayModal, WeatherPrediction } from '../state/Actions';
import { useDispatch, useGlobalContext } from '../state/StateContext';
import { exportDayFromDate } from '../tools/tools';
import '../Style/Modal.css';

interface CityDetails {
  data: WeatherPrediction[];
  details: City;
  error: any;
  display: boolean;
}

export const Modal = () => {
  const state = useGlobalContext();
  const dispatch = useDispatch();
  const display = `${state.cityDetails.display ? `active` : ``}`;

  const handleClick = () => {
    dispatch(displayModal(false));
  };

  const detailsRender = (datas: CityDetails) => {
    return datas.data.map((data, index) => {
      let date = new Date(datas.data[index].dt_txt);
      if (date.getHours() === 12) {
        return (
          <div className='item' key={index}>
            <div className='ui header'>{exportDayFromDate(data.dt_txt)}</div>
            {Math.round(data.main.temp)} °C
            <div
              className='image'
              style={{ width: `50px`, backgroundColor: `#fff` }}
            >
              <img
                alt='icon'
                src={`http://openweathermap.org/img/w/${data.weather[0].icon}.png`}
              />
            </div>
          </div>
        );
      } else {
        return null;
      }
    });
  };

  const modalRender = () => {
    return (
      <div className='ui modal active' onClick={(e) => e.stopPropagation()}>
        <div className='header'>{state.cityDetails.details.name}</div>

        <div className='content HorizontalList'>
          <div className='ui relaxed horizontal list'>
            <div className=' item'>
              <div className='ui header'>Now</div>
              {Math.round(state.cityDetails.data[0].main.temp)} °C
              <div
                className='image'
                style={{ width: `50px`, backgroundColor: `#fff` }}
              >
                <img
                  alt='icon'
                  src={`http://openweathermap.org/img/w/${state.cityDetails.data[0].weather[0].icon}.png`}
                />
              </div>
            </div>
          </div>
          <div className='ui relaxed horizontal list'>
            {detailsRender(state.cityDetails)}
          </div>
        </div>

        <div className='actions'>
          <div
            className='ui primary basic button'
            onClick={() => handleClick()}
          >
            Hide
          </div>
        </div>
      </div>
    );
  };
  return ReactDOM.createPortal(
    <div className={`ui dimmer ${display}`} onClick={handleClick}>
      {state.cityDetails.data[0] && state.cityDetails.details
        ? modalRender()
        : null}
    </div>,
    document.getElementById('modal') as Element
  );
};
