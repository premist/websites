export default function Home() {
  return (
    <main className="font-sans text-lg tracking-littlewide text-slate-950">
      <div>
        <div className="container px-12 sm:px-20 py-6 sm:py-10 flex flex-row justify-between gap-x-4">
          <h1>premi.st</h1>
          <span>minku lee</span>
        </div>

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
