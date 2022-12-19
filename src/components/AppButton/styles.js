import styled from "@emotion/styled";
import { Button } from "@mui/material";

const Wrapper = styled(Button)`
  border-radius: ${({ theme }) => theme.shape.borderRadius * 9}px;
  padding: ${({ theme }) => theme.spacing(4, 5)};
`;

export default Wrapper;
