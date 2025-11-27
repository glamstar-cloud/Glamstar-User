import React, { useState } from "react";

export default function MessageInput({ onSend }) {
  const [text, setText] = useState("");

  const handleSendClick = () => {
    if (text.trim() === "") return;
    onSend(text);     // send text to parent
    setText("");      // clear input
  };

  return (
    <div className="py-4 border-t flex gap-2">
      <input
        type="text"
        value={text}
        onChange={(e) => setText(e.target.value)}
        placeholder="Type a message..."
        className="flex-1 border rounded-lg p-2 outline-none placeholder:text-sm"
      />
      <button
        onClick={handleSendClick}
        className="bg-red-800 text-white rounded-lg px-4 py-2 hover:bg-gray-600"
      >
        Send
      </button>
    </div>
  );
}
