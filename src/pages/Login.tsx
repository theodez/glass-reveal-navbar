
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { useNavigate } from "react-router-dom";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Link } from "react-router-dom";
import { ArrowLeft } from "lucide-react";

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
    <div className="min-h-screen flex flex-col bg-gradient-to-b from-white to-gray-50">
      <div className="container mx-auto px-4 py-4 mt-16 md:mt-24 flex-grow flex flex-col items-center justify-center">
        <div className="w-full max-w-md mx-auto">
          <Link to="/" className="inline-flex items-center mb-6 text-sm font-medium text-gray-500 hover:text-primary transition-colors">
            <ArrowLeft className="mr-2 h-4 w-4" />
            Retour à l'accueil
          </Link>
          
          <Card className="border-0 shadow-xl overflow-hidden rounded-xl">
            <CardHeader className="space-y-1 text-center pb-6">
              <div className="w-full flex justify-center mb-2">
                <div className="text-xl font-bold flex items-center">
                  <span className="bg-primary text-white p-1 rounded mr-1">Up</span>Form
                </div>
              </div>
              <CardTitle className="text-2xl font-bold">Connexion</CardTitle>
              <CardDescription>
                Accédez à votre espace UpForm
              </CardDescription>
            </CardHeader>
            
            <CardContent>
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
                    className="h-12"
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
                    className="h-12"
                  />
                </div>
                
                <Button className="w-full bg-primary text-white hover:bg-primary/90 h-12 rounded-md transition-colors" type="submit">
                  Se connecter
                </Button>
              </form>
            </CardContent>
            
            <CardFooter className="flex flex-col space-y-4 border-t pt-6">
              <p className="text-sm text-center text-gray-600">
                Pas encore de compte? 
                <a href="#" className="text-primary hover:text-primary/80 ml-1 font-medium">
                  Contactez-nous pour une démonstration
                </a>
              </p>
            </CardFooter>
          </Card>
        </div>
      </div>
      
      <div className="py-6 text-center text-gray-500 text-sm">
        UpForm &copy; {new Date().getFullYear()} - Tous droits réservés
      </div>
    </div>
  );
};

export default Login;
