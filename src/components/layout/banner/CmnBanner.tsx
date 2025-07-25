import React from "react";
import Link from "next/link";

interface BannerProps {
  title?: any;
  navigation?: any;
  parent?: any;
  parentLink?: any;
  backgroundColor?: string;
}

const CmnBanner = ({ title, navigation, parent, parentLink,  backgroundColor="rgba(100, 150, 200, 0.7)" }: BannerProps) => {
  return (
    <>
      <section
        className="cmn-banner bg-img"
        style={{
          backgroundImage: "url('/images/banner/ab.jpeg')",
         
        }}>
             <div
          className="overlay"
          style={{
            backgroundColor: backgroundColor,
          }}
        ></div>
        <div className="container ">
          <div className="row gaper align-items-center ">
            <div className="col-12 col-lg-5 col-xl-7 ">
              <div className="text-center text-lg-start">
                <h2 className="title title-anim">{title}</h2>
                <nav aria-label="breadcrumb">
                  <ol className="breadcrumb">
                    <li className="breadcrumb-item">
                      <Link href="/">
                        <i className="fa-solid fa-house"></i>
                        Home
                      </Link>
                    </li>
                    {parent && (
                      <li className="breadcrumb-item">
                        <Link href={parentLink}>{parent}</Link>
                      </li>
                    )}
                    <li className="breadcrumb-item active" aria-current="page">
                      {navigation}
                    </li>
                  </ol>
                </nav>
              </div>
            </div>
            <div className="col-12 col-lg-7 col-xl-5">
              <div className="text-center text-lg-start">
                <p className="primary-text">
                We specialize in logo design, branding, and web design, delivering innovative, tailored solutions. By blending creativity with global trends, we craft impactful designs that resonate, ensuring lasting results. Trusted by businesses worldwide, our commitment to excellence and collaboration helps brands stand out and connect meaningfully with their audiences.



                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default CmnBanner;
