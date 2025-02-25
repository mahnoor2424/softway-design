import React, { useState } from "react";
import Link from "next/link";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Navigation } from "swiper/modules";
import "swiper/swiper-bundle.css";

interface PricingPlan {
  id: number;
  title: string;
  price: string;
  features: string[];
  category: string;
  button: string;
}

const pricingPlans: PricingPlan[] = [
  {
    id: 1,
    title: "Basic Plan",
    price: "$49",
    features: [
      "2 Logo Design Concepts",
      "By 1 Experienced Designer",
      "4 Free Revisions",
      "Dedicated Project Manager",
      "24 - 48 Hours Delivery",
      " 1 Finalized Logo",
      " 100% Ownership",
      " No Print Ready .PDF File",
      " No Vector .EPS File",
      " No Editable Vector .AI File",
    ],
    category: "Logo Design",
    button: "Order Now",
  },
  {
    id: 2,
    title: "Standard",
    price: "$99",
    features: [
      "4 Logo Design Concepts",
      "By 3 Experienced Designers",
      "8 Free Revisions",
      "Dedicated Project Manager",
      "24 - 48 Hours Delivery",
      " 1 Finalized Logo",
      " 100% Ownership",
      "  JPEG % PNG File",
      " No Vector .EPS File",
      "Print Ready .PDF File",
      " No Editable Vector .AI File",
    ],
    category: "Logo Design",
    button: "Order Now",
  },
  {
    id: 3,
    title: "Premium",
    price: "$149",
    features: [
      " 6 Logo Design Concepts",
      " By 5 Experienced Designer",
      " 8 Free Revisions",
      " Dedicated Project Manage",
      "24 - 48 Hours Deliverys",
      " 1 Finalized Logo",
      " 100% Ownership",
      " JPEG % PNG File",
      "No Vector .EPS File",
      "Print Ready .PDF File",
    ],
    category: "Logo Design",
    button: "Order Now",
  },
  {
    id: 4,
    title: "Pro Plan",
    price: "$199",
    features: [
      " Unlimited Design Concepts",
      "By 8 Experienced Designer",
      " 8 Free Revisions",
      " Dedicated Project Manage",
      "24 - 48 Hours Deliverys",
      " 1 Finalized Logo",
      "100% Ownership",
      "JPEG % PNG File",
      "No Vector .EPS File",
      " Print Ready .PDF File",
      " No Editable Vector .AI File",
    ],
    category: "Logo Design",
    button: "Order Now",
  },
  {
    id: 5,
    title: "Basic Branding",
    price: "$99",
    features: [
      "Initial Concepts Provided",
      "1 Designer",
      "Brand Guidelines",
      "Business Card Design",
      "Letterhead Design",
      "Envelope Design",
      "MS Word Letterhead",
      "Email Signature Design",
      "Invoice Design",
      "Facebook Banner Design",
      "YouTube Banner Design",
      "Twitter Banner Design",
      "LinkedIn Banner Design",
      "Logo Watermark",
    ],
    category: "Branding",
    button: "Order Now",
  },
  {
    id: 6,
    title: "Standard Branding",
    price: "$129",
    features: [
      "Business Card Design",
      " Letter head Design",
      " Envelope Design",
      " MS Word Letterhead",
      "Email Signature Design",
      " Invoice Design",
      "Facebook Banner Design",
      " Youtube Banner Design",
      " Twitter Banner Design",
      "Linkedin Banner Design",
      "Logo Watermark",
    ],
    category: "Branding",
    button: "Order Now",
  },
  {
    id: 7,
    title: "Advanced Branding",
    price: "$159",
    features: [
      " Business Card Design",
      "Letter head Design",
      "Envelope Design",
      " MS Word Letterhead",
      " Email Signature Design",
      " Invoice Design",
      "Facebook Banner Design",
      " Youtube Banner Design",
      "Twitter Banner Design",
      " Linkedin Banner Design",
      " Logo Watermark",
      " Favicon Design",
      " Polo/T-Shirt Design",
      "Cap/Hat Design",
    ],
    category: "Branding",
    button: "Order Now",
  },

  {
    id: 8,
    title: "Premium Branding",
    price: "$199",
    features: [
      "Complete Branding Strategy",
      "Team of Experts",
      "Custom Guidelines",
      "Business Card Design",
      "Letterhead Design",
      "Envelope Design",
      "MS Word Letterhead",
      "Email Signature Design",
      "Invoice Design",
      "Facebook Banner Design",
      "YouTube Banner Design",
      "Twitter Banner Design",
      "LinkedIn Banner Design",
      "Logo Watermark",
      "Favicon Design",
      "Polo/T-Shirt Design",
      "Cap/Hat Design",
      "Bag Design",
      "Signage Design",
      "Flyer Design",
      "Car Wrap/Vinyl Design",
      "PPT Design",
      "Magnet Design",
      "Door Sign Design",
      "Menu Design",
      "Mug/Cup Design",
    ],
    category: "Branding",
    button: "Order Now",
  },

  {
    id: 9,
    title: "Basic Website",
    price: "$199",
    features: [
      "Page Static Website",
      "W3C Certified HTML",
      "JQuery Slider Banner",
      "Mobile Responsive Layout",
      "JQuery Slider Banners",
      "Products/Services Section",
      "Portfolio/Gallery Section",
      "Contact Us Section",
      "Lead Inquiry Form",
      "Website Favicon Design",
      "Web Page Banner Design",
      "Royalty Free Stock Image",
      "Advance UI & Effects",
      "Social Media Integrations",
      "Business Domain Emails",
      "LiveChat Tool Integration",
      "3 Month LiveChat Agent",
    ],
    category: "Website",
    button: "Order Now",
  },
  {
    id: 10,
    title: "Standard Website",
    price: "$249",
    features: [
      "5 Page Static Website",
      "W3C Certified HTML",
      "JQuery Slider Banner",
      "Mobile Responsive Layout",
      "JQuery Slider Banners",
      "Products/Services Section",
      "Portfolio/Gallery Section",
      "Contact Us Section",
      "Lead Inquiry Form",
      "Website Favicon Design",
      "5 Web Page Banner Design",
      "5 Royalty Free Stock Image",
      "Advance UI & Effects",
      "Social Media Integrations",
      "Business Domain Emails",
      "LiveChat Tool Integration",
      "3 Month LiveChat Agent",
    ],
    category: "Website",
    button: "Order Now",
  },
  {
    id: 11,
    title: "Advanced Website",
    price: "$299",
    features: [
      "8 Page Static Website",
      "W3C Certified HTML",
      "JQuery Slider Banner",
      "Mobile Responsive Layout",
      "JQuery Slider Banners",
      "Products/Services Section",
      "Portfolio/Gallery Section",
      "Contact Us Section",
      "Lead Inquiry Form",
      "Website Favicon Design",
      "8 Web Page Banner Design",
      "8 Royalty Free Stock Image",
      "Advance UI & Effects",
      "Social Media Integrations",
      "Business Domain Emails",
      "LiveChat Tool Integration",
      "3 Month LiveChat Agent",
    ],
    category: "Website",
    button: "Order Now",
  },
  {
    id: 12,
    title: "Premium Website",
    price: "$399",
    features: [
      "12 Page Static Website",
      "W3C Certified HTML",
      "JQuery Slider Banner",
      "Mobile Responsive Layout",
      "JQuery Slider Banners",
      "Products/Services Section",
      "Portfolio/Gallery Section",
      "Contact Us Section",
      "Lead Inquiry Form",
      "Website Favicon Design",
      "12 Web Page Banner Design",
      "12 Royalty Free Stock Image",
      "Advance UI & Effects",
      "Social Media Integrations",
      "Business Domain Emails",
      "LiveChat Tool Integration",
      "3 Month LiveChat Agent",
    ],
    category: "Website",
    button: "Order Now",
  },

  {
    id: 13,
    title: "Basic Animation",
    price: "$199",
    features: [
      "60 seconds",
      "Script Writing",
      "Detail Storyboard",
      "Professional Voiceover",
      "Impressive Animation",
      "Royalty-Free BG & SFX",
      "File Delivered in HD 720p",
      "3 Rounds of Revisions in Each Phase",
      "4 Weeks Deadline",
      "100% Satisfaction",
      "100% Ownership Rights",
    ],
    category: "Video Animation",
    button: "Order Now",
  },
  {
    id: 14,
    title: "Standard Animation",
    price: "$299",
    features: [
      "60 seconds",
      "Script Writing",
      "Detail Storyboard",
      "Detail Illustrations",
      "Professional Voiceover",
      "Impressive Animation",
      "Royalty-Free BG & SFX",
      "File Delivered in HD 720p",
      "3 Rounds of Revisions in Each Phase",
      "3 Weeks Deadline",
      "100% Satisfaction",
      "100% Ownership Rights",
    ],
    category: "Video Animation",
    button: "Order Now",
  },
  {
    id: 15,
    title: "Premium Animation",
    price: "$399",
    features: [
      "60 seconds",
      "Script Writing",
      "Detail Storyboard",
      "Detail Illustrations",
      "Professional Voiceover",
      "Impressive Animation",
      "Royalty-Free BG & SFX",
      "File Delivered in HD 720p",
      "Multiple Rounds of Revisions in Each Phase",
      "2 Weeks Deadline",
      "Dedicated Project Manager",
      "100% Satisfaction",
      "100% Ownership Rights",
    ],
    category: "Video Animation",
    button: "Order Now",
  },
  {
    id: 16,
    title: "Pro Animation",
    price: "$499",
    features: [
      "60 seconds",
      "2 Concepts + Premium Script Writing",
      "Detail Storyboard",
      "Detail Illustrations",
      "Professional Voiceover",
      "Impressive Animation",
      "Royalty-Free BG & SFX",
      "File Delivered in HD 720p",
      "Unlimited Revisions",
      "6 Weeks Deadline",
      "Dedicated Project Manager",
      "100% Satisfaction",
      "100% Ownership Rights",
      "Source File",
    ],
    category: "Video Animation",
    button: "Order Now",
  },
];

