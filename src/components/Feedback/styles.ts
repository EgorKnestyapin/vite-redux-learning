import styled from "styled-components";
import { colors } from "styles/colors";

export const FeedbackWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 600px;
  margin: 20px;
  padding: 20px;
  gap: 70px;
  background-color: ${colors.primary};
`;

export const LikeContainer = styled.div`
  display: flex;
  align-items: center;
  width: 100px;
  height: 100px;
`;

export const DislikeContainer = styled.div`
  display: flex;
  align-items: center;
  width: 100px;
  height: 100px;
  margin-right: 30px;
`;

export const LikeImg = styled.img`
  height: 100%;
  padding: 20px;
`;

export const DislikeImg = styled.img`
  height: 100%;
  padding: 20px;
`;

export const LikeCounter = styled.p`
  font-size: 40px;
  color: ${colors.white};
`;

export const DislikeCounter = styled.p`
  font-size: 40px;
  color: ${colors.white};
`;
