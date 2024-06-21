import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "./ui/dropdown-menu";
import { HamburgerMenuIcon } from "@radix-ui/react-icons";
import Link from "next/link";
export function DropdownMenuButton() {
  return (
    <>
      <DropdownMenu>
        <DropdownMenuTrigger asChild>
          <HamburgerMenuIcon className="h-7 w-7" />
        </DropdownMenuTrigger>
        <DropdownMenuContent>
            <DropdownMenuItem asChild>
              <Link href="/" id="test" className="text-xl hover:text-pink-600">
                Blog
              </Link>
            </DropdownMenuItem>
          <DropdownMenuItem asChild>
            <Link href="/portfolio" className="text-xl hover:text-sky-500">
              Portfolio
            </Link>
          </DropdownMenuItem>
          <DropdownMenuItem asChild>
            <Link href="/gallery" className="text-xl hover:text-lime-400">
              Gallery
            </Link>
          </DropdownMenuItem>
        </DropdownMenuContent>
      </DropdownMenu>
    </>
  );
}
