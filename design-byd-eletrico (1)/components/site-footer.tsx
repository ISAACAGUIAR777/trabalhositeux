import Link from 'next/link'

export function SiteFooter() {
  return (
    <footer className="border-t border-border bg-background">
      <div className="mx-auto max-w-6xl px-4 py-10">
        <div className="flex flex-col gap-8 md:flex-row md:items-start md:justify-between">
          <div className="text-left">
            <p className="text-2xl font-bold text-primary">BYD</p>
            {/* Texto menor: 13px, dentro da faixa 12-14px */}
            <p className="mt-2 max-w-xs text-[13px] leading-relaxed text-muted-foreground">
              Build Your Dreams. Concessionária oficial de veículos 100%
              elétricos. Tecnologia, sustentabilidade e desempenho.
            </p>
          </div>

          <nav aria-label="Links do rodapé" className="text-left">
            <h3 className="mb-3 text-sm font-semibold text-foreground">
              Navegação
            </h3>
            <ul className="space-y-2 text-[13px] text-muted-foreground">
              <li>
                <Link href="/" className="hover:text-primary">
                  Início
                </Link>
              </li>
              <li>
                <Link href="/catalogo" className="hover:text-primary">
                  Catálogo
                </Link>
              </li>
              <li>
                <Link href="/sobre" className="hover:text-primary">
                  Sobre a Marca
                </Link>
              </li>
              <li>
                <Link href="/contato" className="hover:text-primary">
                  Contato
                </Link>
              </li>
            </ul>
          </nav>
        </div>

        <div className="mt-8 border-t border-border pt-6">
          <p className="text-[12px] leading-relaxed text-muted-foreground">
            &copy; {new Date().getFullYear()} BYD Concessionária. Todos os
            direitos reservados. Imagens meramente ilustrativas.
          </p>
        </div>
      </div>
    </footer>
  )
}
