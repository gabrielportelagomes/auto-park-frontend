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
