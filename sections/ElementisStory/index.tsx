import ElementisStoryClient from "./Client";
import ElementisStoryServer from "./Server";

export default function ElementisStory() {
  return (
    <div className="overflow-x-hidden bg-[#2ec4b6] px-3-75 py-40 text-[#cbf3f0] md:grid md:grid-cols-11 md:grid-rows-[repeat(2,auto)] md:gap-x-5 md:gap-y-24 md:px-16 md:py-50">
      <ElementisStoryServer />
      <ElementisStoryClient />
    </div>
  );
}
