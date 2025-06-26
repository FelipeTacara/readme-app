import { Footer } from "@/components/Footer";
import ImageContainer from "@/components/ImageContainer";

export default function Home() {
  return (
    <div className="bg-neutral-100 dark:bg-neutral-900">
      <div className="relative isolate">
        <div className="py-24 sm:py-32 lg:pb-32">
          <div className="mx-auto max-w-7xl px-6 lg:px-8">
            <div className="mx-auto max-w-2xl text-center">
              <h1 className="text-5xl font-semibold tracking-tight text-balance text-foreground sm:text-6xl">
                Create a README for your repository
              </h1>
              <p className="mt-8 text-lg font-medium text-pretty text-neutral-500 sm:text-xl/8">
                Online editor to quickly add and customize all the sections for
                your project&apos;s readme
              </p>
              <div className="mt-10 flex items-center justify-center gap-x-6">
                <a
                  href="/generate-readme"
                  className="rounded-md bg-foreground px-3.5 py-2.5 text-sm font-semibold text-background shadow-xs hover:bg-foreground/75 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
                >
                  Get started
                </a>
              </div>
            </div>
            <div className="mt-16 flow-root sm:mt-24">
              <ImageContainer />
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
}
