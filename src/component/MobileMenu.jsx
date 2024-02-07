import { IoMenu, IoClose } from "react-icons/io5";
import { motion, AnimatePresence } from "framer-motion";
import { useState } from "react";
import { FaSearch } from "react-icons/fa";
import { MENUS } from "./Header";
import { FaAngleRight } from "react-icons/fa";
import { Link } from "react-router-dom";

const MobileMenuLink = ({ menu }) => (
  <Link to={menu.href}>
    <div className="relative w-full flex justify-between p-4 cursor-pointer group">
      {/* 왼 */}
      <div>{menu.text}</div>
      {/* 오 */}
      <div>
        <FaAngleRight />
      </div>
      <div className="absolute left-2 right-2 bottom-0 origin-left h-[1px] scale-x-0 duration-300 bg-neutral-600 group-hover:scale-x-100" />
    </div>
  </Link>
);

export default function MobileMenu() {
  const [mobileOpen, setMobileOpen] = useState(false);
  return (
    <div className="block md:hidden">
      {/* 모바일일때 보여짐 */}
      <div
        onClick={() => setMobileOpen(true)}
        className="block md:hidden text-2xl px-4 cursor-pointer"
      >
        <IoMenu />
      </div>
      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            initial={{ x: "-100vw" }}
            animate={{ x: 0 }}
            exit={{ x: "-100vw" }}
            transition={{ duration: 0.2, ease: "easeOut" }}
            className="z-50 fixed left-0 top-0 bottom-0 flex h-screen w-full bg-main-dark"
          >
            <div className="w-full h-full">
              <div className="w-full flex justify-between p-3">
                <button
                  className=" text-2xl"
                  onClick={() => setMobileOpen(false)}
                >
                  <IoClose />
                </button>
                <button>
                  <FaSearch />
                </button>
              </div>
              <div>
                {MENUS.map((item, index) => (
                  <MobileMenuLink key={index} menu={item} />
                ))}
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
