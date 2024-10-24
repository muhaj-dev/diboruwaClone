import React from "react";
import Food from "@/containers/food/Food";
import { GetServerSideProps } from "next";

export const metadata = {
  title: "Food",
};

// Define the type for the props that will be passed to the Page component
interface PageProps {
  id: string;
}

// Define the type for the context parameter of getServerSideProps
interface ServerSideContext {
  params: {
    id: string;
  };
}

export const getServerSideProps: GetServerSideProps<PageProps> = async (
  context
) => {
  const { id } = context.params as { id: string }; // Ensure correct type assertion

  return {
    props: {
      id, // Pass the id directly to the component
    },
  };
};

const Page: React.FC<PageProps> = ({ id }) => {
  return (
    <div>
      <Food params={{ id }} />
    </div>
  );
};

export default Page;
