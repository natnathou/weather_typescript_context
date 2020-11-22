import searchCityApi from '../../api/cityLocationApi';
import React from 'react';
import {
  Action,
  ActionTypes,
  LocationApiAction,
  ResponseApiWeather,
} from './index';
import { AxiosResponse } from 'axios';

const KEY = '7f6a5ec12c9d4d3e8ef9cecc1f3aa1a2';

interface Results {
  formatted: string;
  geometry: {
    lat: number;
    lng: number;
  };
}
export interface ResponseLocation {
  results: Results[];
}

export interface SearchLocationByCityApi {
  type: ActionTypes.LOCATION_API;
  action: LocationApiAction.SEARCH_CITY;
  payload: {
    response: boolean | AxiosResponse<ResponseLocation>;
    error: boolean;
  };
}
export const searchLocationByCityApi = async (
  dataInput: string,
  dispatch: React.Dispatch<Action>,
) => {
  let response: AxiosResponse<ResponseLocation> | boolean = false;
  let error: any;

  try {
    response = await searchCityApi.get<ResponseLocation>(
      `json?q=${dataInput}&key=${KEY}`,
    );
    console.log(response.data.results);
  } catch (e) {
    error = e;
  }

  return dispatch({
    type: ActionTypes.LOCATION_API,
    action: LocationApiAction.SEARCH_CITY,
    payload: { response, error },
  });
};