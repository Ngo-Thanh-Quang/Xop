import React from 'react'
import { assets } from '../assets/assets'

const OurPolicy = () => {
  return (
    <div className='flex flex-col sm:flex-row justify-around gap-12 sm:gap-2 text-center py-20 text-xs sm:text-sm md:text-base main-text'>
        <div>
            <img src={assets.exchange_icon} alt="" className="w-12 m-auto mb-5" />
            <p className="font-semibold">Chính Sách Đổi Trả</p>
            <p className="text-amber-800">Cung cấp chính sách đổi trả dễ dàng</p>
        </div>
        <div>
            <img src={assets.quality_icon} alt="" className="w-12 m-auto mb-5" />
            <p className="font-semibold">7 Ngày Trả Hàng</p>
            <p className="text-amber-800">Khách hàng có thể đổi trả trong vòng 7 ngày</p>
        </div>
        <div>
            <img src={assets.support_img} alt="" className="w-12 m-auto mb-5" />
            <p className="font-semibold">Chăm Sóc Khách Hàng</p>
            <p className="text-amber-800">Đội ngũ chăm sóc khách hàng 24/7</p>
        </div>
    </div>
  )
}

export default OurPolicy