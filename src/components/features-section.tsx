import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"

const features = [
  {
    title: "ИИ-моделирование реакций",
    description: "Предсказание хода химических реакций и побочных продуктов с точностью до 98,5% благодаря нейросетевым моделям.",
    icon: "brain",
    badge: "ИИ",
  },
  {
    title: "Соответствие стандартам",
    description: "Встроенные проверки ГОСТ, ISO и REACH — платформа сама отслеживает актуальность регуляторных требований.",
    icon: "lock",
    badge: "Стандарты",
  },
  {
    title: "Цифровой двойник процесса",
    description: "Виртуальное воспроизведение технологических линий в реальном времени с визуализацией параметров и отклонений.",
    icon: "globe",
    badge: "Digital Twin",
  },
  {
    title: "Предиктивная оптимизация",
    description: "ML-алгоритмы анализируют исторические данные и предлагают оптимальные режимы работы для снижения брака и расхода сырья.",
    icon: "zap",
    badge: "Оптимизация",
  },
  {
    title: "Интеграция с оборудованием",
    description: "Подключение к датчикам, SCADA-системам и лабораторным приборам через единый API без сложной настройки.",
    icon: "link",
    badge: "SCADA",
  },
  {
    title: "Аналитика качества",
    description: "Автоматический контроль качества продукта на каждом этапе: от сырья до готовой партии с полной историей данных.",
    icon: "target",
    badge: "Контроль",
  },
]

export function FeaturesSection() {
  return (
    <section className="py-24 px-6 bg-background">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-foreground mb-4 font-sans">Возможности платформы</h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto leading-relaxed">
            Инструменты, которые химики-инженеры ждали — от моделирования до контроля качества в одном интерфейсе
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <Card
              key={index}
              className="glow-border hover:shadow-lg transition-all duration-300 slide-up"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <CardHeader>
                <div className="flex items-center justify-between mb-2">
                  <span className="text-3xl">
                    {feature.icon === "brain" && "&#129504;"}
                    {feature.icon === "lock" && "&#128274;"}
                    {feature.icon === "globe" && "&#127760;"}
                    {feature.icon === "zap" && "&#9889;"}
                    {feature.icon === "link" && "&#128279;"}
                    {feature.icon === "target" && "&#127919;"}
                  </span>
                  <Badge variant="secondary" className="bg-accent text-accent-foreground">
                    {feature.badge}
                  </Badge>
                </div>
                <CardTitle className="text-xl font-bold text-card-foreground">{feature.title}</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-muted-foreground leading-relaxed">
                  {feature.description}
                </CardDescription>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}