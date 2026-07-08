import {
  FileText,
  Image,
  Download,
  Trash2,
} from "lucide-react";

interface Props {
  document: any;
  onDelete: (id: string) => void;
}

export default function DocumentCard({
  document,
  onDelete,
}: Props) {
  const isImage = document.type.startsWith("image");

  return (
    <div className="bg-white rounded-xl shadow-md hover:shadow-xl transition p-5">

      <div className="flex justify-center mb-4">

        {isImage ? (
          <img
            src={document.url}
            alt={document.name}
            className="w-full h-40 object-cover rounded-lg"
          />
        ) : (
          <FileText
            size={80}
            className="text-blue-600"
          />
        )}

      </div>

      <h3 className="font-bold truncate">
        {document.name}
      </h3>

      <p className="text-sm text-gray-500 mt-1">
        {(document.size / 1024 / 1024).toFixed(2)} MB
      </p>

      <div className="flex justify-between mt-5">

        <a
          href={document.url}
          target="_blank"
          rel="noreferrer"
          className="flex items-center gap-2 bg-green-600 hover:bg-green-700 text-white px-3 py-2 rounded-lg"
        >
          <Download size={16} />
          Download
        </a>

        <button
          onClick={() => onDelete(document._id)}
          className="flex items-center gap-2 bg-red-600 hover:bg-red-700 text-white px-3 py-2 rounded-lg"
        >
          <Trash2 size={16} />
          Delete
        </button>

      </div>

    </div>
  );
}