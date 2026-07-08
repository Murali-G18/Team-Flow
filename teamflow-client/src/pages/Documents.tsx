import { useState } from "react";
import {
  useMutation,
  useQuery,
  useQueryClient,
} from "@tanstack/react-query";
import { Upload, Search } from "lucide-react";

import UploadModal from "../components/documents/UploadModel";
import DocumentCard from "../components/documents/DocumentCard";

import {
  getDocuments,
  uploadDocument,
  deleteDocument,
} from "../services/documentService";

export default function Documents() {
  const queryClient = useQueryClient();

  const [open, setOpen] = useState(false);
  const [search, setSearch] = useState("");

  const { data: documents = [], isLoading } = useQuery({
    queryKey: ["documents"],
    queryFn: getDocuments,
  });

  const uploadMutation = useMutation({
    mutationFn: uploadDocument,
    onSuccess: () => {
      queryClient.invalidateQueries({
        queryKey: ["documents"],
      });
    },
  });

  const deleteMutation = useMutation({
    mutationFn: deleteDocument,
    onSuccess: () => {
      queryClient.invalidateQueries({
        queryKey: ["documents"],
      });
    },
  });

  const filteredDocuments = documents.filter((doc: any) =>
    doc.name.toLowerCase().includes(search.toLowerCase())
  );

  if (isLoading) {
    return (
      <div className="text-center text-xl font-bold mt-10">
        Loading Documents...
      </div>
    );
  }

  return (
    <div className="space-y-8">

      {/* Header */}

      <div className="flex justify-between items-center">

        <div>

          <h1 className="text-4xl font-bold">
            Documents
          </h1>

          <p className="text-gray-500 mt-2">
            Manage all project files
          </p>

        </div>

        <button
          onClick={() => setOpen(true)}
          className="bg-blue-600 hover:bg-blue-700 text-white px-5 py-3 rounded-xl flex items-center gap-2"
        >
          <Upload size={20} />
          Upload
        </button>

      </div>

      {/* Search */}

      <div className="relative">

        <Search
          size={18}
          className="absolute left-3 top-3 text-gray-400"
        />

        <input
          type="text"
          placeholder="Search documents..."
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          className="border rounded-xl pl-10 pr-4 py-3 w-full"
        />

      </div>

      {/* Statistics */}

      <div className="grid grid-cols-1 md:grid-cols-3 gap-5">

        <div className="bg-white rounded-xl shadow p-5">
          <h3 className="text-gray-500">Total Documents</h3>
          <p className="text-3xl font-bold mt-2">
            {documents.length}
          </p>
        </div>

        <div className="bg-white rounded-xl shadow p-5">
          <h3 className="text-gray-500">Images</h3>
          <p className="text-3xl font-bold mt-2">
            {
              documents.filter((d: any) =>
                d.type.startsWith("image")
              ).length
            }
          </p>
        </div>

        <div className="bg-white rounded-xl shadow p-5">
          <h3 className="text-gray-500">Other Files</h3>
          <p className="text-3xl font-bold mt-2">
            {
              documents.filter(
                (d: any) =>
                  !d.type.startsWith("image")
              ).length
            }
          </p>
        </div>

      </div>

      {/* Documents */}

      {filteredDocuments.length === 0 ? (

        <div className="bg-white rounded-xl shadow p-10 text-center">

          <h2 className="text-2xl font-semibold">
            No Documents Found
          </h2>

          <p className="text-gray-500 mt-2">
            Upload your first document.
          </p>

        </div>

      ) : (

        <div className="grid md:grid-cols-2 xl:grid-cols-3 gap-6">

          {filteredDocuments.map((document: any) => (

            <DocumentCard
              key={document._id}
              document={document}
              onDelete={(id) => {
                if (
                  window.confirm(
                    "Delete this document?"
                  )
                ) {
                  deleteMutation.mutate(id);
                }
              }}
            />

          ))}

        </div>

      )}

      {/* Upload Modal */}

      <UploadModal
        open={open}
        onClose={() => setOpen(false)}
        onUpload={(file) =>
          uploadMutation.mutate(file)
        }
      />

    </div>
  );
}