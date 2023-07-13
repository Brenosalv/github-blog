/* eslint-disable @typescript-eslint/no-unsafe-call */
/* eslint-disable @typescript-eslint/no-unsafe-assignment */
import { useNavigate } from "react-router-dom";
import EffectLeft from "../../assets/images/effect-left.svg";
import EffectRight from "../../assets/images/effect-right.svg";
import GithubBlogLogo from "../../assets/images/logo.svg";
import {
  HeaderContainer,
  HeaderImage,
} from "./styles";

export function Header() {
  const navigate = useNavigate();

  function handleLogoClick() {
    navigate("/");
  }

  return (
    <HeaderContainer>
      <HeaderImage src={EffectLeft} alt="" />
      <HeaderImage src={GithubBlogLogo} alt="Coffee Delivery" onClick={handleLogoClick} />
      <HeaderImage src={EffectRight} alt="" />
    </HeaderContainer>
  )
}