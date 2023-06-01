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

  @media ${device.tablet} {
    max-width: 40rem;
  }
`;

export const Title = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 0.5rem;

  h3 {
    font-size: 1.3rem;
    font-weight: 700;
    text-align: center;
  }

  @media ${device.desktop} {
    h3 {
      font-size: 1.5rem;
    }
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
`;

export const ExitButton = styled.button<{ display: string | null }>`
  width: 100%;
  height: 1.5rem;
  display: ${(props) => (props.display === null ? "flex" : "none")};
  justify-content: center;
  align-items: center;
  background: #800;
  border: none;
  border-radius: 0.5rem;
  font-size: 1rem;
  font-weight: 700;
  color: #fff;
  margin-top: 1rem;
  cursor: pointer;

  @media ${device.desktop} {
    height: 1.7rem;
    font-size: 1.2rem;
  }
`;
