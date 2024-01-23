import React from "react";
import { FaXTwitter } from "react-icons/fa6";
import { Link } from "react-router-dom";
export default function Twitter() {
  return (
    <Link to="https://www.facebook.com/?locale=ko_KR">
      <div className="w-6 h-6 duration-500 text-gray-300 hover:text-gray-500 cursor-pointer">
        <FaXTwitter size="full" />
      </div>
    </Link>
  );
}
