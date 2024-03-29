import styled from "styled-components";

import { device } from "../../assets/styles/breakpoints";

export const Container = styled.div`
  width: 90%;
  display: flex;
  flex-direction: column;
  background: #fff;
  border-radius: 0.5rem;
  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.2);
  margin-top: 3rem;

  @media ${device.desktop} {
    max-width: 60rem;
    margin-top: 5rem;
  }
`;

export const Top = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  margin-top: 1rem;
`;

export const Title = styled.h1`
  font-size: 1.1rem;

  @media ${device.desktop} {
    font-size: 1.3rem;
  }
`;

export const Content = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin: 1rem;
`;
