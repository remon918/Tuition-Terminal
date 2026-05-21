"use client";

import Image from "next/image";
import Link from "next/link";

const TutorCard =({ tutor }) => {
  return (
    <div className="w-full rounded-2xl border border-gray-200 bg-white p-3 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-lg">
      <div className="relative h-44 w-full overflow-hidden rounded-xl">
        <Image
          src={tutor?.image}
          alt={tutor?.name}
          fill
          className="object-cover transition-transform duration-500 hover:scale-105"
        />
      </div>

      <div className="mt-3">
        <h2 className="line-clamp-1 text-xl font-bold text-black">
          {tutor?.name}
        </h2>

        <p className="mt-0.5 text-sm font-medium text-[#00BBA7]">
          {tutor?.subject}
        </p>

        <div className="mt-3 space-y-1.5 text-sm text-black">
          <p>
            <span className="font-semibold">Available:</span>{" "}
            {tutor?.availableTime}
          </p>
          <p>
            <span className="font-semibold">Season Start Date:</span>{" "}
            {tutor?.seasonStartDate}
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

        <Link className="cursor-pointer" href={`/tutors/${tutor?._id}`}>
          <button className="mt-4 w-full cursor-pointer rounded-lg bg-[#1edccf] py-2.5 text-sm font-semibold text-white transition-all duration-300 hover:bg-[#089187]">
            Book Session
          </button>
        </Link>
      </div>
    </div>
  );
}
export default TutorCard ;