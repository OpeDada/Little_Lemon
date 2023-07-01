
import React from "react";
import Navbar from "./Navbar";
import MainSection from "./MainSection";
import Footer from "./Footer";

const Page = ({ children }) => {
  return (
    <div>
      <Navbar />
      <MainSection>{children}</MainSection>
      <Footer />
    </div>
  );
};

export default Page;
