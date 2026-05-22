"use client";

import Link from "next/link";
import { AlertTriangle } from "lucide-react";

const ErrorPage = ({ error, reset }) => {
  return (
    <div className="flex min-h-screen items-center justify-center px-4">
      <div className="w-full max-w-xl rounded-3xl border border-base-300 bg-base-100 p-8 text-center shadow-xl">
        <div className="mx-auto mb-5 flex h-20 w-20 items-center justify-center rounded-full bg-red-500/10">
          <AlertTriangle className="text-red-500" size={42} />
        </div>

        <h1 className="text-3xl font-bold text-base-content">
          Something Went Wrong
        </h1>

        <p className="mt-3 text-sm leading-6 text-base-content/70">
          An unexpected error occurred while loading this page.
          Please try again or return to the homepage.
        </p>

        {error?.message && (
          <div className="mt-5 rounded-2xl border border-red-500/20 bg-red-500/5 p-4 text-left">
            <p className="text-sm text-red-500">
              {error.message}
            </p>
          </div>
        )}

        <div className="mt-8 flex flex-col gap-3 sm:flex-row sm:justify-center">
          <button
            onClick={() => reset()}
            className="rounded-2xl bg-primary px-6 py-3 text-sm font-medium border text-primary-content transition hover:opacity-90"
          >
            Try Again
          </button>

          <Link href="/">
            <button className="w-full rounded-2xl border border-base-300 bg-base-200 px-6 py-3 text-sm font-medium text-base-content transition hover:bg-base-300 sm:w-auto">
              Back To Home
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default ErrorPage;