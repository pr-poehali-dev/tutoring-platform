import Header from "@/components/Header";
import Hero from "@/components/Hero";
import SubjectsGrid from "@/components/SubjectsGrid";
import FeaturedTutors from "@/components/FeaturedTutors";
import CallToAction from "@/components/CallToAction";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen">
      <Header />
      <Hero />
      <SubjectsGrid />
      <FeaturedTutors />
      <CallToAction />
      <Footer />
    </div>
  );
};

export default Index;
