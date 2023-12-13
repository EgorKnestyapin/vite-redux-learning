import styled from "styled-components"
import { WeatherIcon } from "../../assets"

export const Homework29Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 50px;
  background-image: url(${WeatherIcon});
  height: 100vh;
`
export const InputButtonWrapper = styled.div`
  display: flex;
  justify-content: center;
  width: 100%;
  margin-top: 120px;
  gap: 12px;
`
export const ValueWrapper = styled.p`
  font-size: 30px;
  color: white;
`

export const ButtonWrapper = styled.div`
  display: flex;
  width: 200px;
`
