import styled from "styled-components";
import { NavLink } from "react-router-dom";

export const Container = styled.div`
  display: flex;
//   padding: 24px;
`;

export const LeftMenu = styled.div`
  display: flex;
  width: 300px;
  height: calc(100vh - 48px);
//   margin: 0 auto;
  padding: 24px;
background-color: blue;
`;

export const Menu = styled.header`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: flex-start;
  gap: 12px;
//   padding: 8px 0;
  margin-bottom: 0;
//   border-bottom: 1px solid black;

  > nav {
    display: flex;
    flex-direction: column;
  }
`;

export const Logo = styled.p`
  font-weight: 700;
  margin: 0;
`;

export const Link = styled(NavLink)`
  padding: 8px 16px;
  border-radius: 4px;
  text-decoration: none;
  color: black;
  font-weight: 500;

  &.active {
    // color: white;
    background-color: yellow;
  }
`;

export const RightPart = styled.p`
  padding: 24px;
`;