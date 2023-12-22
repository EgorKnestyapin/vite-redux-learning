import {
  Header,
  LogoContainer,
  Main,
  NavigationContainer,
  StyledNavLink,
  WeatherWrapper,
} from "./styles";
import { WeatherProps } from "./types";

function Weather({ children }: WeatherProps) {
  return (
    <WeatherWrapper>
      <Header>
        <LogoContainer>Weather App</LogoContainer>
        <NavigationContainer>
          <StyledNavLink
            style={({ isActive }) => ({
              fontWeight: isActive ? 700 : 400,
            })}
            to="/"
          >
            Home
          </StyledNavLink>
          <StyledNavLink
            style={({ isActive }) => ({
              fontWeight: isActive ? 700 : 400,
            })}
            to="/weathers"
          >
            Weathers
          </StyledNavLink>
        </NavigationContainer>
      </Header>
      <Main>{children}</Main>
    </WeatherWrapper>
  );
}

export default Weather;
