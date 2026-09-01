import { Menu, X } from "lucide-react";
import { AnimatePresence, motion } from "framer-motion";
import { useState, useEffect } from "react";

const navigation = [
  { label: "About", id: "about" },
  { label: "Work", id: "work" },
  { label: "Stack", id: "stack" },
  { label: "Contact", id: "contact" },
];

const Navigation = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [activeSection, setActiveSection] = useState("home");
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);

      const sections = ["home", ...navigation.map((item) => item.id)];
      const scrollPosition = window.scrollY + 150;

      for (const section of sections) {
        const element = document.getElementById(section);

        if (!element) continue;

        const { offsetTop, offsetHeight } = element;

        if (
          scrollPosition >= offsetTop &&
          scrollPosition < offsetTop + offsetHeight
        ) {
          setActiveSection(section);
          break;
        }
      }
    };

    window.addEventListener("scroll", handleScroll);
    handleScroll();

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }

    return () => {
      document.body.style.overflow = "";
    };
  }, [isOpen]);

  const scrollTo = (id) => {
    document.getElementById(id)?.scrollIntoView({
      behavior: "smooth",
    });

    setIsOpen(false);
  };

  return (
    <header className="fixed inset-x-0 top-0 z-50 px-3 py-3 sm:px-6 md:px-10 md:py-5">
      <div className="mx-auto max-w-7xl">
        <div className="relative z-[60] flex items-center justify-between">
          <motion.button
            type="button"
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            onClick={() => scrollTo("home")}
            className="text-base font-semibold tracking-tight text-[#20201E] transition-colors hover:text-[#E8794F] sm:text-lg"
          >
            Jonathan
            <span className="text-neutral-400">.</span>
          </motion.button>

          <nav className="hidden items-center gap-6 lg:flex xl:gap-8">
            {navigation.map((item, index) => {
              const isActive = activeSection === item.id;

              return (
                <motion.button
                  type="button"
                  key={item.id}
                  initial={{ opacity: 0, y: -10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{
                    delay: index * 0.08,
                    duration: 0.5,
                  }}
                  onClick={() => scrollTo(item.id)}
                  className={`group relative whitespace-nowrap text-sm transition-colors ${
                    isActive
                      ? "text-[#20201E]"
                      : "text-neutral-500 hover:text-[#20201E]"
                  }`}
                >
                  <span className="mr-1 font-mono text-[10px] text-neutral-400">
                    0{index + 1}
                  </span>

                  {item.label}

                  {isActive ? (
                    <motion.span
                      layoutId="activeIndicator"
                      className="absolute -bottom-1 left-0 h-px w-full bg-[#E8794F]"
                    />
                  ) : (
                    <span className="absolute -bottom-1 left-0 h-px w-0 bg-[#E8794F] transition-all duration-300 group-hover:w-full" />
                  )}
                </motion.button>
              );
            })}
          </nav>

          <motion.button
            type="button"
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            onClick={() => setIsOpen((prev) => !prev)}
            aria-label={isOpen ? "Close menu" : "Open menu"}
            aria-expanded={isOpen}
            className={`relative flex h-9 w-9 items-center justify-center rounded-full border transition-all duration-300 sm:h-10 sm:w-10 lg:hidden ${
              isOpen
                ? "border-[#20201E] bg-[#20201E] text-white"
                : "border-neutral-300 bg-[#F4F1EA] text-[#20201E]"
            }`}
          >
            <AnimatePresence mode="wait" initial={false}>
              {isOpen ? (
                <motion.div
                  key="close"
                  initial={{ opacity: 0, rotate: -90 }}
                  animate={{ opacity: 1, rotate: 0 }}
                  exit={{ opacity: 0, rotate: 90 }}
                  transition={{ duration: 0.2 }}
                >
                  <X size={18} strokeWidth={1.5} />
                </motion.div>
              ) : (
                <motion.div
                  key="menu"
                  initial={{ opacity: 0, rotate: 90 }}
                  animate={{ opacity: 1, rotate: 0 }}
                  exit={{ opacity: 0, rotate: -90 }}
                  transition={{ duration: 0.2 }}
                >
                  <Menu size={18} strokeWidth={1.5} />
                </motion.div>
              )}
            </AnimatePresence>
          </motion.button>
        </div>

        <AnimatePresence>
          {isOpen && (
            <>
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 0.2 }}
                className="fixed inset-0 z-40 bg-[#20201E]/20 lg:hidden"
                onClick={() => setIsOpen(false)}
              />

              <motion.div
                initial={{
                  opacity: 0,
                  y: -20,
                }}
                animate={{
                  opacity: 1,
                  y: 0,
                }}
                exit={{
                  opacity: 0,
                  y: -20,
                }}
                transition={{
                  duration: 0.3,
                  ease: [0.22, 1, 0.36, 1],
                }}
                className="fixed inset-x-2 top-2 z-50 overflow-hidden rounded-2xl border border-[#D8D4CA] bg-[#F4F1EA] shadow-2xl sm:inset-x-5 sm:top-3"
              >
                <div className="px-5 pb-6 pt-20 sm:px-7 sm:pb-8">
                  <nav className="flex flex-col">
                    {navigation.map((item, index) => {
                      const isActive = activeSection === item.id;

                      return (
                        <motion.button
                          type="button"
                          key={item.id}
                          initial={{
                            opacity: 0,
                            x: -15,
                          }}
                          animate={{
                            opacity: 1,
                            x: 0,
                          }}
                          transition={{
                            delay: index * 0.06,
                            duration: 0.35,
                          }}
                          onClick={() => scrollTo(item.id)}
                          className="group flex items-center justify-between border-b border-[#D8D4CA] py-5 text-left"
                        >
                          <div className="flex items-center gap-4">
                            <span
                              className={`font-mono text-[10px] ${
                                isActive ? "text-[#E8794F]" : "text-neutral-400"
                              }`}
                            >
                              0{index + 1}
                            </span>

                            <span
                              className={`text-xl font-medium tracking-tight sm:text-2xl ${
                                isActive ? "text-[#E8794F]" : "text-[#20201E]"
                              }`}
                            >
                              {item.label}
                            </span>
                          </div>

                          <span
                            className={`text-lg transition-all duration-300 ${
                              isActive
                                ? "translate-x-1 text-[#E8794F]"
                                : "text-neutral-400 group-hover:translate-x-1 group-hover:text-[#20201E]"
                            }`}
                          >
                            →
                          </span>
                        </motion.button>
                      );
                    })}
                  </nav>

                  <div className="mt-7 flex items-center justify-between">
                    <span className="text-[9px] uppercase tracking-[0.25em] text-neutral-400">
                      Aung Zayar Myint
                    </span>

                    <span className="font-mono text-[9px] text-neutral-400">
                      © 2026
                    </span>
                  </div>
                </div>
              </motion.div>
            </>
          )}
        </AnimatePresence>
      </div>
    </header>
  );
};

export default Navigation;
