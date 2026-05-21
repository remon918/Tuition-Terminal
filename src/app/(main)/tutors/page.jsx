import TutorCard from "@/components/mejor/TutorCard";
import TutorsFilter from "@/components/mejor/TutorsFilter";
import { fetchTutors } from "@/lib/tutors/data";

export const metadata = {
  title: "Tutors",
};

const TutorPage = async ({
  searchParams,
}) => {

  const params =
    await searchParams;

  const tutors =
    await fetchTutors({
      search:
        params.search || "",
      startDate:
        params.startDate || "",
      endDate:
        params.endDate || "",
    });

  return (
    <div>

      <h2 className="font-bold text-2xl md:text-3xl text-center my-8">
        <span className="border-b-2 border-b-base-content/90 text-base-content">
          All Tutors Here 👨‍🏫
        </span>
      </h2>

      <TutorsFilter />

      <div className="w-[97%] mx-auto lg:w-[86%] md:w-[90%] p-2 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">

        {tutors?.map((tutor) => (
          <TutorCard
            key={tutor?._id}
            tutor={tutor}
          />
        ))}

      </div>
    </div>
  );
};

export default TutorPage;