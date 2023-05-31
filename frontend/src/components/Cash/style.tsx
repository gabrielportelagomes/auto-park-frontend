import styled from "styled-components";

import { device } from "../../assets/styles/breakpoints";

export const Container = styled.div<{ disabled: boolean }>`
  width: 6rem;
  display: flex;
  flex-direction: column;
  border: 1px solid #cecece;
  border-radius: 0.5rem;
  padding: 0.5rem 0.3rem;
  background: ${(props) => (props.disabled ? "#cecece" : "#fff")};

  @media ${device.desktop} {
    padding: 0.7rem 0.4rem;
    width: 8rem;
  }
`;

export const Value = styled.h4`
  width: 100%;
  font-size: 1rem;
  font-weight: 700;
  text-align: center;
  margin-bottom: 0.5rem;

  @media ${device.desktop} {
    font-size: 1.2rem;
  }
`;

export const Quantity = styled.div`
  display: flex;
  justify-content: space-between;
  font-size: 0.8rem;
  line-height: 1rem;
`;

export const Total = styled.div`
  display: flex;
  justify-content: space-between;
  font-size: 0.8rem;
  line-height: 1rem;
`;
