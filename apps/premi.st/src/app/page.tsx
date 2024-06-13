import { Header } from "@repo/ui/header";

export default function Home(): JSX.Element {
  return (
    <main className="antialiased font-sans font-medium text-xl tracking-littlewide text-zinc-900">
      <div>
        <Header
          title="minku lee"
          subtitle="si.mpli.st"
          tagline="dev"></Header>

      <div className="sm:py-40">
        <div className="post-title container sm:px-20 flex flex-col gap-4">
          <h2 className="text-4xl">k3s 시리즈 - Prometheus로 하는 Kubernetes 지표 수집과 모니터링</h2>
          <span className="text-zinc-400 text-xl">2023.01.31</span>
        </div>

        <div className="w-full h-0.5 bg-neutral-200 sm:ml-20 my-6"></div>

        <div className="container sm:px-20 leading-loose">
        메인보드를 고를 때 두 가지 부분을 고려했습니다. 앞으로 나올 AMD CPU(Zen 3 이상)를 지원할 수 있는지, 그리고&nbsp;
        <a href="#">LG UltraFine 5K</a>
        를 지원할 수 있는지. 후자의 경우 보다 자세한 요구 사항이 있는데요, UltraFine은 최대 해상도인 5K(5120x2880)을 지원하기 위해 화면을 절반(2560x2880)으로 나누고, 두 개의 DisplayPort 1.2 스트림으로 나누어 신호를 전송합니다. 따라서 썬더볼트 컨트롤러에 들어가는 DisplayPort 스트림이 두 개가 되어야 하죠.
        </div>
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
