import Movie from '@/components/Movie'
import React from 'react'

const Page = async({searchParams}) => {

  const res = await fetch(`https://api.themoviedb.org/3/${searchParams.genre ? "movie/" + searchParams.genre : "trending/all/day"}?api_key=b9dd8eb0d5124eb7bbc5807acd6e96db&language=en-US&page=1`,{next: {revalidate: 10000}})
  const data = await res.json()

  return (
    <div className='flex items-center justify-center flex-wrap gap-3'>
    { 
    data?.results?.map((item,i)=>(
      <Movie key={i} item={item}/>
    ))
    }

    </div>
  )
}

export default Page

