import ElementisStoryClient from "./Client";
import ElementisStoryServer from "./Server";

export default function ElementisStory() {
  return (
    <div className="overflow-x-hidden bg-[#1e2a4a] px-3-75 py-40 text-[#f5e6c8] md:grid md:grid-cols-11 md:grid-rows-[repeat(2,auto)] md:gap-x-5 md:gap-y-24 md:px-16 md:py-50">
      <ElementisStoryServer />
      <ElementisStoryClient />
    </div>
  );
}
