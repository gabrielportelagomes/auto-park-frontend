import styled from "styled-components";

import { device } from "../../assets/styles/breakpoints";

export const Title = styled.h2`
  width: 90%;
  font-family: "Lato", sans-serif;
  font-weight: 700;
  font-size: 0.8rem;
  line-height: 1rem;
  color: #ffffff;
  text-align: center;

  @media ${device.desktop} {
    font-size: 1.1rem;
    line-height: 1.1rem;
  }
`;

export const ButtonContainer = styled.div`
  width: 9rem;
  display: flex;
  justify-content: space-between;
  margin-top: 1rem;

  @media ${device.desktop} {
    width: 14rem;
  }
`;

export const Close = styled.button`
  width: 4rem;
  height: 1.5rem;
  background: #ffffff;
  border-radius: 0.3rem;
  border: none;
  font-family: "Lato", sans-serif;
  font-weight: 700;
  font-size: 0.6rem;
  color: #1877f2;
  cursor: pointer;

  @media ${device.desktop} {
    width: 6rem;
    height: 1.8rem;
    font-size: 0.8rem;
  }
`;

export const Comfirm = styled.button`
  width: 4rem;
  height: 1.5rem;
  display: flex;
  align-items: center;
  justify-content: center;
  background: #1877f2;
  border-radius: 0.3rem;
  border: none;
  font-family: "Lato", sans-serif;
  font-weight: 700;
  font-size: 0.6rem;
  color: #ffffff;
  cursor: pointer;

  @media ${device.desktop} {
    width: 6rem;
    height: 1.8rem;
    font-size: 0.8rem;
  }
`;
