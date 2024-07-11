import React from "react";
import Link from "next/link";
import Image from "next/image";
import BannerLinesBg from "@/app/assets/images/banner-lines-bg.png";
import BannerThumb from "@/app/assets/images/banner-thumb.png";
import BannerEggShame from "@/app/assets/images/egg-shape.png";

export default function Banner() {
  return (
    <>
      <section className='banner-area relative z-10 overflow-hidden'>
        <div className='container'>
          <div className="grid grid-cols-2 items-center">
            <div className="z-30">
              <div className="subtitle">
                <span></span>
                <p>Free Forever For All Users.</p>
              </div>
              <h1 className="main-title !leading-[1.4] mb-[15px]"><span className="text-[48px] font-medium">Experience Cutting-Edge</span> Palm Vein <span className="font-normal">Identity Service</span></h1>
              <p className="text-[#070707] max-w-[525px] mb-[30px]">Scan once, and you can authenticate, prove your identity, gain access control, and shop forever. It’s FREE, QUICK, and EASY.</p>
              <div className="flex items-center gap-8">
                <Link href="/" className="primary-btn">Get started</Link>
                <Link href="/" className="bordered-btn">Download app</Link>
              </div>
            </div>
            <div className="relative z-50 -ml-[100px] -mr-[80px]">
                <Image className="" src={BannerThumb} alt="Banner Thumb"/>
                <Image className="absolute left-[12%] bottom-[16%] -z-10" src={BannerEggShame} alt="Banner Egg Shape"/>
            </div>
          </div>
        </div>
        <Image className='absolute top-0 right-0 z-20 h-full'
              src={BannerLinesBg}
              alt='Banner Lines Bg'
            />
      </section>
    </>
  );
}
