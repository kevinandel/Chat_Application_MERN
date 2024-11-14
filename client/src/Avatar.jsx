import React from "react";

function Avatar({ username, userId }) {
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
      className={`w-8 h-8 ${color} rounded-full flex items-center justify-center`}
    >
      {username[0]}
    </div>
  );
}

export default Avatar;
