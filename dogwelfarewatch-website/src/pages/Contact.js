import React, { useState } from 'react';
import './Contact.css';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Simulate form submission
    setTimeout(() => {
      alert("Thank you for your message! We'll review your inquiry and respond within 24 hours.");
      setFormData({ name: '', email: '', subject: '', message: '' });
      setIsSubmitting(false);
    }, 2000);
  };

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  return (
    <div className="contact-page">
      <div className="contact-hero">
        <div className="contact-hero-content">
          <h1>Get In Touch</h1>
          <p>Ready to make a difference in animal welfare? Contact Dog Welfare Watch to report concerns, collaborate, or learn more about our advocacy work.</p>
        </div>
      </div>

      <section className="contact-section">
        <div className="section">
          <div className="contact-content">
            <div className="contact-form-container">
              <h2>Send us a Message</h2>
              <form onSubmit={handleSubmit} className="contact-form">
                <div className="form-row">
                  <div className="form-group">
                    <label htmlFor="name">Full Name *</label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      required
                    />
                  </div>
                  <div className="form-group">
                    <label htmlFor="email">Email Address *</label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      required
                    />
                  </div>
                </div>
                
                <div className="form-group">
                  <label htmlFor="subject">Subject *</label>
                  <select
                    id="subject"
                    name="subject"
                    value={formData.subject}
                    onChange={handleChange}
                    required
                  >
                    <option value="">Please select a topic...</option>
                    <option value="concern">Report a Welfare Concern</option>
                    <option value="media">Media Inquiry</option>
                    <option value="volunteer">Volunteer Opportunity</option>
                    <option value="collaboration">Partnership/Collaboration</option>
                    <option value="foi">Freedom of Information Request</option>
                    <option value="legal">Legal Support/Advice</option>
                    <option value="general">General Inquiry</option>
                  </select>
                </div>
                
                <div className="form-group">
                  <label htmlFor="message">Message *</label>
                  <textarea
                    id="message"
                    name="message"
                    rows="6"
                    value={formData.message}
                    onChange={handleChange}
                    placeholder="Please provide details about your inquiry, concern, or how you'd like to get involved. If reporting a welfare concern, include relevant details like location, dates, and specific issues."
                    required
                  />
                </div>
                
                <button 
                  type="submit" 
                  className="btn btn-primary submit-btn"
                  disabled={isSubmitting}
                >
                  {isSubmitting ? 'Sending Message...' : 'Send Message'}
                </button>
              </form>
            </div>
            
            <div className="contact-info">
              <h2>Contact Information</h2>
              <p>Dog Welfare Watch is committed to responding to all inquiries promptly and confidentially.</p>
              
              <div className="contact-cards">
                <div className="contact-card">
                  <div className="contact-icon">📧</div>
                  <h3>General Inquiries</h3>
                  <p><strong>Email:</strong> <a href="mailto:press@dogwelfarewatch.org">press@dogwelfarewatch.org</a></p>
                  <p>Response time: Within 24 hours</p>
                </div>
                
                <div className="contact-card">
                  <div className="contact-icon">📰</div>
                  <h3>Media & Press</h3>
                  <p><strong>Sidney Lane</strong><br/>Media & Transparency Desk</p>
                  <p><a href="mailto:press@dogwelfarewatch.org">press@dogwelfarewatch.org</a></p>
                </div>
                
                <div className="contact-card">
                  <div className="contact-icon">🚨</div>
                  <h3>Urgent Concerns</h3>
                  <p><strong>Welfare Emergencies</strong></p>
                  <p>For immediate animal welfare concerns, also contact local authorities</p>
                  <p>We monitor emails regularly</p>
                </div>
                
                <div className="contact-card">
                  <div className="contact-icon">🤝</div>
                  <h3>Collaboration</h3>
                  <p><strong>Partnerships & Support</strong></p>
                  <p>Working with rescue groups, veterinarians, legal experts, and community advocates</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Contact;