import styled from "styled-components";
import { colors } from "styles/colors";

export const WeatherErrorWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 709px;
  background: linear-gradient(
    134deg,
    rgba(47, 72, 111, 0.62) 5.78%,
    rgba(11, 27, 52, 0.62) 96.58%
  );
  backdrop-filter: blur(4px);
  border-radius: 20px;
`;

export const WeatherErrorContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  height: 150px;
  gap: 20px;
  border-radius: 20px;
`;

export const ApiError = styled.p`
  display: flex;
  color: #f35e5e;
  font-size: 57px;
`;

export const ErrorMessage = styled.p`
  display: flex;
  font-size: 25px;
  color: ${colors.white};
`;
