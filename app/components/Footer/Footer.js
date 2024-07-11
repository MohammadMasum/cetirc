import React from 'react'
import Link from "next/link";
import Image from "next/image";
import FooterLogo from "@/app/assets/images/logo.svg";
import Footershape from "@/app/assets/images/footer-shape.png";
import { FaFacebook, FaLinkedin } from "react-icons/fa";
import { RiInstagramFill } from "react-icons/ri";

export default function Footer() {
  return (
    <>
        <footer>
            <div className="container">
                <div className="grid grid-cols-[5fr_7fr] gap-[100px] pt-[110px] pb-[45px]">
                    <div>
                        <Link className='mb-[10px] inline-block' href='/'>
                            <Image width={148} src={FooterLogo} alt='Header logo' />
                        </Link>
                        <h4 className='font-medium text-[24px] leading-[1.4] mb-[40px]'>Start Your Journey with Secure Authentication</h4>
                        <div className="flex items-center gap-[20px]">
                            <Link href="/" className="primary-btn !py-[10px] !px-[35px] !rounded-[8px]">Get started</Link>
                            <Link href="/" className="bordered-btn !py-[10px] !px-[35px] !rounded-[8px]">Download app</Link>
                        </div>
                    </div>
                    <div className='grid grid-cols-3 gap-[100px]'>
                        <div>
                            <h4 className='text-[24px] font-medium mb-[25px]'>Product</h4>
                            <ul className='grid gap-[15px]'>
                                <li><Link href='/'>Alice 1</Link></li>
                                <li><Link href='/'>Alice 2</Link></li>
                                <li><Link href='/'>How It Works</Link></li>
                            </ul>
                        </div>
                        <div>
                            <h4 className='text-[24px] font-medium mb-[25px]'>Cetirc</h4>
                            <ul className='grid gap-[15px]'>
                                <li><Link href='/'>About</Link></li>
                                <li><Link href='/'>Terms of Use</Link></li>
                                <li><Link href='/'>Data Privacy 
                                Disclosure</Link></li>
                                <li><Link href='/'>Contact Us</Link></li>
                                <li><Link href='/'>Get Help</Link></li>
                            </ul>
                        </div>
                        <div className='relative z-10'>
                            <Image className='absolute max-w-none -z-10 left-1/2 -top-[80px] translate-x-[-40%]' src={Footershape} alt='Footer Shape' />
                            <h4 className='text-[24px] font-medium mb-[25px] text-center'>Follow us</h4>
                            <ul className='flex gap-[23px]'>
                                <li><Link className='h-[43px] w-[43px] border border-[#B3B3B3] rounded-full flex items-center justify-center transition-all duration-300 hover:bg-black hover:text-white hover:border-black' href='/'><FaFacebook /></Link></li>
                                <li><Link className='h-[43px] w-[43px] border border-[#B3B3B3] rounded-full flex items-center justify-center transition-all duration-300 hover:bg-black hover:text-white hover:border-black' href='/'><FaLinkedin /></Link></li>
                                <li><Link className='h-[43px] w-[43px] border border-[#B3B3B3] rounded-full flex items-center justify-center transition-all duration-300 hover:bg-black hover:text-white hover:border-black' href='/'><RiInstagramFill /></Link></li>
                            </ul>
                        </div>
                    </div>
                </div>
                <div className="border-t border-[#8D8D8D] pt-[25px] pb-[60px]">
                    <p className='text-[#363636] text-center'>© 2024 Cetirc. All rights reserved.</p>
                </div>
            </div>
        </footer>
    </>
  )
}
