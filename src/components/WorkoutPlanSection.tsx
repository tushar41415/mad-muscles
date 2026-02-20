import { motion } from "framer-motion";
import Tilt from "react-parallax-tilt";
import bicepsPose from "@/assets/biceps-pose.jpg";
import competitionFront from "@/assets/competition-front.jpg";

const points = [
  {
    icon: "🔥",
    title: "Adaptive intensity",
    desc: "Sessions evolve as your strength and endurance improve.",
  },
  {
    icon: "💪",
    title: "Visible progress",
    desc: "Track milestones and body changes every single week.",
  },
  {
    icon: "🎯",
    title: "Goal-focused structure",
    desc: "Every routine maps directly to your target outcome.",
  },
];

const WorkoutPlanSection = () => {
  return (
    <section id="plans" className="section-pad bg-gradient-dark-section">
      <div className="container mx-auto px-4 sm:px-6">
        <div className="grid items-center gap-10 lg:grid-cols-2 lg:gap-16">
          <motion.div
            className="grid grid-cols-2 gap-3 sm:gap-4"
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
          >
            <img
              src={bicepsPose}
              alt="Workout training session"
              className="h-full min-h-[260px] w-full rounded-2xl object-cover shadow-2xl"
              loading="lazy"
            />
            <div className="space-y-3 sm:space-y-4">
              <img
                src={competitionFront}
                alt="Fitness transformation result"
                className="h-52 w-full rounded-2xl object-cover shadow-2xl sm:h-60"
                loading="lazy"
              />
              <div className="surface-card glow-panel animate-glow-pulse p-4 sm:p-5">
                <p className="text-4xl font-bold text-gradient-fire">200+</p>
                <p className="text-xs uppercase tracking-wider text-muted-foreground">
                  Expert exercises
                </p>
              </div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
          >
            <span className="badge-pill mb-4">Training System</span>
            <h2 className="text-4xl leading-[0.92] text-foreground sm:text-5xl lg:text-6xl">
              Personalized Workout Engine
            </h2>
            <p className="mt-5 max-w-xl text-base leading-relaxed text-muted-foreground sm:text-lg">
              We blend strength, cardio, and mobility into one plan that stays
              effective whether you train at home or in a gym.
            </p>

            <div className="mt-7 space-y-3">
              {points.map((point) => (
                <Tilt
                  key={point.title}
                  tiltMaxAngleX={7}
                  tiltMaxAngleY={7}
                  glareEnable
                  glareMaxOpacity={0.12}
                  className="surface-card surface-card-hover glow-panel flex items-start gap-3 p-4 sm:p-5"
                >
                  <span className="text-2xl">{point.icon}</span>
                  <div>
                    <p className="text-base font-semibold text-foreground sm:text-lg">
                      {point.title}
                    </p>
                    <p className="text-sm text-muted-foreground">{point.desc}</p>
                  </div>
                </Tilt>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default WorkoutPlanSection;
