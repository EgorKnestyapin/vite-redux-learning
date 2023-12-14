import { useState, ChangeEvent, MouseEvent } from "react"
import {
  ButtonWrapper,
  Homework29Wrapper,
  InputButtonWrapper,
  ValueWrapper,
} from "./styles"
import Button from "components/Button"
import Input from "components/Input"

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
            onClick={(event: MouseEvent<HTMLButtonElement>) => {
              event.preventDefault()
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
