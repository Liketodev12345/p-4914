import { Header } from "@/components/landing/Header";
import { Advantages } from "@/components/landing/Advantages";
import { Banner } from "@/components/landing/Banner";
import { Stats } from "@/components/landing/Stats";
import { Testimonials } from "@/components/landing/Testimonials";
import { Footer } from "@/components/landing/Footer";

const Index = () => {
  return (
    <div className="text-gray-900">
      <link
        href="https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700&display=swap"
        rel="stylesheet"
      />
      <Header />
      <main>
        <Advantages />
        <Banner />
        <Stats />
        <Testimonials />
      </main>
      <Footer />
    </div>
  );
};

export default Index;
