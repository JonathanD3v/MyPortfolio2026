import { motion } from "framer-motion";
import { ArrowUpRight } from "lucide-react";

const Contact = () => {
  return (
    <section
      id="contact"
      className="relative overflow-hidden bg-[#F4F1EA] px-5 py-24 sm:px-8 md:px-12 md:py-28"
    >
      <div className="absolute -right-40 -top-40 h-[600px] w-[600px] rounded-full bg-gradient-to-br from-[#E8794F]/5 to-transparent blur-3xl" />
      <div className="absolute -left-40 bottom-0 h-[400px] w-[400px] rounded-full bg-gradient-to-tr from-[#E8794F]/5 to-transparent blur-3xl" />

      <div className="relative mx-auto max-w-7xl">
        <div className="mb-16 flex items-center gap-3">
          <span className="h-px w-8 bg-neutral-400" />
          <span className="text-[10px] font-medium uppercase tracking-[0.3em] text-neutral-500">
            04 — Contact
          </span>
        </div>

        <div className="grid gap-12 lg:grid-cols-[1fr_0.7fr]">
          <motion.div
            initial={{ opacity: 0, y: 35 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
          >
            <p className="mb-2 text-sm text-neutral-500">
              Have an idea or a project in mind?
            </p>

            <h2 className="text-6xl font-medium leading-[0.88] tracking-[-0.05em] text-[#20201E] sm:text-7xl md:text-8xl lg:text-[8rem]">
              LET'S
              <br />
              <span className="text-neutral-400">TALK.</span>
            </h2>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 25 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{
              duration: 0.7,
              delay: 0.15,
            }}
            className="flex flex-col justify-end"
          >
            <p className="max-w-sm text-sm leading-7 text-neutral-500">
              I'm always interested in hearing about new ideas, interesting
              projects and opportunities to build something meaningful together.
            </p>

            <a
              href="mailto:aungzayarmyint.dev@gmail.com"
              className="group mt-8 flex w-fit items-center gap-3 border-b border-[#E8794F] pb-3 text-sm text-[#20201E] transition-colors hover:border-[#E8794F]"
            >
              <span className="relative after:absolute after:bottom-0 after:left-0 after:h-[1px] after:w-0 after:bg-[#E8794F] after:transition-all after:duration-300 group-hover:after:w-full">
                aungzayarmyint.dev@gmail.com
              </span>

              <span className="flex h-7 w-7 items-center justify-center rounded-full border border-[#E8794F] text-[#20201E] transition-all duration-300 group-hover:bg-[#E8794F] group-hover:text-white">
                <ArrowUpRight
                  size={14}
                  strokeWidth={1.5}
                  className="transition-transform duration-300 group-hover:rotate-12"
                />
              </span>
            </a>
          </motion.div>
        </div>

        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7, delay: 0.2 }}
          className="mt-24 border-t border-[#D8D4CA] pt-6"
        >
          <div className="grid gap-6 sm:grid-cols-3">
            <a href="tel:+959940840331" className="group">
              <p className="mb-2 text-[10px] uppercase tracking-[0.25em] text-neutral-400">
                Phone
              </p>

              <div className="flex items-center gap-2 overflow-hidden text-sm text-neutral-500 transition-colors group-hover:text-[#20201E]">
                <span className="transition-transform duration-300 group-hover:translate-x-1">
                  +95 9 940 840 331
                </span>

                <ArrowUpRight
                  size={13}
                  strokeWidth={1.5}
                  className="-translate-x-2 opacity-0 transition-all duration-300 group-hover:translate-x-0 group-hover:opacity-100"
                />
              </div>
            </a>

            <a
              href="https://github.com/JonathanD3v"
              target="_blank"
              rel="noreferrer"
              className="group"
            >
              <p className="mb-2 text-[10px] uppercase tracking-[0.25em] text-neutral-400">
                GitHub
              </p>

              <div className="flex items-center gap-2 overflow-hidden text-sm text-neutral-500 transition-colors group-hover:text-[#20201E]">
                <span className="transition-transform duration-300 group-hover:translate-x-1">
                  github.com/JonathanD3v
                </span>

                <ArrowUpRight
                  size={13}
                  strokeWidth={1.5}
                  className="-translate-x-2 opacity-0 transition-all duration-300 group-hover:translate-x-0 group-hover:opacity-100"
                />
              </div>
            </a>

            <a
              href="https://www.linkedin.com/in/aung-zayar-myint-757b32257/"
              target="_blank"
              rel="noreferrer"
              className="group"
            >
              <p className="mb-2 text-[10px] uppercase tracking-[0.25em] text-neutral-400">
                LinkedIn
              </p>

              <div className="flex items-center gap-2 overflow-hidden text-sm text-neutral-500 transition-colors group-hover:text-[#20201E]">
                <span className="transition-transform duration-300 group-hover:translate-x-1">
                  linkedin.com/in/aung-zayar-myint
                </span>

                <ArrowUpRight
                  size={13}
                  strokeWidth={1.5}
                  className="-translate-x-2 opacity-0 transition-all duration-300 group-hover:translate-x-0 group-hover:opacity-100"
                />
              </div>
            </a>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 15 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.3 }}
          className="mt-16 flex flex-col gap-3 border-t border-[#D8D4CA] pt-5 text-[9px] uppercase tracking-[0.2em] text-neutral-400 sm:flex-row sm:items-center sm:justify-between"
        >
          <span className="font-medium tracking-[0.25em]">Jonathan.</span>

          <span className="hidden sm:block">05 — Contact</span>

          <span>© {new Date().getFullYear()}</span>
        </motion.div>
      </div>
    </section>
  );
};

export default Contact;
