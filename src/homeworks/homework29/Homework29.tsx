import { useState, ChangeEvent } from "react"
import {
  ButtonWrapper,
  Homework29Wrapper,
  InputButtonWrapper,
  ValueWrapper,
} from "./styles"
import Input from "../../components/Input"
import Button from "../../components/Button"

function Homework29() {
  const [value, setValue] = useState<string>("")
  const [valueDisplay, setValueDisplay] = useState<string>("")
  const onChangeValue = (event: ChangeEvent<HTMLInputElement>) => {
    setValue(event.target.value)
  }

  return (
    <Homework29Wrapper>
      <InputButtonWrapper>
        <Input
          placeholder="Enter"
          onChange={onChangeValue}
          value={value}
          labelName="Value"
        />
        <ButtonWrapper>
          <Button
            name="Display"
            onClick={() => {
              if (value.length === 0) {
                alert("Enter value")
                return
              }
              setValueDisplay(value)
            }}
          />
        </ButtonWrapper>
      </InputButtonWrapper>
      {valueDisplay && <ValueWrapper>{valueDisplay}</ValueWrapper>}
    </Homework29Wrapper>
  )
}

export default Homework29
