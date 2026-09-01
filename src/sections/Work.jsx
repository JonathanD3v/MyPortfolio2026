import { motion } from "framer-motion";
import { ArrowUpRight } from "lucide-react";

const projects = [
  {
    number: "01",
    title: "Santisukha",
    type: "Web Page",
    description: "A sample landing page design.",
    stack: ["React", "Node.js", "MongoDB"],
    stackPrimary: ["React"],
    year: "2026",
    accent: "bg-[#E8794F]",
    gradient: "from-[#E8794F]/10 via-[#E8794F]/5 to-transparent",
    link: "https://santisukha-web.vercel.app/",
    color: "#E8794F",
  },
  {
    number: "02",
    title: "Management System",
    type: "Business Application",
    description:
      "A full-stack management system designed to simplify everyday business operations and workflows.",
    stack: ["React", "NodeJs", "MongoDB", "Express"],
    stackPrimary: ["React", "NodeJs", "MongoDB", "Express"],
    year: "2026",
    accent: "bg-[#A8B5A2]",
    gradient: "from-[#A8B5A2]/10 via-[#A8B5A2]/5 to-transparent",
    link: "https://github.com/JonathanD3v/FixHub-ServiceManagementSystem",
    color: "#A8B5A2",
  },
  {
    number: "03",
    title: "Live Chatting Testing",
    type: "Testing State",
    description: "A first step of a real time live chatting platform.",
    stack: ["NodeJs", "MongoDB", "Express"],
    stackPrimary: ["NodeJs", "MongoDB", "Express"],
    year: "2025",
    accent: "bg-[#C5B8D9]",
    gradient: "from-[#C5B8D9]/10 via-[#C5B8D9]/5 to-transparent",
    link: "https://github.com/JonathanD3v/LiveChat",
    color: "#C5B8D9",
  },
];

const Work = () => {
  return (
    <section
      id="work"
      className="relative overflow-hidden bg-[#F4F1EA] px-5 py-28 sm:px-8 md:px-12 md:py-36"
    >
      <div className="mx-auto max-w-7xl">
        <div className="mb-20 flex flex-col gap-6 sm:flex-row sm:items-end sm:justify-between">
          <div>
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="mb-6 flex items-center gap-3"
            >
              <span className="h-px w-8 bg-[#E8794F]" />
              <span className="text-[10px] font-medium uppercase tracking-[0.3em] text-[#E8794F]">
                02 — Work
              </span>
            </motion.div>

            <motion.h2
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7 }}
              className="max-w-3xl text-4xl font-medium leading-[1.05] tracking-tight text-[#20201E] sm:text-5xl md:text-6xl lg:text-7xl"
            >
              Projects I've
              <br />
              <span className="text-neutral-400">built and shipped.</span>
            </motion.h2>
          </div>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, delay: 0.1 }}
            className="max-w-xs text-sm leading-6 text-neutral-500"
          >
            A selection of things I've built, explored and learned from along
            the way.
          </motion.p>
        </div>

        <div className="border-t border-[#D8D4CA]">
          {projects.map((project, index) => (
            <motion.article
              key={project.number}
              initial={{ opacity: 0, y: 35 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{
                duration: 0.7,
                delay: index * 0.08,
              }}
              className="group relative border-b border-[#D8D4CA] transition-all duration-500 hover:pl-4 hover:pr-4"
            >
              <div
                className={`absolute inset-0 bg-gradient-to-r ${project.gradient} opacity-0 transition-opacity duration-500 group-hover:opacity-100`}
              />

              <div className="relative grid gap-4 py-8 sm:py-10 md:grid-cols-[60px_1fr_1fr_80px] md:py-12">
                {/* Number */}
                <span className="font-mono text-xs text-neutral-400 md:mt-1">
                  {project.number}
                </span>

                <div>
                  <div className="mb-2 flex flex-wrap items-center gap-3">
                    <span className="text-[10px] uppercase tracking-[0.2em] text-neutral-400">
                      {project.type}
                    </span>

                    <span
                      className={`h-1.5 w-1.5 rounded-full ${project.accent}`}
                    />

                    <span className="font-mono text-[10px] text-neutral-400">
                      {project.year}
                    </span>
                  </div>

                  <h3 className="text-3xl font-medium tracking-[-0.03em] text-[#20201E] transition-all duration-500 group-hover:translate-x-2 sm:text-4xl md:text-5xl lg:text-6xl">
                    {project.title}
                  </h3>
                </div>

                <div>
                  <p className="text-sm leading-7 text-neutral-500 transition-colors duration-300 group-hover:text-neutral-600">
                    {project.description}
                  </p>

                  <div className="mt-4 flex flex-wrap gap-2">
                    {project.stack.map((item) => {
                      const isPrimary = project.stackPrimary.includes(item);
                      return (
                        <span
                          key={item}
                          className={`rounded-full px-3 py-1 text-[10px] uppercase tracking-wide transition-all duration-300 ${
                            isPrimary
                              ? "bg-neutral-100 font-medium text-neutral-700"
                              : "border border-[#D8D4CA] text-neutral-400"
                          }`}
                        >
                          {item}
                        </span>
                      );
                    })}
                  </div>
                </div>

                <div className="flex items-center justify-between md:flex-col md:items-end md:justify-start md:gap-8">
                  <a
                    href={project.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex h-10 w-10 items-center justify-center rounded-full border border-[#D8D4CA] text-neutral-500 transition-all duration-300 hover:border-[#20201E] hover:text-[#20201E]"
                    aria-label={`View ${project.title} project`}
                  >
                    <motion.div
                      whileHover={{ rotate: 45 }}
                      transition={{ duration: 0.25 }}
                    >
                      <ArrowUpRight size={17} strokeWidth={1.5} />
                    </motion.div>
                  </a>

                  <span className="hidden text-[9px] uppercase tracking-[0.2em] text-neutral-400 opacity-0 transition-all duration-300 group-hover:opacity-100 md:block">
                    View Project
                  </span>
                </div>
              </div>

              <div
                className="absolute bottom-[-1px] left-0 h-[2px] w-0 transition-all duration-500 group-hover:w-full"
                style={{ backgroundColor: project.color }}
              />
            </motion.article>
          ))}
        </div>

        <div className="mt-8 flex items-center justify-between border-t border-[#D8D4CA] pt-6">
          <span className="text-[10px] uppercase tracking-[0.25em] text-neutral-400">
            {projects.length} Projects
          </span>

          <div className="flex items-center gap-4">
            <span className="text-[10px] uppercase tracking-[0.25em] text-neutral-400">
              2025 — 2026
            </span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Work;
