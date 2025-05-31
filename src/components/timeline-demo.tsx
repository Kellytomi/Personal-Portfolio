import React from "react";
import { Timeline } from "@/components/ui/timeline";

export function WorkTimeline() {
  const workData = [
    {
      title: "2022 - Present",
      content: (
        <div>
          <div className="mb-4">
            <h4 className="text-lg font-bold text-gray-900 mb-1">Founder & Digital Solutions Expert</h4>
            <p className="text-primary font-medium mb-3">Fxsion</p>
          </div>
          <p className="mb-4 text-sm text-gray-600 leading-relaxed">
            Founded Fxsion to provide comprehensive digital solutions for businesses, specializing in workflow automation, document solutions, and custom digital development.
          </p>
          <div className="space-y-2 mb-6">
            <h5 className="text-sm font-semibold text-gray-700 mb-2">Key Achievements:</h5>
            {[
              'Built and deployed over 100 custom automation workflows',
              'Reduced operational costs by 40% for enterprise clients',
              'Developed innovative document automation solutions'
            ].map((achievement, i) => (
              <div key={i} className="flex items-start gap-2">
                <span className="text-primary text-xs mt-1.5">•</span>
                <span className="text-sm text-gray-600">{achievement}</span>
              </div>
            ))}
          </div>
        </div>
      ),
    },
    {
      title: "2020 - 2022",
      content: (
        <div>
          <div className="mb-4">
            <h4 className="text-lg font-bold text-gray-900 mb-1">Digital Transformation Consultant</h4>
            <p className="text-primary font-medium mb-3">Deloitte Digital</p>
          </div>
          <p className="mb-4 text-sm text-gray-600 leading-relaxed">
            Led digital transformation initiatives for enterprise clients, focusing on process automation and systems integration.
          </p>
          <div className="space-y-2">
            <h5 className="text-sm font-semibold text-gray-700 mb-2">Key Achievements:</h5>
            {[
              'Managed major automation projects for Fortune 500 clients',
              'Designed and implemented CRM integration solutions',
              'Led cross-functional teams on complex implementations'
            ].map((achievement, i) => (
              <div key={i} className="flex items-start gap-2">
                <span className="text-primary text-xs mt-1.5">•</span>
                <span className="text-sm text-gray-600">{achievement}</span>
              </div>
            ))}
          </div>
        </div>
      ),
    },
    {
      title: "2019 - 2020",
      content: (
        <div>
          <div className="mb-4">
            <h4 className="text-lg font-bold text-gray-900 mb-1">Solutions Developer</h4>
            <p className="text-primary font-medium mb-3">TechSolutions Inc.</p>
          </div>
          <p className="mb-4 text-sm text-gray-600 leading-relaxed">
            Developed custom automation solutions and integrations for midsize businesses across industries.
          </p>
          <div className="space-y-2">
            <h5 className="text-sm font-semibold text-gray-700 mb-2">Key Achievements:</h5>
            {[
              'Built custom API integrations for various platforms',
              'Implemented document workflow automation solutions',
              'Contributed to open-source integration tools'
            ].map((achievement, i) => (
              <div key={i} className="flex items-start gap-2">
                <span className="text-primary text-xs mt-1.5">•</span>
                <span className="text-sm text-gray-600">{achievement}</span>
              </div>
            ))}
          </div>
        </div>
      ),
    },
  ];

  return <Timeline data={workData} />;
}

export function EducationTimeline() {
  const educationData = [
    {
      title: "2024 - 2028",
      content: (
        <div>
          <div className="mb-4">
            <h4 className="text-lg font-bold text-gray-900 mb-1">BSc in Software Engineering</h4>
            <p className="text-secondary font-medium mb-3">Lead City University, Ibadan</p>
          </div>
          <p className="text-sm text-gray-600 leading-relaxed">
            Specialized in software engineering with focus on application development and system architecture.
          </p>
        </div>
      ),
    },
    {
      title: "2019 - 2020",
      content: (
        <div>
          <div className="mb-4">
            <h4 className="text-lg font-bold text-gray-900 mb-1">Professional Certification</h4>
            <p className="text-secondary font-medium mb-3">Automation Professional Academy</p>
          </div>
          <p className="text-sm text-gray-600 leading-relaxed">
            Specialized training in enterprise automation, integration platforms, and workflow optimization.
          </p>
        </div>
      ),
    },
  ];

  return <Timeline data={educationData} />;
} 