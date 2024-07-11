import React from 'react'
import Link from "next/link";
import Image from "next/image";
import SecureImage from "@/app/assets/images/secure-thumb.png"

export default function SecureId() {
  return (
    <>
        <section className='py-[120px]'>
            <div className="container">
                <div className="grid grid-cols-2 xl:gap-[150px] gap-[30px] items-center">
                    <div>
                        <Image className="" src={SecureImage} alt="Secure Thumb"/>
                    </div>
                    <div>
                        <h2 className="section-title mb-[15px]"><span className='font-normal'>Secure ID, Just</span> <br /> Your Palm</h2>
                        <p className='mb-[30px]'>Cetirc’s Alice 1 and Alice 2 palm vein ID services provide a unique, more convenient, and secure way to authenticate transactions and activities that require your biometrics online and offline</p>
                        <Link href="/" className="primary-btn">See how it works</Link>
                    </div>
                </div>
            </div>
        </section>
    </>
  )
}
