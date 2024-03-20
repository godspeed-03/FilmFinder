import React, { useRef } from "react";
import {
    BsFillArrowLeftCircleFill,
    BsFillArrowRightCircleFill,
} from "react-icons/bs";
import { useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";
import dayjs from "dayjs";

import ContentWrapper from "./ContentWrapper";
import PosterFallback from "../image/no-poster.png";
import CircleRating from "./CircleRating";
import Genres from "./Genres";

import "./Carousel.scss";

const Carousel = ({ data, loading, endpoint, title }) => {
    const carouselContainer = useRef();
    const { url } = useSelector((state) => state.home);
    const navigate = useNavigate();

    const navigation = (dir) => {
        const container = carouselContainer.current;

        const scrollAmount =
            dir === "left"
                ? container.scrollLeft - (container.offsetWidth + 20)
                : container.scrollLeft + (container.offsetWidth + 20);

        container.scrollTo({
            left: scrollAmount,
            behavior: "smooth",
        });
    };

    const skItem = () => {
        return (
            <div className="skeletonItem  max-md:w-[125px] w-[calc(25%-15px)]">
                <div className="posterBlock  bg-cyan-900 rounded-md skeleton"></div>
                <div className="textBlock">
                    <div className="title  bg-cyan-900 md:text-[20px] skeleton"></div>
                    <div className="date  bg-cyan-900 skeleton"></div>
                </div>
            </div>
        );
    };

    return (
        <div className="carousel">
            <ContentWrapper>
                {title && <div className="carouselTitle">{title}</div>}
                <BsFillArrowLeftCircleFill
                    className="carouselLeftNav arrow  max-md:hidden"
                    onClick={() => navigation("left")}
                />
                <BsFillArrowRightCircleFill
                    className="carouselRighttNav arrow max-md:hidden"
                    onClick={() => navigation("right")}
                />
                {!loading ? (
                    <div className="carouselItems max-md:gap-[10px] gap-[20px] md:overflow-hidden" ref={carouselContainer}>
                        {data?.map((item) => {
                            const posterUrl = item.poster_path?url.poster + item.poster_path:PosterFallback;
                            return (
                                <div
                                    key={item.id}
                                    className="carouselItem  max-md:w-[125px] w-[calc(25%-15px)] "
                                    onClick={() =>
                                        navigate(
                                            `/${item.media_type || endpoint}/${
                                                item.id
                                            }`
                                        )
                                    }
                                >
                                    <div className="posterBlock ">
                                      <div className="absolute top-0 left-0 w-full h-full rounded-3xl overflow-hidden">

                                        <img className="w-full h-full object-cover object-center" src={posterUrl} />
                                      </div >
                                      <span className="top-[20px]">

                                        <CircleRating
                                            rating={item.vote_average.toFixed(
                                                1
                                            )}
                                        />
                                      </span>
                                        <Genres
                                            data={item.genre_ids.slice(0, 2)}
                                        />
                                    </div>
                                    <div className="textBlock">
                                        <span className="title">
                                            {item.title || item.name}
                                        </span>
                                        <span className="date text-sm opacity-80">
                                            {dayjs(item.release_date).format(
                                                "D MMM, YYYY"
                                            )}
                                        </span>
                                    </div>
                                </div>
                            );
                        })}
                    </div>
                ) : (
                    <div className="loadingSkeleton max-md:gap-[10px] gap-[20px]">
                        {skItem()}
                        {skItem()}
                        {skItem()}
                        {skItem()}
                        {skItem()}
                    </div>
                )}
            </ContentWrapper>
        </div>
    );
};

export default Carousel;