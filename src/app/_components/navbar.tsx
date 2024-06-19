import Link from "next/link";
import { DropdownMenuButton } from "./dropdown-menu-button";

export default function Navbar() {
  return (
    <nav>
      <div>
        <h2 className="ml-4 text-4xl font-bold">Sean.W</h2>
      </div>
      <div className="block sm:hidden mr-4">
        <DropdownMenuButton />
      </div>
      <div className="hidden sm:block">
        <ul>
          <li>
            <Link href="/" className="hover:text-pink-600">
              Blog
            </Link>
          </li>
          <li>
            <Link href="/portfolio" className="hover:text-sky-500">
              Portfolio
            </Link>
          </li>
          <li>
            <Link href="/gallery" className="hover:text-lime-400">
              Gallery
            </Link>
          </li>
        </ul>
      </div>
    </nav>
  );
}
