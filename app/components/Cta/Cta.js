import React from 'react'
import Link from "next/link";
import CtaBackground from "@/app/assets/images/product-bg.png"

export default function Cta() {
  return (
    <>
    <section className='pt-[40px] pb-[150px] bg-cover bg-bottom' style={{ backgroundImage: `url(${CtaBackground.src})` }}>
        <div className="container">
            <div className="flex flex-col items-center text-center mb-[50px]">
                <h2 className='section-title mb-[20px]'><span className='font-normal'>Ready to Experience the <br />
                Future of Biometric Authentication With</span> <br /> Alice 1 and Alice 2?</h2>
                <p className='text-[24px] text-[#5E5E5E] mb-[60px]'>Download the Cetirc app and register in person with the Cetirc palm ID device today to unlock a new level of security and convenience!</p>
                <div className="flex items-center gap-8">
                    <Link href="/" className="primary-btn">Get started</Link>
                    <Link href="/" className="bordered-btn">Download app</Link>
                </div>
            </div>
        </div>
    </section>
    </>
  )
}
