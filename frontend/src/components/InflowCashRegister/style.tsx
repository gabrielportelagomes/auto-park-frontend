import styled from "styled-components";

import { device } from "../../assets/styles/breakpoints";

export const Container = styled.div`
  width: 90%;
  display: flex;
  flex-direction: column;
  align-items: center;
  background: #fff;
  border-radius: 0.5rem;
  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.2);
  padding: 1rem 0;

  @media ${device.desktop} {
    max-width: 60rem;
  }
`;

export const Title = styled.h2`
  font-size: 1.5rem;
`;

export const Content = styled.div`
  width: 100%;
  display: grid;
  grid-template-columns: 6rem 6rem 6rem;
  justify-content: space-around;
  gap: 1rem;
  margin-top: 1rem;

  @media ${device.tablet} {
    grid-template-columns: 6rem 6rem 6rem 6rem;
  }
`;

export const Cash = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin: 0.5rem 0;
`;

export const Label = styled.label`
  width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

export const Quantity = styled.label`
  width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-top: 0.5rem;
`;

export const TotalAmount = styled.h3`
  width: 100%;
  font-size: 1.3rem;
  font-weight: 700;
  text-align: right;
  padding: 1rem 2rem;
`;

export const ButtonContainer = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
  margin: 1rem 0;
`;

export const EntryButton = styled.button`
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
  cursor: pointer;
`;
