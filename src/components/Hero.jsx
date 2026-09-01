import { motion } from "framer-motion";
import { ArrowDownRight, ArrowUpRight } from "lucide-react";
import Scene from "./Scene";

const Hero = () => {
  const scrollToWork = () => {
    document.getElementById("work")?.scrollIntoView({
      behavior: "smooth",
    });
  };

  return (
    <section
      id="home"
      className="relative min-h-screen overflow-hidden px-3 sm:px-6 md:px-8 lg:px-10"
    >
      <div className="mx-auto flex min-h-screen max-w-7xl flex-col justify-center py-16 sm:py-20 lg:py-0">
        <div className="grid items-center gap-8 sm:gap-10 lg:grid-cols-2 lg:gap-12">
          <div className="relative z-10 max-w-xl lg:max-w-none">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7 }}
              className="mb-5 flex items-center gap-3 sm:mb-7"
            >
              <span className="h-px w-8 bg-neutral-400" />
              <span className="font-mono text-[10px] uppercase tracking-[0.2em] text-neutral-500 sm:text-xs">
                Web Developer
              </span>
            </motion.div>

            <motion.h1
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.1 }}
              className="text-[clamp(2.2rem,10vw,6.5rem)] font-medium leading-[0.9] tracking-[-0.06em]"
            >
              Aung Zayar
              <br />
              <span className="text-neutral-400">
                Myint<span className="text-neutral-900">.</span>
              </span>
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.3 }}
              className="mt-5 max-w-md text-sm leading-6 text-neutral-500 sm:mt-6 sm:max-w-lg sm:text-base md:mt-8 md:text-lg md:leading-7"
            >
              I build thoughtful web applications, from interfaces and APIs to
              databases and deployment.
            </motion.p>

            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.5 }}
              className="mt-7 flex flex-col gap-3 sm:mt-8 sm:flex-row sm:flex-wrap"
            >
              <button
                onClick={scrollToWork}
                className="group flex min-h-[48px] w-full items-center justify-center gap-3 bg-neutral-900 px-5 py-3 text-sm text-white transition-transform hover:-translate-y-1 sm:w-auto"
              >
                View Work
                <ArrowUpRight
                  size={16}
                  className="transition-transform group-hover:translate-x-1 group-hover:-translate-y-1"
                />
              </button>

              <button
                onClick={() =>
                  document.getElementById("contact")?.scrollIntoView({
                    behavior: "smooth",
                  })
                }
                className="min-h-[48px] w-full border border-neutral-300 px-5 py-3 text-sm transition-colors hover:border-neutral-900 sm:w-auto"
              >
                Contact
              </button>
            </motion.div>

            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 1 }}
              className="mt-10 hidden lg:block"
            >
              <div className="relative inline-block">
                <svg
                  width="100"
                  height="50"
                  viewBox="0 0 100 50"
                  fill="none"
                  className="absolute -right-20 -top-8"
                >
                  <path
                    d="M5 10 C30 5, 55 10, 85 35"
                    stroke="#999"
                    strokeWidth="1"
                    strokeDasharray="3 3"
                  />
                  <path
                    d="M76 27 L86 36 L74 37"
                    stroke="#999"
                    strokeWidth="1"
                  />
                </svg>
                <span className="font-mono text-[10px] uppercase tracking-widest text-neutral-400">
                  starting point
                </span>
              </div>
            </motion.div>
          </div>

          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1 }}
            className="relative mx-auto w-full max-w-[540px] lg:max-w-none"
          >
            <div className="h-[220px] w-full sm:h-[300px] md:h-[380px] lg:h-[500px] xl:h-[560px]">
              <Scene />
            </div>

            <div className="absolute right-3 top-3 font-mono text-[8px] uppercase tracking-widest text-neutral-400 sm:right-4 sm:top-4 md:right-6 md:top-6 md:text-[10px]">
              3D / 001
            </div>

            <div className="absolute bottom-3 right-3 flex items-center gap-2 font-mono text-[8px] uppercase tracking-widest text-neutral-400 sm:bottom-4 sm:right-4 md:bottom-6 md:right-6 md:text-[10px]">
              <span className="h-1.5 w-1.5 rounded-full bg-neutral-400" />
              interactive
            </div>
          </motion.div>
        </div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.2 }}
          className="absolute bottom-8 left-6 hidden items-center gap-3 md:flex md:left-10"
        >
          <ArrowDownRight size={18} strokeWidth={1.2} />
          <span className="font-mono text-[10px] uppercase tracking-[0.2em] text-neutral-400">
            Scroll to explore
          </span>
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;
