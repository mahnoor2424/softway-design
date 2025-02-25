import React from "react";
import Image from "next/image";
import two from "public/images/mission/twof.jpg";

const WebDevelopment = () => {
  return (
    <section
    className="section mission-s fade-wrapper"
      style={{
        backgroundImage: "url(/images/banner/service-banner.jpeg)",
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
      }}
    >
      <div className="container">
        <div className="row">
          <div className="col-12 col-lg-6">
            <div className="mission-s__single mission-s__single--alt">
              <h3>Exceptional Web Development</h3>
              <p className="primary-text mt-5">
              At Softway Designs, we build dynamic, intuitive websites that highlight your brand’s services and products. Our expert team integrates custom designs, strong coding, and accessibility-friendly features to optimize conversions and reduce bounce rates. We focus on delivering exceptional results, ensuring your website represents your brand flawlessly.
              </p>
            </div>
          </div>
          <div className="col-12 col-lg-6">
          <div
              className="mission-s__single fade-top"
              style={{ height: "100%", width: "100%" }}
            >
                <Image
                  src={two}
                  alt="Logo Design And Branding"
                  layout="fill"
                  objectFit="cover"
                  style={{
                    height: "100%",
                    width: "100%",
                  }}
                />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default WebDevelopment;
