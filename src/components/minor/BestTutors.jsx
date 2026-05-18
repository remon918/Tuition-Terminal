import { fetchBestTutors, fetchTutors } from '@/lib/tutors/data';
import React from 'react';
import TutorCard from '../mejor/TutorCard';

const BestTutors = async() => {
    const tutors = await fetchBestTutors()
    return (
         <div className="">
              <h2 className="font-bold text-2xl  md:text-3xl text-center mt-30 mb-10">
                {" "}
                <span className="text-gray-700 border-b-2 border-b-gray-400">Best Tutors 🎓</span>
              </h2>
              <div className="w-[98%] mx-auto lg:w-[87%] md:w-[90%] p-2 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {tutors?.map((tutor) => (
                  <TutorCard key={tutor?._id} tutor={tutor} />
                ))}
              </div>
            </div>
    );
};

export default BestTutors;