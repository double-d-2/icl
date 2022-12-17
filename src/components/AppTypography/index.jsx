import { Typography } from "@mui/material";

const AppTyphography = ({ className = "", ...props }) => {
  return <Typography {...props} className={`${className} app_typhography`} />;
};

export default AppTyphography;
