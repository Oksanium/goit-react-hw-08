import s from "./SearchBox.module.css";

import { useDispatch } from "react-redux";
import { useSelector } from "react-redux";

import { changeFilter, selectFilter } from "../../redux/filters/slice";

export default function SearchBox() {
  const query = useSelector(selectFilter);
  const dispatch = useDispatch();

  function handleChange(e) {
    dispatch(changeFilter(e.target.value.toLowerCase()));
  }

  return (
    <div className={s.search}>
      <label htmlFor="search">Search:</label>
      <input
        name="search"
        id="search"
        className={s.input}
        onChange={handleChange}
        value={query}
      />
    </div>
  );
}
