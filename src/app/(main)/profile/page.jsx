"use client";

import ModalUpdate from "@/components/minor/ModalUpdate";
import { authClient } from "@/lib/auth-client";
import Image from "next/image";
import React from "react";
import { FaCircleCheck } from "react-icons/fa6";
import { CalendarDays, Mail, ShieldCheck, User2 } from "lucide-react";

const ProfilePage = () => {
  const { data: session, isPending } = authClient.useSession();

  if (isPending) {
    return (
      <div className="flex h-[70vh] items-center justify-center">
        <span className="loading loading-ring loading-lg text-primary"></span>
      </div>
    );
  }

  const user = session?.user;

  return (
    <div className="min-h-screen bg-base-200 px-4 py-8">
      <div className="mx-auto max-w-3xl">
        <div className="mb-6 text-center">
          <h1 className="text-3xl font-bold text-base-content">
            My Profile 👤
          </h1>

          <p className="mt-2 text-sm text-base-content/70">
            Manage your account information and profile details.
          </p>
        </div>

        <div className="overflow-hidden rounded-[28px] border border-base-300 bg-base-100 shadow-2xl">
          <div className="relative h-32 bg-linear-to-r from-teal-500 via-cyan-500 to-blue-500">
            <div className="absolute inset-0 bg-black/10"></div>
          </div>

          <div className="relative px-5 pb-6">
            <div className="-mt-14 flex flex-col items-center">
              <div className="rounded-full border-4 border-base-100 bg-base-100 shadow-xl">
                <Image
                  src={
                    user?.image ||
                    "https://png.pngtree.com/png-vector/20190710/ourmid/pngtree-user-vector-avatar-png-image_1541962.jpg"
                  }
                  width={100}
                  height={100}
                  alt="avatar"
                  className="h-25 w-25 rounded-full object-cover"
                />
              </div>

              <h2 className="mt-3 text-2xl font-bold text-base-content">
                {user?.name || "Guest User"}
              </h2>

              <p className="mt-1 text-sm text-base-content/70">
                {user?.email || "No Email"}
              </p>

              {user?.emailVerified && (
                <div className="mt-3 flex items-center gap-2 rounded-full border border-emerald-200 bg-emerald-100 px-3 py-1.5 text-xs font-medium text-emerald-700">
                  <FaCircleCheck />
                  Email Verified
                </div>
              )}
            </div>

            <div className="mt-8 grid grid-cols-1 gap-4 md:grid-cols-2">
              <div className="rounded-2xl border border-base-300 bg-base-200 p-4">
                <div className="mb-2 flex items-center gap-2">
                  <User2 size={18} className="text-primary" />

                  <h3 className="text-sm font-semibold text-base-content">
                    Account ID
                  </h3>
                </div>

                <p className="break-all text-xs text-base-content/70">
                  {user?.id}
                </p>
              </div>

              <div className="rounded-2xl border border-base-300 bg-base-200 p-4">
                <div className="mb-2 flex items-center gap-2">
                  <Mail size={18} className="text-primary" />

                  <h3 className="text-sm font-semibold text-base-content">
                    Email Address
                  </h3>
                </div>

                <p className="text-xs text-base-content/70">{user?.email}</p>
              </div>

              <div className="rounded-2xl border border-base-300 bg-base-200 p-4">
                <div className="mb-2 flex items-center gap-2">
                  <ShieldCheck size={18} className="text-primary" />

                  <h3 className="text-sm font-semibold text-base-content">
                    Account Status
                  </h3>
                </div>

                <p className="text-xs text-emerald-500">Active & Verified</p>
              </div>

              <div className="rounded-2xl border border-base-300 bg-base-200 p-4">
                <div className="mb-2 flex items-center gap-2">
                  <CalendarDays size={18} className="text-primary" />

                  <h3 className="text-sm font-semibold text-base-content">
                    Last Updated
                  </h3>
                </div>

                <p className="text-xs text-base-content/70">
                  {user?.updatedAt
                    ? new Date(user.updatedAt).toLocaleString()
                    : "N/A"}
                </p>
              </div>
            </div>

            <div className="mt-6 flex justify-center">
              <ModalUpdate user={user} />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProfilePage;
