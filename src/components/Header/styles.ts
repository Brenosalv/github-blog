import styled from 'styled-components';

export const HeaderContainer = styled.nav`
  display: flex;
  align-items: center;
  justify-content: space-between;
  background-color: ${props => props.theme['base-profile']};
`

export const HeaderImage = styled.img`
  cursor: pointer;
`
