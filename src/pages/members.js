import React from "react";

import Header from "../components/common/Header";
import MentorshipTiers from "../components/modules/MentorshipTiers/MentorshipTiers";
import Footer from "../components/common/Footer";

export default function MentorshipTiersRoute() {
  React.useEffect(() => {
    document.title = "Mentorship Tiers";
  }, []);

  return (
    <div>
      <Header />
      <MentorshipTiers />
      <Footer />
    </div>
  );
}
