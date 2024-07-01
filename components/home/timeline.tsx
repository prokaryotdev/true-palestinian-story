import Image from "next/image";
import clsx from "clsx";
import events from "./events";
import { ChevronRight } from "lucide-react";

const Timeline = () => {
  return (
    <div className="mx-auto mb-6 max-w-[1000px] md:mt-[150px] lg:mt-[160px]">
      {events.map((event, index) => (
        <div key={index}>
          <div className="md grid grid-cols-8 md:grid-cols-[1fr_auto_1fr] md:gap-x-16">
            <div className="row-span-2 flex max-w-10 flex-col items-center md:order-2 md:row-span-1">
              {/* Event Milestone Indicator*/}
              <div className="my-2 flex h-12 w-12 items-center justify-center rounded-full border-[3px] border-neutral-200 bg-neutral-950 shadow-lg">
                <Image
                  src={"/palestine.svg"}
                  alt={"palestine icon"}
                  width={12}
                  height={12}
                  className="h-12 w-12 rounded-full saturate-50"
                />
              </div>
              {/* Connecting dash */}
              <div className="flex h-[180px] w-4 flex-col items-center justify-around space-y-3 overflow-hidden">
                {[...Array(6)].map((_, i) => (
                  <div
                    className="min-h-[20px] w-[3px] rounded-full bg-[#A6A2A2] shadow-lg"
                    key={i}
                  ></div>
                ))}
              </div>
            </div>

            {/* Event Image */}
            <div
              className={clsx(
                "col-span-7 mb-5 ml-6 overflow-hidden md:col-span-1 md:mx-0",
                index === 0 ? "md:-translate-y-[40%]" : "md:-translate-y-[20%]",
                index % 2 !== 0 ? "md:order-3" : "md:order-1",
              )}
            >
              <Image
                src={event.image}
                alt={event.label}
                width={300}
                height={180}
                className="h-[110px] w-[180px] rounded-[8px] border-2 shadow-sm md:h-[150px] md:w-[250px] md:rounded-none md:border-[3px] md:shadow-lg lg:h-[180px] lg:w-[300px]"
              />
            </div>

            <div
              className={clsx(
                "col-span-7 mb-10 ml-6 flex max-h-[150px] cursor-pointer items-center transition-colors md:col-span-1 md:mx-0 md:max-w-[280px] md:items-start",
                "hover:text-black/90",
                index % 2 !== 0
                  ? "md:order-1 md:flex-row-reverse"
                  : "md:order-3",
              )}
            >
              {/* Event Title */}
              <div className="line-clamp-1 text-6xl font-bold">
                {event.title}
              </div>
              {/* Arrow Icon */}
              <div>
                <ChevronRight
                  className={clsx(
                    "ml-8 h-12 w-12 md:mt-2",
                    index % 2 !== 0 && "md:ml-0 md:mr-8 md:rotate-180",
                  )}
                />
              </div>
            </div>
          </div>

          {/* Event Months and Descriptions */}
          {event.month.map((item, monthIndex) => (
            <div
              className="grid grid-cols-8 md:grid-cols-[1fr_auto_1fr] md:gap-x-16"
              key={monthIndex}
            >
              <div className="row-span-2 flex max-w-10 flex-col items-center md:order-2 md:row-span-1">
                {/* Event Month Indicator */}
                <div className="my-2 h-6 w-6 rounded-full border-[3px] bg-black shadow-lg md:shadow-md"></div>
                {/* Connecting dash */}
                <div
                  className={clsx(
                    "flex w-4 flex-col items-center space-y-3",
                    monthIndex === event.month.length - 1
                      ? "h-[180px]"
                      : "h-[120px]",
                    index === events.length - 1 &&
                      monthIndex === event.month.length - 1 &&
                      "hidden",
                  )}
                >
                  {[
                    ...Array(monthIndex === event.month.length - 1 ? 6 : 4),
                  ].map((_, i) => (
                    <div
                      className="min-h-[20px] w-[3px] rounded-full bg-[#A6A2A2] shadow-lg md:shadow-sm"
                      key={i}
                    ></div>
                  ))}
                </div>
              </div>

              {/* Month Label */}
              <div className="col-span-7 ml-6 mt-1 line-clamp-1 pb-1 text-xl font-extrabold uppercase md:order-1 md:col-span-1 md:mx-0 md:max-h-[110px] md:text-right">
                {item.month}
              </div>

              {/* Month Description */}
               <p className="col-span-7 row-span-3 mb-10 ml-6 line-clamp-4 max-h-[92px] text-[1em] md:order-3 md:col-span-1 md:row-span-1 md:mx-0 md:max-h-[112px] md:text-[1.2em]">
                {item.desc}
              </p>
            </div>
          ))}
        </div>
      ))}
    </div>
  );
};

export default Timeline;
