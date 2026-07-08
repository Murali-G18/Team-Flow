import { useState } from "react";
import type { ChatMessageType } from "../../data/Chat";

interface Props {
  onSend: (message: ChatMessageType) => void;
}

export default function ChatInput({ onSend }: Props) {
  const [text, setText] = useState("");

  const send = () => {
    if (!text.trim()) return;

    const now = new Date();

    onSend({
      id: Date.now().toString(),
      sender: "You",
      message: text,
      time: now.toLocaleTimeString([], {
        hour: "2-digit",
        minute: "2-digit",
      }),
    });

    setText("");
  };

  return (
    <div className="bg-white rounded-2xl shadow p-5">

      <div className="flex gap-4">

        <input
          className="flex-1 border rounded-lg p-3"
          placeholder="Type your message..."
          value={text}
          onChange={(e) => setText(e.target.value)}
          onKeyDown={(e) => {
            if (e.key === "Enter") send();
          }}
        />

        <button
          onClick={send}
          className="bg-blue-600 text-white px-6 rounded-lg hover:bg-blue-700"
        >
          Send
        </button>

      </div>

    </div>
  );
}