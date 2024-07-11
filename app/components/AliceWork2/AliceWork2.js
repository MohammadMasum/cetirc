import React from 'react'
import Image from "next/image";
import AliceWorkIcon1 from "@/app/assets/images/alice-work-icon1.svg";

export default function AliceWork1() {
  return (
    <>
        <section className='pt-[50px] bg-[#F6FCEA] relative z-10 before:absolute before:bottom-0 before:left-0 before:h-[180px] before:w-full before:content-[""] before:bg-white before:-z-10'>
            <div className="container">
                <div className="flex items-center flex-col mb-[50px] text-center">
                    <h2 className='section-title mb-[20px]'><span className='font-normal'>How Does</span> <br /> Alice 2 Work</h2>
                    <p className='max-w-[830px] text-[24px]'>Alice 2 uses palm vein biometrics technology to authenticate access control and identification activities.</p>
                </div>
                <div className="grid grid-cols-3 gap-[30px]">
                    {/* single box  */}
                    <div className="bg-white p-[30px] rounded-[23px] shadow-[0_30px_60px_rgba(0,0,0,0.05)] mt-[40px]">
                        <Image className="mb-[20px]" src={AliceWorkIcon1} alt="Alice Work Icon1"/>
                        <h3 className='text-[30px] font-medium mb-[15px] leading-[1.3]'>Access Control</h3>
                        <p className=''>Alice 2 enables secure access control to restricted areas or facilities by authenticating users based on their palm signature created with Alice 1. Employees or authorized personnel can enter by scanning their palms at the designated access control points.</p>
                    </div>
                    {/* single box  */}
                    <div className="bg-white py-[30px] px-[20px] rounded-[23px] text-center shadow-[0_30px_60px_rgba(0,0,0,0.05)]">
                        <Image className="mb-[10px] mx-auto" src={AliceWorkIcon1} alt="Alice Work Icon1"/>
                        <h3 className='text-[30px] font-medium mb-[30px] leading-[1.3]'>Identification</h3>
                        <p className=''>Beyond access control, Alice 2 offers identity verification in various scenarios, such as attendance tracking, visitor management, or secure document access. Users can quickly, accurately, and conveniently confirm their identity by scanning their palm vein pattern.</p>
                    </div>
                    {/* single box  */}
                    <div className="bg-white py-[30px] px-[20px] rounded-[23px] text-center shadow-[0_30px_60px_rgba(0,0,0,0.05)] mt-[90px]">
                        <Image className="mb-[10px] mx-auto" src={AliceWorkIcon1} alt="Alice Work Icon1"/>
                        <h3 className='text-[30px] font-medium mb-[30px] leading-[1.3]'>Integration</h3>
                        <p className=''>By adopting and integrating Alice 2, small and large businesses, enterprises, and organizations can improve and scale their existing security systems and protocols.</p>
                    </div>
                </div>
            </div>
        </section>
    </>
  )
}
