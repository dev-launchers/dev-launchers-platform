import React from "react";

import Header from "../components/common/Header";
import MentorSignup from "../components/modules/Home/MentorSignup/MentorSignup";
import Footer from "../components/common/Footer";

export default function MentorSignupRoute() {
  React.useEffect(() => {
    document.title = "Mentor Signup";
  }, []);

  return (
    <div>
      <Header />
      <MentorSignup />
      <Footer />
    </div>
  );
}
