"use client";

import { Button } from "@/components/ui/button";
import React from "react";
import { github } from "../utils/icons";
import { useRouter } from "next/navigation";
import ThemeDropdown from "./ThemeDropDown/ThemeDropdown";
import SearchDialog from "./SearchDialog/SearchDialog";
import { useGlobalContext } from "../context/globalContext";

export default function Navbar() {
  const router = useRouter();
  const {state} = useGlobalContext();

  

  return (
    <div className="w-full py-4 flex items-center justify-between">
      <div className="left"></div>
      <div className="search-container flex shrink-0 w-full gap-2 sm:w-fit">
        <SearchDialog />
        <div className="btn-group flex items-center gap-2">
          <ThemeDropdown />
          <Button
            className="source-code flex items-center gap-2"
            onClick={() => {
              router.push("https://github.com");
            }}
          >
            {github} Source Code
          </Button>
        </div>
      </div>
    </div>
  );
}
