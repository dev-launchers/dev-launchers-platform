import React from "react";
import Link from "next/link";
import PageBody from "../../common/PageBody";
import logoMonogramImage from "../../../images/logo-monogram.png?webp";
import chessPiece from "../../../images/check-it/chess_display_large.jpg?webp";

import {
  Side,
  Main,
  Row,
  List,
  NewTabLink,
  LogoImage,
  ChessImageWrapper,
  ChessImage,
} from "./StyledSocialMedia";

export default function SocialMedia() {
  return (
    <div>
      <PageBody>
        <br />
        <Row>
          <Side>
            <h2>check it</h2>
            <ChessImageWrapper>
              <ChessImage src={chessPiece} />
            </ChessImageWrapper>
          </Side>
          <Main>
            <p>
              <b>Join</b> the Discord chats and Twitch streams to interact with
              the Devlaunchers community.
            </p>
            <List>
              <li>
                <NewTabLink href="https://discord.io/devlaunchers/">
                  <i className="fab fa-discord fa-2x" />
                  &nbsp;Discord
                </NewTabLink>
              </li>
              <li>
                <NewTabLink href="https://www.twitch.tv/devlaunchers">
                  <i className="fab fa-twitch fa-2x" />
                  &nbsp;Twitch
                </NewTabLink>
              </li>
            </List>
            <br />
            <p>
              <b>Collaborate</b> with fellow members on a variety of projects.
            </p>
            <List>
              <li>
                <Link href={"/hangout"} passHref>
                  <a>
                    <div>
                      <LogoImage src={logoMonogramImage} />
                      &nbsp;Hangout Link
                    </div>
                  </a>
                </Link>
              </li>
              <li>
                <Link href={"/play"} passHref>
                  <a>
                    <div>
                      <LogoImage src={logoMonogramImage} />
                      &nbsp;Project Showcase
                    </div>
                  </a>
                </Link>
              </li>
            </List>

            <br />
            <p>
              <b>Follow</b> devlauncher adventures on social media.
            </p>
            <List>
              <li>
                <NewTabLink href="https://www.instagram.com/devlaunchers/">
                  <i className="fab fa-instagram fa-2x" />
                  &nbsp;Instagram
                </NewTabLink>
              </li>
              <li>
                <NewTabLink href="https://www.linkedin.com/company/devlaunchers/">
                  <i className="fab fa-linkedin fa-2x" />
                  &nbsp;LinkedIn
                </NewTabLink>
              </li>
            </List>
          </Main>
        </Row>

        <br />
      </PageBody>
    </div>
  );
}
