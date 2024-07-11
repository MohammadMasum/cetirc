import React from 'react'
import Image from "next/image";
import ProductShape from "@/app/assets/images/product-shape.png"
import ProductBgShape from "@/app/assets/images/product-bg.png"
import ProductEggShape from "@/app/assets/images/egg-shape2.png"

export default function Products() {
  return (
    <>
      <section className='bg-cover bg-no-repeat bg-bottom pt-[120px] pb-[90px]' style={{ backgroundImage: `url(${ProductBgShape.src})` }}>
        <div className="container">
            <div className="grid grid-cols-[4fr_8fr]">
                <div className="relative z-10">
                    <Image className="absolute -left-[100px] top-[25%] -z-10" src={ProductShape} alt="Product Shape"/>
                    <div className="subtitle">
                        <span></span>
                        <p>Our Products</p>
                    </div>
                    <h2 className='section-title'><span className='font-normal'>Explore Our</span> Solutions</h2>
                </div>
                <div className='grid grid-cols-2 gap-[50px]'>
                    {/* single box  */}
                    <div className='bg-white rounded-[37px] pt-[50px] px-[40px] pb-[50px] shadow-[0_30px_60px_rgba(0,0,0,0.08)]'>
                        <h1 className='section-title font-light mb-[15px] relative z-10 pl-[25px]'>
                            <Image className="absolute -left-[30px] -top-[40px] -z-10" src={ProductEggShape} alt="Egg Shape"/>
                            Alice 1
                        </h1>
                        <p className='text-[#525050]'>At the heart of Cetirc is Alice 1. Designed to enable you to register, scan your palm, make payments online, and gain lifetime access to all of our products and offerings. Download the Alice 1 app to begin.</p>
                    </div>
                    {/* single box  */}
                    <div className='bg-white rounded-[37px] pt-[50px] px-[40px] pb-[50px] shadow-[0_30px_60px_rgba(0,0,0,0.08)] translate-y-[55px]'>
                        <h1 className='section-title font-light mb-[15px] relative z-10 pl-[25px]'>
                            <Image className="absolute -left-[30px] -top-[40px] -z-10" src={ProductEggShape} alt="Egg Shape"/>
                            Alice 2
                        </h1>
                        <p className='text-[#525050]'>Alice 2 is our flagship universal and secure palm vein digital access control service. It’s your key to authorize any access control system using our palm vein authentication technology.</p>
                    </div>
                </div>
            </div>
        </div>
      </section>
    </>
  )
}
