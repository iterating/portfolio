import React, { useEffect, useState } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';

export default function Contact() {
  useEffect(() => {
    AOS.init({ duration: 1300 });
  }, []);

  const [formData, setFormData] = useState({
    fullName: '',
    email: '',
    phoneNumber: '',
    subject: '',
    message: '',
  });
  const [success, setSuccess] = useState(false);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await fetch('/api/email', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });

      if (response.ok) {
        setSuccess(true);
        setTimeout(() => {
          setSuccess(false);
        }, 4000);
      }

      setFormData({
        fullName: '',
        email: '',
        phoneNumber: '',
        subject: '',
        message: '',
      });
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <section className="contact-area page-section scroll-content" id="contact">
      <div className="custom-container">
        <div className="contact-content content-width">
          <div className="section-header">
            <h4 className="subtitle scroll-animation" data-aos="fade-up">
              <i className="las la-dollar-sign"></i> contact
            </h4>
            <h1 className="scroll-animation" data-aos="fade-up">
              Let's Work <span>Together!</span>
            </h1>
          </div>
          <h3 className="scroll-animation" data-aos="fade-up"></h3>
          <p id="required-msg">* Marked fields are required to fill.</p>

          <form
            className="contact-form scroll-animation"
            data-aos="fade-up"
            // method="POST"
            // action="localhost:3001/email"
            onSubmit={handleSubmit}
          >
            {success ? (
              <div
                className="alert alert-success messenger-box-contact__msg"
                role="alert"
              >
                Your message was sent successfully.
              </div>
            ) : (
              ''
            )}
            <div className="row">
              <div className="col-md-6">
                <div className="input-group">
                  <label for="full-name">
                    full Name <sup>*</sup>
                  </label>
                  <input
                    type="text"
                    value={formData.fullName}
                    onChange={handleChange}
                    name="fullName"
                    id="full-name"
                    placeholder="Your Full Name"
                  />
                </div>
              </div>
              <div className="col-md-6">
                <div className="input-group">
                  <label for="email">
                    Email <sup>*</sup>
                  </label>
                  <input
                    type="email"
                    value={formData.email}
                    onChange={handleChange}
                    name="email"
                    id="email"
                    placeholder="Your email adress"
                  />
                </div>
              </div>
              <div className="col-md-6">
                <div className="input-group">
                  <label for="phone-number">
                    phone <span>(optional)</span>
                  </label>
                  <input
                    type="text"
                    value={formData.phoneNumber}
                    onChange={handleChange}
                    name="phoneNumber"
                    id="phone-number"
                    placeholder="Your number phone"
                  />
                </div>
              </div>
              <div className="col-md-6">
                <div className="input-group">
                  <label for="subject">
                    subject <sup>*</sup>
                  </label>
                  <input
                    value={formData.subject}
                    onChange={handleChange}
                    type="text"
                    name="subject"
                    id="subject"
                    placeholder="What is this about?"
                  />
                  {/* <select name="subject" id="subject">
                    <option value="">Select a subject</option>
                    <option value="subject1">Subject 1</option>
                    <option value="subject2">Subject 2</option>
                    <option value="subject3">Subject 3</option>
                  </select> */}
                </div>
              </div>
              {/* <div className="col-md-12">
                            <div className="input-group">
                                <label for="budget">your budget <span>(optional)</span></label>
                                <input type="number" name="budget" id="budget" placeholder="A range budget for your project"/>
                            </div>
                        </div> */}
              <div className="col-md-12">
                <div className="input-group">
                  <label for="message">message</label>
                  <textarea
                    value={formData.message}
                    onChange={handleChange}
                    name="message"
                    id="message"
                    placeholder="Wrire your message here ..."
                  ></textarea>
                </div>
              </div>
              {/* <div className="col-md-12">
                <div className="input-group upload-attachment">
                  <div>
                    <label for="upload-attachment">
                      <i className="las la-cloud-upload-alt"></i> add an
                      attachment
                      <input type="file" name="file" id="upload-attachment" />
                    </label>
                  </div>
                </div>
              </div> */}
              <div className="col-md-12">
                <div className="input-group submit-btn-wrap">
                  <button
                    className="theme-btn"
                    name="submit"
                    type="submit"
                    id="submit-form"
                  >
                    send message
                  </button>
                </div>
              </div>
            </div>
          </form>
        </div>
      </div>
    </section>
  );
}
