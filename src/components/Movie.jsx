"use client"
import Image from 'next/image';
import { useRouter } from 'next/navigation';
import React from 'react'

const Movie = ({ item }) => {
    const router = useRouter()

    return (
        <div onClick={()=> router.push(`/movie/${item?.id}`)} className='min-w-[400px] relative cursor-pointer border'>
            <Image style={{objectFit: "cover"}} className='border' width={400} height={300} alt='img' src={`https://image.tmdb.org/t/p/original/${item?.backdrop_path || item?.poster_path}?api_key=b9dd8eb0d5124eb7bbc5807acd6e96db`} />
            <div className='absolute bottom-0 p-3'>
                <div className='text-2xl font-bold'> {item?.title}</div>
                <div>{item?.vote_average}  -  {item?.release_date}</div>
            </div>
        </div>
    )
}

export default Movie
