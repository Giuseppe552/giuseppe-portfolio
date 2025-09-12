"use client";
import { useEffect, useState } from "react";

export default function LeadCaptureModal() {
  const [open, setOpen] = useState(false);
  const [submitting, setSubmitting] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [ok, setOk] = useState(false);

  useEffect(() => {
    // show only on blog pages and if not dismissed
    const onBlog = window.location.pathname.startsWith("/blog");
    const dismissed = localStorage.getItem("lead_modal_dismissed") === "1";
    if (onBlog && !dismissed) setOpen(true);
  }, []);

  async function onSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setSubmitting(true); setError(null);
    const fd = new FormData(e.currentTarget);
    const payload = {
      name: String(fd.get("name") || "").trim(),
      email: String(fd.get("email") || "").trim(),
      phone: String(fd.get("phone") || "").trim(),
      consent: fd.get("consent") === "on",
      // reCAPTCHA v3 token optional: add here if you enable it
    };
    try {
      const res = await fetch("/api/subscribe", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(payload),
      });
      if (!res.ok) throw new Error(await res.text());
      setOk(true);
      localStorage.setItem("lead_modal_dismissed", "1");
    } catch (err: unknown) {
      setError(err instanceof Error ? err.message : "Something went wrong");
    } finally {
      setSubmitting(false);
    }
  }

  function close() {
    setOpen(false);
    localStorage.setItem("lead_modal_dismissed", "1");
  }

  if (!open) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/50 p-4">
      <div className="w-full max-w-md rounded-2xl bg-white p-6 shadow-xl">
        <div className="flex items-start justify-between">
          <h2 className="text-xl font-semibold">Join the insiders list</h2>
          <button onClick={close} className="rounded p-2 hover:bg-gray-100" aria-label="Close">✕</button>
        </div>

        {ok ? (
          <p className="mt-4 text-sm">Thanks! Check your email for a confirmation.</p>
        ) : (
          <form onSubmit={onSubmit} className="mt-4 space-y-3">
            <input name="name" placeholder="Your name" className="w-full rounded-lg border p-2" required />
            <input name="email" type="email" placeholder="you@example.com" className="w-full rounded-lg border p-2" required />
            <input name="phone" inputMode="tel" placeholder="+44 ..." className="w-full rounded-lg border p-2" />
            <label className="flex items-center gap-2 text-sm">
              <input type="checkbox" name="consent" required />
              I agree to receive emails and accept the privacy policy.
            </label>
            <button disabled={submitting} className="w-full rounded-xl bg-black p-2 text-white disabled:opacity-50">
              {submitting ? "Submitting..." : "Subscribe"}
            </button>
            {error && <p className="text-sm text-red-600">{error}</p>}
            <button type="button" onClick={close} className="w-full text-xs text-gray-500 underline">
              No thanks
            </button>
          </form>
        )}
      </div>
    </div>
  );
}
