import React from "react";
import Carousel from '../../utils/Carousel';
import useFetch from '../../useFetch'

export default function Latest() {
  const endpoint ='movie';

    const { data, loading } = useFetch(`/${endpoint}/upcoming`);

    
  return ( 

    <div className="carouselSection relative mb-[70px]">
        <div className="flex items-center justify-between mb-5  w-full max-w-[1200px]  my-0 mx-auto py-0 px-5">

                <span className="carouselTitle text-2xl text-white font-normal">Upcoming Movies</span>

                
        </div>
            <Carousel data={data?.results} loading={loading} endpoint={endpoint} />
        </div>
  )
}
