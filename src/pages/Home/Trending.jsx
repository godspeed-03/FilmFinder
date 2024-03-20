import React, { useState } from "react";
import SwitchTabs from '../../utils/SwitchTabs';
import Carousel from '../../utils/Carousel';
import useFetch from '../../useFetch'

export default function Trending() {
    const [mediatype, setMediatype]=useState('movie');
    const [endpoint, setEndpoint] = useState("day");

    const { data, loading } = useFetch(`/trending/${mediatype}/${endpoint}`);

    const onTabChange = (tab) => {
        setEndpoint(tab === "Day" ? "day" : "week");
        setMediatype(tab === "Movie"? 'movie' : 'tv');
    };
  return ( 

    <div className="carouselSection relative mb-[70px]">
        <div className="flex items-center justify-between mb-5  w-full max-w-[1200px]  my-0 mx-auto py-0 px-5">

                <span className="carouselTitle text-2xl text-white font-normal">Trending</span>
                <div className="md:flex items-center justify-between ">

                <SwitchTabs data={['Movie', "TV"]} onTabChange={onTabChange} />
                <SwitchTabs data={["Day", "Week"]} onTabChange={onTabChange} />
                </div>
                
        </div>
            <Carousel data={data?.results} loading={loading} />
        </div>
  )
}
