import Layout from "../component/Layout";
import ListCarousel from "../component/ListCarousel";
import MainSlide from "../component/MainSlide";
import TitleImageBox from "../component/TitleImageBox";
import { apiGetComics, apiGetEvents } from "../Api";
import { useInfiniteQuery, useQuery } from "react-query";
import TitleRotate from "../component/TitleRotate";
import Button from "../component/Button";

export default function MainPage() {
  let lists; //fetch 요청한 배열을 받기 위한 변수
  let events; //event fetch 요청한 배열을 받기 위한 변수
  const { data, isLoading } = useQuery(["getComics"], apiGetComics);
  if (!isLoading) {
    lists = data?.data.results;
  }
  const {
    data: dataEvents,
    isLoading: isLodingEvents,
    fetchNextPage, //다음페이지를 불러옴
    hasNextPage, //다음페이지가 있는지 true or false 반환
    isFetchingNextPage, //다음 페이지를 불러오는 중인지 판별하는 boolean
  } = useInfiniteQuery(
    //쿼리키, 캐시에 참조하는 레퍼런스
    ["getEvents"],
    //현재 어떤 페이지에 있는지 확인할 수 있는 파라미터
    //기본값은 undifiend
    //api가 요청할 떄  기본값으로 넣어서 사용가능
    ({ pageParam = 0 }) => apiGetEvents({ pageParam }),
    //다음페이지 (새데이터)를 불러올 때 마지막 페이지와 전체 페이지를 받아옴
    {
      getNextPageParam: (lastPage, pages) => {
        const limit = lastPage?.data?.limit;
        const count = lastPage?.data?.count;
        if (count === limit) {
          const nextPage = pages.length;
          return nextPage;
        } else {
          return null;
        }
      },
    }
  );
  // if (!eventLoding) {
  //   events = dataEvents?.data.results;
  // }

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
        <section className="w-full flex justify-center px-4">
          <div className="max-w-7xl w-full grid grid-cols-1 md:grid-cols-[7fr_3fr] space-x-10">
            {/* 1번 왼쪽 */}
            <div className="w-full h-full">
              {/* 타이틀 */}
              <TitleRotate text="THE EVENT" />
              {/* 이벤트 API에서 불러오기 */}
              <div className="w-full ">
                {dataEvents?.pages.map((page) =>
                  page?.data.results.map((item, index) => (
                    <div
                      key={index}
                      className="w-full md:h-64 flex flex-row space-x-10 border-b-2 pb-10 pt-10 items-center  "
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
                        <p className="font-semibold text-sm durantion-300 hover:text-red-500 cursor-pointer">
                          {item.description}
                        </p>
                        <p className="font-semibold text-sm text-gray-500">
                          {item.modified}
                        </p>
                      </div>
                    </div>
                  ))
                )}
              </div>
              {hasNextPage && (
                <div className="w-full flex justify-center pb-8 pt-4">
                  <Button
                    isFetching={isFetchingNextPage}
                    onClick={() => fetchNextPage()}
                    text="load more"
                    outline="outline"
                  />
                </div>
              )}
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
