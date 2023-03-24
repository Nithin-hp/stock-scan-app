import React from "react";
import { NavLink } from "react-router-dom";
const DisplayList = ({ displayList }) => {
  return (
    <ul class="divide-y divide-gray-200">
      {displayList.map((value, index) => (
        <NavLink to={`details/${value.id}`} key={index}>
          <li>
            <div class="flex items-center px-4 py-4 sm:px-6">
              <div class="min-w-0 flex-1 sm:flex sm:items-center sm:justify-between">
                <p class="truncate font-medium text-indigo-600">{value.name}</p>
              </div>
              <div class="ml-16 flex flex-shrink-0">
                <p
                  class={`text-${value?.color}-800 inline-flex rounded-full px-2 text-xs font-semibold leading-5  bg-${value?.color}-100`}
                >
                  {value.tag}
                </p>
              </div>
              <div class="ml-5 flex-shrink-0">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke-width="1.5"
                  stroke="currentColor"
                  class="h-5 w-5 text-gray-400"
                >
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    d="M8.25 4.5l7.5 7.5-7.5 7.5"
                  ></path>
                </svg>
              </div>
            </div>
            <hr />
          </li>
        </NavLink>
      ))}
    </ul>
  );
};

export default DisplayList;
