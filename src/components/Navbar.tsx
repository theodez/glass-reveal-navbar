
import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import { Link } from "react-router-dom";
import { Menu, X } from "lucide-react";

export const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Close mobile menu when route changes
  useEffect(() => {
    setMobileMenuOpen(false);
  }, [location.pathname]);

  return (
    <header 
      className={cn(
        "fixed top-0 left-0 right-0 z-50 transition-all duration-200",
        scrolled ? "glass-effect py-3" : "bg-transparent py-4"
      )}
    >
      <div className="container mx-auto flex justify-between items-center px-4">
        <Link to="/" className="flex items-center">
          <span className="text-xl font-bold flex items-center">
            <span className="bg-primary text-white p-1 rounded mr-1">Up</span>Form
          </span>
        </Link>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center gap-8">
          <a href="#avantages" className="font-medium hover:text-primary transition-colors">Ce que vous allez gagner</a>
          <a href="#testimonials" className="font-medium hover:text-primary transition-colors">Voix d'utilisateur pro</a>
          <a href="#faq" className="font-medium hover:text-primary transition-colors">FAQ</a>
          <a href="#contact" className="font-medium hover:text-primary transition-colors">Contact</a>
          <Link to="/connexion">
            <Button>Connexion</Button>
          </Link>
        </nav>

        {/* Mobile Menu Button */}
        <Button 
          className="md:hidden"
          variant="ghost" 
          size="icon"
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
        >
          {mobileMenuOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
        </Button>

        {/* Mobile Menu Overlay */}
        {mobileMenuOpen && (
          <div className="md:hidden fixed inset-0 top-[64px] bg-background/95 backdrop-blur-sm">
            <nav className="flex flex-col items-start p-4 space-y-4">
              <a href="#avantages" className="font-medium w-full hover:text-primary transition-colors" onClick={() => setMobileMenuOpen(false)}>Ce que vous allez gagner</a>
              <a href="#testimonials" className="font-medium w-full hover:text-primary transition-colors" onClick={() => setMobileMenuOpen(false)}>Voix d'utilisateur pro</a>
              <a href="#faq" className="font-medium w-full hover:text-primary transition-colors" onClick={() => setMobileMenuOpen(false)}>FAQ</a>
              <a href="#contact" className="font-medium w-full hover:text-primary transition-colors" onClick={() => setMobileMenuOpen(false)}>Contact</a>
              <Link to="/connexion" className="w-full" onClick={() => setMobileMenuOpen(false)}>
                <Button className="w-full">Connexion</Button>
              </Link>
            </nav>
          </div>
        )}
      </div>
    </header>
  );
};
