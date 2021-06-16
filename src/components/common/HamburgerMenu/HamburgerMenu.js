import React from "react";
import Link from "next/link";
import style from "./HamburgerMenu.module.css";
import logoMonogramImage from "../../../images/logo-monogram.png";
import { Logout } from "../../../utils/Logout";
import { slide as SlideHamburgerMenu } from "react-burger-menu";
import { env } from "../../../utils/EnvironmentVariables";
import constate from "../../../context/UserDataContext";
import { useUserDataContext } from "../../../context/UserDataContext";

function HamburgerMenu(props) {
  const { userData } = useUserDataContext();
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
            <Link href={"/"} className="nav-link">
              <div className={style.LogoImageHolder}>
                <img src={logoMonogramImage} className={style.LogoImage} />
              </div>
            </Link>
          </div>
        </div>
        <div>
          <div className={style.HeaderNav} onClick={handleNavClick}>
            <Link href={"/create"} className="nav-link">
              <a>
                <div className={style.navEntry}>CREATE</div>
              </a>
            </Link>
            <Link href={"/learn"} className="nav-link">
              <a>
                <div className={style.navEntry}>LEARN</div>
              </a>
            </Link>

            <div>
              {userData.id ? (
                <>
                  <Link href={"/user-profile"} className="nav-link">
                    <a>
                      <div className={style.navEntry}>VISIT ACCOUNT PAGE</div>
                    </a>
                  </Link>
                  <div onClick={Logout} className="nav-link">
                    <a>
                      <div className={style.navEntry}>LOG OUT </div>
                    </a>
                  </div>
                </>
              ) : (
                <Link href={env().GOOGLE_AUTH_URL} className="nav-link">
                  <a>
                    <div className={style.navEntry}>SIGN IN </div>
                  </a>
                </Link>
              )}
            </div>

            {/*}
            <Link href={"/play"} className="nav-link">
              <div className={style.navEntry}>PLAY</div>
            </Link>
            {*/}
            <Link href={"/earn"} className="nav-link">
              <a>
                <div className={style.navEntry}>EARN</div>
              </a>
            </Link>
            <Link href={"/support-us"} className="nav-link">
              <a>
                <div className={style.navEntry}>SUPPORT US</div>
              </a>
            </Link>
            <Link href={"/members"} className="nav-link">
              <a>
                <div className={style.navEntry}>JOIN</div>
              </a>
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
        {/*} <div className={style.LogoWords}>Dev Launchers</div> */}
      </div>
    </SlideHamburgerMenu>
  );
}

export default HamburgerMenu;
