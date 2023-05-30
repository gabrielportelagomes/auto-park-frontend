import { IoLocationSharp } from "react-icons/io5";

import styled from "styled-components";
import { device } from "../../assets/styles/breakpoints";

export const Sidebar = styled.div`
  width: 100%;
  height: 8rem;
  display: flex;
  flex-direction: column;
  align-items: center;
  background: #252525;
  box-shadow: 0 0.25rem 0.25rem rgba(0, 0, 0, 0.25);

  @media ${device.tablet} {
    width: 50%;
    height: 100vh;
    justify-content: center;
    box-shadow: none;
  }

  @media ${device.desktop} {
    width: calc(100% - 33rem);
    align-items: initial;
  }
`;

export const LocationIcon = styled(IoLocationSharp)`
  display: none;

  @media ${device.tablet} {
    display: initial;
    width: 20rem;
    font-size: 4rem;
    color: #fff;
    text-align: left;
  }

  @media ${device.desktop} {
    width: 27rem;
    font-size: 6rem;
    margin: 0 0 1rem 10%;
  }
`;

export const Header = styled.header`
  font-family: "Alkatra", cursive;
  font-weight: 700;
  font-size: 4.2rem;
  letter-spacing: 0.2rem;
  color: white;
  margin-top: 1rem;

  @media ${device.tablet} {
    width: 20rem;
  }

  @media ${device.desktop} {
    width: 27rem;
    font-size: 6rem;
    margin-left: 10%;
  }
`;

export const Subtitle = styled.h1`
  max-width: 20rem;
  font-weight: 700;
  font-size: 1rem;
  text-align: center;
  letter-spacing: 0;
  line-height: normal;
  color: #fff;
  margin-top: -0.5rem;

  @media ${device.tablet} {
    max-width: 20rem;
    text-align: left;
  }

  @media ${device.desktop} {
    max-width: 27rem;
    font-size: 1.35rem;
    margin: 0 0 0 10%;
  }
`;
