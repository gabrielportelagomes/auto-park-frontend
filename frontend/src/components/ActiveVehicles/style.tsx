import styled from "styled-components";
import { IoLocationSharp } from "react-icons/io5";

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

export const CashIcon = styled(IoLocationSharp)`
  width: 2rem;
  height: 2rem;
  margin-right: 1rem;
`;

export const Title = styled.h1`
  font-size: 1.5rem;
`;

export const Content = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin: 1rem;
`;
