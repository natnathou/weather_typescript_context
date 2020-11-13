import React from 'react';
import { AxiosResponse } from 'axios';
import weatherApi from '../../api/weatherApi';
import { Action, ActionTypes, ApiActions } from './index';

const KEY = '42b469e906820dba9adfe9ffb05fc8a7';

export interface City {
  id: number;
  name: string;
  coord: { lat: number; lon: number };
}
export interface WeatherPrediction {
  main: { temp: number };
  weather: { id: number; main: string; description: string; icon: string };
}
export interface ResponseApiWeather {
  city: City;
  list: WeatherPrediction[];
}

export const fetchApi = async (
  city: string,
  dispatch: React.Dispatch<Action>,
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
    console.log(response);
  } catch (e) {
    error = e;
  }

  return dispatch({
    type: ActionTypes.API,
    action: ApiActions.FETCH_API,
    payload: { response, error },
  });
};
