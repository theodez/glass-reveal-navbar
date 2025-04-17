
export const TestimonialsSection = () => {
  return (
    <section id="testimonials" className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-12">Les retours terrain</h2>
        <p className="text-center text-gray-600 mb-16 max-w-3xl mx-auto">
          Ils utilisent UpForm pour simplifier la gestion de leurs formations.
        </p>
        
        <div className="grid md:grid-cols-3 gap-8">
          {/* Témoignage 1 */}
          <div className="bg-gray-50 p-6 rounded-lg">
            <div className="flex justify-center mb-4 text-primary text-2xl">❝</div>
            <p className="text-gray-700 text-center mb-6">
              On peut enfin savoir très rapidement qui dispose de quelle formation. C'est super
              pratique et ça nous fait gagner un temps fou.
            </p>
            <div className="text-center">
              <p className="font-semibold">Responsable d'équipe - 5 salariés</p>
            </div>
          </div>
          
          {/* Témoignage 2 */}
          <div className="bg-gray-50 p-6 rounded-lg">
            <div className="flex justify-center mb-4 text-primary text-2xl">❝</div>
            <p className="text-gray-700 text-center mb-6">
              Avant on attendait l'inspection pour régler. Maintenant, les recyclages sont planifiés, et
              on suit de près nos échéances.
            </p>
            <div className="text-center">
              <p className="font-semibold">Assistant SSE - entreprise de grue marine</p>
            </div>
          </div>
          
          {/* Témoignage 3 */}
          <div className="bg-gray-50 p-6 rounded-lg">
            <div className="flex justify-center mb-4 text-primary text-2xl">❝</div>
            <p className="text-gray-700 text-center mb-6">
              On a rapidement chez notre écart par rapport à la règlementation. Là on peut voir justifier auprès
              de nos clients qu'on est en règle.
            </p>
            <div className="text-center">
              <p className="font-semibold">Conducteur de travaux - service 1900</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
