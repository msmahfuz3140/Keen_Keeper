import { Frown } from 'lucide-react';
import Link from 'next/link';
import React from 'react';

const NoTimeline = () => {
    return (
        <div className="flex flex-col items-center justify-center p-10 bg-gray-50 rounded-xl border border-dashed border-gray-300">
            {/* Animated Icon */}
            <div className="bg-gray-100 p-4 rounded-full mb-4">
                <Frown />
            </div>

            {/* Content */}
            <h2 className="text-xl font-semibold text-gray-700">No Timeline Available</h2>
            <p className="text-gray-500 text-center mt-2 max-w-xs">
                There are no events or updates recorded in the timeline yet.
            </p>

            {/* Action Button */}
            <Link href={'/'}
                className="btn my-5 bg-green-800  text-white rounded-lg font-medium hover:bg-green-700 transition-all active:scale-95">
                Go to Home Page
            </Link>
        </div>
    );
};

export default NoTimeline;