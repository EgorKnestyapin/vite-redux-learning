import styled from "styled-components";

export const CatFactsWrapper = styled.div`
  display: flex;
  flex: 1;
  justify-content: center;
  padding: 40px;
`;

export const CatFactsContainer = styled.div`
  display: flex;
  width: 700px;
  height: fit-content;
  border: 1px solid black;
  flex-direction: column;
  padding: 40px;
  gap: 20px;
`;

export const Paragraph = styled.p`
  font-size: 24px;
  font-weight: bold;
`;

export const CatFactsElement = styled.li`
  width: 500px;
  font-size: 20px;
  font-weight: bold;
  overflow-wrap: break-word;
`;

export const CatFactButtonContrainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

export const ButtonWrapper = styled.div`
  display: flex;
  width: 100px;
`;
