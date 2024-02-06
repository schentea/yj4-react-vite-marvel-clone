import React from "react";
import { FaSearch } from "react-icons/fa";
import LogoLarge from "../assets/png/Logo_large.png";
import NavLink from "./NavLink";
import { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import ComicsComponent from "./menus/ComicsComponent";
import CharactersComponent from "./menus/CharactersComponent";
import MobileMenu from "./MobileMenu";

const MENUS = [
  {
    text: "news",
    href: "#",
    component: "",
  },
  {
    text: "comics",
    href: "/comics",
    component: ComicsComponent,
  },
  {
    text: "characters",
    href: "/characters",
    component: CharactersComponent,
  },
  {
    text: "movies",
    href: "/movies",
    component: "",
  },
  {
    text: "Tv show",
    href: "/tv",
    component: "",
  },
  {
    text: "games",
    href: "/games",
    component: "",
  },
  {
    text: "videos",
    href: "/videos",
    component: "",
  },
  {
    text: "more",
    href: "/more",
    component: "",
  },
];

export default function Header() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [menuContent, setMenuContent] = useState();

  return (
    <>
      {/* 헤더 */}
      <section className="w-full h-12 flex justify-center bg-main-dark">
        <div className="relative max-w-7xl w-full h-full flex justify-between items-center text-white">
          {/* 왼 : 회원정보*/}
          <div className="hidden md:flex h-full items-center text-sm space-x-2 border-l border-r border-gray-700 px-4">
            <span className=" inline-block bg-white w-5 h-5 text-main-dark text-right italic pr-0.5 rounded-full">
              IN
            </span>
            <span>최</span>
          </div>

          {/* 모바일 */}
          <MobileMenu />
          {/* 오 : 검색 */}
          <div className="px-4 h-full flex border-0 md:border-r md:border-l border-gray-700 items-center">
            <div className="hidden md:flex h-full items-center space-x-2 ">
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
      <div className="relative">
        <section className="w-full border border-gray-700 flex justify-center h-10 bg-main-dark text-white uppercase space-x-8 text-sm items-center">
          {MENUS.map((item, index) => (
            <NavLink
              menuOpen={menuOpen}
              setMenuOpen={setMenuOpen}
              key={index}
              href={item.href}
              component={item.component}
              setMenuContent={setMenuContent}
            >
              {item.text}
            </NavLink>
          ))}
        </section>
        {menuOpen && menuContent && (
          <AnimatePresence>
            <motion.div
              onMouseEnter={() => setMenuOpen(true)}
              onMouseLeave={() => setMenuOpen(false)}
              initial={{ opacity: 0, y: -5 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -5 }}
              transition={{ duration: 0.3, ease: "easeOut" }}
              className="z-50 absolute top-10 left-0 w-full shadow-lg bg-white"
            >
              <div className="absolute -top-2 left-0 right-0 h-10 bg-transparent" />
              {menuContent}
            </motion.div>
          </AnimatePresence>
        )}
      </div>
    </>
  );
}
