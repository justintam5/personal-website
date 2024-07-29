import Image from "next/image";
import FileButton from "@/components/general/FileButton";

export default function Home() {
  return (
    <main className="grid min-h-full place-items-center">
      <div className="flex flex-row flex-wrap justify-center gap-10 content-center">
        <div className="flex flex-col gap-6 content-center justify-center">
          <div>
            {/* <h1 className="mt-2 text-md tracking-tight text-black sm:text-xl">
              Hi there, my name is
            </h1> */}
            <h1 className="mt-2 text-4xl font-bold tracking-tight text-gray-600 sm:text-8xl">
              Justin Tam
            </h1>
          </div>

          <div>
            <FileButton pdfUrl="/files/Resume_07-2024.pdf" text="Resume" />
          </div>

          <div>
            <FileButton
              pdfUrl="/files/Unofficial_Transcript.pdf"
              text="Transcript"
            />
          </div>
          {/* <hr className="h-px bg-gray-400 border-0 dark:bg-gray-700"></hr> */}
          <div>
            <FileButton
              pdfUrl="/files/PHY4006_Final_Report_Tam_300026471.pdf"
              text="Physics Paper"
            />
          </div>
          <div>
            <FileButton
              pdfUrl="/files/Project_Paper_G56.pdf"
              text="Computer Science Paper"
            />
          </div>
        </div>
        <Image
          src="/ato16.jpeg"
          width={700}
          height={700}
          alt="Image from https://www.avogado6.com/"
          className="md:-mr-36"
        />
      </div>
    </main>
  );
}
