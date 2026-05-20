import { useSearchParams } from "react-router-dom";

const Filter = ({ filterField, options }) => {
  const [searchParams, setSearchParams] = useSearchParams();

  const currentFilter = searchParams.get(filterField) || options[0].value;

  const handleClick = (value) => {
    searchParams.set(filterField, value);

    if (searchParams.get("page")) searchParams.set("page", 1);
    setSearchParams(searchParams);
  };

  return (
    <div
      className="flex items-center gap-2 rounded-md border border-gray-100 bg-white
  p-1 shadow-sm"
    >
      {options.map((option) => (
        <button
          key={option.value}
          onClick={() => handleClick(option.value)}
          disabled={option.value === currentFilter}
          className={`rounded-md px-3 py-1 text-sm font-medium transition-colors
  duration-300 ${
    option.value === currentFilter
      ? "bg-indigo-600 text-white"
      : "hover:bg-indigo-600 hover:text-white"
  }`}
        >
          {option.label}
        </button>
      ))}
    </div>
  );
};

export default Filter;
