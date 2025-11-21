"use client"
// src/components/Process.tsx
import React, { useState } from "react";
import { processSteps } from "../data/process";
import { SectionHeading } from "./common/SectionHeading";
import { SectionWrapper } from "./common/SectionWrapper";
import { Card } from "./ui/card";

const Process: React.FC = () => {
  const [flippedCard, setFlippedCard] = useState<string | null>(null);
  const [isAnimating, setIsAnimating] = useState(false);

  const handleCardClick = (id: string) => {
    if (isAnimating) return;

    setIsAnimating(true);
    setFlippedCard(flippedCard === id ? null : id);

    // Reset animation lock after flip completes
    setTimeout(() => setIsAnimating(false), 600);
  };

  return (
    <SectionWrapper id="process" className="py-16 pb-0 bg-linear-to-br from-blue-100 to-blue-50/30">
      <div className="max-w-7xl mx-auto px-4">
        <SectionHeading
          title="My Process"
          subtitle="A structured approach to delivering exceptional results"
        />

        <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-8">
          {processSteps.map((step, index) => (
            <div
              key={step.id}
              className="group"
            >
              {/* Step Number Indicator with Title */}


              {/* Card Container */}
              <div
                className={`h-96 cursor-pointer transform transition-all duration-300 hover:scale-105 ${flippedCard === step.id ? 'z-10' : ''
                  }`}
                onClick={() => handleCardClick(step.id)}
              >
                <div className="relative w-full h-full perspective-1000">
                  {/* Rotating Inner Container */}
                  <div
                    className={`w-full h-full transition-transform duration-600 transform-style-preserve-3d ${flippedCard === step.id ? "rotate-y-180" : ""
                      }`}
                  >
                    {/* FRONT SIDE - Overview */}
                    <Card className="py-0 rounded-2xl shadow-lg overflow-hidden border border-l-4 border-blue-500 hover:shadow-xl transition-all duration-300" >

                      {/* Full-width Image Container */}
                      <div className="w-full h-full relative overflow-hidden">
                        <img
                          src={step.image}
                          alt={step.title}
                          className="w-full   object-cover transform group-hover:scale-105 transition-transform duration-500"
                        />

                        {/* Dark Overlay for better text readability */}
                        <div className="absolute inset-0 bg-black/15"></div>
                        <div className="absolute bottom-3 left-0 right-0 text-center px-4">
                          <div className="text-blue-500/90 font-semibold text-sm flex items-center justify-center backdrop-blur-sm bg-white/50 py-2 px-4 rounded-full border border-white/20">
                            {step.title}
                          </div>
                        </div>


                        {/* Footer Text Overlay */}
                        <div className="absolute bottom-44 left-0 right-0 text-center">
                          <div className="text-white/90 text-sm flex items-center justify-center">
                            <svg className="w-4 h-4 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                            </svg>
                            Click for details
                          </div>
                        </div>

                      </div>
                    </Card>

                    {/* BACK SIDE - Detailed View */}
                    <div className="absolute inset-0 backface-hidden rotate-y-180 bg-white rounded-2xl shadow-2xl overflow-hidden flex flex-col border border-gray-200">
                      {/* Full-width Image */}

                      {/* Scrollable Content */}
                      <div className="flex-1 overflow-y-auto custom-scrollbar p-6 space-y-6 -mt-4 relative z-10">
                        {/* Header on back side */}
                        <div className="text-center mb-2">
                          <div className="inline-flex items-center justify-center w-12 h-12 bg-blue-600 text-white rounded-full font-bold text-lg shadow-lg mb-3">
                            {index + 1}
                          </div>
                          <h3 className="text-xl font-bold text-gray-900">
                            {step.title}
                          </h3>
                        </div>

                        {/* Overview Card */}
                        <div className="bg-blue-50 border border-blue-100 rounded-xl p-4">
                          <h4 className="font-semibold text-blue-900 mb-3 flex items-center">
                            <svg className="w-4 h-4 mr-2" fill="currentColor" viewBox="0 0 20 20">
                              <path fillRule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7-4a1 1 0 11-2 0 1 1 0 012 0zM9 9a1 1 0 000 2v3a1 1 0 001 1h1a1 1 0 100-2v-3a1 1 0 00-1-1H9z" clipRule="evenodd" />
                            </svg>
                            Overview
                          </h4>
                          <p className="text-sm text-blue-800 leading-relaxed">{step.description}</p>
                        </div>

                        {/* Key Activities */}
                        <div>
                          <h4 className="font-semibold text-gray-900 mb-3 flex items-center">
                            <svg className="w-4 h-4 mr-2 text-green-500" fill="currentColor" viewBox="0 0 20 20">
                              <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                            </svg>
                            Key Activities
                          </h4>
                          <ul className="space-y-3">
                            {getKeyActivities(step.id).map((activity, index) => (
                              <li key={index} className="flex items-start group/item">
                                <span className="w-2 h-2 bg-green-400 rounded-full mt-2 mr-3 flex-shrink-0"></span>
                                <span className="text-sm text-gray-700 leading-relaxed group-hover/item:text-gray-900 transition-colors">
                                  {activity}
                                </span>
                              </li>
                            ))}
                          </ul>
                        </div>

                        {/* Tools & Methods */}
                        <div>
                          <h4 className="font-semibold text-gray-900 mb-3 flex items-center">
                            <svg className="w-4 h-4 mr-2 text-orange-500" fill="currentColor" viewBox="0 0 20 20">
                              <path fillRule="evenodd" d="M12.316 3.051a1 1 0 01.633 1.265l-4 12a1 1 0 11-1.898-.632l4-12a1 1 0 011.265-.633zM5.707 6.293a1 1 0 010 1.414L3.414 10l2.293 2.293a1 1 0 11-1.414 1.414l-3-3a1 1 0 010-1.414l3-3a1 1 0 011.414 0zm8.586 0a1 1 0 011.414 0l3 3a1 1 0 010 1.414l-3 3a1 1 0 11-1.414-1.414L16.586 10l-2.293-2.293a1 1 0 010-1.414z" clipRule="evenodd" />
                            </svg>
                            Tools & Methods
                          </h4>
                          <div className="flex flex-wrap gap-2">
                            {getToolsAndMethods(step.id).map((tool, index) => (
                              <span
                                key={index}
                                className="bg-gradient-to-r from-orange-50 to-amber-50 text-orange-700 px-3 py-1.5 rounded-lg text-xs font-medium border border-orange-200 shadow-sm hover:shadow-md transition-shadow"
                              >
                                {tool}
                              </span>
                            ))}
                          </div>
                        </div>

                        {/* Deliverables */}
                        <div>
                          <h4 className="font-semibold text-gray-900 mb-3 flex items-center">
                            <svg className="w-4 h-4 mr-2 text-purple-500" fill="currentColor" viewBox="0 0 20 20">
                              <path fillRule="evenodd" d="M4 4a2 2 0 012-2h4.586A2 2 0 0112 2.586L15.414 6A2 2 0 0116 7.414V16a2 2 0 01-2 2H6a2 2 0 01-2-2V4zm2 6a1 1 0 011-1h6a1 1 0 110 2H7a1 1 0 01-1-1zm1 3a1 1 0 100 2h6a1 1 0 100-2H7z" clipRule="evenodd" />
                            </svg>
                            Key Outputs
                          </h4>
                          <ul className="space-y-3">
                            {getDeliverables(step.id).map((deliverable, index) => (
                              <li key={index} className="flex items-start group/item">
                                <span className="w-2 h-2 bg-purple-400 rounded-full mt-2 mr-3 flex-shrink-0"></span>
                                <span className="text-sm text-gray-700 leading-relaxed group-hover/item:text-gray-900 transition-colors">
                                  {deliverable}
                                </span>
                              </li>
                            ))}
                          </ul>
                        </div>
                      </div>

                      {/* Footer */}
                      <div className="border-t border-gray-200 p-4 bg-gray-50/50 relative z-10">
                        <div className="text-sm text-gray-500 text-center flex items-center justify-center">
                          <svg className="w-4 h-4 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
                          </svg>
                          Click to return
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Custom Styles */}
      <style jsx>{`
        .perspective-1000 {
          perspective: 1000px;
        }
        .transform-style-preserve-3d {
          transform-style: preserve-3d;
        }
        .backface-hidden {
          backface-visibility: hidden;
        }
        .rotate-y-180 {
          transform: rotateY(180deg);
        }
        .custom-scrollbar::-webkit-scrollbar {
          width: 4px;
        }
        .custom-scrollbar::-webkit-scrollbar-track {
          background: #f1f5f9;
        }
        .custom-scrollbar::-webkit-scrollbar-thumb {
          background: #cbd5e1;
          border-radius: 2px;
        }
        .custom-scrollbar::-webkit-scrollbar-thumb:hover {
          background: #94a3b8;
        }
        .line-clamp-3 {
          display: -webkit-box;
          -webkit-line-clamp: 3;
          -webkit-box-orient: vertical;
          overflow: hidden;
        }
      `}</style>
    </SectionWrapper>
  );
};

/* ------------ Helper Functions ------------ */
const getKeyActivities = (stepId: string): string[] => {
  const activities: { [key: string]: string[] } = {
    research: [
      "Conduct stakeholder interviews and user research",
      "Analyze market trends and competitor landscape",
      "Define user personas and journey maps",
      "Gather and prioritize requirements",
      "Create project scope and objectives document"
    ],
    plan: [
      "Break down project into manageable sprints",
      "Create technical architecture diagrams",
      "Define development milestones and timelines",
      "Select appropriate technology stack",
      "Plan resource allocation and risk mitigation"
    ],
    develop: [
      "Implement features using agile methodology",
      "Conduct daily standups and code reviews",
      "Write clean, maintainable code with documentation",
      "Integrate third-party APIs and services",
      "Continuously test and gather user feedback"
    ],
    deliver: [
      "Perform comprehensive testing (unit, integration, UAT)",
      "Optimize performance and security aspects",
      "Create user documentation and training materials",
      "Deploy to production environment",
      "Conduct post-launch monitoring and support"
    ]
  };
  return activities[stepId] || [];
};

const getToolsAndMethods = (stepId: string): string[] => {
  const tools: { [key: string]: string[] } = {
    research: ["Figma", "Miro", "User Interviews", "Surveys", "Analytics", "Hotjar"],
    plan: ["Jira", "Notion", "Figma", "Draw.io", "Git", "Slack"],
    develop: ["React", "TypeScript", "Node.js", "Git", "VS Code", "Jest", "Postman"],
    deliver: ["Jest", "Cypress", "Lighthouse", "Vercel", "AWS", "Documentation"]
  };
  return tools[stepId] || [];
};

const getDeliverables = (stepId: string): string[] => {
  const deliverables: { [key: string]: string[] } = {
    research: [
      "Comprehensive research report",
      "User persona documentation",
      "Competitive analysis findings",
      "Project requirements specification",
      "UX research insights deck"
    ],
    plan: [
      "Project roadmap and timeline",
      "Technical specification document",
      "System architecture diagrams",
      "Resource planning spreadsheet",
      "Risk assessment report"
    ],
    develop: [
      "Production-ready codebase",
      "API documentation",
      "Version control repository",
      "Code review reports",
      "Development progress updates"
    ],
    deliver: [
      "Fully tested application",
      "Deployment documentation",
      "User training materials",
      "Performance optimization report",
      "Project handoff package"
    ]
  };
  return deliverables[stepId] || [];
};

export default Process;