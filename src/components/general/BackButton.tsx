"use client";
import React from "react";
import { Button } from "../ui/button";
import { useRouter } from "next/navigation";

const BackButton = () => {
  const router = useRouter();
  return (
    <Button
      onClick={() => router.back()}
      variant="outline"
      className="dark:border-dark-gray-700 w-full border-2 text-xl border-light-gray-700 bg-transparent hover:dark:bg-dark-gray-900 hover:bg-light-gray-900  "
    >
      Back
    </Button>
  );
};

export default BackButton;
