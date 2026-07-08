import ChatMessage from "./ChatMessage";
import type { ChatMessageType } from "../../data/Chat";

interface Props {
  messages: ChatMessageType[];
}

export default function ChatList({ messages }: Props) {
  return (
    <div className="space-y-4">

      {messages.map((msg) => (

        <ChatMessage
          key={msg.id}
          message={msg}
        />

      ))}

    </div>
  );
}