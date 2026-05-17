"use client";

import Image from "next/image";

export default function TutorCard() {
  return (
    <div className="flex items-center justify-center min-h-screen p-6">
      <div className="w-full max-w-sm rounded-[30px] border border-gray-200 bg-white shadow-md p-5">
        
        {/* Image */}
        <div className="relative w-full h-60 rounded-[22px] overflow-hidden">
          <Image
            src="https://images.unsplash.com/photo-1560250097-0b93528c311a?q=80&w=1974&auto=format&fit=crop"
            alt="Tutor"
            fill
            className="object-cover"
          />
        </div>

        {/* Content */}
        <div className="mt-6">
          <h2 className="text-[36px] font-bold text-black leading-none">
            Rahim Ahmed
          </h2>

          <p className="text-[#7B7B9D] text-[20px] mt-2">
            Mathematics
          </p>

          <div className="mt-6 space-y-3 text-black">
            <p className="text-[18px]">
              <span className="font-medium">Available:</span>{" "}
              Sun - Thu 5:00 PM - 8:00 PM
            </p>

            <p className="text-[18px]">
              <span className="font-medium">Session Start Date:</span>{" "}
              Monday, June 1, 2026
            </p>

            <p className="text-[18px]">
              <span className="font-medium">Fee:</span> ৳500/hr
            </p>
          </div>

          {/* Button */}
          <button className="w-full mt-8 bg-[#1edccf] hover:bg-[#089187] transition-all duration-300 text-white text-[28px] font-semibold py-4 rounded-2xl">
            Book Session
          </button>
        </div>
      </div>
    </div>
  );
}