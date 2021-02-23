import React from "react";

import Header from "../components/common/Header";
import SignUp from "../components/modules/SignUp/SignUp";
import Footer from "../components/common/Footer";

export default function SignUpRoute() {
  React.useEffect(() => {
    document.title = "Sign up";
  }, []);

  return (
    <div>
      <Header />
      <SignUp />
      <Footer />
    </div>
  );
}
