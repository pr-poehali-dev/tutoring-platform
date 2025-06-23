import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import Icon from "@/components/ui/icon";
import { useState } from "react";

const Hero = () => {
  const [searchQuery, setSearchQuery] = useState("");

  return (
    <section className="relative min-h-[600px] gradient-bg overflow-hidden">
      <div className="absolute inset-0 bg-black/10"></div>
      <div className="relative container mx-auto px-4 py-20 text-center text-white">
        <h1 className="text-5xl md:text-6xl font-montserrat font-bold mb-6 animate-fade-in">
          Найдите идеального <br />
          <span className="text-primary-light">репетитора</span>
        </h1>

        <p className="text-xl mb-8 max-w-2xl mx-auto opacity-90 animate-fade-in">
          Тысячи проверенных преподавателей готовы помочь вам достичь учебных
          целей
        </p>

        <div className="max-w-md mx-auto mb-8 animate-scale-in">
          <div className="relative">
            <Input
              placeholder="Найти предмет или репетитора..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full py-3 pl-12 pr-4 text-gray-800 bg-white rounded-full border-0 shadow-lg"
            />
            <Icon
              name="Search"
              className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-400"
              size={20}
            />
          </div>
        </div>

        <Button
          size="lg"
          className="bg-white text-primary hover:bg-gray-100 px-8 py-3 rounded-full font-medium"
        >
          <Icon name="Sparkles" className="mr-2" size={20} />
          Начать поиск
        </Button>

        <div className="mt-12 grid grid-cols-1 md:grid-cols-3 gap-6 max-w-4xl mx-auto">
          <div className="text-center">
            <div className="text-3xl font-bold mb-2">1000+</div>
            <div className="text-primary-light">Репетиторов</div>
          </div>
          <div className="text-center">
            <div className="text-3xl font-bold mb-2">50+</div>
            <div className="text-primary-light">Предметов</div>
          </div>
          <div className="text-center">
            <div className="text-3xl font-bold mb-2">4.9</div>
            <div className="text-primary-light">Средний рейтинг</div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
