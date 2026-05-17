"use client";

import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Autoplay } from "swiper/modules";

import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

const slides = [
  {
    id: 1,
    image:
      "https://images.unsplash.com/photo-1509062522246-3755977927d7?q=80&w=2070&auto=format&fit=crop",
    title: "Efficient Scheduling for Better Learning",
    description:
      "Manage appointments, track availability, and ensure smooth communication.",
    button: "Explore Features",
  },

  {
    id: 2,
    image:
      "https://images.unsplash.com/photo-1522202176988-66273c2fd55f?q=80&w=2071&auto=format&fit=crop",
    title: "Smart Online Education Platform",
    description:
      "Connect students and tutors with a modern scheduling experience.",
    button: "Get Started",
  },

  {
    id: 3,
    image:
      "https://images.unsplash.com/photo-1516321318423-f06f85e504b3?q=80&w=2070&auto=format&fit=crop",
    title: "Learn Anytime Anywhere",
    description:
      "Flexible learning system with powerful management tools.",
    button: "Learn More",
  },
];

export default function Banner() {
  return (
    <div className="w-full h-175">
      <Swiper
        modules={[Navigation, Pagination, Autoplay]}
        navigation
        pagination={{ clickable: true }}
        autoplay={{
          delay: 4000,
          disableOnInteraction: false,
        }}
        loop={true}
        className="h-full"
      >
        {slides.map((slide) => (
          <SwiperSlide key={slide.id}>
            <div
              className="relative w-full h-175 bg-center bg-cover"
              style={{
                backgroundImage: `url(${slide.image})`,
              }}
            >
              {/* Dark Overlay */}
              <div className="absolute inset-0 bg-black/55"></div>

              {/* Content */}
              <div className="relative z-10 flex flex-col items-center justify-center h-full text-center px-4">
                <h1 className="text-white text-4xl md:text-6xl font-bold max-w-5xl leading-tight">
                  {slide.title}
                </h1>

                <p className="text-gray-200 text-lg md:text-xl max-w-3xl mt-6">
                  {slide.description}
                </p>

                <button className="mt-8 bg-cyan-500 hover:bg-cyan-600 transition-all duration-300 text-white px-8 py-4 rounded-lg text-lg font-semibold">
                  {slide.button}
                </button>
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
}