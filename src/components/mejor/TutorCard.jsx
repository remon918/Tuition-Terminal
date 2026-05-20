"use client";

import Image from "next/image";
import Link from "next/link";

export default function TutorCard({ tutor }) {

  return (
    <div className="w-full rounded-2xl border border-gray-200 bg-white p-3 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-lg">
      {/* Image */}
      <div className="relative h-44 w-full overflow-hidden rounded-xl">
        <Image
          src={tutor?.image}
          alt={tutor?.name}
          fill
          className="object-cover transition-transform duration-500 hover:scale-105"
        />
      </div>

      {/* Content */}
      <div className="mt-3">
        {/* Name */}
        <h2 className="line-clamp-1 text-xl font-bold text-black">
          {tutor?.name}
        </h2>

        {/* Subject */}
        <p className="mt-0.5 text-sm font-medium text-[#00BBA7]">
          {tutor?.subject}
        </p>

        {/* Details */}
        <div className="mt-3 space-y-1.5 text-sm text-black">
          <p>
            <span className="font-semibold">Location:</span> {tutor?.location}
          </p>

          <p>
            <span className="font-semibold">Available:</span>{" "}
            {tutor?.availableTime}
          </p>

          <p>
            <span className="font-semibold">Available Slot:</span>{" "}
            {tutor?.availableSlots}
          </p>

          <div className="flex items-center justify-between pt-1">
            <span className="flex gap-1 items-center font-semibold">
              Fees:
              <p className="text-base font-bold text-[#00BBA7]">
                ৳{tutor?.hourlyRate}/hr
              </p>
            </span>

            <div className="rounded-full bg-yellow-100 px-2.5 py-0.5 text-xs font-semibold text-yellow-700">
              ⭐ {tutor?.rating}
            </div>
          </div>
        </div>

        {/* Button */}
        {tutor?.availableSlots === 0 ? (
          <button className="mt-4 w-full rounded-lg  py-2.5 text-sm font-semibold transition-all duration-300 text-gray-300 border italic">
            <Link href={`/tutors/${tutor?._id}`}>No Slot Available</Link>
          </button>
        ) : (
          
            <Link className="cursor-pointer" href={`/tutors/${tutor?._id}`}>
            <button className="mt-4 w-full rounded-lg bg-[#1edccf] py-2.5 text-sm font-semibold text-white transition-all duration-300 hover:bg-[#089187]">
            Book Session
          </button>
            
            </Link>
        )}
      </div>
    </div>
  );
}
