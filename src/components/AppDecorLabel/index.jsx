import AppBox from "../AppBox";

const AppDecorLabel = ({ ...rest }) => {
  return (
    <AppBox
      component="span"
      {...rest}
      backgroundColor={"red"}
      borderRadius="12px 0px 12px 12px"
      padding="15px"
      display="inline-block"
      margin="15px"
    />
  );
};

export default AppDecorLabel;
