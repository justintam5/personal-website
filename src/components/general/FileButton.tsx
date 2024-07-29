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
      className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
      onClick={handleButtonClick}
    >
      {text}
    </button>
  );
};

export default FileButton;
