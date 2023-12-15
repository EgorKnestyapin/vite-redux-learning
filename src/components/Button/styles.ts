import styled from "styled-components"

interface ButtonComponentProps {
  $isRedFont?: boolean | undefined
}

export const ButtonComponent = styled.button<ButtonComponentProps>`
  width: 100%;
  min-height: 50px;
  height: fit-content;
  margin: 0;
  padding: 4px;
  outline: none;
  border: none;
  cursor: pointer;
  background-color: ${({ disabled }) => (disabled ? "grey" : "blue")};
  color: ${({ $isRedFont }) => ($isRedFont ? "red" : "white")};
  font-size: 14px;
  font-weight: bold;
`
