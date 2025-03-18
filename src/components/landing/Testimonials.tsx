import { Card } from "./Card";

const testimonials = [
  {
    content:
      "I really appreciated this tax course. It provided me with the knowledge and skills I needed to start my tax career.",
    author: "Jessica Co",
  },
  {
    content:
      "This course is so practical and in-depth coverage of tax taxation that is both comprehensive and accessible.",
    author: "Andrew Lee",
  },
  {
    content:
      "An investment with technical skills knowledge of tax laws working in this key course was a game changer for me.",
    author: "Sarah Co",
  },
];

export const Testimonials = () => {
  return (
    <section className="px-[120px] py-[60px] max-md:px-[60px] max-md:py-10 max-sm:px-5 max-sm:py-8">
      <h2 className="text-[32px] font-semibold text-[#000066] mb-12">
        What learners say
      </h2>
      <div className="grid grid-cols-[repeat(3,1fr)] gap-8 max-md:grid-cols-[repeat(2,1fr)] max-sm:grid-cols-[1fr]">
        {testimonials.map((testimonial, index) => (
          <Card key={index}>
            <p className="leading-normal mb-6">{testimonial.content}</p>
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 bg-[#e0e0e0] rounded-[50%]" />
              <div className="font-medium">{testimonial.author}</div>
            </div>
          </Card>
        ))}
      </div>
    </section>
  );
};
