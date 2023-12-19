import styled from "styled-components";
import { colors } from "styles/colors";

export const TodoListWrapper = styled.div`
  display: flex;
  flex-direction: column;
  padding: 20px;
  width: 300px;
  gap: 30px;
`;

export const TodoListParagraph = styled.p`
  font-size: 25px;
  overflow-wrap: break-word;
  cursor: pointer;
`;

export const TodoListForm = styled.form`
  display: flex;
  flex-direction: column;
  padding: 20px;
  gap: 15px;
  border: 1px solid black;
`;

export const TodoListContainer = styled.div`
  display: flex;
  flex-direction: column;
  padding: 20px;
  border: 1px solid black;
  gap: 10px;
`;
