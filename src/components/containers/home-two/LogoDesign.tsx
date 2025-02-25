import React from "react";
import Image from "next/image";
import one from "public/images/mission/onef.png";

const LogoDesign = () => {
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
              <h3>Logo Design And Branding</h3>
              <p className="primary-text mt-5">
                In digital branding, your logo is the face of your brand—and
                first impressions matter. At Softway Designs, our expert logo
                designers delve into your business’s vision and industry
                standards to craft innovative logos that stand out in a
                competitive landscape.We push creative boundaries to establish a unique visual identity that draws potential customers from afar. Let’s collaborate to design a logo that sets you apart and gives your brand the distinct identity it deserves.
              </p>
            </div>
          </div>
          <div className="col-12 col-lg-6">
          <div
              className="mission-s__single fade-top"
              style={{ height: "100%", width: "100%" }}
            >
                <Image
                  src={one}
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

export default LogoDesign;
