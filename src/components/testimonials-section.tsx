import { Card, CardContent } from "@/components/ui/card"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"

const testimonials = [
  {
    name: "Елена Соколова",
    role: "Главный технолог, НПО «Синтез»",
    avatar: "/professional-woman-scientist.png",
    content:
      "Chem AI сократил время разработки нового реагента с 6 месяцев до 7 недель. ИИ-моделирование заменило десятки лабораторных итераций.",
  },
  {
    name: "Дмитрий Волков",
    role: "Руководитель R&D, ХимТехГрупп",
    avatar: "/cybersecurity-expert-man.jpg",
    content:
      "Интеграция с нашей SCADA заняла два дня. Теперь все данные с линии в одном окне, а предиктивные алерты предотвратили три аварийные остановки за квартал.",
  },
  {
    name: "Ирина Кузнецова",
    role: "Начальник ОТК, Полимер Плюс",
    avatar: "/asian-woman-tech-developer.jpg",
    content:
      "Контроль качества стал прозрачным. Система сама формирует отчёты по ГОСТ, которые мы раньше заполняли вручную несколько часов в неделю.",
  },
]

export function TestimonialsSection() {
  return (
    <section className="py-24 px-6 bg-card">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-card-foreground mb-4 font-sans">Нам доверяют инженеры</h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto leading-relaxed">
            Что говорят химики-инженеры и технологи о работе с платформой Chem AI
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <Card key={index} className="glow-border slide-up" style={{ animationDelay: `${index * 0.15}s` }}>
              <CardContent className="p-6">
                <p className="text-card-foreground mb-6 leading-relaxed italic">"{testimonial.content}"</p>
                <div className="flex items-center gap-4">
                  <Avatar>
                    <AvatarImage src={testimonial.avatar || "/placeholder.svg"} alt={testimonial.name} />
                    <AvatarFallback>
                      {testimonial.name
                        .split(" ")
                        .map((n) => n[0])
                        .join("")}
                    </AvatarFallback>
                  </Avatar>
                  <div>
                    <p className="font-semibold text-primary">{testimonial.name}</p>
                    <p className="text-sm text-muted-foreground">{testimonial.role}</p>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}