import Backdrop from "@mui/material/Backdrop";
import CircularProgress from "@mui/material/CircularProgress";

const AppLoader = ({ open = false }) => {
  return (
    <Backdrop
      sx={{
        color: (theme) => theme.palette.primary,
        zIndex: (theme) => theme.zIndex.drawer + 1,
      }}
      open={open}
    >
      <CircularProgress color="inherit" />
    </Backdrop>
  );
};

export default AppLoader;
