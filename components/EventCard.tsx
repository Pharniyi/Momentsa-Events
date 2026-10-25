import Link from "next/link";
import Image from "next/image";

interface Props {
  title: string;
  image: string;
}

const EventCard = ({title, image} : Props) => {
  return (
    <Link href={`/events/${title}`} className="flex flex-col items-center gap-2">
      <div className="event-card">
        <Image src={image} alt={title} width={300} height={200} />
      </div>
      <h4>{title}</h4>
    </Link>
  )
}

export default EventCard