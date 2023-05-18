"use client"
import React, { useState } from 'react'
import { BiSearchAlt2 } from "react-icons/bi"
import MenuItem from './MenuItem'
import ThemeComp from './ThemeComp'
import { useRouter } from 'next/navigation'

const Header = () => {

    const router = useRouter()
    const [keyword, setKeyword] = useState("")

    const menu = [
        {
            name: "About",
            url: "/about"
        },
        {
            name: "Sign In",
            url: "/login"
        }
    ]

    const searchFunc = (e) => {
        if (e.key === "Enter" && keyword.length >= 3) {
            router.push(`/search/${keyword}`)
            setKeyword("")
        }
    }

    return (
        <div onClick={() => router.push(`/`)} className='flex items-center gap-7 h-20 p-5 cursor-pointer'>
            <div className='bg-amber-600 p-3 text-2xl font-bold rounded-lg'>MovieApp</div>
            <div className='flex items-center gap-2 border p-3 flex-1 rounded-lg'>
                <input onKeyDown={searchFunc} onChange={e => setKeyword(e.target.value)} value={keyword} className='outline-none flex-1 bg-transparent' type="text" placeholder='Arama Yapınız' />
                <BiSearchAlt2 size={25} />
            </div>
            <ThemeComp />
            {
                menu.map((item, i) => (
                    <MenuItem key={i} item={item} />
                ))
            }
        </div>
    )
}

export default Header
