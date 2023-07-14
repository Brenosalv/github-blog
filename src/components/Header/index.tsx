/* eslint-disable @typescript-eslint/no-unsafe-call */
/* eslint-disable @typescript-eslint/no-unsafe-assignment */
import { useNavigate } from "react-router-dom";
import EffectLeft from "../../assets/images/effect-left.svg";
import EffectRight from "../../assets/images/effect-right.svg";
import GithubBlogLogo from "../../assets/images/logo.svg";
import {
  HeaderContainer,
  Logo
} from "./styles";

export function Header() {
  const navigate = useNavigate();

  function handleLogoClick() {
    navigate("/");
  }

  return (
    <HeaderContainer>
      <img src={EffectLeft} alt="" />
      <Logo src={GithubBlogLogo} alt="Coffee Delivery" onClick={handleLogoClick} />
      <img src={EffectRight} alt="" />
    </HeaderContainer>
  )
}