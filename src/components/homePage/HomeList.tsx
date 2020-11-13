import React, { useEffect } from 'react';
import { fetchApi } from '../../state/Actions';
import { useDispatch, useGlobalContext } from '../../state/StateContext';

export const HomeList = (): JSX.Element => {
  let cityList = useGlobalContext().cityList;
  const dispatch = useDispatch();

  useEffect(() => {
    cityList.forEach((data) => {
      fetchApi(data, dispatch).then();
    });
  }, [cityList, dispatch]);
  return <div>Ok</div>;
};
