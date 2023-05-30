import styled from "styled-components";

import { device } from "../../assets/styles/breakpoints";

export const ButtonContainer = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
  margin-top: 1.5rem;
`;

export const ButtonStyle = styled.button<{ disabled: boolean }>`
  width: 12rem;
  height: 3rem;
  display: flex;
  justify-content: center;
  align-items: center;
  font-family: "Oswald", sans-serif;
  font-weight: 700;
  font-size: 1.2rem;
  color: #ffffff;
  background: #1877f2;
  border-radius: 0.5rem;
  border: none;
  cursor: ${(props) => (props.disabled ? "not-allowed" : "pointer")};

  @media ${device.desktop} {
    width: 15rem;
    height: 3.5rem;
    font-size: 1.5rem;
  }
`;

export const InputContainer = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const InputStyle = styled.input`
  width: 90%;
  max-width: 30rem;
  height: 2.5rem;
  margin-bottom: 1rem;
  border: 1px solid #cecece;
  border-radius: 0.3rem;
  padding: 0.6rem;
  font-size: 1rem;
  font-weight: 300;
  color: #000;
`;

export const LabelStyle = styled.label`
  width: 90%;
  max-width: 30rem;
  margin-bottom: 0.3rem;
  font-size: 1.2rem;
  color: #000;
`;
