
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";

export const CtaSection = () => {
  return (
    <section className="py-20 bg-gray-50">
      <div className="container mx-auto px-4 text-center">
        <h2 className="text-3xl font-bold mb-6">
          Prêt à simplifier la gestion de vos formations ?
        </h2>
        <p className="text-gray-600 mb-10 max-w-2xl mx-auto">
          Accès gratuit pour les 15 premières entreprises. Rejoignez la liste d'attente dès maintenant.
        </p>
        
        <Link to="/connexion">
          <Button className="bg-primary text-white hover:bg-primary/90 py-6 px-8 text-base rounded-md transition-colors">
            Demander un accès à la beta
          </Button>
        </Link>
      </div>
    </section>
  );
};
