import Movie from '@/components/Movie'
import React from 'react'

const Page = async ({ params }) => {
    const keyword = params.keyword
    const res = await fetch(`https://api.themoviedb.org/3/search/movie?api_key=b9dd8eb0d5124eb7bbc5807acd6e96db&query=${keyword}`)
    const data = await res.json()

    console.log(data?.results);
    return (
        <div>
            {
                !data?.results ? <div>Aranılan şey bulunamadı</div> :
                    <div className='flex items-center flex-wrap justify-center gap-3'>
                        {
                            data?.results?.map((item, i) => (
                                <Movie key={i} item={item} />
                            ))
                        }
                    </div>


            }
        </div>
    )
}

export default Page
