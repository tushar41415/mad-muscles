import { useLocation } from "react-router-dom";
import { useEffect } from "react";
import ParticleBackground from "@/components/ParticleBackground";

const NotFound = () => {
  const location = useLocation();

  useEffect(() => {
    console.error("404 Error: User attempted to access non-existent route:", location.pathname);
  }, [location.pathname]);

  return (
    <div className="relative flex min-h-screen items-center justify-center overflow-hidden bg-background px-4">
      <ParticleBackground className="z-[1] opacity-70" density={20} />
      <div className="absolute -left-24 top-0 h-80 w-80 rounded-full bg-primary/15 blur-3xl" />
      <div className="absolute -right-24 bottom-0 h-80 w-80 rounded-full bg-accent/15 blur-3xl" />
      <div className="surface-card glow-panel relative z-10 w-full max-w-lg p-8 text-center">
        <p className="text-sm uppercase tracking-[0.2em] text-muted-foreground">
          Error 404
        </p>
        <h1 className="mt-2 text-6xl leading-none text-gradient-fire sm:text-7xl">
          LOST
        </h1>
        <p className="mt-3 text-base text-muted-foreground sm:text-lg">
          The page you requested does not exist.
        </p>
        <a
          href="/"
          className="shine-sweep mt-6 inline-flex rounded-xl bg-gradient-fire px-6 py-3 text-sm font-semibold text-primary-foreground"
        >
          Return to Home
        </a>
      </div>
    </div>
  );
};

export default NotFound;
