import { Header } from "@repo/ui/header";
import Link from "next/link";

export default function Home(): JSX.Element {
  return (
    <main className="antialiased w-screen min-h-screen flex flex-col font-sans font-medium text-lg tracking-littlewide text-zinc-900">
      <Header
        title="minku lee"
        tagline="home"></Header>

      <div className="container px-8 md:px-20 py-16 md:py-40 flex lg:flex-row flex-col grow">
        <h2 className="lg:w-[50%] py-1 pr-10 text-4xl leading-[3rem]">Hello from Korea.</h2>
        <span className="lg:w-[50%] py-1 text-4xl leading-[3rem]">Craft, design, explore,<br />somewhere in between.</span>
      </div>

      <div>
        <div className="border-t-2 border-neutral-200 ml-8 md:ml-20" />

        <div className="container px-8 md:px-20 py-5 md:py-10 flex flex-col md:flex-row">
          <p className="md:w-[50%] pr-8">
            <Link href="https://si.mpli.st" target="_blank">blog &rarr; si.mpli.st</Link>
          </p>
          <p className="md:w-[50%]">contact &rarr; public@premi.st</p>
        </div>
      </div>
    </main>
  );
}
