import React from 'react'
import Image from "next/image";
import AliceWorkThumb1 from "@/app/assets/images/alice1work-thumb.png";

export default function AliceWork1() {
  return (
    <>
        <section className='py-[140px]'>
            <div className="container">
                <div className="flex flex-col mb-[50px]">
                    <h2 className='section-title mb-[20px]'><span className='font-normal'>How Does</span> Alice 1 Work?</h2>
                    <p className=''>Alice 1 improves the retail and POS payment experiences with palm vein biometrics. <br /> Here&apos;s how it works:</p>
                </div>
                <div className="grid grid-cols-[4fr_8fr] gap-x-[60px]">
                    <div>
                        <Image className="w-full" src={AliceWorkThumb1} alt="AliceWorkThumb1"/>
                    </div>
                    <div className='relative'>
                        {/* single work item  */}
                        <div className='flex gap-x-[18px] relative pb-[50px] before:w-[2px] before:absolute before:h-[calc(100%-50px)] before:content-[""] before:border-l-2 before:border-dashed before:top-[40px] before:left-[14px]'>
                            <div className='h-[30px] w-[30px] min-w-[30px] bg-[#E0FEA4] rounded-full'></div>
                            <div>
                                <h4 className='text-[24px] mb-[15px]'>Registration:</h4>
                                <p className='text-[#646464]'>You register your palm vein patterns using the Alice 1 app or through Cetirc-supported devices at designated registration points. Our app or device’s proprietary computer vision algorithm captures and securely stores your unique palm vein patterns during registration. This system encrypts your palm image and creates your unique palm signature, readable by any of our partnering Cetirc or Alice 1 devices worldwide.</p>
                            </div>
                        </div>
                        {/* single work item  */}
                        <div className='flex gap-x-[18px] relative pb-[50px] before:w-[2px] before:absolute before:h-full before:content-[""] before:border-l-2 before:border-dashed before:top-[40px] before:left-[14px]'>
                            <div className='h-[30px] w-[30px] min-w-[30px] bg-[#C8C8C8] rounded-full'></div>
                            <div>
                                <h4 className='text-[24px] mb-[15px]'>Payment:</h4>
                                <p className='text-[#646464]'>After registration, you can make payments at partnering merchants, retail stores, or centers by simply scanning your palm at the point of sale terminal. The system compares your palm image with the palm signatures in our system to authenticate the transaction securely and swiftly.</p>
                            </div>
                        </div>
                        {/* single work item  */}
                        <div className='flex gap-x-[18px] relative'>
                            <div className='h-[30px] w-[30px] min-w-[30px] bg-[#C8C8C8] rounded-full'></div>
                            <div>
                                <h4 className='text-[24px] mb-[15px]'>What’s More?</h4>
                                <p className='text-[#646464]'>You unlock access to Alice 2 offerings upon completing registration with Alice 1 via the app or registration point. We intentionally made this possible to provide a seamless and integrated user experience.</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    </>
  )
}
