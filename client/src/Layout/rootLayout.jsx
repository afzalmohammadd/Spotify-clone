import React from "react";
import { Link } from "react-router-dom";
import { Outlet } from "react-router-dom";

function RootLayout() {
  return (
    <>
      <header className="bg-teal-200 h-14 flex flex-row justify-between items-center px-8 shadow-lg">
        <div className="flex flex-row items-center">
          <img className="h-10" src="/images/TuneLogo.png" alt="" />
          <span className="text-cyan-800 text-xl font-bold">TuneTide</span>
        </div>

        <nav>
          <ul className="text-black flex flex-row gap-4 items-center">
            <Link className="hover:text-red-400">Premium</Link>
            <Link className="hover:text-red-400">Support</Link>
            <Link className="hover:text-red-400">Download</Link>
            <span className="border-l-2 border-black ">&nbsp;</span>
            <Link className="hover:text-red-400">Signup</Link>
            <Link className="hover:text-red-400">Login</Link>
          </ul>
        </nav>
      </header>
      <main className="min-h-screen">
        <Outlet />
      </main>

      <footer className="bg-teal-200 px-8  ">
        <div className="flex flex-row items-center justify-between">
          <div className="flex flex-col items-center p-10 pl-14">
            <img className="h-24" src="/images/TuneLogo.png" alt="" />
            <span className="text-cyan-800 text-xl font-bold">TuneTide</span>
          </div>
          <div>
            <nav>
              <ul className="text-gray-700 text-lg font-semibold  flex flex-row gap-12 items-center">
                <Link className="hover:text-red-400">Premium</Link>
                <Link className="hover:text-red-400">Support</Link>
                <Link className="hover:text-red-400">Download</Link>
                <Link className="hover:text-red-400">Signup</Link>
                <Link className="hover:text-red-400">Login</Link>
              </ul>
            </nav>
          </div>
          <div className="flex flex-row items-center justify-between">
            <nav>
              <ul className="text-black flex flex-row gap-4 items-center">
                <Link to="support_link_url">
                  <img
                    className="w-8"
                    src="/icons/X.png"
                    alt="twitter"
                    class="logo"
                  />
                </Link>

                <Link to="download_link_url">
                  <img
                    className="w-8"
                    src="/icons/insta.png"
                    alt=""
                    class="logo"
                  />
                </Link>

                <Link to="signup_link_url">
                  <img
                    className="w-8"
                    src="/icons/fb.png"
                    alt="google+"
                    class="logo"
                  />
                </Link>
              </ul>
            </nav>
          </div>
        </div>
        <div className="px-24">
          <hr className="border-slate-700 px-8" />
        </div>
        <div className="text-center font-semibold py-4">
          <span>&copy; Copyright. All Rights Reserved</span>
        </div>
      </footer>
    </>
  );
}

export default RootLayout;
