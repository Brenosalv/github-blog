import { styled } from "styled-components";

export const ContentContainer = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;

  header {
    display: flex;
    justify-content: space-between;
    align-items: center;

    span {
      height: fit-content;
      display: flex;
      align-items: center;
      gap: 8px;

      font-size: 0.75rem;
      font-style: normal;
      font-weight: 700;
      text-transform: uppercase;
      color: ${props => props.theme["blue"]};
      border-bottom: 1px solid transparent;

      &:hover {
        cursor: pointer;
        border-bottom: 1px solid ${props => props.theme["blue"]};
      }
    }
  }

  main {
    margin: 20px 0 8px;

    h1 {
      color: ${props => props.theme["base-title"]};
      font-size: 1.5rem;
      font-style: normal;
      font-weight: 700;
    }
  }

  footer {
    display: flex;
    gap: 32px;

    span {
      display: flex;
      gap: 8px;
      align-items: center;
      color: ${props => props.theme["base-span"]};
    }
  }
`
