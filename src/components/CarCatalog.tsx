import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import Icon from "@/components/ui/icon";

const CarCatalog = () => {
  const cars = [
    {
      id: 1,
      brand: "Hyundai",
      model: "Santa Fe",
      year: 2024,
      price: "2 850 000",
      image: "/placeholder.svg",
      fuel: "Бензин",
      transmission: "Автомат",
      mileage: "5 000",
      status: "В наличии",
    },
    {
      id: 2,
      brand: "Kia",
      model: "Sorento",
      year: 2023,
      price: "2 650 000",
      image: "/placeholder.svg",
      fuel: "Гибрид",
      transmission: "Автомат",
      mileage: "12 000",
      status: "На аукционе",
    },
    {
      id: 3,
      brand: "Genesis",
      model: "GV70",
      year: 2024,
      price: "4 200 000",
      image: "/placeholder.svg",
      fuel: "Бензин",
      transmission: "Автомат",
      mileage: "8 000",
      status: "У дилера",
    },
  ];

  return (
    <section id="catalog" className="py-20 px-6 bg-gray-50">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-[#0F0F0F] mb-4">
            Актуальные предложения
          </h2>
          <p className="text-xl text-[#6B7280] max-w-2xl mx-auto">
            Автомобили от официальных дилеров и проверенных аукционов Кореи
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
          {cars.map((car) => (
            <Card
              key={car.id}
              className="overflow-hidden hover:shadow-xl transition-shadow duration-300"
            >
              <div className="relative">
                <img
                  src={car.image}
                  alt={`${car.brand} ${car.model}`}
                  className="w-full h-48 object-cover"
                />
                <Badge
                  className={`absolute top-4 right-4 ${
                    car.status === "В наличии"
                      ? "bg-green-500"
                      : car.status === "На аукционе"
                        ? "bg-orange-500"
                        : "bg-blue-500"
                  }`}
                >
                  {car.status}
                </Badge>
              </div>

              <CardContent className="p-6">
                <div className="mb-4">
                  <h3 className="text-xl font-bold text-[#0F0F0F] mb-1">
                    {car.brand} {car.model}
                  </h3>
                  <p className="text-[#6B7280]">{car.year} год</p>
                </div>

                <div className="grid grid-cols-2 gap-4 mb-6 text-sm">
                  <div className="flex items-center">
                    <Icon
                      name="Fuel"
                      size={16}
                      className="mr-2 text-[#22C55E]"
                    />
                    {car.fuel}
                  </div>
                  <div className="flex items-center">
                    <Icon
                      name="Settings"
                      size={16}
                      className="mr-2 text-[#22C55E]"
                    />
                    {car.transmission}
                  </div>
                  <div className="flex items-center">
                    <Icon
                      name="Gauge"
                      size={16}
                      className="mr-2 text-[#22C55E]"
                    />
                    {car.mileage} км
                  </div>
                  <div className="flex items-center">
                    <Icon
                      name="Calendar"
                      size={16}
                      className="mr-2 text-[#22C55E]"
                    />
                    {car.year}
                  </div>
                </div>

                <div className="flex items-center justify-between">
                  <div>
                    <span className="text-2xl font-bold text-[#0F0F0F]">
                      {car.price} ₽
                    </span>
                    <p className="text-sm text-[#6B7280]">под ключ в России</p>
                  </div>
                  <Button className="bg-[#F97316] hover:bg-[#F97316]/80 text-white">
                    Подробнее
                  </Button>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="text-center">
          <Button
            size="lg"
            variant="outline"
            className="border-[#F59E0B] text-[#F59E0B] hover:bg-[#F59E0B] hover:text-black"
          >
            <Icon name="Plus" size={20} className="mr-2" />
            Показать все автомобили
          </Button>
        </div>
      </div>
    </section>
  );
};

export default CarCatalog;
