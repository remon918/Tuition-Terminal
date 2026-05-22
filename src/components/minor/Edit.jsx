"use client";

import React, { useState } from "react";
import { Pencil, X } from "lucide-react";
import toast from "react-hot-toast";
import { useRouter } from "next/navigation";
import { authClient } from "@/lib/auth-client";

const Edit = ({ tutor }) => {
  // console.log(tutor)

  const router = useRouter();

  const {
    _id,
    tutorName,
    image,
    subject,
    availableTime,
    hourlyRate,
    availableSlots,
    sessionStartDate,
    institution,
    experience,
    location,
    mode,
    registrationDate,
  } = tutor;
  const onSubmit = async (e) => {
    e.preventDefault();
    const formData = new FormData(e.currentTarget);
    const tutor = Object.fromEntries(formData.entries());
    tutor.hourlyRate = Number(tutor.hourlyRate);

    tutor.availableSlots = Number(tutor.availableSlots);
    console.log(tutor);

    const { data: tokenData } = await authClient.token();
    console.log(tokenData);

    const submitPromise = fetch(
      `${process.env.NEXT_PUBLIC_API_URL}/addedtutors/${_id}`,
      {
        method: "PATCH",
        headers: {
          "content-type": "application/json",
          authorization: `Bearer ${tokenData?.token}`,
        },
        body: JSON.stringify(tutor),
      },
    );

    toast.promise(submitPromise, {
      loading: "changes saving...",
      success: "saved changes",
      error: "changes not saved",
    });

    const res = await submitPromise;
    if (!res.ok) return;
    const data = await res.json();

    console.log(data);

    setOpen(false);

    router.refresh();
  };

  const [open, setOpen] = useState(false);

  return (
    <>
      <button
        onClick={() => setOpen(true)}
        className="text-green-500 transition hover:scale-110 cursor-pointer"
      >
        <Pencil size={18} />
      </button>

      {open && (
        <div className="fixed inset-0 z-9999 flex items-center justify-center bg-black/40 p-3 backdrop-blur-sm">
          <div className="relative max-h-[95vh] w-full max-w-2xl overflow-y-auto rounded-2xl border border-base-300 bg-base-100 p-4 shadow-2xl sm:p-5 md:p-6">
            <button
              onClick={() => setOpen(false)}
              className="absolute right-3 top-3 rounded-full p-2 text-base-content/70 transition hover:bg-base-200 hover:text-red-500"
            >
              <X size={18} />
            </button>

            <div className="mb-5 text-center">
              <h1 className="text-xl font-bold text-base-content sm:text-2xl">
                Edit Tutor ✏️
              </h1>

              <p className="mt-1 text-xs text-base-content/70 sm:text-sm">
                Update tutor information easily.
              </p>
            </div>

            <form
              onSubmit={onSubmit}
              className="grid grid-cols-1 gap-4 md:grid-cols-2"
            >
              <div>
                <label className="mb-1.5 block text-sm text-base-content">
                  Tutor Name
                </label>

                <input
                  name="tutorName"
                  type="text"
                  defaultValue={tutorName}
                  className="h-11 w-full rounded-xl border border-base-300 bg-base-200 px-4 text-sm text-base-content outline-none transition focus:border-primary"
                />
              </div>

              <div>
                <label className="mb-1.5 block text-sm text-base-content">
                  Subject
                </label>

                <select
                  name="subject"
                  defaultValue={subject}
                  className="h-11 w-full rounded-xl border border-base-300 bg-base-200 px-4 text-sm text-base-content outline-none transition focus:border-primary"
                >
                  <option>Mathematics</option>
                  <option>Physics</option>
                  <option>Chemistry</option>
                </select>
              </div>

              <div>
                <label className="mb-1.5 block text-sm text-base-content">
                  Available Time
                </label>

                <input
                  type="text"
                  name="availableTime"
                  defaultValue={availableTime}
                  className="h-11 w-full rounded-xl border border-base-300 bg-base-200 px-4 text-sm text-base-content outline-none transition focus:border-primary"
                />
              </div>

              <div>
                <label className="mb-1.5 block text-sm text-base-content">
                  Hourly Fee
                </label>

                <input
                  type="number"
                  name="hourlyRate"
                  defaultValue={hourlyRate}
                  className="h-11 w-full rounded-xl border border-base-300 bg-base-200 px-4 text-sm text-base-content outline-none transition focus:border-primary"
                />
              </div>

              <div>
                <label className="mb-1.5 block text-sm text-base-content">
                  Total Slot
                </label>

                <input
                  type="number"
                  name="availableSlots"
                  defaultValue={availableSlots}
                  className="h-11 w-full rounded-xl border border-base-300 bg-base-200 px-4 text-sm text-base-content outline-none transition focus:border-primary"
                />
              </div>

              <div>
                <label className="mb-1.5 block text-sm text-base-content">
                  Teaching Mode
                </label>

                <select
                  defaultValue={mode}
                  name="mode"
                  className="h-11 w-full rounded-xl border border-base-300 bg-base-200 px-4 text-sm text-base-content outline-none transition focus:border-primary"
                >
                  <option>Online</option>
                  <option>Offline</option>
                  <option>Both</option>
                </select>
              </div>

              <div className="md:col-span-2">
                <label className="mb-1.5 block text-sm text-base-content">
                  Experience
                </label>

                <textarea
                  name="experience"
                  defaultValue={experience}
                  className="min-h-24 w-full rounded-xl border border-base-300 bg-base-200 px-4 py-3 text-sm text-base-content outline-none transition focus:border-primary"
                />
              </div>

              <div className="mt-2 flex flex-col-reverse gap-3 sm:flex-row sm:justify-end md:col-span-2">
                <button
                  type="button"
                  onClick={() => setOpen(false)}
                  className="w-full rounded-xl border border-base-300 bg-base-200 px-5 py-2.5 text-sm text-red-500 cursor-pointer transition hover:bg-base-300 sm:w-auto"
                >
                  Cancel
                </button>

                <button
                  type="submit"
                  className="w-full border rounded-xl bg-primary px-5 py-2.5 text-sm font-medium text-primary-content transition hover:opacity-90 cursor-pointer sm:w-auto"
                >
                  Save Changes
                </button>
              </div>
            </form>
          </div>
        </div>
      )}
    </>
  );
};

export default Edit;
