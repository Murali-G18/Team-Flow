import { useEffect, useRef, useState } from "react";
import socket from "../hooks/useSocket";
import { getMessages, saveMessage } from "../services/chatService";

export default function Chat() {
  const [messages, setMessages] = useState<any[]>([]);
  const [text, setText] = useState("");
  const [onlineUsers, setOnlineUsers] = useState<string[]>([]);
  const [typing, setTyping] = useState("");

  const messagesEndRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    loadMessages();

    socket.emit("joinRoom", {
      room: "general",
      user: "You",
    });

    socket.on("receiveMessage", (message) => {
      setMessages((prev) => [...prev, message]);
    });

    socket.on("onlineUsers", (users) => {
      setOnlineUsers(users);
    });

    socket.on("typing", (user) => {
      setTyping(`${user} is typing...`);

      setTimeout(() => {
        setTyping("");
      }, 1500);
    });

    return () => {
      socket.off("receiveMessage");
      socket.off("onlineUsers");
      socket.off("typing");
    };
  }, []);

  useEffect(() => {
    messagesEndRef.current?.scrollIntoView({
      behavior: "smooth",
    });
  }, [messages]);

  const loadMessages = async () => {
    try {
      const data = await getMessages();
      setMessages(data);
    } catch (err) {
      console.error(err);
    }
  };

  const sendMessage = async () => {
    if (!text.trim()) return;

    const message = {
      sender: "You",
      text,
      room: "general",
    };

    try {
      await saveMessage(message);

      socket.emit("sendMessage", message);

      setText("");
    } catch (err) {
      console.error(err);
    }
  };

  return (
    <div className="max-w-6xl mx-auto">

      <h1 className="text-4xl font-bold mb-6">
        Team Chat
      </h1>

      {/* Online Users */}

      <div className="bg-green-50 rounded-xl p-4 mb-5 shadow">

        <h2 className="font-bold text-green-700 mb-2">
          🟢 Online Users ({onlineUsers.length})
        </h2>

        <div className="flex flex-wrap gap-2">

          {onlineUsers.map((user, index) => (
            <span
              key={index}
              className="bg-green-600 text-white px-3 py-1 rounded-full text-sm"
            >
              {user}
            </span>
          ))}

        </div>

      </div>

      {/* Chat Box */}

      <div className="bg-white rounded-xl shadow-lg h-[650px] flex flex-col">

        {/* Messages */}

        <div className="flex-1 overflow-y-auto p-6 space-y-4 bg-gray-50">

          {messages.map((msg, index) => (
            <div
              key={index}
              className={`flex ${
                msg.sender === "You"
                  ? "justify-end"
                  : "justify-start"
              }`}
            >

              <div
                className={`max-w-md rounded-xl px-4 py-3 shadow ${
                  msg.sender === "You"
                    ? "bg-blue-600 text-white"
                    : "bg-white"
                }`}
              >

                <h4 className="font-semibold text-sm">
                  {msg.sender}
                </h4>

                <p className="mt-1">
                  {msg.text}
                </p>

              </div>

            </div>
          ))}

          <div ref={messagesEndRef}></div>

        </div>

        {/* Typing */}

        <div className="px-5 pt-2 h-6 text-sm text-gray-500">

          {typing}

        </div>

        {/* Input */}

        <div className="border-t p-4 flex gap-3">

          <input
            type="text"
            placeholder="Type your message..."
            value={text}
            onChange={(e) => {
              setText(e.target.value);

              socket.emit("typing", {
                room: "general",
                user: "You",
              });
            }}
            onKeyDown={(e) => {
              if (e.key === "Enter") {
                sendMessage();
              }
            }}
            className="flex-1 border rounded-xl px-4 py-3 outline-none focus:ring-2 focus:ring-blue-500"
          />

          <button
            onClick={sendMessage}
            className="bg-blue-600 hover:bg-blue-700 text-white px-8 rounded-xl font-semibold"
          >
            Send
          </button>

        </div>

      </div>

    </div>
  );
}