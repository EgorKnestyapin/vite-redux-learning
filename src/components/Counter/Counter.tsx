import { useState } from "react"
import Button from "components/Button"
import { Count, CounterWrapper } from "./styles"

function Counter() {
  const [value, setValue] = useState<number>(0)
  const divideByTwo = () => {
    setValue((prevValue) => prevValue / 2)
  }
  const multiplyByTwo = () => {
    setValue((prevValue) => prevValue * 2)
  }
  const plusOne = () => {
    setValue((prevValue) => prevValue + 1)
  }
  const minusOne = () => {
    setValue((prevValue) => prevValue - 1)
  }

  return (
    <CounterWrapper>
      <Button name="/" onClick={divideByTwo} />
      <Button name="-" onClick={minusOne} />
      <Count>{value.toFixed(2)}</Count>
      <Button name="+" onClick={plusOne} />
      <Button name="*" onClick={multiplyByTwo} />
    </CounterWrapper>
  )
}

export default Counter
