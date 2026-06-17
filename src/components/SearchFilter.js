"use client";

import { FiSearch } from "react-icons/fi";

export default function SearchFilter({
  searchTerm,
  setSearchTerm,
  selectedCategory,
  setSelectedCategory,
  categories,
  sortBy,
  setSortBy,
}) {
  return (
    <div className="flex flex-col lg:flex-row gap-5 items-center justify-between mb-14">
      {/* SEARCH */}
      <div className="relative w-full lg:max-w-md">
        <FiSearch
          size={20}
          className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400"
        />

        <input
          type="text"
          placeholder="Search products..."
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
          className="w-full bg-white/5 border border-white/10 rounded-2xl pl-12 pr-4 py-4 outline-none focus:border-white/30 transition"
        />
      </div>

      {/* FILTER BUTTONS */}
      <div className="flex flex-wrap gap-3 justify-center lg:justify-end">
        <button
          onClick={() => setSelectedCategory("all")}
          className={`px-5 py-3 rounded-full border transition ${
            selectedCategory === "all"
              ? "bg-white text-black border-white"
              : "border-white/10 hover:bg-white/5"
          }`}
        >
          All
        </button>

        {categories.map((category) => (
          <button
            key={category}
            onClick={() => setSelectedCategory(category)}
            className={`px-5 py-3 rounded-full border capitalize transition ${
              selectedCategory === category
                ? "bg-white text-black border-white"
                : "border-white/10 hover:bg-white/5"
            }`}
          >
            {category}
          </button>
        ))}
      </div>
    </div>
  );
}
