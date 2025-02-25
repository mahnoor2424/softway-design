import React, { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper/modules";
import "swiper/swiper-bundle.css";
import { FaPencilRuler, FaLaptopCode, FaVideo, FaFontAwesomeFlag, } from 'react-icons/fa';
interface PortfolioImage {
  id: number;
  src: string;
  category: string;
 
}

const portfolioImages: PortfolioImage[] = [
  // Add 76 existing logo images to the `.design` category
  ...Array.from({ length: 76 }, (_, index) => ({
    id: index + 1,
    src: `/images/portfolio/${index + 1}.png`, // Logo image naming pattern
    category: ".design",
    
  })),

  // Add new website images
  ...Array.from({ length: 4 }, (_, index) => ({
    id: 76 + index + 1,
    src: `/images/portfolio/website${index + 1}.png`, // Website image naming pattern
    category: ".development",
    
  })),

  // Add new video animation images
  ...Array.from({ length: 4 }, (_, index) => ({
    id: 91 + index + 1,
    src: `/images/portfolio/video${index + 1}.mp4`, // Video animation image naming pattern
    category: ".technology",
   
  })),
];


interface Filter {
  id: string;
  label: string;
}

const filters: Filter[] = [
  { id: "*", label: "All" },
  { id: ".design", label: "Logo Design" },
  { id: ".development", label: "Website" },
  { id: ".technology", label: "Video Animation" },
];

const HomeTwoPortfolio: React.FC = () => {
  const [activeFilter, setActiveFilter] = useState<string>("*");
  const [visibleCount, setVisibleCount] = useState<number>(6);
  const [activeSlide, setActiveSlide] = useState<number>(0);


  const handleTabClick = (filter: string): void => {
    setActiveFilter(filter);
    setVisibleCount(6); // Reset visible count when filter changes
  };

  const isVisible = (category: string): boolean => activeFilter === "*" || category === activeFilter;

  const handleLoadMore = (): void => {
    setVisibleCount((prev) => prev + 9);
  };

  return (
    <section className="section portfolio portfolio-two portfolio-filter fade-wrapper" style={{    background: "linear-gradient(180deg, #a5385b, #fbb43e)"}}>
      
      <div className="container">
        <div className="row justify-content-center">
          <div className="col-12 col-lg-8">
            <div className="section__header text-center">
              <span className="sub-title" style={{color: "#fff", borderColor: "#fff"}}>
              Why Choose Us
                <i className="fa-solid fa-arrow-right"></i>
              </span>
              <h2 className="title title-anim">A Look at Our Recent Professional Projects  </h2>
              <p>With extensive experience in logo design, we have mastered the art of crafting unique and memorable brand identities. Drawing on insights from industry pioneers and adapting to evolving design trends, we consistently deliver standout results that leave a lasting impression.</p>
            </div>
          </div>
        </div>
      </div>
      <div className="container">
        <div className="row justify-content-center">
          <div className="text-center">
            <div className="portfolio-two__filter-btn section__header g-ind">
              {filters.map((filter) => (
                <button
                  key={filter.id}
                  aria-label={`Filter by ${filter.label}`}
                  className={activeFilter === filter.id ? "active btn btn--primary" : "btn btn--secondary"}
                  onClick={() => handleTabClick(filter.id)}
                >
                  {/* <span>{String(filters.indexOf(filter) + 1).padStart(2, "0")}</span> */}
                  {filter.label}
                </button>
              ))}
            </div>
          </div>
        </div>
        <div className="row masonry-grid">
          {portfolioImages
            .filter((image) => isVisible(image.category))
            .slice(0, visibleCount)
            .map((image) => (
              <div
                key={image.id}
                className={`col-12 col-md-6 col-xl-4 filter-item-space grid-item-main ${image.category}`}
              >
                <div className="portfolio__single topy-tilt fade-top">
                  <Link href="portfolio">
                  {image.category === ".technology" ? (
              // Render video for the .technology category
              <video
                src={image.src} // MP4 video file path
                controls
                width="500"
                height="400"
                className="portfolio__video"
              />
            ) : (
              // Render image for other categories
              <Image
                src={image.src}
                alt={`Portfolio Image ${image.id}`}
                width={500}
                height={400}
                 className="portfolio__image"
              />
            )}
                  </Link>
                  <div className="portfolio__single-content">
                    <Link href="portfolio">
                      <i className="fa-sharp fa-solid fa-arrow-up-right"></i>
                    </Link>
                    <h4>

                      {/* <Link href="portfolio">{image.title}</Link> */}

                      {/* <Link href="portfolio">{image.title}</Link> */}

                    </h4>
                  </div>
                </div>
              </div>
            ))}
        </div>
        {portfolioImages.filter((image) => isVisible(image.category)).length > visibleCount && (
        
           <div className="cta text-center mt-5" ><a className="btn btn--tertiary" onClick={handleLoadMore}>Load More</a></div>
          
        )}
       
      </div>
      {/* <div className="portfolio__text-slider-w mt-5">
           <Swiper
          slidesPerView="auto"
          spaceBetween={40}
          speed={5000}
          loop={true}
          centeredSlides={true}
          modules={[Autoplay]}
          autoplay={{
            delay: 1,
            disableOnInteraction: false,
            pauseOnMouseEnter: true,
            reverseDirection: false,
          }}
          onSlideChange={(swiper) => setActiveSlide(swiper.realIndex)}
          className="portfolio__text-slider"
        >
          {["Logo Design", "Branding", "Website Design", "Video Animation"].map((text, index) => (
            <SwiperSlide key={index}>
              <div className={`portfolio__text-slider-single ${activeSlide === index ? 'active str' : ''}`}>


                <h4 className={`h1 ${index % 2 === 0 ? "" : "str"}`}>
                  <Link href="portfolio">
                    {text}
                  </Link>
                </h4>

              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div> */}
    </section>
  );
};

export default HomeTwoPortfolio;
