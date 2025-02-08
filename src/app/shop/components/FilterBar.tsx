"use client"; // ✅ Required for useState and event handlers

import { useState } from "react";
import { FaFilter, FaTh, FaBars } from "react-icons/fa";

interface FilterBarProps {
  totalResults: number;
  resultsPerPage: number;
  setResultsPerPage: (num: number) => void;
  setSortOrder: (order: string) => void;
}

export default function FilterBar({
  totalResults,
  resultsPerPage,
  setResultsPerPage,
  setSortOrder,
}: FilterBarProps) {
  const [isGridView, setIsGridView] = useState(true);

  return (
    <div className="bg-gray-100 p-4 rounded-md flex flex-wrap justify-between items-center gap-4">
      {/* Left Section: Filter & View Toggle */}
      <div className="flex items-center gap-4">
        <button className="flex items-center gap-2 bg-gray-200 px-3 py-2 rounded-md">
          <FaFilter /> Filter
        </button>

        {/* Grid / List Toggle */}
        <div className="flex gap-2">
          <button
            onClick={() => setIsGridView(true)}
            className={`p-2 rounded ${isGridView ? "bg-gray-300" : ""}`}
          >
            <FaTh />
          </button>
          <button
            onClick={() => setIsGridView(false)}
            className={`p-2 rounded ${!isGridView ? "bg-gray-300" : ""}`}
          >
            <FaBars />
          </button>
        </div>
      </div>

      {/* Center Section: Results Info (Hidden on Small Screens) */}
      <p className="text-gray-700 text-sm sm:block hidden">
        Showing 1-{resultsPerPage} of {totalResults} results
      </p>

      {/* Right Section: Results Per Page & Sorting */}
      <div className="flex flex-wrap items-center gap-4">
        {/* Show Per Page (Responsive Input) */}
        <label className="flex items-center gap-2 text-sm">
          Show
          <input
            type="number"
            min="1"
            max={totalResults}
            value={resultsPerPage}
            onChange={(e) => setResultsPerPage(Number(e.target.value))}
            className="w-12 border p-1 text-center rounded"
          />
        </label>

        {/* Sorting Dropdown */}
        <label className="flex items-center gap-2 text-sm">
          Sort by
          <select
            onChange={(e) => setSortOrder(e.target.value)}
            className="border p-2 rounded"
          >
            <option value="default">Default</option>
            <option value="low-to-high">Price: Low to High</option>
            <option value="high-to-low">Price: High to Low</option>
          </select>
        </label>
      </div>
    </div>
  );
}
