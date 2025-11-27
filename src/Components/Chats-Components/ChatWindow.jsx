import React from "react";
import { ArrowLeft } from "lucide-react";

export default function ChatWindow({ chat, messages, onBack }) {
  if (!chat) return null; // Safety check

  return (
    <div className="flex flex-col h-full">

      {/* Top Bar */}
      <div className="flex items-center gap-1 shadow-md border border-gray-300 rounded">
        {/* Back button for mobile */}
        <button
          onClick={onBack}
          className="md:hidden p-2 hover:bg-gray-200 rounded-full"
        >
          <ArrowLeft size={22} />
        </button>

        {/* Avatar */}
        <img
          src={chat.avatar}
          alt={chat.name}
          className="w-8 h-8 rounded-full object-cover"
        />

        {/* Name + online status */}
        <div className="flex flex-col pl-1">
          <h2 className="font-semibold font-playfair">{chat.name}</h2>
          <span
            className={`text-sm ${
              chat.online ? "text-gray-600" : "text-gray-600"
            }`}
          >
            {chat.online ? "Online" : "Offline" }
          </span>
        </div>
      </div>

      {/* Messages Area */}
      <div className="flex-1 overflow-y-auto py-4 space-y-4">
        {messages.map((msg) => (
          <div
            key={msg.id}
            className={`flex items-end gap-1 max-w-[98%] ${
              msg.sender === "me" ? "ml-auto justify-end" : ""
            }`}
          >
            {/* Avatar (left side for other user) */}
            {msg.sender !== "me" && (
              <img
                src={msg.avatar}
                alt="avatar"
                className="w-8 h-8 rounded-full object-cover"
              />
            )}

            {/* Message Bubble */}
            <div
              className={`rounded-lg px-3 py-2 text-sm shadow-md ${
                msg.sender === "me"
                  ? "bg-red-800 text-white"
                  : "bg-gray-100 text-black"
              }`}
            >
              <p>{msg.text}</p>
              <p className="text-[10px] text-gray-400 mt-1 text-right">
                {msg.time}
              </p>
            </div>

            {/* Avatar (right side for me) */}
            {msg.sender === "me" && (
              <img
                src={msg.avatar}
                alt="avatar"
                className="w-8 h-8 rounded-full object-cover"
              />
            )}
          </div>
        ))}
      </div>
    </div>
  );
}
