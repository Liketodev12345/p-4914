const stats = [
  {
    number: "1000+",
    label: "Successful students",
  },
  {
    number: "60+",
    label: "Hours of self-study content",
  },
  {
    number: "15+",
    label: "Years of experience in professional education",
  },
];

export const Stats = () => {
  return (
    <section className="bg-[#f8f9fa] px-[120px] py-[60px] max-md:px-[60px] max-md:py-10 max-sm:px-5 max-sm:py-8">
      <h2 className="text-[32px] font-semibold text-[#000066] mb-12">Why us</h2>
      <div className="flex justify-between max-w-[800px] mx-auto my-0 max-sm:flex-col max-sm:gap-8">
        {stats.map((stat, index) => (
          <div key={index} className="text-center">
            <div className="text-5xl font-semibold text-[#000066] mb-2">
              {stat.number}
            </div>
            <div className="text-[#666]">{stat.label}</div>
          </div>
        ))}
      </div>
    </section>
  );
};
