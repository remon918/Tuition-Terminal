import Image from "next/image";
import { FaStar, FaUserGraduate, FaMapMarkerAlt } from "react-icons/fa";
import { MdAccessTime, MdSchool, MdOutlineModeEdit } from "react-icons/md";
import { HiMiniCurrencyDollar } from "react-icons/hi2";
import BookingCard from "@/components/minor/BookingCard";
import { auth } from "@/lib/auth";
import { headers } from "next/headers";
import Link from "next/link";

export const metadata = {
  title: "Tutor Details",
};

const fetchTutorDetails = async (id, token) => {
  const res = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/tutors/${id}`, {
    cache: "no-store",
    headers: {
      authorization: `Bearer ${token}`,
    },
  });

  const data = await res.json();

  return data || {};
};

const TutorDetailsPage = async ({ params }) => {
  const { id } = await params;

  const { token } = await auth.api.getToken({
    headers: await headers(),
  });

  const tutor = await fetchTutorDetails(id, token);

  return (
    <div className="min-h-screen px-4 py-10">
      <div className="mx-auto max-w-6xl overflow-hidden rounded-[32px] border border-gray-200 shadow-xl">
        <div className="grid bg-white grid-cols-1 lg:grid-cols-2">
          <div className="relative flex items-center justify-center p-5 lg:p-8">
            <div className="relative h-65 w-full overflow-hidden rounded-[28px] sm:h-80 lg:h-130">
              <Image
                src={tutor?.image}
                alt={tutor?.name}
                fill
                className="object-cover"
              />

              {/* overlay */}
              <div className="absolute inset-0 bg-linear-to-t from-black/60 via-black/10 to-transparent" />

              {/* rating */}
              <div className="absolute left-5 top-5 flex items-center gap-2 rounded-full bg-white/90 px-4 py-2 shadow-md backdrop-blur">
                <FaStar className="text-yellow-500" />
                <span className="font-semibold text-gray-800">
                  {tutor?.rating}
                </span>
              </div>

              {/* students */}
              <div className="absolute bottom-5 left-5 flex items-center gap-2 rounded-full bg-purple-600 px-4 py-2 text-white shadow-lg">
                <FaUserGraduate />
                <span>{tutor?.students}+ Students</span>
              </div>
            </div>
          </div>

          {/* RIGHT SIDE CONTENT */}
          <div className="flex flex-col justify-center p-8 lg:p-12">
            {/* heading */}
            <div className="mb-8">
              <p className="mb-2 inline-block rounded-full bg-purple-100 px-4 py-1 text-sm font-medium text-teal-500">
                🎓 Best Tutor
              </p>

              <h1 className="text-4xl font-bold text-gray-900">
                {tutor?.name}
              </h1>

              <p className="mt-2 text-lg text-teal-500">{tutor?.subject}</p>
            </div>

            {/* info */}
            <div className="space-y-5">
              <div className="flex items-start gap-3">
                <MdSchool className="mt-1 text-xl text-purple-600" />
                <div>
                  <p className="font-semibold text-gray-800">Institution</p>
                  <p className="text-gray-600">{tutor?.institution}</p>
                </div>
              </div>

              <div className="flex items-start gap-3">
                <MdOutlineModeEdit className="mt-1 text-xl text-purple-600" />
                <div>
                  <p className="font-semibold text-gray-800">Experience</p>
                  <p className="text-gray-600">{tutor?.experience}</p>
                </div>
              </div>

              <div className="flex items-start gap-3">
                <FaMapMarkerAlt className="mt-1 text-lg text-purple-600" />
                <div>
                  <p className="font-semibold text-gray-800">Location</p>
                  <p className="text-gray-600">{tutor?.location}</p>
                </div>
              </div>

              <div className="flex items-start gap-3">
                <MdAccessTime className="mt-1 text-xl text-purple-600" />
                <div>
                  <p className="font-semibold text-gray-800">Available Time</p>
                  <p className="text-gray-600">{tutor?.availableTime}</p>
                </div>
              </div>

              <div className="flex items-start gap-3">
                <HiMiniCurrencyDollar className="mt-1 text-xl text-purple-600" />
                <div>
                  <p className="font-semibold text-gray-800">Hourly Fee</p>
                  <p className="text-gray-600">৳ {tutor?.hourlyRate}/hr</p>
                </div>
              </div>
            </div>

            {/* bottom section */}
            <div className="mt-10 flex gap-5  items-center justify-between">
              <div>
                <p className="text-sm text-gray-500">Remaining Slots:</p>

                <h3
                  className={`text-xl font-bold ${
                    Number(tutor?.availableSlots) === 0
                      ? "text-red-500"
                      : "text-green-600"
                  }`}
                >
                  {tutor?.availableSlots} Slots Left
                </h3>
              </div>
              {tutor?.availableSlots === 0 ? (
                <button className="mt-4 w-[40%]  rounded-lg  py-2.5 text-sm font-semibold transition-all duration-300 text-gray-300 border italic">
                  No Slot Available
                </button>
              ) : (
                <BookingCard />
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TutorDetailsPage;
