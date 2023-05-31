import styled, { keyframes } from "styled-components";

import { device } from "../../assets/styles/breakpoints";

export const Container = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  border: 1px solid #cecece;
  border-radius: 0.5rem;
  padding: 0.5rem 0.3rem;
  margin-top: 0.5rem;
  position: relative;

  @media ${device.tablet} {
    max-width: 40rem;
  }
`;

export const Title = styled.h3`
  width: 100%;
  font-size: 1.3rem;
  font-weight: 700;
  text-align: center;
  margin-bottom: 0.5rem;

  @media ${device.desktop} {
    font-size: 1.5rem;
  }
`;

export const Type = styled.div`
  display: flex;
  justify-content: space-between;
  font-size: 1rem;
  line-height: 1.5rem;
`;

export const EntryTime = styled.div`
  display: flex;
  justify-content: space-between;
  font-size: 1rem;
  line-height: 1.5rem;
`;

const blinkAnimation = keyframes`
  0% {
    background-color: lightgreen;
  }
  50% {
    background-color: darkgreen;
  }
  100% {
    background-color: lightgreen;
  }
`;

export const Circle = styled.div`
  width: 0.5rem;
  height: 0.5em;
  border-radius: 50%;
  background-color: lightgreen;
  animation: ${blinkAnimation} 1s infinite alternate;
  position: absolute;
  right: 1rem;
  top: 1rem;
`;
