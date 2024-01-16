import * as React from "react";
import Layout from "../components/layout";

const AboutPage = () => {
  return (
    <Layout pageTitle="About">
        <p> I am Professor Proton - Author of this page. I'm learning to build a website using Gatsby.</p>
    </Layout>
  );
};

export const Head = () => {
  return (
    <>
      <title>About Me</title>
      <meta name="purpose" content="learn" />
    </>
  );
};

export default AboutPage;
