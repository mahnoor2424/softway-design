import React, { useState } from "react";
import ImageGlow from "react-image-glow";

const UxProcess = () => {
  const [imgTab, setImgTab] = useState(0);

  return (
    <section className="section1 ux-process bg-tertiaryy fade-wrapper">
      <div className="container">
        <div className="row justify-content-center">
          <div className="col-12 col-lg-12">
            <div className="section__header text-center">
              <div style={{ textAlign: "center" }}>
                <h2 className="title title-anim" style={{ color: "#111 !important", marginBottom: '40px' }}>
                  Our Design Process
                  
                </h2>
              </div>
              {/* <h2 className="title title-anim">Our Full-Spectrum Design Process that Illuminates Brands</h2>
              <p>We follow a comprehensive design process that ensures every aspect of your brand is carefully crafted and executed. Our approach is designed to create a cohesive and impactful visual identity that resonates with your target audience.</p>
            </div>
          </div>
        </div>
        <div className="row">
          <div className="col-12">
            <div className="service-f-wrapper">
              <div
                className={
                  "service-f-single fade-top " +
                  (imgTab == 0 ? " service-f-single-active" : " ")
                }
              >
                <div className="single-item">
                  <div className="intro-btn">
                    <h4>Ideation</h4>
                  </div>
                </div>
                <div className="single-item p-single p-sm body-cn">
                  <p>
                  We begin with your idea or assist you in grasping one by brainstorming and discussions. Creative incorporation of your business nature derives a reflective brand image that tells your story.
                  </p>
                </div>
                <button
                  className="toggle-service-f"
                  onClick={() => setImgTab(imgTab === 0 ? -1 : 0)}
                ></button>
              </div>
              <div
                className={
                  "service-f-single fade-top " +
                  (imgTab == 1 ? " service-f-single-active" : " ")
                }
              >
                <div className="single-item">
                  <div className="intro-btn">
                    <h4>Investigation</h4>
                  </div>
                </div>
                <div className="single-item p-single p-sm body-cn">
                  <p>
                  Research into the audience’s tastes is necessary to evaluate what elements will appeal to and influence prospects to interact. We select the elements that your audience expects from you.


                  </p>
                </div>
                <button
                  className="toggle-service-f"
                  onClick={() => setImgTab(imgTab === 1 ? -1 : 1)}
                ></button>
              </div>
              <div
                className={
                  "service-f-single fade-top " +
                  (imgTab == 2 ? " service-f-single-active" : " ")
                }
              >
                <div className="single-item">
                  <div className="intro-btn">
                    <h4>Iteration</h4>
                  </div>
                </div>
                <div className="single-item p-single p-sm body-cn">
                  <p>
                  We merge your brand identity with the research results in an enchanting way that enhances the appearance of all elements. We develop iterations of design until we find the best combination.


                  </p>
                </div>
                <button
                  className="toggle-service-f"
                  onClick={() => setImgTab(imgTab === 2 ? -1 : 2)}
                ></button>
              </div>
              <div
                className={
                  "service-f-single fade-top " +
                  (imgTab == 3 ? " service-f-single-active" : " ")
                }
              >
                <div className="single-item">
                  <div className="intro-btn">
                    <h4>Implementation</h4>
                  </div>
                </div>
                <div className="single-item p-single p-sm body-cn">
                  <p>
                  Our commitment to amplifying your brand message and offerings motivates us to implement your logo with you. We will go beyond our competition to glorify your logo everywhere.


                  </p>
                </div>
                <button
                  className="toggle-service-f"
                  onClick={() => setImgTab(imgTab === 3 ? -1 : 3)}
                ></button>
              </div>
              <div
                className={
                  "service-f-single fade-top " +
                  (imgTab == 4 ? " service-f-single-active" : " ")
                }
              >
                <div className="single-item">
                  <div className="intro-btn">
                    <h4>Indemnification</h4>
                  </div>
                </div>
                <div className="single-item p-single p-sm body-cn">
                  <p>
                  We secure your branding from technical or legal issues and cover you through indemnity in all pricing plans. We ensure the logo design’s success with guarantee and superb support services.


                  </p>
                </div>
                <button
                  className="toggle-service-f"
                  onClick={() => setImgTab(imgTab === 4 ? -1 : 4)}
                ></button>
              </div>
              
            </div> */}  
          <img src="/images/10.png" alt="ux-process" />

          </div>
        </div>
      </div>
      </div>
    </section>
  );
};

export default UxProcess;
