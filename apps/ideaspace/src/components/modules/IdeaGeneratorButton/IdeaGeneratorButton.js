/* eslint-disable no-use-before-define */

import React from 'react';

import Modal from '../../common/Modal';

import { ModalWrapper } from './StyledIdeaGeneratorButton';

const banana = require('@banana-dev/banana-dev');

const apiKey = '68085f0b-fd3c-4309-9736-884c6e60a4c4';
const modelKey = 'gptj';

const modelParameters = {
  text: `
Dev Launchers is a nonprofit organization that trains software developers by facilitating their learning and growth. At the same time, they build software, apps, and tools that benefit humanity and promote social good in various ways. A large focus of the organization is helping to achieve the UN's 17 Sustainable Development Goals, such as poverty, hunger, health, equality, education, water, energy, economic growth, innovation, sustainability, justice, and the environment. Three examples of projects they might tackle are:
 * An online platform to help new developers learn skills while contributing to projects. The platform nurtures the stages of projects all the way from idea to development to release. It also acts as a professional-based social media hub for developers and helps the projects hosted on the platform recruit ambitious devs.
 * An app that uses computer vision to identify logos on products using a smartphone camera, then displays every matched company's carbon footprint and other environment-related metrics to the user to promote educated consumerism. This is mainly geared toward finding and avoiding products that are heavily involved in deforestation due to palm oil.
 * `,
  length: 100,
  temperature: 0.95,
  batchSize: 1,
};

let fetchIdea = async (modelParameters) => {
  //console.log(banana);
  try {
    let out = await banana.run(apiKey, modelKey, modelParameters);
    //alert(out);
    //console.log(out);
    return out.modelOutputs[0].output.split('\n')[0];
  } catch (e) {
    return 'API Error...';
  }
};

//const gamePhraseGenerator = () => <div>{getRandomPhrase(phraseFormats)}</div>;
const phraseGenerator = async () => (
  <div>{await fetchIdea(modelParameters)}</div>
);

export default function IdeaGeneratorButton(props) {
  // Modal state management
  const [modalContent, setModalContent] = React.useState('content');
  const [modalIsOpen, setModalIsOpen] = React.useState(false);
  const openModal = () => {
    setModalIsOpen(true);
  };
  const closeModal = () => {
    setModalIsOpen(false);
  };

  const openIdeaModal = async () => {
    // setModalContent(
    //   <ModalWrapper>
    //     <span style={{ fontSize: '1.25em' }}>Loading...</span>
    //     <br />
    //     <br />
    //     We are querying a "Large Language Model" to generate a new idea using
    //     AI. It may take up to 30 seconds!
    //     <br />
    //     <br />
    //     <span style={{ fontSize: '.5em' }}>
    //       Interested in how this works? This system combines the practice of
    //       "Prompt Engineering" with a "GPT Model" called GPT-J to generate
    //       pieces of text with specific areas of focus. Go check it out!
    //     </span>
    //   </ModalWrapper>
    // );
    // openModal();

    // setModalContent(
    //   <ModalWrapper>
    //     <span style={{ fontSize: '.6em' }}>
    //       Your idea seed is ready! It will most likely need some tweaking and
    //       workshopping...
    //     </span>
    //     <br />
    //     {await phraseGenerator()}
    //     <br />
    //     <span style={{ fontSize: '.35em' }}>
    //       NOTE: These ideas are generated using AI, and as such may contain
    //       biases or output unpredictable results at times. Take them with a
    //       large grain of salt!
    //     </span>
    //     <br />
    //   </ModalWrapper>
    // );
    // openModal();

      setModalContent(
      <ModalWrapper>
        <span style={{ fontSize: '1.25em' }}>This feature is currently offline</span>
        <div style={{height:"2rem"}}></div>
        <span style={{ fontSize: '.75em' }}>We apologize for the inconvenience, please check back soon!</span>
      </ModalWrapper>
    );
    openModal();
  };

  const generateButton = () => (
    <>
      <Modal
        modalContent={modalContent}
        modalIsOpen={modalIsOpen}
        openModal={openModal}
        closeModal={closeModal}
      ></Modal>
      <div onClick={openIdeaModal}>
        {props.children}
      </div>
    </>
  );

  return generateButton(props.style);
}
