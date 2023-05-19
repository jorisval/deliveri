import MenuMd from "./Menu-md";
import NavLg from "./Nav-lg";
import DeliveriLogo from "../../assets/images/deliveri-logo.png";
import { HeaderContext } from "../utils/context";
import { useContext } from "react";

function Header() {
  const { activePage } = useContext(HeaderContext);

  return (
    <div className={activePage === "home" ? "header home" : "header"}>
      <MenuMd />
      <div className="header__logo">
          <img src={DeliveriLogo} alt=""/>
      </div>
      <NavLg />
      <div className="header__button">
          <button className="cta-button"><span className="bi bi-telephone-fill"></span> <span className="number"> +33 7 80 70 82 87</span></button>
      </div>
    </div>
  );
}
  
export default Header;
  