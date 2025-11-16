import { Button } from "@/components/ui/button";
import { Container } from "./common/Container";

export default function Hero() {
  return (
    <div className="relative mt-15 flex items-center min-h-screen bg-background">
      <Container>
        <div className="flex flex-col md:flex-row items-center gap-10">

          {/* TEXT */}
          <div className="flex-1 space-y-6">
            <h1 className="text-5xl font-bold tracking-tight">
              I build production software <br />
              and launch startups that solve real problems.
            </h1>

            <p className="text-lg text-neutral-600 dark:text-neutral-300">
              Full-Stack Engineer & Entrepreneur — open for hire and equity partnerships.
            </p>

            <div className="flex gap-4">
              <Button size="lg">Hire Me</Button>
              <Button size="lg" variant="outline">Partner With Me</Button>
            </div>
          </div>

          {/* IMAGE */}
          <div className="flex-1">
            <img
              src="/bemnetbeyenephoto.jpg"
              alt="Hanna"
              className="rounded-3xl w-full max-w-sm shadow-xl"
            />
          </div>
        </div>
      </Container>
    </div>
  );
}
