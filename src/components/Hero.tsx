import { Button } from "@/components/ui/button";
import Icon from "@/components/ui/icon";

const Hero = () => {
  return (
    <section className="bg-gradient-to-br from-[#1A1F2C] to-[#0EA5E9]/20 py-20 px-6">
      <div className="max-w-7xl mx-auto">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div className="text-white">
            <h1 className="text-5xl font-bold font-montserrat mb-6 leading-tight">
              Автомобили из Кореи
              <span className="block text-[#0EA5E9]">прямо от дилеров</span>
            </h1>
            <p className="text-xl text-gray-300 mb-8 font-open-sans">
              Работаем только с официальными дилерами и проверенными аукционами.
              Полное сопровождение от выбора до получения авто в России.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 mb-12">
              <Button
                size="lg"
                className="bg-[#0EA5E9] hover:bg-[#0EA5E9]/80 text-lg px-8"
              >
                <Icon name="Search" size={20} className="mr-2" />
                Подобрать авто
              </Button>
              <Button
                size="lg"
                variant="outline"
                className="border-white text-white hover:bg-white hover:text-[#1A1F2C] text-lg px-8"
              >
                <Icon name="Calculator" size={20} className="mr-2" />
                Рассчитать стоимость
              </Button>
            </div>

            <div className="grid grid-cols-3 gap-8">
              <div className="text-center">
                <div className="text-3xl font-bold text-[#0EA5E9] mb-2">
                  500+
                </div>
                <div className="text-sm text-gray-400">Довольных клиентов</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-[#0EA5E9] mb-2">15</div>
                <div className="text-sm text-gray-400">Лет опыта</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-[#0EA5E9] mb-2">
                  24/7
                </div>
                <div className="text-sm text-gray-400">Поддержка</div>
              </div>
            </div>
          </div>

          <div className="relative">
            <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-8 border border-white/20">
              <h3 className="text-white text-xl font-semibold mb-6">
                Быстрый расчёт
              </h3>
              <div className="space-y-4">
                <div>
                  <label className="text-white/80 text-sm mb-2 block">
                    Марка автомобиля
                  </label>
                  <div className="bg-white/20 rounded-lg p-3 text-white">
                    Hyundai, Kia, Genesis...
                  </div>
                </div>
                <div>
                  <label className="text-white/80 text-sm mb-2 block">
                    Бюджет в рублях
                  </label>
                  <div className="bg-white/20 rounded-lg p-3 text-white">
                    От 1 500 000 ₽
                  </div>
                </div>
                <Button className="w-full bg-[#0EA5E9] hover:bg-[#0EA5E9]/80">
                  Получить предложения
                </Button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
