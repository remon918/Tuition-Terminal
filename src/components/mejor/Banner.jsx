"use client";

import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Autoplay } from "swiper/modules";
import { motion } from "framer-motion";

import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import Link from "next/link";

const slides = [
  {
    id: 1,
    image:
      "https://images.unsplash.com/photo-1509062522246-3755977927d7?q=80&w=2070&auto=format&fit=crop",

    Title: "Find Your Tutor",
    titleHighlight: "Shape Future Minds",

    description:
      "Join thousands of educators earning while making a difference. Flexible schedules, competitive pay, and endless opportunities.",

    primaryBtn: "from-blue-500 to-purple-600",

    secondaryBtn: "border-white/50 hover:bg-white/10 text-white",

    stats1Bg: "from-blue-500/30 to-cyan-400/20",

    stats2Bg: "from-purple-500/30 to-pink-500/20",

    badgeColor: "text-blue-300",
  },

  {
    id: 2,
    image:
      "https://images.unsplash.com/photo-1522202176988-66273c2fd55f?q=80&w=2071&auto=format&fit=crop",

    Title: "Become a Tutor",

    titleHighlight: "Teach Anywhere",

    description:
      "Work remotely with students from around the world and grow your professional teaching career online.",

    primaryBtn: "from-emerald-500 to-teal-600",

    secondaryBtn:
      "border-emerald-300/50 hover:bg-emerald-500/10 text-emerald-100",

    stats1Bg: "from-emerald-500/30 to-teal-400/20",

    stats2Bg: "from-lime-500/30 to-green-500/20",

    badgeColor: "text-emerald-300",
  },

  {
    id: 3,
    image:
      "https://images.unsplash.com/photo-1516321318423-f06f85e504b3?q=80&w=2070&auto=format&fit=crop",

    Title: "Become a Tutor",

    titleHighlight: "Inspire Students",

    description:
      "Create impact through personalized education while building a trusted tutoring profile and steady income.",

    primaryBtn: "from-orange-500 to-red-500",

    secondaryBtn: "border-orange-300/50 hover:bg-orange-500/10 text-orange-100",

    stats1Bg: "from-orange-500/30 to-yellow-400/20",

    stats2Bg: "from-red-500/30 to-pink-500/20",

    badgeColor: "text-orange-300",
  },
];

const Banner = () => {
  return (
    <div className="relative z-0 w-full h-175 md:h-162.5 lg:h-180 overflow-visible">
      <Swiper
        modules={[Navigation, Pagination, Autoplay]}
        navigation
        pagination={{ clickable: true }}
        autoplay={{
          delay: 5000,
          disableOnInteraction: false,
        }}
        loop={true}
        className="h-full overflow-visible"
      >
        {slides.map((slide) => (
          <SwiperSlide key={slide.id}>
            <div
              className="relative w-full md:px-13 h-full bg-center bg-cover overflow-visible"
              style={{
                backgroundImage: `url(${slide.image})`,
              }}
            >
              <div className="absolute inset-0 z-0 bg-linear-to-r from-black/80 via-black/60 to-black/70"></div>

              <div className="relative z-10 flex flex-col items-start justify-center h-full text-left px-6 md:px-12 lg:px-20 max-w-4xl">
                <motion.div
                  initial={{ opacity: 0, y: -30 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.7 }}
                  className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-md px-5 py-2 rounded-full border border-white/20 mb-6 text-white"
                >
                  👥 Join Our Team
                </motion.div>

                <motion.h1
                  initial={{ opacity: 0, y: 40 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8 }}
                  className="text-white text-5xl md:text-6xl lg:text-7xl font-bold leading-tight"
                >
                  {slide.Title} &amp;{" "}
                  <span
                    className={`bg-linear-to-r ${slide.primaryBtn} bg-clip-text text-transparent`}
                  >
                    {slide.titleHighlight}
                  </span>
                </motion.h1>

                <motion.p
                  initial={{ opacity: 0, y: 40 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 1 }}
                  className={`text-lg md:text-xl mt-6 max-w-2xl ${slide.badgeColor}`}
                >
                  {slide.description}
                </motion.p>

                <motion.div
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ delay: 0.3 }}
                  className="flex flex-wrap gap-4 mt-8"
                >
                  <div className="flex items-center gap-2 bg-white/10 backdrop-blur-md px-3 md:px-5 md:py-3 rounded-2xl py-2 border border-white/20 text-white md:text-lg text-xs">
                    🚀 Quick Registration
                  </div>

                  <div className="flex items-center gap-2 bg-white/10 backdrop-blur-md px-3 py-2 md:px-5 md:py-3 rounded-2xl border border-white/20 text-white md:text-lg text-xs">
                    🛡️ Trusted Platform
                  </div>
                </motion.div>

                <motion.div
                  initial={{ opacity: 0, y: 30 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.5 }}
                  className="flex flex-wrap gap-4 mt-10"
                >
                  <Link href="/add-tutors">
                    <button
                      className={`bg-linear-to-r ${slide.primaryBtn} hover:scale-105 transition-all duration-300 text-white px-5 py-3 md:px-10 md:py-4 rounded-xl text-md md:text-lg font-semibold flex items-center gap-2 shadow-2xl`}
                    >
                      Apply Now →
                    </button>
                  </Link>

                  <Link href="/tutors">
                    <button
                      className={`border transition-all duration-300 px-5 py-2.5 md:px-10 md:py-4 rounded-xl text-md md:text-lg font-semibold ${slide.secondaryBtn}`}
                    >
                      Browse Tutors
                    </button>
                  </Link>
                </motion.div>
              </div>

              <div className="absolute top-0 right-0 w-full h-full hidden lg:block pointer-events-none z-10">
                <motion.div
                  initial={{ opacity: 0, x: 100 }}
                  animate={{
                    opacity: 1,
                    x: 0,
                    y: [0, -10, 0],
                  }}
                  transition={{
                    duration: 1,
                    y: {
                      duration: 3,
                      repeat: Infinity,
                      ease: "easeInOut",
                    },
                  }}
                  className={`absolute bottom-[30%] right-[32%] lg:right-[9%]
                  bg-linear-to-br ${slide.stats1Bg}
                  backdrop-blur-xl border border-white/20
                  rounded-3xl p-6 text-center shadow-2xl`}
                >
                  <div className="text-4xl font-bold text-white">150K+</div>

                  <div className="text-sm tracking-widest text-gray-200 mt-1">
                    ACTIVE TUTORS
                  </div>
                </motion.div>

                <motion.div
                  initial={{ opacity: 0, x: 100 }}
                  animate={{
                    opacity: 1,
                    x: 0,
                    y: [0, 10, 0],
                  }}
                  transition={{
                    duration: 1.2,
                    y: {
                      duration: 4,
                      repeat: Infinity,
                      ease: "easeInOut",
                    },
                  }}
                  className={`absolute top-[18%] right-[13%]
                  bg-linear-to-br ${slide.stats2Bg}
                  backdrop-blur-xl border border-white/20
                  rounded-3xl p-6 text-center shadow-2xl`}
                >
                  <div className="text-4xl font-bold text-white">50K+</div>

                  <div className="text-sm tracking-widest text-gray-200 mt-1">
                    STUDENTS HELPED
                  </div>
                </motion.div>
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default Banner;
