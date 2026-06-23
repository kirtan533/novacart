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
    <div className="mb-14">
      {/* TOP CONTROLS */}
      <div className="flex flex-col lg:flex-row gap-4 lg:items-center mb-8">
        {/* SEARCH */}
        <div className="relative flex-1">
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

        {/* SORT */}
        <select
          value={sortBy}
          onChange={(e) => setSortBy(e.target.value)}
          className="bg-white/5 border border-white/10 rounded-2xl px-4 py-4 text-white outline-none min-w-[220px]"
        >
          <option value="default" className="bg-black">
            Sort By
          </option>

          <option value="price-low" className="bg-black">
            Price: Low → High
          </option>

          <option value="price-high" className="bg-black">
            Price: High → Low
          </option>

          <option value="name-asc" className="bg-black">
            Name: A → Z
          </option>

          <option value="name-desc" className="bg-black">
            Name: Z → A
          </option>

          <option value="rating" className="bg-black">
            Rating
          </option>
        </select>

        {/* CLEAR */}
        <button
          onClick={() => {
            setSearchTerm("");
            setSelectedCategory("all");
            setSortBy("default");
          }}
          className="px-6 py-4 rounded-2xl border border-white/10 hover:bg-white/5 transition whitespace-nowrap"
        >
          Clear Filters
        </button>
      </div>

      {/* CATEGORY TITLE */}
      <p className="text-sm uppercase tracking-[3px] text-gray-500 mb-4">
        Categories
      </p>

      {/* CATEGORY CHIPS */}
      <div className="flex gap-3 overflow-x-auto scrollbar-none pb-2">
        <button
          onClick={() => setSelectedCategory("all")}
          className={`px-6 py-3 rounded-full whitespace-nowrap border transition ${
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
            className={`px-6 py-3 rounded-full  whitespace-nowrap capitalize border transition ${
              selectedCategory === category
                ? "bg-white text-black border-white"
                : "border-white/10 hover:bg-white/5"
            }`}
          >
            {category.replaceAll("-", " ")}
          </button>
        ))}
      </div>
    </div>
  );
}
