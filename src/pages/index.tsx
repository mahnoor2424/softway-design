import React from "react";
import Layout from "@/components/layout/Layout";
import HomeTwoBanner from "@/components/layout/banner/HomeTwoBanner";

import HomeTwoSponsor from "@/components/containers/home-two/HomeTwoSponsor";
import HomeTwoAward from "@/components/containers/home-two/HomeTwoAward";
import HomeTwoOffer from "@/components/containers/home-two/HomeTwoOffer";
import HomeTwoModal from "@/components/containers/home-two/HomeTwoModal";
import HomeTwoPortfolio from "@/components/containers/home-two/HomeTwoPortfolio";
import HomePackages from "@/components/containers/home-two/HomePackages";
import HomeTwoTestimonial from "@/components/containers/home-two/HomeTwoTestimonial";
import HomeTestimonial from "@/components/containers/home/HomeTestimonial";
import HomeTwoBlog from "@/components/containers/home-two/HomeTwoBlog";
import HomeTwoCta from "@/components/containers/home-two/HomeTwoCta";
import NextPageNull from "@/components/containers/home/NextPageNull";
import UxProcess from "@/components/containers/service-details/UxProcess";

const Home = () => {
  return (
    
    <Layout header={2} footer={2} video={true}>
      <HomeTwoBanner />
      <HomeTwoSponsor />
      <HomeTwoOffer />
      <HomeTwoAward />
      <HomeTwoPortfolio />
      {/* <HomeTwoOffer />
      <HomeTwoAward /> */}
      <HomePackages />
      <UxProcess />
      <HomeTestimonial />
      <HomeTwoCta />
      <NextPageNull />
    </Layout>
  );
};

export default Home;
