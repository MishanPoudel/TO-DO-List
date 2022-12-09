import React from "react";

export default function NavBar() {
  return (
    <>
      <div className="navbar bg-base-100">
        <div className="flex-none">
          <button className="btn btn-square btn-ghost">
          </button>
        </div>
        <div className="flex-1">
          <a className="btn btn-ghost normal-case text-xl" href="/">daisyUI</a>
        </div>
        <div className="flex-none">
          <button className="btn btn-square btn-ghost">
          </button>
        </div>
      </div>
    </>
  );
}
