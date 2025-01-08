import Image from "next/image";
import Link from "next/link";
import React from "react";
import Theme from "./Theme";

const Navbar = () => {
  return (
    <nav className="flex-between background-light900_dark200 fixed z-50 w-full p-6 dark:shadow-none sm:px-12 shadow-light-300 gap-5">
          <Link href='/' className='flex items-center gap-1'>
              <Image
                  src="/images/site-logo01.svg"
                  alt="logo"
                  width={24}
                  height={24}
              />
              <p className="h2-bold font-space-grotesk text-dark-100 dark:text-light-900 max-sm:hidden">
                  Sky<span className="text-primary-500">Overflow</span>
              </p>    
              
          </Link>
          <p>Global Search</p>
          <div className="flex-between gap-5"><Theme /></div>
    </nav>
  );
};

export default Navbar;
