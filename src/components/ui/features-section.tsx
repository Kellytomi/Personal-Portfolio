import React from "react";
import { useId } from "react";

export default function FeaturesSectionDemo() {
  return (
    <div className="py-0">
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
        {grid.map((feature) => (
          <div
            key={feature.title}
            className="relative bg-white p-6 rounded-xl shadow-card overflow-hidden text-center group hover:shadow-lg transition-all duration-300"
          >
            <Grid size={20} />
            <div className="text-4xl mb-4 relative z-20">{feature.icon}</div>
            <h3 className="text-xl font-bold mb-2 text-primary relative z-20">
              {feature.title}
            </h3>
            <p className="text-muted relative z-20">
              {feature.description}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
}

const grid = [
  {
    title: "Frontend Development",
    description: "Creating beautiful, responsive interfaces that people enjoy using",
    icon: "💻"
  },
  {
    title: "Problem Solving", 
    description: "Finding elegant solutions to complex technical challenges",
    icon: "🧩"
  },
  {
    title: "Mobile Apps",
    description: "Building native-feeling experiences for iOS and Android", 
    icon: "📱"
  },
  {
    title: "UI/UX Design",
    description: "Crafting intuitive interfaces with the user in mind",
    icon: "🎨"
  },
  {
    title: "Smart Automation",
    description: "Making computers do the boring stuff so humans don't have to",
    icon: "⚡"
  },
  {
    title: "Learning New Tech",
    description: "Quickly picking up new tools and frameworks",
    icon: "🚀"
  },
];

export const Grid = ({
  pattern,
  size,
}: {
  pattern?: number[][];
  size?: number;
}) => {
  const p = pattern ?? [
    [Math.floor(Math.random() * 4) + 7, Math.floor(Math.random() * 6) + 1],
    [Math.floor(Math.random() * 4) + 7, Math.floor(Math.random() * 6) + 1],
    [Math.floor(Math.random() * 4) + 7, Math.floor(Math.random() * 6) + 1],
    [Math.floor(Math.random() * 4) + 7, Math.floor(Math.random() * 6) + 1],
    [Math.floor(Math.random() * 4) + 7, Math.floor(Math.random() * 6) + 1],
  ];
  return (
    <div className="pointer-events-none absolute left-1/2 top-0 -ml-20 -mt-2 h-full w-full [mask-image:linear-gradient(white,transparent)]">
      <div className="absolute inset-0 bg-gradient-to-r [mask-image:radial-gradient(farthest-side_at_top,white,transparent)] from-primary/5 to-primary/10 opacity-50">
        <GridPattern
          width={size ?? 20}
          height={size ?? 20}
          x="-12"
          y="4"
          squares={p}
          className="absolute inset-0 h-full w-full mix-blend-overlay stroke-primary/20 fill-primary/10"
        />
      </div>
    </div>
  );
};

export function GridPattern({ width, height, x, y, squares, ...props }: any) {
  const patternId = useId();

  return (
    <svg aria-hidden="true" {...props}>
      <defs>
        <pattern
          id={patternId}
          width={width}
          height={height}
          patternUnits="userSpaceOnUse"
          x={x}
          y={y}
        >
          <path d={`M.5 ${height}V.5H${width}`} fill="none" />
        </pattern>
      </defs>
      <rect
        width="100%"
        height="100%"
        strokeWidth={0}
        fill={`url(#${patternId})`}
      />
      {squares && (
        <svg x={x} y={y} className="overflow-visible">
          {squares.map(([x, y]: any) => (
            <rect
              strokeWidth="0"
              key={`${x}-${y}`}
              width={width + 1}
              height={height + 1}
              x={x * width}
              y={y * height}
            />
          ))}
        </svg>
      )}
    </svg>
  );
} 