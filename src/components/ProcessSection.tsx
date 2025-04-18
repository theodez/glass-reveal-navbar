
import { useEffect, useState } from "react";
import { Progress } from "@/components/ui/progress";
import { cn } from "@/lib/utils";
import { CheckCircle2 } from "lucide-react";

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
        
        <div className="max-w-4xl mx-auto">
          <div className="flex items-center justify-between mb-8">
            {steps.map((step, index) => (
              <div 
                key={step.number}
                className="flex flex-col items-center relative"
              >
                <div 
                  className={cn(
                    "w-16 h-16 rounded-full flex items-center justify-center transition-all duration-500 border-2",
                    index < activeStep 
                      ? "bg-primary border-primary text-white" 
                      : index === activeStep 
                        ? "bg-white border-primary text-primary" 
                        : "bg-gray-100 border-gray-200 text-gray-400"
                  )}
                >
                  {index < activeStep ? (
                    <CheckCircle2 className="w-8 h-8" />
                  ) : (
                    <span className="text-xl font-bold">{step.number}</span>
                  )}
                </div>
                
                <div className={cn(
                  "absolute top-20 w-48 text-center transition-all duration-500",
                  index === activeStep ? "opacity-100 scale-100" : "opacity-50 scale-95"
                )}>
                  <h3 className={cn(
                    "text-lg font-semibold mb-1 transition-colors",
                    index === activeStep ? "text-primary" : "text-gray-500"
                  )}>
                    {step.title}
                  </h3>
                  <p className={cn(
                    "text-sm transition-colors",
                    index === activeStep ? "text-gray-700" : "text-gray-400"
                  )}>
                    {step.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
          
          {/* Connecting lines */}
          <div className="relative -mt-8 mb-16">
            <div className="absolute top-8 left-[16%] right-[16%] h-1 bg-gray-200"></div>
            <div 
              className="absolute top-8 left-[16%] h-1 bg-primary transition-all duration-300 ease-in-out"
              style={{ width: `${(activeStep / (steps.length - 1)) * 68}%` }}
            ></div>
          </div>
          
          <div className="mt-24 p-6 bg-white rounded-lg shadow-md border border-gray-100">
            <div className="flex items-center gap-4 mb-2">
              <div className="w-12 h-12 rounded-full bg-primary text-white flex items-center justify-center text-xl font-bold">
                {activeStep + 1}
              </div>
              
              <h3 className="text-2xl font-semibold text-primary">
                {steps[activeStep].title}
              </h3>
            </div>
            
            <p className="text-gray-600 ml-16 text-lg">
              {steps[activeStep].description}
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};
