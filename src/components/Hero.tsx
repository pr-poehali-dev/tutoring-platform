import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import Icon from "@/components/ui/icon";
import { useState } from "react";

const Hero = () => {
  const [searchQuery, setSearchQuery] = useState("");

  return (
    <section className="relative">
      {/* Фиолетовая полоска с основным заголовком */}
      <div className="gradient-bg rounded-full mx-4 py-8 px-6">
        <div className="container mx-auto text-center">
          <h1 className="text-4xl md:text-5xl font-montserrat font-bold mb-6 text-white animate-fade-in">
            Найдите идеального <br />
            репетитора
          </h1>

          <p className="text-lg mb-6 max-w-2xl mx-auto text-white/90 animate-fade-in">
            Тысячи проверенных преподавателей готовы помочь вам достичь учебных
            целей
          </p>

          <div className="max-w-md mx-auto animate-scale-in">
            <div className="relative">
              <Input
                placeholder="Найти предмет или репетитора..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full py-3 pl-12 pr-4 text-gray-800 bg-white rounded-full border-none shadow-lg"
              />
              <Icon
                name="Search"
                className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-400"
                size={20}
              />
            </div>
          </div>
        </div>
      </div>

      {/* Кнопка и статистика */}
      <div className="container mx-auto px-4 py-12 text-center">
        <Button
          size="lg"
          className="bg-primary text-white hover:bg-primary/90 px-8 py-3 rounded-full font-medium mb-12"
        >
          <Icon name="Sparkles" className="mr-2" size={20} />
          Начать поиск
        </Button>

        {/* Три фиолетовых карточки */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-4xl mx-auto">
          <div className="gradient-bg rounded-lg p-6 text-white text-center shadow-lg">
            <div className="text-3xl font-bold mb-2">1000+</div>
            <div className="text-white/90">Репетиторов</div>
          </div>
          <div className="gradient-bg rounded-lg p-6 text-white text-center shadow-lg">
            <div className="text-3xl font-bold mb-2">50+</div>
            <div className="text-white/90">Предметов</div>
          </div>
          <div className="gradient-bg rounded-lg p-6 text-white text-center shadow-lg">
            <div className="text-3xl font-bold mb-2">4.9</div>
            <div className="text-white/90">Средний рейтинг</div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
