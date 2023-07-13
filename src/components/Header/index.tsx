/* eslint-disable @typescript-eslint/no-unsafe-call */
/* eslint-disable @typescript-eslint/no-unsafe-assignment */
import { useNavigate } from "react-router-dom";
import GithubBlogLogo from "../../assets/images/logo.svg";
import {
  HeaderContainer,
  Logo,
} from "./styles";

export function Header() {
  const navigate = useNavigate();

  function handleLogoClick() {
    navigate("/");
  }

  return (
    <HeaderContainer>
      <Logo src={GithubBlogLogo} alt="Coffee Delivery" onClick={handleLogoClick} />
    </HeaderContainer>
  )
}