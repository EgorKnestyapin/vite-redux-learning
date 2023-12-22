import styled from "styled-components";
import { colors } from "styles/colors";

export const ButtonComponent = styled.button`
  display: flex;
  justify-content: center;
  width: 155px;
  min-height: 24px;
  height: fit-content;
  margin: 20px;
  padding: 12px 40px;
  outline: none;
  cursor: pointer;
  font-size: 20px;
  border-radius: 50px;
  color: ${colors.white};
  border: 1px solid #fff;
  background: linear-gradient(
    134deg,
    rgba(47, 72, 111, 0.62) 5.78%,
    rgba(11, 27, 52, 0.62) 96.58%
  );
  backdrop-filter: blur(4px);
`;
