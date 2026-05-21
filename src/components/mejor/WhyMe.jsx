"use client";

import { motion } from "framer-motion";
import { GraduationCap, Users, ShieldCheck, Clock3 } from "lucide-react";

const features = [
  {
    id: 1,
    icon: GraduationCap,
    title: "Expert Tutors",
    description:
      "Learn from skilled and verified tutors who provide personalized guidance for every student.",
  },

  {
    id: 2,
    icon: Users,
    title: "Smart Student Matching",
    description:
      "Students can easily discover tutors based on subject, schedule, learning goals, and experience.",
  },

  {
    id: 3,
    icon: Clock3,
    title: "Flexible Learning",
    description:
      "Book sessions anytime with flexible schedules designed for both tutors and learners.",
  },

  {
    id: 4,
    icon: ShieldCheck,
    title: "Trusted Platform",
    description:
      "Secure bookings, smooth communication, and reliable session management in one platform.",
  },
];

const WhyChoose = () => {
  return (
    <section className="relative overflow-hidden py-24">
      <div className="absolute top-0 left-0 h-72 w-72 rounded-full bg-primary/10 blur-3xl" />

      <div className="absolute bottom-0 right-0 h-80 w-80 rounded-full bg-secondary/10 blur-3xl" />

      <div className="relative w-[92%] mx-auto lg:w-[85%] md:w-[90%]">
        <motion.div
          initial={{ opacity: 0, y: 60 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: false }}
          transition={{ duration: 0.4 }}
          className="mx-auto mb-16 max-w-3xl text-center"
        >
          <div className="mb-4 inline-flex items-center rounded-full border border-base-300 bg-base-200 px-5 py-2 text-sm font-medium text-primary">
            ✨ Why Students & Tutors Loves TuitionTerminal
          </div>

          <h2 className="text-4xl font-bold text-base-content md:text-5xl">
            A Smarter Way To Connect,
            <span className="text-primary"> Learn & Teach</span>
          </h2>

          <p className="mt-5 text-lg leading-relaxed text-base-content/70">
            TuitionTerminal helps students find the right tutor while giving
            teachers the perfect platform to grow, manage sessions, and teach
            confidently.
          </p>
        </motion.div>

        <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-4">
          {features.map((feature, index) => {
            const Icon = feature.icon;

            return (
              <motion.div
                key={feature.id}
                initial={{ opacity: 0, y: 70, scale: 0.9 }}
                whileInView={{ opacity: 1, y: 0, scale: 1 }}
                viewport={{ once: false }}
                transition={{
                  duration: 0.35,
                  delay: index * 0.08,
                }}
                whileHover={{
                  y: -8,
                  transition: { duration: 0.2 },
                }}
                className="group relative overflow-hidden rounded-[32px] border border-base-300 bg-base-100 p-8 shadow-xl transition-all duration-300 hover:border-primary/30"
              >
                <div className="absolute -right-10 -top-10 h-32 w-32 rounded-full bg-primary/10 blur-3xl transition-all duration-300 group-hover:bg-primary/20" />

                <div className="relative z-10 mb-6 flex h-16 w-16 items-center justify-center rounded-2xl bg-primary/10 text-primary">
                  <Icon size={30} />
                </div>

                <div className="relative z-10">
                  <h3 className="text-2xl font-bold text-base-content">
                    {feature.title}
                  </h3>

                  <p className="mt-4 leading-relaxed text-base-content/70">
                    {feature.description}
                  </p>
                </div>

                <div className="absolute bottom-0 left-0 h-1 w-0 bg-primary transition-all duration-300 group-hover:w-full" />
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default WhyChoose;
