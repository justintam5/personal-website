export type ProjectType = {
  title: string;
  github?: string;
  documentation?: string;
  liveURL?: string;
  badges?: string[];
  description: string;
  images: string[];
  subCategories: {
    purpose: string;
    createdFor: string;
    impact?: string;
    team?: string;
  };
};

export default function Projects() {
  return <div className="flex flex-col gap-5 items-center"></div>;
}
