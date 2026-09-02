import { motion } from "framer-motion";
import { useState } from "react";
import {
  Code2,
  MapPin,
  Clock,
  Zap,
  GraduationCap,
  ChevronRight,
} from "lucide-react";

import profileImage from "../assets/profile.jpeg";

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

const interests = [
  // Backend focused
  "API Design",
  "Database Optimization",
  "System Architecture",
  "Microservices",
  "Cloud Infrastructure",
  "DevOps",
  "Open Source",
  "Creative Coding",
];

const fullBio =
  "I'm a web developer focused on building thoughtful, performant and visually refined applications. I enjoy turning ideas into interfaces that feel simple, intentional and alive. My work mainly revolves around React, Node.js and modern web technologies, with an interest in creative development and interactive experiences.";

export default function About() {
  const [isExpanded, setIsExpanded] = useState(false);

  return (
    <section
      id="about"
      className="relative overflow-hidden bg-[#F4F1EA] px-5 py-24 sm:px-8 md:px-12 md:py-28"
    >
      <div className="relative mx-auto max-w-7xl">
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mb-14 flex items-center gap-4"
        >
          <span className="h-px w-8 bg-[#E8794F]" />
          <span className="text-[10px] font-medium uppercase tracking-[0.3em] text-[#E8794F]">
            01 — About
          </span>
        </motion.div>

        <div className="grid items-start gap-12 lg:grid-cols-[1.1fr_0.9fr] lg:gap-20">
          <motion.div
            initial={{ opacity: 0, y: 35 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <h2 className="max-w-4xl text-4xl font-medium leading-[1.05] tracking-[-0.04em] text-[#20201E] sm:text-5xl md:text-6xl lg:text-7xl">
              I build digital experiences that sit between{" "}
              <span className="relative inline-block text-[#E8794F]">
                design
                <span className="absolute -bottom-1 left-0 h-0.5 w-full bg-[#E8794F]/30" />
              </span>{" "}
              <span className="text-neutral-400">and</span>{" "}
              <span className="relative inline-block text-[#E8794F]">
                technology.
                <span className="absolute -bottom-1 left-0 h-0.5 w-full bg-[#E8794F]/30" />
              </span>
            </h2>

            <div className="mt-6 flex items-center gap-4">
              <span className="h-px w-10 bg-[#E8794F]/30" />
              <span className="font-mono text-[10px] tracking-[0.2em] text-neutral-400">
                ✦ 2024
              </span>
            </div>

            <div className="relative mt-10">
              <div className="absolute -left-2 -top-5 font-serif text-5xl text-[#E8794F]/20">
                "
              </div>

              <p className="relative max-w-2xl pl-5 text-base leading-7 text-neutral-600 md:text-lg md:leading-8">
                {isExpanded ? fullBio : fullBio.slice(0, 160) + "..."}
              </p>

              <button
                onClick={() => setIsExpanded(!isExpanded)}
                className="ml-5 mt-1 text-xs font-medium text-[#E8794F] transition-colors hover:text-[#20201E]"
              >
                {isExpanded ? "Read less" : "Read more"}
              </button>
            </div>

            <div className="mt-6 flex flex-wrap gap-2 pl-5">
              {interests.map((interest) => (
                <span
                  key={interest}
                  className="rounded-full border border-[#E8794F]/20 bg-[#E8794F]/5 px-3 py-1 text-xs text-neutral-600 transition-colors hover:border-[#E8794F]/40 hover:bg-[#E8794F]/10"
                >
                  {interest}
                </span>
              ))}
            </div>

            <div className="mt-8 grid grid-cols-3 border-t border-neutral-200 pt-6">
              {[
                { value: "2+", label: "Years", delay: 0 },
                { value: "12+", label: "Projects", delay: 0.1 },
                { value: "100%", label: "Satisfaction", delay: 0.2 },
              ].map((stat, index) => (
                <motion.div
                  key={stat.label}
                  initial={{ opacity: 0, y: 10 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                  className={`${index > 0 ? "border-l border-neutral-200 pl-5" : ""} group cursor-default`}
                >
                  <span className="block text-2xl font-medium text-[#20201E] transition-all duration-300 group-hover:text-[#E8794F] group-hover:translate-x-1">
                    {stat.value}
                  </span>
                  <span className="text-[9px] uppercase tracking-[0.15em] text-neutral-400">
                    {stat.label}
                  </span>
                </motion.div>
              ))}
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 35 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.15 }}
            className="lg:pt-4"
          >
            <div className="relative mx-auto w-full max-w-sm lg:ml-auto">
              <div className="group relative aspect-[4/5] overflow-hidden bg-neutral-200">
                <img
                  src={profileImage}
                  alt="Aung Zayar Myint"
                  className="h-full w-full object-cover grayscale transition-all duration-700 group-hover:scale-105 group-hover:grayscale-0"
                />

                <div className="absolute inset-0 bg-gradient-to-t from-[#E8794F]/20 via-[#E8794F]/5 to-transparent opacity-0 transition-opacity duration-500 group-hover:opacity-100" />

                <div className="absolute inset-2 border border-white/20 opacity-0 transition-opacity duration-500 group-hover:opacity-100" />
              </div>

              <div className="absolute -bottom-3 -right-3 h-14 w-14 border-b border-r border-[#E8794F]/40" />
            </div>

            <div className="mt-10 grid grid-cols-2 border-t border-neutral-200">
              {facts.map((fact, index) => {
                const Icon = fact.icon;

                return (
                  <motion.div
                    key={fact.label}
                    initial={{ opacity: 0, y: 15 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{
                      duration: 0.4,
                      delay: index * 0.06,
                    }}
                    className={`group flex items-center gap-3 py-4 transition-all duration-300 hover:bg-white/30 ${
                      index % 2 === 0
                        ? "border-r border-neutral-200 pr-4"
                        : "pl-4"
                    } ${index >= 2 ? "border-t border-neutral-200" : ""}`}
                  >
                    <div className="text-[#E8794F] transition-transform duration-300 group-hover:scale-110">
                      <Icon size={16} strokeWidth={1.5} />
                    </div>

                    <div>
                      <p className="text-[9px] uppercase tracking-[0.15em] text-neutral-400">
                        {fact.label}
                      </p>

                      <p className="mt-0.5 text-sm font-medium text-[#20201E] transition-colors group-hover:text-[#E8794F]">
                        {fact.value}
                      </p>
                    </div>
                  </motion.div>
                );
              })}
            </div>
          </motion.div>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 25 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mt-24"
        >
          <div className="mb-8 flex items-center gap-3">
            <GraduationCap
              size={16}
              strokeWidth={1.5}
              className="text-[#E8794F]"
            />
            <span className="text-[10px] font-medium uppercase tracking-[0.3em] text-neutral-400">
              Education
            </span>
            <span className="h-px flex-1 bg-[#D8D4CA]" />
          </div>

          <div className="relative">
            <div className="absolute left-5 top-0 hidden h-full w-px bg-[#D8D4CA] sm:block" />

            <div className="space-y-4">
              {[
                {
                  school: "NCC Education",
                  program: "Level 4 Diploma in Computing",
                  tag: "Computing",
                  year: "2022 — 2023",
                },
                {
                  school: "NCC Education",
                  program: "Level 5 Diploma in Computing",
                  tag: "Computing",
                  year: "2023 — 2024",
                },
                // {
                //   school: "Fairway Technology",
                //   program: "RockStar Web Developer Course",
                //   tag: "Web Dev",
                //   year: "2025",
                // },
                // {
                //   school: "Turing Programming Training Center",
                //   program: "Advanced Software Engineering & Design Concepts",
                //   tag: "Software",
                //   year: "2025",
                // },
              ].map((item, index) => (
                <motion.div
                  key={item.school}
                  initial={{ opacity: 0, x: -15 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.08 }}
                  className="relative sm:pl-14"
                >
                  <div className="absolute left-3 top-6 hidden h-4 w-4 items-center justify-center sm:flex">
                    <div className="h-3 w-3 rounded-full border-2 border-[#E8794F]/30 bg-white">
                      <div className="m-0.5 h-1.5 w-1.5 rounded-full bg-[#E8794F]" />
                    </div>
                  </div>

                  <div className="border border-[#D8D4CA] bg-white/40 p-5 transition-colors duration-300 hover:border-[#E8794F]/20">
                    <div className="flex flex-col gap-3 sm:flex-row sm:items-start sm:justify-between">
                      <div>
                        <h3 className="text-base font-medium text-[#20201E]">
                          {item.school}
                        </h3>
                        <p className="mt-1 text-sm text-neutral-500">
                          {item.program}
                        </p>
                      </div>
                      <span className="w-fit bg-[#E8794F]/10 px-2.5 py-1 text-[9px] font-medium uppercase tracking-[0.1em] text-[#E8794F]">
                        {item.tag}
                      </span>
                    </div>

                    <div className="mt-4 flex flex-wrap gap-3 border-t border-[#D8D4CA] pt-3 font-mono text-[9px] uppercase tracking-[0.12em] text-neutral-400">
                      <span>{item.year}</span>
                      <span className="hidden h-3 w-px bg-[#D8D4CA] sm:block" />
                      <span>Yangon, Myanmar</span>
                    </div>
                  </div>
                </motion.div>
              ))}

              <motion.div
                initial={{ opacity: 0, x: -15 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.24 }}
                className="relative sm:pl-14"
              >
                <div className="absolute left-3 top-6 hidden h-4 w-4 items-center justify-center sm:flex">
                  <div className="h-3 w-3 rounded-full border-2 border-dashed border-neutral-300 bg-white" />
                </div>

                <div className="border border-dashed border-[#D8D4CA] bg-neutral-50/30 p-5 opacity-60">
                  <div className="flex items-center justify-between">
                    <div>
                      <h3 className="text-sm font-medium text-neutral-400">
                        Continuing Journey
                      </h3>
                      <p className="mt-1 text-xs text-neutral-400">
                        More to come...
                      </p>
                    </div>
                    <ChevronRight
                      size={15}
                      strokeWidth={1.5}
                      className="text-neutral-300"
                    />
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
