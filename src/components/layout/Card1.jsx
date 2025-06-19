import React from 'react';

const Card = ({ icon, heading, content, className }) => {
    return (
        <div className={'box-border w-[300px] h-[355px] bg-white border border-[#325118] shadow-md rounded-[20px] flex flex-col items-center p-6 z-1'}>
            {/* Icon */}
            <div className="w-16 h-16 mb-4">
                <img src={icon} alt="Card Icon" className="w-full h-full object-contain" />
            </div>
            {/* Heading */}
            <h3 className="text-xl font-bold text-black mb-4">{heading}</h3>
            {/* Content */}
            <p className="text-center text-[#777575] text-base leading-6 mt-4">{content}</p>
        </div>
    );
};

export default Card;