
import { ShieldCheck, HeadphonesIcon, BuildingIcon } from "lucide-react";

export const TrustSection = () => {
  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-16">
          Pourquoi nous faire confiance
        </h2>
        
        <div className="grid md:grid-cols-3 gap-8">
          {/* BTP First */}
          <div className="border border-gray-200 p-8 rounded-lg text-center">
            <div className="flex justify-center mb-4">
              <BuildingIcon className="h-12 w-12 text-primary" />
            </div>
            <h3 className="text-xl font-semibold mb-2">BTP First</h3>
            <p className="text-gray-600 text-sm">
              Solution adaptée pour les entreprises du BTP
            </p>
          </div>
          
          {/* Support dédié */}
          <div className="border border-gray-200 p-8 rounded-lg text-center">
            <div className="flex justify-center mb-4">
              <HeadphonesIcon className="h-12 w-12 text-primary" />
            </div>
            <h3 className="text-xl font-semibold mb-2">Support dédié</h3>
            <p className="text-gray-600 text-sm">
              Équipe dédiée 24/7 pendant la beta
            </p>
          </div>
          
          {/* Sécurité */}
          <div className="border border-gray-200 p-8 rounded-lg text-center">
            <div className="flex justify-center mb-4">
              <ShieldCheck className="h-12 w-12 text-primary" />
            </div>
            <h3 className="text-xl font-semibold mb-2">Sécurité</h3>
            <p className="text-gray-600 text-sm">
              Données hébergées en Europe, SSL, RGPD
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};
