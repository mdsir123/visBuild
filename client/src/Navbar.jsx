import React from "react";

const Navbar = ({handleExport}) => {
  return (
    <div className="navbar fixed top-0 z-30 bg-base-100 bg-gradient-to-r from-purple-900 to-purple-700 text-white shadow-sm">
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
        <a style={{fontFamily:'syne'}} className="btn btn-ghost text-xl text-lime-500 hover:text-purple-900 font-black">visBuild</a>
      </div>
      <div className="flex-none">
        <button className="btn mx-2 rounded-xl" 
        onClick={handleExport}>
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
