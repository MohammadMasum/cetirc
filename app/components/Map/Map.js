import React from 'react'
import { IoIosSearch } from "react-icons/io";
import Image from "next/image";
import LocationIcon1 from "@/app/assets/images/location-icon1.svg";
import LocationIcon2 from "@/app/assets/images/location-icon2.svg";
import LocationIcon3 from "@/app/assets/images/location-icon3.svg";
import LocationIcon4 from "@/app/assets/images/location-icon4.svg";


export default function Map() {
  return (
    <>
    <section className='md:pt-[160px] pt-[120px] md:pb-[100px]'>
        <div className="container">
            <div className="grid lg:grid-cols-[5fr_7fr] gap-x-[50px]">
                <div className='relative z-10'>
                    <p className='font-inter mb-[20px] text-black'>Find registration point near you</p>
                    <form className='mb-[20px]' action="#">
                        <div className="form-group relative">
                            <span className='absolute left-[25px] top-[18px] text-[20px]'><IoIosSearch /></span>
                            <input className='leading-[53px] border border-[#E0DDDD] rounded-[9px] w-full pl-[60px] px-[25px] text-[16px] font-inter bg-[#F9F9F9]' type="search" name="search" id="search" placeholder="Search city, zip code" />
                        </div>
                    </form>
                    <div className='bg-white md:pt-[60px] pt-[30px] md:pb-[50px] pb-[30px] md:px-[40px] px-[15px] border border-[#ECECEC] xl:rounded-[23px] rounded-[12px] xl:w-[80%] sm:w-[90%] absolute xl:left-0 sm:left-[5%] top-[130px] z-10'>
                        <p className='mb-[25px]'>Location suggestions</p>
                        <div className='flex flex-col gap-[20px]'>
                            <div className='flex items-center gap-[20px]'>
                                <Image className='h-[70px] w-[70px] rounded-[11px] object-cover sm:block hidden' src={LocationIcon1} alt='location icon1' />
                                <div>
                                    <h5 className='text-[20px] font-medium text-black mb-[8px]'>Sydney.</h5>
                                    <p className='text-[16px]'>123 Elm Street, Sydney, NSW 2000, Australia</p>
                                </div>
                            </div>
                            <div className='flex items-center gap-[20px]'>
                                <Image className='h-[70px] w-[70px] rounded-[11px] object-cover sm:block hidden' src={LocationIcon2} alt='location icon2' />
                                <div>
                                    <h5 className='text-[20px] font-medium text-black mb-[8px]'>Melbourne</h5>
                                    <p className='text-[16px]'>123 Elm Street, Sydney, NSW 2000, Australia</p>
                                </div>
                            </div>
                            <div className='flex items-center gap-[20px]'>
                                <Image className='h-[70px] w-[70px] rounded-[11px] object-cover sm:block hidden' src={LocationIcon3} alt='location icon3' />
                                <div>
                                    <h5 className='text-[20px] font-medium text-black mb-[8px]'>Brisbane</h5>
                                    <p className='text-[16px]'>123 Elm Street, Sydney, NSW 2000, Australia</p>
                                </div>
                            </div>
                            <div className='flex items-center gap-[20px]'>
                                <Image className='h-[70px] w-[70px] rounded-[11px] object-cover sm:block hidden' src={LocationIcon4} alt='location icon4' />
                                <div>
                                    <h5 className='text-[20px] font-medium text-black mb-[8px]'>Adelaide</h5>
                                    <p className='text-[16px]'>123 Elm Street, Sydney, NSW 2000, Australia</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className='sm:ml-0 -ml-[16px] sm:mr-0 -mr-[16px] lg:mt-0 mt-[100px]'>
                    <iframe className='xl:rounded-[35px] lg:rounded-[12px] md:h-[850px] h-[630px]' src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d12094.983684777575!2d-73.87364197910917!3d40.72360945437124!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89c25e394b6cc0b9%3A0xf15c2215b49863c4!2sRego%20Park%2C%20Queens%2C%20NY%2C%20USA!5e0!3m2!1sen!2sbd!4v1720777329834!5m2!1sen!2sbd" width="100%" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
                </div>
            </div>
        </div>
    </section>
    </>
  )
}
