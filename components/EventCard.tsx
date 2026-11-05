import Link from "next/link";
import Image from "next/image";

interface Props {
  title: string;
  image: string;
  slug: string;
  location: string;
  date: string; 
  time: string;
}

const EventCard = ({title, image, slug, location, date, time} : Props) => {
  return (
    <Link href={`/events/${slug}`} className="flex flex-col items-center gap-2">
        
      <div className="event-card">
        <Image src={image} alt={title} width={300} height={200} />
      </div>
      <div className="flex flex-row gap-2">
          <Image src="icons/pin.svg" alt="location" width={20} height={20}/>
          <p>{location}</p>
      </div>
      <p className="font-bold">{title}</p>

      <div className="datetime flex gap-3">
        <div className="flex flex-row gap-2">
          <Image src="icons/calendar.svg" alt="date" width={20} height={20}/>
          <p>{date}</p>
        </div>

        <div className="flex flex-row gap-2">
          <Image src="icons/clock.svg" alt="time" width={20} height={20}/>
          <p>{time}</p>
        </div>

      </div>
    </Link>
  )
}

export default EventCard