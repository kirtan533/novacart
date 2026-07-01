"use client";

import { motion } from "framer-motion";
import { FiMapPin, FiPhone, FiMail, FiClock } from "react-icons/fi";
import { useForm } from "react-hook-form";
import toast from "react-hot-toast";

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
    console.log(data);

    toast.success("Message sent successfully!");

    reset();
  }

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

            {/* FORM COMING NEXT */}
          </motion.div>
        </div>
      </section>
    </main>
  );
}
