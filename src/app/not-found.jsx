"use client";

import { useEffect } from "react";
import { useRouter } from "next/navigation";
import { motion } from "framer-motion";

const NotFound = () => {
  const router = useRouter();
  useEffect(() => {
    const timer = setTimeout(() => {
      router.push("/");
    }, 4800);

    return () => clearTimeout(timer);
  }, [router]);

  return (
    <div className="relative min-h-screen overflow-hidden bg-linear-to-br from-slate-950 via-purple-950 to-slate-900 flex items-center justify-center px-6 py-10">
      <div className="absolute top-0 left-0 w-72 h-72 bg-purple-500/30 blur-3xl rounded-full animate-pulse"></div>

      <div className="absolute bottom-0 right-0 w-80 h-80 bg-emerald-500/20 blur-3xl rounded-full animate-pulse"></div>

      <motion.div
        animate={{
          y: [0, -20, 0],
        }}
        transition={{
          duration: 4,
          repeat: Infinity,
          ease: "easeInOut",
        }}
        className="absolute top-24 left-10 w-24 h-24 rounded-full border border-white/10 bg-white/5 backdrop-blur-xl"
      />

      <motion.div
        animate={{
          y: [0, 20, 0],
        }}
        transition={{
          duration: 5,
          repeat: Infinity,
          ease: "easeInOut",
        }}
        className="absolute bottom-24 right-16 w-16 h-16 rounded-full border border-white/10 bg-white/5 backdrop-blur-xl"
      />

      <motion.div
        initial={{ opacity: 0, scale: 0.9, y: 40 }}
        animate={{ opacity: 1, scale: 1, y: 0 }}
        transition={{ duration: 0.7 }}
        className="relative z-10 w-full max-w-3xl rounded-[40px] border border-white/10 bg-white/5 backdrop-blur-2xl shadow-[0_20px_80px_rgba(0,0,0,0.45)] p-8 md:p-14 text-center"
      >
        <motion.h1
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
          className="text-[110px] md:text-[170px] font-black leading-none bg-linear-to-r from-purple-400 via-pink-400 to-emerald-400 bg-clip-text text-transparent"
        >
          404
        </motion.h1>

        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3 }}
          className="text-3xl md:text-5xl font-bold text-white mt-4"
        >
          Oops! Page Not Found
        </motion.h2>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4 }}
          className="text-gray-300 text-base md:text-lg mt-6 max-w-2xl mx-auto leading-relaxed"
        >
          The page you are looking for might have been removed, renamed, or is
          temporarily unavailable.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5 }}
          className="mt-12"
        >
          <div className="flex flex-wrap justify-center gap-2 text-lg md:text-2xl font-semibold text-white leading-relaxed">
            {["You’re", "being", "redirected", "to", "the", "homepage..."].map(
              (word, index) => (
                <motion.span
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{
                    delay: 0.7 + index * 0.35,
                    duration: 0.4,
                  }}
                  className="bg-linear-to-r from-emerald-300 via-cyan-300 to-purple-300 bg-clip-text text-transparent"
                >
                  {word}
                </motion.span>
              ),
            )}
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.2 }}
          className="mt-12 text-sm text-gray-400"
        >
          Tuition Terminal • Smart Learning Platform
        </motion.div>
      </motion.div>
    </div>
  );
};

export default NotFound;
