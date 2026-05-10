"use client"
import { useState } from "react";


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

// ─── STYLES ─────────────────────────────────────────────────────────────────
const styles = `
  @import url('https://fonts.googleapis.com/css2?family=Barlow:wght@400;500;600;700;800;900&family=Barlow+Condensed:wght@400;600;700;800;900&display=swap');

  *, *::before, *::after { box-sizing: border-box; margin: 0; padding: 0; }

  body { font-family: 'Barlow', sans-serif; background: #f0eeeb; }

  .pim-section {
    background: #f0eeeb;
    font-family: 'Barlow', sans-serif;
    position: relative;
    overflow: hidden;
    min-height: 550px;
    display: flex;
    align-items: stretch;
  }

  /* faint diagonal orange watermark right side */
  .pim-section::after {
    content: '';
    position: absolute;
    right: -60px;
    top: 50%;
    transform: translateY(-50%) rotate(-18deg);
    width: 260px;
    height: 260px;
    background: rgba(232,93,4,0.07);
    border-radius: 12px;
    pointer-events: none;
    z-index: 0;
  }

  /* ── LEFT image ── */
  .pim-image-col {
    position: relative;
    width: 36%;
    flex-shrink: 0;
    overflow: hidden;
  }

  .pim-image-col img {
    width: 100%;
    height: 100%;
    object-fit: cover;
    object-position: center top;
    display: block;
    filter: brightness(0.88);
  }

  /* fade image into background on the right edge */
  .pim-image-col::after {
    content: '';
    position: absolute;
    inset: 0;
    background: linear-gradient(to right, transparent 55%, #f0eeeb 100%);
    pointer-events: none;
  }

  /* ── RIGHT form area ── */
  .pim-form-col {
    flex: 1;
    padding: 52px 52px 52px 44px;
    position: relative;
    z-index: 1;
    display: flex;
    flex-direction: column;
    justify-content: center;
  }

  .pim-overline {
    font-size: 10px;
    font-weight: 700;
    letter-spacing: 3px;
    text-transform: uppercase;
    color: #e85d04;
    margin-bottom: 8px;
    display: block;
  }

  .pim-heading {
    font-family: 'Barlow', sans-serif;
    font-size: clamp(26px, 3.2vw, 38px);
    font-weight: 800;
    color: #1a1a1a;
    line-height: 1.1;
    margin-bottom: 4px;
  }

  .pim-subtext {
    font-family: 'Barlow Condensed', sans-serif;
    font-size: 13px;
    font-weight: 700;
    letter-spacing: 3px;
    color: rgba(0,0,0,0.15);
    text-transform: uppercase;
    margin-bottom: 28px;
  }

  /* ── Form grid ── */
  .pim-form {
    display: grid;
    grid-template-columns: 1fr 1fr;
    gap: 12px 16px;
  }

  .pim-field {
    display: flex;
    flex-direction: column;
  }

  .pim-field.full {
    grid-column: 1 / -1;
  }

  .pim-input,
  .pim-textarea {
    width: 100%;
    background: #ebe8e3;
    border: none;
    border-bottom: 2px solid transparent;
    outline: none;
    font-family: 'Barlow', sans-serif;
    font-size: 12.5px;
    color: #333;
    padding: 13px 16px;
    border-radius: 2px;
    transition: border-color 0.2s, background 0.2s;
  }

  .pim-input::placeholder,
  .pim-textarea::placeholder {
    color: #aaa;
    font-size: 12px;
    letter-spacing: 0.3px;
  }

  .pim-input:focus,
  .pim-textarea:focus {
    border-bottom-color: #e85d04;
    background: #e5e1db;
  }

  .pim-textarea {
    resize: none;
    height: 90px;
  }

  /* ── Submit button ── */
  .pim-submit-wrap {
    grid-column: 1 / -1;
    margin-top: 4px;
  }

  .pim-submit {
    background: #e85d04;
    color: #fff;
    border: none;
    width: 100%;
    padding: 15px 28px;
    font-family: 'Barlow', sans-serif;
    font-size: 12px;
    font-weight: 700;
    letter-spacing: 2.5px;
    text-transform: uppercase;
    cursor: pointer;
    border-radius: 2px;
    transition: background 0.2s, transform 0.15s;
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 10px;
  }

  .pim-submit:hover {
    background: #cf4f00;
    transform: translateY(-1px);
  }

  /* Responsive */
  @media (max-width: 700px) {
    .pim-section { flex-direction: column; }
    .pim-image-col { width: 100%; height: 220px; }
    .pim-image-col::after { background: linear-gradient(to bottom, transparent 55%, #f0eeeb 100%); }
    .pim-form-col { padding: 32px 20px; }
    .pim-form { grid-template-columns: 1fr; }
    .pim-field.full { grid-column: 1; }
  }
`;

// ─── COMPONENT ───────────────────────────────────────────────────────────────
export default function HaveAProject() {
  const [form, setForm] = useState(
    Object.fromEntries(DATA.fields.map((f) => [f.id, ""]))
  );

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    alert("Form submitted! ✅");
  };

  return (
    <>
      <style>{styles}</style>

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
                <div className={`pim-field${field.half ? "" : " full"}`} key={field.id}>
                  <textarea
                    className="pim-textarea"
                    name={field.id}
                    placeholder={field.placeholder}
                    value={form[field.id]}
                    onChange={handleChange}
                    rows={4}
                  />
                </div>
              ) : (
                <div className={`pim-field${field.half ? "" : " full"}`} key={field.id}>
                  <input
                    className="pim-input"
                    type={field.type}
                    name={field.id}
                    placeholder={field.placeholder}
                    value={form[field.id]}
                    onChange={handleChange}
                  />
                </div>
              )
            )}

            {/* Submit button */}
            <div className="pim-submit-wrap">
              <button type="submit" className="pim-submit">
                {DATA.submitBtn}
              </button>
            </div>
          </form>
        </div>

      </section>
    </>
  );
}