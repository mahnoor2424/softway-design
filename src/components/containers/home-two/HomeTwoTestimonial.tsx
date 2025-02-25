import React, { useEffect } from "react";
import Image from "next/image";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/dist/ScrollTrigger";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper/modules";
import "swiper/swiper-bundle.css";
import star from "public/images/testimonial/star.png";
import thumb from "public/images/testimonial/thumb.png";
import avatar from "public/images/testimonial/avatar.png";

gsap.registerPlugin(ScrollTrigger);
const HomeTwoTestimonial = () => {
  useEffect(() => {
    const device_width = window.innerWidth;

    if (
      document.querySelectorAll(".testimonial-g-con").length > 0 &&
      device_width > 576
    ) {
      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: ".testimonial-two",
          start: "center center",
          end: "+=100%",
          scrub: true,
          pin: false,
        },
      });

      tl.to(".testimonial-g-con", {
        opacity: 0,
        scale: 1,
        y: "-100%",
        duration: 1,
      });
    }
  }, []);
  return (
    <section className="section testimonial-two">
      <div className="container">
        <div className="row gaper align-items-center">
          <div className="col-12 col-lg-5 col-xxl-4">
            <div className="testimonial-two__thumb">
              <Image src={thumb} alt="Image" />
            </div>
          </div>
          <div className="col-12 col-lg-7 col-xxl-7 offset-xxl-1">
            <div className="testimonial-two__content section__content testimonial-g-con">
              <span className="sub-title">
                testimonial
                <i className="fa-solid fa-arrow-right"></i>
              </span>
              <h2 className="title title-anim">
                Some Of Our Respected Happy Clients Says
              </h2>
              <div className="quote">
                <i className="fa-sharp fa-solid fa-quote-right"></i>
              </div>
              <div className="testimonial-two__slider-w">
                <Swiper
                  slidesPerView={1}
                  spaceBetween={30}
                  speed={1000}
                  loop={true}
                  centeredSlides={true}
                  modules={[Autoplay]}
                  autoplay={{
                    delay: 5000,
                    disableOnInteraction: false,
                    pauseOnMouseEnter: true,
                    reverseDirection: false,
                  }}
                  className="testimonial-two__slider"
                >
                  <SwiperSlide>
                    <div className="testimonial-two__slider-single">
                      <div className="paragraph">
                        <blockquote className="secondary-text">
                          <q>
                          Prime Care Pharma has truly transformed my health journey. Their medications are effective and reliable, offering relief and improvement where others have fallen short. I appreciate their commitment to innovation and safety, ensuring peace of mind with every product. Trustworthy and essential for anyone prioritizing their well being!

                          </q>
                        </blockquote>
                      </div>
                      <div className="author-meta">
                        
                        <div className="author-meta__content">
                          <h5>Paul Smith</h5>
                          <p>Social Media Manager</p>
                        </div>
                      </div>
                    </div>
                  </SwiperSlide>
                  <SwiperSlide>
                    <div className="testimonial-two__slider-single">
                      <div className="paragraph">
                        <blockquote className="secondary-text">
                          <q>
                          Absolutely adore this beauty brand "Blissful Bloom Beauty"! From their luxurious skincare products to their stunning makeup line, every item exudes quality and elegance. I am thrilled with how radiant and refreshed my skin looks after using their products. Highly recommend for anyone looking to elevate their beauty routine!

                          </q>
                        </blockquote>
                      </div>
                      <div className="author-meta">
                       
                        <div className="author-meta__content">
                          <h5>Amelia Beckett</h5>
                          <p>Marketing Head</p>
                        </div>
                      </div>
                    </div>
                  </SwiperSlide>
                  <SwiperSlide>
                    <div className="testimonial-two__slider-single">
                      <div className="paragraph">
                        <blockquote className="secondary-text">
                          <q>
                          Bean Bliss Cafe is a hidden gem! The ambiance is cozy and inviting, perfect for both work and relaxation. Their coffee is exceptional rich, aromatic, and expertly brewed every time. Coupled with friendly service and delectable pastries, it's my go to spot for a delightful coffee experience!

                          </q>
                        </blockquote>
                      </div>
                      <div className="author-meta">
                        
                        <div className="author-meta__content">
                          <h5>Annabeth Chase</h5>
                          <p>Marketing Head</p>
                        </div>
                      </div>
                    </div>
                  </SwiperSlide>
                </Swiper>
              </div>
            </div>
          </div>
        </div>
      </div>
      <Image src={star} alt="Image" className="star" />
    </section>
  );
};

export default HomeTwoTestimonial;
