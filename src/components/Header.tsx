import { Button } from "@/components/ui/button";
import Icon from "@/components/ui/icon";

const Header = () => {
  return (
    <header className="w-full bg-white shadow-sm border-b border-gray-100">
      <div className="container mx-auto px-4 py-4 flex items-center justify-between">
        <div className="flex items-center space-x-2">
          <div className="w-8 h-8 gradient-bg rounded-lg flex items-center justify-center">
            <Icon name="GraduationCap" className="text-white" size={20} />
          </div>
          <span className="text-xl font-montserrat font-bold text-gray-800">
            TutorSpace
          </span>
        </div>

        <nav className="hidden md:flex items-center space-x-6">
          <a
            href="#"
            className="text-gray-600 hover:text-primary transition-colors"
          >
            Предметы
          </a>
          <a
            href="#"
            className="text-gray-600 hover:text-primary transition-colors"
          >
            Репетиторы
          </a>
          <a
            href="#"
            className="text-gray-600 hover:text-primary transition-colors"
          >
            О проекте
          </a>
        </nav>

        <div className="flex items-center space-x-3">
          <Button variant="ghost" className="text-gray-600">
            Войти
          </Button>
          <Button className="gradient-bg text-white hover:opacity-90">
            Регистрация
          </Button>
        </div>
      </div>
    </header>
  );
};

export default Header;
