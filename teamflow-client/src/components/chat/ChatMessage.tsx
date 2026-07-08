import type { ChatMessageType } from "../../data/Chat";

interface Props {
  message: ChatMessageType;
}

export default function ChatMessage({ message }: Props) {
  return (
    <div className="bg-white rounded-xl shadow p-4">

      <div className="flex justify-between">

        <h3 className="font-bold">
          {message.sender}
        </h3>

        <span className="text-sm text-slate-500">
          {message.time}
        </span>

      </div>

      <p className="mt-3">
        {message.message}
      </p>

    </div>
  );
}