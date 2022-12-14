import React, { useEffect, useState } from "react";

// Import Material from Material Tailwind
import {
  Navbar,
  MobileNav,
  Typography,
  Button,
  IconButton,
} from "@material-tailwind/react";

export default function navbar() {
  // Create Temporary Variable Condition Mobile View
  const [openNav, setOpenNav] = useState(false);

  // Get name by Login
  var name = JSON.parse(localStorage.getItem("list"));

  // Create Function Condition Screen
  useEffect(() => {
    window.addEventListener(
      "resize",
      () => window.innerWidth >= 960 && setOpenNav(false)
    );
  }, []);

  async function logout() {
    localStorage.removeItem('list');
  }

  // Function Get List of Navbar
  const navList = (
    <ul className="mb-4 mt-2 flex flex-col gap-2 lg:mb-0 lg:mt-0 lg:flex-row lg:items-center lg:gap-6">
      <Typography
        as="li"
        variant="small"
        color="blue-gray"
        className="p-1 font-normal"
      >
        <a href="/dashboard" className="flex item-center">
          Home
        </a>
      </Typography>
      <Typography
        as="li"
        variant="small"
        color="blue-gray"
        className="p-1 font-normal"
      >
        <a href="/order" className="flex item-center">
          Order
        </a>
      </Typography>
      <Typography
        as="li"
        variant="small"
        color="blue-gray"
        className="p-1 font-normal"
      >
        <a href="/setup" className="flex item-center">
          Setup
        </a>
      </Typography>
      <Typography
        as="li"
        variant="small"
        color="blue-gray"
        className="p-1 font-normal"
      >
        <a href="/register" className="flex item-center">
          Register
        </a>
      </Typography>
      <Typography
        as="li"
        variant="small"
        color="blue-gray"
        className="p-1 font-normal"
        onClick={logout}
      >
        <a href="/" className="flex item-center">
          Logout
        </a>
      </Typography>
    </ul>
  );

  return (
    <div className="navbar">
      <Navbar className="mx-auto max-w-screen-xl py-2 px-4 lg:px-8 lg:py-4">
        <div className="container mx-auto flex items-center justify-between text-blue-gray-900">
          <Typography
            as="a"
            href="#"
            variant="small"
            className="mr-4 cursor-pointer py-1.5 font-normal"
          >
            <span>Pinjaman Offline</span>
          </Typography>
          <div className="hidden lg:block">{navList}</div>
          <IconButton
            variant="text"
            className="ml-auto h-6 w-6 text-inherit hover:bg-transparent focus:bg-transparent active:bg-transparent lg:hidden"
            ripple={false}
            onClick={() => setOpenNav(!openNav)}
          >
            {openNav ? (
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                className="h-6 w-6"
                viewBox="0 0 24 24"
                stroke="currentColor"
                strokeWidth={2}
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M6 18L18 6M6 6l12 12"
                />
              </svg>
            ) : (
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-6 w-6"
                fill="none"
                stroke="currentColor"
                strokeWidth={2}
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M4 6h16M4 12h16M4 18h16"
                />
              </svg>
            )}
          </IconButton>
        </div>
        <MobileNav open={openNav}>{navList}</MobileNav>
      </Navbar>
    </div>
  );
}
