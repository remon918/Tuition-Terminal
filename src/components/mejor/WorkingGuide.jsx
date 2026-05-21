"use client";

import { motion } from "framer-motion";

export default function WorkingGuide() {
  return (
    <section className="py-20 px-4">
      <div className="mx-auto max-w-7xl">
        {/* Heading */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.35 }}
          viewport={{ once: false }}
          className="mb-16 text-center"
        >
          <span className="inline-block rounded-full border border-primary/20 bg-primary/10 px-5 py-2 text-sm font-semibold text-primary">
            Easy Learning Journey
          </span>

          <h2 className="mt-5 text-4xl font-extrabold tracking-tight text-base-content md:text-5xl">
            Start Your Learning Journey In 4 Simple Steps
          </h2>

          <p className="mx-auto mt-5 max-w-3xl text-base leading-8 text-base-content/70">
            Tuition Terminal makes it simple for students to connect with
            skilled tutors, schedule personalized sessions, and improve learning
            outcomes from anywhere in Bangladesh.
          </p>
        </motion.div>

        {/* Cards */}
        <div className="grid gap-7 md:grid-cols-2 xl:grid-cols-4">
          {[
            {
              step: "01",
              title: "Discover Expert Tutors",
              desc: "Explore verified tutors by subject, experience, teaching style, ratings, and availability to find the perfect match.",
            },

            {
              step: "02",
              title: "Choose Your Schedule",
              desc: "Pick a comfortable learning time and session plan that fits perfectly into your daily routine.",
            },

            {
              step: "03",
              title: "Confirm Your Booking",
              desc: "Book your tutor instantly through a smooth and secure process with just a few clicks.",
            },

            {
              step: "04",
              title: "Learn & Achieve Goals",
              desc: "Attend engaging sessions, improve your academic skills, and reach your learning goals with confidence.",
            },
          ].map((item, index) => (
            <motion.div
              key={item.step}
              initial={{ opacity: 0, y: 70, scale: 0.9 }}
              whileInView={{ opacity: 1, y: 0, scale: 1 }}
              transition={{
                duration: 0.35,
                delay: index * 0.08,
              }}
              viewport={{ once: false }}
              className="group relative overflow-hidden rounded-[32px] border border-base-300 bg-base-100 p-8 transition-all duration-500 hover:-translate-y-2 hover:border-primary/30 hover:shadow-2xl"
            >
              {/* Gradient Glow */}
              <div className="absolute inset-0 bg-linear-to-br from-primary/5 via-transparent to-secondary/5 opacity-0 transition duration-500 group-hover:opacity-100" />

              {/* Floating Blur */}
              <div className="absolute -right-10 -top-10 h-32 w-32 rounded-full bg-primary/10 blur-3xl transition-all duration-500 group-hover:scale-150" />

              {/* Step Number */}
              <motion.div
                whileHover={{ rotate: 8, scale: 1.08 }}
                transition={{ duration: 0.2 }}
                className="relative z-10 mb-8 flex h-18 w-18 items-center justify-center rounded-3xl bg-primary text-3xl font-extrabold text-primary-content shadow-xl"
              >
                {item.step}
              </motion.div>

              {/* Text */}
              <div className="relative z-10">
                <h3 className="text-2xl font-bold leading-snug text-base-content">
                  {item.title}
                </h3>

                <p className="mt-5 text-[15px] leading-7 text-base-content/70">
                  {item.desc}
                </p>
              </div>

              {/* Bottom Animated Line */}
              <div className="absolute bottom-0 left-0 h-1 w-0 rounded-full bg-primary transition-all duration-500 group-hover:w-full" />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
