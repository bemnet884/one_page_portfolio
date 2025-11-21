"use client"
// src/components/sections/Skills.tsx
import { SectionWrapper } from "./common/SectionWrapper";
import { SectionHeading } from "./common/SectionHeading";
import { Container } from "./common/Container";
import { skillCategories, SkillCategory } from "@/data/skills";
import { Card } from "@/components/ui/card";
import { Code2, Database, Rocket, Users } from "lucide-react";

// Configuration for the specific 3x2 bento grid layout using your actual data
const categoryConfig = {
  "Frontend Development": {
    icon: Code2,
    bg: "bg-gradient-to-br from-blue-50 via-sky-50 to-blue-100",
    border: "border-l-4 border-blue-500",
    textColor: "text-blue-900",
    descColor: "text-blue-700",
    span: "md:col-span-1 md:row-span-1", // Position (1,1) - top left
    layout: "centered",
  },
  "Backend & Database": {
    icon: Database,
    bg: "bg-gradient-to-br from-purple-50 via-violet-50 to-purple-100",
    border: "border-l-4 border-purple-500",
    textColor: "text-purple-900",
    descColor: "text-purple-700",
    span: "md:col-span-2 md:row-span-1", // Position (2,1) to (3,1) - spans top right
    layout: "wide-horizontal",
  },
  "Tools & Deployment": {
    icon: Rocket,
    bg: "bg-gradient-to-br from-green-50 via-emerald-50 to-green-100",
    border: "border-l-4 border-green-500",
    textColor: "text-green-900",
    descColor: "text-green-700",
    span: "md:col-span-2 md:row-span-1", // Position (1,2) to (2,2) - spans bottom left
    layout: "wide-horizontal",
  },
  "Entrepreneurial & Leadership": {
    icon: Users,
    bg: "bg-gradient-to-br from-amber-50 via-orange-50 to-amber-100",
    border: "border-l-4 border-amber-500",
    textColor: "text-amber-900",
    descColor: "text-amber-700",
    span: "md:col-span-1 md:row-span-1", // Position (3,2) - bottom right
    layout: "centered",
  },
};

type SkillCardProps = {
  category: SkillCategory;
  config: typeof categoryConfig[keyof typeof categoryConfig];
};

function SkillCard({ category, config }: SkillCardProps) {
  const { icon: IconComponent, bg, border, textColor, descColor, layout } = config;

  const layouts: Record<string, React.ReactNode> = {
    centered: (
      <div className="flex flex-col items-center text-center gap-4 w-full h-full justify-center py-4">
        <div className="flex flex-col items-center gap-3">
          <div className={`p-4 rounded-2xl ${bg} border ${border} shadow-sm`}>
            <IconComponent className={`w-8 h-8 ${textColor}`} />
          </div>
          <div className="space-y-3">
            <h3 className={`text-xl font-bold ${textColor}`}>
              {category.category}
            </h3>
            <div className="flex flex-wrap gap-1.5 justify-center">
              {category.skills.map((skill) => (
                <span
                  key={skill}
                  className={`px-2.5 py-1 text-xs rounded-full bg-white/90 backdrop-blur-sm border ${border} ${descColor} font-medium shadow-sm`}
                >
                  {skill}
                </span>
              ))}
            </div>
          </div>
        </div>
      </div>
    ),
    "wide-horizontal": (
      <div className="flex items-center justify-between gap-6 w-full h-full py-4 px-2">
        <div className="flex items-center gap-4 flex-1">
          <div className={`p-4 rounded-2xl ${bg} border ${border} shadow-sm flex-shrink-0`}>
            <IconComponent className={`w-8 h-8 ${textColor}`} />
          </div>
          <div className="flex-1">
            <h3 className={`text-2xl font-bold ${textColor} mb-3`}>
              {category.category}
            </h3>
            <div className="flex flex-wrap gap-2">
              {category.skills.map((skill) => (
                <span
                  key={skill}
                  className={`px-3 py-1.5 text-sm rounded-full bg-white/90 backdrop-blur-sm border ${border} ${descColor} font-medium shadow-sm`}
                >
                  {skill}
                </span>
              ))}
            </div>
          </div>
        </div>

      </div>
    ),
  };

  return (
    <Card
      className={`${config.span} ${bg} ${border} rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 p-4 flex items-center justify-center h-full group backdrop-blur-sm min-h-[180px] border-r-2 border-b-2 border-r-white/20 border-b-white/20`}
    >
      {layouts[layout] || layouts.centered}
    </Card>
  );
}

export default function Skills() {
  return (
    <SectionWrapper id="skills">
      <Container>
        <SectionHeading
          title="Skills & Expertise"
          subtitle="Technical, professional, and entrepreneurial skills I bring to the table"
        />

        {/* 3x2 Bento Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mx-auto max-w-6xl">
          {/* Card 1: Frontend Development - Position (1,1) */}
          <SkillCard
            category={skillCategories[0]}
            config={categoryConfig["Frontend Development"]}
          />

          {/* Card 2: Backend & Database - Position (2,1) to (3,1) */}
          <SkillCard
            category={skillCategories[1]}
            config={categoryConfig["Backend & Database"]}
          />

          {/* Card 3: Tools & Deployment - Position (1,2) to (2,2) */}
          <SkillCard
            category={skillCategories[2]}
            config={categoryConfig["Tools & Deployment"]}
          />

          {/* Card 4: Entrepreneurial & Leadership - Position (3,2) */}
          <SkillCard
            category={skillCategories[3]}
            config={categoryConfig["Entrepreneurial & Leadership"]}
          />
        </div>
      </Container>
    </SectionWrapper>
  );
}