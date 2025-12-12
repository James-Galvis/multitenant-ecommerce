"use client";

import { CustomCategory } from "@/types";
import Categories from "@/components/search-filters/categories";
import { SearchInput } from "@/components/search-filters/search-input";

interface Props {
  data: CustomCategory[];
}

export function SearchFilters({ data }: Props) {
  return (
    <div className="px-4 lg:px-12 py-8 border-b-3 flex flex-col gap-4 w-full">
      <SearchInput data={data} />
      <div className="hidden lg:block">
        <Categories data={data} />
      </div>
    </div>
  );
}
