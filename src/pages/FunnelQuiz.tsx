import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { AnimatePresence, motion } from "framer-motion";
import { ChevronLeft } from "lucide-react";
import bodyTypesImg from "@/assets/body-types.png";
import ParticleBackground from "@/components/ParticleBackground";

interface QuizOption {
  label: string;
  value: string;
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
  const names = [
    "step-one",
    "step-two",
    "step-three",
    "step-four",
    "step-five",
    "step-six",
    "step-seven",
  ];
  return names[i] || "step-one";
};

const FunnelQuiz = ({ stepName }: { stepName: string }) => {
  const navigate = useNavigate();
  const currentStepIndex = stepRouteMap[stepName] ?? 0;
  const step = quizSteps[currentStepIndex];
  const progress = ((currentStepIndex + 1) / quizSteps.length) * 100;

  const [selectedMulti, setSelectedMulti] = useState<string[]>([]);

  const goNext = () => {
    if (currentStepIndex < quizSteps.length - 1) {
      setSelectedMulti([]);
      navigate(`/funnel/${routeFromIndex(currentStepIndex + 1)}`);
      return;
    }
    navigate("/funnel/result");
  };

  const goBack = () => {
    if (currentStepIndex > 0) {
      navigate(`/funnel/${routeFromIndex(currentStepIndex - 1)}`);
      return;
    }
    navigate("/");
  };

  const handleSelect = (value: string) => {
    if (step.type === "multi-select") {
      setSelectedMulti((prev) =>
        prev.includes(value) ? prev.filter((v) => v !== value) : [...prev, value]
      );
      return;
    }
    goNext();
  };

  return (
    <div className="relative min-h-screen overflow-hidden bg-background">
      <ParticleBackground className="z-[1] opacity-70" density={26} />
      <div className="absolute left-1/3 top-0 h-80 w-80 rounded-full bg-primary/15 blur-3xl" />
      <div className="absolute bottom-0 right-1/4 h-80 w-80 rounded-full bg-accent/15 blur-3xl" />

      <header className="relative z-10 border-b border-border/60 bg-background/70 px-4 py-4 backdrop-blur-xl">
        <div className="mx-auto flex max-w-5xl items-center justify-between">
          <button
            onClick={goBack}
            className="rounded-lg border border-border/70 bg-card/50 p-2 text-muted-foreground transition-colors hover:text-foreground"
            aria-label="Go back"
          >
            <ChevronLeft size={20} />
          </button>

          <Link to="/" className="font-heading text-3xl leading-none">
            <span className="text-gradient-fire">MAD</span>
            <span className="ml-1 rounded-md border border-primary/60 bg-primary/10 px-2 py-0.5 text-sm text-foreground">
              MUSCLES
            </span>
          </Link>

          <span className="text-xs font-semibold uppercase tracking-wider text-muted-foreground">
            Step {currentStepIndex + 1}/{quizSteps.length}
          </span>
        </div>
      </header>

      <div className="relative z-10 h-1 w-full bg-secondary/70">
        <motion.div
          className="h-full bg-gradient-fire"
          initial={{ width: 0 }}
          animate={{ width: `${progress}%` }}
          transition={{ duration: 0.35 }}
        />
      </div>

      <main className="relative z-10 mx-auto flex min-h-[calc(100vh-130px)] w-full max-w-5xl items-center px-4 py-10 sm:px-6">
        <AnimatePresence mode="wait">
          <motion.section
            key={step.id}
            className="surface-card glow-panel w-full p-6 sm:p-8"
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: -20 }}
            transition={{ duration: 0.25 }}
          >
            <h1 className="text-center text-4xl leading-[0.94] text-foreground sm:text-5xl">
              {step.title}
            </h1>
            {step.subtitle && (
              <p className="mx-auto mt-3 max-w-2xl text-center text-sm text-muted-foreground sm:text-base">
                {step.subtitle}
              </p>
            )}

            {step.type === "image-cards" && (
              <div className="mt-8 grid grid-cols-2 gap-3 sm:gap-4 md:grid-cols-4">
                {step.options.map((option) => (
                  <button
                    key={option.value}
                    onClick={() => handleSelect(option.value)}
                    className="group relative aspect-[3/4] overflow-hidden rounded-xl border border-border/70 transition-all hover:-translate-y-0.5 hover:border-primary/70"
                  >
                    <img
                      src={bodyTypesImg}
                      alt={option.label}
                      className="absolute inset-0 h-full w-full object-cover opacity-50 transition-opacity group-hover:opacity-70"
                    />
                    <span className="absolute inset-x-2 bottom-2 rounded-md bg-background/80 px-2 py-1 text-xs font-semibold text-foreground sm:text-sm">
                      {option.label}
                    </span>
                  </button>
                ))}
              </div>
            )}

            {step.type === "text-cards" && (
              <div className="mx-auto mt-8 grid max-w-2xl grid-cols-1 gap-3 sm:grid-cols-2">
                {step.options.map((option) => (
                  <button
                    key={option.value}
                    onClick={() => handleSelect(option.value)}
                    className="rounded-xl border border-border/70 bg-card/60 p-4 text-left text-base font-semibold text-foreground transition-all hover:-translate-y-0.5 hover:border-primary/70 hover:bg-card sm:text-lg"
                  >
                    {option.label}
                  </button>
                ))}
              </div>
            )}

            {step.type === "multi-select" && (
              <div className="mt-8">
                <div className="mx-auto grid max-w-2xl grid-cols-2 gap-3 sm:grid-cols-3">
                  {step.options.map((option) => {
                    const selected = selectedMulti.includes(option.value);
                    return (
                      <button
                        key={option.value}
                        onClick={() => handleSelect(option.value)}
                        className={`rounded-xl border p-4 text-sm font-semibold uppercase tracking-wide transition-colors sm:text-base ${
                          selected
                            ? "border-primary/80 bg-primary/15 text-primary"
                            : "border-border/70 bg-card/60 text-foreground hover:border-primary/40"
                        }`}
                      >
                        {option.label}
                      </button>
                    );
                  })}
                </div>
                <div className="mt-7 text-center">
                  <button
                    onClick={goNext}
                    disabled={selectedMulti.length === 0}
                    className="shine-sweep rounded-xl bg-gradient-fire px-8 py-3 text-sm font-bold uppercase tracking-wide text-primary-foreground transition-opacity disabled:cursor-not-allowed disabled:opacity-40 sm:text-base"
                  >
                    Continue
                  </button>
                </div>
              </div>
            )}
          </motion.section>
        </AnimatePresence>
      </main>

      <footer className="relative z-10 px-4 pb-5 text-center">
        <p className="text-xs text-muted-foreground">
          By continuing, you agree to our{" "}
          <a href="#" className="underline hover:text-foreground">
            Terms of service
          </a>
          ,{" "}
          <a href="#" className="underline hover:text-foreground">
            Privacy policy
          </a>
          , and{" "}
          <a href="#" className="underline hover:text-foreground">
            Cookie policy
          </a>
          .
        </p>
      </footer>
    </div>
  );
};

export default FunnelQuiz;
