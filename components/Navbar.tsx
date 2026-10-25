import Link from "next/link";
import Image from "next/image";

const Navbar = () => {
  return (
    <header>
        <nav>
            <Link href="/" className="flex items-center gap-2">
                <Image src="/images/Momentsa.png" alt="Momentsa Logo" width={24} height={24} />
                <p>Momentsa Events</p>
            </Link>

            <ul>
                <Link href="/events">Events</Link>
                <Link href="/about">About</Link>
                <Link href="/contact">Contact</Link>
            </ul>
        </nav>
    </header>
  )
}

export default Navbar