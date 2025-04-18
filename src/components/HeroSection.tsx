
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { Card } from "@/components/ui/card";

export const HeroSection = () => {
  return (
    <section className="pt-28 pb-16 min-h-screen relative">
      {/* Diagonal gradient overlay */}
      <div className="absolute inset-0 bg-gradient-to-br from-[#FEC6A1] via-white/80 to-white -z-10 transform -rotate-6 scale-110"></div>
      
      <div className="container mx-auto px-4 grid md:grid-cols-2 gap-12 items-center relative z-10">
        <div className="space-y-6">
          <h1 className="text-4xl md:text-5xl font-bold leading-tight">
            L'outil pour gérer les formations de vos salariés, et rester <span className="text-highlight">en conformité.</span>
          </h1>
          <p className="text-lg text-gray-700 dark:text-gray-300">
            Créez et visualisez les formations de vos salariés, recevez des 
            notifications de rappels, suivez vos recyclages, et demandez des devis.
          </p>

          <div className="flex flex-wrap gap-6">
            <Card className="p-6 bg-white/80 backdrop-blur shadow-lg">
              <p className="text-2xl font-bold text-primary mb-2">29€</p>
              <p className="text-sm text-gray-600">par mois / utilisateur</p>
              <ul className="mt-4 space-y-2">
                <li className="flex items-center gap-2">
                  <div className="w-2 h-2 bg-primary rounded-full"></div>
                  <span className="text-sm">Accès illimité</span>
                </li>
                <li className="flex items-center gap-2">
                  <div className="w-2 h-2 bg-primary rounded-full"></div>
                  <span className="text-sm">Support premium</span>
                </li>
              </ul>
            </Card>
          </div>
          
          <div className="flex flex-wrap gap-4 pt-2">
            <div className="flex items-center gap-2">
              <div className="w-4 h-4 bg-primary rounded"></div>
              <span className="text-sm">Conforme RGPD</span>
            </div>
            <div className="flex items-center gap-2">
              <div className="w-4 h-4 bg-primary rounded"></div>
              <span className="text-sm">Pensé pour le terrain</span>
            </div>
            <div className="flex items-center gap-2">
              <div className="w-4 h-4 bg-primary rounded"></div>
              <span className="text-sm">Accès beta gratuit</span>
            </div>
          </div>
          
          <div className="pt-4">
            <span className="text-sm text-gray-600 dark:text-gray-400">
              Support 24/7
            </span>
          </div>
          
          <Link to="/connexion">
            <Button className="button-primary">
              Demander la beta gratuite
            </Button>
          </Link>
        </div>

        <div className="md:order-1 order-0">
          <div className="bg-white p-4 rounded-xl shadow-xl">
            <img 
              src="/placeholder.svg"
              alt="Dashboard UpForm" 
              className="w-full rounded-md aspect-[16/10] object-cover bg-gray-100"
            />
          </div>
        </div>
      </div>
    </section>
  );
};
