"use client";

import React, { useState } from "react";
import { Trash2, X } from "lucide-react";
import toast from "react-hot-toast";
import { useRouter } from "next/navigation";
import { authClient } from "@/lib/auth-client";

const Delete = ({ id }) => {
  const [open, setOpen] = useState(false);

  const router = useRouter();

  const handleDelete = async () => {
    const { data: tokenData } = await authClient.token();
    // console.log(tokenData);
    const deletePromise = fetch(
      `${process.env.NEXT_PUBLIC_API_URL}/addedtutors/${id}`,
      {
        method: "DELETE",
        headers: {
          authorization: `Bearer ${tokenData?.token}`,
        },
      },
    );

    toast.promise(deletePromise, {
      loading: "Deleting tutor...",
      success: "Tutor deleted successfully",
      error: "Delete failed",
    });

    await deletePromise;

    setOpen(false);

    router.refresh();
  };

  return (
    <>
      <button
        onClick={() => setOpen(true)}
        className="text-red-500 transition hover:scale-110"
      >
        <Trash2 size={18} />
      </button>

      {open && (
        <div className="fixed inset-0 z-9999 flex items-center justify-center bg-black/40 p-4 backdrop-blur-sm">
          <div className="w-full max-w-sm rounded-2xl border border-base-300 bg-base-100 p-6 shadow-2xl">
            <div className="flex items-start justify-between">
              <div>
                <h2 className="text-lg font-bold text-base-content mb-2">
                  Delete Tutor
                </h2>

                <p className="mt-1 text-sm text-base-content/70">
                  Do you Really want to delete this tutor?
                </p>
              </div>

              <button
                onClick={() => setOpen(false)}
                className="rounded-full p-2 text-base-content/70 transition hover:bg-base-200 hover:text-red-500"
              >
                <X size={18} />
              </button>
            </div>

            <div className="mt-6 flex flex-col-reverse gap-3 sm:flex-row sm:justify-end">
              <button
                onClick={() => setOpen(false)}
                className="w-full rounded-xl border border-base-300 bg-base-200 px-4 py-2.5 text-sm text-base-content cursor-pointer transition hover:bg-base-300 sm:w-auto"
              >
                Cancel
              </button>

              <button
                onClick={handleDelete}
                className="w-full cursor-pointer rounded-xl bg-red-500 px-4 py-2.5 text-sm font-medium text-white transition hover:bg-red-600 sm:w-auto"
              >
                Confirm Delete
              </button>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default Delete;
