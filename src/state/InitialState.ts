import { WeatherPrediction } from './Actions';

interface DataList {
  [key: string]: WeatherPrediction[];
}

export interface State {
  formValue: string;
  cityList: string[];
  dataList: DataList;
}

export const initialState: State = {
  formValue: '',
  cityList: ['Tel Aviv', 'Paris', 'London', 'New York'],
  dataList: {},
};
