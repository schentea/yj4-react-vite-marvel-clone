import React from "react";
import { Link } from "react-router-dom";

export default function Button({ link, text }) {
  return (
    <Link to={link}>
      <div>
        <button
          className="uppercase px-10 py-4 font-bold bg-red-600  text-white duration-500 hover:bg-red-700"
          style={{
            clipPath:
              "polygon(11% 0, 100% 0, 100% 75%, 90% 100%, 0 100%, 0 23%)",
          }}
        >
          {text}
        </button>
      </div>
    </Link>
  );
}