import DocumentCard from "./DocumentCard";

import type { DocumentItem } from "../../data/Documents";

interface Props {
  documents: DocumentItem[];
  onDelete: (id: string) => void;
}

export default function DocumentList({
  documents,
  onDelete,
}: Props) {
  return (
    <div className="grid lg:grid-cols-2 gap-6">

      {documents.map((doc) => (

        <DocumentCard
          key={doc.id}
          document={doc}
          onDelete={onDelete}
        />

      ))}

    </div>
  );
}