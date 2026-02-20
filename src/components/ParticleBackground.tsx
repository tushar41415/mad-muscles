import { useEffect, useMemo, useState } from "react";
import type { ComponentType } from "react";
import type { ISourceOptions } from "@tsparticles/engine";
import { cn } from "@/lib/utils";

interface ParticleBackgroundProps {
  className?: string;
  density?: number;
}

interface DynamicParticlesProps {
  id?: string;
  className?: string;
  options?: ISourceOptions;
}

const ParticleBackground = ({
  className,
  density = 48,
}: ParticleBackgroundProps) => {
  const [ParticlesComponent, setParticlesComponent] =
    useState<ComponentType<DynamicParticlesProps> | null>(null);
  const [isReady, setIsReady] = useState(false);

  useEffect(() => {
    let active = true;

    const initParticles = async () => {
      const [{ default: Particles, initParticlesEngine }, { loadSlim }] =
        await Promise.all([
          import("@tsparticles/react"),
          import("@tsparticles/slim"),
        ]);

      await initParticlesEngine(async (engine) => {
        await loadSlim(engine);
      });

      if (active) {
        setParticlesComponent(() => Particles);
        setIsReady(true);
      }
    };

    void initParticles();

    return () => {
      active = false;
    };
  }, []);

  const options = useMemo<ISourceOptions>(
    () => ({
      fullScreen: false,
      detectRetina: true,
      fpsLimit: 60,
      particles: {
        color: { value: ["#47dcff", "#9d86ff", "#ff7ed8"] },
        links: {
          color: "#47dcff",
          distance: 120,
          enable: true,
          opacity: 0.16,
          width: 1,
        },
        move: {
          direction: "none",
          enable: true,
          outModes: { default: "out" },
          random: false,
          speed: 0.55,
          straight: false,
        },
        number: {
          density: {
            enable: true,
            area: 900,
          },
          value: density,
        },
        opacity: {
          value: { min: 0.2, max: 0.6 },
          animation: { enable: true, speed: 0.45, minimumValue: 0.15 },
        },
        shape: { type: "circle" },
        size: {
          value: { min: 1, max: 3 },
          animation: { enable: true, speed: 2.2, minimumValue: 0.4 },
        },
      },
      interactivity: {
        events: {
          onHover: { enable: true, mode: "grab" },
          resize: true,
        },
        modes: {
          grab: {
            distance: 130,
            links: { opacity: 0.38 },
          },
        },
      },
    }),
    [density]
  );

  if (!isReady || !ParticlesComponent) {
    return null;
  }

  return (
    <ParticlesComponent
      id="site-particles"
      className={cn("pointer-events-none absolute inset-0", className)}
      options={options}
    />
  );
};

export default ParticleBackground;
