import React from "react";
import { CircularProgressbar, buildStyles } from "react-circular-progressbar";
import "react-circular-progressbar/dist/styles.css";

import "./CircleRating.scss";

const CircleRating = ({ rating }) => {
    return (
        <div className="circleRating md:w-[50px] md:h-[50px] max-md:w-[30px] max-md:h-[30px]">
            <CircularProgressbar
                value={rating}
                maxValue={10}
                text={rating}
                styles={buildStyles({
                    pathColor:
                        rating < 5 ? "red" : rating < 7 ? "orange" : "green",
                })}
            />
        </div>
    );
};

export default CircleRating;