import { Stack } from "@mui/material";
import { category } from "../../constants/index";
import { colors } from "../../constants/colors";

const Category = ({ setSelectedCategoryHandler, selectedCategory }) => {
  return (
    <Stack direction={"row"} sx={{ overflowX: "scroll" }}>
      {category.map((item) => (
        <button
          key={item.name}
          className={`category-btn ${selectedCategory === item.name && "category-btn--active"}`}
          style={{ borderRadius: "0" }}
          onClick={() => setSelectedCategoryHandler(item.name)}
        >
          <span style={{ color: colors.secondary, marginRight: "15px" }}>
            {item.icon}
          </span>
          <span style={{ opacity: "1" }}>{item.name}</span>
        </button>
      ))}
    </Stack>
  );
};

export default Category;
