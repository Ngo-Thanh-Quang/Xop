import React from 'react'
import { assets } from '../assets/assets'

const Hero = () => {
  return (
    <div className='flex flex-col sm:flex-row border border-[#472e0f]'>
        {/* Left Section */}
        <div className="w-full sm:w-1/2 flex items-center justify-center py-10 sm:py-0">
        <div className="main-text">
            <div className="flex items-center gap-2">
                <p className="w-8 md:w-11 h-[2px] bg-[#472e0f]"></p>
                <p className='font-medium text-sm md:text-base'>MÓN BÁN CHẠY</p>
            </div>
            <h1 className="mea-culpa italic text-3xl sm:py-3 lg:text-6xl leading-relaxed">
                Đặc Biệt Hôm Nay
            </h1>
            <div className="flex items-center gap-2">
                <p className="font-semibold text-sm md:text-base">MUA NGAY</p>
                <p className="w-8 md:w-11 h-[1px] bg-[#472e0f]"></p>
            </div>
        </div>
        </div>
        {/* Right Section */}
        <img src={assets.mango_pudding} alt="" className="w-full sm:w-1/2" />
        
    </div>
  )
}

export default Hero