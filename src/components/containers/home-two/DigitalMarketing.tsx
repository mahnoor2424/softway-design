import React from "react";
import Image from "next/image";
import four from "public/images/mission/fourf.png";

const DigitalMarketing = () => {
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
              <h3>Targeted Digital Marketing</h3>
              <p className="primary-text mt-5">
                At Softway Designs, we help your brand rise above the
                competition with expertly crafted digital marketing strategies. Our team has a proven track record in PPC, SEO, SMM, content marketing, and more, delivering results that align with your growth goals. Whether optimizing search algorithms or building a strong social media presence, we create data-driven campaigns to drive your business toward success. Let’s partner to achieve online growth with strategies powered by industry experts.
              </p>
            </div>
          </div>
          <div className="col-12 col-lg-6">
          <div
              className="mission-s__single fade-top"
              style={{ height: "100%", width: "100%" }}
            >
                <Image
                  src={four}
                  alt="Digital Marketing"
                  layout="fill"
                  objectFit="cover"
                  style={{
                    height: "100%",
                    width: "100%",
                  }}
                />
            </div>          </div>
        </div>
      </div>
    </section>
  );
};

export default DigitalMarketing;
