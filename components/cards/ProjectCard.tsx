"use client"
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/common/Badge";
import { Project, MediaItem } from "@/data/projects";
import { ExternalLink, Github, Users, Eye, Calendar, Clock, Play, Image as ImageIcon, X, ChevronLeft, ChevronRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import Image from "next/image";
import { useState } from "react";

type ProjectCardProps = {
  project: Project;
  layout?: "tall" | "wide-top" | "wide-bottom" | "tall-right";
};

// Color configurations matching the Skills card style
const projectColorConfigs = {
  ims_saas: {
    bg: "bg-gradient-to-br from-blue-50 via-sky-50 to-blue-100 dark:from-blue-950 dark:via-sky-950 dark:to-blue-900",
    border: "border-l-4 border-blue-500",
    textColor: "text-blue-900 dark:text-blue-100",
    descColor: "text-blue-700 dark:text-blue-300",
  },
  duolingo_clone: {
    bg: "bg-gradient-to-br from-green-50 via-emerald-50 to-green-100 dark:from-green-950 dark:via-emerald-950 dark:to-green-900",
    border: "border-l-4 border-green-500",
    textColor: "text-green-900 dark:text-green-100",
    descColor: "text-green-700 dark:text-green-300",
  },
  nehabi_3d_plugin: {
    bg: "bg-gradient-to-br from-purple-50 via-violet-50 to-purple-100 dark:from-purple-950 dark:via-violet-950 dark:to-purple-900",
    border: "border-l-4 border-purple-500",
    textColor: "text-purple-900 dark:text-purple-100",
    descColor: "text-purple-700 dark:text-purple-300",
  },
  startup_copilot: {
    bg: "bg-gradient-to-br from-amber-50 via-orange-50 to-amber-100 dark:from-amber-950 dark:via-orange-950 dark:to-amber-900",
    border: "border-l-4 border-amber-500",
    textColor: "text-amber-900 dark:text-amber-100",
    descColor: "text-amber-700 dark:text-amber-300",
  },
  portfolio_website: {
    bg: "bg-gradient-to-br from-pink-50 via-rose-50 to-pink-100 dark:from-pink-950 dark:via-rose-950 dark:to-pink-900",
    border: "border-l-4 border-pink-500",
    textColor: "text-pink-900 dark:text-pink-100",
    descColor: "text-pink-700 dark:text-pink-300",
  },
  default: {
    bg: "bg-gradient-to-br from-indigo-50 via-blue-50 to-indigo-100 dark:from-indigo-950 dark:via-blue-950 dark:to-indigo-900",
    border: "border-l-4 border-indigo-500",
    textColor: "text-indigo-900 dark:text-indigo-100",
    descColor: "text-indigo-700 dark:text-indigo-300",
  }
};

// Layout configurations for the specific bento grid
const projectLayouts = {
  ims_saas: { span: "lg:col-span-1 lg:row-span-2", layout: "tall" },
  duolingo_clone: { span: "lg:col-span-1 lg:row-span-1", layout: "wide-top" },
  nehabi_3d_plugin: { span: "lg:col-span-1 lg:row-span-1", layout: "wide-bottom" },
  startup_copilot: { span: "lg:col-span-1 lg:row-span-2", layout: "tall-right" },
  portfolio_website: { span: "lg:col-span-1 lg:row-span-1", layout: "wide-top" },
  default: { span: "lg:col-span-1 lg:row-span-1", layout: "wide-top" }
};

// Full-screen Image Modal with navigation
function ImageModal({
  media,
  currentIndex,
  isOpen,
  onClose,
  onNext,
  onPrev
}: {
  media: MediaItem[];
  currentIndex: number;
  isOpen: boolean;
  onClose: () => void;
  onNext: () => void;
  onPrev: () => void;
}) {
  if (!isOpen || !media.length) return null;

  const currentMedia = media[currentIndex];

  return (
    <div className="fixed inset-0 z-[100] flex items-center justify-center bg-black/95 backdrop-blur-sm">
      <button
        onClick={onClose}
        className="absolute top-6 right-6 z-10 p-3 text-white hover:bg-white/20 rounded-full transition-colors"
      >
        <X className="w-6 h-6" />
      </button>

      {media.length > 1 && (
        <>
          <button
            onClick={onPrev}
            className="absolute left-6 top-1/2 transform -translate-y-1/2 z-10 p-3 text-white hover:bg-white/20 rounded-full transition-colors"
            disabled={currentIndex === 0}
          >
            <ChevronLeft className="w-6 h-6" />
          </button>
          <button
            onClick={onNext}
            className="absolute right-6 top-1/2 transform -translate-y-1/2 z-10 p-3 text-white hover:bg-white/20 rounded-full transition-colors"
            disabled={currentIndex === media.length - 1}
          >
            <ChevronRight className="w-6 h-6" />
          </button>
        </>
      )}

      {media.length > 1 && (
        <div className="absolute top-6 left-6 z-10 bg-black/70 text-white text-sm px-3 py-1 rounded-full backdrop-blur-sm">
          {currentIndex + 1} / {media.length}
        </div>
      )}

      <div className="relative max-w-6xl w-full mx-4">
        {currentMedia.type === 'image' ? (
          <div className="flex justify-center">
            <Image
              src={currentMedia.url}
              alt={currentMedia.alt || 'Project image'}
              width={1600}
              height={1200}
              className="max-w-full max-h-[85vh] w-auto h-auto object-contain rounded-lg"
            />
          </div>
        ) : (
          <div className="flex justify-center">
            <video
              className="max-w-full max-h-[85vh] w-auto h-auto object-contain rounded-lg"
              controls
              autoPlay
            >
              <source src={currentMedia.url} type="video/mp4" />
              Your browser does not support the video tag.
            </video>
          </div>
        )}
      </div>
    </div>
  );
}

export default function ProjectCard({ project, layout = "wide-top" }: ProjectCardProps) {
  const {
    id,
    title,
    description,
    tools,
    role,
    openToPartners,
    github,
    liveDemo,
    media,
    fullDescription,
    timeline,
    status,
    challenges,
    achievements
  } = project;

  const [currentMediaIndex, setCurrentMediaIndex] = useState(0);
  const [isImageModalOpen, setIsImageModalOpen] = useState(false);
  const [viewingMediaIndex, setViewingMediaIndex] = useState(0);

  // Get the specific color config and layout for this project
  const config = projectColorConfigs[id as keyof typeof projectColorConfigs] || projectColorConfigs.default;
  const layoutConfig = projectLayouts[id as keyof typeof projectLayouts] || projectLayouts.default;
  const primaryMedia = media?.[0];

  const handleMediaClick = (index: number) => {
    setViewingMediaIndex(index);
    setIsImageModalOpen(true);
  };

  const handleNextMedia = () => {
    if (media && viewingMediaIndex < media.length - 1) {
      setViewingMediaIndex(prev => prev + 1);
    }
  };

  const handlePrevMedia = () => {
    if (media && viewingMediaIndex > 0) {
      setViewingMediaIndex(prev => prev - 1);
    }
  };

  // Tall layout (2 rows height)
  const renderTallLayout = () => (
    <Card className={`${config.bg} ${config.border} rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 p-6 flex flex-col h-full group backdrop-blur-sm min-h-[400px]`}>
      <div className="flex-1 space-y-4">
        <div className="flex items-start justify-between">
          <h3 className={`text-xl font-bold ${config.textColor}`}>{title}</h3>
          {openToPartners && (
            <Badge variant="secondary" className="flex items-center gap-1">
              <Users className="w-3 h-3" />
              Open to Partners
            </Badge>
          )}
        </div>

        {role && <p className="text-sm text-gray-600 dark:text-gray-400">{role}</p>}

        <p className="text-sm text-gray-700 dark:text-gray-300 leading-relaxed">
          {description}
        </p>

        {primaryMedia && (
          <div className="relative rounded-xl overflow-hidden min-h-48 border-2 border-white/30">
            {primaryMedia.type === 'image' ? (
              <div
                className="w-full h-full cursor-pointer"
                onClick={() => handleMediaClick(0)}
              >
                <Image
                  src={primaryMedia.url}
                  alt={primaryMedia.alt || title}
                  fill
                  className="object-cover transition-transform duration-300 hover:scale-105"
                />
                <div className="absolute inset-0 bg-black/0 hover:bg-black/10 transition-colors" />
              </div>
            ) : (
              <video
                className="w-full h-full object-contain bg-black rounded-xl"
                poster={primaryMedia.thumbnail}
                controls
                preload="metadata"
              >
                <source src={primaryMedia.url} type="video/mp4" />
              </video>
            )}
          </div>
        )}

        <div className="flex flex-wrap gap-2">
          {tools.slice(0, 6).map((tool) => (
            <Badge key={tool} variant="outline" className={`text-xs ${config.descColor}`}>
              {tool}
            </Badge>
          ))}
        </div>
      </div>

      <div className="flex gap-3 pt-4 border-t border-gray-200 dark:border-gray-700">
        <DialogTrigger asChild>
          <Button variant="outline" size="sm" className="flex-1">
            <Eye className="w-4 h-4 mr-2" />
            View Details
          </Button>
        </DialogTrigger>
        <div className="flex gap-2">
          {github && (
            <a href={github} target="_blank" rel="noopener noreferrer" className="p-2 rounded-lg border border-gray-300 hover:bg-gray-50 dark:border-gray-600 dark:hover:bg-gray-700">
              <Github className="w-4 h-4" />
            </a>
          )}
          {liveDemo && (
            <a href={liveDemo} target="_blank" rel="noopener noreferrer" className="p-2 rounded-lg border border-gray-300 hover:bg-gray-50 dark:border-gray-600 dark:hover:bg-gray-700">
              <ExternalLink className="w-4 h-4" />
            </a>
          )}
        </div>
      </div>
    </Card>
  );

  // Wide top layout (1 row height)
  const renderWideTopLayout = () => (
    <Card className={`${config.bg} ${config.border} rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 p-6 flex flex-col h-full group backdrop-blur-sm min-h-[250px]`}>
      <div className="flex-1 space-y-4">
        <div className="flex items-start justify-between">
          <h3 className={`text-lg font-bold ${config.textColor}`}>{title}</h3>
          {openToPartners && (
            <Badge variant="secondary" className="flex items-center gap-1">
              <Users className="w-3 h-3" />
            </Badge>
          )}
        </div>

        <p className="text-sm text-gray-600 dark:text-gray-400 line-clamp-2">
          {description}
        </p>

        {primaryMedia && (
          <div className="relative h-32 rounded-lg overflow-hidden border-2 border-white/30">
            {primaryMedia.type === 'image' ? (
              <div
                className="w-full h-full cursor-pointer"
                onClick={() => handleMediaClick(0)}
              >
                <Image
                  src={primaryMedia.url}
                  alt={primaryMedia.alt || title}
                  fill
                  className="object-cover transition-transform duration-300 hover:scale-105"
                />
              </div>
            ) : (
              <video
                className="w-full h-full object-contain bg-black"
                poster={primaryMedia.thumbnail}
                controls
                preload="metadata"
              >
                <source src={primaryMedia.url} type="video/mp4" />
              </video>
            )}
          </div>
        )}
      </div>

      <div className="flex gap-2 pt-3">
        <DialogTrigger asChild>
          <Button variant="outline" size="sm" className="flex-1 text-xs">
            <Eye className="w-3 h-3 mr-1" />
            Details
          </Button>
        </DialogTrigger>
        <div className="flex gap-1">
          {github && (
            <a href={github} target="_blank" rel="noopener noreferrer" className="p-2 rounded-lg border border-gray-300 hover:bg-gray-50 dark:border-gray-600 dark:hover:bg-gray-700">
              <Github className="w-3 h-3" />
            </a>
          )}
          {liveDemo && (
            <a href={liveDemo} target="_blank" rel="noopener noreferrer" className="p-2 rounded-lg border border-gray-300 hover:bg-gray-50 dark:border-gray-600 dark:hover:bg-gray-700">
              <ExternalLink className="w-3 h-3" />
            </a>
          )}
        </div>
      </div>
    </Card>
  );

  // Wide bottom layout (1 row height)
  const renderWideBottomLayout = () => (
    <Card className={`${config.bg} ${config.border} rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 p-6 flex flex-col h-full group backdrop-blur-sm min-h-[250px]`}>
      <div className="flex-1 space-y-4">
        <div className="flex items-start justify-between">
          <h3 className={`text-lg font-bold ${config.textColor}`}>{title}</h3>
          {openToPartners && (
            <Badge variant="secondary" className="flex items-center gap-1">
              <Users className="w-3 h-3" />
            </Badge>
          )}
        </div>

        <div className="flex flex-wrap gap-1">
          {tools.slice(0, 4).map((tool) => (
            <Badge key={tool} variant="outline" className={`text-xs ${config.descColor}`}>
              {tool}
            </Badge>
          ))}
        </div>

        <p className="text-sm text-gray-600 dark:text-gray-400 line-clamp-3">
          {description}
        </p>
      </div>

      <div className="flex gap-2 pt-3">
        <DialogTrigger asChild>
          <Button variant="outline" size="sm" className="flex-1 text-xs">
            <Eye className="w-3 h-3 mr-1" />
            View
          </Button>
        </DialogTrigger>
        {github && (
          <a href={github} target="_blank" rel="noopener noreferrer" className="p-2 rounded-lg border border-gray-300 hover:bg-gray-50 dark:border-gray-600 dark:hover:bg-gray-700">
            <Github className="w-3 h-3" />
          </a>
        )}
      </div>
    </Card>
  );

  return (
    <>
      <Dialog>
        <div className={`relative ${layoutConfig.span}`}>
          {layoutConfig.layout === "tall" && renderTallLayout()}
          {layoutConfig.layout === "tall-right" && renderTallLayout()}
          {layoutConfig.layout === "wide-top" && renderWideTopLayout()}
          {layoutConfig.layout === "wide-bottom" && renderWideBottomLayout()}
        </div>

        {/* Project Details Modal (same comprehensive modal as before) */}
        <DialogContent className="max-w-4xl max-h-[90vh] overflow-y-auto">
          <DialogHeader>
            <DialogTitle className="flex items-center gap-3">
              {media && media[0] && (
                <div className="relative w-12 h-12 rounded-lg overflow-hidden">
                  <Image
                    src={media[0].type === 'image' ? media[0].url : media[0].thumbnail || media[0].url}
                    alt={media[0].alt || title}
                    fill
                    className="object-cover"
                  />
                </div>
              )}
              <div>
                <div className="text-2xl">{title}</div>
                {role && (
                  <p className="text-sm text-gray-600 dark:text-gray-400 mt-1">
                    {role}
                  </p>
                )}
              </div>
            </DialogTitle>
            <DialogDescription className="sr-only">
              Detailed information about {title} project
            </DialogDescription>
          </DialogHeader>

          <div className="space-y-6">
            {/* Media Gallery */}
            {media && media.length > 0 && (
              <div>
                <div className="relative w-full h-80 rounded-lg overflow-hidden">
                  {media[currentMediaIndex].type === 'image' ? (
                    <Image
                      src={media[currentMediaIndex].url}
                      alt={media[currentMediaIndex].alt || title}
                      fill
                      className="object-cover"
                    />
                  ) : (
                    <video
                      className="w-full h-full object-contain bg-black rounded-lg"
                      poster={media[currentMediaIndex].thumbnail}
                      controls
                      autoPlay
                    >
                      <source src={media[currentMediaIndex].url} type="video/mp4" />
                    </video>
                  )}
                </div>
                {media.length > 1 && (
                  <div className="flex gap-2 overflow-x-auto py-4">
                    {media.map((item, index) => (
                      <button
                        key={index}
                        onClick={() => setCurrentMediaIndex(index)}
                        className={`flex-shrink-0 w-20 h-16 rounded-md overflow-hidden border-2 transition-all ${index === currentMediaIndex
                          ? 'border-blue-500 ring-2 ring-blue-200'
                          : 'border-gray-200 hover:border-gray-300'
                          }`}
                      >
                        {item.type === 'image' ? (
                          <Image
                            src={item.url}
                            alt={item.alt || `Thumbnail ${index + 1}`}
                            width={80}
                            height={64}
                            className="w-full h-full object-cover"
                          />
                        ) : (
                          <div className="relative w-full h-full bg-gray-100">
                            <Image
                              src={item.thumbnail || item.url}
                              alt={item.alt || `Video thumbnail ${index + 1}`}
                              width={80}
                              height={64}
                              className="w-full h-full object-cover"
                            />
                            <div className="absolute inset-0 bg-black/40 flex items-center justify-center">
                              <Play className="w-4 h-4 text-white" />
                            </div>
                          </div>
                        )}
                      </button>
                    ))}
                  </div>
                )}
              </div>
            )}

            {/* Project Status & Timeline */}
            {(timeline || status) && (
              <div className="grid md:grid-cols-2 gap-6">
                {timeline && (
                  <div className="flex items-center gap-3 p-4 rounded-xl bg-gray-50 dark:bg-gray-800">
                    <Calendar className="w-5 h-5 text-blue-500 flex-shrink-0" />
                    <div>
                      <h4 className="font-semibold text-sm text-gray-900 dark:text-white">Timeline</h4>
                      <p className="text-sm text-gray-600 dark:text-gray-400 mt-1">{timeline}</p>
                    </div>
                  </div>
                )}
                {status && (
                  <div className="flex items-center gap-3 p-4 rounded-xl bg-gray-50 dark:bg-gray-800">
                    <Clock className="w-5 h-5 text-green-500 flex-shrink-0" />
                    <div>
                      <h4 className="font-semibold text-sm text-gray-900 dark:text-white">Current Status</h4>
                      <p className="text-sm text-gray-600 dark:text-gray-400 mt-1">{status}</p>
                    </div>
                  </div>
                )}
              </div>
            )}

            {/* Full Description */}
            <div className="prose dark:prose-invert max-w-none">
              <h4 className="font-semibold text-lg mb-3 text-gray-900 dark:text-white">Project Overview</h4>
              <p className="text-gray-700 dark:text-gray-300 leading-relaxed">
                {fullDescription || description}
              </p>
            </div>

            {/* Role & Partnership Status */}
            <div className="grid md:grid-cols-2 gap-6">
              <div className="p-4 rounded-xl bg-gray-50 dark:bg-gray-800">
                <h4 className="font-semibold text-sm text-gray-900 dark:text-white mb-2">My Role & Responsibilities</h4>
                <p className="text-sm text-gray-600 dark:text-gray-400">{role}</p>
              </div>
              <div className="p-4 rounded-xl bg-gray-50 dark:bg-gray-800">
                <h4 className="font-semibold text-sm text-gray-900 dark:text-white mb-2">Partnership Status</h4>
                <div className="flex items-center gap-2">
                  {openToPartners ? (
                    <>
                      <Users className="w-4 h-4 text-green-500" />
                      <span className="text-sm text-green-600 dark:text-green-400">Open to Partners</span>
                    </>
                  ) : (
                    <>
                      <Users className="w-4 h-4 text-gray-400" />
                      <span className="text-sm text-gray-600 dark:text-gray-400">Not currently seeking partners</span>
                    </>
                  )}
                </div>
              </div>
            </div>

            {/* All Tools & Technologies */}
            <div>
              <h4 className="font-semibold text-lg mb-3 text-gray-900 dark:text-white">Technologies & Tools</h4>
              <div className="flex flex-wrap gap-2">
                {tools.map((tool) => (
                  <Badge
                    key={tool}
                    variant="outline"
                    className="text-sm px-3 py-1 border-blue-200 dark:border-blue-800 text-blue-700 dark:text-blue-300 bg-blue-50 dark:bg-blue-900/20"
                  >
                    {tool}
                  </Badge>
                ))}
              </div>
            </div>

            {/* Key Challenges */}
            {challenges && challenges.length > 0 && (
              <div>
                <h4 className="font-semibold text-lg mb-3 text-gray-900 dark:text-white">Key Challenges & Solutions</h4>
                <div className="space-y-3">
                  {challenges.map((challenge, index) => (
                    <div key={index} className="flex items-start gap-3 p-3 rounded-lg bg-orange-50 dark:bg-orange-900/20 border border-orange-200 dark:border-orange-800">
                      <div className="w-2 h-2 rounded-full bg-orange-500 mt-2 flex-shrink-0"></div>
                      <p className="text-sm text-gray-700 dark:text-gray-300">{challenge}</p>
                    </div>
                  ))}
                </div>
              </div>
            )}

            {/* Key Achievements */}
            {achievements && achievements.length > 0 && (
              <div>
                <h4 className="font-semibold text-lg mb-3 text-gray-900 dark:text-white">Key Achievements & Impact</h4>
                <div className="space-y-3">
                  {achievements.map((achievement, index) => (
                    <div key={index} className="flex items-start gap-3 p-3 rounded-lg bg-green-50 dark:bg-green-900/20 border border-green-200 dark:border-green-800">
                      <div className="w-2 h-2 rounded-full bg-green-500 mt-2 flex-shrink-0"></div>
                      <p className="text-sm text-gray-700 dark:text-gray-300">{achievement}</p>
                    </div>
                  ))}
                </div>
              </div>
            )}

            {/* Action Buttons */}
            <div className="pt-6 border-t border-gray-200 dark:border-gray-800 space-y-4">
              <div className="grid md:grid-cols-2 gap-4">
                {github && (
                  <a
                    href={github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center justify-center gap-2 px-6 py-3 rounded-xl border border-gray-300 dark:border-gray-700 text-gray-700 dark:text-gray-200 hover:bg-gray-50 dark:hover:bg-gray-800 transition-all font-medium"
                  >
                    <Github className="w-5 h-5" />
                    View Source Code
                  </a>
                )}
                {liveDemo && (
                  <a
                    href={liveDemo}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center justify-center gap-2 px-6 py-3 rounded-xl bg-blue-600 text-white hover:bg-blue-700 transition-all font-medium"
                  >
                    <ExternalLink className="w-5 h-5" />
                    Live Demo
                  </a>
                )}
              </div>

              {openToPartners && (
                <div className="text-center p-4 rounded-xl bg-green-50 dark:bg-green-900/20 border border-green-200 dark:border-green-800">
                  <p className="text-sm text-gray-600 dark:text-gray-400 mb-3">
                    Interested in collaborating on this project?
                  </p>
                  <a
                    href="mailto:bemnet537@gmail.com?subject=Collaboration%20Interest%20in%20Your%20Project"
                    className="inline-flex items-center gap-2 px-6 py-2 rounded-lg bg-green-600 text-white text-sm hover:bg-green-700 transition-all font-medium"
                  >
                    <Users className="w-4 h-4" />
                    Partner on this Project
                  </a>
                </div>
              )}

              {!github && !liveDemo && (
                <div className="text-center p-4 rounded-xl bg-gray-50 dark:bg-gray-800">
                  <p className="text-sm text-gray-600 dark:text-gray-400">
                    This project is currently in development. Check back soon for updates!
                  </p>
                </div>
              )}
            </div>
          </div>
        </DialogContent>
      </Dialog>

      {/* Full-screen Image Modal */}
      {media && (
        <ImageModal
          media={media}
          currentIndex={viewingMediaIndex}
          isOpen={isImageModalOpen}
          onClose={() => setIsImageModalOpen(false)}
          onNext={handleNextMedia}
          onPrev={handlePrevMedia}
        />
      )}
    </>
  );
}