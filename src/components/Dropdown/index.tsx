"use client";

import {
  DropdownTrigger,
  Button,
  DropdownMenu,
  DropdownItem,
  Dropdown as NXTDropdown,
} from "@nextui-org/react";
import { useMemo, useState } from "react";

export type DropdownItem = {
  label: string;
  key: string;
};

export type DropdownProps = {
  items: DropdownItem[];
  currentValue: DropdownItem;
};

export const Dropdown = ({ items, currentValue }: DropdownProps) => {
  const [value, setValue] = useState<any>(new Set([currentValue.key]));
  const selectedValue = useMemo(
    () => Array.from(value).join(", ").replaceAll("_", " "),
    [value]
  );
  return (
    <NXTDropdown>
      <DropdownTrigger>
        <Button variant="bordered" className="capitalize">
          {selectedValue}
        </Button>
      </DropdownTrigger>
      <DropdownMenu
        aria-label="Single selection example"
        variant="flat"
        disallowEmptySelection
        selectionMode="single"
        selectedKeys={value}
        onSelectionChange={(keys) => {
          setValue(keys);
        }}
      >
        {items.map((item) => {
          return <DropdownItem key={item.key}>{item.label}</DropdownItem>;
        })}
      </DropdownMenu>
    </NXTDropdown>
  );
};
