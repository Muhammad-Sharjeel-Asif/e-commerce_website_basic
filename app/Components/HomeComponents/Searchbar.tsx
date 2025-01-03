import React from 'react'
import Search from '@/app/Public/MagnifyingGlass.png'
import Image from 'next/image'

const Searchbar = () => {
    return (
        <div className="flex justify-end items-center">
            <input
                type="text"
                placeholder="Search..."
                className="bg-transparent px-4 h-[54px] rounded-l-full border-l border-t border-b border-[#FF9F0D]"
            />
            <button className="px-4 py-2 h-[54px] rounded-r-full border border-[#FF9F0D] border-l-0">
                <Image src={Search} alt='Search' />
            </button>
        </div>)
}

export default Searchbar;