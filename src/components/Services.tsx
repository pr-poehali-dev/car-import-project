import { Card, CardContent } from "@/components/ui/card";
import Icon from "@/components/ui/icon";

const Services = () => {
  const services = [
    {
      icon: "Ship",
      title: "Доставка из Кореи",
      description:
        "Морская и автомобильная доставка с полным страхованием груза",
      features: [
        "Контейнерные перевозки",
        "Отслеживание груза 24/7",
        "Страхование до 100%",
      ],
    },
    {
      icon: "FileText",
      title: "Растаможка под ключ",
      description: "Полное оформление всех документов и прохождение таможни",
      features: ["Подготовка документов", "Уплата пошлин", "Получение ОТТС"],
    },
    {
      icon: "Shield",
      title: "Гарантия качества",
      description: "Проверка технического состояния перед отправкой",
      features: [
        "Диагностика у дилера",
        "Фото и видео отчет",
        "Гарантия 1 год",
      ],
    },
    {
      icon: "Headphones",
      title: "Сопровождение",
      description: "Персональный менеджер на всех этапах покупки",
      features: [
        "Консультации 24/7",
        "Помощь в выборе",
        "Поддержка после покупки",
      ],
    },
  ];

  return (
    <section id="services" className="py-20 px-6 bg-white">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-[#0F0F0F] mb-4">
            Наши услуги
          </h2>
          <p className="text-xl text-[#6B7280] max-w-2xl mx-auto">
            Полный цикл услуг от выбора автомобиля до получения ключей в России
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {services.map((service, index) => (
            <Card
              key={index}
              className="text-center hover:shadow-lg transition-shadow duration-300 border-0 bg-gray-50"
            >
              <CardContent className="p-8">
                <div className="w-16 h-16 bg-[#22C55E] rounded-full flex items-center justify-center mx-auto mb-6">
                  <Icon name={service.icon} size={32} className="text-white" />
                </div>

                <h3 className="text-xl font-bold text-[#0F0F0F] mb-4">
                  {service.title}
                </h3>
                <p className="text-[#6B7280] mb-6">{service.description}</p>

                <ul className="space-y-2">
                  {service.features.map((feature, idx) => (
                    <li
                      key={idx}
                      className="flex items-center text-sm text-[#6B7280]"
                    >
                      <Icon
                        name="Check"
                        size={16}
                        className="text-[#22C55E] mr-2"
                      />
                      {feature}
                    </li>
                  ))}
                </ul>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="mt-16 bg-gradient-to-r from-[#0F0F0F] to-[#F59E0B] rounded-2xl p-8 text-white text-center">
          <h3 className="text-2xl font-bold mb-4">Полная стоимость под ключ</h3>
          <p className="text-lg mb-6 opacity-90">
            Никаких скрытых платежей. Цена включает все услуги по растаможке и
            доставке
          </p>
          <div className="grid md:grid-cols-3 gap-6 max-w-4xl mx-auto">
            <div className="text-center">
              <div className="text-3xl font-bold mb-2">0₽</div>
              <div className="text-sm opacity-80">Предоплата за услуги</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold mb-2">30</div>
              <div className="text-sm opacity-80">Дней до получения авто</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold mb-2">100%</div>
              <div className="text-sm opacity-80">Гарантия доставки</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Services;
