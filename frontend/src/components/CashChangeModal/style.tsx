import styled from "styled-components";

import { device } from "../../assets/styles/breakpoints";

export const Close = styled.button`
  background: #333333;
  font-size: 0.8rem;
  font-family: "Lato", sans-serif;
  border: none;
  font-weight: 700;
  color: #ffffff;
  position: absolute;
  top: 1rem;
  right: 2rem;

  @media ${device.desktop} {
    font-size: 1.5rem;
    top: 1.5rem;
    right: 3rem;
  }
`;

export const Title = styled.h2`
  width: 10rem;
  font-family: "Lato", sans-serif;
  font-weight: 700;
  font-size: 1rem;
  color: #ffffff;
  text-align: center;
  margin-top: 1rem;

  @media ${device.desktop} {
    width: 21rem;
    font-size: 2rem;
  }
`;

export const Content = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  margin: 1rem 0;
`;

export const Change = styled.div`
  width: 90%;
  display: flex;
  justify-content: space-between;
`;

export const Details = styled.h3`
  font-family: "Lato", sans-serif;
  font-weight: 500;
  font-size: 0.8rem;
  color: #fff;
  text-align: center;
  margin: 1rem 0;

  @media ${device.desktop} {
    font-size: 1.5rem;
  }
`;

export const Total = styled.h3`
  width: 100%;
  font-family: "Lato", sans-serif;
  font-weight: 700;
  font-size: 0.9rem;
  color: #fff;
  text-align: right;
  margin-top: 1rem;
  margin-right: 2rem;

  @media ${device.desktop} {
    font-size: 1.5rem;
    margin-right: 4rem;
  }
`;
