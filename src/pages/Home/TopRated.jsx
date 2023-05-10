import React, { useState } from "react";
import SwitchTabs from '../../utils/SwitchTabs';
import Carousel from '../../utils/Carousel';
import useFetch from '../../useFetch'

export default function TopRated() {
    const [mediatype, setMediatype]=useState('movie');

    const { data, loading } = useFetch(`/${mediatype}/top_rated`);

    const onTabChange = (tab) => {
        setMediatype(tab === "Movie"? 'movie' : 'tv');
    };
  return ( 

    <div className="carouselSection relative mb-[70px]">
        <div className="flex items-center justify-between mb-5  w-full max-w-[1200px]  my-0 mx-auto py-0 px-5">

                <span className="carouselTitle text-2xl text-white font-normal">Top Rated</span>

                <SwitchTabs data={['Movie', "TV"]} onTabChange={onTabChange} />
                
        </div>
            <Carousel data={data?.results} loading={loading} endpoint={mediatype} />
        </div>
  )
}
