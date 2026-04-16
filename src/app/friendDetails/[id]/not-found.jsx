"use client"

import { useRouter } from 'next/navigation';
import React from 'react';

const FriendNotFound = () => {
    const router = useRouter()
  return (
    <div className="flex flex-col items-center justify-center p-12 bg-white rounded-2xl shadow-sm border border-gray-100 max-w-md mx-auto mt-10">
      {/* Search / User Icon with a Cross */}
      <div className="relative mb-6">
       
    
      </div>

      {/* Content */}
      <h3 className="text-xl font-bold text-gray-800">Friend Not Found</h3>
     

      {/* Action Buttons */}
      <div className="mt-8 flex flex-col w-full gap-3">
        <button 
          onClick={() => router.back()}
          className="w-full py-2.5 bg-gray-100 text-gray-700 font-medium rounded-lg hover:bg-gray-200 transition-all active:scale-95"
        >
          Go Back
        </button>
        

      </div>
    </div>
  );
};

export default FriendNotFound;