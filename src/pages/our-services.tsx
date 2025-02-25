import React from "react";
import Layout from "@/components/layout/Layout";
import CmnBanner from "@/components/layout/banner/CmnBanner";
import OurMission from "@/components/containers/OurMission";
import ServiceMain from "@/components/containers/ServiceMain";
import HomeTwoModal from "@/components/containers/home-two/HomeTwoModal";
import UxProcessTwo from "@/components/containers/service-details/UxProcessTwo";
// import HomeTestimonialThree from "@/components/containers/home-three/HomeTestimonial";
import CtaTwo from "@/components/containers/service-details/CtaTwo";
import HomeTestimonial from "@/components/containers/home/HomeTestimonial";

const OurServices = () => {
  return (
    <Layout header={2} footer={2} video={0}>
      <CmnBanner title="Our Services" navigation="Our Services" />
      
      <OurMission />
      <HomeTestimonial/>
      <CtaTwo />
    </Layout>
  );
};

export default OurServices;
