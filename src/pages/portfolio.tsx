import React from "react";
import Layout from "@/components/layout/Layout";
import CmnBanner from "@/components/layout/banner/CmnBanner";
import PortfolioMain from "@/components/containers/PortfolioMain";
import HomeTwoPortfolio from "@/components/containers/home-two/HomeTwoPortfolio";

const OurPortfolio = () => {
  return (
    <Layout header={2} footer={2} video={0}>
      <CmnBanner title="Portfolio Gallery" navigation="Portfolio Gallery" />
     <HomeTwoPortfolio/>
    </Layout>
  );
};

export default OurPortfolio;
