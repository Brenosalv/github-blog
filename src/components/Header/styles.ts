import styled from 'styled-components';

export const HeaderContainer = styled.nav`
  display: flex;
  align-items: center;
  justify-content: space-between;
  background-color: ${props => props.theme['base-profile']};
  height: 18.5rem;
`

export const Logo = styled.img`
  cursor: pointer;
  margin-top: -5.5rem;
`
