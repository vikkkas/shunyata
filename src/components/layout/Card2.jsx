import React from "react";

const Card2 = ({ id, text, className }) => {
    return (
        <div
            className={`absolute bg-white shadow-md rounded-2xl flex flex-col items-center justify-center p-4 w-[260px] h-[210px] ${className}`}>
            <p className="text-3xl font-bold text-[#325118]">{id}</p>
            <p className="text-center text-gray-400 text-lg font-medium w-[180px]">{text}</p>
        </div>
    );
};

export default Card2;   