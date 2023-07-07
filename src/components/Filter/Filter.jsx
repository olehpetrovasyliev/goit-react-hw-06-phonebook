import propTypes from 'prop-types';
import { useDispatch, useSelector } from 'react-redux';
import { setFilter } from 'redux/slice';

const { FilterInput } = require('./Filter.styled');

export const Filter = ({ name, type, cb, value }) => {
  const dispatch = useDispatch();
  const filter = useSelector(state => state.filter);

  return (
    <FilterInput
      className="filter_input"
      name="filter"
      type="text"
      onChange={e => {
        dispatch(setFilter(e.target.value.toLowerCase().trim()));
      }}
      // value={filter}
    />
  );
};
