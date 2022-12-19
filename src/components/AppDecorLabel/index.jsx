import AppTyphography from "../AppTypography";
import Wrapper from "./styles";

const AppDecorLabel = ({ ...rest }) => {
  return <Wrapper component={AppTyphography} {...rest} />;
};

export default AppDecorLabel;
