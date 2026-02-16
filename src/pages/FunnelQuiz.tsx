import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";
import { Link } from "react-router-dom";
import { ChevronLeft } from "lucide-react";
import bodyTypesImg from "@/assets/body-types.png";
import heroImg from "@/assets/hero-pose.png";

interface QuizOption {
  label: string;
  value: string;
  image?: string;
}

interface QuizStep {
  id: string;
  title: string;
  subtitle?: string;
  options: QuizOption[];
  type: "image-cards" | "text-cards" | "multi-select";
}

const quizSteps: QuizStep[] = [
  {
    id: "age",
    title: "BUILD YOUR PERFECT BODY",
    subtitle: "According to your age and BMI",
    type: "image-cards",
    options: [
      { label: "Age: 18-29", value: "18-29" },
      { label: "Age: 30-39", value: "30-39" },
      { label: "Age: 40-49", value: "40-49" },
      { label: "Age: 50+", value: "50+" },
    ],
  },
  {
    id: "body-type",
    title: "CHOOSE YOUR BODY TYPE",
    subtitle: "Select the body type that best describes you",
    type: "text-cards",
    options: [
      { label: "Slim", value: "slim" },
      { label: "Average", value: "average" },
      { label: "Heavy", value: "heavy" },
      { label: "Extra Heavy", value: "extra-heavy" },
    ],
  },
  {
    id: "goal",
    title: "WHAT IS YOUR GOAL?",
    subtitle: "Select your primary fitness goal",
    type: "text-cards",
    options: [
      { label: "Lose Weight", value: "lose-weight" },
      { label: "Build Muscle", value: "build-muscle" },
      { label: "Get Shredded", value: "get-shredded" },
      { label: "Stay Fit", value: "stay-fit" },
    ],
  },
  {
    id: "target-areas",
    title: "TARGET MUSCLE GROUPS",
    subtitle: "Which areas do you want to focus on?",
    type: "multi-select",
    options: [
      { label: "Chest", value: "chest" },
      { label: "Back", value: "back" },
      { label: "Arms", value: "arms" },
      { label: "Shoulders", value: "shoulders" },
      { label: "Abs", value: "abs" },
      { label: "Legs", value: "legs" },
    ],
  },
  {
    id: "fitness-level",
    title: "YOUR FITNESS LEVEL",
    subtitle: "How would you describe your current activity?",
    type: "text-cards",
    options: [
      { label: "Beginner", value: "beginner" },
      { label: "Intermediate", value: "intermediate" },
      { label: "Advanced", value: "advanced" },
    ],
  },
  {
    id: "workout-place",
    title: "WHERE DO YOU WORK OUT?",
    subtitle: "Select your preferred training location",
    type: "text-cards",
    options: [
      { label: "At Home", value: "home" },
      { label: "At Gym", value: "gym" },
      { label: "Outdoor", value: "outdoor" },
    ],
  },
  {
    id: "frequency",
    title: "HOW OFTEN CAN YOU WORK OUT?",
    subtitle: "Select your weekly availability",
    type: "text-cards",
    options: [
      { label: "2-3 days", value: "2-3" },
      { label: "3-4 days", value: "3-4" },
      { label: "5-6 days", value: "5-6" },
      { label: "Every day", value: "7" },
    ],
  },
];

const stepRouteMap: Record<string, number> = {
  "step-one": 0,
  "step-two": 1,
  "step-three": 2,
  "step-four": 3,
  "step-five": 4,
  "step-six": 5,
  "step-seven": 6,
};

const routeFromIndex = (i: number) => {
  const names = ["step-one","step-two","step-three","step-four","step-five","step-six","step-seven"];
  return names[i] || "step-one";
};

