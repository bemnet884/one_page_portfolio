// src/components/cards/VentureCard.tsx
import { Venture } from "@/data/ventures";
import { Badge } from "../common/Badge";
import { ExternalLink, ArrowUpRight, User, BarChart3, Rocket, Lightbulb, Eye } from "lucide-react";
import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";

type VentureCardProps = {
  venture: Venture;
};

export default function VentureCard({ venture }: VentureCardProps) {
  const { title, stage, description, role, ask, tags, metrics, website } = venture;

  const ventureConfig = {
    "yegnafuture": {
      icon: Rocket,
      bg: "bg-gradient-to-br from-blue-50 via-sky-50 to-blue-100 dark:from-blue-950 dark:via-sky-950 dark:to-blue-900",
      border: "border-l-4 border-blue-500",
      textColor: "text-blue-900 dark:text-blue-100",
      descColor: "text-blue-700 dark:text-blue-300",
    },
    "hannas_solutions": {
      icon: Lightbulb,
      bg: "bg-gradient-to-br from-purple-50 via-violet-50 to-purple-100 dark:from-purple-950 dark:via-violet-950 dark:to-purple-900",
      border: "border-l-4 border-purple-500",
      textColor: "text-purple-900 dark:text-purple-100",
      descColor: "text-purple-700 dark:text-purple-300",
    }
  };

  const config = ventureConfig[venture.id as keyof typeof ventureConfig] || ventureConfig.yegnafuture;
  const IconComponent = config.icon;

  return (
    <Dialog>
      <div className={`group relative ${config.bg} ${config.border} rounded-2xl p-6 shadow-lg hover:shadow-xl transition-all duration-300 h-full flex flex-col backdrop-blur-sm min-h-[320px]`}>
        {/* Header */}
        <div className="space-y-4 flex-1">
          <div className="flex items-start justify-between">
            <div className="flex items-center gap-3">
              <div className={`p-2 rounded-xl ${config.bg} border ${config.border}`}>
                <IconComponent className={`w-5 h-5 ${config.textColor}`} />
              </div>
              <div>
                <h3 className={`text-lg font-bold ${config.textColor}`}>
                  {title}
                </h3>
                <Badge variant="outline" className="mt-1 flex p-5 items-center gap-1 w-fit">
                  {stage}
                </Badge>
              </div>
            </div>
          </div>

          {/* Short Description (Truncated) */}
          <p className={`text-sm leading-relaxed ${config.descColor} line-clamp-3`}>
            {description.split('.').slice(0, 2).join('.')}...
          </p>

          {/* Key Info */}
          <div className="space-y-2">
            <div className="flex items-center gap-2">
              <User className={`w-4 h-4 ${config.descColor}`} />
              <span className={`text-xs ${config.descColor} line-clamp-1`}>{role}</span>
            </div>
            <div className="flex items-center gap-2">
              <ArrowUpRight className={`w-4 h-4 ${config.descColor}`} />
              <span className={`text-xs ${config.descColor} line-clamp-1`}>{ask}</span>
            </div>
          </div>

          {/* Tags (Limited) */}
          <div className="flex flex-wrap gap-1">
            {tags.slice(0, 3).map((tag) => (
              <Badge
                key={tag}
                variant="outline"
                className={`text-xs px-2 py-0.5 border ${config.border} ${config.descColor} bg-white/50 dark:bg-black/20 backdrop-blur-sm`}
              >
                {tag}
              </Badge>
            ))}
            {tags.length > 3 && (
              <Badge
                variant="outline"
                className={`text-xs px-2 py-0.5 border ${config.border} ${config.descColor} bg-white/50 dark:bg-black/20 backdrop-blur-sm`}
              >
                +{tags.length - 3}
              </Badge>
            )}
          </div>
        </div>

        {/* Action Buttons */}
        <div className="pt-4 mt-4 border-t border-white/20 dark:border-black/20 space-y-3">
          <DialogTrigger asChild>
            <Button
              variant="outline"
              className={`w-full flex items-center justify-center gap-2 ${config.textColor} border ${config.border} bg-white/50 dark:bg-black/20 hover:bg-white/70 dark:hover:bg-black/30`}
            >
              <Eye className="w-4 h-4" />
              View Details
            </Button>
          </DialogTrigger>

          <div className="grid grid-cols-2 gap-2">
            <a
              href="mailto:bemnet537@gmail.com?subject=Partnership%20Interest%20in%20Your%20Venture"
              className={`text-center px-3 py-2 rounded-lg ${config.bg} border ${config.border} ${config.textColor} font-medium text-xs hover:shadow-md transition-all`}
            >
              Partner
            </a>
            {website && (
              <a
                href={website}
                target="_blank"
                rel="noopener noreferrer"
                className={`flex items-center justify-center gap-1 px-3 py-2 rounded-lg border ${config.border} ${config.textColor} text-xs hover:shadow-md transition-all bg-white/50 dark:bg-black/20`}
              >
                Website
                <ExternalLink className="w-3 h-3" />
              </a>
            )}
          </div>
        </div>
      </div>

      {/* Modal for Detailed View */}
      <DialogContent className="max-w-4xl max-h-[85vh] overflow-y-auto">
        <DialogHeader>
          <DialogTitle className="flex items-center gap-3">
            <div className={`p-2 rounded-xl ${config.bg} border ${config.border}`}>
              <IconComponent className={`w-6 h-6 ${config.textColor}`} />
            </div>
            <div>
              <div className="text-2xl">{title}</div>
              <Badge variant="outline" className="mt-1 flex items-center gap-2">
                {stage}
              </Badge>
            </div>
          </DialogTitle>
          <DialogDescription className="sr-only">
            Detailed information about {title}
          </DialogDescription>
        </DialogHeader>

        <div className="space-y-6">
          {/* Full Description */}
          <div>
            <h4 className={`font-semibold ${config.textColor} mb-3`}>About</h4>
            <p className="text-neutral-700 dark:text-neutral-300 leading-relaxed">
              {description}
            </p>
          </div>

          {/* Role & Ask */}
          <div className="grid md:grid-cols-2 gap-6">
            <div>
              <h4 className={`font-semibold ${config.textColor} mb-2`}>My Role</h4>
              <p className="text-neutral-600 dark:text-neutral-400">{role}</p>
            </div>
            <div>
              <h4 className={`font-semibold ${config.textColor} mb-2`}>Looking For</h4>
              <p className="text-neutral-600 dark:text-neutral-400">{ask}</p>
            </div>
          </div>

          {/* All Tags */}
          <div>
            <h4 className={`font-semibold ${config.textColor} mb-3`}>Tags & Focus Areas</h4>
            <div className="flex flex-wrap gap-2">
              {tags.map((tag) => (
                <Badge
                  key={tag}
                  variant="outline"
                  className={`border ${config.border} ${config.descColor}`}
                >
                  {tag}
                </Badge>
              ))}
            </div>
          </div>

          {/* Metrics */}
          {metrics && (
            <div>
              <h4 className={`font-semibold ${config.textColor} mb-3`}>Progress & Metrics</h4>
              <ul className="space-y-2">
                {metrics.map((metric, index) => (
                  <li key={index} className="flex items-start gap-3">
                    <div className={`w-2 h-2 rounded-full ${config.descColor} mt-2 flex-shrink-0`}></div>
                    <span className="text-neutral-600 dark:text-neutral-400">{metric}</span>
                  </li>
                ))}
              </ul>
            </div>
          )}

          {/* Action Buttons */}
          <div className="pt-6 border-t border-neutral-200 dark:border-neutral-800 space-y-4">
            <div className="grid md:grid-cols-2 gap-4">
              <a
                href="mailto:bemnet537@gmail.com?subject=Partnership%20Interest%20in%20Your%20Venture"
                className={`text-center px-6 py-3 rounded-xl ${config.bg} border ${config.border} ${config.textColor} font-medium hover:shadow-md transition-all`}
              >
                Partner With Me
              </a>
              {website && (
                <a
                  href={website}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={`flex items-center justify-center gap-2 px-6 py-3 rounded-xl border ${config.border} ${config.textColor} hover:shadow-md transition-all bg-white/50 dark:bg-black/20`}
                >
                  Visit Website
                  <ExternalLink className="w-4 h-4" />
                </a>
              )}
            </div>

            <p className="text-xs text-center text-neutral-500 dark:text-neutral-400 italic">
              Great ventures move fast. The best collaborators join early.
            </p>
          </div>
        </div>
      </DialogContent>
    </Dialog>
  );
}