import { useState, ChangeEvent } from "react"
import WeatherInput from "../../components/WeatherInput"
import { Homework29Wrapper, InputButtonWrapper, ValueWrapper } from "./styles"
import WeatherButton from "../../components/WeatherButton"

function Homework29() {
  const [value, setValue] = useState<string>("")
  const [valueDisplay, setValueDisplay] = useState<string>("")
  const onChangeValue = (event: ChangeEvent<HTMLInputElement>) => {
    setValue(event.target.value)
  }

  return (
    <Homework29Wrapper>
      <InputButtonWrapper>
        <WeatherInput
          placeholder="Enter"
          onChange={onChangeValue}
          value={value}
        />
        <WeatherButton name="Display" onClick={() => setValueDisplay(value)} />
      </InputButtonWrapper>
      {valueDisplay && <ValueWrapper>{valueDisplay}</ValueWrapper>}
    </Homework29Wrapper>
  )
}

export default Homework29
