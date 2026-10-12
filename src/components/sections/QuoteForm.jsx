import React, { useState } from 'react';
import './QuoteForm.css';
import { SectionBadge } from '../ui/SectionBadge';
import { Phone, MessageCircle, ArrowUpRight } from '../ui/Icons';

export const QuoteForm = () => {
  const [activeTab, setActiveTab] = useState('standard'); // 'standard' | 'contract'
  
  // Standard Form State
  const [standardData, setStandardData] = useState({
    fullName: '',
    companyName: '',
    email: '',
    phone: '',
    propertyAddress: '',
    propertyType: 'Home',
    serviceRequired: 'Regular Cleaning',
    frequency: 'Weekly',
    propertySize: '',
    startDate: '',
    requirements: '',
    consent: false
  });

  // Corporate / Care Contract Form State
  const [contractData, setContractData] = useState({
    orgName: '',
    contactName: '',
    jobTitle: '',
    email: '',
    phone: '',
    propertyType: 'Office',
    location: '',
    roomsSize: '',
    frequency: 'Daily',
    startDate: '',
    currentArrangement: '',
    requirements: '',
    consent: false
  });

  const [submitted, setSubmitted] = useState(false);

  const handleStandardChange = (e) => {
    const { name, value, type, checked } = e.target;
    setStandardData((prev) => ({
      ...prev,
      [name]: type === 'checkbox' ? checked : value
    }));
  };

  const handleContractChange = (e) => {
    const { name, value, type, checked } = e.target;
    setContractData((prev) => ({
      ...prev,
      [name]: type === 'checkbox' ? checked : value
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmitted(true);
  };

  return (
    <section id="quote" className="quote-section">
      <div id="contract-enquiry"></div>
      <div className="container">
        <div className="quote-grid">
          {/* Left Column: Context, details & direct contacts */}
          <div className="quote-info-col">
            <SectionBadge text="REQUEST A QUOTE" />
            <h2 className="quote-heading">Let's talk about your space.</h2>
            <p className="quote-lead">
              Tell us what you need. We'll use your enquiry to understand your property and discuss a suitable cleaning proposal tailored to your schedule.
            </p>

            <div className="quote-helpful-details">
              <h3 className="helpful-title">Helpful details to include</h3>
              <p className="helpful-text">
                Property size, priority areas, access arrangements and any particular site requirements. For contracts and care homes, include your preferred frequency, shift times and compliance standards.
              </p>
            </div>

            <div className="quote-direct-contact">
              <span className="direct-contact-title">Prefer a direct conversation?</span>
              <div className="direct-contact-links">
                <a href="tel:+442080000000" className="contact-link-pill">
                  <Phone size={14} className="gold-icon" />
                  <span>Direct Call</span>
                </a>
                <a href="https://wa.me/" target="_blank" rel="noopener noreferrer" className="contact-link-pill">
                  <MessageCircle size={14} className="gold-icon" />
                  <span>WhatsApp</span>
                </a>
              </div>
            </div>
          </div>

          {/* Right Column: Quote Form Card */}
          <div className="quote-form-card">
            {/* Tabs */}
            <div className="form-tab-nav">
              <button 
                type="button" 
                className={`form-tab-btn ${activeTab === 'standard' ? 'active-tab' : ''}`}
                onClick={() => { setActiveTab('standard'); setSubmitted(false); }}
              >
                Standard Cleaning Quote
              </button>
              <button 
                type="button" 
                className={`form-tab-btn ${activeTab === 'contract' ? 'active-tab' : ''}`}
                onClick={() => { setActiveTab('contract'); setSubmitted(false); }}
              >
                Corporate & Care Contract Enquiry
              </button>
            </div>

            {submitted ? (
              <div className="quote-success-message">
                <div className="success-badge">Enquiry Received</div>
                <h4>Thank you!</h4>
                <p>
                  We have received your enquiry. Our management team will review your specifications and contact you promptly with a considered proposal.
                </p>
                <button 
                  className="btn btn-outline" 
                  onClick={() => setSubmitted(false)}
                  style={{ marginTop: '20px' }}
                >
                  Submit Another Enquiry
                </button>
              </div>
            ) : activeTab === 'standard' ? (
              /* Section 18: Standard Cleaning Quote Form */
              <form onSubmit={handleSubmit} className="quote-actual-form">
                <h3 className="form-card-title">Request Your Free Cleaning Quote</h3>
                <p className="form-card-subtitle">Start with a few details. Fields marked * are required.</p>

                <div className="form-fields-grid">
                  <div className="form-field">
                    <label>Full Name *</label>
                    <input 
                      type="text" 
                      name="fullName" 
                      placeholder="Your full name" 
                      value={standardData.fullName}
                      onChange={handleStandardChange}
                      required 
                    />
                  </div>

                  <div className="form-field">
                    <label>Company Name (if applicable)</label>
                    <input 
                      type="text" 
                      name="companyName" 
                      placeholder="Organisation or business name" 
                      value={standardData.companyName}
                      onChange={handleStandardChange}
                    />
                  </div>

                  <div className="form-field">
                    <label>Email Address *</label>
                    <input 
                      type="email" 
                      name="email" 
                      placeholder="name@example.com" 
                      value={standardData.email}
                      onChange={handleStandardChange}
                      required 
                    />
                  </div>

                  <div className="form-field">
                    <label>Telephone Number *</label>
                    <input 
                      type="tel" 
                      name="phone" 
                      placeholder="Contact telephone number" 
                      value={standardData.phone}
                      onChange={handleStandardChange}
                      required 
                    />
                  </div>

                  <div className="form-field form-field-full">
                    <label>Property Address *</label>
                    <input 
                      type="text" 
                      name="propertyAddress" 
                      placeholder="Full property address & postcode" 
                      value={standardData.propertyAddress}
                      onChange={handleStandardChange}
                      required 
                    />
                  </div>

                  <div className="form-field">
                    <label>Type of Property *</label>
                    <select 
                      name="propertyType" 
                      value={standardData.propertyType}
                      onChange={handleStandardChange}
                      required
                    >
                      <option value="Home">Home</option>
                      <option value="Office">Office</option>
                      <option value="Care Home">Care Home</option>
                      <option value="Supported Living">Supported Living</option>
                      <option value="Retail">Retail</option>
                      <option value="Commercial Property">Commercial Property</option>
                      <option value="Warehouse">Warehouse</option>
                      <option value="Other">Other</option>
                    </select>
                  </div>

                  <div className="form-field">
                    <label>Cleaning Service Required *</label>
                    <select 
                      name="serviceRequired" 
                      value={standardData.serviceRequired}
                      onChange={handleStandardChange}
                      required
                    >
                      <option value="Regular Cleaning">Regular Cleaning</option>
                      <option value="Deep Cleaning">Deep Cleaning</option>
                      <option value="End of Tenancy">End of Tenancy</option>
                      <option value="Office Cleaning">Office Cleaning</option>
                      <option value="Commercial Cleaning">Commercial Cleaning</option>
                      <option value="Care Environment Cleaning">Care Environment Cleaning</option>
                      <option value="Post-Build Cleaning">Post-Build Cleaning</option>
                      <option value="Other">Other</option>
                    </select>
                  </div>

                  <div className="form-field">
                    <label>Preferred Cleaning Frequency</label>
                    <select 
                      name="frequency" 
                      value={standardData.frequency}
                      onChange={handleStandardChange}
                    >
                      <option value="One-off">One-off</option>
                      <option value="Daily">Daily</option>
                      <option value="Weekly">Weekly</option>
                      <option value="Multiple times per week">Multiple times per week</option>
                      <option value="Monthly">Monthly</option>
                    </select>
                  </div>

                  <div className="form-field">
                    <label>Approximate Property Size</label>
                    <input 
                      type="text" 
                      name="propertySize" 
                      placeholder="e.g. 3 bedrooms / 2,500 sq ft" 
                      value={standardData.propertySize}
                      onChange={handleStandardChange}
                    />
                  </div>

                  <div className="form-field form-field-full">
                    <label>Preferred Start Date</label>
                    <input 
                      type="text" 
                      name="startDate" 
                      placeholder="Immediate / Date / Timeframe" 
                      value={standardData.startDate}
                      onChange={handleStandardChange}
                    />
                  </div>
                </div>

                <div className="form-field form-field-full">
                  <label>Additional Requirements</label>
                  <textarea 
                    rows="3" 
                    name="requirements" 
                    placeholder="Specific priorities, access details or site considerations..."
                    value={standardData.requirements}
                    onChange={handleStandardChange}
                  ></textarea>
                </div>

                <div className="form-checkbox-wrap">
                  <label className="checkbox-label">
                    <input 
                      type="checkbox" 
                      name="consent" 
                      checked={standardData.consent}
                      onChange={handleStandardChange}
                      required 
                    />
                    <span>I agree to be contacted about this enquiry and have read the privacy policy.</span>
                  </label>
                </div>

                <button type="submit" className="form-submit-btn">
                  <span>Submit Quote Request</span>
                  <ArrowUpRight size={16} />
                </button>
              </form>
            ) : (
              /* Section 19: Care Home / Corporate Contract Enquiry Form */
              <form onSubmit={handleSubmit} className="quote-actual-form">
                <h3 className="form-card-title">Looking for a Cleaning Contractor?</h3>
                <p className="form-card-subtitle">Tell us about your organisation and requirements for regular contract servicing.</p>

                <div className="form-fields-grid">
                  <div className="form-field">
                    <label>Organisation Name *</label>
                    <input 
                      type="text" 
                      name="orgName" 
                      placeholder="Care home / Company name" 
                      value={contractData.orgName}
                      onChange={handleContractChange}
                      required 
                    />
                  </div>

                  <div className="form-field">
                    <label>Contact Name *</label>
                    <input 
                      type="text" 
                      name="contactName" 
                      placeholder="Your name" 
                      value={contractData.contactName}
                      onChange={handleContractChange}
                      required 
                    />
                  </div>

                  <div className="form-field">
                    <label>Job Title</label>
                    <input 
                      type="text" 
                      name="jobTitle" 
                      placeholder="e.g. Facilities Manager / Care Director" 
                      value={contractData.jobTitle}
                      onChange={handleContractChange}
                    />
                  </div>

                  <div className="form-field">
                    <label>Email Address *</label>
                    <input 
                      type="email" 
                      name="email" 
                      placeholder="corporate@organisation.com" 
                      value={contractData.email}
                      onChange={handleContractChange}
                      required 
                    />
                  </div>

                  <div className="form-field">
                    <label>Telephone *</label>
                    <input 
                      type="tel" 
                      name="phone" 
                      placeholder="Contact number" 
                      value={contractData.phone}
                      onChange={handleContractChange}
                      required 
                    />
                  </div>

                  <div className="form-field">
                    <label>Property Type *</label>
                    <select 
                      name="propertyType" 
                      value={contractData.propertyType}
                      onChange={handleContractChange}
                      required
                    >
                      <option value="Care Home">Care Home</option>
                      <option value="Supported Living Facility">Supported Living Facility</option>
                      <option value="Corporate Office">Corporate Office</option>
                      <option value="Multi-site Commercial">Multi-site Commercial</option>
                      <option value="Property Management Portfolio">Property Management Portfolio</option>
                      <option value="Other">Other</option>
                    </select>
                  </div>

                  <div className="form-field form-field-full">
                    <label>Property Location / Locations *</label>
                    <input 
                      type="text" 
                      name="location" 
                      placeholder="Town / City / Site addresses" 
                      value={contractData.location}
                      onChange={handleContractChange}
                      required 
                    />
                  </div>

                  <div className="form-field">
                    <label>Number of Rooms / Approx Size</label>
                    <input 
                      type="text" 
                      name="roomsSize" 
                      placeholder="e.g. 40 rooms / 15,000 sq ft" 
                      value={contractData.roomsSize}
                      onChange={handleContractChange}
                    />
                  </div>

                  <div className="form-field">
                    <label>Cleaning Frequency Required *</label>
                    <select 
                      name="frequency" 
                      value={contractData.frequency}
                      onChange={handleContractChange}
                      required
                    >
                      <option value="Daily">Daily</option>
                      <option value="Multiple-day schedules">Multiple-day schedules</option>
                      <option value="Weekly">Weekly</option>
                      <option value="Evening Cleaning">Evening Cleaning</option>
                      <option value="Weekend Cleaning">Weekend Cleaning</option>
                      <option value="Long-term Agreement">Long-term Agreement</option>
                    </select>
                  </div>

                  <div className="form-field">
                    <label>Preferred Start Date</label>
                    <input 
                      type="text" 
                      name="startDate" 
                      placeholder="Date or tender timeframe" 
                      value={contractData.startDate}
                      onChange={handleContractChange}
                    />
                  </div>

                  <div className="form-field">
                    <label>Current Cleaning Arrangement</label>
                    <input 
                      type="text" 
                      name="currentArrangement" 
                      placeholder="In-house staff / Existing contractor / New site" 
                      value={contractData.currentArrangement}
                      onChange={handleContractChange}
                    />
                  </div>
                </div>

                <div className="form-field form-field-full">
                  <label>Additional Requirements / Standards</label>
                  <textarea 
                    rows="3" 
                    name="requirements" 
                    placeholder="Specific compliance protocols, shift times, or tender details..."
                    value={contractData.requirements}
                    onChange={handleContractChange}
                  ></textarea>
                </div>

                <div className="form-checkbox-wrap">
                  <label className="checkbox-label">
                    <input 
                      type="checkbox" 
                      name="consent" 
                      checked={contractData.consent}
                      onChange={handleContractChange}
                      required 
                    />
                    <span>I agree to be contacted about this corporate enquiry and have read the privacy policy.</span>
                  </label>
                </div>

                <button type="submit" className="form-submit-btn">
                  <span>Request a Contract Discussion</span>
                  <ArrowUpRight size={16} />
                </button>
              </form>
            )}
          </div>
        </div>
      </div>
    </section>
  );
};
