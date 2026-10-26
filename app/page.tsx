import ExploreBtn from "@/components/ExploreBtn"
import EventCard from "@/components/EventCard"
import { events } from "@/lib/constants"

const page = () => {
  return (
     <section className="hero">
        <div className="hero-content text-center">
          <div className="eyebrow ">
            <span className="live-dot" />
            YOUR CITY. YOUR PEOPLE. YOUR MOMENT.
          </div>

          <h1>
            Life happens
            <br />
            <span>out there.</span>
          </h1>

          <p className="hero-description mt-5">
            Find the events worth leaving home for.
            Discover experiences, meet your people, and
            make every moment count.
          </p>

          <ExploreBtn />

          <div className="mt-20 space-y-7">
            <h3>Featured Events</h3>
            <ul className="events list-none">
              {events.map((event) => (
                <li key={event.title}>
                  <EventCard {...event} />
                </li>
              ))}
            </ul>
          </div>
        </div>


      </section>
  )
}

export default page