"use client";

import Categories from "@/components/search-filters/categories";
import { SearchInput } from "@/components/search-filters/search-input";

interface Props {
  data?: any;
}

export function SearchFilters({ data }: Props) {
  return (
    <div className="px-4 lg:px-12 py-8 border-b-3 flex flex-col gap-4 w-full">
      <SearchInput />
      <Categories data={data} />
    </div>
  );
}
