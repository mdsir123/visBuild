import React from "react";

const Navbar = () => {
  return (
    <div className="navbar fixed top-0 z-50 bg-base-100 bg-gradient-to-r from-lime-500 to-purple-900 text-white shadow-sm">
      <div className="flex-none">
        <button className="btn btn-square btn-ghost">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            className="inline-block h-5 w-5 stroke-current"
          >
            {" "}
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M4 6h16M4 12h16M4 18h16"
            ></path>{" "}
          </svg>
        </button>
      </div>
      <div className="flex-1">
        <a className="btn btn-ghost text-xl font-[] italic">VisBuild</a>
      </div>
      <div className="flex-none">
        <button className="btn mx-2 rounded-xl">
          {/* <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" className="size-[1.2em]" fill="currentColor"><path d="M22 4C22 3.44772 21.5523 3 21 3H3C2.44772 3 2 3.44772 2 4V20C2 20.5523 2.44772 21 3 21H21C21.5523 21 22 20.5523 22 20V4ZM4 15H7.41604C8.1876 16.7659 9.94968 18 12 18C14.0503 18 15.8124 16.7659 16.584 15H20V19H4V15ZM4 5H20V13H15C15 14.6569 13.6569 16 12 16C10.3431 16 9 14.6569 9 13H4V5ZM16 11H13V14H11V11H8L12 6.5L16 11Z"></path></svg> */}
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
            fill="currentColor"
            className="size-[1.2em]"
          >
            <path d="M3 19H21V21H3V19ZM13 5.82843V17H11V5.82843L4.92893 11.8995L3.51472 10.4853L12 2L20.4853 10.4853L19.0711 11.8995L13 5.82843Z"></path>
          </svg>
          Export
        </button>
        <button className="btn btn-square btn-ghost">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            className="inline-block h-5 w-5 stroke-current"
          >
            {" "}
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M5 12h.01M12 12h.01M19 12h.01M6 12a1 1 0 11-2 0 1 1 0 012 0zm7 0a1 1 0 11-2 0 1 1 0 012 0zm7 0a1 1 0 11-2 0 1 1 0 012 0z"
            ></path>{" "}
          </svg>
        </button>
      </div>
    </div>
  );
};

export default Navbar;
