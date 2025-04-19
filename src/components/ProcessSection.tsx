
import { motion, useAnimation, useInView } from "framer-motion";
import { useEffect, useRef, useState } from "react";
import { BookOpen, Network, MailCheck } from "lucide-react";

const steps = [
  {
    icon: BookOpen,
    title: "Choisissez vos besoins",
    description: "Indiquez les cursus et modules de formation"
  },
  {
    icon: Network,
    title: "On vous propose des solutions",
    description: "Voir notre réseau"
  },
  {
    icon: MailCheck,
    title: "Recevez vos devis personnalisés",
    description: "Sous 48h par email"
  }
];

export const ProcessSection = () => {
  const [activeStep, setActiveStep] = useState(0);
  const ref = useRef(null);
  const isInView = useInView(ref, { once: false, margin: "-100px" });
  const controls = useAnimation();

  useEffect(() => {
    if (isInView) {
      controls.start("visible");
      const interval = setInterval(() => {
        setActiveStep((prev) => (prev + 1) % steps.length);
      }, 3000);
      return () => clearInterval(interval);
    } else {
      controls.start("hidden");
    }
  }, [isInView, controls]);

  return (
    <section ref={ref} className="py-24 bg-gray-50">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl font-bold text-center mb-16">
          Comment optimiser la gestion de vos formations ?
        </h2>

        <div className="max-w-4xl mx-auto relative">
          {/* Progress Line */}
          <div className="absolute top-[45px] left-[50px] right-[50px] h-0.5 bg-gray-200" />
          <motion.div
            className="absolute top-[45px] left-[50px] h-0.5 bg-primary origin-left"
            initial={{ scaleX: 0 }}
            animate={{ scaleX: activeStep / (steps.length - 1) }}
            transition={{ duration: 0.5, ease: "easeInOut" }}
          />

          <div className="relative grid grid-cols-3 gap-4">
            {steps.map((step, index) => {
              const Icon = step.icon;
              return (
                <motion.div
                  key={index}
                  initial="hidden"
                  animate={controls}
                  variants={{
                    hidden: { opacity: 0, y: 20 },
                    visible: { 
                      opacity: 1, 
                      y: 0,
                      transition: { 
                        duration: 0.5,
                        delay: index * 0.2 
                      }
                    }
                  }}
                  className="relative"
                >
                  <motion.div
                    className={`w-24 h-24 mx-auto rounded-full flex items-center justify-center ${
                      index <= activeStep ? 'bg-primary text-white' : 'bg-gray-100 text-gray-400'
                    }`}
                    animate={{
                      scale: index === activeStep ? 1.1 : 1,
                      backgroundColor: index <= activeStep ? 'var(--primary)' : '#f3f4f6'
                    }}
                    transition={{ duration: 0.3 }}
                  >
                    <Icon className="w-8 h-8" />
                  </motion.div>
                  
                  <motion.div
                    className="text-center mt-6 space-y-2"
                    animate={{
                      opacity: index === activeStep ? 1 : 0.5
                    }}
                    transition={{ duration: 0.3 }}
                  >
                    <h3 className={`text-lg font-semibold ${
                      index === activeStep ? 'text-primary' : 'text-gray-600'
                    }`}>
                      {step.title}
                    </h3>
                    <p className={`text-sm ${
                      index === activeStep ? 'text-gray-700' : 'text-gray-400'
                    }`}>
                      {step.description}
                    </p>
                  </motion.div>
                </motion.div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
};
