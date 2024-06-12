import { Header } from "@repo/ui/header"

export default function Home() {
  return (
    <main className="font-sans text-lg tracking-littlewide text-slate-950">
      <div>
        <Header
          title="minku lee"
          subtitle="si.mpli.st"
          tagline="dev"></Header>

        <div className="absolute w-full bottom-0">
          <div className="border-t-2 border-neutral-200 ml-12 sm:ml-20" />
          <div className="container px-12 sm:px-20 py-6 sm:py-10 flex flex-col sm:flex-row">
            <a className="sm:mr-24 lg:mr-48" href="https://si.mpli.st/">blog &rarr; si.mpli.st</a>
            <a href="mailto:public@premi.st">contact &rarr; public@premi.st</a>
          </div>
        </div>
      </div>
    </main>
  );
}
