
import { Check } from "lucide-react";
import { Button } from "@/components/ui/button";

export const PricingSection = () => {
  return (
    <section className="py-20">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold mb-4">Nos offres</h2>
          <p className="text-lg text-gray-600">Choisissez l'offre qui correspond à vos besoins</p>
        </div>

        <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {/* Starter Plan */}
          <div className="relative bg-white p-8 rounded-lg shadow-sm border border-gray-100">
            <h3 className="text-2xl font-bold mb-4">Starter</h3>
            <div className="mb-6">
              <span className="text-4xl font-bold">0€</span>
              <span className="text-gray-600">/mois</span>
            </div>
            <ul className="space-y-4 mb-8">
              <li className="flex items-center gap-2">
                <Check className="text-primary" size={20} />
                <span>Jusqu'à 5 employés</span>
              </li>
              <li className="flex items-center gap-2">
                <Check className="text-primary" size={20} />
                <span>Suivi des formations de base</span>
              </li>
              <li className="flex items-center gap-2">
                <Check className="text-primary" size={20} />
                <span>Notifications email</span>
              </li>
            </ul>
            <Button className="w-full">Commencer gratuitement</Button>
          </div>

          {/* Pro Plan */}
          <div className="relative bg-white p-8 rounded-lg shadow-lg border-2 border-primary">
            <div className="absolute -top-4 left-1/2 -translate-x-1/2 bg-primary text-white px-4 py-1 rounded-full text-sm">
              Populaire
            </div>
            <h3 className="text-2xl font-bold mb-4">Pro</h3>
            <div className="mb-6">
              <span className="text-4xl font-bold">49€</span>
              <span className="text-gray-600">/mois</span>
            </div>
            <ul className="space-y-4 mb-8">
              <li className="flex items-center gap-2">
                <Check className="text-primary" size={20} />
                <span>Jusqu'à 20 employés</span>
              </li>
              <li className="flex items-center gap-2">
                <Check className="text-primary" size={20} />
                <span>Suivi avancé des formations</span>
              </li>
              <li className="flex items-center gap-2">
                <Check className="text-primary" size={20} />
                <span>Tableau de bord personnalisé</span>
              </li>
              <li className="flex items-center gap-2">
                <Check className="text-primary" size={20} />
                <span>Support prioritaire</span>
              </li>
            </ul>
            <Button className="w-full">Essai gratuit de 14 jours</Button>
          </div>

          {/* Enterprise Plan */}
          <div className="relative bg-white p-8 rounded-lg shadow-sm border border-gray-100">
            <h3 className="text-2xl font-bold mb-4">Enterprise</h3>
            <div className="mb-6">
              <span className="text-4xl font-bold">Sur mesure</span>
            </div>
            <ul className="space-y-4 mb-8">
              <li className="flex items-center gap-2">
                <Check className="text-primary" size={20} />
                <span>Nombre illimité d'employés</span>
              </li>
              <li className="flex items-center gap-2">
                <Check className="text-primary" size={20} />
                <span>Solutions personnalisées</span>
              </li>
              <li className="flex items-center gap-2">
                <Check className="text-primary" size={20} />
                <span>API & intégrations</span>
              </li>
              <li className="flex items-center gap-2">
                <Check className="text-primary" size={20} />
                <span>Account manager dédié</span>
              </li>
            </ul>
            <Button variant="outline" className="w-full">Contactez-nous</Button>
          </div>
        </div>
      </div>
    </section>
  );
};
