import { ButtonComponent } from "./styles";
import { ButtonProps } from "./types";

function WeatherButton({
  disabled = false,
  name = "Send",
  type = "submit",
  onClick,
  isRedFont,
  isWidth100,
}: ButtonProps) {
  return (
    <ButtonComponent
      disabled={disabled}
      type={type}
      onClick={onClick}
      $isRedFont={isRedFont}
      $isWidth100={isWidth100}
    >
      {name}
    </ButtonComponent>
  );
}

export default WeatherButton;
