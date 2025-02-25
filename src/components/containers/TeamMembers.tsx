import React from "react";
import Image from "next/image";
import Link from "next/link";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Navigation } from "swiper/modules";
import "swiper/swiper-bundle.css";
import one from "public/images/teams/one.svg";
import two from "public/images/teams/two.svg";
import three from "public/images/teams/three.svg";
import marbox from "public/images/teams/marbox.svg";
import five from "public/images/teams/five.png";
import six from "public/images/teams/six.png";
import seven from "public/images/teams/seven.png";

const TeamMembers = () => {
  return (
    <section className="section team-slider-s">
      <div className="container">
        <div className="row">
          <div className="col-12">
            <div className="section__header--secondary">
              <div className="row gaper align-items-center">
                <div className="col-12 col-lg-8">
                  <div className="section__header text-center text-lg-start mb-0">
                    <span className="sub-title">
                      Services
                      <i className="fa-solid fa-arrow-right"></i>
                    </span>
                    <h2 className="title title-anim">
                    Attract. Engage. Convert. Retain
                    </h2>
                    <p>These four pillars define our digital branding strategy: Attract, Engage, Convert, Retain. We craft campaigns to maximize your ROI, mastering the art of digital optimization and seamless conversions.</p>
                  </div>
                </div>
                <div className="col-12 col-lg-4">
                  <div className="text-center text-lg-end">
                    <Link
                      href="our-services"
                      className="btn btn--primary text-capitalize"
                    >
                      View All Services
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="team-r position-relative">
        <div className="team-s__slider-w">
          <Swiper
            slidesPerView={1}
            spaceBetween={30}
            slidesPerGroup={1}
            speed={800}
            loop={true}
            centeredSlides={false}
            modules={[Autoplay, Navigation]}
            autoplay={{
              delay: 5000,
              disableOnInteraction: false,
              pauseOnMouseEnter: true,
            }}
            navigation={{
              nextEl: ".next-team-s",
              prevEl: ".prev-team-s",
            }}
            className="team-s__slider"
            breakpoints={{
              768: {
                slidesPerView: 3,
                centeredSlides: true,
              },
              576: {
                slidesPerView: 2,
              },
            }}
          >
            <SwiperSlide>
              <div className="team-s__slider-single">
                <div className="team-wrap">
                  <div className="thumb">
                    <Link href="/">
                      <Image src={one} alt="Image" />
                    </Link>
                    <div
                      className="thumb__content"
                      style={{ backgroundImage: "url('/images/teams/bg.png')" }}
                    >
                      <div className="info">
                        <p>
                        In digital branding, your logo is the face of your brand—and first impressions matter
                        </p>
                      </div>
                      <h4>
                        <Link href="/">Logo Design And Branding</Link>
                      </h4>
                      <p>Leave a Lasting Impression of Your Brand</p>
                      
                    </div>
                  </div>
                  <div className="content">
                    <div className="intro">
                      <h5>
                        <Link href="/">Logo Design And Branding</Link>
                      </h5>
                      <p>Leave a Lasting Impression of Your Brand                      </p>
                    </div>
                    <hr />
                    <div className="inner">
                      <p>
                      In digital branding, your logo is the face of your brand—and first impressions matter. At Softway Designs, our expert logo designers delve into your business’s vision and industry standards to craft innovative logos that stand out in a competitive landscape. We push creative boundaries to establish a unique visual identity that draws potential customers from afar. Let’s collaborate to design a logo that sets you apart and gives your brand the distinct identity it deserves.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div className="team-s__slider-single">
                <div className="team-wrap">
                  <div className="thumb">
                    <Link href="/">
                      <Image src={three} alt="Image" />
                    </Link>
                    <div
                      className="thumb__content"
                      style={{ backgroundImage: "url('/images/teams/bg.png')" }}
                    >
                      <div className="info">
                        <p>
                        At Softway Designs, we create dynamic, user-friendly websites that showcase your brand’s services/products.
                        </p>
                      </div>
                      <h4>
                        <Link href="/">Exceptional Web Development
                        </Link>
                      </h4>
                      <p>Fortified Backend + Seamless & Attractive Frontend = A Dynamic Website.</p>
                    </div>
                  </div>
                  <div className="content">
                    <div className="intro">
                      <h5>
                        <Link href="/">Exceptional Web Development</Link>
                      </h5>
                      <p>Fortified Backend + Seamless & Attractive Frontend = A Dynamic Website.</p>
                    </div>
                    <hr />
                    <div className="inner">
                      <p>
                      At Softway Designs, we create dynamic, user-friendly websites that showcase your brand’s services/products. Our expert web development team combines custom designs, strong coding, and accessibility-friendly layouts to boost conversions and reduce bounce rates. We ensure your website delivers exceptional results, representing your brand seamlessly.
                      </p>
                      
                    </div>
                    
                  </div>
                </div>
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div className="team-s__slider-single">
                <div className="team-wrap">
                  <div className="thumb">
                    <Link href="/">
                      <Image src={two} alt="Image" />
                    </Link>
                    <div
                      className="thumb__content"
                      style={{ backgroundImage: "url('/images/teams/bg.png')" }}
                    >
                      <div className="info">
                        <p>
                        At Softway Designs, we create dynamic, user-friendly websites that showcase your brand’s services/products.
                        </p>
                      </div>
                      <h4>
                        <Link href="/">Engaging Video Animation
                        </Link>
                      </h4>
                      <p>Harness the Power of Captivating Visual Storytelling</p>
                      
                    </div>
                  </div>
                  <div className="content">
                    <div className="intro">
                      <h5>
                        <Link href="/">Engaging Video Animation</Link>
                      </h5>
                      <p>Harness the Power of Captivating Visual Storytelling.</p>
                    </div>
                    <hr />
                    <div className="inner">
                      <p>
                      At Softway Designs, creativity is at the heart of our work. Our expert video animators and designers craft engaging videos that communicate your brand’s essence with a perfect balance of creativity and messaging. We combine interactive storytelling with high-quality animations to capture your audience’s attention and make your brand stand out. Let’s work together to create a captivating video that engages and attracts your audience.
                      </p>
                      
                    </div>
                    
                  </div>
                </div>
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div className="team-s__slider-single">
                <div className="team-wrap">
                  <div className="thumb">
                    <Link href="/">
                      <Image src={marbox} alt="Image" />
                    </Link>
                    <div
                      className="thumb__content"
                      style={{ backgroundImage: "url('/images/teams/bg.png')" }}
                    >
                      <div className="info">
                        <p>
                        At Softway Designs, we help your brand rise above the competition with expertly crafted digital marketing strategies.
                        </p>
                      </div>
                      <h4>
                        <Link href="/">Targeted Digital Marketing
                        </Link>
                      </h4>
                      <p>The Path to Online Success—Data-Driven Digital Marketing.
                      </p>
                      
                    </div>
                  </div>
                  <div className="content">
                    <div className="intro">
                      <h5>
                        <Link href="/">Targeted Digital Marketing</Link>
                      </h5>
                      <p>The Path to Online Success—Data-Driven Digital Marketing.</p>
                    </div>
                    <hr />
                    <div className="inner">
                      <p>
                      At Softway Designs, we help your brand rise above the competition with expertly crafted digital marketing strategies. Our team has a proven track record in PPC, SEO, SMM, content marketing, and more, delivering results that align with your growth goals. Whether optimizing search algorithms or building a strong social media presence, we create data-driven campaigns to drive your business toward success. Let’s partner to achieve online growth with strategies powered by industry experts.
                      </p>
                      
                    </div>
                    
                  </div>
                </div>
              </div>
            </SwiperSlide>
          </Swiper>
        </div>
        <div className="slide-group">
          <button aria-label="previous item" className="slide-btn prev-team-s">
            <i className="fa-light fa-angle-left"></i>
          </button>
          <button aria-label="next item" className="slide-btn next-team-s">
            <i className="fa-light fa-angle-right"></i>
          </button>
        </div>
      </div>
    </section>
  );
};

export default TeamMembers;
