import { useDispatch } from 'react-redux';
import { setFilter } from 'redux/slice';

import { FilterInput } from './Filter.styled';

export const Filter = ({ name, type, cb, value }) => {
  const dispatch = useDispatch();

  return (
    <FilterInput
      className="filter_input"
      name="filter"
      type="text"
      onChange={e => {
        dispatch(setFilter(e.target.value.toLowerCase().trim()));
      }}
    />
  );
};
