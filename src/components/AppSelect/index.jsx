import React from "react";
import InputLabel from "@mui/material/InputLabel";
import FormControl from "@mui/material/FormControl";
import { SelectWrapper, MenuItemWrapper } from "./styles";

const AppSelect = (props) => {
  const {
    idField = "id",
    nameField = "name",
    value = "",
    selectList = [],
    handleChange,
    placeholder = "Select",
    ...rest
  } = props;

  const renderSelectItems = () => {
    return selectList.map((item) => {
      return (
        <MenuItemWrapper key={item[idField]} value={item[idField]}>
          {item[nameField]}
        </MenuItemWrapper>
      );
    });
  };

  return (
    <FormControl fullWidth>
      {placeholder && !value && (
        <InputLabel shrink={false}>{placeholder}</InputLabel>
      )}
      <SelectWrapper
        {...rest}
        id="demo-simple-select"
        value={value}
        onChange={handleChange}
        MenuProps={{
          PaperProps: {
            sx: {
              maxHeight: 220,
              maxWidth: 320,
              borderRadius: "18px",
              boxShadow: "0px 4px 10px rgba(0, 0, 0, 0.04)",
              marginTop: 2,
            },
          },
        }}
      >
        {renderSelectItems()}
      </SelectWrapper>
    </FormControl>
  );
};

export default AppSelect;
