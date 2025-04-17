
import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import { Link } from "react-router-dom";

export const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const isScrolled = window.scrollY > 50;
      if (isScrolled !== scrolled) {
        setScrolled(isScrolled);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [scrolled]);

  return (
    <header 
      className={cn(
        "fixed top-0 left-0 right-0 z-50 transition-all duration-300 w-full",
        scrolled ? "glass-effect py-3" : "bg-transparent py-4"
      )}
    >
      <div className="container mx-auto flex justify-between items-center px-4">
        <div className="flex items-center">
          <Link to="/" className="flex items-center">
            <span className="text-xl font-bold flex items-center">
              <span className="bg-primary text-white p-1 rounded mr-1">Up</span>Form
            </span>
          </Link>
        </div>
        
        <nav className={cn(
          "md:flex items-center gap-8",
          mobileMenuOpen ? "block absolute top-full left-0 right-0 bg-white shadow-lg p-4 mt-2" : "hidden"
        )}>
          <a href="#avantages" className="font-medium hover:text-primary transition-colors block md:inline-block py-2 md:py-0">Ce que vous allez gagner</a>
          <a href="#testimonials" className="font-medium hover:text-primary transition-colors block md:inline-block py-2 md:py-0">Voix d'utilisateur pro</a>
          <a href="#faq" className="font-medium hover:text-primary transition-colors block md:inline-block py-2 md:py-0">FAQ</a>
          <a href="#contact" className="font-medium hover:text-primary transition-colors block md:inline-block py-2 md:py-0">Contact</a>
          <Link to="/connexion" className="font-medium hover:text-primary transition-colors block md:inline-block py-2 md:py-0">Connexion</Link>
        </nav>
        
        <div className="flex items-center">
          <Link to="/connexion" className="button-primary hidden md:inline-flex">
            Connexion
          </Link>
          <Button 
            className="md:hidden" 
            variant="outline" 
            size="icon"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          >
            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><line x1="4" x2="20" y1="12" y2="12"/><line x1="4" x2="20" y1="6" y2="6"/><line x1="4" x2="20" y1="18" y2="18"/></svg>
          </Button>
        </div>
      </div>
    </header>
  );
};
