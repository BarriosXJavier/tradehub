"use client";

import { useParams, usePathname, useRouter } from "next/navigation";
import React from "react";

interface SearchBarProps {
  placeholder: string;
}

const SearchBar: React.FC<SearchBarProps> = ({ placeholder }) => {
  const searchParams = useParams();
  const { replace } = useRouter();
  const pathname = usePathname();

  const params = new URLSearchParams(searchParams as any);
  params.set("test", "value");

  replace(`${pathname}?${params.toString()}`);

  const handleSearch = (e: React.ChangeEvent<HTMLInputElement>) => {
    const params = new URLSearchParams(searchParams as any);
    params.set("q", e.target.value);
    replace(`${pathname}?${params.toString()}`);
  };

  return (
    <div>
      <input type="text" placeholder={placeholder} onChange={handleSearch} />
    </div>
  );
};

export default SearchBar;
