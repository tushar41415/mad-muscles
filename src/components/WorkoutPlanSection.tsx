import { motion } from "framer-motion";
import bicepsPose from "@/assets/biceps-pose.jpg";
import competitionFront from "@/assets/competition-front.jpg";

const WorkoutPlanSection = () => {
  return (
    <section className="py-24 bg-gradient-dark-section">
      <div className="container mx-auto px-4">
        <div className="grid lg:grid-cols-2 gap-6 md:gap-12 lg:gap-16 items-center">
          {/* Image Gallery */}
          <motion.div
            className="flex justify-center gap-3 sm:gap-4"
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
          >
            <div className="space-y-4">
              <motion.img
                src={bicepsPose}
                alt="Muscle building workout"
                className="w-full sm:w-32 md:w-40 lg:w-48 h-40 sm:h-48 md:h-56 lg:h-64 rounded-xl object-cover shadow-xl hover:shadow-2xl transition-shadow"
                whileHover={{ scale: 1.05 }}
              />
              <div className="relative w-full sm:w-32 md:w-40 lg:w-48 h-24 sm:h-28 md:h-30 lg:h-32">
                <div className="absolute -inset-1 bg-gradient-fire opacity-20 blur-lg rounded-lg" />
                <div className="relative bg-card border border-border rounded-lg p-4 h-full flex flex-col justify-center">
                  <span className="text-3xl font-bold text-gradient-fire">
                    200+
                  </span>
                  <span className="text-xs text-muted-foreground mt-1">
                    Different exercises
                  </span>
                </div>
              </div>
            </div>
            <motion.img
              src={competitionFront}
              alt="Fitness transformation"
              className="w-full sm:w-32 md:w-40 lg:w-48 h-40 sm:h-64 md:h-72 lg:h-full rounded-xl object-cover shadow-xl hover:shadow-2xl transition-shadow"
              whileHover={{ scale: 1.05 }}
            />
          </motion.div>

          {/* Content */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="font-heading text-3xl md:text-5xl font-bold mb-6 text-foreground">
              Personalized Workout Plan
            </h2>
            <p className="text-muted-foreground mb-8 text-lg">
              In our database, there are more than 200 exercises for different
              parts of the body designed by experts
            </p>
            <div className="space-y-4 mb-8">
              <div className="flex items-start gap-3 p-4 bg-card/50 rounded-lg border border-border/50">
                <span className="text-2xl">🔥</span>
                <div>
                  <p className="text-foreground font-semibold">
                    Dynamic Results
                  </p>
                  <p className="text-sm text-muted-foreground">
                    We combine static and dynamic exercises to get the best
                    result.
                  </p>
                </div>
              </div>
              <div className="flex items-start gap-3 p-4 bg-card/50 rounded-lg border border-border/50">
                <span className="text-2xl">💪</span>
                <div>
                  <p className="text-foreground font-semibold">Fast Progress</p>
                  <p className="text-sm text-muted-foreground">
                    You will see first body changes after just{" "}
                    <strong>8 workouts.</strong>
                  </p>
                </div>
              </div>
              <div className="flex items-start gap-3 p-4 bg-card/50 rounded-lg border border-border/50">
                <span className="text-2xl">🎯</span>
                <div>
                  <p className="text-foreground font-semibold">Personalized</p>
                  <p className="text-sm text-muted-foreground">
                    Each plan is tailored to your fitness level and goals.
                  </p>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default WorkoutPlanSection;
