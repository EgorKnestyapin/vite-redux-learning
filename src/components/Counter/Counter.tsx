import Button from "components/Button";
import { Count, CounterWrapper } from "./styles";
import { useDispatch, useSelector } from "react-redux";
import { counterState } from "store/redux/counter/selectors";
import { actions } from "store/redux/counter/counterSlice";

function Counter() {
  // const [value, setValue] = useState<number>(0);
  // const divideByTwo = (): void => {
  //   setValue((prevValue: number) => prevValue / 2);
  // };
  // const multiplyByTwo = (): void => {
  //   setValue((prevValue: number) => prevValue * 2);
  // };
  // const onPlus = (): void => {
  //   setValue((prevValue: number) => prevValue + 1);
  // };
  // const onMinus = (): void => {
  //   setValue((prevValue: number) => prevValue - 1);
  // };

  // Создаем функцию dispatch - эта функция вызывает action, который скажет store,
  // какой reducer надо вызывать
  const dispatch = useDispatch();
  const counter = useSelector(counterState);

  const onPlus = () => {
    // Мы "диспатчим" action под именем add - имя совпадает с именем функции reducer
    dispatch(actions.add());
  };

  const onMinus = () => {
    dispatch(actions.minus());
  };

  const multiplyByTwo = () => {
    dispatch(actions.multiply());
  };

  const divideByTwo = () => {
    dispatch(actions.divide());
  };

  return (
    <CounterWrapper>
      {/* <Button name="/" onClick={divideByTwo} />
      <Button name="-" onClick={onMinus} />
      <Count>{Number(value.toFixed(2))}</Count>
      <Button name="+" onClick={onPlus} />
      <Button name="*" onClick={multiplyByTwo} /> */}
      <Button name="/" onClick={() => {}} />
      <Button name="-" onClick={onMinus} />
      <Count>{Number(counter.count.toFixed(2))}</Count>
      <Button name="+" onClick={onPlus} />
      <Button name="*" onClick={multiplyByTwo} />
    </CounterWrapper>
  );
}

export default Counter;
