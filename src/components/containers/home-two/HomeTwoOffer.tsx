import React, { useEffect, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper/modules";
import "swiper/swiper-bundle.css";
import ball from "public/images/ball.png";
import one from "public/images/mission/branding.png";
import two from "public/images/mission/video-animation.png";
import three from "public/images/mission/website.png";
import four from "public/images/mission/four.svg";

const HomeTwoOffer = () => {
  const [activeTab, setActiveTab] = useState(1);
  const tabs = [
    { id: 1, label: "Logo Design & Branding" },
    { id: 2, label: "Website" },
    { id: 3, label: "Video Animation" },
    { id: 4, label: "Digital Marketing" },
  ];
  const TabContent = ({ tabId }: { tabId: number }) => {
    switch (tabId) {
      case 1: // Logo Design
        return (
          <div className="row gaper">
            <div className="col-12 col-lg-6">
              <div className="mission-s__single mission-s__single--alt fade-top">
                <h3>Logo Design And Branding</h3>
                <div className="section__content-cta">
                  <p className="primary-text">
                  Your logo serves as the face of your brand in the digital world, where first impressions are crucial. At Softway Designs, our skilled logo designers immerse themselves in your business vision and industry trends to create standout, innovative designs. By pushing creative limits, we develop a unique visual identity that captures attention and leaves a lasting impression. Partner with us to craft a logo that not only sets you apart but also gives your brand the distinctive identity it deserves.
                  </p>
                  
                </div>
                <div className="cta mt-4">
                  <Link href="contact-us" className="btn btn--tertiary">
                    Get Started Today
                      <i className="fa-sharp fa-solid fa-arrow-up-right"></i>
                    </Link>
                  </div>
            </div>
          </div>
          <div className="col-12 col-lg-6">
  <div className="mission-s__single fade-top">
    <Image src={one} alt="Image" className="blend-image" />
  </div>
</div>
        </div>
      );

      case 2: // Website
        return (
          <div className="row gaper">
            <div className="col-12 col-lg-6">
              <div className="mission-s__single fade-top">
                <Image src={three} alt="Image" className="blend-image" />
              </div>
            </div>
            <div className="col-12 col-lg-6">
              <div className="mission-s__single mission-s__single--alt fade-top">
                <h3>Exceptional Web Development</h3>
                <div className="section__content-cta">
                  <p className="primary-text">
                  At Softway Designs, we build dynamic, intuitive websites that highlight your brand’s services and products. Our expert team integrates custom designs, strong coding, and accessibility-friendly features to optimize conversions and reduce bounce rates. We focus on delivering exceptional results, ensuring your website represents your brand flawlessly.
                  </p>
                </div>
                <div className="cta mt-4">
                  <Link href="contact-us" className="btn btn--tertiary">
                    Get Started Today
                    <i className="fa-sharp fa-solid fa-arrow-up-right"></i>
                  </Link>
                </div>
              </div>
            </div>
          </div>
        );

      case 3: // video
        return (
          <div className="row gaper">
            <div className="col-12 col-lg-6">
              <div className="mission-s__single mission-s__single--alt fade-top">
                <h3>Engaging Video Animation</h3>
                <div className="section__content-cta">
                  <p className="primary-text">
                  At Softway Designs, creativity is at the core of our craft. Our talented animators and designers create visually stunning videos that perfectly balance messaging and innovation, effectively showcasing your brand’s essence. Through engaging storytelling and premium-quality animations, we capture your audience’s interest and make your brand unforgettable. Partner with us to develop a dynamic video that captivates and connects with your audience.
                  </p>
                </div>
                <div className="cta mt-4">
                  <Link href="contact-us" className="btn btn--tertiary">
                    Get Started Today
                    <i className="fa-sharp fa-solid fa-arrow-up-right"></i>
                  </Link>
                </div>
              </div>
            </div>
            <div className="col-12 col-lg-6">
              <div className="mission-s__single fade-top">
                <Image src={two} alt="Image" className="blend-image" />
              </div>
            </div>
          </div>
        );

      case 4: // marketing
        return (
          <div className="row gaper">
            <div className="col-12 col-lg-6">
              <div className="mission-s__single fade-top">
                <Image src={four} alt="Image" className="blend-image" />
              </div>
            </div>
            <div className="col-12 col-lg-6">
              <div className="mission-s__single mission-s__single--alt fade-top">
                <h3>Targeted Digital Marketing</h3>
                <div className="section__content-cta">
                  <p className="primary-text">
                  At Softway Designs, we empower your brand to outshine the competition with tailored digital marketing strategies. Our experienced team excels in PPC, SEO, SMM, content marketing, and more, delivering results that align seamlessly with your business objectives. From optimizing search engine performance to strengthening your social media presence, we design data-driven campaigns to propel your growth. Collaborate with us to unlock online success with strategies crafted by industry professionals.
                  </p>
                </div>
                <div className="cta mt-4">
                  <Link href="contact-us" className="btn btn--tertiary">
                    Get Started Today
                    <i className="fa-sharp fa-solid fa-arrow-up-right"></i>
                  </Link>
                </div>
              </div>
            </div>
          </div>
        );
      // Add cases for other tabs...
      default:
        return null;
    }
  };
  useEffect(() => {
    const handleMouseMove = (event: MouseEvent) => {
      const caseStudyItems = document.querySelectorAll(".offer__cta-single");
      const deviceWidth = window.innerWidth;

      if (deviceWidth > 576) {
        caseStudyItems.forEach((item) => {
          const contentBox = item.getBoundingClientRect();
          const dx = event.clientX - contentBox.x;
          const dy = event.clientY - contentBox.y;
          const thirdChild = item.children[2] as HTMLElement;
          thirdChild.style.transform = `translate(${dx}px, ${dy}px) rotate(10deg)`;
        });
      }
    };

    window.addEventListener("mousemove", handleMouseMove);

    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
    };
  }, []);

  return (
    <section
      className="section offer-two"
      style={{ backgroundColor: "#190426" }}
    >
      <div className="container">
        <div className="row justify-content-center">
          <div className="col-12 col-lg-8">
            <div className="section__header text-center">
              <span className="sub-title">
                Our Services
                <i className="fa-solid fa-arrow-right"></i>
              </span>
              <h2 className="title title-anim">
                We Add Value to Every Design Project
              </h2>
              <p>
              Promotional campaigns are vital for effectively communicating your brand message and engaging a wider audience. Businesses across various industries, from automotive and retail to electronics and finance, can boost their ROI with strategic promotional designs. At Logo Design Valley, our expert designers specialize in crafting unique and impactful designs that elevate your brand and deliver measurable results.
              </p>
            </div>
          </div>
        </div>
      </div>
      <div className="tabs-navigation">
        <div className="row justify-content-center">
          <div className="col-12">
            <div style={{ marginBottom: "20px", textAlign: "center" }}>
              {tabs.map((tab) => (
                <button
                  key={tab.id}
                  className={`btn ${
                    activeTab === tab.id ? "btn--primary" : "btn--secondary"
                  }`}
                  style={{ marginLeft: "20px",  marginTop: "20px"}}
                  onClick={() => setActiveTab(tab.id)}
                >
                  {tab.label}
                </button>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Tab Content */}
      <div className="container mt-5">
        <div className="row">
          <div className="col-12">
            <div className="tab-content">
              <TabContent tabId={activeTab} />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HomeTwoOffer;
