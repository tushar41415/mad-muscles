import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { ArrowRight, Sparkles, TrendingUp, Users } from "lucide-react";
import Tilt from "react-parallax-tilt";
import phoneMockup from "@/assets/phone-mockup.png";

const HeroSection = () => {
  return (
    <section
      id="hero"
      className="relative overflow-hidden pb-16 pt-28 sm:pb-24 sm:pt-32"
    >
      <div className="absolute inset-0 bg-gradient-dark-section" />
      <div className="grid-overlay absolute inset-0 opacity-30" />
      <div className="absolute -left-24 top-0 h-72 w-72 rounded-full bg-primary/20 blur-3xl" />
      <div className="absolute -right-20 top-24 h-80 w-80 rounded-full bg-accent/20 blur-3xl" />

      <div className="container relative z-10 mx-auto px-4 sm:px-6">
        <div className="grid items-center gap-12 lg:grid-cols-2">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <span className="badge-pill mb-5">
              <Sparkles size={14} className="text-primary" />
              AI-powered transformation
            </span>

            <h1 className="text-5xl leading-[0.9] text-foreground sm:text-6xl lg:text-8xl">
              <span className="text-gradient-fire block">MADMUSCLES</span>
              <span className="mt-2 block text-[0.52em] leading-tight text-foreground/95 sm:text-[0.5em]">
                Build the body you want with plans that adapt to your real
                life.
              </span>
            </h1>

            <p className="mt-6 max-w-xl text-base leading-relaxed text-muted-foreground sm:text-lg">
              Personalized workouts, smart nutrition, and habit coaching in one
              premium app experience designed to keep you consistent.
            </p>

            <div className="mt-8 flex flex-col gap-3 sm:flex-row sm:items-center">
              <Link
                to="/funnel/step-one"
                className="shine-sweep inline-flex items-center justify-center gap-2 rounded-xl bg-gradient-fire px-7 py-3.5 text-base font-bold text-primary-foreground shadow-lg shadow-primary/30 transition-transform hover:scale-[1.02]"
              >
                Start my plan
                <ArrowRight size={18} />
              </Link>
              <a
                href="#reviews"
                className="inline-flex items-center justify-center rounded-xl border border-border/70 bg-card/60 px-7 py-3.5 text-base font-semibold text-foreground transition-colors hover:border-primary/40"
              >
                See results
              </a>
            </div>

            <div className="mt-8 grid grid-cols-1 gap-3 sm:grid-cols-3">
              <Tilt
                tiltMaxAngleX={8}
                tiltMaxAngleY={8}
                glareEnable
                glareMaxOpacity={0.18}
                glareColor="#ffffff"
                className="surface-card glow-panel animate-glow-pulse p-4"
              >
                <p className="text-2xl font-bold text-gradient-fire">100K+</p>
                <p className="text-xs uppercase tracking-widest text-muted-foreground">
                  Active users
                </p>
              </Tilt>
              <Tilt
                tiltMaxAngleX={8}
                tiltMaxAngleY={8}
                glareEnable
                glareMaxOpacity={0.18}
                glareColor="#ffffff"
                className="surface-card glow-panel p-4"
              >
                <p className="text-2xl font-bold text-gradient-fire">115K+</p>
                <p className="text-xs uppercase tracking-widest text-muted-foreground">
                  Workouts done
                </p>
              </Tilt>
              <Tilt
                tiltMaxAngleX={8}
                tiltMaxAngleY={8}
                glareEnable
                glareMaxOpacity={0.18}
                glareColor="#ffffff"
                className="surface-card glow-panel p-4"
              >
                <p className="text-2xl font-bold text-gradient-fire">4.9</p>
                <p className="text-xs uppercase tracking-widest text-muted-foreground">
                  App rating
                </p>
              </Tilt>
            </div>
          </motion.div>

          <motion.div
            className="relative flex justify-center lg:justify-end"
            initial={{ opacity: 0, y: 28 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.15 }}
          >
            <div className="relative w-full max-w-md">
              <div className="absolute -inset-6 rounded-[2rem] bg-gradient-fire opacity-20 blur-3xl" />
              <div className="surface-card relative overflow-hidden rounded-[2rem] p-3">
                <img
                  src={phoneMockup}
                  alt="MadMuscles mobile app preview"
                  className="w-full rounded-[1.4rem] object-cover"
                />
              </div>

              <motion.div
                className="surface-card glow-panel absolute -left-4 bottom-6 flex items-center gap-2 px-3 py-2 sm:-left-8 animate-float-soft"
                animate={{ y: [-6, 6, -6] }}
                transition={{ duration: 4, repeat: Infinity }}
              >
                <Users size={16} className="text-primary" />
                <span className="text-xs font-semibold text-foreground">
                  100,000+ members
                </span>
              </motion.div>

              <motion.div
                className="surface-card glow-panel absolute -right-2 top-8 flex items-center gap-2 px-3 py-2 sm:-right-8 animate-float-soft"
                animate={{ x: [-5, 5, -5] }}
                transition={{ duration: 4.5, repeat: Infinity }}
              >
                <TrendingUp size={16} className="text-accent" />
                <span className="text-xs font-semibold text-foreground">
                  Avg. progress 8 weeks
                </span>
              </motion.div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
