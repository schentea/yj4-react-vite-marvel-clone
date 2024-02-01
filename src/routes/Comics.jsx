import React from "react";
import Layout from "../component/Layout";
import { useQuery } from "react-query";
import { apiGetComics } from "../Api";
import TitleRotate from "../component/TitleRotate";

export default function Comics() {
  let comics;
  const { data, isLoading } = useQuery(["getCharacters"], apiGetComics);

  if (!isLoading) {
    comics = data?.data.results.slice(0, 7);
  }
  console.log(comics);
  return (
    <Layout>
      <div className="relative w-full h-[400px] flex justify-center">
        <div
          className="w-full h-full"
          style={{
            backgroundSize: "cover",
            backgroundImage:
              'url("https://cdn.marvel.com/u/prod/marvel/i/mg/b/d0/65b2b4bc56bd1.jpg")',
          }}
        ></div>
        <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-r from-gray-900 via-gray-900 via-30% to-transparent"></div>
        <div className="absolute top-1/3 left-1/2 -translate-x-1/2 text-white text-center space-y-6">
          <h1 className="text-4xl font-bold">MARVEL COMICS</h1>
          <p className="text-xl font-semibold">
            Get hooked on a hearty helping of heroes and villains from the
            humble House of Ideas!
          </p>
        </div>
      </div>
      <div className="w-full flex justify-center mt-10">
        <div className="max-w-7xl w-full h-80 flex flex-col">
          <div className="w-full h-[80%] flex justify-center items-center space-x-16">
            {comics?.map((item, index) => (
              <div key={index} className="flex w-[10%] h-[90%] ">
                <img
                  className="w-full h-full object-cover"
                  src={`${item?.thumbnail?.path}.${item?.thumbnail?.extension}`}
                  alt=""
                />
              </div>
            ))}
          </div>
        </div>
      </div>
    </Layout>
  );
}
