"use client";

import Link from "next/link";

const Header = () => {
  return (
    <header className="container items-center w-screen py-10 flex justify-between">
      <nav className="justify-between w-auto md:inline-block hidden">
        <Link href="#!" className="mr-20">
          Home
        </Link>
        <Link href="#!" className="mr-20">
          About
        </Link>
        <Link href="#!" className="mr-20">
          Contact
        </Link>
      </nav>
      <nav className="justify-between w-auto md:inline-block hidden">
        <Link href="/auth/login" className="mr-20">
          Login
        </Link>
        <Link href="/auth/register" className="mr-20">
          Register
        </Link>
      </nav>
    </header>
  );
};

export default Header;
