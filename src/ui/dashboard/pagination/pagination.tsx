"use client";

import { usePathname, useRouter, useSearchParams } from "next/navigation";

interface PaginationProps {
  count: number;
}

const Pagination = ({ count }: PaginationProps) => {
  const searchParams = useSearchParams();
  const { replace } = useRouter();
  const pathname = usePathname();

  // Extract and parse the current page number, defaulting to 1 if not present
  const page = parseInt(searchParams.get("page") || "1", 10);
  const params = new URLSearchParams(searchParams);
  const ITEM_PER_PAGE = 2;

  const hasPrev = ITEM_PER_PAGE * (page - 1) > 0;
  const hasNext = ITEM_PER_PAGE * (page - 1) + ITEM_PER_PAGE < count;

  const handleChangePage = (type: "prev" | "next") => {
    const newPage = type === "prev" ? page - 1 : page + 1;
    params.set("page", newPage.toString());
    replace(`${pathname}?${params}`);
  };

  return (
    <div className="flex justify-center mt-4">
      <button
        className="bg-gray-500 text-white py-2 px-4 mx-2 rounded disabled:opacity-50 hover:bg-gray-600 disabled:hover:bg-gray-500"
        disabled={!hasPrev}
        onClick={() => handleChangePage("prev")}
      >
        Previous
      </button>
      <button
        className="bg-gray-500 text-white py-2 px-4 mx-2 rounded disabled:opacity-50 hover:bg-gray-600 disabled:hover:bg-gray-500"
        disabled={!hasNext}
        onClick={() => handleChangePage("next")}
      >
        Next
      </button>
    </div>
  );
};

export default Pagination;
