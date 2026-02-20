import { motion } from "framer-motion";
import {
  Facebook,
  Instagram,
  Linkedin,
  Mail,
  MapPin,
  Phone,
  Twitter,
} from "lucide-react";

const footerLinks = [
  { title: "Product", links: ["Features", "Pricing", "Security", "Team"] },
  { title: "Company", links: ["About", "Blog", "Careers", "Press"] },
  { title: "Resources", links: ["Help Center", "Community", "Contact", "FAQ"] },
  {
    title: "Legal",
    links: ["Privacy Policy", "Terms of Use", "Cookie Policy", "Support"],
  },
];

const socials = [Facebook, Twitter, Instagram, Linkedin];

const Footer = () => {
  return (
    <footer className="relative overflow-hidden border-t border-border/60 bg-gradient-dark-section py-14">
      <div className="absolute left-12 top-0 h-64 w-64 rounded-full bg-primary/10 blur-3xl" />
      <div className="absolute bottom-0 right-12 h-64 w-64 rounded-full bg-accent/10 blur-3xl" />

      <div className="container relative z-10 mx-auto px-4 sm:px-6">
        <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-5">
          <div className="lg:col-span-1">
            <span className="font-heading text-3xl leading-none">
              <span className="text-gradient-fire">MAD</span>
              <span className="ml-1 rounded-md border border-primary/60 bg-primary/10 px-2 py-0.5 text-sm text-foreground">
                MUSCLES
              </span>
            </span>
            <p className="mt-4 text-sm leading-relaxed text-muted-foreground">
              Transform your body with plans that blend training, nutrition,
              and behavior design.
            </p>
            <div className="mt-4 flex gap-2">
              {socials.map((Icon, index) => (
                <motion.a
                  key={index}
                  href="#"
                  className="rounded-lg border border-border/70 bg-card/70 p-2.5 text-muted-foreground transition-colors hover:border-primary/50 hover:text-foreground"
                  whileHover={{ y: -2 }}
                >
                  <Icon size={16} />
                </motion.a>
              ))}
            </div>
          </div>

          {footerLinks.map((column) => (
            <div key={column.title}>
              <h3 className="text-sm font-semibold uppercase tracking-[0.14em] text-foreground/90">
                {column.title}
              </h3>
              <ul className="mt-3 space-y-2.5">
                {column.links.map((link) => (
                  <li key={link}>
                    <a
                      href="#"
                      className="text-sm text-muted-foreground transition-colors hover:text-foreground"
                    >
                      {link}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className="surface-card mt-10 grid gap-4 p-5 md:grid-cols-3">
          <div className="flex items-center gap-3">
            <span className="rounded-lg bg-primary/15 p-2 text-primary">
              <Mail size={16} />
            </span>
            <a
              href="mailto:support@madmuscles.com"
              className="text-sm text-muted-foreground hover:text-foreground"
            >
              support@madmuscles.com
            </a>
          </div>
          <div className="flex items-center gap-3">
            <span className="rounded-lg bg-primary/15 p-2 text-primary">
              <Phone size={16} />
            </span>
            <a
              href="tel:+1234567890"
              className="text-sm text-muted-foreground hover:text-foreground"
            >
              +1 (234) 567-890
            </a>
          </div>
          <div className="flex items-center gap-3">
            <span className="rounded-lg bg-primary/15 p-2 text-primary">
              <MapPin size={16} />
            </span>
            <p className="text-sm text-muted-foreground">San Francisco, USA</p>
          </div>
        </div>

        <div className="mt-8 flex flex-col items-center justify-between gap-3 border-t border-border/60 pt-6 text-xs text-muted-foreground md:flex-row">
          <p>© 2026 MadMuscles. All rights reserved.</p>
          <div className="flex gap-4">
            <a href="#" className="hover:text-foreground">
              Privacy Policy
            </a>
            <a href="#" className="hover:text-foreground">
              Terms of Use
            </a>
            <a href="#" className="hover:text-foreground">
              Cookie Policy
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
