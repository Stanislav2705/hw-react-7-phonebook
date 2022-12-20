import { useDispatch, useSelector } from "react-redux"
import { changeFilter } from "redux/filter/slice";
import { getFilter } from "redux/selectors";
import { Input, Label, Text } from "./Filter.styles";


export default function Filter() {
  const filter = useSelector(getFilter);
  const dispatch = useDispatch();

  const handleChange = (e) => {
    const { value } = e.target;
    dispatch(changeFilter(value))
  }

  return (
    <div>
      <Label htmlFor="filter"><Text></Text></Label>
      <Input
        type="text"
        name="filter"
        value={filter}
        onChange={handleChange}
        placeholder="Find contacts by name"
        />
    </div>
  )
}
