import React from 'react'
import Image from "next/image";
import ProductShape from "@/app/assets/images/product-shape.png"
import ProductBgShape from "@/app/assets/images/product-bg.png"
import ProductEggShape from "@/app/assets/images/egg-shape2.png"

export default function Products2() {
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
                    <h2 className='section-title'><span className='font-normal'>Explore Our</span> Products</h2>
                </div>
                <div className='grid grid-cols-2 gap-[50px]'>
                    {/* single box  */}
                    <div className='bg-white rounded-[37px] pt-[50px] px-[40px] pb-[50px] shadow-[0_30px_60px_rgba(0,0,0,0.08)]'>
                        <h1 className='section-title font-light mb-[80px] relative z-10 pl-[25px]'>
                            <Image className="absolute -left-[30px] -top-[40px] -z-10" src={ProductEggShape} alt="Egg Shape"/>
                            Alice 1
                        </h1>
                        <h4 className='text-[24px] font-medium mb-[15px]'>Register, Authenticate, Pay.</h4>
                        <p className='text-[#525050]'>Available for use across all Cetirc partners, users, and merchants worldwide.</p>
                    </div>
                    {/* single box  */}
                    <div className='bg-white rounded-[37px] pt-[50px] px-[40px] pb-[50px] shadow-[0_30px_60px_rgba(0,0,0,0.08)] translate-y-[55px]'>
                        <h1 className='section-title font-light mb-[80px] relative z-10 pl-[25px]'>
                            <Image className="absolute -left-[30px] -top-[40px] -z-10" src={ProductEggShape} alt="Egg Shape"/>
                            Alice 2
                        </h1>
                        <h4 className='text-[24px] font-medium mb-[15px]'>Access Control, Authenticate, Identify.</h4>
                        <p className='text-[#525050]'>Available for use across Cetirc partners and organizations worldwide.</p>
                    </div>
                </div>
            </div>
        </div>
      </section>
    </>
  )
}
