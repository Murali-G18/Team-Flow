import { useState } from "react";
import type { DocumentItem } from "../../data/Documents";

interface Props {
  onUpload: (document: DocumentItem) => void;
}

export default function UploadDocument({ onUpload }: Props) {
  const [name, setName] = useState("");
  const [type, setType] = useState("PDF");
  const [size, setSize] = useState("");

  const upload = () => {
    if (!name || !size) return;

    onUpload({
      id: Date.now().toString(),
      name,
      type,
      size,
      uploadedBy: "You",
      uploadedAt: new Date().toLocaleDateString(),
    });

    setName("");
    setSize("");
    setType("PDF");
  };

  return (
    <div className="bg-white rounded-2xl shadow p-6">

      <h2 className="text-2xl font-bold mb-6">
        Upload Document
      </h2>

      <div className="grid md:grid-cols-3 gap-4">

        <input
          className="border rounded-lg p-3"
          placeholder="File Name"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />

        <select
          className="border rounded-lg p-3"
          value={type}
          onChange={(e) => setType(e.target.value)}
        >
          <option>PDF</option>
          <option>DOCX</option>
          <option>Image</option>
          <option>XLSX</option>
        </select>

        <input
          className="border rounded-lg p-3"
          placeholder="Size (e.g. 2.5 MB)"
          value={size}
          onChange={(e) => setSize(e.target.value)}
        />

      </div>

      <button
        onClick={upload}
        className="mt-6 bg-blue-600 hover:bg-blue-700 text-white px-6 py-3 rounded-xl"
      >
        Upload
      </button>

    </div>
  );
}