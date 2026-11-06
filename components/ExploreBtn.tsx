'use client'
import Image from "next/image";
import posthog from "posthog-js";
import { posthogLog } from "@/lib/posthog-log";

const ExploreBtn = () => {
  const handleExploreClick = () => {
    if (
      process.env.NEXT_PUBLIC_POSTHOG_KEY &&
      process.env.NEXT_PUBLIC_POSTHOG_HOST
    ) {
      posthog.capture("explore_clicked");
      posthogLog.info("Explore CTA selected", { interaction: "explore_cta" });
    }
    console.log("Explore clicked");
  };

  return (
    <div>
    <button type="button" id="explore-btn" className="mt-7 mx-auto gap-1" onClick={handleExploreClick}>Explore
        <Image src="/icons/arrow-down.svg" alt="Explore" width={20} height={20} />
    </button>
    </div>
  )
}

export default ExploreBtn