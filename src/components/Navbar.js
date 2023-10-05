import Image from "next/image";
import { RxHamburgerMenu } from "react-icons/rx";
import Link from "next/link";

const Navbar = () => {
  return (
    <div className="flex justify-between items-center h-20 bg-gray-900 px-6">
      <div className=" w-32 h-auto sm:w-36 md:w-[300px]">
        <Link href={"/"}>
          <Image
            src={`/assets/superman.png`}
            width={90}
            height={64}
            alt={`Logo`}
          />
        </Link>
      </div>
      <nav className="hidden sm:block">
        <ul className="flex justify-end items-center gap-4">
          <li>
            <Link href={'/#peliculas-shows'}> Shows </Link>
          </li>
          <li>
            <Link href={"/about"}> About</Link>
          </li>
        </ul>
      </nav>
      <div className="sm:hidden">
        <RxHamburgerMenu size={20} color={`#ffffff`} />
      </div>
    </div>
  );
};

export default Navbar;
