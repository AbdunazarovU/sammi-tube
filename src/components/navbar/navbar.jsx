import { Stack, Box } from "@mui/material";
import { logo } from "../../constants";
import { colors } from "../../constants/colors";
import { Link } from "react-router-dom";
import { SearchBar } from "../";

const Navbar = () => {
  return (
    <Stack
      direction={"row"}
      alignItems={"center"}
      justifyContent={"space-between"}
      p={2}
      sx={{position: "sticky", top: 0, zIndex: 99, backgroundColor: colors.primary }}
    >
      <Link to={"/"}>
        <img src={logo} alt="logo rasmi" width={120} height={40} />
      </Link>
      <SearchBar />
      <Box />
    </Stack>
  );
};

export default Navbar;
