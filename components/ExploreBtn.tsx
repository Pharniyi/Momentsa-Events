'use client'
import Image from "next/image";

const ExploreBtn = () => {
  return (
    <div>
    <button type="button" id="explore-btn" className="mt-7 mx-auto gap-1" onClick={() => console.log('Explore clicked')}>Explore
        <Image src="/icons/arrow-down.svg" alt="Explore" width={20} height={20} />
    </button>
    </div>
  )
}

export default ExploreBtn