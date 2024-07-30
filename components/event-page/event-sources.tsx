"use client";
import React, { useState } from "react";
import { ChevronRight } from "lucide-react";
import Image from "next/image";
import clsx from "clsx";
import Link from "next/link";
import data from "./data";

const EventSources = () => {
  const [selectedTab, setSelectedTab] = useState("all");

  const handleTabClick = (tab: any) => {
    setSelectedTab(tab);
  };

  const filteredData =
    selectedTab === "all"
      ? data
      : data.filter((item) => item.type === selectedTab);

  return (
    <div className="mx-auto w-[95%] lg:w-auto">
      {/*Filter Tabs */}
      <div className="mx-auto mt-16 flex flex-wrap justify-center lg:my-4 lg:w-[90%] lg:space-x-16 lg:border lg:p-4 lg:shadow-inner">
        {["all", "books", "documentary", "articles"].map((tab) => (
          <button
            key={tab}
            className={`mb-4 mr-4 min-w-[100px] rounded-[40px] border-2 px-4 py-[6px] text-sm font-semibold focus:outline-none lg:mb-0 lg:mr-0 ${
              selectedTab === tab
                ? "border bg-black text-white"
                : "bg-[#EEF1F4] text-gray-800"
            }`}
            onClick={() => handleTabClick(tab)}
          >
            {tab.charAt(0).toUpperCase() + tab.slice(1)}
          </button>
        ))}
      </div>

      {/* Books Section */}
      {selectedTab === "books" || selectedTab === "all" ? (
        <>
          <div className="mb-16 mt-8 flex items-center gap-4 before:h-px before:flex-1 before:bg-gray-300 before:content-[''] after:h-px after:flex-1 after:bg-gray-300 after:content-[''] lg:my-16">
            Books
          </div>
          <div className="mb-4 flex flex-wrap justify-between">
            {filteredData
              .filter((item) => item.type === "books")
              .map((book) => (
                <Link
                  href={""}
                  key={book.id}
                  className="flex w-[45%] cursor-pointer flex-col justify-around rounded-lg border-gray-200 bg-white lg:w-[130px] lg:justify-between"
                >
                  <div>
                    <Image
                      src={`/book${book.id}.jpg`}
                      alt={book.title}
                      width={160}
                      height={100}
                      className="mb-4 w-full border shadow-sm lg:w-[130px]"
                    />
                    <h1 className="font-bolder mb-3 min-h-[70px] px-2 text-lg font-bold text-gray-950">
                      {book.title}
                    </h1>
                  </div>

                  <div className="p-4">
                    {book.author && (
                      <div>
                        <div className="mb-1 text-[15px] font-bold">
                          {book.author}
                        </div>
                        <p className="text-sm font-semibold text-gray-600">
                          {book.year}
                        </p>
                      </div>
                    )}
                  </div>
                </Link>
              ))}
          </div>
        </>
      ) : null}

      {/* Documentary Section */}
      {selectedTab === "documentary" || selectedTab === "all" ? (
        <>
          <div className="my-16 flex items-center gap-4 before:h-px before:flex-1 before:bg-gray-300 before:content-[''] after:h-px after:flex-1 after:bg-gray-300 after:content-['']">
            Documentary
          </div>
          {/* Card */}
          {filteredData
            .filter((item) => item.type === "documentary")
            .map((documentary, index) => (
              <Link className="mb-6 block" href="">
                <div className="flex flex-col justify-between lg:flex-row">
                  <div className="w-full rounded-[16px] lg:w-[25%]">
                    <Image
                      src={`/img${index + 4}.png`}
                      alt={documentary.title}
                      width={16 * 10}
                      height={9 * 10}
                      className="mb-4 w-full shadow-sm"
                    />
                  </div>

                  <div className="lg:w-[70%]">
                    <h3 className="mb-1 text-xl font-semibold text-gray-800">
                      {documentary.title}
                    </h3>
                    <p className="mb-2 text-sm text-gray-600">
                      {documentary.description}
                    </p>
                    <p className="flex items-center space-x-1 text-sm font-medium text-green-600">
                      <span>Read More</span>

                      <ChevronRight className="w-4 font-light" />
                    </p>
                  </div>
                </div>
              </Link>
            ))}
          {/* End Card */}
        </>
      ) : null}

      {/* Articles Section */}
      {selectedTab === "articles" || selectedTab === "all" ? (
        <div>
          <div className="my-16 flex items-center gap-4 before:h-px before:flex-1 before:bg-gray-300 before:content-[''] after:h-px after:flex-1 after:bg-gray-300 after:content-['']">
            Articles
          </div>
          {/* Content */}
          <div>
            {filteredData
              .filter((item) => item.type === "articles")
              .map((article, index) => (
                <Link
                  href={""}
                  key={article.id}
                  className={clsx(
                    "flex cursor-pointer flex-col justify-between border-b p-10 px-0 lg:flex-row lg:items-center",
                    index === 0 && "pt-0",
                    index ===
                      filteredData.filter((item) => item.type === "articles")
                        .length -
                        1 && "border-b-0",
                  )}
                >
                  <h1 className="mb-2 text-xl font-bold lg:mb-0 lg:w-[25%]">
                    {article.title}
                  </h1>
                  <p className="lg:w-[50%]">{article.summary}</p>
                  <div className="hidden w-[10%] justify-end lg:flex">
                    <span className="flex size-[40px] items-center justify-center rounded-full border-2 bg-black text-white shadow-sm">
                      <ChevronRight />
                    </span>
                  </div>
                </Link>
              ))}
          </div>
        </div>
      ) : null}
    </div>
  );
};

export default EventSources;
