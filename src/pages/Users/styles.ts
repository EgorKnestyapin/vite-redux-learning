import styled from "styled-components";

export const UsersWrapper = styled.div`
  display: flex;
  flex-wrap: wrap;
  align-items: stretch;
  height: fit-content;
  gap: 20px;
`;

export const CardContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  width: 280px;
  padding: 20px;
  gap: 10px;
  background-color: wheat;
  border: 1px solid black;
`;

export const CardText = styled.p`
  /* Как показать точки, когда текст длинный
  1.Задаете главному контейнеру фиксированную ширину, например 300px
  2. Добавляете св-ва тексту: width: 100%;
  text-overflow: ellipsis; // показывает точки 
  overflow: hidden; // скрывает текст что не влез
  */
  width: 100%;
  font-size: 24px;
  text-overflow: ellipsis;
  overflow: hidden;
  /* overflow-wrap: break-word; */
`;
