import styled from "styled-components";
import { BsCashCoin } from "react-icons/bs";

import { device } from "../../assets/styles/breakpoints";

export const Container = styled.div`
  width: 90%;
  display: flex;
  flex-direction: column;
  background: #fff;
  border-radius: 0.5rem;
  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.2);

  @media ${device.desktop} {
    max-width: 60rem;
  }
`;

export const Top = styled.div`
  display: flex;
  justify-content: center;
  margin-top: 1rem;
`;

export const CashIcon = styled(BsCashCoin)`
  width: 2rem;
  height: 2rem;
  margin-right: 1rem;
`;

export const Title = styled.h1`
  font-size: 1.5rem;
`;

export const Content = styled.div`
  display: grid;
  grid-template-columns: 6rem 6rem 6rem;
  justify-content: space-around;
  gap: 1rem;
  margin: 1rem;

  @media ${device.tablet} {
    grid-template-columns: 6rem 6rem 6rem 6rem;
  }

  @media ${device.desktop} {
    grid-template-columns: 8rem 8rem 8rem 8rem;
  }
`;

export const TotalAmount = styled.h2`
  font-size: 1.3rem;
  font-weight: 700;
  text-align: right;
  padding: 1rem 2rem;

  @media ${device.desktop} {
    font-size: 1.5rem;
  }
`;
