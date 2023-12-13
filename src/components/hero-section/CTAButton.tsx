"use client";

import React from "react";
import { Button } from "../ui/button";
import { useRouter } from "next/navigation";

const CTAButton = () => {
  const router = useRouter();
  return (
    <div>
      <Button
        onClick={() => router.push("/add-quote")}
        className="text-2xl hover:bg-saq-green/80 text-green-100 bg-saq-green"
      >
        Add a Qoute
      </Button>
    </div>
  );
};

export default CTAButton;
