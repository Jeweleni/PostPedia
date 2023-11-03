import React from "react";

import {
  Dropdown,
  DropdownTrigger,
  DropdownMenu,
  DropdownItem,
  Button,
} from "@nextui-org/react";
import { BiDownArrowAlt } from "react-icons/bi";
import { tags } from "../../../lib/data";

export default function TagsList() {
  const [selectedKeys, setSelectedKeys] = React.useState(new Set([""]));

  const selectedValue = React.useMemo(
    () => Array.from(selectedKeys).join(", ").replaceAll("_", " "),
    [selectedKeys]
  );

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
          className="w-[100%] flex gap-2 h-[200px] overflow-y-auto"
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
