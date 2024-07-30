import Image from "next/image";
import { ChevronLeft } from "lucide-react";
import Link from "next/link";

const EventHero = () => {
  const event = {
    image: "/img1.png",
    year: "1936",
    title:
      "Palestinian revolt against British colonial rule and mass Jewish immigration, demanding self-determination",
    desc: "Palestinian Arabs rebelled against British Mandate rule and Jewish immigration, seeking self-determination and an end to Jewish land purchases. British authorities imposed martial law to quell the unrest.",
  };

  return (
    <div className="relative mx-auto mb-6 lg:mt-4">
      <div className="flex flex-col justify-between lg:flex-row lg:gap-x-8">
        <div className="lg:mr-10 lg:grow">
          <h2 className="mb-8 text-2xl font-extrabold uppercase">
            {event.title}
          </h2>
          <h1 className="mb-4 text-5xl font-bold">{event.year}</h1>
          <p className="mb-10 ml-2">{event.desc}</p>
        </div>
        <div className="px-2 lg:w-[1100px] lg:px-0">
          <Image
            src={event.image}
            alt={event.title}
            width={200}
            height={100}
            className="w-full border-2 object-cover shadow-md"
          />
        </div>
      </div>
      <Link
        href="/"
        className="absolute top-1 hidden lg:-left-20 lg:block xl:-left-28"
      >
        <ChevronLeft className="size-12 cursor-pointer font-extrabold" />
      </Link>
    </div>
  );
};

export default EventHero;
