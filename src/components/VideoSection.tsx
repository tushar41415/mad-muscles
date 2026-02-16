import { motion } from "framer-motion";
import { Play } from "lucide-react";

const VideoSection = () => {
  return (
    <section className="py-24 bg-secondary relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute top-0 left-1/4 w-96 h-96 bg-primary rounded-full blur-3xl" />
        <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-gradient-fire rounded-full blur-3xl" />
      </div>

      <div className="container mx-auto px-4 relative z-10">
        {/* Section header */}
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <motion.span
            className="inline-block text-sm font-semibold text-gradient-fire tracking-wider uppercase mb-4"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
          >
            📺 Video Testimonials
          </motion.span>
          <h2 className="font-heading text-4xl md:text-5xl font-bold mb-4">
            See the <span className="text-gradient-fire">transformation</span>{" "}
            in action
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            Watch real users share their incredible fitness journeys and results
            with MadMuscles
          </p>
        </motion.div>

        {/* Video player */}
        <motion.div
          className="max-w-4xl mx-auto"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.2 }}
        >
          {/* Video container with hover effect */}
          <motion.div
            className="relative w-full aspect-video rounded-3xl overflow-hidden border border-border group cursor-pointer"
            whileHover={{ borderColor: "hsl(16, 100%, 55%)" }}
          >
            {/* Glow effect on hover */}
            <div className="absolute -inset-1 bg-gradient-fire opacity-0 group-hover:opacity-20 blur-xl transition-opacity rounded-3xl" />

            {/* Video iframe */}
            <iframe
              src="https://www.youtube.com/embed/sM7tdlFGpUA"
              title="MadMuscles workouts app"
              className="absolute inset-0 w-full h-full"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
            />

            {/* Play button overlay for mobile */}
            <motion.div
              className="absolute inset-0 flex items-center justify-center bg-gradient-to-r from-black/30 to-transparent opacity-0 group-hover:opacity-100 transition-opacity"
              whileHover={{ opacity: 1 }}
            >
              <motion.button
                className="w-24 h-24 rounded-full bg-gradient-fire flex items-center justify-center shadow-2xl"
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.95 }}
              >
                <Play className="w-10 h-10 text-white fill-white ml-1" />
              </motion.button>
            </motion.div>
          </motion.div>
        </motion.div>

        {/* Video info cards */}
        <motion.div
          className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 sm:gap-6 mt-12 sm:mt-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.4 }}
        >
          <div className="p-4 sm:p-6 bg-card border border-border rounded-2xl text-center hover:border-primary/50 transition-all hover:shadow-lg">
            <span className="text-3xl sm:text-4xl mb-3 block">🎬</span>
            <p className="font-semibold text-foreground mb-2 text-sm sm:text-base">
              Real Stories
            </p>
            <p className="text-xs sm:text-sm text-muted-foreground">
              Authentic user transformations and experiences
            </p>
          </div>
          <div className="p-4 sm:p-6 bg-card border border-border rounded-2xl text-center hover:border-primary/50 transition-all hover:shadow-lg">
            <span className="text-3xl sm:text-4xl mb-3 block">⭐</span>
            <p className="font-semibold text-foreground mb-2 text-sm sm:text-base">
              Success Rate
            </p>
            <p className="text-xs sm:text-sm text-muted-foreground">
              95% of users see results in 8 weeks
            </p>
          </div>
          <div className="p-4 sm:p-6 bg-card border border-border rounded-2xl text-center hover:border-primary/50 transition-all hover:shadow-lg">
            <span className="text-3xl sm:text-4xl mb-3 block">💬</span>
            <p className="font-semibold text-foreground mb-2 text-sm sm:text-base">
              Expert Tips
            </p>
            <p className="text-xs sm:text-sm text-muted-foreground">
              Learn from fitness coaches & nutritionists
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default VideoSection;
