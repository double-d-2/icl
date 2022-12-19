import { createTheme } from "@mui/material/styles";

import palette from "./palette";
import typography from "./typography";

const theme = createTheme({
  palette,
  spacing: 4,
  typography: {
    fontFamily: "Barlow, san-serif",
    htmlFontSize: 16,
    ...typography,
  },
  shape: {
    borderRadius: 2,
  },
});

export default theme;
