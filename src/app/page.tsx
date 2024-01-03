import Image from "next/image";

export default function Home() {
  return (
    <main className="grid min-h-full place-items-center">
      <div className="flex flex-row flex-wrap justify-center gap-5 content-center">
        <div className="flex flex-col gap-6 content-center justify-center">
          <h1 className="mt-2 text-3xl font-bold tracking-tight text-gray-900 sm:text-6xl">
            Justin Tam
          </h1>

          <div className="text-container">
            <span>HiHiHiHi Hi HiHi Hi Hi Hi Hi Hi Hi</span>
          </div>
          <div>Hi</div>
          <div>Hi</div>
        </div>
        <Image
          src="/ato16.jpeg"
          width={600}
          height={600}
          alt="Image from https://www.avogado6.com/"
          className="md:-mr-36"
        />
      </div>
    </main>
  );
}
