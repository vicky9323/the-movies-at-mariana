import React from "react";
import Select from "react-select";
import { BsSearch } from "react-icons/bs";
import { useSearch } from "../../context/searchContext";

function ActionBand() {
  const {
    selectedOptions,
    handleSelection,
    searchQuery,
    handleSearch,
    ogOptions,
  } = useSearch();

  return (
    <div className="w-[95%] mx-auto bg-slate-300 h-auto my-5 items-center grid sm:grid-cols-2 md:grid-cols-3">
      <div className="w-full p-3 md:col-span-2">
        <Select
          id="multiSelect"
          options={ogOptions}
          isMulti
          value={selectedOptions}
          onChange={handleSelection}
          placeholder="Select genre to filter"
          className=""
          styles={{
            control: (provided) => ({
              ...provided,
              borderColor: "gray-400",
              "&:hover": {
                borderColor: "gray-600",
              },
              zIndex: 0,
            }),
          }}
        />
      </div>

      <div className="flex p-3">
        <input
          className="w-full p-1 focus:border-none focus:outline-none rounded-lg rounded-tr rounded-br"
          placeholder="Enter to search..."
          value={searchQuery}
          onChange={handleSearch}
        />
        <span className="bg-[#febd69] rounded-lg rounded-tl rounded-bl">
          <BsSearch size={20} className="m-2 text-gray-800" />
        </span>
      </div>
    </div>
  );
}

export default ActionBand;
