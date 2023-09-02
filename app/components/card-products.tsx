'use client'
import { IconSearch } from "@tabler/icons-react";

export default function CardProducts({image, name, linePrice, canonicalUrl}: {image: string, name: string, linePrice: string, canonicalUrl: string}) {
  function handleOnClick ():void{
    fetch(canonicalUrl,{})
  }
  return (
    <div className="flex w-full bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
    <a href="#">
      <img className="rounded-t-lg" src={image} alt="" />
    </a>
    <div className="p-5">
      <a href="#">
        <h5 className="mb-2 text-xl font-bold tracking-tight text-gray-900 dark:text-white">
          {name}
        </h5>
      </a>
      <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">
        {linePrice}
      </p>
      <button
        onClick={handleOnClick}
        className="inline-flex items-center px-3 py-2 text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
      >
        Details
        <IconSearch />
      </button>
    </div>
  </div>
  );
}
