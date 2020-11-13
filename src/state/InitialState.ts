export interface State {
  formValue: string;
  cityList: string[];
  dataList: {};
}

export const initialState: State = {
  formValue: '',
  cityList: ['Tel Aviv', 'Paris', 'London', 'New York'],
  dataList: {},
};
