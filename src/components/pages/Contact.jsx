import { useState } from "react";

function Contact() {
  const [form, setForm] = useState({ name: "", email: "", message: "" });
  const [status, setStatus] = useState(null); // null | "sending" | "sent" | "error"

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!form.name || !form.email || !form.message) {
      setStatus("error");
      return;
    }

    // TODO: replace with a real submission — e.g. an API route, or a
    // service like Formspree/EmailJS. For now this just simulates it.
    setStatus("sending");
    setTimeout(() => {
      console.log("Form submitted:", form);
      setStatus("sent");
      setForm({ name: "", email: "", message: "" });
    }, 800);
  };

  return (
    <section className="bg-black text-white min-h-screen px-6 sm:px-10 pt-32 pb-20">
      <div className="max-w-3xl mx-auto">
        <p className="text-white/50 text-sm sm:text-base uppercase tracking-[0.2em] font-['Oswald'] mb-3">
          Contact
        </p>
        <h1 className="font-['Oswald'] uppercase font-semibold text-3xl sm:text-5xl mb-6">
          Let's Build Something
        </h1>
        <p className="text-white/70 text-base sm:text-lg max-w-lg mb-12">
          Open to opportunities, collaborations, and good conversations about
          AI.
        </p>

        <form onSubmit={handleSubmit} className="space-y-6">
          <div>
            <label
              htmlFor="name"
              className="block text-xs uppercase tracking-[0.2em] text-white/50 font-['Oswald'] mb-2"
            >
              Name
            </label>
            <input
              id="name"
              name="name"
              type="text"
              value={form.name}
              onChange={handleChange}
              className="w-full bg-white/5 border border-white/20 rounded-xl px-4 py-3 text-white placeholder:text-white/30 focus:outline-none focus:border-white/50 transition-colors"
              placeholder="Your name"
            />
          </div>

          <div>
            <label
              htmlFor="email"
              className="block text-xs uppercase tracking-[0.2em] text-white/50 font-['Oswald'] mb-2"
            >
              Email
            </label>
            <input
              id="email"
              name="email"
              type="email"
              value={form.email}
              onChange={handleChange}
              className="w-full bg-white/5 border border-white/20 rounded-xl px-4 py-3 text-white placeholder:text-white/30 focus:outline-none focus:border-white/50 transition-colors"
              placeholder="you@example.com"
            />
          </div>

          <div>
            <label
              htmlFor="message"
              className="block text-xs uppercase tracking-[0.2em] text-white/50 font-['Oswald'] mb-2"
            >
              Message
            </label>
            <textarea
              id="message"
              name="message"
              rows={5}
              value={form.message}
              onChange={handleChange}
              className="w-full bg-white/5 border border-white/20 rounded-xl px-4 py-3 text-white placeholder:text-white/30 focus:outline-none focus:border-white/50 transition-colors resize-none"
              placeholder="What's on your mind?"
            />
          </div>

          <button
            type="submit"
            disabled={status === "sending"}
            className="bg-white text-black font-bold px-6 py-3 rounded-full text-sm sm:text-base hover:bg-white/80 transition-colors disabled:opacity-50"
          >
            {status === "sending" ? "Sending..." : "Send Message"}
          </button>

          {status === "sent" && (
            <p className="text-green-400 text-sm">
              Message ready — connect this form to a backend to actually deliver
              it.
            </p>
          )}
          {status === "error" && (
            <p className="text-red-400 text-sm">
              Please fill in every field before sending.
            </p>
          )}
        </form>
      </div>
    </section>
  );
}

export default Contact;
