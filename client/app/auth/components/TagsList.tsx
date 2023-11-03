import React from "react";
import { Select, SelectItem, Selection } from "@nextui-org/react";
import { BiSolidDownArrowAlt } from "react-icons/bi";
import { tags } from "../../../lib/data";

type Props = {
  values: Selection;
  setValues: React.Dispatch<React.SetStateAction<Selection>>;
};

export default function TagsList({ values, setValues }: Props) {
  return (
    <div className="w-full h-[50px]">
      <Select
        selectorIcon={<BiSolidDownArrowAlt />}
        label="Select your interests"
        selectionMode="multiple"
        selectedKeys={""}
        classNames={{
          base: "w-full flex justify-between items-center border min-h-[50px] rounded-lg shadow-sm shadow-gray-300 py-3",
          label: "text-sm",
          trigger: "shadow-none border-0",
          mainWrapper:
            "flex justify-center items-center w-full h-full rounded-lg border-0 shadow-none",
          innerWrapper:
            "w-full border-0 tex-sm shadow-none outline-none ring-0",
          selectorIcon: `text-gray-600 right-3 ${
            Array.from(values).length < 1 && "animate-bounce"
          }`,
          value: "hidden",
          listboxWrapper:
            "mt-5 border rounded-lg shadow-sm shadow-gray-300 bg-white",
          listbox: "p-3 gap-2",
        }}
        onSelectionChange={
          Array.from(values).length !== 5 ? setValues : () => {}
        }
        size="lg"
        isRequired={true}
      >
        {tags.map((tag) => (
          <SelectItem key={tag.name} textValue={tag.name}>
            {tag.name}
            {Array.from(values).includes(tag.name) && (
              <span className="text-primary text-sm ml-2">✓</span>
            )}
          </SelectItem>
        ))}
      </Select>
    </div>
  );
}
