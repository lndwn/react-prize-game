import styled from "styled-components";
import { NavLink as Link } from "react-router-dom";

export const NavLink = styled(Link)`
  display: flex;
  align-items: center;
  line-height: 1;
  padding: 0.5em 0.75em;
  color: ${({ theme }) => theme.colors.whites[0]};
  border-width: 1px;
  border-style: solid;
  border-color: ${({ theme }) => theme.colors.whites[0]};
  text-decoration: none;
  border-radius: 1em;
  margin: 0 0.25em;

  &.active,
  :hover {
    color: ${({ theme }) => theme.colors.fadedBlue};
    background-color: ${({ theme }) => theme.colors.whites[0]};
  }
`;
