import { motion } from "framer-motion";
import {
  Code2,
  MapPin,
  Clock,
  Zap,
  GraduationCap,
  ChevronRight,
} from "lucide-react";

const facts = [
  {
    label: "Experience",
    value: "2+ Years",
    icon: Clock,
  },
  {
    label: "Focus",
    value: "Web Development",
    icon: Code2,
  },
  {
    label: "Based",
    value: "Yangon, Myanmar",
    icon: MapPin,
  },
  {
    label: "Currently",
    value: "Building",
    icon: Zap,
  },
];

export default function About() {
  return (
    <section
      id="about"
      className="relative overflow-hidden bg-[#F4F1EA] px-6 py-32 md:px-12 md:py-40"
    >
      <div className="absolute inset-0 opacity-40">
        <div className="absolute -left-32 -top-32 h-[600px] w-[600px] rounded-full bg-[#E8794F]/10 blur-3xl" />
        <div className="absolute -bottom-48 -right-48 h-[700px] w-[700px] rounded-full bg-[#E8794F]/5 blur-3xl" />
        <div className="absolute left-1/2 top-1/2 h-[400px] w-[400px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-neutral-400/5 blur-3xl" />
      </div>

      <div className="relative mx-auto max-w-7xl">
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mb-20 flex items-center gap-4"
        >
          <span className="h-px w-10 bg-[#E8794F]" />
          <span className="text-[10px] font-medium uppercase tracking-[0.3em] text-[#E8794F]">
            01 — About
          </span>
        </motion.div>

        <div className="grid gap-16 lg:grid-cols-[1.2fr_0.8fr]">
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <h2 className="max-w-4xl text-4xl font-medium leading-[1.05] tracking-tight text-[#20201E] md:text-6xl lg:text-7xl">
              I build digital experiences that sit between
              <span className="relative ml-3 inline-block text-[#E8794F]">
                design
                <span className="absolute -bottom-2 left-0 h-0.5 w-full bg-[#E8794F]/30" />
              </span>
              <span className="mx-3 text-neutral-400">and</span>
              <span className="relative inline-block text-[#E8794F]">
                technology.
                <span className="absolute -bottom-2 left-0 h-0.5 w-full bg-[#E8794F]/30" />
              </span>
            </h2>

            <div className="mt-8 flex items-center gap-4">
              <span className="h-px w-12 bg-[#E8794F]/30" />
              <span className="text-[10px] font-mono tracking-[0.2em] text-neutral-400">
                ✦ 2024
              </span>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.15 }}
            className="flex flex-col justify-end"
          >
            <div className="relative">
              <div className="absolute -left-3 -top-4 font-serif text-5xl text-[#E8794F]/20">
                "
              </div>
              <p className="relative pl-6 text-base leading-8 text-neutral-600 md:text-lg">
                I'm a web developer focused on building thoughtful, performant
                and visually refined applications. I enjoy turning ideas into
                interfaces that feel simple, intentional and alive. My work
                mainly revolves around React, Node.js and modern web
                technologies, with an interest in creative development and
                interactive experiences.
              </p>
            </div>

            <div className="mt-8 flex gap-8 border-t border-neutral-200 pt-6">
              <div>
                <span className="block text-xl font-medium text-[#20201E]">
                  2+
                </span>
                <span className="text-[10px] uppercase tracking-[0.15em] text-neutral-400">
                  Years
                </span>
              </div>
              <div className="w-px bg-neutral-200" />
              <div>
                <span className="block text-xl font-medium text-[#20201E]">
                  12+
                </span>
                <span className="text-[10px] uppercase tracking-[0.15em] text-neutral-400">
                  Projects
                </span>
              </div>
              <div className="w-px bg-neutral-200" />
              <div>
                <span className="block text-xl font-medium text-[#20201E]">
                  100%
                </span>
                <span className="text-[10px] uppercase tracking-[0.15em] text-neutral-400">
                  Satisfaction
                </span>
              </div>
            </div>
          </motion.div>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="mt-28"
        >
          <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
            {facts.map((fact, index) => {
              const Icon = fact.icon;
              return (
                <motion.div
                  key={fact.label}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{
                    duration: 0.5,
                    delay: index * 0.08 + 0.2,
                  }}
                  whileHover={{
                    y: -4,
                    transition: { type: "spring", stiffness: 300 },
                  }}
                  className="group relative overflow-hidden rounded-xl border border-neutral-200 bg-white/50 p-6 transition-all duration-300 hover:border-[#E8794F]/30 hover:shadow-md"
                >
                  <div className="flex items-start gap-4">
                    <div className="rounded-lg bg-[#E8794F]/10 p-2.5 text-[#E8794F] transition-colors group-hover:bg-[#E8794F]/20">
                      <Icon size={18} />
                    </div>

                    <div>
                      <p className="text-[10px] uppercase tracking-[0.2em] text-neutral-400">
                        {fact.label}
                      </p>
                      <p className="mt-1 text-lg font-medium text-[#20201E]">
                        {fact.value}
                      </p>
                    </div>
                  </div>

                  <div className="absolute bottom-0 left-0 h-0.5 w-0 bg-[#E8794F]/30 transition-all duration-300 group-hover:w-full" />
                </motion.div>
              );
            })}
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="mt-32"
        >
          <div className="mb-12 flex items-center gap-3">
            <GraduationCap size={16} className="text-[#E8794F]" />
            <span className="text-[10px] font-medium uppercase tracking-[0.3em] text-neutral-400">
              Education
            </span>
            <span className="h-px flex-1 bg-neutral-200" />
          </div>

          <div className="relative">
            <div className="absolute left-5 top-0 h-full w-px bg-gradient-to-b from-[#E8794F]/30 via-neutral-200 to-neutral-200" />

            <div className="space-y-8">
              <motion.div
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.1 }}
                className="relative pl-14"
              >
                <div className="absolute left-3 top-1.5 flex h-4 w-4 items-center justify-center">
                  <div className="h-3 w-3 rounded-full border-2 border-[#E8794F]/30 bg-white">
                    <div className="m-0.5 h-1.5 w-1.5 rounded-full bg-[#E8794F]" />
                  </div>
                </div>

                <div className="rounded-xl border border-neutral-200 bg-white/50 p-6 transition-all duration-300 hover:border-[#E8794F]/20 hover:shadow-sm">
                  <div className="flex flex-wrap items-start justify-between gap-4">
                    <div>
                      <h3 className="text-lg font-medium text-[#20201E]">
                        NCC Education
                      </h3>
                      <p className="mt-1 text-sm text-neutral-500">
                        Level 4 & Level 5 Diploma in Computing
                      </p>
                    </div>
                    <span className="rounded-full bg-[#E8794F]/10 px-3 py-1 text-[10px] font-medium uppercase tracking-[0.1em] text-[#E8794F]">
                      Computing
                    </span>
                  </div>

                  <div className="mt-4 flex flex-wrap gap-4 border-t border-neutral-100 pt-4 text-[10px] uppercase tracking-[0.15em] text-neutral-400">
                    <span>2022 - 2024</span>
                    <span className="h-4 w-px bg-neutral-200" />
                    <span>Yangon, Myanmar</span>
                  </div>
                </div>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.15 }}
                className="relative pl-14"
              >
                <div className="absolute left-3 top-1.5 flex h-4 w-4 items-center justify-center">
                  <div className="h-3 w-3 rounded-full border-2 border-[#E8794F]/30 bg-white">
                    <div className="m-0.5 h-1.5 w-1.5 rounded-full bg-[#E8794F]" />
                  </div>
                </div>

                <div className="rounded-xl border border-neutral-200 bg-white/50 p-6 transition-all duration-300 hover:border-[#E8794F]/20 hover:shadow-sm">
                  <div className="flex flex-wrap items-start justify-between gap-4">
                    <div>
                      <h3 className="text-lg font-medium text-[#20201E]">
                        Fairway Technology
                      </h3>
                      <p className="mt-1 text-sm text-neutral-500">
                        RockStar Web Developer Course
                      </p>
                    </div>
                    <span className="rounded-full bg-[#E8794F]/10 px-3 py-1 text-[10px] font-medium uppercase tracking-[0.1em] text-[#E8794F]">
                      Web Dev
                    </span>
                  </div>

                  <div className="mt-4 flex flex-wrap gap-4 border-t border-neutral-100 pt-4 text-[10px] uppercase tracking-[0.15em] text-neutral-400">
                    <span>2025</span>
                    <span className="h-4 w-px bg-neutral-200" />
                    <span>Yangon, Myanmar</span>
                  </div>
                </div>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.2 }}
                className="relative pl-14"
              >
                <div className="absolute left-3 top-1.5 flex h-4 w-4 items-center justify-center">
                  <div className="h-3 w-3 rounded-full border-2 border-[#E8794F]/30 bg-white">
                    <div className="m-0.5 h-1.5 w-1.5 rounded-full bg-[#E8794F]" />
                  </div>
                </div>

                <div className="rounded-xl border border-neutral-200 bg-white/50 p-6 transition-all duration-300 hover:border-[#E8794F]/20 hover:shadow-sm">
                  <div className="flex flex-wrap items-start justify-between gap-4">
                    <div>
                      <h3 className="text-lg font-medium text-[#20201E]">
                        Turing Programming Training Center
                      </h3>
                      <p className="mt-1 text-sm text-neutral-500">
                        Advanced Software Engineering & Design Concepts
                      </p>
                    </div>
                    <span className="rounded-full bg-[#E8794F]/10 px-3 py-1 text-[10px] font-medium uppercase tracking-[0.1em] text-[#E8794F]">
                      Software
                    </span>
                  </div>

                  <div className="mt-4 flex flex-wrap gap-4 border-t border-neutral-100 pt-4 text-[10px] uppercase tracking-[0.15em] text-neutral-400">
                    <span>2026</span>
                    <span className="h-4 w-px bg-neutral-200" />
                    <span>Yangon, Myanmar</span>
                  </div>
                </div>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.25 }}
                className="relative pl-14 opacity-60"
              >
                <div className="absolute left-3 top-1.5 flex h-4 w-4 items-center justify-center">
                  <div className="h-3 w-3 rounded-full border-2 border-dashed border-neutral-300 bg-white" />
                </div>

                <div className="rounded-xl border border-dashed border-neutral-200 bg-neutral-50/50 p-6">
                  <div className="flex items-center justify-between">
                    <div>
                      <h3 className="text-base font-medium text-neutral-400">
                        Continuing Journey
                      </h3>
                      <p className="mt-1 text-sm text-neutral-400">
                        More to come...
                      </p>
                    </div>
                    <ChevronRight size={16} className="text-neutral-300" />
                  </div>
                </div>
              </motion.div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
