"use client";

import { Input } from "@/components/ui/input";
import { Search } from "lucide-react";
import { useAtom } from "jotai";
import { useState } from "react";
import { SearchUserID } from "./atom";

const SearchUser = () => {
  const [searchTerm, setSearchTerm] = useAtom(SearchUserID);
  return (
    <div className="relative w-full max-w-[250px]">
      <Input
        placeholder="Search user"
        value={searchTerm}
        onChange={(e) => setSearchTerm(e.target.value)}
        className="pl-10"
      />
      <Search
        className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-500"
        size={16}
      />
    </div>
  );
};

export default SearchUser;
