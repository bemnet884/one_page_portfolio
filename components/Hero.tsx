import { Button } from "@/components/ui/button";
import { Container } from "./common/Container";
import Link from "next/link";

export default function Hero() {
  return (
    <div className="relative min-h-screen bg-background overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute -top-40 -right-40 w-80 h-80 bg-gradient-to-r from-blue-100 to-purple-100 rounded-full blur-3xl opacity-50 dark:from-blue-900/20 dark:to-purple-900/20"></div>
        <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-gradient-to-r from-green-100 to-cyan-100 rounded-full blur-3xl opacity-50 dark:from-green-900/20 dark:to-cyan-900/20"></div>
      </div>

      <Container>
        <div className="relative flex items-center min-h-screen">
          <div className="flex flex-col lg:flex-row items-center gap-16 lg:gap-20 py-20">

            {/* TEXT CONTENT */}
            <div className="flex-1 space-y-8 text-center lg:text-left">
              <div className="space-y-6">

                {/* Status Badge */}
                <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-neutral-200 dark:border-neutral-800 bg-white/60 dark:bg-neutral-900/60 backdrop-blur-md shadow-sm text-sm text-neutral-700 dark:text-neutral-300">
                  <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse"></div>
                  Currently taking on select new projects
                </div>

                {/* Headline */}
                <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight leading-tight">
                  I build{" "}
                  <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
                    scalable apps
                  </span>{" "}
                  and launch{" "}
                  <span className="bg-gradient-to-r from-purple-600 to-pink-600 bg-clip-text text-transparent">
                    real products.
                  </span>
                </h1>

                <p className="text-xl text-neutral-600 dark:text-neutral-300 leading-relaxed max-w-2xl">
                  Full-stack engineer. Fast execution. Clean architecture. Real impact.
                </p>

              </div>

              {/* Buttons */}
              <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
                <Link href="#contact">
                  <Button size="lg" className="gap-2 group shadow-[0_8px_30px_rgb(0,0,0,0.12)]">
                    Hire Me
                    <svg className="w-4 h-4 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
                    </svg>
                  </Button>
                </Link>
                <Link href="#ventures">
                  <Button size="lg" variant="outline" className="gap-2 group border-neutral-300 dark:border-neutral-700 backdrop-blur-md">
                    Partner With Me
                    <svg className="w-4 h-4 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                    </svg>
                  </Button>
                </Link>
              </div>

              {/* Stats */}
              <div className="flex flex-wrap gap-8 pt-8 justify-center lg:justify-start">
                <div className="text-center">
                  <div className="text-3xl font-bold text-neutral-900 dark:text-white">10+</div>
                  <div className="text-sm text-neutral-600 dark:text-neutral-400">Products Shipped</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold text-neutral-900 dark:text-white">2+</div>
                  <div className="text-sm text-neutral-600 dark:text-neutral-400">Years Experience</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold text-neutral-900 dark:text-white">100%</div>
                  <div className="text-sm text-neutral-600 dark:text-neutral-400">Client Success</div>
                </div>
              </div>
            </div>


            {/* IMAGE WITH CURVED FRAMES */}
            <div className="flex-1 flex justify-center lg:justify-end">
              <div className="relative">
                {/* Background Elements */}
                <div className="absolute -inset-6 bg-gradient-to-br from-blue-500/10 to-purple-500/10 rounded-3xl transform rotate-6"></div>
                <div className="absolute -inset-3 bg-gradient-to-tr from-green-500/10 to-cyan-500/10 rounded-2xl transform -rotate-3"></div>

                {/* Main Image Container */}
                <div className="relative bg-white dark:bg-neutral-800 rounded-2xl p-4 shadow-2xl border border-neutral-100 dark:border-neutral-700">
                  <img
                    src="/bemnetbeyenephoto.jpg"
                    alt="Hanna Bemnet Beyene"
                    className="rounded-2xl w-full max-w-sm lg:max-w-md transform hover:scale-105 transition-transform duration-500"
                  />

                  {/* Floating Badge */}
                  <div className="absolute -bottom-4 -right-4 bg-white dark:bg-neutral-800 rounded-2xl p-4 shadow-lg border border-neutral-200 dark:border-neutral-600">
                    <div className="flex items-center gap-2">
                      <div className="w-3 h-3 bg-green-500 rounded-full animate-pulse"></div>
                      <span className="text-sm font-medium text-neutral-700 dark:text-neutral-300">Bemenet B.</span>
                    </div>
                  </div>
                </div>

                {/* Decorative Elements */}
                <div className="absolute -top-6 -left-6 w-12 h-12 bg-blue-500/10 rounded-2xl transform rotate-12"></div>
                <div className="absolute -bottom-6 -right-6 w-10 h-10 bg-purple-500/10 rounded-2xl transform -rotate-12"></div>
              </div>
            </div>
          </div>
        </div>
      </Container>
    </div>
  );
}