import styled from "@emotion/styled";
import { Select, MenuItem } from "@mui/material";

export const SelectWrapper = styled(Select)`
  border-radius: ${({ theme }) => theme.shape.borderRadius * 9}px;

  svg,
  .MuiSelect-select {
    z-index: 1;
  }

  fieldset {
    border-color: transparent;
    background-color: #fff;
  }
`;

export const MenuItemWrapper = styled(MenuItem)`
  border-radius: ${({ theme }) => theme.shape.borderRadius * 8}px;
  :hover {
    background-color: #e7ebf1;
    color: ${({ theme }) => theme.palette.primary.main};
  }
`;
