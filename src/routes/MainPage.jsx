import { useQuery } from "react-query";
import Layout from "../component/Layout";
import Layout7 from "../component/Layout7";
import MainSlide from "../component/MainSlide";
import TitleImageBox from "../component/TitleImageBox";
import { apiGetComics } from "../Api";

export default function MainPage() {
  const { data, isLoading } = useQuery(["getComics"], apiGetComics);
  console.log(isLoading);
  return (
    <>
      <Layout>
        {/* 메인 캐러셀 */}
        <MainSlide />
        {/* 코믹스 섹션 */}
        <TitleImageBox imgUrl="https://cdn.britannica.com/62/182362-050-BD31B42D/Scarlett-Johansson-Black-Widow-Chris-Hemsworth-Thor.jpg" />
        <Layout7>
          <div className="w-full h-60 bg-red-500">
            {data?.data?.results.map((item, index) => (
              <div key={index}>{item.title}</div>
            ))}
          </div>
        </Layout7>
      </Layout>
    </>
  );
}
