"use client";

import { useEffect } from "react";

export default function Error({
  error,
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  useEffect(() => {
    console.error(error);
  }, [error]);

  return (
    <div className="bg-villa-bg flex flex-1 flex-col items-center justify-center gap-4 px-6 py-24 text-center">
      <h1 className="font-heading text-villa-primary text-[32px] font-semibold">
        Something went wrong
      </h1>
      <p className="max-w-md text-[14px] font-light text-[#5c6975]">
        We hit an unexpected error loading this page. Please try again.
      </p>
      <button
        type="button"
        onClick={reset}
        className="bg-villa-primary mt-2 inline-block rounded-[2px] px-8 py-3 text-[12px] font-medium tracking-[1.6px] text-white uppercase"
      >
        Try Again
      </button>
    </div>
  );
}
