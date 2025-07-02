import { Button } from "@/components/ui/button";
import Icon from "@/components/ui/icon";

const Header = () => {
  return (
    <header className="bg-[#1A1F2C] text-white py-4 px-6">
      <div className="max-w-7xl mx-auto flex items-center justify-between">
        <div className="flex items-center space-x-2">
          <Icon name="Car" size={28} className="text-[#0EA5E9]" />
          <h1 className="text-2xl font-bold font-montserrat">K-Auto96</h1>
        </div>

        <nav className="hidden md:flex items-center space-x-8">
          <a href="#catalog" className="hover:text-[#0EA5E9] transition-colors">
            Каталог
          </a>
          <a
            href="#how-it-works"
            className="hover:text-[#0EA5E9] transition-colors"
          >
            Как работаем
          </a>
          <a href="#reviews" className="hover:text-[#0EA5E9] transition-colors">
            Отзывы
          </a>
          <a
            href="#services"
            className="hover:text-[#0EA5E9] transition-colors"
          >
            Услуги
          </a>
          <a href="#faq" className="hover:text-[#0EA5E9] transition-colors">
            FAQ
          </a>
          <a
            href="#contacts"
            className="hover:text-[#0EA5E9] transition-colors"
          >
            Контакты
          </a>
        </nav>

        <div className="flex items-center space-x-4">
          <Button
            variant="outline"
            className="hidden md:block border-[#0EA5E9] text-[#0EA5E9] hover:bg-[#0EA5E9] hover:text-white"
          >
            <Icon name="Phone" size={16} className="mr-2" />
            +7 (999) 123-45-67
          </Button>
          <Button className="bg-[#0EA5E9] hover:bg-[#0EA5E9]/80">
            Консультация
          </Button>
        </div>
      </div>
    </header>
  );
};

export default Header;
