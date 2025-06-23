import Icon from "@/components/ui/icon";

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white py-12">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div>
            <div className="flex items-center space-x-2 mb-4">
              <div className="w-8 h-8 gradient-bg rounded-lg flex items-center justify-center">
                <Icon name="GraduationCap" className="text-white" size={20} />
              </div>
              <span className="text-xl font-montserrat font-bold">
                TutorSpace
              </span>
            </div>
            <p className="text-gray-400 text-sm">
              Лучшая платформа для поиска репетиторов и достижения учебных целей
            </p>
          </div>

          <div>
            <h3 className="font-montserrat font-semibold mb-4">Для учеников</h3>
            <ul className="space-y-2 text-sm text-gray-400">
              <li>
                <a href="#" className="hover:text-white transition-colors">
                  Поиск репетиторов
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-white transition-colors">
                  Популярные предметы
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-white transition-colors">
                  Как это работает
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-white transition-colors">
                  Отзывы
                </a>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="font-montserrat font-semibold mb-4">
              Для репетиторов
            </h3>
            <ul className="space-y-2 text-sm text-gray-400">
              <li>
                <a href="#" className="hover:text-white transition-colors">
                  Стать репетитором
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-white transition-colors">
                  Создать профиль
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-white transition-colors">
                  Правила платформы
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-white transition-colors">
                  Поддержка
                </a>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="font-montserrat font-semibold mb-4">
              Связаться с нами
            </h3>
            <div className="space-y-2 text-sm text-gray-400">
              <div className="flex items-center">
                <Icon name="Mail" className="mr-2" size={16} />
                help@tutorspace.ru
              </div>
              <div className="flex items-center">
                <Icon name="Phone" className="mr-2" size={16} />
                +7 (800) 123-45-67
              </div>
            </div>
          </div>
        </div>

        <div className="border-t border-gray-800 mt-8 pt-8 text-center text-sm text-gray-400">
          <p>&copy; 2024 TutorSpace. Все права защищены.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
