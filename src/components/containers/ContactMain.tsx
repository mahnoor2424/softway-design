import React, { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import phone from "public/images/phone.png";
import mail from "public/images/mail.png";
import location from "public/images/location.png";
import time from "public/images/time.png";

const ContactMain = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: ""
  });
  const [status, setStatus] = useState({
    loading: false,
    error: "",
    success: ""
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus({ loading: true, error: "", success: "" });

    try {
      const response = await fetch('/api/contact', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });

      const data = await response.json();

      if (!response.ok) {
        throw new Error(data.message || 'Something went wrong!');
      }

      setStatus({
        loading: false,
        error: "",
        success: "Message sent successfully!"
      });
      setFormData({ name: "", email: "", subject: "", message: "" });

    } catch (error) {
      setStatus({
        loading: false,
        error: error instanceof Error ? error.message : 'Failed to send message',
        success: ""
      });
    }
  };

  return (
    <section className="section contact-m fade-wrapper">
      <div className="container">
        <div className="row gaper">
          <div className="col-12 col-sm-6 col-xl-3">
            <div className="contact-m__single topy-tilt fade-top">
              <div className="thumb">
                <Image src={phone} alt="Image" />
              </div>
              <div className="content">
                <h4>Phone & Fax</h4>
                <p>
                  <Link href="tel:197-90-56-780">Mobile : +197-90-56-780</Link>
                </p>
                <p>
                  <Link href="tel:197-90-56-780">Fax : +44-208-1234567</Link>
                </p>
              </div>
            </div>
          </div>
          <div className="col-12 col-sm-6 col-xl-3">
            <div className="contact-m__single topy-tilt fade-top">
              <div className="thumb">
                <Image src={mail} alt="Image" />
              </div>
              <div className="content">
                <h4>Mail Address</h4>
                <p>
                  <Link href="mailto:info@softwaydesigns.com">
                  info@softwaydesigns.com
                  </Link>
                </p>
              </div>
            </div>
          </div>
          <div className="col-12 col-sm-6 col-xl-3">
            <div className="contact-m__single topy-tilt fade-top">
              <div className="thumb">
                <Image src={location} alt="Image" />
              </div>
              <div className="content">
                <h4>Our Location</h4>
                <p>
                  <Link
                    href="https://maps.app.goo.gl/r8pXkHHpAMREbHkz9"
                    target="_blank"
                  >
                    4979 Old National Hwy, Collage Park , Georgia 30349
                  </Link>
                </p>
              </div>
            </div>
          </div>
          <div className="col-12 col-sm-6 col-xl-3">
            <div className="contact-m__single topy-tilt fade-top">
              <div className="thumb">
                <Image src={time} alt="Image" />
              </div>
              <div className="content">
                <h4>Office Hour</h4>
                <p>Mon - Fri 09 am - 06pm</p>
              </div>
            </div>
          </div>
        </div>
        <div className="row">
          <div className="col-12">
            <div className="map-wrapper">
              <div className="row gaper">
                <div className="col-12 col-lg-6">
                  <div className="contact__map fade-top">
                    <iframe
                      src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d20342.411046372905!2d-74.16638039276373!3d40.719832743885284!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89c24fa5d33f083b%3A0xc80b8f06e177fe62!2sNew%20York%2C%20NY%2C%20USA!5e0!3m2!1sen!2sbd!4v1649562691355!5m2!1sen!2sbd"
                      width="100"
                      height="800"
                      style={{ border: "0px" }}
                      allowFullScreen
                      loading="lazy"
                      referrerPolicy="no-referrer-when-downgrade"
                    ></iframe>
                  </div>
                </div>
                <div className="col-12 col-lg-6">
                  <div className="contact-main__form fade-top">
                    <h3>Leave A Message</h3>
                    
                    {status.error && <div className="alert alert-danger">{status.error}</div>}
                    {status.success && <div className="alert alert-success">{status.success}</div>}
                    
                    <form onSubmit={handleSubmit} className="section__content-cta">
                      <div className="group-wrapper">
                        <div className="group-input">
                          <input
                            type="text"
                            name="name"
                            value={formData.name}
                            onChange={handleChange}
                            placeholder="Name"
                            required
                          />
                        </div>
                        <div className="group-input">
                          <input
                            type="email"
                            name="email"
                            value={formData.email}
                            onChange={handleChange}
                            placeholder="Email"
                            required
                          />
                        </div>
                      </div>
                      <div className="group-input drt">
                        <select 
                          name="subject"
                          value={formData.subject}
                          onChange={handleChange}
                          required
                        >
                          <option value="">Subject</option>
                          <option value="Account">Account</option>
                          <option value="Service">Service</option>
                          <option value="Pricing">Pricing</option>
                          <option value="Support">Support</option>
                        </select>
                      </div>
                      <div className="group-input">
                        <textarea
                          name="message"
                          value={formData.message}
                          onChange={handleChange}
                          placeholder="Message"
                          required
                        ></textarea>
                      </div>
                      <div className="form-cta justify-content-start">
                        <button 
                          type="submit" 
                          className="btn btn--primary"
                          disabled={status.loading}
                        >
                          {status.loading ? 'Sending...' : 'Send Message'}
                        </button>
                      </div>
                    </form>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactMain;