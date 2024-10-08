'use client';
import React from 'react';
import Image from "next/image";
import { motion, useAnimation } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import ProductShape from "@/app/assets/images/product-shape.png";
import ProductBgShape from "@/app/assets/images/product-bg.png";
import ProductEggShape from "@/app/assets/images/egg-shape2.png";

const fadeInUp = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.8, ease: [0.6, -0.05, 0.01, 0.99] } }
};

const stagger = {
  visible: {
    transition: {
      staggerChildren: 0.3,
    }
  }
};

export default function Products() {
  const controls = useAnimation();
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  React.useEffect(() => {
    if (inView) {
      controls.start('visible');
    }
  }, [controls, inView]);

  return (
    <>
      <section ref={ref} className='product-area bg-cover bg-no-repeat bg-bottom md:pt-[120px] pt-[60px] md:pb-[90px] pb-[60px]' style={{ backgroundImage: `url(${ProductBgShape.src})` }}>
        <div className="container">
          <motion.div
            className="grid lg:grid-cols-[4fr_8fr]"
            variants={stagger}
            initial="hidden"
            animate={controls}
          >
            <motion.div className="relative z-10 lg:mb-0 mb-[30px]" variants={fadeInUp}>
              <Image className="absolute -left-[100px] top-[25%] -z-10 lg:block hidden" src={ProductShape} alt="Product Shape"/>
              <div className="subtitle">
                <span></span>
                <p>Our Products</p>
              </div>
              <h2 className='section-title'><span className='font-normal'>Explore Our</span> Solutions</h2>
            </motion.div>
            <div className='grid sm:grid-cols-2 xl:gap-[50px] gap-[30px]'>
              {/* single box  */}
              <motion.div className='bg-white md:rounded-[37px] rounded-[20px] lg:pt-[50px] md:pt-[30px] pt-[20px] lg:px-[40px] md:px-[25px] px-[20px] lg:pb-[50px] md:pb-[30px] pb-[20px] shadow-[0_30px_60px_rgba(0,0,0,0.08)]' variants={fadeInUp}>
                <h1 className='2xl:text-[48px] md:text-[36px] text-[26px] font-light mb-[15px] relative z-10 lg:pl-[25px] pl-0'>
                  <Image className="absolute lg:-left-[30px] -left-[5px] lg:-top-[40px] md:-top-[10px] -top-[15px] -z-10 lg:max-w-[50%] md:max-w-[25%] max-w-[60px]" src={ProductEggShape} alt="Egg Shape"/>
                  Alice 1
                </h1>
                <p className='text-[#525050] md:text-[20px] text-[14px]'>At the heart of Cetirc is Alice 1. Designed to enable you to register, scan your palm, make payments online, and gain lifetime access to all of our products and offerings. Download the Alice 1 app to begin.</p>
              </motion.div>
              {/* single box  */}
              <motion.div className='bg-white md:rounded-[37px] rounded-[20px] lg:pt-[50px] md:pt-[30px] pt-[20px] lg:px-[40px] md:px-[25px] px-[20px] lg:pb-[50px] md:pb-[30px] pb-[20px] shadow-[0_30px_60px_rgba(0,0,0,0.08)] lg:translate-y-[55px]' variants={fadeInUp}>
                <h1 className='2xl:text-[48px] md:text-[36px] text-[26px] font-light mb-[15px] relative z-10 lg:pl-[25px] pl-0'>
                  <Image className="absolute lg:-left-[30px] -left-[5px] lg:-top-[40px] md:-top-[10px] -top-[15px] -z-10 lg:max-w-[50%] md:max-w-[25%] max-w-[60px]" src={ProductEggShape} alt="Egg Shape"/>
                  Alice 2
                </h1>
                <p className='text-[#525050] md:text-[20px] text-[14px]'>Alice 2 is our flagship universal and secure palm vein digital access control service. It’s your key to authorize any access control system using our palm vein authentication technology.</p>
              </motion.div>
            </div>
          </motion.div>
        </div>
      </section>
    </>
  );
}
