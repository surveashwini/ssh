import React from 'react';
import { RootNav, NavList, NavItem, NavRouteLink } from './Nav.styled';

export default function Nav() {
  return (
    <RootNav>
      <NavList>
        <NavItem>
          <NavRouteLink to="/" tabIndex={0} role="nav" aria-label="Home">
            Alarms
          </NavRouteLink>
        </NavItem>
        <NavItem>
          <NavRouteLink to="/customers" tabIndex={0} role="nav" aria-label="Search">
            Customers
          </NavRouteLink>
        </NavItem>
        <NavItem>
          <NavRouteLink to="/ninjas" tabIndex={0} role="nav" aria-label="Favorites">
            Ninjas
          </NavRouteLink>
        </NavItem>
        
      </NavList>
    </RootNav>
  );
}
