import { styled } from "styled-components";

export const Avatar = styled.img`
  flex-shrink: 0;
  border-radius: 8px;
`

export const ProfileInfoContainer = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;

  header {
    display: flex;
    justify-content: space-between;

    h1 {
      color: ${props => props.theme["base-title"]};
      font-size: 1.5rem;
      font-style: normal;
      font-weight: 700;
    }

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

      &:hover {
        cursor: pointer;
        border-bottom: 1px solid ${props => props.theme["blue"]};;
      }
    }
  }

  main {
    margin: 8px 0 24px;

    h2 {
      color: ${props => props.theme["base-text"]};
      font-size: 1rem;
      font-style: normal;
      font-weight: 400;
    }
  }

  footer {
    display: flex;
    align-items: center;
    gap: 24px;

    color: ${props => props.theme["base-text"]};
    font-style: normal;
    font-weight: 400;

    div {
      display: flex;
      align-items: center;
      gap: 8px;
    }
  }
`