import React from 'react'
import { FaHtml5, FaCss3, FaReact, FaGithub } from "react-icons/fa";
import { SiJavascript, SiTailwindcss, SiFigma } from "react-icons/si";
import { VscVscode } from "react-icons/vsc";

const skills = [
  { name: "HTML", icon: FaHtml5, color: "#E34F26" },
  { name: "CSS", icon: FaCss3, color: "#1572B6" },
  { name: "JavaScript", icon: SiJavascript, color: "#F7DF1E" },
  { name: "React", icon: FaReact, color: "#61DAFB" },
  { name: "Tailwind CSS", icon: SiTailwindcss, color: "#38BDF8" },
  { name: "Git & GitHub", icon: FaGithub, color: "#FFFFFF" },
  { name: "VS Code", icon: VscVscode, color: "#007ACC" },
  { name: "Figma", icon: SiFigma, color: "#F24E1E" },
];
const Service = () => {
  return (
    <section id="skills" className="scroll-mt-20 border-b border-slate-800">
      <div className="mx-auto grid max-w-330 items-center gap-10 px-5 py-16 md:grid-cols-[0.8fr_1.2fr] md:px-10">
        <div>
          <div className="mb-3 flex items-center gap-3">
            <span className="h-0.5 w-10 bg-blue-500" />
            <p className="text-sm font-semibold text-blue-400">My Skills</p>
          </div>

          <h2 className="text-3xl font-bold text-white">
            Technologies I Work With
          </h2>

          <p className="mt-4 max-w-sm text-sm leading-7 text-slate-300">
            These are the technologies and tools I use to build modern web
            applications.
          </p>
        </div>

        <div className="grid grid-cols-2 gap-4 sm:grid-cols-4">
          {skills.map((skill) => {
            const Icon = skill.icon;
            return (
              <div
                key={skill.name}
                className="flex h-28 flex-col items-center justify-center gap-3 rounded-xl border border-slate-800 bg-[#0d1929] transition hover:-translate-y-1 hover:border-blue-500"
              >
                <Icon size={38} color={skill.color} />
                <h3 className="text-xs font-medium text-white">{skill.name}</h3>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  )
}

export default Service