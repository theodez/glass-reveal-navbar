
import { useState } from "react";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { useNavigate } from "react-router-dom";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // In a real implementation, this would authenticate with a backend
    console.log("Login attempt with:", email);
    
    // For demo purposes, just redirect back to home
    navigate("/");
  };

  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      
      <main className="flex-grow flex items-center justify-center py-16 px-4">
        <div className="w-full max-w-md">
          <div className="bg-white p-8 rounded-xl shadow-xl border border-gray-100">
            <div className="text-center mb-8">
              <h1 className="text-2xl font-bold mb-2">Connexion</h1>
              <p className="text-gray-600">
                Accédez à votre espace UpForm
              </p>
            </div>
            
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="space-y-2">
                <Label htmlFor="email">Email</Label>
                <Input 
                  id="email" 
                  type="email" 
                  placeholder="votreemail@exemple.com" 
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  required
                />
              </div>
              
              <div className="space-y-2">
                <div className="flex justify-between items-center">
                  <Label htmlFor="password">Mot de passe</Label>
                  <a href="#" className="text-sm text-primary hover:underline">
                    Mot de passe oublié?
                  </a>
                </div>
                <Input 
                  id="password" 
                  type="password" 
                  placeholder="Entrez votre mot de passe" 
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  required
                />
              </div>
              
              <Button className="w-full button-primary" type="submit">
                Se connecter
              </Button>
            </form>
            
            <div className="mt-8 pt-6 border-t border-gray-200 text-center">
              <p className="text-sm text-gray-600">
                Pas encore de compte? Contactez-nous pour une démonstration.
              </p>
            </div>
          </div>
        </div>
      </main>
      
      <Footer />
    </div>
  );
};

export default Login;
