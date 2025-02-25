import React from "react";
import Image from "next/image";
import three from "public/images/mission/threef.png";

const VideoAnimation = () => {
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
              <h3>Engaging Video Animation</h3>
              <p className="primary-text mt-5">
                At Softway Designs, creativity is at the heart of our work. Our
                expert video animators and designers craft engaging videos that
                communicate your brand’s essence with a perfect balance of
                creativity and messaging. We combine interactive storytelling
                with high-quality animations to capture your audience’s
                attention and make your brand stand out. Let’s work together to
                create a captivating video that engages and attracts your
                audience.
              </p>
            </div>
          </div>
          <div className="col-12 col-lg-6">
            <div
              className="mission-s__single fade-top"
              style={{ height: "100%", width: "100%" }}
            >
              <Image
                src={three}
                alt="Video Animation"
                layout="fill"
                objectFit="cover"
                style={{
                  height: "100%",
                  width: "100%",
                }}
              />
            </div>{" "}
          </div>
        </div>
      </div>
    </section>
  );
};

export default VideoAnimation;
