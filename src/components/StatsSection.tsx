import { motion } from "framer-motion";
import { MessageCircle } from "lucide-react";
import Tilt from "react-parallax-tilt";
import competitionSide from "@/assets/competition-side.jpg";
import heropose from "@/assets/hero-pose.png";

const stats = [
  {
    emoji: "🌍",
    value: "100K+",
    label: "users worldwide",
    sublabel: "available in 6 languages",
  },
  {
    emoji: "🏋️",
    value: "115K+",
    label: "workouts completed",
    sublabel: "equivalent to 7+ years of training",
  },
  {
    emoji: "💪",
    value: "60K+",
    label: "muscle gains tracked",
    sublabel: "real user progress snapshots",
  },
];

const StatsSection = () => {
  return (
    <section id="results" className="section-pad relative overflow-hidden">
      <div className="absolute right-0 top-0 h-80 w-80 opacity-10 blur-sm">
        <img src={competitionSide} alt="" className="h-full w-full object-cover" />
      </div>

      <div className="container relative z-10 mx-auto px-4 sm:px-6">
        <motion.div
          className="mx-auto mb-12 max-w-2xl text-center"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <span className="badge-pill mb-4">Proven Results</span>
          <h2 className="text-4xl leading-[0.92] text-foreground sm:text-5xl lg:text-6xl">
            We don&apos;t sell hype. We deliver outcomes.
          </h2>
        </motion.div>

        <div className="mb-12 grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {stats.map((item, i) => (
            <motion.div
              key={item.label}
              className="h-full"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: i * 0.1 }}
              viewport={{ once: true }}
            >
              <Tilt
                tiltMaxAngleX={8}
                tiltMaxAngleY={8}
                glareEnable
                glareMaxOpacity={0.14}
                className="surface-card surface-card-hover glow-panel h-full p-6 text-center"
              >
                <span className="mb-3 block text-4xl">{item.emoji}</span>
                <p className="text-4xl font-bold text-gradient-fire">{item.value}</p>
                <p className="mt-1 text-sm font-semibold uppercase tracking-widest text-foreground/90">
                  {item.label}
                </p>
                <p className="mt-2 text-xs text-muted-foreground">{item.sublabel}</p>
              </Tilt>
            </motion.div>
          ))}
        </div>

        <div className="grid items-center gap-6 lg:grid-cols-2">
          <motion.div
            className="surface-card overflow-hidden p-3"
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
          >
            <img
              src={heropose}
              alt="Athletic transformation"
              className="h-full w-full rounded-xl object-cover"
              loading="lazy"
            />
          </motion.div>

          <motion.div
            className="space-y-4"
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
          >
            <div className="surface-card p-6">
              <h3 className="text-3xl text-foreground sm:text-4xl">
                Why users stay with us
              </h3>
              <p className="mt-3 text-sm leading-relaxed text-muted-foreground sm:text-base">
                Personalized plans, clear daily execution, and measurable
                progress make MadMuscles easier to stick with than generic
                fitness apps.
              </p>
              <ul className="mt-4 space-y-2 text-sm text-foreground">
                <li>• Adaptive workouts matched to your level</li>
                <li>• Macro-aligned meal recommendations</li>
                <li>• Habit and recovery tracking in one place</li>
              </ul>
            </div>

            <a
              href="#"
              className="surface-card surface-card-hover glow-panel shine-sweep inline-flex w-full items-center justify-center gap-2 p-4 text-sm font-semibold text-foreground sm:text-base"
            >
              <MessageCircle size={18} className="text-primary" />
              Talk to support
            </a>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default StatsSection;
