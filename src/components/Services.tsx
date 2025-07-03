import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import Icon from "@/components/ui/icon";

export default function Services() {
  const services = [
    {
      icon: "Pickaxe",
      title: "Базовое выживание",
      description:
        "Помощь в освоении основ выживания, постройке убежища и добыче ресурсов",
      features: [
        "Первые шаги",
        "Постройка дома",
        "Добыча ресурсов",
        "Крафт инструментов",
      ],
    },
    {
      icon: "Sword",
      title: "Продвинутое выживание",
      description:
        "Изучение сложных механик, автоматизация и подготовка к боссам",
      features: [
        "Редстоун механизмы",
        "Автоматические фермы",
        "Подготовка к боссам",
        "Зачарование",
      ],
    },
    {
      icon: "Crown",
      title: "Эндгейм контент",
      description:
        "Битвы с драконом, исследование End и постройка масштабных проектов",
      features: [
        "Битва с драконом",
        "Исследование End",
        "Элитра полёты",
        "Мегапостройки",
      ],
    },
  ];

  return (
    <div className="py-20 bg-slate-50">
      <div className="max-w-6xl mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-slate-900 mb-4">
            Наши услуги
          </h2>
          <p className="text-xl text-slate-600 max-w-2xl mx-auto">
            Профессиональная помощь в Minecraft 1.21.4 с голосовым чатом
            Plasmovoice
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <Card
              key={index}
              className="bg-white border-slate-200 shadow-lg hover:shadow-xl transition-shadow duration-300"
            >
              <CardHeader className="text-center pb-4">
                <div className="w-16 h-16 bg-emerald-100 rounded-2xl flex items-center justify-center mx-auto mb-4">
                  <Icon
                    name={service.icon as any}
                    size={32}
                    className="text-emerald-600"
                  />
                </div>
                <CardTitle className="text-xl font-bold text-slate-900">
                  {service.title}
                </CardTitle>
                <CardDescription className="text-slate-600">
                  {service.description}
                </CardDescription>
              </CardHeader>
              <CardContent>
                <ul className="space-y-3">
                  {service.features.map((feature, idx) => (
                    <li key={idx} className="flex items-center text-slate-700">
                      <Icon
                        name="Check"
                        size={16}
                        className="text-emerald-500 mr-3 flex-shrink-0"
                      />
                      <span className="text-sm">{feature}</span>
                    </li>
                  ))}
                </ul>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="mt-16 bg-white rounded-2xl p-8 border border-slate-200 shadow-lg">
          <div className="flex flex-col md:flex-row items-center justify-between">
            <div className="mb-6 md:mb-0">
              <h3 className="text-2xl font-bold text-slate-900 mb-2">
                Персональный подход
              </h3>
              <p className="text-slate-600">
                Каждая проходка адаптируется под ваш уровень и цели
              </p>
            </div>
            <div className="flex items-center space-x-6">
              <div className="text-center">
                <Icon
                  name="Clock"
                  size={24}
                  className="text-emerald-500 mx-auto mb-2"
                />
                <p className="text-sm text-slate-600">Гибкое время</p>
              </div>
              <div className="text-center">
                <Icon
                  name="Headphones"
                  size={24}
                  className="text-emerald-500 mx-auto mb-2"
                />
                <p className="text-sm text-slate-600">Голосовой чат</p>
              </div>
              <div className="text-center">
                <Icon
                  name="Users"
                  size={24}
                  className="text-emerald-500 mx-auto mb-2"
                />
                <p className="text-sm text-slate-600">Для новичков</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
