"use client";

import { useState } from "react";
import "./Haveaproject.css";

/* ─────────────────────────────────────────
   VALIDATIONS
───────────────────────────────────────── */

const VALIDATIONS = {
  fullname: {
    validate: (value) => {
      const cleaned = value.trim();

      if (!cleaned) {
        return "Full name is required";
      }

      if (cleaned.length < 3) {
        return "Name must be at least 3 characters";
      }

      if (cleaned.length > 30) {
        return "Name cannot exceed 30 characters";
      }

      const nameRegex = /^[A-Za-z\s'-]+$/;

      if (!nameRegex.test(cleaned)) {
        return "Only letters, spaces, apostrophes and hyphens allowed";
      }

      return null;
    },
  },

  phone: {
    validate: (value) => {
      const cleaned = value.replace(/\s+/g, "");

      if (!cleaned) {
        return "Phone number is required";
      }

      const phoneRegex = /^[0-9]{10}$/;

      if (!phoneRegex.test(cleaned)) {
        return "Phone number must be exactly 10 digits";
      }

      return null;
    },
  },

  email: {
    validate: (value) => {
      const cleaned = value.trim().toLowerCase();

      if (!cleaned) {
        return "Email address is required";
      }

      const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,}$/;

      if (!emailRegex.test(cleaned)) {
        return "Enter a valid email address";
      }

      if (cleaned.length > 50) {
        return "Email cannot exceed 50 characters";
      }

      return null;
    },
  },

  company: {
    validate: (value) => {
      const cleaned = value.trim();

      if (!cleaned) {
        return "Company name is required";
      }

      if (cleaned.length < 2) {
        return "Company name must be at least 2 characters";
      }

      if (cleaned.length > 40) {
        return "Company name cannot exceed 40 characters";
      }

      const companyRegex = /^[A-Za-z\s&'-]+$/;

      if (!companyRegex.test(cleaned)) {
        return "Company name can only contain letters";
      }

      return null;
    },
  },

  message: {
    validate: (value) => {
      const cleaned = value.trim();

      if (!cleaned) {
        return "Message is required";
      }

      if (cleaned.length < 15) {
        return "Message must be at least 15 characters";
      }

      if (cleaned.length > 1000) {
        return "Message cannot exceed 1000 characters";
      }

      return null;
    },
  },
};

/* ─────────────────────────────────────────
   DATA
───────────────────────────────────────── */

const DATA = {
  overline: "CONTACT US ✦",

  heading: "Have a project in mind?",

  subtext: "LET'S TALK",

  image:
    "https://images.unsplash.com/photo-1504307651254-35680f356dfd?w=700&q=80",

  fields: [
    {
      id: "fullname",
      label: "Full Name",
      type: "text",
      placeholder: "Full Name",
      half: true,
    },

    {
      id: "phone",
      label: "Phone Number",
      type: "tel",
      placeholder: "Phone Number",
      half: true,
    },

    {
      id: "email",
      label: "Email Address",
      type: "email",
      placeholder: "Email Address",
      half: true,
    },

    {
      id: "company",
      label: "Company",
      type: "text",
      placeholder: "Company",
      half: true,
    },

    {
      id: "message",
      label: "Message",
      type: "textarea",
      placeholder: "Message",
      half: false,
    },
  ],

  submitBtn: "SUBMIT NOW →",
};

/* ─────────────────────────────────────────
   NOTIFICATION COMPONENT
───────────────────────────────────────── */

function NotificationPopup({ type, title, message, errors, onClose }) {
  return (
    <div className={`notification-overlay notification-${type}`}>
      <div className={`notification-popup notification-popup-${type}`}>
        <div className="notification-close" onClick={onClose}>
          ✕
        </div>

        <div className="notification-icon">
          {type === "error" && "⚠️"}
          {type === "success" && "✓"}
        </div>

        <h3 className="notification-title">{title}</h3>

        {message && <p className="notification-message">{message}</p>}

        {errors && Object.keys(errors).length > 0 && (
          <div className="notification-errors">
            {Object.entries(errors).map(
              ([field, error]) =>
                error && (
                  <div key={field} className="notification-error-item">
                    <span className="error-field">{field}:</span> {error}
                  </div>
                ),
            )}
          </div>
        )}

        <button className="notification-btn" onClick={onClose}>
          {type === "success" ? "Great! Thanks" : "Got it"}
        </button>
      </div>
    </div>
  );
}

/* ─────────────────────────────────────────
   MAIN COMPONENT
───────────────────────────────────────── */

export default function HaveAProject() {
  const [form, setForm] = useState(
    Object.fromEntries(DATA.fields.map((field) => [field.id, ""])),
  );

  const [errors, setErrors] = useState({});

  const [notification, setNotification] = useState(null);

  const [isSubmitting, setIsSubmitting] = useState(false);

  /* ─────────────────────────────────────
     HANDLE CHANGE
  ───────────────────────────────────── */

  const handleChange = (e) => {
    let { name, value } = e.target;

    if (name === "phone") {
      value = value.replace(/\D/g, "");
    }

    setForm((prev) => ({
      ...prev,
      [name]: value,
    }));

    if (errors[name]) {
      setErrors((prev) => ({
        ...prev,
        [name]: null,
      }));
    }
  };

  /* ─────────────────────────────────────
     HANDLE BLUR
  ───────────────────────────────────── */

  const handleBlur = (e) => {
    const { name, value } = e.target;

    const validator = VALIDATIONS[name];

    if (!validator) return;

    const error = validator.validate(value);

    setErrors((prev) => ({
      ...prev,
      [name]: error,
    }));
  };

  /* ─────────────────────────────────────
     VALIDATE FORM
  ───────────────────────────────────── */

  const validateForm = () => {
    const newErrors = {};

    Object.entries(VALIDATIONS).forEach(([fieldId, { validate }]) => {
      const error = validate(form[fieldId] || "");

      newErrors[fieldId] = error;
    });

    return newErrors;
  };

  /* ─────────────────────────────────────
     SUBMIT
  ───────────────────────────────────── */

  const handleSubmit = async (e) => {
    e.preventDefault();

    const formErrors = validateForm();

    const hasErrors = Object.values(formErrors).some(Boolean);

    if (hasErrors) {
      setErrors(formErrors);

      setNotification({
        type: "error",
        title: "Validation Failed",
        message: "Please fix the errors below.",
        errors: formErrors,
      });

      return;
    }

    setErrors({});

    const sanitizedData = {
      fullname: form.fullname.trim(),

      phone: form.phone.trim(),

      email: form.email.trim().toLowerCase(),

      company: form.company.trim(),

      message: form.message.trim(),
    };

    console.log(" Form Submitted:", sanitizedData);

    setIsSubmitting(true);

    try {
      await new Promise((resolve) => setTimeout(resolve, 1200));

      setNotification({
        type: "success",
        title: "Message Sent!",
        message: "Thank you! We received your message successfully.",
      });

      setForm(Object.fromEntries(DATA.fields.map((field) => [field.id, ""])));
    } catch (error) {
      setNotification({
        type: "error",
        title: "Submission Failed",
        message: "Something went wrong. Please try again.",
      });

      console.error(error);
    } finally {
      setIsSubmitting(false);
    }
  };

  /* ─────────────────────────────────────
     JSX
  ───────────────────────────────────── */

  return (
    <>
      <section className="pim-section">
        {/* IMAGE */}

        <div className="pim-image-col">
          <img src={DATA.image} alt="Construction worker with helmet" />
        </div>

        {/* FORM */}

        <div className="pim-form-col">
          <span className="pim-overline">{DATA.overline}</span>

          <h2 className="pim-heading">{DATA.heading}</h2>

          <div className="pim-subtext">{DATA.subtext}</div>

          <form className="pim-form" onSubmit={handleSubmit}>
            {DATA.fields.map((field) =>
              field.type === "textarea" ? (
                <div
                  key={field.id}
                  className={`pim-field ${field.half ? "" : "full"} ${
                    errors[field.id] ? "error" : ""
                  }`}
                >
                  <textarea
                    className="pim-textarea"
                    name={field.id}
                    placeholder={field.placeholder}
                    value={form[field.id]}
                    onChange={handleChange}
                    onBlur={handleBlur}
                    rows={4}
                    required
                    minLength={15}
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
                  key={field.id}
                  className={`pim-field ${field.half ? "" : "full"} ${
                    errors[field.id] ? "error" : ""
                  }`}
                >
                  <input
                    className="pim-input"
                    type={field.type}
                    name={field.id}
                    placeholder={field.placeholder}
                    value={form[field.id]}
                    onChange={handleChange}
                    onBlur={handleBlur}
                    autoComplete="off"
                    required
                    {...(field.id === "fullname" && {
                      minLength: 3,
                      maxLength: 30,
                    })}
                    {...(field.id === "company" && {
                      minLength: 2,
                      maxLength: 40,
                    })}
                    {...(field.id === "phone" && {
                      inputMode: "numeric",
                      pattern: "[0-9]*",
                      maxLength: 10,
                    })}
                    {...(field.id === "email" && {
                      maxLength: 50,
                    })}
                  />

                  {errors[field.id] && (
                    <span className="field-error-text">{errors[field.id]}</span>
                  )}
                </div>
              ),
            )}

            <div className="pim-submit-wrap">
              <button
                type="submit"
                className="pim-submit"
                disabled={isSubmitting}
              >
                {isSubmitting ? "SUBMITTING..." : DATA.submitBtn}
              </button>
            </div>
          </form>
        </div>
      </section>

      {/* NOTIFICATION */}

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
