import React from "react";
import { FaSnapchatGhost } from "react-icons/fa";
import { Link } from "react-router-dom";
export default function SnapChat() {
  return (
    <Link to="https://www.facebook.com/?locale=ko_KR">
      <div className="w-6 h-6 duration-500 text-gray-300 hover:text-gray-500 cursor-pointer">
        <FaSnapchatGhost size="full" />
      </div>
    </Link>
  );
}
