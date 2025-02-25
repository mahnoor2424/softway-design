import React, { useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/dist/ScrollTrigger";
import dawn from "public/images/banner/dawn.png";

gsap.registerPlugin(ScrollTrigger);
const HomeTwoBanner = () => {
  useEffect(() => {
    const device_width = window.innerWidth;

    if (
      document.querySelectorAll(".banner-two").length > 0 &&
      device_width > 576
    ) {
      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: ".banner-two",
          start: "center center",
          end: "+=100%",
          scrub: true,
          pin: false,
        },
      });

      tl.set(".g-ban-one", {
        y: "-10%",
      });

      tl.to(".imae", {
        opacity: 0,
        y: "300%",

        duration: 2,
      });
    }
  }, []);

  return (
    <section
      className="banner-two"
      style={{ backgroundImage: "url('/images/banner/banner-two-bg.png')" }}
    >
      <div className="video-bg">
        <video autoPlay loop muted>
          <source src="/images/banner/video-bg-main.mp4" type="video/mp4" />
        </video>
      </div>
      <div className="container">
        <div className="row">
          <div className="col-12">
            <div className="banner-two-inner">
              <div className="banner-two__content">
                <h1 className="title-anim">
                Bringing Your <span>Vision</span> to Life, One Design at a Time
                </h1>
                <div className="banner-two__content-cta section__content-cta">
                  <div className="paragraph">
                    <p>
                    Expert logo design, branding, and web design solutions tailored to your unique needs.
                    </p>
                  </div>
                  <div className="arrow-wrapper d-none d-lg-block">
                    <span className="arrow"></span>
                  </div>
                  <div className="cta">
                    <Link href="contact-us" className="btn btn--tertiary">
                    Get Started Today
                      <i className="fa-sharp fa-solid fa-arrow-up-right"></i>
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <Image src={dawn} alt="Image" className="dawn" />
    </section>
  );
};

export default HomeTwoBanner;
