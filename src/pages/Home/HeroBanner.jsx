import  {React, useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";
import "./banner.scss";

import ContentWrapper from "../../utils/ContentWrapper";

import useFetch from "../../useFetch";

export default function HeroBanner() {
  const [bg, setBg] = useState("");
  const [query, setQuery] = useState("");
  const navigate = useNavigate();
  const { url } = useSelector((state) => state.home);

  const { data, loading } = useFetch("/movie/popular");

  useEffect(() => {
    const background =
      url?.backdrop +
      data?.results?.[Math.floor(Math.random() * 20)]?.backdrop_path;
    setBg(background);
  }, [data]);

  const searchQueryHandler = (event) => {
    if (
      query.length > 0 &&
      (event?.key === "Enter" || event === "searchButton")
    ) {
      navigate(`/search/${query}`);
    }
  };
  return (
    <div className="w-full h-[450px] bg-[#024049] flex items-center md:h-[700px]   ">
      {!loading && (
        <div className="image w-full h-full absolute top-0 left-0 opacity-50 overflow-hidden  ">
          <img className="w-full h-full object-cover" src={bg} alt="" />
        </div>
      )}

      <div className="layer w-full h-[250px] "></div>
      <ContentWrapper>
        <div className="banner flex flex-col items-center text-white text-center relative my-0 mx-auto max-w-[800px]">
          <span className="title text-[30px] md:text-[60px] mb-2 md:mb-0 font-bold">
            Welcome.
          </span>
          <span className="subtitle font-medium text-[12px] mb-10 md:text-[20px] ">
            <span>Millions of movies, TV shows and people to discover.</span>
            <p>Explore now.</p>
          </span>
          <div className="imput flex items-center w-full ">
            <input
              className="w-[calc(100%-100px)] h-[30px] bg-white outline-0 border-0 rounded-tl-3xl rounded-bl-3xl px-4 py-0 text-sm text-black  md:w-[calc(100%-150px)] md:h-[45px] md:text-lg md:py-0 md:px-8 "
              type="text"
              onChange={(e) => setQuery(e.target.value)}
              onKeyUp={searchQueryHandler}
              placeholder="Search for a movie or TV show..."
            />
            <button
              className="bg-gradient-to-r from-cyan-500 to-[#cb00cc] rounded-tr-3xl rounded-br-3xl h-[30px] outline-0 border-0 px-4 py-0 text-sm w-[100px]  md:w-[150px] md:h-[45px] md:text-lg md:py-0 md:px-8"
              onClick={() => searchQueryHandler("searchButton")}
            >
              Search
            </button>
          </div>
        </div>
      </ContentWrapper>
    </div>
  );
}
