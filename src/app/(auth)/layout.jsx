import Navbar from "@/components/mejor/Navbar";
import React from "react";
import { ToastContainer } from "react-toastify";

const AuthLayout = ({ children }) => {
  return (
    <>
      <Navbar />
      {children}
      <ToastContainer
        position="top-right"
        autoClose={3000}
        toastClassName="w-[50%] mx-auto text-sm"
      />
    </>
  );
};

export default AuthLayout;
