import { Header } from "@repo/ui/header";

export default function Sample2(): JSX.Element {
  return (
    <main className="antialiased w-screen min-h-screen flex flex-col font-sans font-medium text-lg tracking-littlewide text-zinc-900">
      {/* <Header
        title="minku lee"
        tagline="home"></Header> */}

      <div className="container px-10 md:px-20 py-5 md:py-10 flex flex-col md:flex-row">
        <h1 className="bg-red-400 md:w-[20%] pr-10">very long text that will surely overflow so I can debut flex sizing issues</h1>
        <span className="bg-amber-400 md:w-[30%] pr-10">another text that goes over the usual width hence testing how layout will adapt to the content</span>
        <p className="bg-lime-400 md:w-[50%]">this will be a tagline section that can regularly contain large paragraphs but not sure how it will turn out in practice</p>
      </div>

      <div className="container px-10 md:px-20 py-20 md:py-40 flex lg:flex-row flex-col grow">
        <h2 className="md:w-[31rem] pr-10 text-4xl leading-[3rem]">Hello from Korea.</h2>
        <span className="grow text-4xl leading-[3rem]">Craft, design, explore,<br />somewhere in between.</span>
      </div>

      <div>
        <div className="border-t-2 border-neutral-200 ml-12 md:ml-20" />
        <div className="container px-10 md:px-20 py-5 md:py-10 flex md:flex-row">
          <h1 className="bg-red-400 grow-[2] lg:w-52 pr-10">blog &rarr; si.mpli.st</h1>
          <span className="bg-amber-400 grow-[3] lg:w-72 pr-10">contact &rarr; public@premi.st</span>
          <p className="bg-lime-400 grow">contact &rarr; public@premi.st</p>
        </div>
      </div>
    </main>
  );
}
