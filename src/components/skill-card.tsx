import { LucideIcon } from "lucide-react";

interface SkillCardProps {
  icon: LucideIcon;
  title: string;
  description: string;
  delay: number;
}

const SkillCard = ({
  icon: Icon,
  title,
  description,
  delay,
}: SkillCardProps) => {
  return (
    <div
      className="group relative bg-slate-800/50 backdrop-blur-sm border border-slate-700/50 rounded-xl p-6 hover:border-cyan-400/50 transition-all duration-300 hover:shadow-lg hover:shadow-cyan-400/20 cursor-pointer"
      style={{ animationDelay: `${delay}s` }}
    >
      <div className="flex items-start space-x-4">
        <div className="p-3 rounded-lg bg-gradient-to-br from-cyan-500/20 to-blue-500/20 border border-cyan-400/30 transform transition-transform duration-300 group-hover:scale-110 group-hover:rotate-6">
          <Icon className="w-6 h-6 text-cyan-400" />
        </div>

        <div className="flex-1">
          <h3 className="font-semibold text-white mb-2 group-hover:text-cyan-400 transition-colors duration-300">
            {title}
          </h3>
          <p className="text-sm text-gray-400 group-hover:text-gray-300 transition-colors duration-300">
            {description}
          </p>
        </div>
      </div>

      {/* Hover glow effect */}
      <div className="absolute inset-0 rounded-xl bg-gradient-to-r from-cyan-400/10 to-blue-400/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none" />
    </div>
  );
};

export default SkillCard;
