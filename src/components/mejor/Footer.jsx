import logo from "@/assets/user.png";
import bkash from "@/assets/bkash.png";
import nagad from "@/assets/nagad.png";
import Image from "next/image";
import { FaFacebookSquare, FaUsers } from "react-icons/fa";

export default function Footer() {
  return (
    <footer className="pt-16 pb-8 mt-10 border-t border-base-300 transition-colors duration-300">
      <div className="w-[92%] mx-auto lg:w-[85%] md:w-[90%]">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4
         gap-12">

          {/* Logo + Description */}
          <div>
            <div className="flex items-center gap-2 mb-6">
              <Image
                src={logo}
                alt="Tuition Terminal"
                className="h-8.5 w-auto rounded-full"
              />

              <h2 className="text-2xl font-bold text-base-content">
                Tuition Terminal
              </h2>
            </div>

            <p className="leading-8 text-[17px] text-base-content/70 max-w-sm">
              Tuition Terminal connects students with qualified tutors across
              Bangladesh, making quality learning accessible and effortless for
              everyone.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-2xl font-bold mb-6 text-base-content">
              Quick Link
            </h3>

            <ul className="space-y-4 text-[17px]">
              {[
                "Find tutor",
                "Request for tutor",
                "Become a Tutor",
                "Subscription Plan",
              ].map((item) => (
                <li
                  key={item}
                  className="cursor-pointer text-base-content/70 hover:text-base-content transition-colors duration-300"
                >
                  {item}
                </li>
              ))}
            </ul>
          </div>

          {/* Company */}
          <div>
            <h3 className="text-2xl font-bold mb-6 text-base-content">
              Company
            </h3>

            <ul className="space-y-4 text-[17px]">
              {["Contact Us", "Privacy Policy"].map((item) => (
                <li
                  key={item}
                  className="cursor-pointer text-base-content/70 hover:text-base-content transition-colors duration-300"
                >
                  {item}
                </li>
              ))}
            </ul>
          </div>

          {/* Social */}
          <div>
            <h3 className="text-2xl font-bold mb-6 text-base-content">
              Socials
            </h3>

            <ul className="space-y-5 text-[17px]">
              <li className="flex items-center gap-3 cursor-pointer text-base-content/70 hover:text-base-content transition-colors duration-300">
                <FaFacebookSquare size={24} />
                Facebook Page
              </li>

              <li className="flex items-center gap-3 cursor-pointer text-base-content/70 hover:text-base-content transition-colors duration-300">
                <FaUsers size={24} />
                Facebook Group
              </li>
            </ul>
          </div>
        </div>

        {/* Divider */}
        <div className="border-t border-base-300 my-10"></div>

        {/* Bottom */}
        <div className="flex flex-col md:flex-row items-center justify-between gap-4">

          {/* Payment */}
          <div className="flex items-center">
            <span className="font-semibold text-[15px] text-base-content">
              We accept :
            </span>

            <Image
              src={bkash}
              alt="bKash"
              className="h-18 w-auto rounded-full"
            />

            <Image
              src={nagad}
              alt="nagad"
              className="h-18 w-auto rounded-full"
            />
          </div>

          {/* Copyright */}
          <div className="text-sm text-center text-base-content/60">
            2026 @tuitionterminal. All rights reserved.
          </div>

          {/* Developer */}
          <div className="text-sm text-base-content/60">
            Developed by:{" "}
            <span className="font-medium text-base-content">
              Md. Remon Hossain
            </span>
          </div>
        </div>
      </div>
    </footer>
  );
}