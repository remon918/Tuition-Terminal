import React from "react";

const loading = () => {
  return (
    <div className="flex min-h-screen items-center justify-center bg-[#06152b] px-4">
      <div className="rounded-3xl border border-white/10 bg-[#102f56] p-10 shadow-2xl">
        <div className="flex flex-col items-center">
          <div className="relative h-20 w-20">
            <div className="absolute inset-0 rounded-full border-4 border-white/20"></div>

            <div className="absolute inset-0 animate-spin rounded-full border-4 border-transparent border-t-[#1edccf] border-r-[#1edccf]"></div>
          </div>

          <h2 className="mt-6 text-2xl font-bold text-white">
            Tutors Terminal...
          </h2>

          <p className="mt-2 text-sm text-gray-300">
            Please wait while we prepare your experience.
          </p>
        </div>
      </div>
    </div>
  );
};

export default loading;