import { useState } from "react";
import Button from "components/Button";
import { Count, CounterWrapper } from "./styles";

function Counter() {
  const [value, setValue] = useState<number>(0);
  const divideByTwo = (): void => {
    setValue((prevValue: number) => prevValue / 2);
  };
  const multiplyByTwo = (): void => {
    setValue((prevValue: number) => prevValue * 2);
  };
  const onPlus = (): void => {
    setValue((prevValue: number) => prevValue + 1);
  };
  const onMinus = (): void => {
    setValue((prevValue: number) => prevValue - 1);
  };

  return (
    <CounterWrapper>
      <Button name="/" onClick={divideByTwo} />
      <Button name="-" onClick={onMinus} />
      <Count>{Number(value.toFixed(2))}</Count>
      <Button name="+" onClick={onPlus} />
      <Button name="*" onClick={multiplyByTwo} />
    </CounterWrapper>
  );
}

export default Counter;
