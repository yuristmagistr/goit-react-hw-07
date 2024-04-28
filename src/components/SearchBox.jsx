// import css from './SearchBox.module.css';

// // SearchBox.js
// // import React from 'react';

// const SearchBox = ({ value, onChange }) => {
//     return (
//       <div className={css.SearchBox}>
//       <label>Find contacts by name</label>
//     <input className={css.inputSearchBox}
//       type="text"
//       placeholder="Search contacts..."
//       value={value}
//       onChange={e => onChange(e.target.value)}
//             />
//             </div>
//   );
// };


// export default SearchBox




import css from "./SearchBox.module.css";
import { useDispatch, useSelector } from "react-redux";
import { changeFilter, selectNameFilter } from "../redux/filtersSlice.js";

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