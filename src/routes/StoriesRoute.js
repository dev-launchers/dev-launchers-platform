import React from "react";

import Header from "../components/modules/Header";
import Stories from "../components/modules/Stories/Stories";
import Footer from "../components/modules/Footer";

export default function StoriesRoute() {
    return (
        <div>
            <Header />
            <Stories />
            <Footer />
        </div>
    );
}
