import React from "react";
import { GetServerSideProps } from "next";
import Groceries from "@/containers/groceries/Groceries";

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
      <Groceries params={{ id }} />
    </div>
  );
};

export default Page;
