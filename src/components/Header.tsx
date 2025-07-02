import { Button } from "@/components/ui/button";
import Icon from "@/components/ui/icon";

const Header = () => {
  return (
    <header className="bg-[#0F0F0F] text-white py-4 px-6">
      <div className="max-w-7xl mx-auto flex items-center justify-between">
        <div className="flex items-center space-x-2">
          <Icon name="Car" size={28} className="text-[#F59E0B]" />
          <h1 className="text-2xl font-bold font-montserrat">K-Auto96</h1>
        </div>

        <nav className="hidden md:flex items-center space-x-8">
          <a href="#catalog" className="hover:text-[#F59E0B] transition-colors">
            Каталог
          </a>
          <a
            href="#how-it-works"
            className="hover:text-[#F59E0B] transition-colors"
          >
            Как работаем
          </a>
          <a href="#reviews" className="hover:text-[#F59E0B] transition-colors">
            Отзывы
          </a>
          <a
            href="#services"
            className="hover:text-[#F59E0B] transition-colors"
          >
            Услуги
          </a>
          <a href="#faq" className="hover:text-[#F59E0B] transition-colors">
            FAQ
          </a>
          <a
            href="#contacts"
            className="hover:text-[#F59E0B] transition-colors"
          >
            Контакты
          </a>
        </nav>

        <div className="flex items-center space-x-4">
          <Button
            variant="outline"
            className="hidden md:block border-[#F59E0B] text-[#F59E0B] hover:bg-[#F59E0B] hover:text-black"
          >
            <Icon name="Phone" size={16} className="mr-2" />
            +7 (999) 123-45-67
          </Button>
          <Button className="bg-[#F59E0B] hover:bg-[#F59E0B]/80 text-black">
            Консультация
          </Button>
        </div>
      </div>
    </header>
  );
};

export default Header;
