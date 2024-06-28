import { NavLink } from 'react-router-dom';
import styled from 'styled-components';

export const RootNav = styled.nav`
  background-color: ${(props) => props.theme.colors.primary};
  padding: ${(props) => props.theme.spacing(2)};
  display: flex;
  justify-content: center;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
`;

export const NavList = styled.ul`
  list-style: none;
  display: flex;
  gap: ${(props) => props.theme.spacing(4)};
  margin: 0;
  padding: 0;
`;

export const NavItem = styled.li`
  display: flex;
  align-items: center;
`;

export const NavRouteLink = styled(NavLink)`
  color: ${(props) => props.theme.colors.background};
  text-decoration: none;
  padding: ${(props) => props.theme.spacing(1)} ${(props) => props.theme.spacing(2)};
  border-radius: ${(props) => props.theme.borders.radius.small};
  transition: background-color 0.3s, color 0.3s;

  &:visited {
    color: ${(props) => props.theme.colors.background};
  }

  &:hover {
    background-color: ${(props) => props.theme.colors.background};
    color: ${(props) => props.theme.colors.primary};
  }

  &.active {
    font-weight: ${(props) => props.theme.typography.fontWeight.bold};
    background-color: ${(props) => props.theme.colors.background};
    color: ${(props) => props.theme.colors.primary};
  }
`;