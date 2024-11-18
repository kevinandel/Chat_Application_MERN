import React from "react";
import Avatar from "./Avatar";

function Contact({ id, username, onClick, selected, online }) {
  return (
    <div
      key={id}
      onClick={() => onClick(id)}
      className={
        "border-b border-gray-200  flex items-center gap-2 cursor-pointer " +
        (selected ? "bg-gray-200" : "")
      }
    >
      {selected && <div className="w-1 h-12 bg-gray-500 rounded-r-md"></div>}
      <div className="flex items-center gap-2 py-2 pl-4">
        <Avatar online={online} username={username} userId={id} />
        <span className="text-gray-800">{username}</span>
      </div>
    </div>
  );
}

export default Contact;
