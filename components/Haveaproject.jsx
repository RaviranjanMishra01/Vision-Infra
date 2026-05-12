"use client"
import { useState } from "react";
import "./Haveaproject.css"


// ─── VALIDATION RULES ───────────────────────────────────────────────────────
const VALIDATIONS = {
  fullname: {
    validate: (value) => {
      if (!value.trim()) return "Full Name is required";
      if (value.trim().length < 2) return "Name must be at least 2 characters";
      if (!/^[a-zA-Z\s'-]+$/.test(value)) return "Name can only contain letters, spaces, hyphens, and apostrophes";
      return null;
    }
  },
  phone: {
    validate: (value) => {
      if (!value.trim()) return "Phone Number is required";
      const phoneRegex = /^[+]?[(]?[0-9]{1,4}[)]?[-\s.]?[(]?[0-9]{1,4}[)]?[-\s.]?[0-9]{1,9}$/;
      if (!phoneRegex.test(value)) return "Enter a valid phone number";
      return null;
    }
  },
  email: {
    validate: (value) => {
      if (!value.trim()) return "Email Address is required";
      const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
      if (!emailRegex.test(value)) return "Enter a valid email address";
      return null;
    }
  },
  company: {
    validate: (value) => {
      if (!value.trim()) return "Company name is required";
      if (value.trim().length < 2) return "Company name must be at least 2 characters";
      return null;
    }
  },
  message: {
    validate: (value) => {
      if (!value.trim()) return "Message is required";
      if (value.trim().length < 10) return "Message must be at least 10 characters";
      if (value.trim().length > 1000) return "Message cannot exceed 1000 characters";
      return null;
    }
  }
};

// ─── ALL DATA IN JSON ───────────────────────────────────────────────────────
const DATA = {
  overline: "CONTACT US ✦",
  heading: "Have a project in mind?",
  subtext: "LET'S TALK",
  image: "https://images.unsplash.com/photo-1504307651254-35680f356dfd?w=700&q=80",
  fields: [
    { id: "fullname",   label: "Full Name",      type: "text",  placeholder: "Full Name",      half: true },
    { id: "phone",      label: "Phone Number",   type: "tel",   placeholder: "Phone Number",   half: true },
    { id: "email",      label: "Email Address",  type: "email", placeholder: "Email Address",  half: true },
    { id: "company",    label: "Company",        type: "text",  placeholder: "Company",        half: true },
    { id: "message",    label: "Message",        type: "textarea", placeholder: "Message",     half: false },
  ],
  submitBtn: "SUBMIT NOW →",
};


// ─── NOTIFICATION COMPONENT ───────────────────────────────────────────────────
function NotificationPopup({ type, title, message, errors, onClose }) {
  return (
    <div className={`notification-overlay notification-${type}`}>
      <div className={`notification-popup notification-popup-${type}`}>
        <div className="notification-close" onClick={onClose}>✕</div>
        
        <div className="notification-icon">
          {type === 'error' && '⚠️'}
          {type === 'success' && '✓'}
          {type === 'info' && 'ℹ'}
        </div>

        <h3 className="notification-title">{title}</h3>
        
        {message && <p className="notification-message">{message}</p>}
        
        {errors && Object.keys(errors).length > 0 && (
          <div className="notification-errors">
            {Object.entries(errors).map(([field, error]) => (
              error && (
                <div key={field} className="notification-error-item">
                  <span className="error-field">{field}:</span> {error}
                </div>
              )
            ))}
          </div>
        )}

        <button className="notification-btn" onClick={onClose}>
          {type === 'success' ? 'Great! Thanks' : 'Got it'}
        </button>
      </div>
    </div>
  );
}


// ─── MAIN COMPONENT ───────────────────────────────────────────────────────────
export default function HaveAProject() {
  const [form, setForm] = useState(
    Object.fromEntries(DATA.fields.map((f) => [f.id, ""]))
  );
  
  const [errors, setErrors] = useState({});
  const [notification, setNotification] = useState(null);
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setForm({ ...form, [name]: value });
    
    // Clear error for this field when user starts typing
    if (errors[name]) {
      setErrors({ ...errors, [name]: null });
    }
  };

  const validateForm = () => {
    const newErrors = {};
    
    Object.entries(VALIDATIONS).forEach(([fieldId, { validate }]) => {
      const error = validate(form[fieldId] || "");
      if (error) {
        newErrors[fieldId] = error;
      }
    });
    
    return newErrors;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    
    // Validate form
    const formErrors = validateForm();
    
    if (Object.keys(formErrors).length > 0) {
      setErrors(formErrors);
      
      // Show error notification with all validation errors
      setNotification({
        type: 'error',
        title: 'Validation Failed',
        message: 'Please fix the errors below:',
        errors: formErrors
      });
      
      console.error('❌ Form Validation Failed:', formErrors);
      return;
    }
    
    // Clear errors if validation passes
    setErrors({});
    
    // Log to console that validation passed
    console.log(' Form Validation Passed');
    console.log(' Form Data:', form);
    
    setIsSubmitting(true);
    
    // Simulate API call
    try {
      // Here you would normally send data to your backend
      // const response = await fetch('/api/submit-project', { 
      //   method: 'POST', 
      //   body: JSON.stringify(form) 
      // });
      
      // Simulating delay
      await new Promise(resolve => setTimeout(resolve, 800));
      
      console.log(' Form Submitted Successfully!');
      console.log(' Submission Details:', {
        timestamp: new Date().toISOString(),
        data: form,
        status: 'success'
      });
      
      // Show success notification
      setNotification({
        type: 'success',
        title: 'Message Sent!',
        message: 'Thank you! We\'ve received your message and will get back to you shortly.',
      });
      
      // Reset form
      setForm(Object.fromEntries(DATA.fields.map((f) => [f.id, ""])));
      
    } catch (error) {
      console.error(' Submission Error:', error);
      setNotification({
        type: 'error',
        title: 'Submission Failed',
        message: 'Something went wrong. Please try again.',
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <>
      <section className="pim-section">

        {/* ── LEFT: image ── */}
        <div className="pim-image-col">
          <img src={DATA.image} alt="Construction worker with helmet" />
        </div>

        {/* ── RIGHT: form ── */}
        <div className="pim-form-col">
          <span className="pim-overline">{DATA.overline}</span>
          <h2 className="pim-heading">{DATA.heading}</h2>
          <div className="pim-subtext">{DATA.subtext}</div>

          <form className="pim-form" onSubmit={handleSubmit}>
            {DATA.fields.map((field) =>
              field.type === "textarea" ? (
                <div 
                  className={`pim-field${field.half ? "" : " full"} ${errors[field.id] ? 'error' : ''}`} 
                  key={field.id}
                >
                  <textarea
                    className="pim-textarea"
                    name={field.id}
                    placeholder={field.placeholder}
                    value={form[field.id]}
                    onChange={handleChange}
                    rows={4}
                    minLength={10}
                    maxLength={1000}
                  />
                  <span className="char-count">
                    {form[field.id].length}/1000
                  </span>
                  {errors[field.id] && (
                    <span className="field-error-text">{errors[field.id]}</span>
                  )}
                </div>
              ) : (
                <div 
                  className={`pim-field${field.half ? "" : " full"} ${errors[field.id] ? 'error' : ''}`} 
                  key={field.id}
                >
                  <input
                    className="pim-input"
                    type={field.type}
                    name={field.id}
                    placeholder={field.placeholder}
                    value={form[field.id]}
                    onChange={handleChange}
                    {...(field.id === 'fullname' && { minLength: 3, maxLength: 25 })}
                    {...(field.id === 'company' && { minLength: 4, maxLength: 30 })}
                    {...(field.id === 'phone' && { minLength: 10, maxLength: 10 })}
                    {...(field.id === 'email' && { maxLength: 30 })}
                  />
                  {errors[field.id] && (
                    <span className="field-error-text">{errors[field.id]}</span>
                  )}
                </div>
              )
            )}

            {/* Submit button */}
            <div className="pim-submit-wrap">
              <button 
                type="submit" 
                className="pim-submit"
                disabled={isSubmitting}
              >
                {isSubmitting ? 'SUBMITTING...' : DATA.submitBtn}
              </button>
            </div>
          </form>
        </div>

      </section>

      {/* Notification Popup */}
      {notification && (
        <NotificationPopup
          type={notification.type}
          title={notification.title}
          message={notification.message}
          errors={notification.errors}
          onClose={() => setNotification(null)}
        />
      )}
    </>
  );
}