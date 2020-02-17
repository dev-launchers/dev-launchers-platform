import React from "react";

import Header from "../components/modules/Header";
import Footer from "../components/modules/Footer";
import Create from "../components/modules/Create";

// Get content data
let projectTemplates = require("../content/collections/projectTemplates.json")
  .data;

export default function CreateRoute() {
  return (
    <div>
      <Header />
      <Create />
      <Footer />
    </div>
  );
}
