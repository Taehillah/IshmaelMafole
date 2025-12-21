"use client";

import { useState, type ChangeEvent, type FormEvent } from "react";
import styles from "../styles/Contact.module.css";

const initialState = {
  name: "",
  email: "",
  subject: "",
  message: ""
};

type Errors = Partial<Record<keyof typeof initialState, string>>;

export default function ContactForm() {
  const [values, setValues] = useState(initialState);
  const [errors, setErrors] = useState<Errors>({});
  const [submitted, setSubmitted] = useState(false);

  const handleChange = (event: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setValues((prev) => ({ ...prev, [event.target.name]: event.target.value }));
  };

  const validate = () => {
    const nextErrors: Errors = {};

    if (values.name.trim().length < 2) {
      nextErrors.name = "Name must be at least 2 characters.";
    }

    if (!/^[^@\s]+@[^@\s]+\.[^@\s]+$/.test(values.email)) {
      nextErrors.email = "Enter a valid email address.";
    }

    if (values.subject.trim().length < 3) {
      nextErrors.subject = "Subject should be at least 3 characters.";
    }

    if (values.message.trim().length < 20) {
      nextErrors.message = "Message should be at least 20 characters.";
    }

    return nextErrors;
  };

  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const nextErrors = validate();

    if (Object.keys(nextErrors).length > 0) {
      setErrors(nextErrors);
      setSubmitted(false);
      return;
    }

    setErrors({});
    setSubmitted(true);
  };

  return (
    <div className={`glass-panel ${styles.formWrap}`}>
      <form onSubmit={handleSubmit} noValidate>
        <div className="row g-3">
          <div className="col-md-6">
            <label className={styles.label} htmlFor="name">
              Name
            </label>
            <input
              id="name"
              name="name"
              className={`form-control ${styles.input}`}
              value={values.name}
              onChange={handleChange}
              placeholder="Your full name"
              required
            />
            {errors.name ? <p className={styles.error}>{errors.name}</p> : null}
          </div>
          <div className="col-md-6">
            <label className={styles.label} htmlFor="email">
              Email
            </label>
            <input
              id="email"
              name="email"
              type="email"
              className={`form-control ${styles.input}`}
              value={values.email}
              onChange={handleChange}
              placeholder="you@company.com"
              required
            />
            {errors.email ? <p className={styles.error}>{errors.email}</p> : null}
          </div>
          <div className="col-12">
            <label className={styles.label} htmlFor="subject">
              Subject
            </label>
            <input
              id="subject"
              name="subject"
              className={`form-control ${styles.input}`}
              value={values.subject}
              onChange={handleChange}
              placeholder="Project inquiry or collaboration"
              required
            />
            {errors.subject ? (
              <p className={styles.error}>{errors.subject}</p>
            ) : null}
          </div>
          <div className="col-12">
            <label className={styles.label} htmlFor="message">
              Message
            </label>
            <textarea
              id="message"
              name="message"
              className={`form-control ${styles.textarea}`}
              rows={5}
              value={values.message}
              onChange={handleChange}
              placeholder="Share a quick brief, timeline, or challenge you want to solve."
              required
            />
            {errors.message ? (
              <p className={styles.error}>{errors.message}</p>
            ) : null}
          </div>
        </div>
        <button type="submit" className={styles.submit}>
          Send Message
        </button>
      </form>
      <div className={styles.terminal} aria-live="polite">
        {submitted
          ? ">> Transmission accepted. Expect a reply within 24 hours."
          : ">> Awaiting secure input..."}
      </div>
    </div>
  );
}
