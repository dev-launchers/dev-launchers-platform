import React from "react";

import Header from "../components/common/Header";
import PageBody from "../components/common/PageBody";
import Footer from "../components/common/Footer";

export default function CalendarRoute() {
    React.useEffect(() => {
        document.title = "Calendar";
    }, []);

    return (
        <div>
            <Header />
            <PageBody>
                <br />
                <h1 id="title">Join in on our events!</h1>
                <p>
                    Dev Launchers is being built from the ground up to provide resources and fun activities for our
                    growing community of developers and creatives. Get help on a project, test your skills, help someone
                    grow their own skills, and join a fun community of like-minded people building things during one of
                    our events or 1 on 1 help sessions!
                </p>
                <br />
                <h3>Community Calendar</h3>
                <iframe
                    src="https://calendar.google.com/calendar/b/4/embed?height=600&amp;wkst=1&amp;bgcolor=%23ffffff&amp;ctz=America%2FChicago&amp;src=MzhoZG01b2pkaWZ2NWRxNXI5djAxOGp1cHNAZ3JvdXAuY2FsZW5kYXIuZ29vZ2xlLmNvbQ&amp;src=cTl1NXFkazE1bGRzZjBhb2poYTBtbXYzbGtAZ3JvdXAuY2FsZW5kYXIuZ29vZ2xlLmNvbQ&amp;src=ODJpZ243Y2twNmZkbHR0c2trNGg5ZmNscmdAZ3JvdXAuY2FsZW5kYXIuZ29vZ2xlLmNvbQ&amp;src=ZTRvcXZwY3JqZjhtY3J1N2JwbDcwMjc1Z29AZ3JvdXAuY2FsZW5kYXIuZ29vZ2xlLmNvbQ&amp;color=%23B39DDB&amp;color=%23D50000&amp;color=%23EF6C00&amp;color=%234285F4&amp;showTitle=0&amp;showDate=0&amp;showPrint=0&amp;showTabs=1&amp;showCalendars=0&amp;showTz=0&amp;mode=WEEK&amp;showNav=1"
                    style={{ borderWidth: 0, marginBottom: "5%" }}
                    width="800"
                    height="600"
                    frameborder="0"
                    scrolling="no"
                />
            </PageBody>
            <Footer />
        </div>
    );
}
