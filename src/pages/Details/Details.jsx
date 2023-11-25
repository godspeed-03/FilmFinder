import React from "react";
import { useParams } from "react-router-dom";

import useFetch from "../../useFetch";
import Banner from "./Banner";
import Cast from "./Cast";
import VideosSection from "./VideoSection";
import Similar from "./Similar";
import Recommendation from "./Recomnded";

const Details = () => {
    const { mediaType, id } = useParams();
    const { data, loading } = useFetch(`/${mediaType}/${id}/videos`);
    const { data: credits, loading: creditsLoading } = useFetch(
        `/${mediaType}/${id}/credits`
    );

    return (
        <div>
            <Banner video={data?.results?.[0]} crew={credits?.crew} />
            <Cast data={credits?.cast} loading={creditsLoading} />
            <VideosSection data={data} loading={loading} />
            <Similar mediaType={mediaType} id={id} />
            <Recommendation mediaType={mediaType} id={id} />
        </div>
    );
};

export default Details;