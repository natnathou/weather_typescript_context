import { ResponseLocation, WeatherPrediction } from './Actions';

interface DataList {
  [key: string]: WeatherPrediction[];
}

export interface State {
  formValue: string;
  cityList: string[];
  dataList: { data: DataList; error: any };
  searchCityList: {
    display: boolean;
    list: { data: ResponseLocation[]; error: any };
  };
}

export const initialState: State = {
  formValue: '',
  cityList: ['Tel Aviv', 'Paris', 'London', 'New York'],
  dataList: { data: {}, error: false },
  searchCityList: { display: false, list: { data: [], error: false } },
};
