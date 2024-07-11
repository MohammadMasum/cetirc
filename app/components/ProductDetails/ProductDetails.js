import React from 'react'
import Image from "next/image";
import ProductDetailsIcon1 from "@/app/assets/images/product-details-icon1.svg";
import ProductDetailsIcon2 from "@/app/assets/images/product-details-icon2.svg";
import ProductDetailsIcon3 from "@/app/assets/images/product-details-icon3.svg";
import ProductDetailsIcon4 from "@/app/assets/images/product-details-icon4.svg";


export default function ProductDetails() {
  return (
    <>
        <section className='py-[140px]'>
            <div className="container">
                <div className="relative z-10 text-center mb-[40px]">
                    <div className="subtitle inline-block !mb-[20px]">
                        <span></span>
                        <p>Product Details</p>
                    </div>
                    <h2 className='section-title mb-[20px]'><span className='font-normal'>Exploring</span> Alice 1 and Alice 2</h2>
                    <p>&quot;Alice 1 and Alice 2 are cutting-edge palm vein identification services developed by Cetirc. Both products use palm vein biometrics, one of today&apos;s most secure and accurate biometric authentication methods.</p>
                </div>
                <div className="grid grid-cols-3 gap-y-[60px] gap-x-[120px]">
                    {/* single details box */}
                    <div>
                        <div className="flex items-center gap-[20px] mb-[20px]">
                            <Image className="h-[70px] w-[70px] min-w-[70px]" src={ProductDetailsIcon1} alt="Product Details Icon"/>
                            <h4 className='text-[24px] font-medium'>Alice 1 Features</h4>
                        </div>
                        <p className='text-[18px] text-[#686868]'>&quot;Use Alice 1 for secure palm vein payment services at POS and retail stores.&quot;</p>
                    </div>
                    {/* single details box */}
                    <div>
                        <div className="flex items-center gap-[20px] mb-[20px]">
                            <Image className="h-[70px] w-[70px] min-w-[70px]" src={ProductDetailsIcon1} alt="Product Details Icon 1"/>
                            <h4 className='text-[24px] font-medium'>Alice 2 Features</h4>
                        </div>
                        <p className='text-[18px] text-[#686868]'>&quot;Alice 2 offers advanced access control and identification capabilities.&quot;</p>
                    </div>
                    {/* single details box */}
                    <div>
                        <div className="flex items-center gap-[20px] mb-[20px]">
                            <Image className="h-[70px] w-[70px] min-w-[70px]" src={ProductDetailsIcon2} alt="Product Details Icon 2"/>
                            <h4 className='text-[24px] font-medium'>Registration</h4>
                        </div>
                        <p className='text-[18px] text-[#686868]'>&quot;Register with the Alice 1 app or offline using our Cetirc biometrics device. The app is free to download and easy to use.&quot;</p>
                    </div>
                    {/* single details box */}
                    <div>
                        <div className="flex items-center gap-[20px] mb-[20px]">
                            <Image className="h-[70px] w-[70px] min-w-[70px]" src={ProductDetailsIcon3} alt="Product Details Icon 3"/>
                            <h4 className='text-[24px] font-medium'>Biometric Authentication</h4>
                        </div>
                        <p className='text-[18px] text-[#686868]'>&quot;Both products use palm vein biometrics, one of today&apos;s most secure and accurate authentication methods.&quot;</p>
                    </div>
                    {/* single details box */}
                    <div>
                        <div className="flex items-center gap-[20px] mb-[20px]">
                            <Image className="h-[70px] w-[70px] min-w-[70px]" src={ProductDetailsIcon4} alt="Product Details Icon 4"/>
                            <h4 className='text-[24px] font-medium'>Cost Information </h4>
                        </div>
                        <p className='text-[18px] text-[#686868]'>&quot;Alice 1 hardware and Alice 2 access control come at competitive prices for enterprise/business use.&quot;</p>
                    </div>
                </div>
            </div>
        </section>
    </>
  )
}