const FunnelQuiz = ({ stepName }: { stepName: string }) => {
  const navigate = useNavigate();
  const currentStepIndex = stepRouteMap[stepName] ?? 0;
  const step = quizSteps[currentStepIndex];
  const totalSteps = quizSteps.length;
  const progress = ((currentStepIndex + 1) / totalSteps) * 100;

  const [selectedMulti, setSelectedMulti] = useState<string[]>([]);

  const handleSelect = (value: string) => {
    if (step.type === "multi-select") {
      setSelectedMulti((prev) =>
        prev.includes(value) ? prev.filter((v) => v !== value) : [...prev, value]
      );
    } else {
      goNext();
    }
  };

  const goNext = () => {
    if (currentStepIndex < totalSteps - 1) {
      setSelectedMulti([]);
      navigate(`/funnel/${routeFromIndex(currentStepIndex + 1)}`);
    } else {
      navigate("/funnel/result");
    }
  };

  const goBack = () => {
    if (currentStepIndex > 0) {
      navigate(`/funnel/${routeFromIndex(currentStepIndex - 1)}`);
    } else {
      navigate("/");
    }
  };

  return (
    <div className="min-h-screen bg-background flex flex-col">
      {/* Header */}
      <header className="border-b border-border px-4 py-3 flex items-center justify-between">
        <button onClick={goBack} className="text-muted-foreground hover:text-foreground transition-colors">
          <ChevronLeft size={24} />
        </button>
        <Link to="/" className="font-heading text-xl font-bold tracking-wider">
          <span className="text-gradient-fire">MAD</span>
          <span className="text-foreground border border-primary px-1 py-0.5 text-xs ml-1">MUSCLES</span>
        </Link>
        <div className="w-6" />
      </header>

      {/* Progress bar */}
      <div className="w-full h-1 bg-secondary">
        <motion.div
          className="h-full bg-gradient-fire"
          initial={{ width: 0 }}
          animate={{ width: `${progress}%` }}
          transition={{ duration: 0.4 }}
        />
      </div>

      {/* Content */}
      <div className="flex-1 flex flex-col items-center justify-center px-4 py-8">
        <AnimatePresence mode="wait">
          <motion.div
            key={step.id}
            initial={{ opacity: 0, x: 30 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: -30 }}
            transition={{ duration: 0.3 }}
            className="w-full max-w-2xl text-center"
          >
            <h1 className="font-heading text-3xl md:text-4xl font-bold text-foreground mb-2">
              {step.title}
            </h1>
            {step.subtitle && (
              <p className="text-muted-foreground mb-8">{step.subtitle}</p>
            )}

            {step.type === "image-cards" && (
              <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                {step.options.map((opt) => (
                  <button
                    key={opt.value}
                    onClick={() => handleSelect(opt.value)}
                    className="group relative bg-card border border-border rounded-xl overflow-hidden hover:border-primary transition-colors aspect-[3/4] flex flex-col items-center justify-end p-3"
                  >
                    <img
                      src={bodyTypesImg}
                      alt={opt.label}
                      className="absolute inset-0 w-full h-full object-cover opacity-40 group-hover:opacity-60 transition-opacity"
                    />
                    <span className="relative z-10 font-heading text-sm font-semibold text-foreground bg-background/80 px-3 py-1 rounded-md">
                      {opt.label}
                    </span>
                  </button>
                ))}
              </div>
            )}

            {step.type === "text-cards" && (
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 max-w-lg mx-auto">
                {step.options.map((opt) => (
                  <button
                    key={opt.value}
                    onClick={() => handleSelect(opt.value)}
                    className="bg-card border border-border rounded-xl p-5 text-left hover:border-primary hover:bg-card/80 transition-all group"
                  >
                    <span className="font-heading text-lg font-semibold text-foreground group-hover:text-gradient-fire transition-colors">
                      {opt.label}
                    </span>
                  </button>
                ))}
              </div>
            )}

            {step.type === "multi-select" && (
              <>
                <div className="grid grid-cols-2 sm:grid-cols-3 gap-4 max-w-lg mx-auto mb-8">
                  {step.options.map((opt) => {
                    const isSelected = selectedMulti.includes(opt.value);
                    return (
                      <button
                        key={opt.value}
                        onClick={() => handleSelect(opt.value)}
                        className={`border rounded-xl p-5 text-center transition-all ${
                          isSelected
                            ? "border-primary bg-primary/10"
                            : "border-border bg-card hover:border-primary/50"
                        }`}
                      >
                        <span className={`font-heading text-lg font-semibold ${isSelected ? "text-primary" : "text-foreground"}`}>
                          {opt.label}
                        </span>
                      </button>
                    );
                  })}
                </div>
                <button
                  onClick={goNext}
                  disabled={selectedMulti.length === 0}
                  className="bg-gradient-fire text-primary-foreground px-10 py-3 rounded-lg font-heading text-lg font-semibold tracking-wide hover:opacity-90 transition-opacity disabled:opacity-40 disabled:cursor-not-allowed"
                >
                  Continue
                </button>
              </>
            )}
          </motion.div>
        </AnimatePresence>
      </div>

      {/* Footer */}
      <footer className="px-4 py-4 text-center">
        <p className="text-muted-foreground text-xs">
          By continuing, you agree to our{" "}
          <a href="#" className="underline hover:text-foreground">Terms of service</a>,{" "}
          <a href="#" className="underline hover:text-foreground">Privacy policy</a>,{" "}
          <a href="#" className="underline hover:text-foreground">Cookie policy</a>
        </p>
      </footer>
    </div>
  );
};

export default FunnelQuiz;
