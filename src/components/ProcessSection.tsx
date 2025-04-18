
import { ArrowRight } from "lucide-react";

export const ProcessSection = () => {
  return (
    <section className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl font-bold text-center mb-16">
          Comment optimiser la gestion de vos formations ?
        </h2>
        
        <div className="grid gap-16">
          <h3 className="text-2xl font-semibold text-center">
            Processus simple en 3 étapes
          </h3>
          
          <div className="max-w-5xl mx-auto">
            {/* Timeline container */}
            <div className="relative">
              {/* Timeline line */}
              <div className="absolute left-4 md:left-1/2 transform -translate-x-1/2 h-full w-0.5 bg-primary/30"></div>
              
              {/* Step 1 */}
              <div className="relative flex md:justify-between items-center mb-12 md:even:flex-row-reverse">
                <div className="flex items-center gap-4 md:w-[45%]">
                  <div className="w-8 h-8 bg-primary rounded-full flex items-center justify-center text-white font-bold z-10">
                    1
                  </div>
                  <div className="flex-1 p-4 bg-white rounded-lg shadow-sm">
                    <h4 className="text-xl font-semibold mb-2">Choisissez vos besoins</h4>
                    <p className="text-gray-600">
                      Indiquez les cursus et modules de formation
                    </p>
                  </div>
                </div>
                <ArrowRight className="hidden md:block text-primary absolute left-1/2 -translate-x-1/2" />
              </div>
              
              {/* Step 2 */}
              <div className="relative flex md:justify-between items-center mb-12 md:even:flex-row-reverse">
                <div className="flex items-center gap-4 md:w-[45%]">
                  <div className="w-8 h-8 bg-primary rounded-full flex items-center justify-center text-white font-bold z-10">
                    2
                  </div>
                  <div className="flex-1 p-4 bg-white rounded-lg shadow-sm">
                    <h4 className="text-xl font-semibold mb-2">On vous propose des solutions</h4>
                    <p className="text-gray-600">
                      Voir notre réseau
                    </p>
                  </div>
                </div>
                <ArrowRight className="hidden md:block text-primary absolute left-1/2 -translate-x-1/2" />
              </div>
              
              {/* Step 3 */}
              <div className="relative flex md:justify-between items-center">
                <div className="flex items-center gap-4 md:w-[45%]">
                  <div className="w-8 h-8 bg-primary rounded-full flex items-center justify-center text-white font-bold z-10">
                    3
                  </div>
                  <div className="flex-1 p-4 bg-white rounded-lg shadow-sm">
                    <h4 className="text-xl font-semibold mb-2">Recevez vos devis personnalisés</h4>
                    <p className="text-gray-600">
                      Sous 48h par email
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
