"use client";

import { useRouter, useSearchParams } from "next/navigation";

import { useEffect, useState } from "react";

const TutorsFilter = () => {
  const router = useRouter();

  const searchParams = useSearchParams();

  const [search, setSearch] = useState(searchParams.get("search") || "");

  const [startDate, setStartDate] = useState(
    searchParams.get("startDate") || "",
  );

  const [endDate, setEndDate] = useState(searchParams.get("endDate") || "");

  useEffect(() => {
    const timeout = setTimeout(() => {
      const params = new URLSearchParams();

      if (search) {
        params.set("search", search);
      }

      if (startDate) {
        params.set("startDate", startDate);
      }

      if (endDate) {
        params.set("endDate", endDate);
      }

      router.push(`/tutors?${params.toString()}`);
    }, 500);

    return () => clearTimeout(timeout);
  }, [search, startDate, endDate, router]);

  const handleReset = () => {
    setSearch("");
    setStartDate("");
    setEndDate("");

    router.push("/tutors");
  };

  return (
    <div className="w-[97%] mx-auto lg:w-[85%] md:w-[89%] mb-6 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
      <div className="flex flex-col gap-2">
        <label className="text-sm font-semibold text-base-content/80">
          Search Tutor
        </label>

        <input
          type="text"
          placeholder="Search by tutor name..."
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          className="border border-base-300 focus:border-primary outline-none rounded-xl px-4 py-3 w-full"
        />
      </div>

      <div className="flex flex-col gap-2">
        <label className="text-sm font-semibold text-base-content/80">
          Start Date
        </label>

        <input
          type="date"
          value={startDate}
          onChange={(e) => setStartDate(e.target.value)}
          className="border border-base-300 focus:border-primary outline-none rounded-xl px-4 py-3 w-full"
        />
      </div>

      <div className="flex flex-col gap-2">
        <label className="text-sm font-semibold text-base-content/80">
          End Date
        </label>

        <input
          type="date"
          value={endDate}
          onChange={(e) => setEndDate(e.target.value)}
          className="border border-base-300 focus:border-primary outline-none rounded-xl px-4 py-3 w-full"
        />
      </div>

      <div className="flex items-center">
        <button
          onClick={handleReset}
          className="btn btn-outline cursor-pointer underline w-full rounded-xl"
        >
          Reset
        </button>
      </div>
    </div>
  );
};

export default TutorsFilter;
