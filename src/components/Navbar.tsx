import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import { Link } from "react-router-dom";
import { Menu, X } from "lucide-react";
import { useIsMobile } from "@/hooks/use-mobile";

export const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const isMobile = useIsMobile();

  useEffect(() => {
    const handleScroll = () => {
      const isScrolled = window.scrollY > 20;
      if (isScrolled !== scrolled) {
        setScrolled(isScrolled);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [scrolled]);

  const handleNavClick = () => {
    if (mobileMenuOpen) {
      setMobileMenuOpen(false);
    }
  };

  useEffect(() => {
    if (mobileMenuOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
    
    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [mobileMenuOpen]);

  return (
    <header 
      className={cn(
        "fixed top-0 left-0 right-0 z-50 transition-all duration-200",
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
        
        {isMobile && (
          <div 
            className={cn(
              "fixed inset-0 bg-black/60 backdrop-blur-sm z-40 transition-opacity duration-200",
              mobileMenuOpen ? "opacity-100" : "opacity-0 pointer-events-none"
            )}
            onClick={() => setMobileMenuOpen(false)}
          />
        )}
        
        <nav 
          className={cn(
            "md:flex items-center gap-8 transition-all duration-200",
            isMobile 
              ? "fixed top-0 right-0 bottom-0 w-[280px] bg-white dark:bg-gray-900 shadow-lg flex flex-col items-start p-8 z-50 pt-20" 
              : "hidden"
          )}
        >
          <a href="#avantages" className="font-medium hover:text-primary transition-colors block md:inline-block py-3 md:py-0 border-b md:border-b-0 border-gray-100 w-full md:w-auto" onClick={handleNavClick}>Ce que vous allez gagner</a>
          <a href="#testimonials" className="font-medium hover:text-primary transition-colors block md:inline-block py-3 md:py-0 border-b md:border-b-0 border-gray-100 w-full md:w-auto" onClick={handleNavClick}>Voix d'utilisateur pro</a>
          <a href="#faq" className="font-medium hover:text-primary transition-colors block md:inline-block py-3 md:py-0 border-b md:border-b-0 border-gray-100 w-full md:w-auto" onClick={handleNavClick}>FAQ</a>
          <a href="#contact" className="font-medium hover:text-primary transition-colors block md:inline-block py-3 md:py-0 border-b md:border-b-0 border-gray-100 w-full md:w-auto" onClick={handleNavClick}>Contact</a>
          
          <Link 
            to="/connexion" 
            className="w-full md:hidden" 
            onClick={handleNavClick}
          >
            <Button className="w-full">Connexion</Button>
          </Link>
        </nav>
        
        <div className="flex items-center gap-4">
          <Link to="/connexion" className="hidden md:inline-flex">
            <Button>Connexion</Button>
          </Link>
          
          <Button 
            className={cn(
              "md:hidden z-50 relative",
              mobileMenuOpen ? "text-gray-800" : ""
            )}
            variant="outline" 
            size="icon"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          >
            {mobileMenuOpen ? (
              <X className="h-5 w-5" />
            ) : (
              <Menu className="h-5 w-5" />
            )}
          </Button>
        </div>
      </div>
    </header>
  );
};
