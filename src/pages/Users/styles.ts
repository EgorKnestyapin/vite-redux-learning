import styled from "styled-components";

export const UsersWrapper = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 20px;
`;

export const CardContainer = styled.div`
  display: grid;
  flex: calc(25% - 42px);
  flex-direction: column;
  height: fit-content;
  padding: 20px;
  gap: 10px;
  background-color: wheat;
  border: 1px solid black;
`;

export const CardText = styled.p`
  font-size: 24px;
`;
