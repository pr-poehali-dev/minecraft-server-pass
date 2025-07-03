import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import Icon from "@/components/ui/icon";

export default function Contact() {
  const contactMethods = [
    {
      icon: "MessageCircle",
      title: "Telegram",
      description: "Быстрая связь и поддержка",
      value: "@minecraft_guide",
      action: "Написать",
    },
    {
      icon: "Mail",
      title: "Email",
      description: "Для детальных вопросов",
      value: "info@minecraft-guide.ru",
      action: "Отправить",
    },
    {
      icon: "Phone",
      title: "Телефон",
      description: "Консультация по телефону",
      value: "+7 (999) 123-45-67",
      action: "Позвонить",
    },
  ];

  return (
    <div className="py-20 bg-slate-50">
      <div className="max-w-6xl mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-slate-900 mb-4">
            Свяжитесь с нами
          </h2>
          <p className="text-xl text-slate-600 max-w-2xl mx-auto">
            Готовы начать? Выберите удобный способ связи
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
          {contactMethods.map((method, index) => (
            <Card
              key={index}
              className="bg-white border-slate-200 shadow-lg hover:shadow-xl transition-shadow duration-300"
            >
              <CardHeader className="text-center pb-4">
                <div className="w-16 h-16 bg-emerald-100 rounded-2xl flex items-center justify-center mx-auto mb-4">
                  <Icon
                    name={method.icon as any}
                    size={32}
                    className="text-emerald-600"
                  />
                </div>
                <CardTitle className="text-xl font-bold text-slate-900">
                  {method.title}
                </CardTitle>
                <CardDescription className="text-slate-600">
                  {method.description}
                </CardDescription>
              </CardHeader>
              <CardContent className="text-center">
                <p className="text-slate-800 font-semibold mb-4">
                  {method.value}
                </p>
                <Button className="w-full bg-emerald-500 hover:bg-emerald-600 text-white rounded-xl">
                  {method.action}
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="bg-white rounded-2xl p-8 border border-slate-200 shadow-lg">
          <div className="text-center mb-8">
            <h3 className="text-2xl font-bold text-slate-900 mb-2">
              Часто задаваемые вопросы
            </h3>
            <p className="text-slate-600">
              Ответы на популярные вопросы о наших услугах
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="space-y-4">
              <div className="border-l-4 border-emerald-500 pl-4">
                <h4 className="font-semibold text-slate-900 mb-1">
                  Как проходят занятия?
                </h4>
                <p className="text-slate-600 text-sm">
                  Все занятия проходят в игре с голосовым чатом Plasmovoice. Мы
                  объясняем всё простыми словами.
                </p>
              </div>

              <div className="border-l-4 border-emerald-500 pl-4">
                <h4 className="font-semibold text-slate-900 mb-1">
                  Нужен ли опыт игры?
                </h4>
                <p className="text-slate-600 text-sm">
                  Нет, мы специализируемся на работе с новичками. Начинаем с
                  самых основ.
                </p>
              </div>
            </div>

            <div className="space-y-4">
              <div className="border-l-4 border-emerald-500 pl-4">
                <h4 className="font-semibold text-slate-900 mb-1">
                  Какие способы оплаты?
                </h4>
                <p className="text-slate-600 text-sm">
                  Принимаем карты, переводы через СБП, Qiwi и другие популярные
                  способы.
                </p>
              </div>

              <div className="border-l-4 border-emerald-500 pl-4">
                <h4 className="font-semibold text-slate-900 mb-1">
                  Можно ли перенести занятие?
                </h4>
                <p className="text-slate-600 text-sm">
                  Да, мы работаем с гибким графиком. Просто сообщите заранее о
                  переносе.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
