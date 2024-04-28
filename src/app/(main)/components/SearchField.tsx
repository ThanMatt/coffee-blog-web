"use client";

import { TextField } from "@/components/TextField";
import { useRouter } from "next/navigation";
import { ChangeEvent, KeyboardEvent, useState } from "react";

export const SearchField = ({ term }: { term?: string }) => {
  const router = useRouter();
  const [searchTerm, setSearchTerm] = useState(term);
  const handleChange = (event: ChangeEvent<HTMLInputElement>) => {
    setSearchTerm(event.target.value);
  };

  const handleKeyDown = (event: KeyboardEvent<HTMLInputElement>) => {
    if (event.key === "Enter" && !event.shiftKey) {
      event.preventDefault();

      if (!searchTerm) return router.push(`/`);
      return router.push(`/?search=${searchTerm}`);
    }
  };
  return (
    <TextField
      className="mb-4"
      onKeyDown={handleKeyDown}
      onChange={handleChange}
      value={searchTerm}
      label="Search"
    />
  );
};
