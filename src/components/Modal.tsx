import React from 'react';
import ReactDOM from 'react-dom';
import { displayModal } from '../state/Actions';
import { useDispatch, useGlobalContext } from '../state/StateContext';
import { exportDayFromDate } from '../tools/tools';

export const Modal = () => {
  const state = useGlobalContext();
  const dispatch = useDispatch();
  const display = `${state.cityDetails.display ? `active` : ``}`;

  const handleClick = () => {
    dispatch(displayModal(false));
  };

  const modalRender = () => {
    return (
      <div className='ui modal active' onClick={(e) => e.stopPropagation()}>
        <div className='header'>
          {exportDayFromDate(state.cityDetails.data[0].dt_txt)}

          <p>{state.cityDetails.data[0].main.temp} °C</p>
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
      {state.cityDetails.data[0] ? modalRender() : null}
    </div>,
    document.getElementById('modal') as Element
  );
};
