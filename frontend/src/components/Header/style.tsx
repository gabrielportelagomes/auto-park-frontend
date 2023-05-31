import styled from "styled-components";

import { device } from "../../assets/styles/breakpoints";

export const HeaderContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100vw;
  height: 4rem;
  background: #252525;
  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.2);
  padding: 1rem;
  position: fixed;
  top: 0;
  left: 0;
  right: 0;

  @media ${device.desktop} {
    height: 5rem;
  }
`;

export const Logo = styled.h3`
  font-family: "Alkatra", cursive;
  font-weight: 700;
  font-size: 3rem;
  letter-spacing: 0.2rem;
  color: white;
  cursor: pointer;

  @media ${device.desktop} {
  }
`;

export const OverlayMenu = styled.div<{ menuOpen: boolean }>`
  display: ${(props) => (props.menuOpen ? "initial" : "none")};
  position: fixed;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  z-index: 2;
  background: rgba(0, 0, 0, 0);
`;

export const HamburguerMenu = styled.div`
  margin-right: 1rem;
  cursor: pointer;
  div {
    width: 2rem;
    height: 0.125rem;
    background: #ffffff;
    margin: 0.5rem;

    @media ${device.desktop} {
      width: 2.5rem;
      height: 0.15rem;
    }
  }
`;

export const Menu = styled.ul`
  width: 15rem;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
  list-style-type: none;
  background-color: #ffffff;
  padding: 0;
  margin: 0;
  position: absolute;
  top: 5rem;
  right: 1rem;
  border-radius: 5px;
  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.2);
  z-index: 3;

  &::before {
    content: "";
    position: absolute;
    top: -0.4rem;
    right: 2rem;
    height: 1.5rem;
    width: 1.5rem;
    background: #fff;
    z-index: -1;
    transform: rotate(45deg);
  }

  @media ${device.desktop} {
    top: 6rem;
  }
`;

export const MenuItem = styled.li`
  width: 100%;
  display: flex;
  padding: 0.8rem 1.2rem;
  font-weight: 500;
  font-size: 1.2rem;
  color: #000;
  border-radius: 0.4rem;
  cursor: pointer;

  @media ${device.desktop} {
    font-size: 1.4rem;
  }

  &:hover {
    background: #252525;
    color: #fff;
  }
`;
