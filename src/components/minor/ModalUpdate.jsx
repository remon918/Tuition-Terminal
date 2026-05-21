"use client";

import { authClient } from "@/lib/auth-client";
import React, { useState } from "react";
import { BiEdit } from "react-icons/bi";
import { ImageIcon, Mail, User2, X } from "lucide-react";
import toast from "react-hot-toast";

const ModalUpdate = ({ user }) => {
  const [open, setOpen] = useState(false);

  const onSubmit = async (e) => {
    e.preventDefault();

    const name = e.target.name.value;
    const image = e.target.image.value;

    try {
      await authClient.updateUser({
        name,
        image,
      });

      toast.success("Profile updated successfully!");

      setOpen(false);
    } catch (err) {
      console.log(err);

      toast.error("Update failed");
    }
  };

  return (
    <div className="w-full">
      <button
        onClick={() => setOpen(true)}
        className="flex w-full cursor-pointer items-center justify-center gap-2 rounded-2xl bg-secondary px-5 border py-3 font-medium text-primary-content transition hover:scale-[1.02]"
      >
        <BiEdit size={20} />
        Update Profile
      </button>

      {open && (
        <div className="fixed inset-0 z-9999 flex items-center justify-center bg-black/30 p-4 backdrop-blur-sm">
          <div className="w-full max-w-lg rounded-[28px] border border-base-300 bg-base-100 p-6 shadow-2xl">
            <div className="mb-6 flex items-start justify-between">
              <div>
                <h2 className="text-2xl font-bold text-base-content">
                  Update Profile
                </h2>

                <p className="mt-1 text-sm text-base-content/70">
                  Edit your personal information
                </p>
              </div>

              <button
                onClick={() => setOpen(false)}
                className="flex h-10 w-10 cursor-pointer items-center justify-center rounded-full border border-base-300 bg-base-200 transition hover:bg-base-300"
              >
                <X size={18} />
              </button>
            </div>

            <form onSubmit={onSubmit} className="space-y-5">
              <div>
                <label className="mb-2 flex items-center gap-2 text-sm font-medium text-base-content">
                  <User2 size={16} />
                  Full Name
                </label>

                <input
                  type="text"
                  name="name"
                  defaultValue={user?.name}
                  placeholder="Enter your full name"
                  className="h-12 w-full rounded-2xl border border-base-300 bg-base-200 px-4 text-base-content outline-none transition focus:border-primary"
                />
              </div>

              <div>
                <label className="mb-2 flex items-center gap-2 text-sm font-medium text-base-content">
                  <Mail size={16} />
                  Email Address
                </label>

                <input
                  type="email"
                  name="email"
                  defaultValue={user?.email}
                  readOnly
                  className="h-12 w-full cursor-not-allowed rounded-2xl border border-base-300 bg-base-300 px-4 text-base-content/70 outline-none"
                />
              </div>

              <div>
                <label className="mb-2 flex items-center gap-2 text-sm font-medium text-base-content">
                  <ImageIcon size={16} />
                  Profile Image URL
                </label>

                <input
                  type="text"
                  name="image"
                  defaultValue={user?.image}
                  placeholder="Paste your profile image URL"
                  className="h-12 w-full rounded-2xl border border-base-300 bg-base-200 px-4 text-base-content outline-none transition focus:border-primary"
                />
              </div>

              <div className="flex flex-col-reverse gap-3 pt-2 sm:flex-row sm:justify-end">
                <button
                  type="button"
                  onClick={() => setOpen(false)}
                  className="rounded-2xl border border-base-300 cursor-pointer bg-base-200 px-5 py-3 font-medium text-base-content transition hover:bg-base-300"
                >
                  Cancel
                </button>

                <button
                  type="submit"
                  className="rounded-2xl bg-primary px-5 py-3 font-medium text-primary-content cursor-pointer border transition hover:scale-[1.02]"
                >
                  Save Changes
                </button>
              </div>
            </form>
          </div>
        </div>
      )}
    </div>
  );
};

export default ModalUpdate;
