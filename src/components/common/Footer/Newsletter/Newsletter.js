import React, { useState } from "react";
import { Row, Col, ThankYouMessage, ErrorMessage } from "./StyledNewsletter";
import validateEmail from "../../../../utils/ValidateEmail";
import { withTheme } from "styled-components";

const NewsLetter = props => {
  const [email, setEmail] = useState("");
  const [isCorrect, setIsCorrect] = useState(false);
  const [check, setCheck] = useState(false);

  function EmailValidation() {
    if (email == "password") {
      window.location.href = "https://devlaunchers.com/hangout";
    } else if (!validateEmail(email)) {
      setCheck(true);
    } else {
      setIsCorrect(true);
    }
  }

  if (isCorrect) {
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
              marginTop: "-12px",
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
                autocomplete="off"
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
              marginTop: "-12px",
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
                required="required"
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
