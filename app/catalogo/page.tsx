import Image from 'next/image'

type Car = {
  slug: string
  name: string
  type: string
  price: string
  image: string
  description: string
}

const cars: Car[] = [
  {
    slug: 'han',
    name: 'BYD Han',
    type: 'Sedã de luxo',
    price: 'R$ 419.800',
    image: '/cars/byd-han.png',
    description:
      'Sedã topo de linha com tração nas quatro rodas, mais de 500 km de autonomia e interior premium para quem busca conforto e alto desempenho.',
  },
  {
    slug: 'tang',
    name: 'BYD Tang',
    type: 'SUV 7 lugares',
    price: 'R$ 479.990',
    image: '/cars/byd-tang.png',
    description:
      'SUV elétrico de grande porte com três fileiras de bancos, espaço generoso e potência de sobra, ideal para a família que não abre mão de espaço.',
  },
  {
    slug: 'dolphin',
    name: 'BYD Dolphin',
    type: 'Hatch compacto',
    price: 'R$ 149.800',
    image: '/cars/byd-dolphin.png',
    description:
      'Hatch ágil e econômico, perfeito para o dia a dia na cidade, com bom porta-malas e recursos de conectividade a um preço acessível.',
  },
  {
    slug: 'seal',
    name: 'BYD Seal',
    type: 'Sedã esportivo',
    price: 'R$ 296.800',
    image: '/cars/byd-seal.png',
    description:
      'Sedã esportivo com design aerodinâmico, aceleração impressionante e plataforma e-Platform 3.0 que entrega dirigibilidade precisa e divertida.',
  },
  {
    slug: 'yuan',
    name: 'BYD Yuan Plus',
    type: 'SUV compacto',
    price: 'R$ 219.990',
    image: '/cars/byd-yuan.png',
    description:
      'SUV compacto versátil com posição de dirigir elevada, bom espaço interno e equipamentos de série completos para o uso urbano e viagens.',
  },
  {
    slug: 'dolphin-mini',
    name: 'BYD Dolphin Mini',
    type: 'Urbano elétrico',
    price: 'R$ 119.800',
    image: '/cars/byd-dolphin.png',
    description:
      'O elétrico mais acessível da linha: compacto, leve e econômico, feito para circular pela cidade com baixo custo de manutenção e recarga.',
  },
]

export default function CatalogoPage() {
  return (
    <section className="mx-auto max-w-6xl px-4 py-16 md:py-20">
      <div className="max-w-2xl text-left">
        <h1 className="text-[32px] font-bold leading-tight md:text-[40px]">
          Catálogo de modelos
        </h1>
        <p className="mt-4 text-base leading-relaxed text-muted-foreground">
          Explore toda a linha de veículos 100% elétricos BYD disponíveis em
          nossa concessionária.
        </p>
      </div>

      <ul className="mt-12 grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3">
        {cars.map((car) => (
          <li
            key={car.slug}
            className="flex flex-col overflow-hidden rounded-lg border border-border bg-card"
          >
            <div className="relative aspect-[4/3] bg-secondary">
              <Image
                src={car.image || '/placeholder.svg'}
                alt={`${car.name} — ${car.type}`}
                fill
                className="object-cover"
                sizes="(max-width: 768px) 100vw, 33vw"
              />
            </div>

            <div className="flex flex-1 flex-col p-6">
              {/* Nome do modelo */}
              <h2 className="text-[24px] font-semibold leading-tight">
                {car.name}
              </h2>
              <p className="mt-1 text-base text-muted-foreground">
                {car.type}
              </p>

              {/* Descrição do modelo */}
              <p className="mt-3 flex-1 text-base leading-relaxed text-foreground">
                {car.description}
              </p>

              {/* Valor alinhado à direita */}
              <p className="mt-6 text-right text-[20px] font-bold text-primary">
                {car.price}
              </p>
            </div>
          </li>
        ))}
      </ul>
    </section>
  )
}
