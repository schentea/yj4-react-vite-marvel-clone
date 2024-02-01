import Layout from "../component/Layout";
import ListCarousel from "../component/ListCarousel";
import MainSlide from "../component/MainSlide";
import TitleImageBox from "../component/TitleImageBox";
import { apiGetComics, apiGetEvents } from "../Api";
import { useQuery } from "react-query";
import TitleRotate from "../component/TitleRotate";

export default function MainPage() {
  let lists; //fetch 요청한 배열을 받기 위한 변수
  let events; //event fetch 요청한 배열을 받기 위한 변수
  const { data, isLoading } = useQuery(["getComics"], apiGetComics);
  if (!isLoading) {
    lists = data?.data.results;
  }
  const { data: dataEvents, isLoading: eventLoding } = useQuery(
    ["getEvents"],
    apiGetEvents
  );
  if (!eventLoding) {
    events = dataEvents?.data.results;
  }
  console.log(events);
  return (
    <>
      <Layout>
        {/* 메인 캐러셀 */}
        <MainSlide />
        {/* 코믹스 섹션 */}
        <TitleImageBox
          imgUrl="https://cdn.britannica.com/62/182362-050-BD31B42D/Scarlett-Johansson-Black-Widow-Chris-Hemsworth-Thor.jpg"
          mainTitle="available now"
          subTitle="new on Marvel unlimited"
          description="Read these plus 30,000+ digital comics for $9.99 a month!"
          btnTxt="get marvel unlimited"
        />
        {/* 리스트 캐러셀 */}
        <ListCarousel lists={lists} />
        {/*  */}
        <section className="w-full flex justify-center">
          <div className="max-w-7xl w-full grid grid-cols-[7fr_3fr] space-x-10">
            {/* 1번 왼쪽 */}
            <div className="w-full h-full">
              {/* 타이틀 */}
              <TitleRotate text="THE EVENT" />
              {/* 이벤트 API에서 불러오기 */}
              <div className="w-full ">
                {events &&
                  events.map((item, index) => (
                    <div
                      key={index}
                      className="w-full flex flex-row space-x-10 border-b-2 pb-10 pt-10 items-center  "
                    >
                      <img
                        className="w-[40%] h-[200px] object-cover"
                        src={`${item.thumbnail.path}.${item.thumbnail.extension}`}
                        alt=""
                      />
                      <div className="w-[50%] flex flex-col space-y-4">
                        <h2 className="font-semibold text-gray-500 text-m">
                          {item.title}
                        </h2>
                        <p className="font-semibold text-lg durantion-300 hover:text-red-500 cursor-pointer">
                          {item.description}
                        </p>
                        <p className="font-semibold text-sm text-gray-500">
                          {item.modified}
                        </p>
                      </div>
                    </div>
                  ))}
              </div>
            </div>
            {/* 2번 오른쪽 */}
            <div className="w-full h-full">
              <div className="w-full relative">
                <div className="text-xl pt-8 text-center">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="186"
                    height="55"
                    viewBox="0 0 186 55"
                  >
                    <path
                      d="M21.4 1L1 21.4V717h264.6l20.4-20.4V1H21.4z"
                      mask="url(#border-line_svg__mask-2)"
                      stroke="#C6A972"
                      stroke-width="3"
                      fill="none"
                    ></path>
                  </svg>
                  COMICS
                </div>
                {lists?.slice(2, 7).map((item, index) => (
                  <div
                    className={`flex flex-row space-x-10 border-b-2 pb-10 pt-10 ${
                      index === 4 ? "border-b-0" : "border-b-2"
                    }`}
                    key={index}
                  >
                    <img
                      className="w-[35%] h-[80px] object-cover"
                      src={`${item.thumbnail?.path}.${item.thumbnail.extension}`}
                      alt=""
                    />
                    <div className="w-[60%] space-y-3">
                      <h2 className="font-semibold">
                        {item.title.substr(0, 24)}
                      </h2>
                      <p className="text-sm">{item.modified}</p>
                    </div>
                  </div>
                ))}
                <div className="absolute bottom-0 right-0">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="186"
                    height="55"
                    viewBox="0 0 186 55"
                  >
                    <path
                      d="M21.4 1L1 21.4V717h264.6l20.4-20.4V1H21.4z"
                      mask="url(#border-line_svg__mask-2)"
                      stroke="#C6A972"
                      stroke-width="3"
                      fill="none"
                      transform="rotate(-180 93 27.5)"
                    ></path>
                  </svg>
                </div>
              </div>
            </div>
          </div>
        </section>
      </Layout>
    </>
  );
}
