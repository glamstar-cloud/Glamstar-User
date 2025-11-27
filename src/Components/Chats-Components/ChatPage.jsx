import React, { useState } from "react";
import ChatSidebar from "./ChatSideBar";
import ChatWindow from "./ChatWindow";
import MessageInput from "./MessageInput";

import Avatar1 from '../../../Assets/Chats/Chats1.png'
import Avatar2 from '../../../Assets/Chats/CB2.png'
import Avatar3 from '../../../Assets/Chats/CB3.png'

export default function WhatsAppChatPage() {
  const [chats, setChats] = useState([
  {
    id: 1,
    name: "Glamour Studio",
    avatar: Avatar1,
    online: true,
    unread: 1,
    messages: [
      {
        id: 1,
        text: "Hi Glamour Studio, just confirming my bridal makeup trial",
        sender: "me",
        time: "09:30",
        avatar: Avatar2
      },
      {
        id: 2,
        text: "Hello, your bridal makeup trial is confirmed for next week!",
        sender: "other",
        time: "09:31",
        avatar: Avatar1
      }
    ]
  },

  {
    id: 2,
    name: "Hair Haven",
    avatar: Avatar3,
    online: false,
    unread: 0,
    messages: [
      { id: 1, 
        text: "Hi Hair Haven, just confirming my haircut", 
        sender: "me", 
        time: "08:00",
        avatar: Avatar2,
      },
      {
        id: 2,
        text: "Hello, your haircut is confirmed for next week!",
        sender: "other",
        time: "09:31",
        avatar: Avatar3
      }
    ]
  },

  {
    id: 3,
    name: "Nail Artistry",
    avatar: Avatar1,
    online: true,
    unread: 0,
    messages: [
      {
        id: 1,
        text: "Hi Nail Artistry, just confirming my booking",
        sender: "me",
        time: "09:30",
        avatar: Avatar2
      },
      {
        id: 2,
        text: "Hello, your booking is confirmed",
        sender: "other",
        time: "09:31",
        avatar: Avatar1
      }
    ]
  },

  {
    id: 4,
    name: "The Ink Spot",
    avatar: Avatar2,
    online: false,
    unread: 0,
    messages: [
      { id: 1, 
        text: "Hi Ink Spot, I just want to confirm my booking",
        sender: "me", 
        time: "08:00",
        avatar: Avatar1,
      },
      {
        id: 2,
        text: "Hello, your booking is confirmed",
        sender: "other",
        time: "09:31",
        avatar: Avatar2
      }
    ]
  },
  

]);


  const [activeChat, setActiveChat] = useState(null);

  const handleSelectChat = (chat) => {
    setActiveChat(chat);
  };

  const handleBack = () => {
    setActiveChat(null); // return to chat list on mobile
  };

const handleSend = (text) => {
  if (!text.trim()) return;

  // Update the main chats array
  const updatedChats = chats.map(chat =>
    chat.id === activeChat.id
      ? {
          ...chat,
          messages: [
            ...chat.messages,
            {
              id: Date.now(),
              text,
              sender: "me",
              time: new Date().toLocaleTimeString([], {
                hour: "2-digit",
                minute: "2-digit",
              }),
              avatar: Avatar1, // your avatar
            },
          ],
          // reset unread count for the active chat
          unread: 0,
        }
      : chat
  );

  setChats(updatedChats);

  // Update activeChat so the chat window refreshes immediately
  setActiveChat(updatedChats.find(c => c.id === activeChat.id));
};



 return (
  <div className="h-auto flex md:gap-5">

    {/* SIDEBAR */}
    <div className={`${activeChat ? "hidden" : "block"} md:block w-full md:w-72 md:border-r md:border-r-gray-300`}>
      <ChatSidebar chats={chats} onSelect={handleSelectChat} />
    </div>

    {/* CHAT WINDOW */}
    {activeChat && (
      <div className="flex flex-col flex-1 md:border-l md:border-l-gray-300">
        <ChatWindow
          chat={activeChat}
          messages={activeChat.messages}
          onBack={handleBack}
        />
        <MessageInput onSend={handleSend} />
      </div>
    )}

    {/* If no chat selected on desktop, show empty area */}
    {!activeChat && (
      <div className="hidden md:flex flex-1 items-center justify-center text-gray-400">
        Select a chat to start messaging
      </div>
    )}

  </div>
);
}