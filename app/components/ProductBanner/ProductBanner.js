import React from "react";
import Link from "next/link";
import Image from "next/image";
import BannerLinesBg from "@/app/assets/images/banner-lines-bg.png";
import ProductBannerThumb from "@/app/assets/images/product-banner-thumb.png";
import BannerEggShame from "@/app/assets/images/egg-shape.png";

export default function Banner() {
  return (
    <>
      <section className='banner-area relative z-10 overflow-hidden pt-[150px] pb-[40px]'>
        <div className='container'>
          <div className="grid grid-cols-2 items-center">
            <div className="z-30">
              <div className="subtitle">
                <span></span>
                <p>Product Details</p>
              </div>
              <h1 className="main-title !leading-[1.4] mb-[15px]"><span className="text-[48px] font-normal">Getting Started With </span>Alice 1 and Alice 2</h1>
              <p className="text-[#070707] max-w-[600px] mb-[30px]">Cetirc welcomes you to the world of palm vein biometrics with Alice 1 and Alice 2. We&apos;ve got you covered whether you&apos;re seeking secure payment solutions or advanced access control and identification services.This guide will walk you through getting started with Alice 1 and Alice 2, their features, and our security and privacy assurance when using the Cetirc palm vein biometrics products.</p>
            </div>
            <div className="relative z-50 -ml-[140px]">
                <Image className="" src={ProductBannerThumb} alt="Banner Thumb"/>
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
