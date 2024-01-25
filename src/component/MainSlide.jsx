import { useState } from "react";
import NoticeDisney from "./NoticeDisney";
import { testimonials } from "../lib/menus";
import FaceBook from "../assets/FaceBook";
import Insta from "../assets/Insta";
import Pinter from "../assets/Pinter";
import Button from "./Button";
import { motion } from "framer-motion";

const Card = ({
  mainTitle,
  logoImage,
  image,
  title,
  link,
  text,
  text2,
  link2,
  selected,
  setSelected,
  position,
}) => {
  const offset = position <= selected ? 0 : 100;
  return (
    <div className="w-full h-full flex justify-center">
      <motion.div
        initial={false}
        animate={{
          x: `${offset}%`,
        }}
        transition={{
          duration: 0.25,
          ease: "easeOut",
        }}
        style={{
          zIndex: position,
        }}
        onClick={() => setSelected(position)}
        className="absolute top-0 left-0 w-full min-h-full p-8 flex flex-col justify-center items-center"
      >
        <div className="absolute top-0 left-0 w-full h-full flex justify-center">
          <img
            className="w-full h-full object-cover object-center"
            src={image}
            alt={title}
          />
          <div className="absolute max-w-7xl w-full h-full flex flex-col text-white space-y-4 justify-center">
            {logoImage && (
              <div className="h-12">
                <img src={logoImage} alt="" className="h-full object-cover" />
              </div>
            )}
            <h1 className="text-4xl font-bold uppercase">{mainTitle}</h1>
            <p className="text-xl">
              Lorem ipsum dolor, sit amet consectetur adipisicing elit. Sed,
              nulla!
            </p>
            <div className="flex space-x-4">
              {link && <Button link={link} text={text} />}
              {link2 && <Button link={link2} text={text2} />}
            </div>
          </div>
        </div>
      </motion.div>
    </div>
  );
};

const SelectedBtns = ({ numTracks, setSelected, selected }) => {
  return (
    <div className="flex space-x-2">
      {numTracks.map((item, index, array) => (
        <button
          className="h-2 w-full bg-slate-300 relative"
          onClick={() => setSelected(index)}
          key={index}
        >
          {selected === index ? (
            <motion.span
              initial={{
                width: "0%",
              }}
              animate={{
                width: "100%",
              }}
              transition={{
                duration: 5,
                ease: "easeOut",
              }}
              onAnimationComplete={() => {
                setSelected(selected === array.length - 1 ? 0 : selected + 1);
              }}
              className=" absolute top-0 left-0 bg-red-600 w-full h-full"
            ></motion.span>
          ) : (
            <span
              className=" absolute top-0 left-0 bg-red-600"
              style={{
                width: selected > index ? "100%" : "0%",
              }}
            ></span>
          )}
          <p
            className={`w-full h-16 text-left item-start pt-4 px-1 text-gray-500 ${
              selected === index && "text-red-600"
            }`}
          >
            {item.title}
          </p>
        </button>
      ))}
    </div>
  );
};
export default function MainSlide() {
  const [selected, setSelected] = useState(0);
  return (
    <section className="w-full flex flex-col overflow-hidden">
      <NoticeDisney />
      {/* 그림 영역 */}
      <div className="relative w-full h-[550px] ">
        {testimonials.map((item, index) => (
          //5개중  1개 아이템
          <Card
            key={index}
            {...item}
            selected={selected}
            setSelected={setSelected}
            position={index}
          />
        ))}
      </div>
      {/* 버튼 영역 */}
      <div className="w-full flex h-[80px] justify-center z-10">
        <div className="max-w-7xl w-full h-full grid grid-cols-4">
          {/* 75% */}
          <div className="col-span-3 -translate-y-12 bg-white">
            <SelectedBtns
              numTracks={testimonials}
              setSelected={setSelected}
              selected={selected}
            />
          </div>
          {/* 25% */}
          <div className="flex space-x-4 w-full h-full justify-center items-center">
            <FaceBook />
            <Insta />
            <Pinter />
          </div>
        </div>
      </div>
    </section>
  );
}
