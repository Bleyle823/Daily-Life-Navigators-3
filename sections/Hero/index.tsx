import HeroClient from "./Client";
import HeroServer from "./Server";

export default function HeroWrapper() {
  return (
    <div className="relative bg-[#0d1117]">
      <HeroClient />
      <HeroServer />
    </div>
  );
}
