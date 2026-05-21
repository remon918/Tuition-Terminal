import Delete from "@/components/minor/Delete";
import Edit from "@/components/minor/Edit";
import { auth } from "@/lib/auth";
import { headers } from "next/headers";

export const metadata = {
  title: "My Tutors",
};

const MyTutorsPage = async () => {
  const { token } = await auth.api.getToken({
    headers: await headers(),
  });
  const res = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/addedtutors`, {
    cache: "no-store",
    headers: {
      authorization: `Bearer ${token}`,
    },
  });

  const addtutors = await res.json();

  return (
    <div className="min-h-screen px-4 py-8">
      {/* Heading */}
      <div className="mx-auto mb-8 max-w-7xl text-center">
        <h1 className="text-4xl font-bold text-base-content">My Tutors 👨‍🏫</h1>

        <p className="mt-2 text-sm text-base-content/70">
          Manage all your tutor applications easily.
        </p>
      </div>

      {/* Table */}
      <div className="mx-auto max-w-7xl overflow-x-auto rounded-3xl border border-base-300 bg-base-100 p-5">
        <table className="min-w-225 w-full border-collapse">
          <thead>
            <tr className="border-b border-base-300 text-left">
              <th className="pb-4 whitespace-nowrap text-base-content">
                Tutor Name
              </th>

              <th className="pb-4 whitespace-nowrap text-base-content">
                Subject
              </th>

              <th className="pb-4 whitespace-nowrap text-base-content">
                Available
              </th>

              <th className="pb-4 whitespace-nowrap text-base-content">
                Hourly Fee
              </th>

              <th className="pb-4 whitespace-nowrap text-base-content">
                Total Slot
              </th>

              <th className="pb-4 whitespace-nowrap text-base-content">
                Registration Date
              </th>

              <th className="pb-4 whitespace-nowrap text-right text-base-content">
                Action
              </th>
            </tr>
          </thead>

          <tbody>
            {addtutors.map((tutor) => (
              <tr key={tutor._id} className="border-b border-base-300">
                <td className="py-4 whitespace-nowrap text-base-content">
                  {tutor.tutorName}
                </td>

                <td className="py-4 whitespace-nowrap text-base-content">
                  {tutor.subject}
                </td>

                <td className="py-4 whitespace-nowrap text-base-content">
                  {tutor.availableTime}
                </td>

                <td className="py-4 whitespace-nowrap text-base-content">
                  ৳{tutor.hourlyRate}
                </td>

                <td className="py-4 whitespace-nowrap">
                  <span className="rounded-md bg-green-500/10 px-3 py-1 text-sm text-green-500">
                    {tutor.availableSlots}
                  </span>
                </td>

                <td className="py-4 whitespace-nowrap text-base-content">
                  {tutor.registrationDate}
                </td>

                <td className="py-4 whitespace-nowrap">
                  <div className="flex justify-end gap-4">
                    <Delete id={tutor?._id} />

                    <Edit tutor={tutor} />
                  </div>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default MyTutorsPage;
