import React, { useEffect } from 'react';
import {
  City,
  displayModal,
  fetchApi,
  getWeatherByCoord,
  WeatherPrediction,
} from '../../state/Actions';
import { useDispatch, useGlobalContext } from '../../state/StateContext';
import { exportDayFromDate } from '../../tools/tools';
import '../../Style/HomeList.css';

export const HomeList = (): JSX.Element => {
  let { cityList, dataList } = useGlobalContext();
  const dispatch = useDispatch();

  useEffect(() => {
    cityList.forEach((data) => {
      fetchApi(data, dispatch).then();
    });
  }, [cityList, dispatch]);

  const handleClick = async (event: React.MouseEvent<HTMLDivElement>) => {
    const lat = parseFloat(
      event.currentTarget.getAttribute('lat-coord') as string
    );
    const lng = parseFloat(
      event.currentTarget.getAttribute('lng-coord') as string
    );

    await getWeatherByCoord(lat, lng, dispatch);
    dispatch(displayModal(true));
  };

  const completeLine = () => {
    return cityList.map((data, index) => {
      return (
        <div key={index} className='item'>
          <div className='content '>
            <div
              className='header City'
              lat-coord={
                dataList.data[data] ? dataList.data[data].city.coord.lat : null
              }
              lng-coord={
                dataList.data[data] ? dataList.data[data].city.coord.lon : null
              }
              onClick={handleClick}
            >
              {data}
            </div>
            <div className='right floated content Cards'>
              {dataList.data[data]
                ? dataWeather(dataList.data[data].prediction, data)
                : null}
            </div>
          </div>
        </div>
      );
    });
  };
  const dataWeather = (datas: WeatherPrediction[], city: string) => {
    return datas.map((info, index) => {
      let date = new Date(datas[index].dt_txt);
      if (date.getHours() === 12) {
        return (
          <div className='ui card' key={index}>
            <div
              className='image'
              style={{ width: `50px`, backgroundColor: `#fff` }}
            >
              <img
                alt='icon'
                src={`http://openweathermap.org/img/w/${info.weather[0].icon}.png`}
              />
            </div>
            <div className='content'>
              <div className='header'>{exportDayFromDate(info.dt_txt)}</div>
              <div className='meta'>
                <span className='date'>{Math.round(info.main.temp)} °C</span>
              </div>
              <div className='description'>{info.weather[0].description}</div>
            </div>
          </div>
        );
      } else {
        return null;
      }
    });
  };
  return (
    <div className='HomeList'>
      <div className='ui divided list'>{completeLine()}</div>
    </div>
  );
};
