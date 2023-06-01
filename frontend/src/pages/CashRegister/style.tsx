import styled from "styled-components";

import { device } from "../../assets/styles/breakpoints";

export const PageContainer = styled.div`
  width: 100vw;
  height: 100vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 6rem 0 3rem 0;
  overflow-y: auto;

  @media ${device.desktop} {
    padding: 7rem 0;
  }
`;

export const Form = styled.form`
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

export const Content = styled.div`
  width: 90%;
  display: flex;
  flex-direction: column;
  align-items: center;
  background: #fff;
  border-radius: 0.5rem;
  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.2);
  padding: 1rem 0;
  margin-bottom: 3rem;

  @media ${device.desktop} {
    max-width: 60rem;
  }
`;

export const Title = styled.h2`
  font-size: 1.5rem;
`;

export const TotalAmount = styled.h3`
  width: 100%;
  font-size: 1.3rem;
  font-weight: 700;
  text-align: right;
  padding: 1rem 2rem;
`;
