import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion"

export function FAQSection() {
  const faqs = [
    {
      question: "Как быстро можно внедрить платформу?",
      answer:
        "Базовое подключение и настройка занимают от 3 до 10 рабочих дней в зависимости от сложности инфраструктуры. Мы предоставляем выделенного инженера на весь период интеграции.",
    },
    {
      question: "Работает ли Chem AI с нашим оборудованием?",
      answer:
        "Платформа поддерживает OPC-UA, Modbus, HART и большинство промышленных протоколов. Перед проектом мы проводим бесплатный аудит совместимости.",
    },
    {
      question: "Где хранятся данные производства?",
      answer:
        "Данные хранятся на серверах в России и соответствуют требованиям 152-ФЗ. Доступна опция on-premise развёртывания на серверах предприятия.",
    },
    {
      question: "Нужна ли специальная подготовка персонала?",
      answer:
        "Интерфейс интуитивно понятен инженерам и технологам. Мы проводим обучение в формате 2-дневного практикума и предоставляем видеокурс с тестированием.",
    },
    {
      question: "Как Chem AI работает с нормативной базой?",
      answer:
        "Встроенная база нормативных документов регулярно обновляется. Платформа автоматически сигнализирует об изменениях в стандартах, которые затрагивают ваши процессы.",
    },
    {
      question: "Какова модель ценообразования?",
      answer:
        "Мы работаем по подписке с тарификацией по числу пользователей и подключённых установок. Есть пилотный период 30 дней для оценки реального эффекта на вашем производстве.",
    },
  ]

  return (
    <section className="py-24 bg-black">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6 font-orbitron">Частые вопросы</h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto font-space-mono">
            Ответы на популярные вопросы о платформе Chem AI, интеграции и условиях работы.
          </p>
        </div>

        <div className="max-w-4xl mx-auto">
          <Accordion type="single" collapsible className="w-full">
            {faqs.map((faq, index) => (
              <AccordionItem key={index} value={`item-${index}`} className="border-red-500/20 mb-4">
                <AccordionTrigger className="text-left text-lg font-semibold text-white hover:text-red-400 font-orbitron px-6 py-4">
                  {faq.question}
                </AccordionTrigger>
                <AccordionContent className="text-gray-300 leading-relaxed px-6 pb-4 font-space-mono">
                  {faq.answer}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
      </div>
    </section>
  )
}