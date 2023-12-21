import { ButtonComponent } from "./styles";
import { ButtonProps } from "./types";

function WeatherContainerButton({
  disabled = false,
  name = "Send",
  type = "button",
  onClick,
}: ButtonProps) {
  return (
    <ButtonComponent disabled={disabled} type={type} onClick={onClick}>
      {name}
    </ButtonComponent>
  );
}

export default WeatherContainerButton;
