import React from "react";
import { Link } from "react-router";

const SingleFriend = ({ friend }) => {
  const tags = friend.tags;

  return (
    <Link to={`/friendsDetails/${friend.id}`}>

      <div
        className="group bg-base-100 rounded-2xl p-6 flex flex-col items-center text-center gap-4 h-full shadow-md transition-all duration-300 hover:-translate-y-2 hover:shadow-2xl
      "
      >

        
        <div className="w-24 h-24 sm:w-28 sm:h-28 rounded-full overflow-hidden">
          <img
            src={friend.picture}
            alt={friend.name}
            className="
            w-full h-full object-cover
            transition duration-300
            group-hover:scale-110
          "
          />
        </div>

        
        <h2 className="text-lg sm:text-xl font-semibold text-gray-800">
          {friend.name}
        </h2>

        
        <p className="text-sm text-gray-500">
          {friend.days_since_contact} days ago
        </p>

        
        <div className="flex flex-wrap justify-center gap-2">
          {tags.map((tag, index) => (
            <span
              key={index}
              className="
              px-3 py-1
              text-xs
              rounded-full
              bg-[#244D3F]/10
              text-[#244D3F]
              font-medium
            "
            >
              {tag}
            </span>
          ))}
        </div>

        
        <span
          className={`
          mt-auto
          px-4 py-2
          rounded-full
          text-sm
          font-semibold
          text-white
          shadow
          ${friend.status === "On-Track"
              ? "bg-[#244D3F]"
              : friend.status === "overdue"
                ? "bg-red-500"
                : "bg-yellow-500"
            }
        `}
        >
          {friend.status}
        </span>

      </div>

    </Link>
  );
};

export default SingleFriend;