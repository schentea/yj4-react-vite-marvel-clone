import { useQuery } from "react-query";
import Layout from "../component/Layout";
import Layout7 from "../component/Layout7";
import MainSlide from "../component/MainSlide";
import TitleImageBox from "../component/TitleImageBox";
import { apiGetComics } from "../Api";
import { motion } from "framer-motion";
import { useState } from "react";
import { FaChevronLeft, FaChevronRight } from "react-icons/fa";
import useMeasure from "react-use-measure";

const ListItem = ({ item, CARD_WIDTH, CARD_HEIGHT, MARGIN }) => (
  <div
    className="shrink-0"
    style={{
      width: CARD_WIDTH,
      height: CARD_HEIGHT,
      margin: MARGIN,
    }}
  >
    <div className="w-full h-[280px]">
      {/* 1 이미지 박스 */}
      <img
        className="w-full h-full object-cover object-center"
        src={`${item.thumbnail?.path}.${item.thumbnail.extension}`}
        alt="comic_img"
      />
    </div>
    {/* 2타이틀 */}
    <div>
      <h2 className="text-sm font-semibold">{item.title.substr(0, 20)}</h2>
      <h4 className="text-sm text-gray-500">{item.modified.substr(0, 10)}</h4>
    </div>
  </div>
);

export default function MainPage() {
  let lists; //fetch 요청한 배열을 받기 위한 변수
  const { data, isLoading } = useQuery(["getComics"], apiGetComics);
  if (!isLoading) {
    lists = data?.data.results;
  }
  console.log(isLoading);

  // motion
  const CARD_WIDTH = 195;
  const CARD_HEIGHT = 340;
  const MARGIN = 8;
  const CARD_SIZE = CARD_WIDTH + MARGIN + 8;
  const BREAKPOINT = {
    sm: 640,
    lg: 1024,
  };
  const [ref, { width }] = useMeasure();
  const [offset, setOffset] = useState(0);

  const CARD_BUFFER = width > BREAKPOINT.lg ? 3 : width > BREAKPOINT.sm ? 2 : 1;
  const CAN_SHIFT_LEFT = offset < 0;
  const CAN_SHIFT_RIGHT =
    Math.abs(offset) < CARD_SIZE * (lists?.length - CARD_BUFFER);

  const shiftLeft = () => {
    if (!CAN_SHIFT_LEFT) return;
    setOffset((pv) => (pv += CARD_SIZE));
  };

  const shiftRight = () => {
    if (!CAN_SHIFT_RIGHT) return;
    setOffset((pv) => (pv -= CARD_SIZE));
  };
  return (
    <>
      <Layout>
        {/* 메인 캐러셀 */}
        <MainSlide />
        {/* 코믹스 섹션 */}
        <TitleImageBox imgUrl="https://cdn.britannica.com/62/182362-050-BD31B42D/Scarlett-Johansson-Black-Widow-Chris-Hemsworth-Thor.jpg" />
        <section className="w-full flex justify-center">
          <div
            ref={ref}
            className="max-w-7xl w-full relative overflow-hidden bg-white -translate-y-12 p-2"
          >
            <motion.div
              animate={{
                x: offset,
              }}
              className="w-full flex"
            >
              {lists?.map((item, index) => (
                <ListItem
                  item={item}
                  key={index}
                  MARGIN={MARGIN}
                  CARD_WIDTH={CARD_WIDTH}
                  CARD_HEIGHT={CARD_HEIGHT}
                />
              ))}
            </motion.div>
            {/* 왼쪽 버튼 */}
            <motion.button
              initial={false}
              animate={{
                x: CAN_SHIFT_LEFT ? "0%" : "-100%",
              }}
              onClick={shiftLeft}
              className="absolute left-0 top-[35%] bg-slate-500/50 duration-100 p-3 pl-2 text-4xl text-white hover:pl-3"
            >
              <FaChevronLeft />
            </motion.button>
            {/* 오른쪽 버튼 */}
            <motion.button
              initial={false}
              animate={{
                x: CAN_SHIFT_RIGHT ? "0%" : "100%",
              }}
              onClick={shiftRight}
              className="absolute right-0 top-[35%] bg-slate-500/50 duration-100 p-3 pr-2 text-4xl text-white hover:pr-3"
            >
              <FaChevronRight />
            </motion.button>
          </div>
        </section>
      </Layout>
    </>
  );
}
