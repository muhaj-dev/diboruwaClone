"use client";

import { ArrowLeftIcon } from "@radix-ui/react-icons";
import { useRouter } from "next/navigation";
import styled from "styled-components";

const Container = styled.button`
  border: none;
  outline: none;
  background: transparent;
  color: var(--primary);
  display: flex;
  align-items: center;
  gap: 7px;
  cursor: pointer;
  padding: 21px 0;

  &:hover {
    color: var(--primary);
  }

  .span_back {
    color: var(--Green1, #27a124);
    font-family: Poppins;
    font-size: 16px;
    font-style: normal;
    font-weight: 400;
    line-height: normal;
  }

  .icon {
    width: 15px;
    height: 15px;
    flex-shrink: 0;
  }
`;

const BackButton = () => {
  const router = useRouter();
  return (
    <Container onClick={() => router.back()}>
      <ArrowLeftIcon className="icon" /> <span className="span_back">Back</span>
    </Container>
  );
};

export default BackButton;
