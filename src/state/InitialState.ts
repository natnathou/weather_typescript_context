import { City, ResponseLocation, WeatherPrediction } from './Actions';

interface DataList {
  [key: string]: { prediction: WeatherPrediction[]; city: City };
}

export interface State {
  formValue: string;
  cityList: string[];
  dataList: { data: DataList; error: any };
  searchCityList: {
    display: boolean;
    list: { data: ResponseLocation; error: any };
  };
  cityDetails: {
    data: WeatherPrediction[];
    details: City;
    error: any;
    display: boolean;
  };
}

export const initialState: State = {
  formValue: '',
  cityList: ['Tel Aviv', 'Paris', 'London', 'New York'],
  dataList: {
    data: {},
    error: false,
  },
  searchCityList: {
    display: false,
    list: { data: { results: [] }, error: false },
  },
  cityDetails: {
    data: [],
    details: { id: 0, name: '', coord: { lat: 0, lon: 0 } },
    error: false,
    display: false,
  },
};
