import React from 'react'
import Link from "next/link";
import Image from "next/image";
import WorksIcon1 from "@/app/assets/images/works-icon.svg";
import WorksIcon2 from "@/app/assets/images/works-icon2.svg";
import WorksIcon3 from "@/app/assets/images/works-icon3.svg";


export default function HowItWorks() {
  return (
    <>
        <section className='py-[80px]'>
            <div className="container">
                <div className="flex flex-col items-center text-center mb-[50px]">
                    <div className="subtitle">
                        <span></span>
                        <p>How it works</p>
                    </div>
                    <h2 className='section-title max-w-[550px] mb-[5px]'><span className='font-normal'>Initiate Your</span> Secure Experience</h2>
                    <p className='text-[24px] text-[#5E5E5E] mb-[30px]'>This is all you need to get started</p>
                    <div className="flex items-center gap-8">
                        <Link href="/" className="primary-btn">Get started</Link>
                        <Link href="/" className="bordered-btn">Download app</Link>
                    </div>
                </div>
                <div className="grid grid-cols-3 gap-4">
                    {/* single box  */}
                    <div className="bg-[#F6FCEA] py-[45px] px-[30px] rounded-[43px] text-center">
                        <Image className="mb-[10px] mx-auto" src={WorksIcon1} alt="Works Icon1"/>
                        <h3 className='text-[30px] font-normal mb-[15px] leading-[1.3]'>Download the Alice 1 App for Free:</h3>
                        <p className='text-[#121212] text-[16px]'>Download and Register with Alice 1 to create an online profile and ID across all Cetirc palm vein and biometric products and partners. This includes Alice 2.</p>
                    </div>
                    {/* single box  */}
                    <div className="bg-[#F6FCEA] py-[45px] px-[30px] rounded-[43px] text-center">
                        <Image className="mb-[10px] mx-auto" src={WorksIcon2} alt="Works Icon2"/>
                        <h3 className='text-[30px] font-normal mb-[15px]'>Registration and Biometrics</h3>
                        <p className='text-[#121212] text-[16px]'>Complete KYC and basic biometrics and gain access to tier-1 and 2 offerings, which includes making payments.</p>
                    </div>
                    {/* single box  */}
                    <div className="bg-[#F6FCEA] py-[45px] px-[30px] rounded-[43px] text-center">
                        <Image className="mb-[10px] mx-auto" src={WorksIcon3} alt="Works Icon3"/>
                        <h3 className='text-[30px] font-normal mb-[15px]'>Activate Your Profile With the Alice 1</h3>
                        <p className='text-[#121212] text-[16px]'>Activate your profile with the Alice 1 device, and enjoy Cetirc’s full benefits and premium offerings, including restricted access control and point-of-sale (POS) payments.</p>
                    </div>
                </div>
            </div>
        </section>
    </>
  )
}
