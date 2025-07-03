import { Button } from "@/components/ui/button";
import Icon from "@/components/ui/icon";

export default function Hero() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 flex items-center justify-center px-4">
      <div className="max-w-4xl mx-auto text-center">
        <div className="mb-6">
          <Icon
            name="Gamepad2"
            size={64}
            className="mx-auto text-emerald-400 mb-4"
          />
        </div>

        <h1 className="text-5xl md:text-7xl font-bold text-white mb-6 leading-tight">
          Minecraft
          <span className="text-emerald-400 block">Проходки</span>
        </h1>

        <p className="text-xl md:text-2xl text-slate-300 mb-8 max-w-2xl mx-auto leading-relaxed">
          Профессиональная помощь в выживании на сервере Minecraft 1.21.4
          <br />
          <span className="text-emerald-400">
            С голосовым чатом и персональной поддержкой
          </span>
        </p>

        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
          <Button
            size="lg"
            className="bg-emerald-500 hover:bg-emerald-600 text-white px-8 py-6 text-lg font-semibold rounded-xl"
          >
            <Icon name="Play" size={20} className="mr-2" />
            Начать проходку
          </Button>

          <Button
            variant="outline"
            size="lg"
            className="border-emerald-400 text-emerald-400 hover:bg-emerald-400 hover:text-slate-900 px-8 py-6 text-lg font-semibold rounded-xl"
          >
            <Icon name="MessageCircle" size={20} className="mr-2" />
            Узнать больше
          </Button>
        </div>

        <div className="mt-12 grid grid-cols-1 md:grid-cols-3 gap-6 text-center">
          <div className="bg-slate-800/50 backdrop-blur-sm rounded-xl p-6 border border-slate-700">
            <Icon
              name="Mic"
              size={32}
              className="mx-auto text-emerald-400 mb-3"
            />
            <h3 className="text-white font-semibold mb-2">Голосовой чат</h3>
            <p className="text-slate-400">Plasmovoice</p>
          </div>

          <div className="bg-slate-800/50 backdrop-blur-sm rounded-xl p-6 border border-slate-700">
            <Icon
              name="Users"
              size={32}
              className="mx-auto text-emerald-400 mb-3"
            />
            <h3 className="text-white font-semibold mb-2">Для новичков</h3>
            <p className="text-slate-400">Простые объяснения</p>
          </div>

          <div className="bg-slate-800/50 backdrop-blur-sm rounded-xl p-6 border border-slate-700">
            <Icon
              name="Zap"
              size={32}
              className="mx-auto text-emerald-400 mb-3"
            />
            <h3 className="text-white font-semibold mb-2">Быстрый старт</h3>
            <p className="text-slate-400">От 30 минут</p>
          </div>
        </div>
      </div>
    </div>
  );
}
