import EventHero from "@/components/event-page/event-hero";
import EventSources from "@/components/event-page/event-sources";
const page = () => {
  return (
    <div className="mx-auto w-full max-w-[800px]">
      <EventHero />
      <EventSources />
    </div>
  );
};

export default page;
