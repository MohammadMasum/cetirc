import React from 'react'
import Image from "next/image";
import MediaThumb1 from "@/app/assets/images/media-thumb1.png";
import MediaThumb2 from "@/app/assets/images/media-thumb2.png";

export default function MediaBox() {
  return (
    <>
    <section className='py-[140px]'>
        <div className="container">
            <div className="grid grid-cols-[4fr_8fr] gap-x-[50px] items-center border border-[#000000] rounded-[30px] mb-[80px]">
                <div className='h-full min-h-[360px] relative'>
                    <Image className='object-cover rounded-l-[30px]' fill src={MediaThumb1} alt="Media Thumb1" />
                </div>
                <div className='pr-[80px] py-[110px]'>
                    <h2 className='section-title mb-[10px] font-medium'>Who We Are</h2>
                    <p>We are a premier palm vein biometric solution committed to improving how people use and interact with their identities for various applications. Our technology uses palm vein patterns to enhance security in various identity and authentication domains. Follow us through this journey,  learn about our mission, and discover the products already making this change possible.</p>
                </div>
            </div>
            <div className="grid grid-cols-[8fr_4fr] gap-x-[50px] items-center border border-[#A9ED12] rounded-[30px]">
                <div className='pl-[80px] py-[110px]'>
                    <h2 className='section-title mb-[10px] font-medium'>Our Mission</h2>
                    <p><b>Our mission is straightforward:</b> to provide secure, convenient, and reliable palm vein biometric and authentication solutions that empower individuals and organizations worldwide. We use the latest technologies and tools to streamline the process and improve user experiences across various industries that need secure authentication methods.</p>
                </div>
                <div className='h-full min-h-[360px] relative'>
                    <Image className='object-cover rounded-r-[30px]' fill src={MediaThumb2} alt="Media Thumb2" />
                </div>
            </div>
        </div>
    </section>
    </>
  )
}
