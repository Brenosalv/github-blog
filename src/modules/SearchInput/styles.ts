import { styled } from "styled-components";

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  gap: 12px;
  margin: 72px 0 48px 0;
  width: 100%;

  header {
    display: flex;
    justify-content: space-between;
    
    h3 {
      color: ${props => props.theme["base-subtitle"]};
      font-size: 1.125rem;
      font-style: normal;
      font-weight: 700;
    }

    span {
      color: ${props => props.theme["base-span"]};
    }
  }

  main {
    input {
      width: 100%;
      border-radius: 6px;
      border: 1px solid ${props => props.theme["base-border"]};
      background: ${props => props.theme["base-input"]};
      padding: 12px 16px;
      color: ${props => props.theme["base-text"]};
      font-size: 1rem;
      
      &::placeholder {
        color: ${props => props.theme["base-label"]};
      }

      &:focus {
        border: 1px solid ${props => props.theme["blue"]};
      }
    }
  }
`
