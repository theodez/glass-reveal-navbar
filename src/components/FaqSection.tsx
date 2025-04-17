
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";

export const FaqSection = () => {
  const faqItems = [
    {
      question: "Comment UpForm peut-il aider mon entreprise ?",
      answer: "UpForm vous aide à suivre les formations de vos employés, gérer les recyclages, et rester en conformité avec les réglementations. Notre plateforme vous permet de visualiser rapidement l'état des formations et de recevoir des alertes automatiques."
    },
    {
      question: "Combien coûte l'utilisation d'UpForm ?",
      answer: "UpForm propose une version bêta gratuite pour les premiers utilisateurs. Contactez-nous pour plus d'informations sur nos forfaits."
    },
    {
      question: "Est-ce que c'est compatible avec mes outils RH ?",
      answer: "UpForm est conçu pour s'intégrer facilement avec la plupart des outils RH courants. Notre équipe peut vous aider à mettre en place l'intégration appropriée."
    },
    {
      question: "Comment fonctionnera la beta gratuite ?",
      answer: "La beta gratuite vous donne accès à toutes les fonctionnalités de la plateforme pendant une période limitée. Vous pourrez tester l'outil dans votre contexte professionnel sans engagement."
    }
  ];

  return (
    <section id="faq" className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-12">FAQ</h2>
        
        <div className="max-w-3xl mx-auto">
          <Accordion type="single" collapsible className="space-y-4">
            {faqItems.map((item, idx) => (
              <AccordionItem key={idx} value={`item-${idx}`} className="bg-white rounded-lg overflow-hidden border border-gray-200">
                <AccordionTrigger className="px-6 py-4 hover:no-underline">
                  {item.question}
                </AccordionTrigger>
                <AccordionContent className="px-6 pb-4 pt-2">
                  {item.answer}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
      </div>
    </section>
  );
};
