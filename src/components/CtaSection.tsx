
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";

export const CtaSection = () => {
  return (
    <section className="py-20 bg-gray-50">
      <div className="container mx-auto px-4 text-center">
        <h2 className="text-3xl font-bold mb-6">
          Prêt à simplifier la gestion de vos formations ?
        </h2>
        <p className="text-gray-600 mb-10">
          Accès gratuit pour les 15 premières entreprises
        </p>
        
        <Link to="/connexion">
          <Button className="button-primary mx-auto">
            Demander un accès à beta
          </Button>
        </Link>
      </div>
    </section>
  );
};
