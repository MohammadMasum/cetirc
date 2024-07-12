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
    <section className='pt-[160px] pb-[100px]'>
        <div className="container">
            <div className="grid grid-cols-[5fr_7fr] gap-x-[50px]">
                <div>
                    <p className='font-inter mb-[20px] text-black'>Find registration point near you</p>
                    <form className='mb-[20px]' action="#">
                        <div className="form-group relative">
                            <span className='absolute left-[25px] top-[18px]'><IoIosSearch /></span>
                            <input className='leading-[53px] border border-[#E0DDDD] rounded-[9px] w-full pl-[60px] px-[25px] text-[16px] font-inter bg-[#F9F9F9]' type="search" name="search" id="search" placeholder="Search city, zip code" />
                        </div>
                    </form>
                    <div className='pt-[60px] pb-[50px] px-[40px] border border-[#ECECEC] rounded-[23px] w-[80%]'>
                        <p className='mb-[25px]'>Location suggestions</p>
                        <div className='flex flex-col gap-[20px]'>
                            <div className='flex items-center gap-[20px]'>
                                <Image className='h-[70px] w-[70px] rounded-[11px] object-cover' src={LocationIcon1} alt='location icon1' />
                                <div>
                                    <h5 className='text-[20px] font-medium text-black mb-[8px]'>Sydney.</h5>
                                    <p className='text-[16px]'>123 Elm Street, Sydney, NSW 2000, Australia</p>
                                </div>
                            </div>
                            <div className='flex items-center gap-[20px]'>
                                <Image className='h-[70px] w-[70px] rounded-[11px] object-cover' src={LocationIcon2} alt='location icon2' />
                                <div>
                                    <h5 className='text-[20px] font-medium text-black mb-[8px]'>Melbourne</h5>
                                    <p className='text-[16px]'>123 Elm Street, Sydney, NSW 2000, Australia</p>
                                </div>
                            </div>
                            <div className='flex items-center gap-[20px]'>
                                <Image className='h-[70px] w-[70px] rounded-[11px] object-cover' src={LocationIcon3} alt='location icon3' />
                                <div>
                                    <h5 className='text-[20px] font-medium text-black mb-[8px]'>Brisbane</h5>
                                    <p className='text-[16px]'>123 Elm Street, Sydney, NSW 2000, Australia</p>
                                </div>
                            </div>
                            <div className='flex items-center gap-[20px]'>
                                <Image className='h-[70px] w-[70px] rounded-[11px] object-cover' src={LocationIcon4} alt='location icon4' />
                                <div>
                                    <h5 className='text-[20px] font-medium text-black mb-[8px]'>Adelaide</h5>
                                    <p className='text-[16px]'>123 Elm Street, Sydney, NSW 2000, Australia</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div>
                    <iframe className='rounded-[35px]' src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d12094.983684777575!2d-73.87364197910917!3d40.72360945437124!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89c25e394b6cc0b9%3A0xf15c2215b49863c4!2sRego%20Park%2C%20Queens%2C%20NY%2C%20USA!5e0!3m2!1sen!2sbd!4v1720777329834!5m2!1sen!2sbd" width="100%" height="850" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
                </div>
            </div>
        </div>
    </section>
    </>
  )
}
