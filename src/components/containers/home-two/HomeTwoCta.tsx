import React, { useState } from "react";
import Image from "next/image";
import star from "public/images/testimonial/star.png";

const HomeTwoCta = () => {
  const [email, setEmail] = useState("");
  const [status, setStatus] = useState({
    loading: false,
    error: "",
    success: ""
  });

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus({ loading: true, error: "", success: "" });

    try {
      const response = await fetch('/api/newsletter', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ email }),
      });

      const data = await response.json();

      if (!response.ok) {
        throw new Error(data.message || 'Something went wrong!');
      }

      setStatus({
        loading: false,
        error: "",
        success: "Successfully subscribed!"
      });
      setEmail("");

    } catch (error) {
      setStatus({
        loading: false,
        error: error instanceof Error ? error.message : 'Failed to subscribe',
        success: ""
      });
    }
  };

  return (
    <section className="cta-s">
      <div className="container">
        <div className="row">
          <div className="col-12">
            <div className="cta__wrapper" data-background="assets/images/cta-bg.png">
              <div className="row justify-content-center">
                <div className="col-12 col-md-10 col-lg-9 col-xl-8 col-xxl-9">
                  <div className="section__header text-center">
                    <h2 className="title">
                      Stay Ahead With Our Top Notch Digital Services
                    </h2>
                  </div>
                  <div className="footer__single-form">
                    {status.error && <div className="alert alert-danger text-center mb-3">{status.error}</div>}
                    {status.success && <div className="alert alert-success text-center mb-3">{status.success}</div>}
                    
                    <form onSubmit={handleSubmit}>
                      <div className="input-email">
                        <input
                          type="email"
                          name="subscribe-news"
                          value={email}
                          onChange={(e) => setEmail(e.target.value)}
                          placeholder="Enter Your Email"
                          required
                        />
                        <button 
                          type="submit" 
                          className="subscribe"
                          disabled={status.loading}
                        >
                          {status.loading ? (
                            <i className="fas fa-spinner fa-spin"></i>
                          ) : (
                            <i className="fa-sharp fa-solid fa-paper-plane"></i>
                          )}
                        </button>
                      </div>
                    </form>
                  </div>
                </div>
              </div>
              <Image src={star} alt="Image" className="star" />
              <Image src={star} alt="Image" className="star-two" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HomeTwoCta;
