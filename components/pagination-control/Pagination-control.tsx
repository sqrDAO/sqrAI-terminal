"use client";
import { useState } from "react";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "../ui/select";
import Image from "next/image";

const PaginationControls = ({ onRowPerPageSet = (value: string) => {} }) => {
  const [rowPerPage, setRowPerPage] = useState("25");
  return (
    <div className="self-stretch px-5 py-1 justify-end items-center gap-16 inline-flex">
      <div className="justify-end items-center gap-2.5 flex w-1/4">
        <div className="text-[#999999] text-sm font-normal font-bricolage leading-tight">Rows per page:</div>
        <Select
          value={rowPerPage}
          onValueChange={(value) => {
            setRowPerPage(value);
            onRowPerPageSet(value);
          }}
        >
          <SelectTrigger className="w-[64px]">
            <SelectValue placeholder="Select a agent" />
          </SelectTrigger>
          <SelectContent>
            <SelectItem value={"25"}>
              <div>25</div>
            </SelectItem>
            <SelectItem value={"50"}>
              <div>50</div>
            </SelectItem>
            <SelectItem value={"75"}>
              <div>75</div>
            </SelectItem>
            <SelectItem value={"100"}>
              <div>100</div>
            </SelectItem>
          </SelectContent>
        </Select>
      </div>
      {/* <div className="justify-start items-center gap-8 flex">
        <Image src={"/icons/arrow-left.svg"} alt={""} width={22} height={22} className="cursor-pointer"></Image>
        <Image src={"/icons/arrow-right.svg"} alt={""} width={22} height={22} className="cursor-pointer"></Image>
      </div> */}
    </div>
  );
};

export default PaginationControls;
