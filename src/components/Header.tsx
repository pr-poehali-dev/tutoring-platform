import { Button } from "@/components/ui/button";
import Icon from "@/components/ui/icon";

const Header = () => {
  return (
    <header className="w-full bg-white shadow-sm border-b border-gray-100">
      <div className="container mx-auto px-4 py-4 flex items-center justify-center">
        <div className="flex items-center">
          <span className="text-3xl font-montserrat font-extrabold text-gray-800 animate-fade-in">
            LernUp
          </span>
        </div>
      </div>
    </header>
  );
};

export default Header;
