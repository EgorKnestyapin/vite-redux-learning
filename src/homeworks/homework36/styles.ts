import styled from "styled-components";
import { colors } from "styles/colors";

export const Homework36Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  width: 450px;
  margin: 30px;
  padding: 20px;
  gap: 15px;
  border: 1px solid white;
`;

export const Paragraph = styled.p`
  font-size: 24px;
  color: ${colors.white};
  overflow-wrap: break-word;
`;
