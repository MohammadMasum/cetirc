import React from 'react'

export default function ContactUs() {
  return (
    <>
        <section className='bg-[#F6FCEA] py-[100px]'>
            <div className="container">
                <div className="grid grid-cols-2 gap-[180px]">
                    <div>
                        <div className="subtitle">
                            <span></span>
                            <p>Contact US</p>
                        </div>
                        <h2 className="section-title !leading-[1.3] mb-[20px]"><span className='font-normal'>Supercharge Your Business With</span> <br /> Alice 1 & Alice 2</h2>
                        <p>We designed Alice 1 and 2 palm ID services to streamline your business by making transactions, payments, and access control smooth and secure. To get our enterprise hardware or enterprise software products, kindly message us directly, and we&apos;ll walk you through it all.</p>
                    </div>
                    <div>
                        <form action='#' className='contact_form grid gap-[20px]'>
                            <div className="grid grid-cols-2 gap-[20px]">
                                <div className="form-group">
                                    <input className='border border-[#8E8E8E] bg-transparent rounded-[11px] leading-[50px] px-[20px] w-full text-[16px] font-normal' type="text" name="f_name" id="f_name" placeholder='First name'/>
                                </div>
                                <div className="form-group">
                                    <input className='border border-[#8E8E8E] bg-transparent rounded-[11px] leading-[50px] px-[20px] w-full text-[16px] font-normal' type="text" name="l_name" id="l_name" placeholder='Last name'/>
                                </div>
                            </div>
                            <div className="grid">
                                <div className="form-group">
                                    <input className='border border-[#8E8E8E] bg-transparent rounded-[11px] leading-[50px] px-[20px] w-full text-[16px] font-normal' type="email" name="email" id="email" placeholder='Enter email'/>
                                </div>
                            </div>
                            <div className="grid">
                                <div className="form-group">
                                    <input className='border border-[#8E8E8E] bg-transparent rounded-[11px] leading-[50px] px-[20px] w-full text-[16px] font-normal' type="text" name="tel" id="tel" placeholder='Phone number (optional)'/>
                                </div>
                            </div>
                            <div className="grid">
                                <div className="form-group">
                                    <textarea className='border border-[#8E8E8E] bg-transparent rounded-[11px] p-[20px] w-full text-[16px] font-normal h-[180px]' name="message" id="message" placeholder='Write your message here'></textarea>
                                </div>
                            </div>
                            <div className="grid justify-end">
                                <div className="form-group">
                                    <button className='primary-btn' type="submit">Submit</button>
                                </div>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </section>
    </>
  )
}
