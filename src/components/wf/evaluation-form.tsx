import { useState, type FormEvent } from "react";
import { cn } from "@/lib/utils";

export const DELIVERABLES = [
  "An evidence based eligibility assessment",
  "A review of your publicly available profile",
  "Honest professional recommendations",
  "Clear next steps based on your circumstances",
  "Answers to your questions without sales pressure",
];

const FIELDS: Array<{
  name: string;
  label: string;
  type?: string;
  wide?: boolean;
}> = [
  { name: "fullName", label: "Full Name" },
  { name: "title", label: "Professional Title" },
  { name: "organisation", label: "Organisation" },
  { name: "country", label: "Country" },
  { name: "email", label: "Email Address", type: "email" },
  { name: "phone", label: "Phone Number", type: "tel" },
  {
    name: "website",
    label: "Website or Professional Profile",
    wide: true,
  },
];

export function EvaluationForm() {
  const [submitted, setSubmitted] = useState(false);
  const [submitting, setSubmitting] = useState(false);
  const [error, setError] = useState("");

  async function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();

    setSubmitting(true);
    setError("");

    const form = e.currentTarget;
    const formData = new FormData(form);

    try {
      const response = await fetch("https://formspree.io/f/xppaklyw", {
        method: "POST",
        body: formData,
        headers: {
          Accept: "application/json",
        },
      });

      if (!response.ok) {
        throw new Error("Form submission failed");
      }

      setSubmitted(true);
      form.reset();
    } catch (err) {
      console.error(err);
      setError(
        "Something went wrong while sending your request. Please try again."
      );
    } finally {
      setSubmitting(false);
    }
  }

  if (submitted) {
    return (
      <div className="border-l-2 border-accent pl-6">
        <div className="font-display text-2xl">
          Thank you for contacting WikiFortress.
        </div>

        <div className="mt-4 space-y-3 text-[0.9375rem] leading-[1.85] text-foreground/75">
          <p>
            We've received your information and a member of our advisory team
            will review your enquiry.
          </p>

          <p>
            If we believe we can provide meaningful guidance, we'll contact you
            with the most appropriate next step.
          </p>

          <p>We appreciate the opportunity to learn about your work.</p>
        </div>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="grid gap-6 sm:grid-cols-2">
      {FIELDS.map((f) => (
        <div key={f.name} className={cn(f.wide && "sm:col-span-2")}>
          <label htmlFor={f.name} className="eyebrow">
            {f.label}
          </label>

          <input
            id={f.name}
            name={f.name}
            type={f.type ?? "text"}
            required={f.name === "fullName" || f.name === "email"}
            className="mt-2 w-full border-b border-border bg-transparent py-2 text-[0.9375rem] font-light outline-none focus:border-accent"
          />
        </div>
      ))}

      <div className="sm:col-span-2">
        <label htmlFor="career" className="eyebrow">
          Tell Us About Your Career
        </label>

        <textarea
          id="career"
          name="career"
          rows={4}
          className="mt-2 w-full resize-none border-b border-border bg-transparent py-2 text-[0.9375rem] font-light outline-none focus:border-accent"
        />
      </div>

      <div className="sm:col-span-2">
        <label htmlFor="discuss" className="eyebrow">
          What Would You Like To Discuss?
        </label>

        <textarea
          id="discuss"
          name="discuss"
          rows={3}
          className="mt-2 w-full resize-none border-b border-border bg-transparent py-2 text-[0.9375rem] font-light outline-none focus:border-accent"
        />
      </div>

      {error && (
        <div className="sm:col-span-2">
          <p className="text-sm text-red-600">{error}</p>
        </div>
      )}

      <button
        type="submit"
        disabled={submitting}
        className="mt-4 bg-accent px-8 py-4 text-[0.75rem] tracking-[0.16em] uppercase text-accent-foreground transition-colors hover:bg-ochre disabled:cursor-not-allowed disabled:opacity-60 sm:col-span-2"
      >
        {submitting ? "Sending..." : "Request My Evaluation"}
      </button>
    </form>
  );
}