import React from "react";

function Avatar({ username, userId, online }) {
  const colors = [
    "bg-red-200",
    "bg-green-200",
    "bg-purple-200",
    "bg-blue-200",
    "bg-yellow-200",
    "bg-teal-200",
  ];

  // Simple hash function to get a more varied distribution
  function hashCode(str) {
    let hash = 0;
    for (let i = 0; i < str.length; i++) {
      const char = str.charCodeAt(i);
      hash = (hash << 5) - hash + char;
    }
    return hash;
  }

  const hash = hashCode(userId);
  const colorIndex = Math.abs(hash) % colors.length;
  const color = colors[colorIndex];

  return (
    <div
      className={`w-8 h-8 relative ${color} rounded-full flex items-center justify-center`}
    >
      {username[0]}
      {online ? (
        <div className="absolute w-2 h-2 bg-green-400 bottom-0 right-0 rounded-full"></div>
      ) : (
        <div className="absolute w-2 h-2 bg-gray-400 bottom-0 right-0 rounded-full"></div>
      )}
    </div>
  );
}

export default Avatar;
