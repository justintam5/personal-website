import Image from "next/image";
import { ProjectType } from "./Project";

interface ProductTailWindUiProps {
  project: ProjectType;
}

export default function ProductTailWindUi({ project }: ProductTailWindUiProps) {
  return (
    <div className="bg-white">
      <div className="mx-auto grid max-w-2xl grid-cols-1 items-center gap-x-8 gap-y-16 px-4 py-24 sm:px-6 sm:py-32 lg:max-w-7xl lg:grid-cols-2 lg:px-8">
        <div>
          <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
            {project.title}
          </h2>
          <p className="mt-4 text-gray-500">{project.description}</p>
          <dl className="mt-16 grid grid-cols-1 gap-x-6 gap-y-10 sm:grid-cols-2 sm:gap-y-16 lg:gap-x-8">
            {Object.entries(project.subCategories).map(
              ([name, description]) => (
                <div key={name} className="border-t border-gray-200 pt-4">
                  <dt className="font-medium text-gray-900">{name}</dt>
                  <dd className="mt-2 text-sm text-gray-500">{description}</dd>
                </div>
              )
            )}
          </dl>
        </div>
        <div className="grid grid-cols-2 grid-rows-2 gap-4 sm:gap-6 lg:gap-8">
          {project.images.map((url) => (
            <Image
              key={url}
              className="ronuded-lg"
              src={url}
              alt="project image"
            />
          ))}
        </div>
      </div>
    </div>
  );
}
