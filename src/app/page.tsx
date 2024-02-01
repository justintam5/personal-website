import { PersonalHeadings, WorkCategories } from "@/components/home";
import WorkExperience from "@/components/work-experience/WorkExperience";
import Image from "next/image";

export default function Home() {
  return (
    <main className="grid min-h-full place-items-center">
      <div className=" py-8">
        <WorkCategories />
      </div>
      <div className="flex flex-row flex-wrap justify-center gap-5 content-center">
        <div className="flex flex-col content-center justify-center">
          <div className=" flex flex-row gap-5"></div>
          <h1 className="mt-2 text-3xl font-bold tracking-tight text-gray-900 sm:text-6xl">
            Justin Tam
          </h1>
          <p className="text-sm italic pb-5">jt.tam514@gmail.com</p>
          <PersonalHeadings />
        </div>
        <Image
          src="/ato16.jpeg"
          width={600}
          height={600}
          alt="Image from https://www.avogado6.com/"
          className="md:-mr-36"
        />
      </div>

      <div></div>
    </main>
  );
}
