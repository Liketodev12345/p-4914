import { Card } from "./Card";

const advantages = [
  {
    icon: "ti ti-book",
    title: "Professional training",
    description:
      "Build your career prospects by learning new skills with proven professional training and certification.",
  },
  {
    icon: "ti ti-chart-line",
    title: "Get started today",
    description:
      "Build your career prospects, test the range of your goals, and create your own career path with ideas.",
  },
  {
    icon: "ti ti-certificate",
    title: "Lifelong career starting potential",
    description:
      "Build your career prospects by learning new skills with proven professional training and certification.",
  },
  {
    icon: "ti ti-target",
    title: "Challenge your curiosity",
    description:
      "Learning is about being curious and challenging your mind by doing something different.",
  },
  {
    icon: "ti ti-bulb",
    title: "Acquire new skills",
    description:
      "Develop yourself with capabilities of how you can gain skills that will help you succeed.",
  },
  {
    icon: "ti ti-users",
    title: "Work on your terms",
    description:
      "Get work and study balance and choose how you want to spend your time, when and where.",
  },
];

export const Advantages = () => {
  return (
    <section className="px-[120px] py-[60px] max-md:px-[60px] max-md:py-10 max-sm:px-5 max-sm:py-8">
      <h2 className="text-[32px] font-semibold text-[#000066] mb-12">
        Discover the advantages
      </h2>
      <div className="grid grid-cols-[repeat(3,1fr)] gap-8 max-md:grid-cols-[repeat(2,1fr)] max-sm:grid-cols-[1fr]">
        {advantages.map((advantage, index) => (
          <Card key={index}>
            <div className="text-2xl text-[#000066] mb-4">
              <i className={advantage.icon} />
            </div>
            <h3 className="font-medium mb-3">{advantage.title}</h3>
            <p className="text-[#666] leading-normal">
              {advantage.description}
            </p>
          </Card>
        ))}
      </div>
    </section>
  );
};
