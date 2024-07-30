"use client";

interface FileButtonProps {
  pdfUrl: string;
  text: string;
}

const FileButton = ({ pdfUrl, text }: FileButtonProps) => {
  const handleButtonClick = (event: any) => {
    window.open(pdfUrl, "_blank");
  };

  return (
    <button
      className="bg-white bg-opacity-30 hover:opacity-70 text-gray-600 text-opacity-100 font-bold py-2 px-4 rounded"
      onClick={handleButtonClick}
    >
      {text}
    </button>
  );
};

export default FileButton;
