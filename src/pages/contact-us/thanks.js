import React from "react";
import Layout from "../../components/Layout";
import HeadData from "../../components/HeadData.js";
import SiteMetaData from "../../components/SiteMetadata.js";

const Thanks = () => {
  const { title: siteName } = SiteMetaData();

  return (
    <Layout title="Thanks" link="/contact-us/" titleParent="Contact Us">
      <section className="section default-page">
        <HeadData title={`Thanks - ${siteName}`} description="Thanks for contacting us." />
        <div className="container">
          <div className="content">
            <h1>Thank you!</h1>
            <p>Thank you page for form submission.</p>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default Thanks;
