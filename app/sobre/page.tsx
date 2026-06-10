import Image from 'next/image'

export default function SobrePage() {
  return (
    <article className="mx-auto max-w-3xl px-4 py-16 md:py-20">
      <header className="text-left">
        <h1 className="text-[32px] font-bold leading-tight md:text-[40px]">
          Sobre a BYD
        </h1>
        <p className="mt-4 text-base leading-relaxed text-muted-foreground">
          Da fabricação de baterias à liderança mundial em veículos elétricos.
        </p>
      </header>

      <div className="relative mt-10 aspect-[16/9] overflow-hidden rounded-lg border border-border">
        <Image
          src="/cars/byd-factory.png"
          alt="Fábrica de veículos elétricos e tecnologia de baterias da BYD"
          fill
          className="object-cover"
          sizes="(max-width: 768px) 100vw, 768px"
        />
      </div>

      {/* Parágrafos longos estritamente alinhados à esquerda */}
      <div className="mt-12 text-left">
        <h2 className="text-[24px] font-semibold md:text-[28px]">
          Nossa história
        </h2>
        <p className="mt-6 text-base leading-relaxed text-foreground">
          Fundada em 1995 na cidade de Shenzhen, na China, a BYD começou sua
          trajetória como fabricante de baterias recarregáveis. O nome é a sigla
          de <em>Build Your Dreams</em> — Construa Seus Sonhos — e reflete a
          ambição que move a empresa desde o início. Em poucos anos, a companhia
          se tornou uma das maiores fornecedoras de baterias do mundo, criando
          uma base sólida de conhecimento que mais tarde transformaria o setor
          automotivo.
        </p>
        <p className="mt-4 text-base leading-relaxed text-foreground">
          Em 2003, a BYD entrou no mercado automotivo e passou a aplicar todo o
          seu domínio em energia ao desenvolvimento de veículos elétricos. Essa
          integração vertical — controlar desde a célula da bateria até o
          veículo completo — permitiu à marca avançar com rapidez e qualidade,
          oferecendo carros confiáveis a preços competitivos. Hoje, a BYD é a
          maior fabricante de veículos elétricos do planeta, presente em mais de
          setenta países.
        </p>

        <h2 className="mt-12 text-[24px] font-semibold md:text-[28px]">
          A tecnologia Blade Battery
        </h2>
        <p className="mt-6 text-base leading-relaxed text-foreground">
          O grande diferencial da BYD é a Blade Battery, uma bateria de fosfato
          de ferro-lítio (LFP) com formato alongado e fino, semelhante a uma
          lâmina. Esse design inovador aumenta significativamente a segurança,
          pois é altamente resistente a superaquecimento e a riscos de incêndio,
          além de otimizar o aproveitamento do espaço interno do veículo. O
          resultado é maior autonomia, vida útil prolongada e tranquilidade para
          quem dirige.
        </p>
        <p className="mt-4 text-base leading-relaxed text-foreground">
          Comprometida com a sustentabilidade, a BYD também investe em geração
          de energia solar, armazenamento e transporte público eletrificado. A
          missão da marca vai além de vender carros: trata-se de reduzir a
          dependência de combustíveis fósseis e contribuir para um planeta mais
          limpo. Ao escolher um veículo BYD, você faz parte dessa transformação
          global rumo a uma mobilidade verdadeiramente sustentável.
        </p>
      </div>
    </article>
  )
}
