import { motion } from "framer-motion";
import { Play } from "lucide-react";

const cards = [
  {
    icon: "🎬",
    title: "Real stories",
    desc: "Authentic user transformations and journey recaps.",
  },
  {
    icon: "⭐",
    title: "High success rate",
    desc: "Most users report visible changes within 8 weeks.",
  },
  {
    icon: "🧭",
    title: "Expert guidance",
    desc: "Training and nutrition frameworks that stay practical.",
  },
];

const VideoSection = () => {
  return (
    <section className="section-pad relative overflow-hidden">
      <div className="absolute left-1/4 top-0 h-72 w-72 rounded-full bg-primary/10 blur-3xl" />
      <div className="absolute bottom-0 right-1/3 h-72 w-72 rounded-full bg-accent/10 blur-3xl" />

      <div className="container relative z-10 mx-auto px-4 sm:px-6">
        <motion.div
          className="mx-auto mb-12 max-w-3xl text-center"
          initial={{ opacity: 0, y: 18 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <span className="badge-pill mb-4">Video Testimonials</span>
          <h2 className="text-4xl leading-[0.92] text-foreground sm:text-5xl lg:text-6xl">
            Watch transformations in action
          </h2>
          <p className="mt-4 text-base text-muted-foreground sm:text-lg">
            Hear directly from users who rebuilt their consistency and physique
            using MadMuscles.
          </p>
        </motion.div>

        <motion.div
          className="mx-auto max-w-5xl"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <div className="surface-card glow-panel group relative aspect-video overflow-hidden rounded-[1.7rem] p-2">
            <iframe
              src="https://www.youtube.com/embed/sM7tdlFGpUA"
              title="MadMuscles workouts app"
              className="h-full w-full rounded-[1.2rem]"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
            />
            <div className="pointer-events-none absolute inset-0 flex items-center justify-center opacity-0 transition-opacity duration-300 group-hover:opacity-100">
              <span className="animate-glow-pulse flex h-20 w-20 items-center justify-center rounded-full bg-gradient-fire shadow-2xl">
                <Play className="ml-1 h-8 w-8 fill-white text-white" />
              </span>
            </div>
          </div>
        </motion.div>

        <div className="mt-10 grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {cards.map((card) => (
            <article
              key={card.title}
              className="surface-card glow-panel surface-card-hover p-5 text-center"
            >
              <span className="mb-2 block text-3xl">{card.icon}</span>
              <p className="text-base font-semibold text-foreground">
                {card.title}
              </p>
              <p className="mt-1 text-sm text-muted-foreground">{card.desc}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
};

export default VideoSection;
