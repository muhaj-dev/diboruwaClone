"use client";
import React from "react";
import Groceries from "@/containers/groceries/Groceries";
import { useRouter } from "next/router";

const Page: React.FC = () => {
  const router = useRouter();
  const { id } = router.query; // Access the dynamic route parameter

  // Render only if the id is available to avoid hydration errors
  if (!id) return null;

  return (
    <div>
      <Groceries params={{ id: id as string }} />
    </div>
  );
};

export default Page;
