import React from 'react'
import Image from 'next/image'
import Left from '@/app/Components/ShopComponents/Left.png'
import Right from '@/app/Components/ShopComponents/Right.png'

const Pagination = () => {
    return (
        <div className="flex justify-center mt-10 gap-x-3">
            <button className="flex justify-center items-center w-[50px] h-[50px] border border-[#F2F2F2] "><Image src={Left} alt='Left' width={14} height={17} /></button>
            <button className="w-[50px] h-[50px] border border-[#F2F2F2] text-[#FF9F0D] hover:text-white hover:bg-[#FF9F0D]">1</button>
            <button className="w-[50px] h-[50px] border border-[#F2F2F2] text-white bg-[#FF9F0D]">
                2
            </button>
            <button className="w-[50px] h-[50px] border border-[#F2F2F2] text-[#FF9F0D] hover:text-white hover:bg-[#FF9F0D]">3</button>
            <button className="flex justify-center items-center w-[50px] h-[50px] border border-[#F2F2F2]"><Image src={Right} alt='Right' width={14} height={17} /></button>
        </div>)
}

export default Pagination