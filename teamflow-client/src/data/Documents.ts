export interface DocumentItem {
  id: string;
  name: string;
  type: string;
  size: string;
  uploadedBy: string;
  uploadedAt: string;
}

export const initialDocuments: DocumentItem[] = [
  {
    id: "1",
    name: "Project Plan.pdf",
    type: "PDF",
    size: "2.4 MB",
    uploadedBy: "Sai",
    uploadedAt: "01 Jul 2026",
  },
  {
    id: "2",
    name: "UI Design.png",
    type: "Image",
    size: "1.8 MB",
    uploadedBy: "Priya",
    uploadedAt: "02 Jul 2026",
  },
  {
    id: "3",
    name: "Requirements.docx",
    type: "DOCX",
    size: "850 KB",
    uploadedBy: "Rahul",
    uploadedAt: "03 Jul 2026",
  },
];