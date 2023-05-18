"use client"
import Link from 'next/link'
import React from 'react'
import { useSearchParams } from "next/navigation"

const Tabs = () => {

    const searchParams = useSearchParams()
    const genre = searchParams.get("genre")

    const tabs = [
        {
            name: "En Populer",
            url: "popular"
        },
        {
            name: "En Son",
            url: "latest"
        },
        {
            name: "Yakında Gelecekler",
            url: "upcoming"
        }
    ]

    return (
        <div className='p-5 m-5 bg-gray-100 dark:bg-gray-900 flex items-center justify-center gap-7'>
            {
                tabs.map((item, i) => (
                    <Link className={`cursor-pointer hover:opacity-80 transition-opacity ${item.url===genre ? "underline underline-offset-8 text-amber-600" : ""}`} href={`/?genre=${item.url}`} key={i}>{item.name}</Link>
                ))
            }
        </div>
    )
}

export default Tabs
