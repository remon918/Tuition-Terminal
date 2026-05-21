"use client";

import React, { useState } from "react";
import { X } from "lucide-react";
import { authClient, useSession } from "@/lib/auth-client";
import toast from "react-hot-toast";
import { useRouter } from "next/navigation";

const BookingCard = ({ tutor }) => {
  const [open, setOpen] = useState(false);

  const { data: session } = useSession();
  const user = session?.user;

  const router = useRouter();

  const handleBooking = async (e) => {
    e.preventDefault();

    try {
      const formData = new FormData(e.target);

      const bookingData = Object.fromEntries(formData.entries());

      bookingData.tutorId = tutor?._id;
      bookingData.userId = user?.id;
      bookingData.userName = user?.name;
      bookingData.email = user?.email;
      bookingData.tutorName = tutor?.name;
      bookingData.status = "Confirmed";

      const { data: tokenData } = await authClient.token();

      const bookingRes = await fetch(
        `${process.env.NEXT_PUBLIC_API_URL}/booking`,
        {
          method: "POST",
          headers: {
            "content-type": "application/json",
            authorization: `Bearer ${tokenData?.token}`,
          },
          body: JSON.stringify(bookingData),
        },
      );

      const bookingResult = await bookingRes.json();

      if (!bookingRes.ok) {
        throw new Error(bookingResult?.message || "Booking failed");
      }

      const slotRes = await fetch(
        `${process.env.NEXT_PUBLIC_API_URL}/tutors/slot/${tutor?._id}`,
        {
          method: "PATCH",
          headers: {
            authorization: `Bearer ${tokenData?.token}`,
          },
        },
      );

      const slotResult = await slotRes.json();

      if (!slotRes.ok) {
        throw new Error(slotResult?.message || "Slot update failed");
      }

      toast.success("Session booked successfully!");

      setOpen(false);

      router.refresh();
    } catch (error) {
      console.log(error);

      toast.error(error.message || "Booking failed");
    }
  };

  return (
    <>
      <button
        onClick={() => setOpen(true)}
        className="rounded-2xl cursor-pointer bg-teal-500 px-8 py-4 font-semibold text-white"
      >
        Book Session
      </button>

      {open && (
        <div className="fixed inset-0 z-9999 flex items-center justify-center bg-black/40 p-3 backdrop-blur-sm">
          <div className="relative w-full max-w-lg rounded-3xl border border-base-300 bg-base-100 shadow-2xl">
            <button
              onClick={() => setOpen(false)}
              className="absolute right-4 top-4 rounded-full p-2"
            >
              <X size={20} />
            </button>

            <div className="px-6 pt-8 text-center">
              <h1 className="text-2xl font-bold text-white">Book Session 📚</h1>
            </div>

            <form onSubmit={handleBooking} className="mt-6 space-y-5 px-6 pb-6">
              <div>
                <label className="mb-2 block text-sm font-medium text-white">
                  Name
                </label>

                <input
                  type="text"
                  name="userName"
                  value={user?.name || ""}
                  readOnly
                  className="h-12 w-full rounded-2xl border border-base-300 bg-base-100 px-4 text-white"
                />
              </div>

              <div>
                <label className="mb-2 block text-sm font-medium text-white">
                  Phone Number
                </label>

                <input
                  type="text"
                  name="phone"
                  required
                  placeholder="017XX-XXXXXX"
                  className="h-12 w-full rounded-2xl border border-base-300 bg-base-200 px-4 text-white"
                />
              </div>

              <div>
                <label className="mb-2 block text-sm font-medium text-white">
                  Tutor Name
                </label>

                <input
                  type="text"
                  name="tutorName"
                  value={tutor?.name}
                  readOnly
                  className="h-12 w-full rounded-2xl border border-base-300 bg-base-200 px-4 text-white"
                />
              </div>

              <div>
                <label className="mb-2 block text-sm font-medium text-white">
                  Email
                </label>

                <input
                  type="email"
                  name="email"
                  value={user?.email || ""}
                  readOnly
                  className="h-12 w-full rounded-2xl border border-base-300 bg-base-200 px-4 text-white"
                />
              </div>

              <div className="flex flex-col-reverse gap-3 pt-2 sm:flex-row sm:justify-end">
                <button
                  type="button"
                  onClick={() => setOpen(false)}
                  className="rounded-2xl cursor-pointer border border-base-300 bg-base-200 px-5 py-2.5 text-white"
                >
                  Cancel
                </button>

                <button
                  type="submit"
                  className="rounded-2xl bg-primary border cursor-pointer px-5 py-2.5 font-medium text-primary-content"
                >
                  Confirm Booking
                </button>
              </div>
            </form>
          </div>
        </div>
      )}
    </>
  );
};

export default BookingCard;
