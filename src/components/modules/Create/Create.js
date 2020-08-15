import React from "react";
import "react-tabs/style/react-tabs.css"; // import react-tabs styles
import { Tabs, Tab, TabList, TabPanel } from "react-tabs";
import Modal from "react-modal";

import { useSheetsContext } from "../../../context/SheetsContext";

import PageBody from "../../../components/common/PageBody";
import Section from "../../../components/common/Section";

import NeedHelpSection from "./NeedHelpSection";

const customModalStyles = {
  content: {
    position: "absolute",
    width: "60%",
    height: "70%",
    top: "55%",
    left: "50%",
    right: "auto",
    bottom: "auto",
    marginRight: "-50%",
    transform: "translate(-50%, -50%)",
    zIndex: 1001
  },
  overlay: { zIndex: 1000, backgroundColor: "rgba(0,0,0,.75)" }
};
Modal.setAppElement("#root");

export default function Create(props) {
  const { createPageData } = useSheetsContext();
  const [templateTitle, setTemplateTitle] = React.useState("TEMP TITLE");
  const [templateDescription, setTemplateDescription] = React.useState(
    "TEMP DESCRIPTION"
  );
  const [templateImage, setTemplateImage] = React.useState("TEMP IMAGE");
  const [templateUrl, setTemplateUrl] = React.useState("TEMP URL");
  const [templateAttachments, setTemplateAttachments] = React.useState([]);

  const getCardById = id => {
    const tabs = Object.keys(createPageData);
    for (let tabKey of tabs) {
      const sections = Object.keys(createPageData[tabKey]);
      for (let sectionKey of sections) {
        const groups = Object.keys(createPageData[tabKey][sectionKey]);
        for (let groupKey of groups) {
          const cards = Object.keys(
            createPageData[tabKey][sectionKey][groupKey]
          );
          for (let cardKey of cards) {
            const thisCard =
              createPageData[tabKey][sectionKey][groupKey][cardKey];
            if (thisCard.id == id) return thisCard;
          }
        }
      }
    }
    return -1;
  };

  // Start Modal stuff
  // Set modal states when createPageData is loaded
  React.useEffect(() => {
    // Is there a templateId set, this page should auto open a tempate modal
    if (props.templateId) {
      const cardData = getCardById(props.templateId);
      if (cardData == -1) return;
      console.log(cardData);
      setTemplateTitle(cardData.title);
      setTemplateUrl(cardData.href);
      setTemplateDescription(cardData.description);
      setTemplateImage(cardData.imageSrc);
      setTemplateAttachments(JSON.parse(cardData.attachments));

      console.log("templateAttachments", templateAttachments);

      openModal();
    }

    // Loop through all tab, group, and cards to find appropriate data
    // This should be made way better in the future...
  }, [createPageData]);

  const [modalIsOpen, setModalIsOpen] = React.useState(false);
  const openModal = () => {
    console.log("opening");
    setModalIsOpen(true);
  };
  const closeModal = () => {
    setModalIsOpen(false);
  };
  const afterOpenModal = () => {};

  return (
    <PageBody>
      <Modal
        isOpen={modalIsOpen}
        onAfterOpen={afterOpenModal}
        onRequestClose={closeModal}
        style={customModalStyles}
        contentLabel="Template Modal"
      >
        <h2 style={{ marginTop: "0%", paddingTop: "0%" }}>
          {templateTitle} Game Template
        </h2>
        <div
          style={{
            display: "flex"
          }}
        >
          <div
            style={{
              width: "60%",
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              flexDirection: "column"
            }}
          >
            <a href={templateUrl} target="_blank">
              <img
                src={templateImage}
                style={{
                  width: "80%",
                  border: "2px solid black",
                  cursor: "pointer"
                }}
              />
            </a>
            <div style={{ width: "80%", marginTop: "2%" }}>
              {templateDescription}
            </div>
          </div>
          <div style={{ width: "40%" }}>
            <div>
              {templateAttachments.map(attachment => {
                return (
                  <div>
                    <a
                      href={attachment.href}
                      style={{ cursor: "pointer", color: "blue" }}
                      target="_blank"
                    >
                      {attachment.name}
                    </a>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </Modal>
      <br />
      <h1 id="title">Create Games and Apps</h1>
      <div className="page-description">
        These templates are where projects begin. They provide the generic
        structure and base logic, so you can focus on what makes your app
        special!
        <NeedHelpSection />
      </div>
      <hr />

      <Tabs defaultFocus={true} defaultIndex="0">
        <TabList style={{ fontSize: "2rem", fontWeight: "bold" }}>
          {// Have to do this hack for some reason (create empty tab if page not loaded)...
          //otherwise tabs break
          Object.entries(createPageData).length === 0 ? <Tab></Tab> : ""}
          {// Render tabs from our dynamically built pageData object
          Object.keys(createPageData).map(key => {
            return <Tab key={"tab" + key}>{key}</Tab>;
          })}
        </TabList>
        {// Render sections and groups from our dynamically built pageData object
        // Render tab panels from our dynamically built pageData object
        Object.values(createPageData).map((tab, i) => {
          // render all sections for this tab
          return (
            <TabPanel key={i}>
              {Object.keys(tab).map((sectionTitle, i) => {
                const section = tab[sectionTitle];
                return <Section data={section} title={sectionTitle} />;
              })}
            </TabPanel>
          );
        })}
      </Tabs>
    </PageBody>
  );
}
