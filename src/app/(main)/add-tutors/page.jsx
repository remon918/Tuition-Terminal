"use client";

import { authClient } from "@/lib/auth-client";
import { redirect } from "next/navigation";
import toast from "react-hot-toast";
import { FaExternalLinkSquareAlt } from "react-icons/fa";

const subjects = ["Mathematics", "Physics", "Chemistry", "Biology", "English"];

const teachingModes = ["Online", "Offline", "Both"];

export default function AddTutorPage() {
  const onSubmit = async (e) => {
    e.preventDefault();

    const formData = new FormData(e.currentTarget);
    const tutorData = Object.fromEntries(formData.entries());

    tutorData.registrationDate = new Date().toLocaleDateString("en-BD", {
      weekday: "long",
      day: "numeric",
      month: "long",
      year: "numeric",
    });

    const {data:tokenData} = await authClient.token()
        console.log(tokenData);

    const submitPromise = fetch(
      `${process.env.NEXT_PUBLIC_API_URL}/addedtutors`,
      {
        method: "POST",
        headers: {
          "content-type": "application/json",
           authorization :`Bearer ${tokenData?.token}`
        },
        body: JSON.stringify(tutorData),
      }
    );

    toast.promise(submitPromise, {
      loading: "Submitting Application...",
      success: "Application Submitted",
      error: "Application is not Submitted",
    });

    const res = await submitPromise;
    const data = await res.json();

    console.log(data);

    e.target.reset();
    redirect('/my-tutors')
  };

  return (
    <div className="min-h-screen px-4 py-6">
      {/* Heading */}
      <div className="mx-auto mb-8 max-w-4xl text-center">
        <h1 className="text-4xl font-bold text-base-content">
          Become a Tutor 👨‍🏫
        </h1>

        <p className="mt-2 text-base-content/70">
          Create your tutor profile for students.
        </p>
      </div>

      {/* Form Card */}
      <div className="mx-auto max-w-4xl rounded-2xl border border-base-300 bg-base-100 p-8 shadow-sm">
        <form onSubmit={onSubmit} className="space-y-5">
          {/* Tutor Name */}
          <div>
            <label className="mb-2 block text-sm text-base-content">
              Tutor Name
            </label>

            <input
              name="tutorName"
              type="text"
              placeholder="Rahim Ahmed"
              className="h-11 w-full rounded-md border border-base-300 bg-base-100 px-3 text-sm text-blue-500 outline-none transition focus:border-primary"
            />
          </div>

          {/* Photo URL */}
          <div>
            <label className="mb-2 block text-sm text-base-content">
              Photo URL
            </label>

            <input
              type="text"
              name="image"
              placeholder="imgbb / postimage link"
              className="h-11 w-full rounded-md border border-base-300 bg-base-100 px-3 text-sm text-blue-500 outline-none transition focus:border-primary"
            />
          </div>

          {/* Subject */}
          <div>
            <label className="mb-2 block text-sm text-base-content">
              Subject / Category
            </label>

            <select
              name="subject"
              className="h-11 w-full rounded-md border border-base-300 bg-base-100 px-3 text-sm text-base-content outline-none transition focus:border-primary"
            >
              <option>Select Subject</option>

              {subjects.map((subject) => (
                <option key={subject}>{subject}</option>
              ))}
            </select>
          </div>

          {/* Available Time */}
          <div>
            <label className="mb-2 block text-sm text-base-content">
              Available Days and Time
            </label>

            <input
              type="text"
              name="availableTime"
              placeholder="Sun - Thu 5:00 PM - 8:00 PM"
              className="h-11 w-full rounded-md border border-base-300 bg-base-100 px-3 text-sm text-blue-500 outline-none transition focus:border-primary"
            />
          </div>

          {/* Hourly Fee */}
          <div>
            <label className="mb-2 block text-sm text-base-content">
              Hourly Fee
            </label>

            <input
              type="number"
              name="hourlyRate"
              placeholder="500"
              className="h-11 w-full rounded-md border border-base-300 bg-base-100 px-3 text-sm text-blue-500 outline-none transition focus:border-primary"
            />
          </div>

          {/* Total Slot */}
          <div>
            <label className="mb-2 block text-sm text-base-content">
              Total Slot
            </label>

            <input
              type="number"
              name="availableSlots"
              placeholder="10"
              className="h-11 w-full rounded-md border border-base-300 bg-base-100 px-3 text-sm text-blue-500 outline-none transition focus:border-primary"
            />
          </div>

          {/* Session Date */}
          <div>
            <label className="mb-2 block text-sm text-base-content">
              Session Start Date
            </label>

            <input
              type="date"
              name="sessionStartDate"
              className="h-11 w-full rounded-md border border-base-300 bg-base-100 px-3 text-sm text-base-content outline-none transition focus:border-primary"
            />
          </div>

          {/* Institution */}
          <div>
            <label className="mb-2 block text-sm text-base-content">
              Institution
            </label>

            <input
              type="text"
              name="institution"
              placeholder="Dhaka University"
              className="h-11 w-full rounded-md border border-base-300 bg-base-100 px-3 text-sm text-blue-500 outline-none transition focus:border-primary"
            />
          </div>

          {/* Experience */}
          <div>
            <label className="mb-2 block text-sm text-base-content">
              Experience
            </label>

            <textarea
              name="experience"
              placeholder="3 years teaching experience..."
              className="min-h-15 w-full rounded-md border border-base-300 bg-base-100 px-3 py-3 text-sm text-blue-500 outline-none transition focus:border-primary"
            />
          </div>

          {/* Location */}
          <div>
            <label className="mb-2 block text-sm text-base-content">
              Location (Area/City)
            </label>

            <input
              type="text"
              name="location"
              placeholder="Khulna"
              className="h-11 w-full rounded-md border border-base-300 bg-base-100 px-3 text-sm text-blue-500 outline-none transition focus:border-primary"
            />
          </div>

          {/* Teaching Mode */}
          <div>
            <label className="mb-2 block text-sm text-base-content">
              Teaching Mode
            </label>

            <select
              name="teachingMode"
              className="h-11 w-full rounded-md border border-base-300 bg-base-100 px-3 text-sm text-base-content outline-none transition focus:border-primary"
            >
              <option>Select Mode</option>

              {teachingModes.map((mode) => (
                <option key={mode}>{mode}</option>
              ))}
            </select>
          </div>

          {/* Submit Button */}
          <button
            type="submit"
            className="cursor-pointer h-11 w-full border rounded-md bg-primary text-sm font-medium text-primary-content transition hover:opacity-90"
          >
            <div className="flex justify-center items-center gap-2">
                Submit Application <FaExternalLinkSquareAlt />
            </div>
          </button>
        </form>
      </div>
    </div>
  );
}