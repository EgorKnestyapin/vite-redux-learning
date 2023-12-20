import styled from "styled-components";

export const JokeGeneratorWrapper = styled.div`
  display: flex;
  flex: 1;
  justify-content: center;
  padding: 40px;
`;

export const JokeContainer = styled.div`
  display: flex;
  width: 500px;
  height: fit-content;
  border: 1px solid black;
  flex-direction: column;
  padding: 40px;
  align-items: center;
  gap: 40px;
`;

export const Paragraph = styled.p`
  font-size: 24px;
  font-weight: bold;
`;
