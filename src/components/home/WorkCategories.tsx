const workCategories = ["Data Science", "Robitcs", "Full-Stack Web Dev"];

export default function WorkCategories() {
  return (
    <h1 className="text-2xl font-thin text-gray-900 sm:text-4xl">
      <div className="flex flex-row gap-16">
        {workCategories.map((badge) => (
          <div key="badge" className="">
            {badge}
          </div>
        ))}
      </div>
    </h1>
  );
}
