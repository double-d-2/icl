import styled from "@emotion/styled";
import AppBox from "../AppBox";

const Wrapper = styled(AppBox)`
  border-radius: 12px 0 12px 12px;
  padding: ${({ theme }) => theme.spacing(1)};
  min-width: 100px;
  display: inline-block;
  text-align: center;
  text-transform: capitalize;
`;

export default Wrapper;
