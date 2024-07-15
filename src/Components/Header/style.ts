import { Link } from "react-router-dom";
import styled from "styled-components";

export const Layout = styled.header`
  height: 4.25rem;
  box-shadow: 0px 4px 4px 0px rgba(0, 0, 0, 0.08);
  display: flex;
  align-items: center;
  position: relative;
  padding-left: 68px;
  padding-right: 68px;
`
export const Logo = styled.div`
  position: absolute;
  right: 50%;
  top: 50%;
  transform: translate(50%,-50%);
  cursor: pointer;
`
export const ElementLayout = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-between;
`
export const Nav = styled.div`
  display: flex;
  gap: 2.5rem;
`
export const NavElement = styled(Link)`
  color: black;
  text-decoration: none;
`
export const UserNav = styled.div`
  display: flex;
  gap: 16px;
`
export const DevideBar = styled.p`
  color: #949494;
`