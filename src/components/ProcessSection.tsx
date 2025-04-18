
export const ProcessSection = () => {
  return (
    <section className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold mb-16 text-center max-w-3xl mx-auto">
          Comment optimiser la gestion de vos formations ?
        </h2>
        
        <div className="mt-12">
          <h3 className="text-2xl font-semibold text-center mb-12">Processus simple en 3 étapes</h3>
          
          <div className="flex flex-col md:flex-row justify-between items-start max-w-4xl mx-auto relative">
            {/* Ligne connectant les étapes visible seulement sur desktop */}
            <div className="hidden md:block absolute top-5 left-[10%] right-[10%] h-0.5 bg-gray-300"></div>
            
            {/* Étape 1 */}
            <div className="relative flex flex-col items-center mb-12 md:mb-0 w-full md:w-auto">
              <div className="z-10 flex items-center justify-center w-10 h-10 bg-primary rounded-full text-white font-bold mb-4">
                1
              </div>
              <h4 className="font-semibold text-center">Choisissez vos besoins</h4>
              <p className="text-sm text-gray-600 text-center max-w-[200px] mt-2">
                Indiquez les cursus et modules de formation
              </p>
            </div>
            
            {/* Étape 2 */}
            <div className="relative flex flex-col items-center mb-12 md:mb-0 w-full md:w-auto">
              <div className="z-10 flex items-center justify-center w-10 h-10 bg-primary rounded-full text-white font-bold mb-4">
                2
              </div>
              <h4 className="font-semibold text-center">On vous propose des solutions</h4>
              <p className="text-sm text-gray-600 text-center max-w-[200px] mt-2">
                Voir notre réseau
              </p>
            </div>
            
            {/* Étape 3 */}
            <div className="relative flex flex-col items-center w-full md:w-auto">
              <div className="z-10 flex items-center justify-center w-10 h-10 bg-primary rounded-full text-white font-bold mb-4">
                3
              </div>
              <h4 className="font-semibold text-center">Recevez vos devis personnalisés</h4>
              <p className="text-sm text-gray-600 text-center max-w-[200px] mt-2">
                Sous 48h par email
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
