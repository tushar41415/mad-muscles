import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { Check, Dumbbell, Utensils, Target } from "lucide-react";
import heroImg from "@/assets/hero-pose.png";

const FunnelResult = () => {
  return (
    <div className="min-h-screen bg-background">
      {/* Header */}
      <header className="border-b border-border px-4 py-3 flex items-center justify-center">
        <Link to="/" className="font-heading text-xl font-bold tracking-wider">
          <span className="text-gradient-fire">MAD</span>
          <span className="text-foreground border border-primary px-1 py-0.5 text-xs ml-1">MUSCLES</span>
        </Link>
      </header>

      <div className="container mx-auto px-4 py-12">
        <motion.div
          className="max-w-2xl mx-auto text-center"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
        >
          {/* Success icon */}
          <div className="w-20 h-20 rounded-full bg-gradient-fire flex items-center justify-center mx-auto mb-6 glow-fire">
            <Check size={40} className="text-primary-foreground" />
          </div>

          <h1 className="font-heading text-3xl md:text-5xl font-bold text-foreground mb-4">
            Your Plan is <span className="text-gradient-fire">Ready!</span>
          </h1>
          <p className="text-muted-foreground text-lg mb-10">
            Based on your answers, we've prepared a personalized program just for you.
          </p>

          {/* Plan summary cards */}
          <div className="grid sm:grid-cols-3 gap-4 mb-10">
            <div className="bg-card border border-border rounded-xl p-5 text-center">
              <Dumbbell className="text-primary mx-auto mb-2" size={28} />
              <h3 className="font-heading text-lg font-semibold text-foreground mb-1">Workout Plan</h3>
              <p className="text-muted-foreground text-sm">Personalized exercises</p>
            </div>
            <div className="bg-card border border-border rounded-xl p-5 text-center">
              <Utensils className="text-primary mx-auto mb-2" size={28} />
              <h3 className="font-heading text-lg font-semibold text-foreground mb-1">Meal Plan</h3>
              <p className="text-muted-foreground text-sm">Custom nutrition</p>
            </div>
            <div className="bg-card border border-border rounded-xl p-5 text-center">
              <Target className="text-primary mx-auto mb-2" size={28} />
              <h3 className="font-heading text-lg font-semibold text-foreground mb-1">Habit System</h3>
              <p className="text-muted-foreground text-sm">Build daily routines</p>
            </div>
          </div>

          {/* Hero image */}
          <div className="relative w-48 h-48 mx-auto mb-8 rounded-full overflow-hidden border-4 border-primary">
            <img src={heroImg} alt="Your transformation" className="w-full h-full object-cover" />
          </div>

          <Link
            to="/"
            className="inline-flex items-center gap-3 bg-gradient-fire text-primary-foreground px-10 py-4 rounded-lg font-heading text-xl font-semibold tracking-wide glow-fire hover:opacity-90 transition-opacity"
          >
            Get Started Now
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><path d="M5 12h14"/><path d="m12 5 7 7-7 7"/></svg>
          </Link>
        </motion.div>
      </div>
    </div>
  );
};

export default FunnelResult;
