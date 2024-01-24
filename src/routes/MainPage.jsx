import { useState } from "react";
import Button from "../component/Button";
import Layout from "../component/Layout";
import NoticeDisney from "../component/NoticeDisney";
import { testimonials } from "../lib/menus";
import { motion } from "framer-motion";
import FaceBook from "../assets/FaceBook";
import Insta from "../assets/Insta";
import Pinter from "../assets/Pinter";

const Card = ({
  image,
  title,
  link,
  text,
  selected,
  setSelected,
  position,
}) => {
  const offset = position <= selected ? 0 : 100;
  return (
    <div className="w-full h-full flex justify-center relative">
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
        className="absolute top-0 left-0 w-full h-full flex justify-center"
      >
        <img className="w-full h-full object-cover" src={image} alt={title} />
        <div className="absolute max-w-7xl w-full h-full flex flex-col text-white space-y-4 justify-center">
          <h1 className="text-4xl font-bold uppercase">echo comics</h1>
          <p className="text-xl">
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Sed,
            nulla!
          </p>
          <Button link={link} text={text} />
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
export default function MainPage() {
  const [selected, setSelected] = useState(0);
  return (
    <>
      <Layout>
        <NoticeDisney />
        {/* 메인 캐러셀 */}
        <section className="w-full flex flex-col">
          {/* 그림 영역 */}
          <div className="w-full h-[450px] overflow-hidden">
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
          <div className="w-full flex h-[80px] justify-center">
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
      </Layout>
    </>
  );
}
