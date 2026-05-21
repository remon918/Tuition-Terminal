import React from "react";
import { headers } from "next/headers";
import { auth } from "@/lib/auth";
import CancelButton from "@/components/minor/Cancel";

export const metadata = {
  title: "Booked Session",
};

const BookedSession = async () => {
  const session = await auth.api.getSession({
    headers: await headers(),
  });

  const { token } = await auth.api.getToken({
    headers: await headers(),
  });

  const user = session?.user;

  const res = await fetch(
    `${process.env.NEXT_PUBLIC_API_URL}/booking/${user?.id}`,
    {
      cache: "no-store",
      headers: {
        authorization: `Bearer ${token}`,
      },
    },
  );

  const data = await res.json();

  return (
    <div className="min-h-screen px-4 py-10">
      <div className="mx-auto max-w-7xl">
        <div className="mb-8 text-center">
          <h1 className="text-4xl font-bold text-base-content">
            Booked Sessions 📚
          </h1>

          <p className="mt-2 text-sm text-base-content/70">
            All your booked tutor sessions are listed here.
          </p>
        </div>

        <div className="overflow-x-auto rounded-3xl border border-base-300 bg-base-100 p-5">
          <table className="min-w-250 w-full border-collapse">
            <thead>
              <tr className="border-b border-base-300 text-left">
                <th className="pb-4 whitespace-nowrap text-base-content">
                  Student
                </th>

                <th className="pb-4 whitespace-nowrap text-base-content">
                  Phone
                </th>

                <th className="pb-4 whitespace-nowrap text-base-content">
                  Tutor
                </th>

                <th className="pb-4 whitespace-nowrap text-base-content">
                  Email
                </th>

                <th className="pb-4 whitespace-nowrap text-base-content">
                  Status
                </th>

                <th className="pb-4 whitespace-nowrap text-right text-base-content">
                  Action
                </th>
              </tr>
            </thead>

            <tbody>
              {data?.map((booking) => (
                <tr key={booking._id} className="border-b border-base-300">
                  <td className="py-4 whitespace-nowrap text-base-content font-medium">
                    {booking?.userName}
                  </td>

                  <td className="py-4 whitespace-nowrap text-base-content">
                    {booking?.phone || "N/A"}
                  </td>

                  <td className="py-4 whitespace-nowrap text-base-content">
                    {booking?.tutorName}
                  </td>

                  <td className="py-4 whitespace-nowrap text-base-content">
                    {booking?.email}
                  </td>

                  <td className="py-4 whitespace-nowrap">
                    <span
                      className={`rounded-full px-3 py-1 text-xs ${
                        booking?.status === "Cancelled"
                          ? "bg-red-100 text-red-700"
                          : "bg-emerald-100 text-emerald-700"
                      }`}
                    >
                      {booking?.status || "Confirmed"}
                    </span>
                  </td>

                  <td className="py-4 whitespace-nowrap">
                    <div className="flex justify-end">
                      <CancelButton id={booking._id} />
                    </div>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>

          {data?.length === 0 && (
            <div className="py-20 text-center">
              <h2 className="text-xl font-semibold text-base-content">
                No sessions booked yet
              </h2>

              <p className="mt-2 text-base-content/70">
                Your booked sessions will appear here.
              </p>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default BookedSession;
