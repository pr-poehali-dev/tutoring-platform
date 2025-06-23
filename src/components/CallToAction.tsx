import { Button } from "@/components/ui/button";
import Icon from "@/components/ui/icon";

const CallToAction = () => {
  return (
    <section className="py-16 gradient-bg">
      <div className="container mx-auto px-4 text-center text-white">
        <h2 className="text-3xl md:text-4xl font-montserrat font-bold mb-4">
          Готовы начать обучение?
        </h2>
        <p className="text-xl mb-8 max-w-2xl mx-auto opacity-90">
          Присоединяйтесь к тысячам студентов, которые уже достигли своих целей
          с нашими репетиторами
        </p>

        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
          <Button
            size="lg"
            className="bg-white text-primary hover:bg-gray-100 px-8 py-3"
          >
            <Icon name="UserPlus" className="mr-2" size={20} />
            Стать учеником
          </Button>
          <Button
            size="lg"
            variant="outline"
            className="border-white text-white hover:bg-white hover:text-primary px-8 py-3"
          >
            <Icon name="GraduationCap" className="mr-2" size={20} />
            Стать репетитором
          </Button>
        </div>

        <div className="mt-12 flex justify-center items-center space-x-8 text-sm opacity-75">
          <div className="flex items-center">
            <Icon name="Shield" className="mr-2" size={16} />
            Проверенные репетиторы
          </div>
          <div className="flex items-center">
            <Icon name="Clock" className="mr-2" size={16} />
            Быстрый поиск
          </div>
          <div className="flex items-center">
            <Icon name="Heart" className="mr-2" size={16} />
            Гарантия качества
          </div>
        </div>
      </div>
    </section>
  );
};

export default CallToAction;
