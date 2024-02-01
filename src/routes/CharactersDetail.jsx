import React from "react";
import Layout from "../component/Layout";
import { useParams } from "react-router-dom";
import { useQuery } from "react-query";
import { apiGetCharactersDetail } from "../Api";
import Button from "../component/Button";

export default function CharactersDetail() {
  let detail;
  const { id } = useParams();
  const { data, isLoading } = useQuery(
    ["getCharactersDetail", { id }],
    apiGetCharactersDetail
  );
  if (!isLoading) {
    detail = data?.data.results[0];
  }
  console.log(detail);
  return (
    <Layout>
      <div
        className="relative w-full flex justify-center py-16"
        style={{
          backgroundSize: "cover",
          backgroundPosition: "center",
          backgroundImage: `url('${detail?.thumbnail.path}.${detail?.thumbnail.extension}')`,
        }}
      >
        <div className="absolute top-0 left-0 w-full h-full bg-main-dark/95"></div>
        <div className="z-10 max-w-7xl w-full h-full grid grid-cols-[1fr_2fr]">
          {/* left */}
          <div className="w-full h-full flex">
            <img
              className="w-[85%] aspect-[2/3] object-cover"
              src={`${detail?.thumbnail.path}.${detail?.thumbnail.extension}`}
              alt="character_imgae"
            />
          </div>
          {/* right */}
          <div className="w-full h-full flex-col text-white space-y-8">
            <h1 className="text-xl font-semibold">{detail?.name}</h1>
            <div>
              <h2 className="text-xl font-semibold">Published</h2>
              <p>{detail?.modified?.substr(0, 10)}</p>
            </div>
            <div>
              <h2 className="text-xl font-semibold">Comics</h2>
              {detail?.comics?.items?.slice(0, 3).map((item, index) => (
                <p key={index}>{item?.name}</p>
              ))}
            </div>
            <div>
              <h2 className="text-xl font-semibold">Events</h2>
              {detail?.events?.items?.slice(0, 3).map((item, index) => (
                <p key={index}>{item?.name}</p>
              ))}
            </div>
            <div>
              <h2 className="text-xl font-semibold">Description</h2>
              <p className="w-[70%]">
                {detail?.description ? detail.description : "NotFonud"}
              </p>
            </div>
          </div>
        </div>
      </div>
      <div className="w-full flex justify-center">
        <div className="w-full h-100 bg-black flex justify-center">
          <div className="w-full h-full flex justify-center space-x-20">
            <img
              className="w-[30%] h-full"
              src="https://cdn.marvel.com/content/1x/01-mi-promo-april2020-featured-half-dsk-1140x680_0.jpg"
              alt=""
            />
            <div className="w-[30%] text-white flex flex-col justify-center items-center space-y-6">
              <h2 className="text-xl text-red-600 font-semibold">
                MARVEL INSIDER
              </h2>
              <h1 className="text-3xl font-bold">Watch, Earn, Redeem!</h1>
              <p className="text-xl font-semibold">
                Get rewarded for doing what you already do as a fan
              </p>
              <Button text="JOIN NOW"></Button>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
}
