import React from 'react';

interface RatingProps {
    filled: boolean;
    width?: number | string;
    height?: number | string;
}

const Rating: React.FC<RatingProps> = ({ filled, width = 20, height = 20 }) => {
    return (
        <svg
            xmlns="http://www.w3.org/2000/svg"
            className="rating-star"
            fill={filled ? '#FF9F0D' : 'none'}
            stroke="#FF9F0D"
            viewBox="0 0 24 24"
            width={width}
            height={height}
        >
            <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z"
            />
        </svg>
    );
};

export default Rating;