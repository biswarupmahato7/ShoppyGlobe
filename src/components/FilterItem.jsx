// eslint-disable-next-line no-unused-vars
import React from 'react';

const FilterItem = (props) => {
  return (
    <div className="p-2 lg:p-2 md:p-2 flex justify-center ">
      <ul className="flex flex-col items-center ">
        <li className="text-center ">
          <img
            src={props.imgSrc}
            alt={props.title}
            className="h-12 w-12 sm:h-14 sm:w-14 md:h-16 md:w-16 lg:h-20 lg:w-20 mx-auto rounded-full border-2 border-gray-500 shadow-sm "
          />
          <p className="mt-2 text-xs sm:text-sm md:text-base font-semibold text-gray-700">
            {props.title}
          </p>
        </li>
      </ul>
    </div>
  );
};

export default FilterItem;
