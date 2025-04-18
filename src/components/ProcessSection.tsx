
import { useEffect, useState } from "react";
import { Progress } from "@/components/ui/progress";
import { cn } from "@/lib/utils";

const steps = [
  {
    number: 1,
    title: "Choisissez vos besoins",
    description: "Indiquez les cursus et modules de formation"
  },
  {
    number: 2,
    title: "On vous propose des solutions",
    description: "Voir notre réseau"
  },
  {
    number: 3,
    title: "Recevez vos devis personnalisés",
    description: "Sous 48h par email"
  }
];

export const ProcessSection = () => {
  const [activeStep, setActiveStep] = useState(0);
  const progressValue = ((activeStep + 1) / steps.length) * 100;

  useEffect(() => {
    const interval = setInterval(() => {
      setActiveStep((current) => (current + 1) % steps.length);
    }, 3000); // Change step every 3 seconds

    return () => clearInterval(interval);
  }, []);

  return (
    <section className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl font-bold text-center mb-16">
          Comment optimiser la gestion de vos formations ?
        </h2>
        
        <div className="max-w-3xl mx-auto">
          <Progress value={progressValue} className="h-2 mb-12" />
          
          <div className="relative">
            {steps.map((step, index) => (
              <div
                key={step.number}
                className={cn(
                  "transition-all duration-500 absolute inset-0",
                  index === activeStep 
                    ? "opacity-100 transform translate-y-0" 
                    : "opacity-0 transform translate-y-8 pointer-events-none"
                )}
              >
                <div className="flex items-start gap-6">
                  <div className="flex-shrink-0">
                    <div className="w-12 h-12 rounded-full bg-primary text-white flex items-center justify-center text-xl font-bold">
                      {step.number}
                    </div>
                  </div>
                  
                  <div className="flex-grow pt-2">
                    <h3 className="text-2xl font-semibold mb-3">
                      {step.title}
                    </h3>
                    <p className="text-gray-600 text-lg">
                      {step.description}
                    </p>
                  </div>
                </div>
              </div>
            ))}
            
            {/* Spacer div to maintain height */}
            <div className="opacity-0 pointer-events-none">
              <div className="flex items-start gap-6">
                <div className="w-12 h-12" />
                <div className="pt-2">
                  <h3 className="text-2xl font-semibold mb-3">Placeholder</h3>
                  <p className="text-gray-600 text-lg">Placeholder</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
