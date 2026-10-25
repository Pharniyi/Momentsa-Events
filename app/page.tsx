import ExploreBtn from "@/components/ExploreBtn"
import EventCard from "@/components/EventCard"

const events = [
  {image: "/images/event1.png", title: "Event 1"},
  {image: "/images/event2.png", title: "Event 2"},
  {image: "/images/event3.png", title: "Event 3"},
  {image: "/images/event4.png", title: "Event 4"},
  {image: "/images/event5.png", title: "Event 5"},
]
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
            <ul className="events">
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