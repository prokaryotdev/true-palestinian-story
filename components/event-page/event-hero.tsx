import Image from "next/image";
import clsx from "clsx";
import { ChevronLeft } from "lucide-react";


const EventHero = () => {

  const event = {
    id: "1",
    label: "The Great Arab Revolt",
    image: "/img1.png",
    title: "1936",
    desc: "Palestinian revolt against British colonial rule and mass Jewish immigration, demanding self-determination",
    brief: "Palestinian revolt against British colonial rule and mass Jewish immigration, demanding self-determination.Palestinian revolt against British colonial rule and mass Jewish immigration, demanding self-determination."
  };



  return (
    <div className="mx-auto mb-6 max-w-[1000px] md:mt-[10px] lg:mt-[10px] p-0">
      <div className="md:grid md:grid-cols-[auto_1fr_1fr] mt-0 gap-x-4">
        <div>
          <ChevronLeft
            className={clsx(
              "ml-8 h-12 w-12 md:mt-0"
            )}
          />
        </div>
        <div className="mr-[10px] mt-[10px]">
          <div className="mb-5 ml-6 line-clamp-4 text-2xl md:mx-0 md:line-clamp-5 font-extrabold uppercase">
            {event.desc}
          </div>
          <div className="text-6xl font-bold">
            {event.title}
          </div>
          <div className="col-span-7 row-span-3 mb-10 ml-6 line-clamp-3 max-h-[75px] text-sm md:order-3 md:col-span-1 md:row-span-1 md:mx-0 md:max-h-[112px] md:text-[1.1em] md:line-clamp-4 mt-5">
            {event.brief}
          </div>
        </div>
        <div
          className={clsx(
            "col-span-7 mb-5 ml-6 overflow-hidden md:col-span-1 md:mx-0"
          )}
        >
          <Image
            src={event.image}
            alt={event.label}
            width={377}
            height={372}
          />
        </div>
      </div>


    </div>
  );
};
export default EventHero;
