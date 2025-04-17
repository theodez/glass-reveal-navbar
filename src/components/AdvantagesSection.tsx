
import { CheckCircle, BellRing, Calendar, FileText } from "lucide-react";

export const AdvantagesSection = () => {
  const advantages = [
    {
      title: "Suivi des formations",
      description: "Planifiez et visualisez toutes les formations, depuis une interface claire.",
      icon: CheckCircle,
      color: "bg-blue-600"
    },
    {
      title: "Alertes automatiques",
      description: "Recevez des alertes avant que vos recyclages obligatoires expirent.",
      icon: BellRing,
      color: "bg-blue-600"
    },
    {
      title: "Calendrier de recyclages",
      description: "Suivez tous les recyclages à effectuer et ceux qu'on vous évite de faire.",
      icon: Calendar,
      color: "bg-blue-600"
    },
    {
      title: "Demande de devis",
      description: "Sélectionnez vos formations et demandez des devis personnalisés.",
      icon: FileText,
      color: "bg-blue-600"
    }
  ];

  return (
    <section id="avantages" className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-16">
          Ce que vous allez <span className="text-highlight">gagner</span>
        </h2>
        
        <div className="grid md:grid-cols-4 sm:grid-cols-2 gap-8">
          {advantages.map((advantage, idx) => (
            <div key={idx} className="flex flex-col items-center text-center">
              <div className={`${advantage.color} h-12 w-12 flex items-center justify-center rounded-lg mb-4`}>
                <advantage.icon className="h-6 w-6 text-white" />
              </div>
              <h3 className="font-semibold text-lg mb-2">{advantage.title}</h3>
              <p className="text-gray-600 text-sm">{advantage.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
