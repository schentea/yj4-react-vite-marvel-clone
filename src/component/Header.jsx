import React from "react";
import { FaSearch } from "react-icons/fa";
import LogoLarge from "../assets/png/Logo_large.png";
import { Link } from "react-router-dom";

export default function Header() {
  return (
    <>
      {/* 헤더 */}
      <section className="w-full h-12 flex justify-center bg-main-dark">
        <div className="relative max-w-7xl w-full h-full flex justify-between items-center text-white">
          {/* 왼 : 회원정보*/}
          <div className="flex h-full items-center text-sm space-x-2 border-l border-r border-gray-700 px-4">
            <span className=" inline-block bg-white w-5 h-5 text-main-dark text-right italic pr-0.5 rounded-full">
              IN
            </span>
            <span>최</span>
          </div>
          {/* 오 : 검색 */}
          <div className="px-4 h-full flex border-r border-l border-gray-700 items-center">
            <div className="flex h-full items-center space-x-2 ">
              <img
                className="h-[60%]  "
                src="https://cdn.marvel.com/u/prod/marvel/images/mu/web/2021/icon-mu-shield.png"
                alt=""
              />
              <div className=" inline-block text-center">
                <p className="text-sm">MARVEL UNLIMITED</p>
                <p className="text-xs">SUBSCRIBE</p>
              </div>
            </div>
            <div className="h-full flex items-center border-l border-gray-700 pl-4">
              <FaSearch />
            </div>
          </div>
          {/* 중 : 로고*/}
          <div className=" absolute h-full top-0 left-[50%] -translate-x-[50%]">
            <img className="h-full" src={LogoLarge} alt="" />
          </div>
        </div>
      </section>
      <section className="w-full flex justify-center text-white uppercase space-x-8 text-sm items-center h-10 bg-main-dark border-t border-gray-700">
        <p>news</p>
        <Link to="comics">
          <p>comics</p>
        </Link>
        <Link to="characters">
          <p>characters</p>
        </Link>
        <p>moview</p>
        <p>tv shows</p>
        <p>games</p>
        <p>video</p>
        <p>more</p>
      </section>
    </>
  );
}
