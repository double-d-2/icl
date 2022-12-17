import * as React from "react";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select from "@mui/material/Select";

const AppSelect = (props) => {
  const {
    idField = "id",
    nameField = "name",
    value = "",
    selectList = [],
    handleChange,
    placeholder = "placeholder",

    //multiple = false,
    ...rest
  } = props;

  const renderSelectItems = () => {
    return selectList.map((item) => {
      return (
        <MenuItem key={item[idField]} value={item[idField]}>
          {item[nameField]}
        </MenuItem>
      );
    });
  };

  return (
    <FormControl fullWidth>
      {placeholder && !value && (
        <InputLabel shrink={false}>{placeholder}</InputLabel>
      )}
      <Select
        {...rest}
        id="demo-simple-select"
        value={value}
        onChange={handleChange}
        MenuProps={{
          PaperProps: {
            sx: {
              maxHeight: 222,
              borderRadius: "18px",
              boxShadow: "0px 4px 10px rgba(0, 0, 0, 0.04)",
              marginTop: 2,
            },
          },
        }}
      >
        {renderSelectItems()}
      </Select>
    </FormControl>
  );
};

export default AppSelect;
