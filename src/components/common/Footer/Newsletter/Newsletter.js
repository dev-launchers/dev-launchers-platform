import React, { useState } from "react";
import {
  Row,
  Col,
  ThankYouMessage,
  ErrorMessage,
  Secret
} from "./StyledNewsletter";
import validateEmail from "../../../../utils/ValidateEmail";
import { withTheme } from "styled-components";

const NewsLetter = props => {
  const [email, setEmail] = useState("");
  const [isCorrect, setIsCorrect] = useState(false);
  const [check, setCheck] = useState(false);
  const [secret, setSecret] = useState(false);

  function EmailValidation() {
    if (email == "password") {
      setSecret(true);
    } else if (!validateEmail(email)) {
      setCheck(true);
    } else {
      setIsCorrect(true);
    }
  }

  if (secret) {
    return (
      <div>
        <p
          style={{
            fontSize: "7rem",
            marginTop: "10px",
            marginBottom: "20px"
          }}
        >
          →{" "}
          <Secret href="https://devlaunchers.com/hangout">
            <span>😄</span>
          </Secret>{" "}
          ←
        </p>
      </div>
    );
  } else if (isCorrect) {
    return (
      <div>
        <ThankYouMessage>
          <p id="thankYou">Thank You!</p>
        </ThankYouMessage>
        <ThankYouMessage>
          <p id="message">You successfully signed up to our newsletter!</p>
        </ThankYouMessage>
      </div>
    );
  } else {
    if (check) {
      return (
        <div class="form">
          <h2
            style={{
              fontSize: "3rem",
              marginTop: "0px",
              marginBottom: "12px"
            }}
          >
            <span
              style={{
                fontSize: "3.25rem"
              }}
            >
              ✉
            </span>
            &nbsp; Sign up to our newsletter!&nbsp;
          </h2>
          <Row>
            <Col
              style={{
                backgroundColor: props.theme.colors.ACCENT_2,
                fontWeight: "bold",
                borderBottomLeftRadius: "25px",
                marginLeft: "-5px",
                marginRight: "5px",
                outline: "3px solid red"
              }}
              size={3}
            >
              <input
                id="userEmail"
                onChange={e => setEmail(e.target.value)}
                value={email}
                type="email"
                placeholder="Enter your email here!"
              />
            </Col>
            <Col
              style={{
                fontWeight: "bold",
                borderBottomRightRadius: "25px",
                cursor: "pointer"
              }}
              size={1}
              onClick={EmailValidation}
            >
              <button id="submitButton">Submit</button>
            </Col>
          </Row>
          <ErrorMessage>Please enter a valid email!</ErrorMessage>
        </div>
      );
    } else {
      return (
        <div class="form">
          <h2
            style={{
              fontSize: "3rem",
              marginTop: "0px",
              marginBottom: "12px"
            }}
          >
            <span
              style={{
                fontSize: "3.25rem"
              }}
            >
              ✉
            </span>
            &nbsp; Sign up to our newsletter!&nbsp;
          </h2>
          <Row>
            <Col
              style={{
                backgroundColor: props.theme.colors.ACCENT_2,
                fontWeight: "bold",
                borderBottomLeftRadius: "25px"
              }}
              size={3}
            >
              <input
                id="userEmail"
                onChange={e => setEmail(e.target.value)}
                value={email}
                type="email"
                placeholder="Enter your email here!"
              />
            </Col>
            <Col
              style={{
                fontWeight: "bold",
                borderBottomRightRadius: "25px",
                cursor: "pointer"
              }}
              size={1}
              onClick={EmailValidation}
            >
              <button id="submitButton">Submit</button>
            </Col>
          </Row>
        </div>
      );
    }
  }
};

export default withTheme(NewsLetter);
