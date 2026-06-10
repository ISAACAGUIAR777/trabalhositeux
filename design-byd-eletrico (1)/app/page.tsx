import Link from 'next/link'
import Image from 'next/image'
import { Button } from '@/components/ui/button'

export default function HomePage() {
  return (
    <div>
      {/* Banner principal */}
      <section className="relative overflow-hidden border-b border-border">
        <div className="absolute inset-0">
          <Image
            src="/cars/hero-byd.png"
            alt="Carro elétrico BYD em destaque"
            fill
            priority
            className="object-cover opacity-40"
          />
          <div className="absolute inset-0 bg-background/60" />
        </div>

        <div className="relative mx-auto flex max-w-6xl flex-col items-center px-4 py-28 text-center md:py-40">
          {/* H1: 40px no desktop, dentro da faixa 32-40px */}
          <h1 className="text-balance text-[32px] font-bold leading-tight md:text-[40px]">
            O futuro da mobilidade é{' '}
            <span className="text-primary">100% elétrico</span>
          </h1>
          <p className="mt-4 max-w-xl text-pretty text-base leading-relaxed text-muted-foreground">
            Conheça a linha completa de veículos BYD e descubra um novo jeito de
            dirigir: silencioso, sustentável e cheio de tecnologia.
          </p>
          <Button
            asChild
            size="lg"
            className="mt-8 bg-primary text-primary-foreground hover:bg-primary/90"
          >
            <Link href="/catalogo">Explorar</Link>
          </Button>
        </div>
      </section>

      {/* Seção de boas-vindas — texto alinhado à esquerda */}
      <section className="mx-auto max-w-6xl px-4 py-16 md:py-24">
        <div className="max-w-3xl text-left">
          {/* H2: 28px no desktop, dentro da faixa 24-28px */}
          <h2 className="text-[24px] font-semibold md:text-[28px]">
            Bem-vindo à concessionária BYD
          </h2>
          <p className="mt-6 text-base leading-relaxed text-foreground">
            A BYD — sigla para <em>Build Your Dreams</em> — é a maior fabricante
            de veículos elétricos do mundo. Em nossa concessionária, você
            encontra modelos para todos os perfis: do compacto urbano ideal para
            o dia a dia na cidade aos SUVs espaçosos e sedãs de alto desempenho.
          </p>
          <p className="mt-4 text-base leading-relaxed text-foreground">
            Cada veículo é equipado com a exclusiva Blade Battery, reconhecida
            por sua segurança e durabilidade. Nossa equipe está pronta para
            apresentar a tecnologia, explicar as opções de recarga e acompanhar
            você em um test-drive sem compromisso. Venha viver a experiência de
            dirigir o futuro.
          </p>
        </div>
      </section>
    </div>
  )
}
