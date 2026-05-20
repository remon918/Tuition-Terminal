"use client";

import { X } from "lucide-react";
import toast from "react-hot-toast";
import { useRouter } from "next/navigation";
import { authClient } from "@/lib/auth-client";

const CancelButton = ({ id }) => {
  const router = useRouter();

  const handleCancel = async () => {
    const {data:tokenData} = await authClient.token()
          console.log(tokenData);
    const promise = fetch(
      `${process.env.NEXT_PUBLIC_API_URL}/booking/${id}`,
      {
        method: "PATCH",
        headers: {
          authorization :`Bearer ${tokenData?.token}`
        },
      },
       
    );

    toast.promise(promise, {
      loading: "Cancelling session...",
      success: "Session cancelled",
      error: "Failed to cancel",
    });

    await promise;

    router.refresh();
  };

  return (
    <button
      onClick={handleCancel}
      className="flex h-10 w-10 items-center justify-center rounded-xl border border-base-300 transition hover:border-red-200 hover:bg-red-50 dark:hover:bg-red-500/10"
    >
      <X
        size={18}
        className="text-base-content/60 hover:text-red-500"
      />
    </button>
  );
};

export default CancelButton;