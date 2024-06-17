import Link from "next/link";

export default function Navbar() {
  return (
    <nav>
      <div>
        <h2 className="ml-4 text-4xl font-bold">Sean.W</h2>
      </div>
      <ul>
        <li>
          <Link href="/">Blog</Link>
        </li>
        <li>
          <Link href="/portfolio">Portfolio</Link>
        </li>
        <li>
          <Link href="/gallery">Gallery</Link>
        </li>
      </ul>
    </nav>
  );
}
