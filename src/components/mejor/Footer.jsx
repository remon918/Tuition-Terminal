import logo from "@/assets/user.png";
import bkash from "@/assets/bkash.png";
import nagad from "@/assets/nagad.png";
import Image from "next/image";
import { FaFacebookSquare, FaUsers } from "react-icons/fa";

export default function Footer() {
  return (
    <footer className="bg-black/90 text-white pt-16 pb-8 mt-10">
      <div className="w-[92%] mx-auto lg:w-[85%] md:w-[90%]">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12">
          <div>
            <div className="flex items-center gap-2 mb-6">
              <Image
                src={logo}
                alt="Tuition Terminal"
                className="h-8.5 w-auto rounded-full"
              />
              <h2 className="text-2xl font-bold">Tuition Terminal</h2>
            </div>

            <p className="text-gray-300 leading-8 text-[17px] max-w-sm">
              Tuition Terminal connects students with qualified tutors across
              Bangladesh, making quality learning accessible and effortless for
              everyone.
            </p>
          </div>

          <div>
            <h3 className="text-2xl font-bold mb-6">Quick Link</h3>

            <ul className="space-y-4 text-gray-200 text-[17px]">
              <li className="hover:text-white cursor-pointer">Find tutor</li>

              <li className="hover:text-white cursor-pointer">
                Request for tutor
              </li>

              <li className="hover:text-white cursor-pointer">
                Become a Tutor
              </li>

              <li className="hover:text-white cursor-pointer">
                Subscription Plan
              </li>
            </ul>
          </div>

          <div>
            <h3 className="text-2xl font-bold mb-6">Company</h3>

            <ul className="space-y-4 text-gray-200 text-[17px]">
              <li className="hover:text-white cursor-pointer">Contact Us</li>

              <li className="hover:text-white cursor-pointer">
                Privacy Policy
              </li>
            </ul>
          </div>

          <div>
            <h3 className="text-2xl font-bold mb-6">Socials</h3>

            <ul className="space-y-5 text-gray-200 text-[17px]">
              <li className="flex items-center gap-3 hover:text-white cursor-pointer">
                <FaFacebookSquare size={24} />
                Facebook Page
              </li>

              <li className="flex items-center gap-3 hover:text-white cursor-pointer">
                <FaUsers size={24} />
                Facebook Group
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-gray-800 my-10"></div>

        <div className="flex flex-col md:flex-row items-center justify-between gap-4">
          <div className="flex items-center">
            <span className="font-semibold text-[15px] text-white">
              We accept :
            </span>

            <Image
              src={bkash}
              alt="bKash"
              className="h-18 w-auto rounded-full text-white"
            />
            <Image
              src={nagad}
              alt="nagad"
              className="h-18 w-auto rounded-full text-white"
            />
          </div>

          <div className="text-gray-500 text-sm text-center">
            2026 @tuitionterminal. All rights reserved.
          </div>

          <div className="text-gray-500 text-sm">
            Developed by:{" "}
            <span className="text-gray-200 font-medium">Md. Remon Hossain</span>
          </div>
        </div>
      </div>
    </footer>
  );
}
