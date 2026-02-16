import { motion } from "framer-motion";
import habitImg from "@/assets/habit-system.png";
import { CheckCircle2 } from "lucide-react";

const HabitSection = () => {
  const benefits = [
    {
      icon: "🧠",
      title: "Mental Strength",
      desc: "Build discipline & willpower",
    },
    {
      icon: "😴",
      title: "Better Sleep",
      desc: "Improve sleep quality naturally",
    },
    { icon: "❤️", title: "Health Boost", desc: "Lower stress & improve mood" },
    { icon: "⚡", title: "Energy Levels", desc: "Feel more energized daily" },
  ];

  return (
    <section className="py-24 bg-gradient-dark-section relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute top-20 right-20 w-96 h-96 bg-gradient-fire rounded-full blur-3xl" />
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="grid lg:grid-cols-2 gap-6 md:gap-12 lg:gap-16 items-center">
          {/* Images side */}
          <motion.div
            className="order-2 lg:order-1"
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
          >
            <div className="relative">
              {/* Glow effect */}
              <div className="absolute -inset-6 bg-gradient-fire opacity-10 blur-3xl rounded-2xl" />

              {/* Main image */}
              <motion.div
                whileHover={{ scale: 1.02, rotate: 1 }}
                transition={{ type: "spring", stiffness: 300 }}
              >
                <img
                  src={habitImg}
                  alt="Habit building system"
                  className="relative w-full rounded-3xl shadow-2xl border border-border/30 object-cover"
                  loading="lazy"
                />
              </motion.div>

              {/* Floating badge */}
              <motion.div
                className="absolute bottom-4 right-4 sm:bottom-auto sm:right-auto sm:-top-6 sm:-left-6 bg-card border border-border rounded-2xl p-3 sm:p-4 shadow-xl backdrop-blur-sm"
                animate={{ y: [-10, 10, -10] }}
                transition={{ duration: 4, repeat: Infinity }}
              >
                <p className="font-heading font-bold text-gradient-fire text-sm sm:text-lg">
                  21 Days
                </p>
                <p className="text-xs text-muted-foreground">
                  To Build a Habit
                </p>
              </motion.div>
            </div>
          </motion.div>

          {/* Content side */}
          <motion.div
            className="order-1 lg:order-2"
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
          >
            <motion.span
              className="inline-block text-sm font-semibold text-gradient-fire tracking-wider uppercase mb-4"
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
            >
              🎯 Habits
            </motion.span>

            <h2 className="font-heading text-3xl md:text-5xl font-bold mb-6 text-foreground">
              Habit building <span className="text-gradient-fire">system</span>
            </h2>

            <p className="text-muted-foreground text-lg leading-relaxed mb-4">
              Improve not only physique but also develop healthy habits and
              fortitude.
            </p>

            <p className="text-muted-foreground text-lg leading-relaxed mb-8">
              With MadMuscles you can reduce your level of stress, improve your
              sex drive and try different life-changing challenges.
            </p>

            {/* Benefits grid */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 sm:gap-4 mb-8">
              {benefits.map((benefit, idx) => (
                <motion.div
                  key={benefit.title}
                  className="p-4 bg-card/40 border border-border/50 rounded-xl hover:border-border transition-all hover:bg-card/60"
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: idx * 0.1 }}
                  whileHover={{ y: -4 }}
                >
                  <span className="text-2xl sm:text-3xl mb-2 block">
                    {benefit.icon}
                  </span>
                  <p className="font-semibold text-foreground text-xs sm:text-sm mb-1">
                    {benefit.title}
                  </p>
                  <p className="text-xs text-muted-foreground">
                    {benefit.desc}
                  </p>
                </motion.div>
              ))}
            </div>

            {/* Feature list */}
            <div className="space-y-3">
              <div className="flex items-center gap-3">
                <CheckCircle2
                  size={20}
                  className="text-gradient-fire flex-shrink-0"
                />
                <span className="text-foreground">
                  Daily challenges to keep you motivated
                </span>
              </div>
              <div className="flex items-center gap-3">
                <CheckCircle2
                  size={20}
                  className="text-gradient-fire flex-shrink-0"
                />
                <span className="text-foreground">
                  Track your streak and progress
                </span>
              </div>
              <div className="flex items-center gap-3">
                <CheckCircle2
                  size={20}
                  className="text-gradient-fire flex-shrink-0"
                />
                <span className="text-foreground">
                  Get rewards for milestones
                </span>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default HabitSection;
