import React from "react";

const Navbar = ({className}) => {
  return <nav className={`absolute top-0 left-0 z-10 flex items-center justify-between w-full px-20 py-8 ${className}`}>
    {/* left  */}
    <h1 className="text-3xl font-bold">Meditation</h1>
    {/* Right  */}
    <div className="flex items-center justify-between space-x-4">
        <div className="flex items-center gap-6 text-xl justify-evenly">
            <div className="transition-colors cursor-pointer">
                Home
            </div>
            <div className="transition-colors cursor-pointer">
                Services
            </div>
            <div className="transition-colors cursor-pointer">
                About Us
            </div>
            <div className="transition-colors cursor-pointer">
                Gallery
            </div>
        </div>
        <div>
            <div className="p-2 px-4 text-xl transition-all border rounded-lg cursor-pointer hover:text-white">
                Sign Up
            </div>
        </div>
    </div>
  </nav>;
};

export default Navbar;