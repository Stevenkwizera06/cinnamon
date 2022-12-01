import React from 'react'

const Button = ({ title, fullWidth = false, width = 202 }) => {
  return (
    <button
      className={`bg-indigo-700 
      after:absolute relative 
      hover:after:duration-500 text-white hover:text-indigo-700 
      text-base font-cinnamonextralight px-7 py-3 h-14 `}
      style={{ width: fullWidth ? "100%" : width }}
    >
      <p className="hover:z-20 absolute w-full top-0 left-0 right-0 h-full flex justify-center items-center">
        {title}
      </p>
    </button>
  );
};

export default Button;