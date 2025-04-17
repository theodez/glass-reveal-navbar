
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

  // Close mobile menu when navigating to a different section
  const handleNavClick = () => {
    if (mobileMenuOpen) {
      setMobileMenuOpen(false);
    }
  };

  // Prevent body scroll when mobile menu is open
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
        
        {/* Mobile menu overlay with improved animation */}
        {isMobile && (
          <div 
            className={cn(
              "fixed inset-0 bg-black/60 backdrop-blur-sm z-40 transition-opacity duration-300",
              mobileMenuOpen ? "opacity-100" : "opacity-0 pointer-events-none"
            )}
            onClick={() => setMobileMenuOpen(false)}
          />
        )}
        
        {/* Navigation links with improved animation */}
        <nav 
          className={cn(
            "md:flex items-center gap-8 transition-all duration-300",
            isMobile 
              ? "fixed top-0 right-0 bottom-0 w-[280px] bg-white dark:bg-gray-900 shadow-lg flex flex-col items-start p-8 z-50 pt-20" 
              : "hidden",
            isMobile && mobileMenuOpen 
              ? "transform translate-x-0" 
              : isMobile 
                ? "transform translate-x-full" 
                : ""
          )}
        >
          <a href="#avantages" className="font-medium hover:text-primary transition-colors block md:inline-block py-3 md:py-0 border-b md:border-b-0 border-gray-100 w-full md:w-auto" onClick={handleNavClick}>Ce que vous allez gagner</a>
          <a href="#testimonials" className="font-medium hover:text-primary transition-colors block md:inline-block py-3 md:py-0 border-b md:border-b-0 border-gray-100 w-full md:w-auto" onClick={handleNavClick}>Voix d'utilisateur pro</a>
          <a href="#faq" className="font-medium hover:text-primary transition-colors block md:inline-block py-3 md:py-0 border-b md:border-b-0 border-gray-100 w-full md:w-auto" onClick={handleNavClick}>FAQ</a>
          <a href="#contact" className="font-medium hover:text-primary transition-colors block md:inline-block py-3 md:py-0 border-b md:border-b-0 border-gray-100 w-full md:w-auto" onClick={handleNavClick}>Contact</a>
          <Link to="/connexion" className="font-medium text-primary hover:text-primary/80 transition-colors block md:inline-block py-3 md:py-0 w-full md:w-auto mt-3 md:mt-0" onClick={handleNavClick}>Connexion</Link>
        </nav>
        
        <div className="flex items-center">
          <Link to="/connexion" className="button-primary hidden md:inline-flex">
            Connexion
          </Link>
          
          {/* Mobile menu toggle button with improved position */}
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
