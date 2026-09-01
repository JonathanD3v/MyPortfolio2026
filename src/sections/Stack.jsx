import { motion } from "framer-motion";
import {
  Code2,
  Server,
  Database,
  Wrench,
  Sparkles,
  ArrowUpRight,
} from "lucide-react";

const stack = [
  {
    category: "Frontend",
    icon: Code2,
    items: [
      { name: "React", level: "expert" },
      { name: "JavaScript", level: "expert" },
      { name: "TypeScript", level: "advanced" },
      { name: "Tailwind CSS", level: "advanced" },
      { name: "Framer Motion", level: "intermediate" },
    ],
  },
  {
    category: "Backend",
    icon: Server,
    items: [
      { name: "Node.js", level: "advanced" },
      { name: "Express", level: "advanced" },
      { name: "AdonisJS", level: "intermediate" },
      { name: "REST API", level: "expert" },
    ],
  },
  {
    category: "Database",
    icon: Database,
    items: [
      { name: "MongoDB", level: "advanced" },
      { name: "MySQL", level: "intermediate" },
      { name: "Redis", level: "intermediate" },
    ],
  },
  {
    category: "Tools",
    icon: Wrench,
    items: [
      { name: "Git", level: "expert" },
      { name: "GitHub", level: "expert" },
      { name: "Docker", level: "intermediate" },
      { name: "Nginx", level: "intermediate" },
      { name: "PM2", level: "intermediate" },
    ],
  },
];

const learning = ["Next.js", "GraphQL", "AWS", "WebSockets"];

export default function Stack() {
  return (
    <section
      id="stack"
      className="relative overflow-hidden bg-[#F4F1EA] px-6 py-32 md:px-12 md:py-40"
    >
      <div className="absolute inset-0 opacity-30">
        <div className="absolute -right-32 -top-32 h-[500px] w-[500px] rounded-full bg-[#E8794F]/5 blur-3xl" />
        <div className="absolute -bottom-48 -left-48 h-[400px] w-[400px] rounded-full bg-neutral-400/5 blur-3xl" />
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
            03 — Stack
          </span>
        </motion.div>

        <div className="grid gap-16 lg:grid-cols-[0.8fr_1.2fr]">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
          >
            <h2 className="text-4xl font-medium tracking-tight text-[#20201E] md:text-6xl">
              Tools I use
              <br />
              <span className="relative inline-block text-[#E8794F]">
                to build things.
                <span className="absolute -bottom-2 left-0 h-0.5 w-3/4 bg-[#E8794F]/30" />
              </span>
            </h2>

            <p className="mt-8 max-w-sm text-sm leading-7 text-neutral-500 md:text-base">
              A constantly evolving collection of technologies, frameworks and
              tools I use to turn ideas into working products.
            </p>

            <div className="mt-12 border-t border-[#D8D4CA] pt-6">
              <div className="flex items-center gap-2">
                <Sparkles size={14} className="text-[#E8794F]" />
                <span className="text-[10px] uppercase tracking-[0.2em] text-[#E8794F]">
                  Currently Learning
                </span>
              </div>

              <div className="mt-3 flex flex-wrap gap-2">
                {learning.map((item) => (
                  <span
                    key={item}
                    className="animate-pulse rounded-full border border-dashed border-[#E8794F]/30 px-3 py-1 text-xs font-medium text-[#E8794F]/70"
                  >
                    {item}
                  </span>
                ))}
              </div>
            </div>
          </motion.div>

          <div className="border-t border-[#D8D4CA]">
            {stack.map((group, index) => {
              const Icon = group.icon;

              return (
                <motion.div
                  key={group.category}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{
                    duration: 0.6,
                    delay: index * 0.08,
                  }}
                  className="group relative border-b border-[#D8D4CA] py-8 transition-all duration-300 hover:pl-4"
                >
                  <div className="grid gap-4 md:grid-cols-[160px_1fr]">
                    <div className="flex items-center gap-3">
                      <div className="rounded-lg bg-[#E8794F]/10 p-2 text-[#E8794F] transition-colors group-hover:bg-[#E8794F]/20">
                        <Icon size={16} />
                      </div>
                      <span className="text-[10px] font-medium uppercase tracking-[0.2em] text-neutral-400">
                        {group.category}
                      </span>
                    </div>

                    <div className="flex flex-wrap gap-x-6 gap-y-3">
                      {group.items.map((item) => {
                        const sizes = {
                          expert: "text-base font-medium",
                          advanced: "text-sm font-medium",
                          intermediate: "text-sm",
                        };

                        const colors = {
                          expert: "text-[#20201E] hover:text-[#E8794F]",
                          advanced: "text-neutral-600 hover:text-[#E8794F]",
                          intermediate: "text-neutral-400 hover:text-[#E8794F]",
                        };

                        return (
                          <motion.span
                            key={item.name}
                            whileHover={{
                              y: -2,
                              transition: { type: "spring", stiffness: 300 },
                            }}
                            className={`${sizes[item.level]} ${colors[item.level]} relative cursor-default transition-all duration-300`}
                          >
                            {item.name}

                            <span className="absolute -top-1 -right-3 h-1 w-1 rounded-full bg-[#E8794F]/30" />
                          </motion.span>
                        );
                      })}
                    </div>
                  </div>

                  <div className="absolute bottom-[-1px] left-0 h-[2px] w-0 bg-[#E8794F] transition-all duration-500 group-hover:w-full" />
                </motion.div>
              );
            })}
          </div>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="mt-12 flex items-center justify-between border-t border-[#D8D4CA] pt-6"
        >
          <span className="text-[10px] uppercase tracking-[0.25em] text-neutral-400">
            {stack.reduce((acc, group) => acc + group.items.length, 0)}{" "}
            Technologies
          </span>

          <div className="flex items-center gap-4">
            <div className="flex items-center gap-2">
              <span className="h-2 w-2 rounded-full bg-[#E8794F]" />
              <span className="text-[9px] uppercase tracking-[0.15em] text-neutral-400">
                Expert
              </span>
            </div>
            <div className="flex items-center gap-2">
              <span className="h-2 w-2 rounded-full bg-[#E8794F]/60" />
              <span className="text-[9px] uppercase tracking-[0.15em] text-neutral-400">
                Advanced
              </span>
            </div>
            <div className="flex items-center gap-2">
              <span className="h-2 w-2 rounded-full bg-[#E8794F]/30" />
              <span className="text-[9px] uppercase tracking-[0.15em] text-neutral-400">
                Intermediate
              </span>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
