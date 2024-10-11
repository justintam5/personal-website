import Image from "next/image";
export default function Home() {
  return (
    <main className="grid min-h-full place-items-center">
      <div className="flex justify-center items-center h-screen m-20">
        <div className="flex flex-col items-center justify-center">
          <h1 className="m-20 text-4xl font-bold tracking-tight text-gray-600 sm:text-8xl">
            Please send a teamviewer link UwU Ow&lt;
          </h1>
          <Image
            src="/melo.jpeg"
            width={700}
            height={700}
            alt="Image from https://www.avogado6.com/"
            className=""
          />
        </div>
      </div>
    </main>
  );
}
