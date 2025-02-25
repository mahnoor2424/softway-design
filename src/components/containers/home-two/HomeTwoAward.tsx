import React from "react";
import Image from "next/image";
import Link from "next/link";
import awardthumb from "public/images/award-thumb.png";
import star from "public/images/star.png";
import dotlarge from "public/images/agency/dot-large.png";

const HomeTwoAward = () => {
  return (
    <section className="section award" style={{backgroundColor: "var(--ttt-color)"}}>
      <div className="container">
        <div className="row gaper align-items-center">
          <div className="col-12 col-lg-6">
            <div className="award__thumb dir-rtl">
              <Image src={awardthumb} alt="Image" className="unset fade-left" />
            </div>
          </div>
          <div className="col-12 col-lg-6 col-xxl-5 offset-xxl-1">
            <div className="award__content section__content">
              <span className="sub-title">
                WE PROUD THAT
                <i className="fa-solid fa-arrow-right"></i>
              </span>
              <h2 className="title title-anim">
              Our Achievements Shape   <span>Who We Are </span>
              </h2>
              <div className="paragraph">
                <p>
                Through years of dedication to delivering exceptional design, branding, and web solutions, we have earned recognition for our work. These accomplishments motivate us to push further, continually striving to exceed expectations and reach new heights of excellence.
                </p>
              </div>
              <div className="award__content-meta">
                <div className="single">
                  <h4>2021</h4>
                  <h4>Best Creative Agency </h4>
                  <p>Honored for innovative logo designs and effective branding strategies.

                  </p>
                </div>
                <div className="single">
                  <h4>2022</h4>
                  <h4>Outstanding Web Design</h4>
                  <p>Recognized for creating user-centric, visually captivating websites.  

                  </p>
                </div>
                <div className="single">
                  <h4>2023</h4>
                  <h4>Excellence in Branding</h4>
                  <p>Celebrated for developing impactful brand identities that drive business success.
                  </p>
                </div>
              </div>
              <div className="section__content-cta">
                <Link href="about-us" className="btn btn--primary">
                  Know More
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
      <Image src={star} alt="Image" className="star" />
      <Image src={star} alt="Image" className="star-two" />
      <Image src={dotlarge} alt="Image" className="dot" />
      <Image src={dotlarge} alt="Image" className="dot-two" />
    </section>
  );
};

export default HomeTwoAward;
