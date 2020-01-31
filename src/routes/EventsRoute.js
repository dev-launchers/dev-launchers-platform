import React from "react";

import Header from "../components/modules/Header";
import PageBody from "../components/common/PageBody";
import Footer from "../components/modules/Footer";

export default class EventsRoute extends React.Component {
  render() {
    return (
      <div>
        <Header />
        <PageBody>
          <br />
          <h1 id="title">Join us in lab sessions</h1>
          <iframe
            src="https://calendar.google.com/calendar/b/2/embed?height=600&amp;wkst=1&amp;bgcolor=%23ffffff&amp;ctz=America%2FChicago&amp;src=ODJpZ243Y2twNmZkbHR0c2trNGg5ZmNscmdAZ3JvdXAuY2FsZW5kYXIuZ29vZ2xlLmNvbQ&amp;color=%23D6AE00&amp;title=Dev%20Launchers%20Labs"
            width="800"
            height="600"
            frameborder="0"
            scrolling="no"
          ></iframe>
        </PageBody>
        <Footer />
      </div>
    );
  }
}
