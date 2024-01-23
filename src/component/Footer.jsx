import React from "react";
import FooterLogo from "../assets/png/Logo_small.png";
import FaceBook from "../assets/FaceBook";
import Twitter from "../assets/twitter";
import Insta from "../assets/insta";
import Tumblr from "../assets/tumblr";
import Youtube from "../assets/Youtube";
import SnapChat from "../assets/SnapChat";
import Pinter from "../assets/Pinter";

export default function Footer() {
  return (
    <div className="bg-main-dark w-full flex justify-center  py-16">
      <div className="max-w-7xl w-full flex justify-between text-white">
        {/* 1.logo */}
        <div className="flex space-x-8">
          {/* 로고 */}
          <div>
            <img src={FooterLogo} alt="footer_logo" />
          </div>
          {/* 2 */}
          <div className="space-y-2">
            <p>ABOUT MARVEL</p>
            <p>HELP/FAQS</p>
            <p>CAREERS</p>
            <p>INTERNSHIPS</p>
          </div>
          {/* 3 */}
          <div className="space-y-2">
            <p>ADVERTISEMENT</p>
            <p>DISNEY+</p>
            <p>MARVELHQ.COM</p>
            <p>REDEEM DIGITAL</p>
          </div>
        </div>

        {/* 2.ads */}
        <div className="space-y-8">
          {/* 1.위 */}
          <div className="flex space-x-4">
            {/* image */}
            <div className="h-8">
              <img
                className="h-full"
                src="https://cdn.marvel.com/content/1x/marvel_insider-topnav-logo-large2x.png"
                alt=""
              />
            </div>
            {/* description */}
            <div className="text-white ">
              <h2 className="font-semibold">MARVEL INSIDER</h2>
              <p className="text-gray-500 text-sm">
                Get Rewarded for Being a Marvel Fan
              </p>
            </div>
          </div>
          {/* 2.아래 */}
          <div className="flex space-x-4">
            {/* image */}
            <div className="h-8">
              <img
                className="h-full"
                src="https://cdn.marvel.com/content/1x/mu-logo-w-nav-2x-2021-02.png"
                alt=""
              />
            </div>
            {/* description */}
            <div className="text-white ">
              <h2 className="font-semibold">MARVEL UNLIMIED</h2>
              <p className="text-gray-500 text-sm">
                Access Over 30,000+ Digital Comics
              </p>
            </div>
          </div>
        </div>
        {/* 3.아이콘 */}
        <div className="space-y-6">
          <h3>FOLLOEW MARVEL</h3>
          <div className="grid grid-cols-4 gird-row-2 gap-x-10 gap-y-6">
            <p>
              <FaceBook />
            </p>
            <p>
              <Twitter />
            </p>
            <p>
              <Insta />
            </p>
            <p>
              <Tumblr />
            </p>
            <p>
              <Youtube />
            </p>
            <p>
              <SnapChat />
            </p>
            <p>
              <Pinter />
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
