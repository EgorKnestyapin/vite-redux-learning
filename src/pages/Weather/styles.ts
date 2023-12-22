import { WeatherImage } from "assets";
import { NavLink } from "react-router-dom";
import styled from "styled-components";
import { colors } from "styles/colors";

export const WeatherWrapper = styled.div`
  display: flex;
  flex-direction: column;
  flex: 1;
  background: url(${WeatherImage});
  background-repeat: no-repeat;
  background-size: cover;
`;

export const Header = styled.header`
  display: flex;
  justify-content: space-between;
  width: 100%;
  padding: 25px 85px;
  background: linear-gradient(
      0deg,
      rgba(255, 255, 255, 0.1) 0%,
      rgba(255, 255, 255, 0.1) 100%
    ),
    rgba(18, 45, 77, 0.5);
  border-bottom: 1px #d2d2d2 solid;
  backdrop-filter: blur(8.899999618530273px);
`;

export const LogoContainer = styled.div`
  color: ${colors.white};
  font-size: 24px;
  font-weight: 700;
`;

export const NavigationContainer = styled.nav`
  display: flex;
  gap: 60px;
`;

export const StyledNavLink = styled(NavLink)`
  color: ${colors.white};
  font-size: 20px;
  font-weight: 400;
  text-decoration: none;
`;

export const Main = styled.main`
  display: flex;
  flex-direction: column;
  align-items: center;
  flex: 1;
`;
