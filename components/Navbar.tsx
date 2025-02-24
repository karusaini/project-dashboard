"use client";

import { Bell } from "lucide-react";
import Image from "next/image";

export default function Navbar() {
  return (
    <nav className="bg-[#1E2131] text-white px-10 py-4 flex items-center justify-between shadow-md">
      {/* Left Side - Logo */}
      <div className="flex items-center">
        <h1 className="text-2xl font-bold tracking-wide">
          <span className="text-teal-400">H</span>OURS
        </h1>
      </div>

      {/* Center - Navigation Links (Hover Effect Only) */}
      <div className="flex space-x-8 text-sm font-medium">
        {["Dashboard", "Projects", "Team", "Clients", "Time", "Reports"].map(
          (item, index) => (
            <span
              key={index}
              className="relative pb-1 hover:text-gray-300 transition-all cursor-pointer"
            >
              {item}
              {item === "Dashboard" && ( // Active link underline
                <span className="absolute left-0 -bottom-1 h-[2px] w-full bg-teal-400"></span>
              )}
            </span>
          )
        )}
      </div>

      {/* Right Side - Notification & Profile */}
      <div className="flex items-center space-x-6">
        <Bell className="w-5 h-5 cursor-pointer hover:text-gray-300" />
        <div className="flex items-center space-x-2 cursor-pointer">
          <Image
            src="/avatar.png"
            alt="User Avatar"
            width={30}
            height={30}
            className="rounded-full"
          />
          <span className="font-medium text-sm">Mario ▾</span>
        </div>
      </div>
    </nav>
  );
}
