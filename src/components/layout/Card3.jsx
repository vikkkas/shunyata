import React from "react";
import green from "../../assets/home/green_circle.png";
import arrow from "../../assets/home/arrow.png";

const Card = ({ img, heading, text, className }) => {
    return (
        <div
            className={`absolute w-[282.67px] h-[419.05px] bg-white shadow-md rounded-[20px] text-center ${className}`}>
            <img
                src={img}
                alt="Card Image"
                className="w-30 h-30 ml-20 object-cover rounded-t-[20px] m-2 p-2"
            />
            <div className="mt-4">
                <h2
                    className="absolute w-60 h-[48px] top-[180px] font-bold leading-[24px] text-center text-2xl text-[#003A21]">
                    {heading}
                </h2>
                <p className="absolute text-sm text-gray-600 top-[250px] p-4">{text}</p>
            </div>
            <div className="absolute bottom-4 right-4">
                <img src={green} alt="Icon" className="w-10 h-10 object-cover rounded-t-[20px]" />
                <img src={arrow} alt="arrow" className="absolute top-3.5 left-3 right-4 w-3.5 h-3" />
            </div>
        </div>
    );
};

export default Card;