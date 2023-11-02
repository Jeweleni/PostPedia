import React from "react";

import {
  Dropdown,
  DropdownTrigger,
  DropdownMenu,
  DropdownItem,
  Button,
} from "@nextui-org/react";
import { BiDownArrowAlt } from "react-icons/bi";

export default function TagsList() {
  const [selectedKeys, setSelectedKeys] = React.useState(new Set([""]));

  const selectedValue = React.useMemo(
    () => Array.from(selectedKeys).join(", ").replaceAll("_", " "),
    [selectedKeys]
  );

  const tags = [
    { id: 1, name: "Action" },
    { id: 2, name: "Actions" },
    { id: 3, name: "Adventure" },
    { id: 4, name: "Cars" },
    { id: 5, name: "Comedy" },
    { id: 6, name: "Dementia" },
    { id: 7, name: "Demons" },
    { id: 8, name: "Mystery" },
    { id: 9, name: "Drama" },
    { id: 10, name: "Ecchi" },
    { id: 11, name: "Fantasy" },
    { id: 12, name: "Game" },
    { id: 13, name: "Hentai" },
    { id: 14, name: "Historical" },
    { id: 15, name: "Horror" },
    { id: 16, name: "Kids" },
    { id: 17, name: "Magic" },
    { id: 18, name: "Martial Arts" },
    { id: 19, name: "Mecha" },
    { id: 20, name: "Music" },
    { id: 21, name: "Parody" },
    { id: 22, name: "Samurai" },
    { id: 23, name: "Romance" },
  ];

  return (
    <div className="w-full">
      <Dropdown className="flex justify-center items-center border w-full flex-wrap max-w-sm">
        <DropdownTrigger className="flex justify-between items-center px-3 border h-[50px] rounded-lg shadow-sm shadow-gray-300 w-full">
          <Button variant="bordered">
            Select you interests <BiDownArrowAlt />
          </Button>
        </DropdownTrigger>
        <DropdownMenu
          variant="flat"
          closeOnSelect={false}
          disallowEmptySelection
          selectionMode="multiple"
          className="w-[100%] flex gap-2 h-[200px] overflow-y-scroll"
          aria-label="Multiple selection example"
          onSelectionChange={setSelectedKeys}
          aria-required="true"
        >
          {tags.map((tag) => (
            <DropdownItem
              key={tag.name}
              value={tag.name}
              className="flex justify-between items-center gap-2"
            >
              {tag.name}{" "}
              {selectedValue.includes(tag.name) ? (
                <span className="text-primary">✓</span>
              ) : null}
            </DropdownItem>
          ))}
        </DropdownMenu>
      </Dropdown>
    </div>
  );
}
