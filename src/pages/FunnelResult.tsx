import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { Check, Dumbbell, Target, Utensils } from "lucide-react";
import heroImg from "@/assets/hero-pose.png";
import ParticleBackground from "@/components/ParticleBackground";

const FunnelResult = () => {
  return (
    <div className="relative min-h-screen overflow-hidden bg-background">
      <ParticleBackground className="z-[1] opacity-65" density={22} />
      <div className="absolute -left-20 top-20 h-80 w-80 rounded-full bg-primary/15 blur-3xl" />
      <div className="absolute -right-20 bottom-16 h-80 w-80 rounded-full bg-accent/15 blur-3xl" />

      <header className="relative z-10 border-b border-border/60 bg-background/70 px-4 py-4 backdrop-blur-xl">
        <div className="mx-auto flex max-w-5xl justify-center">
          <Link to="/" className="font-heading text-3xl leading-none">
            <span className="text-gradient-fire">MAD</span>
            <span className="ml-1 rounded-md border border-primary/60 bg-primary/10 px-2 py-0.5 text-sm text-foreground">
              MUSCLES
            </span>
          </Link>
        </div>
      </header>

      <main className="relative z-10 mx-auto max-w-5xl px-4 py-12 sm:px-6">
        <motion.section
          className="surface-card glow-panel mx-auto max-w-3xl p-7 text-center sm:p-10"
          initial={{ opacity: 0, y: 18 }}
          animate={{ opacity: 1, y: 0 }}
        >
          <div className="animate-glow-pulse mx-auto mb-6 flex h-20 w-20 items-center justify-center rounded-full bg-gradient-fire shadow-xl shadow-primary/30">
            <Check size={38} className="text-primary-foreground" />
          </div>

          <h1 className="text-4xl leading-[0.94] text-foreground sm:text-6xl">
            Your custom plan is ready
          </h1>
          <p className="mx-auto mt-3 max-w-xl text-sm leading-relaxed text-muted-foreground sm:text-base">
            Based on your answers, we prepared a fitness strategy focused on
            your current level and goals.
          </p>

          <div className="mt-8 grid grid-cols-1 gap-3 sm:grid-cols-3">
            <div className="rounded-xl border border-border/60 bg-background/30 p-4">
              <Dumbbell className="mx-auto mb-2 text-primary" size={24} />
              <p className="text-base font-semibold text-foreground">Workout plan</p>
              <p className="text-xs text-muted-foreground">Adaptive exercises</p>
            </div>
            <div className="rounded-xl border border-border/60 bg-background/30 p-4">
              <Utensils className="mx-auto mb-2 text-primary" size={24} />
              <p className="text-base font-semibold text-foreground">Meal plan</p>
              <p className="text-xs text-muted-foreground">Nutrition matched to you</p>
            </div>
            <div className="rounded-xl border border-border/60 bg-background/30 p-4">
              <Target className="mx-auto mb-2 text-primary" size={24} />
              <p className="text-base font-semibold text-foreground">Habit system</p>
              <p className="text-xs text-muted-foreground">Consistency framework</p>
            </div>
          </div>

          <div className="mx-auto mt-8 h-40 w-40 overflow-hidden rounded-full border-4 border-primary/60 shadow-lg shadow-primary/25">
            <img
              src={heroImg}
              alt="Body transformation"
              className="h-full w-full object-cover"
            />
          </div>

          <Link
            to="/"
            className="shine-sweep mt-8 inline-flex items-center gap-2 rounded-xl bg-gradient-fire px-8 py-3.5 text-base font-bold text-primary-foreground shadow-lg shadow-primary/30 transition-transform hover:scale-[1.02]"
          >
            Explore website
            <svg
              width="20"
              height="20"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2.5"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <path d="M5 12h14" />
              <path d="m12 5 7 7-7 7" />
            </svg>
          </Link>
        </motion.section>
      </main>
    </div>
  );
};

export default FunnelResult;
