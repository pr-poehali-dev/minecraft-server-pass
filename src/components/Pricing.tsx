import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import Icon from "@/components/ui/icon";

export default function Pricing() {
  const plans = [
    {
      name: "Базовый",
      price: "500",
      duration: "1 час",
      description: "Идеально для первых шагов в Minecraft",
      features: [
        "Основы выживания",
        "Постройка убежища",
        "Добыча базовых ресурсов",
        "Крафт основных инструментов",
      ],
      popular: false,
      icon: "Pickaxe",
    },
    {
      name: "Стандарт",
      price: "1200",
      duration: "3 часа",
      description: "Полноценная помощь в развитии",
      features: [
        "Все из базового",
        "Продвинутый крафт",
        "Подготовка к боссам",
        "Базовые редстоун механизмы",
        "Помощь с зачарованием",
      ],
      popular: true,
      icon: "Sword",
    },
    {
      name: "Премиум",
      price: "2500",
      duration: "6 часов",
      description: "Полное погружение в мир Minecraft",
      features: [
        "Все из стандарта",
        "Битва с драконом",
        "Исследование End",
        "Автоматические фермы",
        "Мегапостройки",
        "Персональная поддержка",
      ],
      popular: false,
      icon: "Crown",
    },
  ];

  return (
    <div className="py-20 bg-slate-900">
      <div className="max-w-6xl mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
            Цены на проходки
          </h2>
          <p className="text-xl text-slate-300 max-w-2xl mx-auto">
            Выберите подходящий тариф для вашего уровня игры
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {plans.map((plan, index) => (
            <Card
              key={index}
              className={`relative bg-slate-800 border-slate-700 text-white ${plan.popular ? "ring-2 ring-emerald-400" : ""}`}
            >
              {plan.popular && (
                <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                  <Badge className="bg-emerald-500 text-white px-4 py-1 rounded-full">
                    Популярный
                  </Badge>
                </div>
              )}

              <CardHeader className="text-center pb-4">
                <div className="w-16 h-16 bg-emerald-500/20 rounded-2xl flex items-center justify-center mx-auto mb-4">
                  <Icon
                    name={plan.icon as any}
                    size={32}
                    className="text-emerald-400"
                  />
                </div>
                <CardTitle className="text-2xl font-bold text-white">
                  {plan.name}
                </CardTitle>
                <CardDescription className="text-slate-300">
                  {plan.description}
                </CardDescription>
                <div className="mt-6">
                  <div className="text-4xl font-bold text-emerald-400">
                    {plan.price}₽
                  </div>
                  <div className="text-slate-400 text-sm mt-1">
                    {plan.duration}
                  </div>
                </div>
              </CardHeader>

              <CardContent className="space-y-6">
                <ul className="space-y-3">
                  {plan.features.map((feature, idx) => (
                    <li key={idx} className="flex items-center text-slate-300">
                      <Icon
                        name="Check"
                        size={16}
                        className="text-emerald-400 mr-3 flex-shrink-0"
                      />
                      <span className="text-sm">{feature}</span>
                    </li>
                  ))}
                </ul>

                <Button
                  className={`w-full ${
                    plan.popular
                      ? "bg-emerald-500 hover:bg-emerald-600 text-white"
                      : "bg-slate-700 hover:bg-slate-600 text-white"
                  } rounded-xl py-6 text-base font-semibold`}
                >
                  Выбрать тариф
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="mt-16 text-center">
          <div className="bg-slate-800 rounded-2xl p-8 border border-slate-700">
            <h3 className="text-2xl font-bold text-white mb-4">
              Дополнительная информация
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-4 gap-6 text-center">
              <div className="flex flex-col items-center">
                <Icon
                  name="Shield"
                  size={24}
                  className="text-emerald-400 mb-2"
                />
                <p className="text-slate-300 text-sm">Безопасная оплата</p>
              </div>
              <div className="flex flex-col items-center">
                <Icon
                  name="RefreshCw"
                  size={24}
                  className="text-emerald-400 mb-2"
                />
                <p className="text-slate-300 text-sm">Возврат средств</p>
              </div>
              <div className="flex flex-col items-center">
                <Icon
                  name="Clock"
                  size={24}
                  className="text-emerald-400 mb-2"
                />
                <p className="text-slate-300 text-sm">Гибкое время</p>
              </div>
              <div className="flex flex-col items-center">
                <Icon
                  name="MessageCircle"
                  size={24}
                  className="text-emerald-400 mb-2"
                />
                <p className="text-slate-300 text-sm">Поддержка 24/7</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
