import Head from "next/head";
import React, { useEffect } from 'react';
import Button from "@devlaunchers/components/src/components/atoms/Button";
import OpenResponse from "@devlaunchers/components/src/components/organisms/OpenResponse";
import BaseLayer from "@devlaunchers/components/src/components/atoms/BaseLayer";
import { send } from "../utils/chat.js";
import { displayText } from "../utils/chat.js";
import { enterKey } from "../utils/chat.js";
import { handleKeyBind } from "../utils/chat.js";

const ProjectsList = () => {
  useEffect(() => {
    const handleKeyPress = (event) => {
      // Check if the pressed key is the "Enter" key (key code 13)
      if (event.key === 'Enter') {
        send(); // Call the send method
      }
    };

    // Add an event listener for keydown when the component mounts
    document.addEventListener('keydown', handleKeyPress);

    // Remove the event listener when the component unmounts to prevent memory leaks
    return () => {
      document.removeEventListener('keydown', handleKeyPress);
    };
  }, []); // Empty dependency array means this effect runs once on mount

  return (
    <>
      <Head>
      <title>Our Projects</title>
      <meta name="title" content="Our Projects"></meta>
      <meta
        name="description"
        content="Create, discover, and join an agile team building open-source software projects! We help members to contribute meaningfully and gain industry-ready experience along the way. Build epic products, tools, and apps used by real people while learning valuable skills and meeting awesome people!"
      ></meta>

      <meta property="og:type" content="website"></meta>
      <meta
        property="og:url"
        content={process.env.NEXT_PUBLIC_FRONT_END_URL + "/projects"}
      ></meta>
      <meta
        property="og:image"
        content="/images/DevlaunchersGitHubThumb.png"
      ></meta>
      <meta property="og:title" content="Our Projects"></meta>
      <meta
        property="og:description"
        content="Create, discover, and join an agile team building open-source software projects! We help members to contribute meaningfully and gain industry-ready experience along the way. Build epic products, tools, and apps used by real people while learning valuable skills and meeting awesome people!"
      ></meta>

      <meta property="twitter:card" content="summary_large_image"></meta>
      <meta
        property="twitter:url"
        content={process.env.NEXT_PUBLIC_FRONT_END_URL + "/projects"}
      ></meta>
      <meta property="twitter:title" content="Our Projects"></meta>
      <meta
        property="twitter:description"
        content="Create, discover, and join an agile team building open-source software projects! We help members to contribute meaningfully and gain industry-ready experience along the way. Build epic products, tools, and apps used by real people while learning valuable skills and meeting awesome people!"
      ></meta>
      <meta
        property="twitter:image"
        content="/images/DevlaunchersGitHubThumb.png"
      ></meta>
      <meta content="#ff7f0e" data-react-helmet="true" name="theme-color" />
      </Head>

      <div id="chat"
      onLoad={displayText}
      >
      </div>

      <BaseLayer color="offbase" type="light">
      <div
        style={{
          width: '1600px',
          height: '300px',
        }}

      />
        <OpenResponse
        id="chatbox"
        cols={50}
        error=""

        onChange={function noRefCheck() { }}
        
        placeholder="Enter text here"
        width={'1016px'}
        height={'40px'}
      />
        <Button
          id="sendButton"
          onClick={send}
          buttonSize="standard"
          buttonType="primary"
        >
          Send
        </Button>
      </BaseLayer>
    </>
  );
};

export default ProjectsList;