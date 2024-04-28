"use client";

import { Dropdown } from "@/components/Dropdown";
import { Selection } from "@nextui-org/react";
import { useRouter } from "next/navigation";
import { SearchParams } from "../page";

export const SortDropdown = ({ searchParams }: SearchParams) => {
  const router = useRouter();
  const handleChange = (keys: Selection) => {
    const selectedKey = Array.from(keys)[0];
    console.log(selectedKey);
    const searchQueryParam = searchParams.get("search");

    if (searchQueryParam) {
      return router.push(``);
    }
  };
  return (
    <Dropdown
      items={[
        { key: "created_at", label: "Created At" },
        { key: "title", label: "Title" },
      ]}
      currentValue={{ key: "created_at", label: "Created At" }}
      onChange={handleChange}
    />
  );
};
