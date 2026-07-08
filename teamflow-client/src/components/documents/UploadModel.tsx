import { useState } from "react";

interface Props {
  open: boolean;
  onClose: () => void;
  onUpload: (file: File) => void;
}

export default function UploadModal({
  open,
  onClose,
  onUpload,
}: Props) {
  const [file, setFile] = useState<File | null>(null);

  if (!open) return null;

  return (
    <div className="fixed inset-0 bg-black/40 flex justify-center items-center z-50">
      <div className="bg-white w-[500px] rounded-xl p-6">

        <h2 className="text-2xl font-bold mb-6">
          Upload Document
        </h2>

        <input
          type="file"
          onChange={(e) => {
            if (e.target.files) {
              setFile(e.target.files[0]);
            }
          }}
          className="w-full border p-3 rounded-lg"
        />

        {file && (
          <div className="mt-4 p-3 bg-slate-100 rounded-lg">
            <p><strong>Name:</strong> {file.name}</p>
            <p>
              <strong>Size:</strong>{" "}
              {(file.size / 1024 / 1024).toFixed(2)} MB
            </p>
          </div>
        )}

        <div className="flex justify-end gap-3 mt-6">

          <button
            onClick={onClose}
            className="border px-5 py-2 rounded-lg"
          >
            Cancel
          </button>

          <button
            disabled={!file}
            onClick={() => {
              if (file) {
                onUpload(file);
                onClose();
              }
            }}
            className="bg-blue-600 hover:bg-blue-700 text-white px-5 py-2 rounded-lg disabled:bg-gray-400"
          >
            Upload
          </button>

        </div>

      </div>
    </div>
  );
}