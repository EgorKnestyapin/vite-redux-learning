import styled from "styled-components"
import { colors } from "styles/colors"

export const CounterWrapper = styled.div`
  display: flex;
  align-items: center;
  gap: 15px;
  width: 500px;
  height: fit-content;
  padding: 40px;
  background-color: ${colors.primary};
`

export const Count = styled.div`
  font-size: 20px;
  font-weight: bold;
  color: ${colors.white};
`
