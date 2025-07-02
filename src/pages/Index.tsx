import Header from "@/components/Header";
import Hero from "@/components/Hero";
import CarCatalog from "@/components/CarCatalog";
import Services from "@/components/Services";

const Index = () => {
  return (
    <div className="min-h-screen bg-white">
      <Header />
      <Hero />
      <CarCatalog />
      <Services />
    </div>
  );
};

export default Index;
