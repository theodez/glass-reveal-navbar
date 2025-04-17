
import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";

export const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);

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
        "fixed top-0 left-0 right-0 z-50 transition-all duration-300",
        scrolled ? "glass-effect py-3" : "bg-transparent py-4"
      )}
    >
      <div className="container mx-auto flex justify-between items-center">
        <div className="flex items-center">
          <a href="/" className="flex items-center">
            <span className="text-xl font-bold flex items-center">
              <span className="bg-primary text-white p-1 rounded mr-1">Up</span>Form
            </span>
          </a>
        </div>
        
        <nav className="hidden md:flex items-center gap-8">
          <a href="#avantages" className="font-medium hover:text-primary transition-colors">Ce que vous allez gagner</a>
          <a href="#testimonials" className="font-medium hover:text-primary transition-colors">Voix d'utilisateur pro</a>
          <a href="#faq" className="font-medium hover:text-primary transition-colors">FAQ</a>
          <a href="#contact" className="font-medium hover:text-primary transition-colors">Contact</a>
          <a href="/connexion" className="font-medium hover:text-primary transition-colors">Connexion</a>
        </nav>
        
        <div>
          <Button className="button-primary hidden md:inline-flex">
            Demander la beta gratuite
          </Button>
          <Button className="md:hidden" variant="outline" size="icon">
            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><line x1="4" x2="20" y1="12" y2="12"/><line x1="4" x2="20" y1="6" y2="6"/><line x1="4" x2="20" y1="18" y2="18"/></svg>
          </Button>
        </div>
      </div>
    </header>
  );
};
