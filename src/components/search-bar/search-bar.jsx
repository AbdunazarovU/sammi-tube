import { Search } from "@mui/icons-material";
import { Paper, IconButton } from "@mui/material";
import { colors } from "../../constants/colors";
import { useState } from "react";
import { useNavigate } from "react-router-dom"

const SearchBar = () => {
  const [value, setValue] = useState("")
  const navigate = useNavigate()

  const submitHandler = (evt) => {
    evt.preventDefault()
    if (value) {
      navigate(`/search/${value}`)
    }
    setValue("")
  }

  return (
    <Paper
      component={"form"}
      onSubmit={submitHandler}
      sx={{ border: `1px solid ${colors.secondary}`, pl: 2, boxShadow: "none", mr: 5, }}
    >
      <input className="search-bar" type="text" placeholder="Search..." onChange={e => setValue(e.target.value)} value={value} />
      <IconButton type="submit" >
        <Search />
      </IconButton>
    </Paper>
  );
};

export default SearchBar;
