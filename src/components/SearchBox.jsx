import css from "./SearchBox.module.css";
import { useDispatch, useSelector } from "react-redux";
import { changeFilter } from "../redux/filtersSlice.js";

import { selectNameFilter } from "../redux/selectors.js";


const useFilterValue = () => useSelector(selectNameFilter);

const SearchBox = () => {
  const dispatch = useDispatch();
  const nameFilter = useFilterValue();

  const handleChange = (e) => {
    const filterValue = e.target.value;

    dispatch(changeFilter(filterValue));
  };
  return (
    <div className={css.SearchBox}>
      <label>Find contacts by name</label>
      <input
        className={css.inputSearchBox}
        type="text"
        value={nameFilter}
        onChange={handleChange}
      />
    </div>
  );
};
export default SearchBox;