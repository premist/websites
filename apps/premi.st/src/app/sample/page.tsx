import { Header } from "@repo/ui/header";
import Image from "next/image";
import testImage from "./test.jpg";

export default function Home(): JSX.Element {
  return (
    <main className="antialiased w-screen font-sans font-medium text-lg tracking-littlewide text-zinc-900">
      <div>
        <Header
          title="minku lee"
          subtitle="si.mpli.st"
          tagline="dev"></Header>

      <div className="sm:py-40">
        <div className="post-title container sm:px-20 flex flex-col gap-4">
          <h2 className="text-4xl">k3s 시리즈 - Prometheus로 하는 Kubernetes 지표 수집과 모니터링</h2>
          <span className="text-zinc-400">2023.01.31</span>
        </div>

        <div className="border-t-2 my-6 border-neutral-200 ml-12 sm:ml-20" />
        {/* <div className="w-full h-0.5 bg-neutral-200 sm:ml-20 my-6"></div> */}

        <div className="container sm:px-20 flex flex-col gap-4 leading-loose">
          <div>
            메인보드를 고를 때 두 가지 부분을 고려했습니다. 앞으로 나올 AMD CPU(Zen 3 이상)를 지원할 수 있는지, 그리고&nbsp;
            <a href="#">LG UltraFine 5K</a>
            를 지원할 수 있는지. 후자의 경우 보다 자세한 요구 사항이 있는데요, UltraFine은 최대 해상도인 5K(5120x2880)을 지원하기 위해 화면을 절반(2560x2880)으로 나누고, 두 개의 DisplayPort 1.2 스트림으로 나누어 신호를 전송합니다. 따라서 썬더볼트 컨트롤러에 들어가는 DisplayPort 스트림이 두 개가 되어야 하죠.
          </div>

          <figure>
            <Image
              src="https://o.polychrome.network/temp/nextjs-testimage.jpg"
              alt="Test image"
              width={5000}
              height={3337} />
            <figcaption>35mm 크롭 모드를 사용하였다.</figcaption>
          </figure>

          <p>
          이 글에서는 Kubernetes 위에 Prometheus를 설치하기 위해서 kube-prometheus를 사용합니다. Prometheus를 직접 설치하는 것을 포함하여 여러 가지 방법을 시도해 보았지만, kube-prometheus를 사용했을 때 최소한의 설정으로 빠르게 Prometheus를 설치할 수 있었습니다.
          </p>

          <p>
          하지만 kube-prometheus의 기본 설정은 VPS 등의 작은 서버에 간단히 올리고자 하는 분들에게는 적합하지 않습니다. 제가 AWS Lightsail 가상서버에 설치를 했을 때 1GB 이상의 메모리를 기본으로 사용해서 배보다 배꼽이 큰 상황이 되었습니다. 장애를 견딜 수 있는 고가용성(HA) 설정이다보니 그대로 설치하면 메모리와 CPU 등의 리소스를 많이 소비하는 것이죠.
          </p>

          <p>
          리소스가 충분하다면 위의 kube-prometheus 공식 저장소에서 설치를 하면 되지만, 리소스가 제한된 환경일 때는 특히 적은 리소스만 사용하도록 설치하고 싶은 경우가 대부분이죠. 이런 고민을 하시는 분들을 위해 kube-prometheus의 경량화된 버전을 제작했습니다. 원본과의 주요 차이점이라면 replica가 하나이고 alertmanager를 배포하지 않는 것인데, 이 버전을 k3s에 설치해보도록 하겠습니다.
          </p>

          {/* <figure className="w-[calc(100vw-5rem)]">
            <Image
              src={testImage}
              alt="Test image" />
            <figcaption>35mm 크롭 모드를 사용하였다.</figcaption>
          </figure> */}


        </div>
      </div>

      <div className="w-full bottom-0">
          <div className="border-t-2 border-neutral-200 ml-12 sm:ml-20" />
          <div className="container px-12 sm:px-20 py-6 sm:py-10 flex flex-col sm:flex-row">
            <a className="sm:mr-24 lg:mr-48" href="https://si.mpli.st/">blog &rarr; si.mpli.st</a>
            <a href="mailto:public@premi.st">contact &rarr; public@premi.st</a>
          </div>
        </div>
      </div>

        {/* <div className="absolute w-full bottom-0">
          <div className="border-t-2 border-neutral-200 ml-12 sm:ml-20" />
          <div className="container px-12 sm:px-20 py-6 sm:py-10 flex flex-col sm:flex-row">
            <a className="sm:mr-24 lg:mr-48" href="https://si.mpli.st/">blog &rarr; si.mpli.st</a>
            <a href="mailto:public@premi.st">contact &rarr; public@premi.st</a>
          </div>
        </div>
      </div> */}
    </main>
  );
}
