import { motion } from "framer-motion";
import { CheckCircle2 } from "lucide-react";
import Tilt from "react-parallax-tilt";
import habitImg from "@/assets/habit-system.png";

const benefits = [
  "Daily streaks and consistency nudges",
  "Sleep, hydration, and stress checkpoints",
  "Milestone rewards that keep momentum high",
];

const cards = [
  { icon: "🧠", title: "Mental focus", desc: "Build discipline daily." },
  { icon: "😴", title: "Better sleep", desc: "Recover faster and deeper." },
  { icon: "❤️", title: "Health boost", desc: "Lower stress over time." },
  { icon: "⚡", title: "More energy", desc: "Stay active all day long." },
];

const HabitSection = () => {
  return (
    <section id="habits" className="section-pad bg-gradient-dark-section">
      <div className="container mx-auto px-4 sm:px-6">
        <div className="grid items-center gap-10 lg:grid-cols-2 lg:gap-16">
          <motion.div
            className="order-2 lg:order-1"
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
          >
            <div className="relative">
              <div className="absolute -inset-6 rounded-[2rem] bg-accent/20 blur-3xl" />
              <div className="surface-card relative overflow-hidden rounded-[2rem] p-3">
                <img
                  src={habitImg}
                  alt="Habit building dashboard"
                  className="w-full rounded-[1.4rem] object-cover"
                  loading="lazy"
                />
              </div>
              <motion.div
                className="surface-card glow-panel absolute -left-2 bottom-4 px-3 py-2 sm:-left-6 animate-float-soft"
                animate={{ y: [-6, 6, -6] }}
                transition={{ duration: 4, repeat: Infinity }}
              >
                <p className="text-sm font-bold text-gradient-fire">21 Days</p>
                <p className="text-xs text-muted-foreground">Habit reboot</p>
              </motion.div>
            </div>
          </motion.div>

          <motion.div
            className="order-1 lg:order-2"
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
          >
            <span className="badge-pill mb-4">Habit Coaching</span>
            <h2 className="text-4xl leading-[0.92] text-foreground sm:text-5xl lg:text-6xl">
              Transform routines, not just workouts
            </h2>
            <p className="mt-5 text-base leading-relaxed text-muted-foreground sm:text-lg">
              Lasting body change happens when your habits support your goals.
              We keep you on track with daily systems that fit your lifestyle.
            </p>

            <div className="mt-7 grid grid-cols-1 gap-3 sm:grid-cols-2">
              {cards.map((benefit) => (
                <Tilt
                  key={benefit.title}
                  tiltMaxAngleX={7}
                  tiltMaxAngleY={7}
                  glareEnable
                  glareMaxOpacity={0.1}
                  className="surface-card surface-card-hover glow-panel p-4 sm:p-5"
                >
                  <span className="mb-2 block text-2xl">{benefit.icon}</span>
                  <p className="text-base font-semibold text-foreground">
                    {benefit.title}
                  </p>
                  <p className="text-sm text-muted-foreground">{benefit.desc}</p>
                </Tilt>
              ))}
            </div>

            <div className="mt-7 space-y-3">
              {benefits.map((benefit) => (
                <div key={benefit} className="flex items-center gap-3">
                  <CheckCircle2 size={18} className="text-primary" />
                  <span className="text-sm text-foreground sm:text-base">
                    {benefit}
                  </span>
                </div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default HabitSection;
