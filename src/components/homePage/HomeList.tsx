import React, { useEffect } from 'react';
import { fetchApi, WeatherPrediction } from '../../state/Actions';
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

  const completeLine = () => {
    return cityList.map((data, index) => {
      return (
        <div key={index} className="item">
          <div className="content ">
            <div className="header City">{data}</div>
            <div className="right floated content Cards">
              {dataList[data] ? dataWeather(dataList[data], data) : null}
            </div>
          </div>
        </div>
      );
    });
  };
  const dataWeather = (data: WeatherPrediction[], city: string) => {
    return data.map((info, index) => {
      if (
        data[index + 1] &&
        exportDayFromDate(data[index].dt_txt) !==
          exportDayFromDate(data[index + 1].dt_txt)
      ) {
        return (
          <div className="ui card" key={index}>
            <div
              className="image"
              style={{ width: `50px`, backgroundColor: `#fff` }}
            >
              <img
                alt="icon"
                src={`http://openweathermap.org/img/w/${info.weather[0].icon}.png`}
              />
            </div>
            <div className="content">
              <a className="header">{exportDayFromDate(info.dt_txt)}</a>
              <div className="meta">
                <span className="date">{Math.round(info.main.temp)} °C</span>
              </div>
              <div className="description">{info.weather[0].description}</div>
            </div>
          </div>
        );
      } else {
        return null;
      }
    });
  };
  return (
    <div className="HomeList">
      <div className="ui divided list">{completeLine()}</div>
    </div>
  );
};