const HomePackages: React.FC = () => {
  const [selectedCategory, setSelectedCategory] =
    useState<string>("Logo Design");
  const [activeTab, setActiveTab] = useState<number>(1);

  const handleTabClick = (tabId: number) => {
    setActiveTab(tabId);
  };
  // Filter plans by selected category
  const filteredPlans = pricingPlans.filter(
    (plan) => plan.category === selectedCategory
  );

  return (
    <div
      style={{
        margin: "0 auto",
        paddingTop: "100px",
        // backgroundColor: "#a5385b",
        backgroundColor: "#a51241",
      }}
    >
      <div className="container">
        <div className="row justify-content-center">
          <div className="col-12 col-lg-8">
            <div className="section__header text-center">
              <span
                className="sub-title"
                style={{ color: "#fff", borderColor: "#fff" }}
              >
                Pricing Plans
                <i className="fa-solid fa-arrow-right"></i>
              </span>
              <h2 className="title title-anim">
                Flexible Pricing Plans to Fit Your Needs
              </h2>
            </div>
          </div>
        </div>
      </div>

      <section className="section service-t pt-2">
        <div className="container">
          <div
            style={{
              marginBottom: "20px",
              textAlign: "center",
              display: "flex",
              flexWrap: "wrap",
              justifyContent: "center",
              gap: "10px",
            }}
          >
            {["Logo Design", "Branding", "Website", "Video Animation"].map(
              (category) => (
                <button
                  key={category}
                  onClick={() => setSelectedCategory(category)}
                  className={`btn ${
                    selectedCategory === category
                      ? "btn--primary"
                      : "btn--secondary"
                  }`}
                  style={{
                    marginLeft: "20px",
                  }}
                >
                  {category}
                </button>
              )
            )}
          </div>
          <div className="row mt-2">
            <div className="col-12">
              <div className="service-t__slider-w">
                {activeTab === 1 && (
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
                      nextEl: ".next-service-t",
                      prevEl: ".prev-service-t",
                    }}
                    className="service-t__slider"
                    breakpoints={{
                      1400: { slidesPerView: 4 },
                      1200: { slidesPerView: 3 },
                      768: { slidesPerView: 2 },
                    }}
                  >
                    {/* Loop through filteredPlans */}
                    {filteredPlans.map((plan) => (
                      <SwiperSlide key={plan.id}>
                        <div className="service-t-single-wrapper">
                          <div
                            className="service-t__slider-single"
                            style={{
                              maxHeight: "700px",
                              minHeight: "700px",
                              overflowY: "auto",
                              borderRadius: "8px",
                              background: `linear-gradient(135deg, ${
                                plan.category === "Logo Design"
                                  ? "#3A1C71, #FFAF7B" // Premium for Logo Design
                                  : plan.category === "Branding"
                                  ? "#11998e,rgb(5, 133, 54)" // Sophisticated for Branding
                                  : plan.category === "Website"
                                  ? "#43C6AC, #191654" // Fresh for Website
                                  : "#8E44AD, #C0392B" // Energetic for Video Animation
                              })`,
                            }}
                          >
                            <div className="intro">
                              <span
                                className="sub-title"
                                style={{ color: "#fff", borderColor: "#fff" }}
                              >
                                {plan.category}
                                <i className="fa-solid fa-arrow-right"></i>
                              </span>
                              <h4 className="mb-3">
                                <Link href="service-single"> {plan.title}</Link>
                              </h4>
                            </div>

                            {/* Render the details for each plan */}
                            <div className="pricing-plan">
                              <div className="pricing-plan__header">
                                <h5>{plan.price}</h5>
                              </div>
                              <ul className="pricing-plan__features">
                                {plan.features.map((feature, index) => (
                                  <li key={index}>{feature}</li>
                                ))}
                              </ul>
                              <div className="cta2">
                                <Link href="/checkkout">
                                  <i className="icon-arrow-top-right"></i>
                                  <span>{plan.button}</span>
                                </Link>
                              </div>
                            </div>
                          </div>
                        </div>
                      </SwiperSlide>
                    ))}
                  </Swiper>
                )}
              </div>
            </div>
          </div>
        </div>
        <div className="slide-group">
          <button
            aria-label="previous item"
            className="slide-btn prev-service-t"
          >
            <i className="fa-light fa-angle-left"></i>
          </button>
          <button aria-label="next item" className="slide-btn next-service-t">
            <i className="fa-light fa-angle-right"></i>
          </button>
        </div>
      </section>
    </div>
  );
};

export default HomePackages;
