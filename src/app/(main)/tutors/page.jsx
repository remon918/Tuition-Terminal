import TutorCard from "@/components/mejor/TutorCard";
import { fetchTutors } from "@/lib/tutors/data";

export const metadata = {
  title: "Tutors",
}

const TutorPage = async () => {
  const tutors = await fetchTutors();
  //   console.log(tutors)
  return (
    <div className="">
      <h2 className="font-bold text-2xl  md:text-3xl text-center my-8">
        {" "}
        <span className="border-b-2 border-b-base-content/90 text-base-content">All Tutors Here 👨‍🏫</span>
      </h2>
      <div className="w-[98%] mx-auto lg:w-[87%] md:w-[90%] p-2 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {tutors?.map((tutor) => (
          <TutorCard key={tutor?._id} tutor={tutor} />
        ))}
      </div>
    </div>
  );
};

export default TutorPage;
