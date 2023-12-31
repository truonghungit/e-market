import { useState } from "react";

export const QuantityInput = ({
  min = 1,
  max = Number.MAX_SAFE_INTEGER,
  onChange,
  ...props
}) => {
  const [value, setValue] = useState(props.value ?? 1);

  const decrease = () => {
    const newValue = value <= min ? min : value - 1;

    setValue(newValue);
    onChange(newValue);
  };

  const increase = () => {
    const newValue = value >= max ? max : value + 1;

    setValue(newValue);
    onChange(newValue);
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
