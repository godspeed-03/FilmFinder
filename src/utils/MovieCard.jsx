import React from "react";
import dayjs from "dayjs";
import { useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";

import "./MovieCard.scss";
import CircleRating from "./CircleRating";
import Genres from "./Genres";
import PosterFallback from "../image/no-poster.png";

const MovieCard = ({ data, fromSearch, mediaType }) => {
    const { url } = useSelector((state) => state.home);
    const navigate = useNavigate();
    const posterUrl = data.poster_path
        ? url.poster + data.poster_path
        : PosterFallback;
    return (
        <div
            className="movieCard  rounded-3xl max-md:w-[calc(50%-5px)] w-[calc(25%-15px)]"
            onClick={() =>
                navigate(`/${data.media_type || mediaType}/${data.id}`)
            }
        >
            <div className="posterBlock rounded-3xl">
            <div className="absolute top-0 left-0 w-full h-full  ">
            <img className="w-full h-full object-cover " src={posterUrl} />
                {!fromSearch && (
                    <>
                    <div className=" relative -top-[60px] ">

                    <CircleRating
                                            rating={data.vote_average.toFixed(
                                                1
                                            )}
                                        />
                                        <span className="relative -top-[20px]">

                                        <Genres
                                            data={data.genre_ids.slice(0, 2)}
                                        />
                                        </span>
                    </div>
                    </>
                )}
                </div>
            </div>
            <div className="textBlock">
                <span className="title">{data.title || data.name}</span>
                <span className="date">
                    {dayjs(data.release_date).format("MMM D, YYYY")}
                </span>
            </div>
        </div>
    );
};

export default MovieCard;