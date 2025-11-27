import React, { useState } from "react";

export default function WhatsAppSidebar({ chats, onSelect }) {
  const [search, setSearch] = useState("");

  // Filter chats by search text
  const filteredChats = chats.filter(chat =>
    chat.name.toLowerCase().includes(search.toLowerCase())
  );

  const getLastMessage = (messages) => {
    if (messages.length === 0) return "Tap to chat";
    return messages[messages.length - 1].text;
  };

  return (
    <div className="w-full md:w-72  ">

      {/* Header */}
      <div>
        <h1 className="font-bold font-playfair text-xl sm:text-2xl md:text-3xl text-center mt-2">
          Chat with Vendors
        </h1>
      </div>

      {/* Search Bar */}
      <div className="my-3 px-3">
        <input
          type="text"
          placeholder="Search conversations..."
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          className="w-full py-3 px-2 rounded border-b-2 border-b-gray-400 shadow-sm text-sm outline-none"
        />
      </div>

      {/* Chat List */}
      <div className="overflow-y-auto">
        {filteredChats.length === 0 && (
          <p className="p-4 text-gray-500 font-semibold text-center text-sm">
            No chats found
          </p>
        )}

        {filteredChats.map((chat) => (
          <div
            key={chat.id}
            onClick={() => onSelect(chat)}
            className="flex items-center gap-3 px-4 py-5 hover:bg-gray-200 cursor-pointer border-b border-b-gray-400"
          >
            {/* Avatar + Online Status */}
            <div className="relative">
              <img
                src={chat.avatar}
                alt="avatar"
                className="w-10 h-10 rounded-full object-cover"
              />

              {chat.online && (
                <span className="absolute bottom-0 right-0 w-3 h-3 bg-green-500 border-2 border-white rounded-full"></span>
              )}
            </div>

            {/* Name + Last Message */}
            <div className="flex-1">
              <p className="font-semibold font-poppins">{chat.name}</p>
              <p className="text-gray-500 text-sm truncate w-[150px]">
                {getLastMessage(chat.messages)}
              </p>
            </div>

            {/* Unread Badge */}
            {chat.unread > 0 && (
              <span className="bg-green-500 text-white text-xs px-2 py-1 rounded-full">
                {chat.unread}
              </span>
            )}
          </div>
        ))}
      </div>
    </div>
  );
}
