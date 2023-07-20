import { styled } from "styled-components";

export const Container = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 32px;
  margin-bottom: 10rem;

  @media(max-width: 930px) {
    grid-template-columns: 1fr;
  } 
`