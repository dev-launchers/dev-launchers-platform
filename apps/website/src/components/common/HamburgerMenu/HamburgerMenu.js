import React from "react";
import Link from "next/link";
import Image from "next/legacy/image";
import { slide as SlideHamburgerMenu } from "react-burger-menu";
import style from "./HamburgerMenu.module.css";
import logoMonogramImage from "../../../images/logo-monogram.png?webp";
import Logout from "../../../utils/Logout";
import { useUserDataContext } from "@devlaunchers/components/context/UserDataContext";

function HamburgerMenu() {
  const { userData, setUserData } = useUserDataContext();
  const [menuOpen, setMenuOpen] = React.useState(false);

  // Called when the open/close state of the menu changes (onStateChange callback)
  const isMenuOpen = (state) => {
    setMenuOpen(state.isOpen);
  };

  // Called whenever a navigation item in the menu is clicked (closes menu)
  const handleNavClick = () => {
    setMenuOpen(false);
  };

  const handleLogout = () => {
    Logout();
    setUserData({
      id: 0,
      name: '',
      username: '',
      email: '',
      bio: '',
      profilePictureUrl: '',
      socialMediaLinks: [],
      totalPoints: 0,
      totalSeasonPoints: 0,
      availablePoints: 0,
      volunteerHours: 0,
      discord: {
        id: 0,
        avatar: '',
        username: '',
        discriminator: '',
      },
      interests: [],
    })
  };

  return (
    <SlideHamburgerMenu
      right
      className={style.menuBody}
      overlayClassName={style.overlay}
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
          flexDirection: "column",
        }}
      >
        <div className={style.Logo} onClick={handleNavClick}>
          <div className={style.LogoWrapper}>
            <Link href={"/"} passHref>
              <a className="nav-link">
                <div className={style.LogoImageHolder}>
                  <Image
                    alt="Logo"
                    src={logoMonogramImage}
                    className={style.LogoImage}
                    width="144"
                    height="144"
                  />
                </div>
              </a>
            </Link>
          </div>
        </div>
        <div>
          <div className={style.HeaderNav} onClick={handleNavClick}>
            <Link href={"/create"} passHref>
              <a className="nav-link">
                <div className={style.navEntry}>CREATE</div>
              </a>
            </Link>
            <Link href={"/learn"} passHref>
              <a className="nav-link">
                <div className={style.navEntry}>LEARN</div>
              </a>
            </Link>

            <div>
              {userData?.id ? (
                <>
                  <Link href={"/users/me"} passHref>
                    <a className="nav-link">
                      <div className={style.navEntry}>VISIT ACCOUNT PAGE</div>
                    </a>
                  </Link>
                  <a onClick={Logout} className="nav-link">
                    <div className={style.navEntry}>LOG OUT </div>
                  </a>
                </>
              ) : (
                <a href={process.env.NEXT_PUBLIC_GOOGLE_AUTH_URL
                  +`?redirectURL=${process.env.NEXT_PUBLIC_FRONT_END_URL}/users/me`} className="nav-link">
                  <div className={style.navEntry}>SIGN IN </div>
                </a>
              )}
            </div>

            {/* }
            <Link href={"/play"} className="nav-link">
              <div className={style.navEntry}>PLAY</div>
            </Link>
            { */}
            <Link href={"/earn"} passHref>
              <a className="nav-link">
                <div className={style.navEntry}>EARN</div>
              </a>
            </Link>
            <Link href={"/support-us"} passHref>
              <a className="nav-link">
                <div className={style.navEntry}>SUPPORT US</div>
              </a>
            </Link>
            <Link href={"/join"} passHref>
              <a className="nav-link">
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
          { */}
        </div>
        {/* } <div className={style.LogoWords}>Dev Launchers</div> */}
      </div>
    </SlideHamburgerMenu>
  );
}

export default HamburgerMenu;
