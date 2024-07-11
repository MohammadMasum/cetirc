import React from 'react'
import Link from "next/link";

export default function GetInTouch() {
  return (
    <>
    <section className='pt-[90px] bg-[#FBFFF4] mt-[220px] mb-[140px]'>
        <div className="container">
            <div className="grid grid-cols-[5fr_7fr] gap-x-[150px]">
                <div className="flex flex-col mb-[50px]">
                    <h2 className='section-title max-w-[550px] mb-[5px] font-normal'>Get in touch</h2>
                    <p className='text-[24px] text-[#5E5E5E] mb-[30px]'>Ready to experience the future of biometric authentication with Cetirc? Contact us today to learn more about our products and services.</p>
                    <div className="flex items-center gap-8">
                        <Link href="/" className="primary-btn">Contact us</Link>
                        <Link href="/" className="bordered-btn">Get Started</Link>
                    </div>
                </div>
                <div className='py-[55px] px-[50px] shadow-[0_30px_60px_rgba(0,0,0,0.08)] rounded-[30px] bg-white -translate-y-[220px]'>
                    <h2 className='section-title max-w-[550px] mb-[5px] font-normal'>Cetirc in the News</h2>
                    <p className='text-[24px] text-[#5E5E5E] mb-[30px]'>Get Cetirc newsletters, annual reports, blogs, and articles.</p>
                    <form action="#">
                        <div className="form-group mb-[30px]">
                            <input className='border border-[#ABABAB] bg-transparent rounded-[11px] leading-[70px] px-[30px] w-full text-[16px] font-normal' type="email" name="email" id="email" placeholder='Enter email'/>
                        </div>
                        <div className="form-group text-right">
                            <button className='primary-btn' type="submit">Submit</button>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    </section>
    </>
  )
}
