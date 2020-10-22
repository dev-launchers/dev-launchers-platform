import React from "react";
import { Link } from "react-router-dom";

import style from "./HamburgerMenu.module.css";
import logoMonogramImage from "../../../images/logo-monogram.png";

import { slide as SlideHamburgerMenu } from "react-burger-menu";

function HamburgerMenu(props) {
  const [menuOpen, setMenuOpen] = React.useState(false);

  // Called when the open/close state of the menu changes (onStateChange callback)
  const isMenuOpen = function(state) {
    setMenuOpen(state.isOpen);
  };

  // Called whenever a navigation item in the menu is clicked (closes menu)
  const handleNavClick = () => {
    setMenuOpen(false);
  };

  return (
    <SlideHamburgerMenu
      right
      isOpen={menuOpen}
      burgerButtonClassName={style.burgerButton}
      burgerBarClassName={style.burgerBar}
      crossButtonClassName={style.crossButton}
      crossClassName={style.crossClass}
      onStateChange={isMenuOpen}
    >
      <div
        style={{
          position: "relative",
          width: "100%",
          height: "100%",
          backgroundColor: "#1c1c1c",
          color: "#d9d9d9",
          display: "flex",
          alignItems: "center",
          flexDirection: "column"
        }}
      >
        <div className={style.Logo} onClick={handleNavClick}>
          <div className={style.LogoWrapper}>
            <Link to={"/"} className="nav-link">
              <div className={style.LogoImageHolder}>
                <img src={logoMonogramImage} className={style.LogoImage} />
              </div>
            </Link>
          </div>
        </div>
        <div>
          <div className={style.HeaderNav} onClick={handleNavClick}>
            <Link to={"/create"} className="nav-link">
              <div className={style.navEntry}>CREATE</div>
            </Link>
            <Link to={"/learn"} className="nav-link">
              <div className={style.navEntry}>LEARN</div>
            </Link>
            {/*}
            <Link to={"/play"} className="nav-link">
              <div className={style.navEntry}>PLAY</div>
            </Link>
            {*/}
            <Link to={"/earn"} className="nav-link">
              <div className={style.navEntry}>EARN</div>
            </Link>
            <Link to={"/support-us"} className="nav-link">
              <div className={style.navEntry}>SUPPORT US</div>
            </Link>
            <Link to={"/members"} className="nav-link">
              <div className={style.navEntry}>JOIN</div>
            </Link>
          </div>
          {/* }
          <div className={style.SignInArea}>
            {authUser ? (
              <img className={style.UserProfilePic} src={authUser.photoURL} />
            ) : (
              <Button fontSize="1.2rem" onClick={doAuthRequest}>
                Sign In
              </Button>
            )}
          </div>
          {*/}
        </div>
        <div className={style.LogoWords}>Dev Launchers</div>
      </div>
    </SlideHamburgerMenu>
  );
}

export default HamburgerMenu;
