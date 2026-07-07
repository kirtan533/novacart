"use client";

import { motion } from "framer-motion";
import { FiMapPin, FiPhone, FiMail, FiClock } from "react-icons/fi";
import { useForm } from "react-hook-form";
import toast from "react-hot-toast";
import { FiChevronDown } from "react-icons/fi";
import { useState } from "react";

export default function ContactPage() {
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors, isValid },
  } = useForm({
    mode: "onChange",
  });

  function onSubmit(data) {
    toast.success("Message sent successfully!");
    reset();
  }

  const [openFAQ, setOpenFAQ] = useState(null);

  const faqs = [
    {
      question: "How long does shipping take?",
      answer: "Orders usually arrive within 2-5 business days.",
    },
    {
      question: "Can I return my order?",
      answer: "Yes, we offer a 30-day return policy.",
    },
    {
      question: "How can I track my order?",
      answer:
        "You can track your order using the tracking number sent to your email.",
    },
    {
      question: "Do you ship internationally?",
      answer: "Yes, we currently ship to more than 40 countries.",
    },
  ];

  return (
    <main className="min-h-screen bg-black text-white pt-32 pb-20 overflow-hidden">
      {/* HERO */}
      <section className="relative">
        {/* Background Glow */}
        <div className="absolute inset-0 -z-10 flex justify-center">
          <div className="w-[500px] h-[500px] rounded-full bg-purple-500/20 blur-[180px]" />
        </div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 text-center">
          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="uppercase tracking-[4px] text-sm text-gray-400 mb-5"
          >
            Contact Us
          </motion.p>

          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="text-5xl md:text-6xl font-bold"
          >
            We'd Love To Hear
            <br />
            From You
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="max-w-2xl mx-auto mt-8 text-gray-400 leading-8"
          >
            Whether you have a question about your order, our products,
            shipping, or simply want to say hello — our team is always ready to
            help.
          </motion.p>
        </div>
      </section>

      {/* NEXT SECTION */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 mt-24">
        <div className="grid lg:grid-cols-5 gap-10">
          {/* LEFT CARD */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="lg:col-span-2 bg-white/5 border border-white/10 rounded-3xl p-8"
          >
            <h2 className="text-3xl font-bold mb-8">Contact Information</h2>

            <div className="space-y-8">
              <div className="flex gap-5">
                <div className="w-14 h-14 rounded-full bg-white/10 flex items-center justify-center">
                  <FiMapPin size={22} />
                </div>

                <div>
                  <h3 className="font-semibold text-lg">Address</h3>

                  <p className="text-gray-400 mt-2">
                    123 Market Street,
                    <br />
                    New York, USA
                  </p>
                </div>
              </div>

              <div className="flex gap-5">
                <div className="w-14 h-14 rounded-full bg-white/10 flex items-center justify-center">
                  <FiPhone size={22} />
                </div>

                <div>
                  <h3 className="font-semibold text-lg">Phone</h3>

                  <p className="text-gray-400 mt-2">+1 (555) 123-4567</p>
                </div>
              </div>

              <div className="flex gap-5">
                <div className="w-14 h-14 rounded-full bg-white/10 flex items-center justify-center">
                  <FiMail size={22} />
                </div>

                <div>
                  <h3 className="font-semibold text-lg">Email</h3>

                  <p className="text-gray-400 mt-2">support@luxestore.com</p>
                </div>
              </div>

              <div className="flex gap-5">
                <div className="w-14 h-14 rounded-full bg-white/10 flex items-center justify-center">
                  <FiClock size={22} />
                </div>

                <div>
                  <h3 className="font-semibold text-lg">Working Hours</h3>

                  <p className="text-gray-400 mt-2">
                    Monday - Friday
                    <br />
                    9:00 AM - 6:00 PM
                  </p>
                </div>
              </div>
            </div>
          </motion.div>
          {/* RIGHT SIDE */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="lg:col-span-3 bg-white/5 border border-white/10 rounded-3xl p-8"
          >
            <h2 className="text-3xl font-bold mb-8">Send Us A Message</h2>

            <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
              {/* NAME */}

              <div>
                <input
                  type="text"
                  placeholder="Full Name"
                  {...register("name", {
                    required: "Full name is required",
                    minLength: {
                      value: 3,
                      message: "Minimum 3 characters",
                    },
                  })}
                  className="w-full bg-black/40 border border-white/10 rounded-2xl px-5 py-4 outline-none focus:border-white/30 transition"
                />

                {errors.name && (
                  <p className="text-red-400 text-sm mt-2">
                    {errors.name.message}
                  </p>
                )}
              </div>

              {/* EMAIL */}

              <div>
                <input
                  type="email"
                  placeholder="Email Address"
                  {...register("email", {
                    required: "Email is required",
                    pattern: {
                      value: /^[^\s@]+@[^\s@]+\.[^\s@]+$/,
                      message: "Enter a valid email",
                    },
                  })}
                  className="w-full bg-black/40 border border-white/10 rounded-2xl px-5 py-4 outline-none focus:border-white/30 transition"
                />

                {errors.email && (
                  <p className="text-red-400 text-sm mt-2">
                    {errors.email.message}
                  </p>
                )}
              </div>

              {/* SUBJECT */}

              <div>
                <input
                  type="text"
                  placeholder="Subject"
                  {...register("subject", {
                    required: "Subject is required",
                    minLength: {
                      value: 5,
                      message: "Minimum 5 characters",
                    },
                  })}
                  className="w-full bg-black/40 border border-white/10 rounded-2xl px-5 py-4 outline-none focus:border-white/30 transition"
                />

                {errors.subject && (
                  <p className="text-red-400 text-sm mt-2">
                    {errors.subject.message}
                  </p>
                )}
              </div>

              {/* MESSAGE */}

              <div>
                <textarea
                  rows={6}
                  placeholder="Write your message..."
                  {...register("message", {
                    required: "Message is required",
                    minLength: {
                      value: 15,
                      message: "Minimum 15 characters",
                    },
                  })}
                  className="w-full bg-black/40 border border-white/10 rounded-2xl px-5 py-4 outline-none resize-none focus:border-white/30 transition"
                />

                {errors.message && (
                  <p className="text-red-400 text-sm mt-2">
                    {errors.message.message}
                  </p>
                )}
              </div>

              {/* BUTTON */}

              <button
                type="submit"
                disabled={!isValid}
                className={`w-full py-5 rounded-full font-semibold transition ${
                  isValid
                    ? "bg-white text-black hover:opacity-90"
                    : "bg-gray-700 text-gray-400 cursor-not-allowed"
                }`}
              >
                Send Message
              </button>
            </form>
          </motion.div>
        </div>
      </section>
      {/* GOOGLE MAP */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 mt-24">
        <div className="mb-10 text-center">
          <p className="uppercase tracking-[4px] text-sm text-gray-400 mb-4">
            Find Us
          </p>

          <h2 className="text-4xl font-bold">Visit Our Store</h2>

          <p className="text-gray-400 mt-4">We'd love to meet you in person.</p>
        </div>

        <div className="overflow-hidden rounded-[32px] border border-white/10 bg-white/5 p-2">
          <iframe
            src="https://www.google.com/maps?q=New+York&output=embed"
            width="100%"
            height="500"
            loading="lazy"
            className="rounded-[24px]"
          />
        </div>
      </section>
      <section className="max-w-5xl mx-auto px-4 sm:px-6 mt-24">
        <div className="text-center mb-12">
          <p className="uppercase tracking-[4px] text-sm text-gray-400 mb-4">
            FAQ
          </p>

          <h2 className="text-4xl font-bold">Frequently Asked Questions</h2>
        </div>

        <div className="space-y-5">
          {faqs.map((faq, index) => (
            <div
              key={index}
              className="border border-white/10 rounded-3xl bg-white/5 overflow-hidden"
            >
              <button
                onClick={() => setOpenFAQ(openFAQ === index ? null : index)}
                className="w-full flex items-center justify-between px-8 py-6 text-left"
              >
                <span className="font-semibold text-lg">{faq.question}</span>

                <FiChevronDown
                  className={`transition ${
                    openFAQ === index ? "rotate-180" : ""
                  }`}
                />
              </button>

              {openFAQ === index && (
                <div className="px-8 pb-6 text-gray-400 leading-8">
                  {faq.answer}
                </div>
              )}
            </div>
          ))}
        </div>
        <section className="max-w-7xl mx-auto px-4 sm:px-6 mt-28">
          <div className="relative overflow-hidden rounded-[40px] border border-white/10 bg-white/5 py-20 px-8 text-center">
            <div className="absolute inset-0 -z-10 flex justify-center">
              <div className="w-[450px] h-[450px] rounded-full bg-purple-500/20 blur-[180px]" />
            </div>

            <h2 className="text-4xl md:text-5xl font-bold">
              Need Immediate Help?
            </h2>

            <p className="text-gray-400 max-w-2xl mx-auto mt-6 leading-8">
              Our support team is always available to answer your questions and
              help you with your shopping experience.
            </p>

            <button className="mt-10 px-10 py-5 rounded-full bg-white text-black font-semibold hover:opacity-90 transition">
              Contact Support
            </button>
          </div>
        </section>
      </section>
    </main>
  );
}
