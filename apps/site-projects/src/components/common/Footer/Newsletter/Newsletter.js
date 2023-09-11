import React, { useState } from "react";
import { withTheme } from "styled-components";
import axios from "axios";
import {
  Row,
  Col,
  ThankYouMessage,
  ErrorMessage,
  Secret,
} from "./StyledNewsletter";
import validateEmail from "../../../../utils/ValidateEmail";
import { env } from "../../../../utils/EnvironmentVariables";

const NewsLetter = (props) => {
  const [email, setEmail] = useState("");
  const [isCorrect, setIsCorrect] = useState(false);
  const [check, setCheck] = useState(false);
  const [secret, setSecret] = useState(false);
  const [isEmailAlreadyUsed, setIsEmailAlreadyUsed] = useState(false);

  const EmailValidation = () => {
    if (email === "password") {
      setSecret(true);
    } else if (!validateEmail(email)) {
      setCheck(true);
    } else {
      axios
        .post(`${env().STRAPI_URL}/newsletters`, {
          email,
        })
        .then(() => {
          setIsCorrect(true);
        })
        .catch(() => {
          setIsEmailAlreadyUsed(true);
        });
    }
  };

  const sendEmail = () => {
    EmailValidation(email);
  };

  if (secret) {
    return (
      <div>
        <p
          style={{
            fontSize: "7rem",
            marginTop: "10px",
            marginBottom: "20px",
            textAlign: "center",
          }}
        >
          →{" "}
          <Secret href="https://devlaunchers.org/hangout">
            <span>😄</span>
          </Secret>{" "}
          ←
        </p>
      </div>
    );
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
  }
  if (check) {
    return (
      <div className="form">
        <h2
          style={{
            fontSize: "3rem",
            marginTop: "0px",
            marginBottom: "12px",
            textAlign: "center",
          }}
        >
          <span
            style={{
              fontSize: "3.25rem",
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
              outline: "3px solid red",
            }}
            size={3}
          >
            <input
              id="userEmail"
              onChange={(e) => setEmail(e.target.value)}
              value={email}
              type="email"
              placeholder="Enter your email here!"
            />
          </Col>
          <Col
            style={{
              fontWeight: "bold",
              borderBottomRightRadius: "25px",
              cursor: "pointer",
            }}
            size={1}
            onClick={sendEmail}
          >
            <button id="submitButton">Submit</button>
          </Col>
        </Row>
        <ErrorMessage>Please enter a valid email!</ErrorMessage>
      </div>
    );
  }
  if (isEmailAlreadyUsed) {
    return (
      <div className="form">
        <h2
          style={{
            fontSize: "3rem",
            marginTop: "0px",
            marginBottom: "12px",
            textAlign: "center",
          }}
        >
          <span
            style={{
              fontSize: "3.25rem",
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
              outline: "3px solid red",
            }}
            size={3}
          >
            <input
              id="userEmail"
              onChange={(e) => setEmail(e.target.value)}
              value={email}
              type="email"
              placeholder="Enter your email here!"
            />
          </Col>
          <Col
            style={{
              fontWeight: "bold",
              borderBottomRightRadius: "25px",
              cursor: "pointer",
            }}
            size={1}
            onClick={sendEmail}
          >
            <button id="submitButton">Submit</button>
          </Col>
        </Row>
        <ErrorMessage>You already used this email before</ErrorMessage>
      </div>
    );
  }
  return (
    <div className="form">
      <h2
        style={{
          fontSize: "3rem",
          marginTop: "0px",
          marginBottom: "12px",
          textAlign: "center",
        }}
      >
        <span
          style={{
            fontSize: "3.25rem",
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
          }}
          size={3}
        >
          <input
            id="userEmail"
            onChange={(e) => setEmail(e.target.value)}
            value={email}
            type="email"
            placeholder="Enter your email here!"
          />
        </Col>
        <Col
          style={{
            fontWeight: "bold",
            borderBottomRightRadius: "25px",
            cursor: "pointer",
          }}
          size={1}
          onClick={sendEmail}
        >
          <button id="submitButton">Submit</button>
        </Col>
      </Row>
    </div>
  );
};

export default withTheme(NewsLetter);
