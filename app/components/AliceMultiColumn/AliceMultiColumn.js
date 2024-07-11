import React from 'react'
import { IoMdCheckmarkCircle } from "react-icons/io";
import Image from "next/image";
import backgroundShape from "@/app/assets/images/product-bg.png";
import MachineThumb from "@/app/assets/images/payment-machine.png";
import SecurityThumb from "@/app/assets/images/secure-thumb2.png";


export default function AliceMultiColumn() {
  return (
    <>
        <section className='relative z-10 pt-[70px]'>
            <Image className="absolute left-0 top-0 w-full -z-10" src={backgroundShape} alt="Background shape"/>
            <Image className="absolute right-0 top-[50px] w-1/2 -z-10" src={MachineThumb} alt="Background shape"/>
            <div className="container">
                {/* first column  */}
                <div className="grid grid-cols-2">
                    <div>
                        <h2 className='section-title font-normal mb-[15px]'>Convenient Payments With Alice 1</h2>
                        <p className='text-[24px] mb-[35px]'>We created Alice 1 to make your POS and retail transactions seamless and quick wherever you go worldwide.</p>
                        <ul className='flex flex-col gap-[30px] w-[85%]'>
                            <li className="flex gap-[15px] bg-white border border-[#A9ED12] rounded-[20px] py-[20px] px-[15px] mr-[50px]">
                                <span className='text-[#424242] mt-[5px]'><IoMdCheckmarkCircle /></span>
                                Register once, and pay for your favorite items forever, anywhere, anytime
                            </li>
                            <li className="flex gap-[15px] bg-white border border-[#A9ED12] rounded-[20px] py-[20px] px-[15px] ml-[50px]">
                                <span className='text-[#424242] mt-[5px]'><IoMdCheckmarkCircle /></span>
                                It’s contactless and secure: All you need to do is hover your palm on the POS device
                            </li>
                            <li className="flex gap-[15px] bg-white border border-[#A9ED12] rounded-[20px] py-[20px] px-[15px] mr-[50px]">
                                <span className='text-[#424242] mt-[5px]'><IoMdCheckmarkCircle /></span>
                                You’re in full control: You decide where and when to use or approve your palm ID
                            </li>
                        </ul>
                    </div>
                </div>
                {/* first column  */}
                <div className="grid grid-cols-2 gap-[40px] mt-[-100px]">
                    <div className='mt-[150px]'>
                        <Image className="" src={SecurityThumb} alt="Security Thumb"/>
                    </div>
                    <div>
                        <h2 className='section-title font-normal mb-[30px]'>Seamless Access Control With Alice 2</h2>
                        <ul className='flex flex-col gap-[30px] w-[90%]'>
                            <li className="flex gap-[15px] bg-[#F6FCEA] border border-[#A9ED12] rounded-[20px] py-[20px] px-[15px] mr-[50px]">
                                <span className='text-[#424242] mt-[5px]'><IoMdCheckmarkCircle /></span>
                                Breeze through any restricted place, entrance, resource, or information with Alice 2.
                            </li>
                            <li className="flex gap-[15px] bg-[#F6FCEA] border border-[#A9ED12] rounded-[20px] py-[20px] px-[15px] ml-[50px]">
                                <span className='text-[#424242] mt-[5px]'><IoMdCheckmarkCircle /></span>
                                It’s quick, flexible, and secure: you authorize access using only your palm.
                            </li>
                            <li className="flex gap-[15px] bg-[#F6FCEA] border border-[#A9ED12] rounded-[20px] py-[20px] px-[15px] mr-[50px]">
                                <span className='text-[#424242] mt-[5px]'><IoMdCheckmarkCircle /></span>
                                Everyone has a unique identity, which adds extra reliability and peace of mind.
                            </li>
                            <li className="flex gap-[15px] bg-[#F6FCEA] border border-[#A9ED12] rounded-[20px] py-[20px] px-[15px] ml-[50px]">
                                <span className='text-[#424242] mt-[5px]'><IoMdCheckmarkCircle /></span>
                                Contactless access control service, just with your palm
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
        </section>
    </>
  )
}
