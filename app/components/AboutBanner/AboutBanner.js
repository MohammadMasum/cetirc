import React from "react";
import Link from "next/link";
import Image from "next/image";
import BannerLinesBg from "@/app/assets/images/banner-lines-bg2.png";
import AboutBannerThumb from "@/app/assets/images/about-banner-thumb.png";

export default function AboutBanner() {
  return (
    <>
      <section className='banner-area relative z-10 overflow-hidden pt-[150px]'>
        <div className='container'>
          <div className="text-center">
            <h1 className="main-title !leading-[1.4] mb-[15px]"><span className="font-normal">The Secure Way to Identify and Palm Vein</span> <br /> Pay for Anything</h1>
            <p className="text-[#070707] max-w-[1000px] mb-[30px] mx-auto">Our highly secure palm vein biometrics technology helps millions of people and businesses authenticate payments and access control systems worldwide.</p>
            <div className="flex items-center justify-center mb-[20px]">
                <Link href="/" className="primary-btn">Get started</Link>
            </div>
            <Image className=''
              src={AboutBannerThumb}
              alt='About Banner Thumb'
            />
          </div>
        </div>
        <Image className='absolute top-0 right-0 z-20 w-full h-auto'
              src={BannerLinesBg}
              alt='Banner Lines Bg'
            />
      </section>
    </>
  );
}
