import styled from "styled-components";

import { device } from "../../assets/styles/breakpoints";

export const PageContainer = styled.div`
  display: flex;
  flex-direction: column;

  @media ${device.tablet} {
    flex-direction: initial;
  }
`;

export const FormContainer = styled.div`
  width: 100%;
  height: 100vh;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  @media ${device.tablet} {
    width: 50%;
  }
`;

export const Form = styled.form`
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

export const Link = styled.div`
  width: 90%;
  margin-top: 3rem;
  cursor: pointer;

  p {
    font-size: 0.9rem;
    font-weight: 300;
    color: #000;
    text-align: center;
  }

  @media ${device.tablet} {
    margin-top: 4rem;

    p {
      font-size: 1rem;
    }
  }
`;
