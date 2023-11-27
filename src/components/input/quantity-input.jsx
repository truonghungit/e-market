import { useState } from "react";

export const QuantityInput = ({ min = 0, max = Number.MAX_SAFE_INTEGER }) => {
  const [value, setValue] = useState(0);

  const decrease = () => {
    if (value <= min) {
      return setValue(min);
    }

    return setValue(value - 1);
  };

  const increase = () => {
    if (value >= max) {
      return setValue(max);
    }

    return setValue(value + 1);
  };

  return (
    <div className="relative flex items-center max-w-[8rem]">
      <button
        onClick={decrease}
        type="button"
        className="bg-gray-100 hover:bg-gray-200 border border-gray-300 px-2 h-9 focus:ring-gray-100 focus:ring-2 focus:outline-none"
      >
        <svg
          className="w-3 h-3 text-gray-900 dark:text-white"
          aria-hidden="true"
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 18 2"
        >
          <path
            stroke="currentColor"
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            d="M1 1h16"
          />
        </svg>
      </button>
      <input
        type="text"
        className="w-10 bg-gray-50 border-x-0 border-y border-gray-300 h-9 text-center text-gray-900 text-sm focus:ring-blue-500 focus:border-blue-500 block py-2.5 "
        placeholder="1"
        value={value}
        onChange={(event) => setValue(event.target.value)}
      />
      <button
        onClick={increase}
        type="button"
        className="bg-gray-100 hover:bg-gray-200 border border-gray-300 px-2 h-9 focus:ring-gray-100 focus:ring-2 focus:outline-none"
      >
        <svg
          className="w-3 h-3 text-gray-900 dark:text-white"
          aria-hidden="true"
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 18 18"
        >
          <path
            stroke="currentColor"
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            d="M9 1v16M1 9h16"
          />
        </svg>
      </button>
    </div>
  );
};
