import React from "react";
import { useSelector } from "react-redux";

import "./Genres.scss";

const Genres = ({ data }) => {
    const { genres } = useSelector((state) => state.home);

    return (
        <div className="">
            <div className="genres flex justify-end flex-wrap relative gap-1 max-md:hidden ">
            
            {data?.map((g) => {
                if (!genres[g]?.name) return;
                return (
                    <div key={g} className="genre bg-gradient-to-r from-cyan-500 to-[#cb00cc]">
                        {genres[g]?.name}
                    </div>
                );
            })}
        </div>
        </div>
    );
};

export default Genres;