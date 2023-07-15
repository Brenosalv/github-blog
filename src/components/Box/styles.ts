import { styled } from "styled-components";

export const Container = styled.div`
  display: flex;
  align-items: center;
  gap: 32px;
  padding: 32px 40px;
  background-color: ${props => props.theme["base-profile"]};
  border-radius: 10px;
  box-shadow: 0px 2px 32px 8px rgba(0, 0, 0, 0.20);
`
