
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
          
          <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
            {/* Étape 1 */}
            <div className="flex flex-col items-center text-center p-6 bg-white rounded-lg shadow-sm">
              <div className="w-12 h-12 bg-primary rounded-full flex items-center justify-center text-white font-bold mb-4">
                1
              </div>
              <h4 className="text-xl font-semibold mb-3">Choisissez vos besoins</h4>
              <p className="text-gray-600">
                Indiquez les cursus et modules de formation
              </p>
            </div>
            
            {/* Étape 2 */}
            <div className="flex flex-col items-center text-center p-6 bg-white rounded-lg shadow-sm">
              <div className="w-12 h-12 bg-primary rounded-full flex items-center justify-center text-white font-bold mb-4">
                2
              </div>
              <h4 className="text-xl font-semibold mb-3">On vous propose des solutions</h4>
              <p className="text-gray-600">
                Voir notre réseau
              </p>
            </div>
            
            {/* Étape 3 */}
            <div className="flex flex-col items-center text-center p-6 bg-white rounded-lg shadow-sm">
              <div className="w-12 h-12 bg-primary rounded-full flex items-center justify-center text-white font-bold mb-4">
                3
              </div>
              <h4 className="text-xl font-semibold mb-3">Recevez vos devis personnalisés</h4>
              <p className="text-gray-600">
                Sous 48h par email
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
