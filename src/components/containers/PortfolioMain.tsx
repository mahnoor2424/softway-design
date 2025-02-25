import React, { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper/modules";
import "swiper/swiper-bundle.css";

interface PortfolioImage {
  id: number;
  src: string;
  category: string;
  title: string;
}

const portfolioImages: PortfolioImage[] = [
  // Add 76 existing logo images to the `.design` category
  ...Array.from({ length: 76 }, (_, index) => ({
    id: index + 1,
    src: `/images/portfolio/${index + 1}.png`, // Logo image naming pattern
    category: ".design",
    title: `Logo Design`,
  })),

  // Add new website images
  ...Array.from({ length: 4 }, (_, index) => ({
    id: 76 + index + 1,
    src: `/images/portfolio/website${index + 1}.png`, // Website image naming pattern
    category: ".development",
    title: `Website Design`,
  })),

  // Add new video animation images
  ...Array.from({ length: 4 }, (_, index) => ({
    id: 91 + index + 1,
    src: `/images/portfolio/video${index + 1}.mp4`, // Video animation image naming pattern
    category: ".technology",
    title: `Video Animation`,
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
  const [visibleCount, setVisibleCount] = useState<number>(18);

  const handleTabClick = (filter: string): void => {
    setActiveFilter(filter);
    setVisibleCount(18); // Reset visible count when filter changes
  };

  const isVisible = (category: string): boolean => activeFilter === "*" || category === activeFilter;

  const handleLoadMore = (): void => {
    setVisibleCount((prev) => prev + 9);
  };

  return (
    <section className="section portfolio portfolio-two portfolio-filter fade-wrapper">
      
      <div className="container">
        <div className="row justify-content-center">
          <div className="col-12 col-lg-6 col-xl-4 text-center">
            <div className="portfolio-two__filter-btn section__header g-ind">
              {filters.map((filter) => (
                <button
                  key={filter.id}
                  aria-label={`Filter by ${filter.label}`}
                  className={activeFilter === filter.id ? "active" : ""}
                  onClick={() => handleTabClick(filter.id)}
                >
                  <span>{String(filters.indexOf(filter) + 1).padStart(2, "0")}</span>
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
              />
            )}
                  </Link>
                  <div className="portfolio__single-content">
                    <Link href="portfolio">
                      <i className="fa-sharp fa-solid fa-arrow-up-right"></i>
                    </Link>
                    <h4>
                      <Link href="portfolio">{image.title}</Link>
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
    </section>
  );
};

export default HomeTwoPortfolio;
