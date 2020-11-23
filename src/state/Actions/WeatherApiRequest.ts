import React from 'react';
import { AxiosResponse } from 'axios';
import weatherApi from '../../api/weatherApi';
import { Action, ActionTypes, WeatherApiActions } from './index';

const KEY = '42b469e906820dba9adfe9ffb05fc8a7';

export interface City {
  id: number;
  name: string;
  coord: { lat: number; lon: number };
}
export interface MainWeather {
  id: number;
  main: string;
  description: string;
  icon: string;
}
export interface WeatherPrediction {
  main: { temp: number };
  weather: MainWeather[];
  dt_txt: 'string';
}
export interface ResponseApiWeather {
  city: City;
  list: WeatherPrediction[];
}

export const fetchApi = async (
  city: string,
  dispatch: React.Dispatch<Action>
) => {
  let response: AxiosResponse<ResponseApiWeather> | boolean = false;

  let error: any = null;

  try {
    response = await weatherApi.get<ResponseApiWeather>('/forecast?', {
      params: {
        q: city,
        units: 'metric',
        appid: KEY,
      },
    });
  } catch (e) {
    error = e;
  }

  return dispatch({
    type: ActionTypes.WEATHER_API,
    action: WeatherApiActions.FETCH_API,
    payload: { response, error },
  });
};

export const getWeatherByCoord = async (
  lat: number,
  lng: number,
  dispatch: React.Dispatch<Action>
) => {
  let response: AxiosResponse<ResponseApiWeather> | boolean = false;
  let error: any = null;

  try {
    response = await weatherApi.get<ResponseApiWeather>(
      `/forecast?lat=${lat}&lon=${lng}`,
      {
        params: {
          units: 'metric',
          appid: KEY,
        },
      }
    );
  } catch (e) {
    error = e;
  }

  return dispatch({
    type: ActionTypes.WEATHER_API,
    action: WeatherApiActions.GET_WEATHER_BY_COORD,
    payload: { response, error },
  });
};
