export default function DefesaTecnicaPage() {
  return (
    <article className="mx-auto max-w-3xl px-4 py-16 md:py-20">
      <header className="text-left">
        <h1 className="text-[32px] font-bold leading-tight md:text-[40px]">
          Defesa técnica de UX
        </h1>
        <p className="mt-4 text-base leading-relaxed text-muted-foreground">
          Justificativa das decisões de design, acessibilidade e usabilidade
          adotadas neste projeto.
        </p>
      </header>

      <div className="mt-12 space-y-12 text-left">
        {/* Cores e fadiga visual */}
        <section>
          <h2 className="text-[24px] font-semibold md:text-[28px]">
            1. Escolha de cores e fadiga visual
          </h2>
          <p className="mt-6 text-base leading-relaxed text-foreground">
            O fundo principal utiliza o tom de cinza escuro{' '}
            <code className="rounded bg-secondary px-1.5 py-0.5 text-primary">
              #1A1A1A
            </code>{' '}
            em vez do preto puro{' '}
            <code className="rounded bg-secondary px-1.5 py-0.5 text-primary">
              #000000
            </code>
            . Essa decisão é fundamentada no fenômeno de <em>halation</em>: em
            telas OLED e em ambientes de baixa luminosidade, o contraste extremo
            entre texto claro e preto absoluto provoca um efeito de borramento e
            cansaço ocular, sobretudo em leituras prolongadas. O cinza escuro
            reduz esse contraste agressivo, mantendo a leitura confortável sem
            comprometer a sensação de profundidade e sofisticação que a marca
            BYD exige.
          </p>
          <p className="mt-4 text-base leading-relaxed text-foreground">
            O dourado{' '}
            <code className="rounded bg-secondary px-1.5 py-0.5 text-primary">
              #E0B254
            </code>{' '}
            foi adotado como cor de destaque por carregar associações de
            sofisticação e tecnologia, sendo reservado a elementos de ação
            (botões, links e ênfases). O uso comedido do destaque cria uma
            hierarquia visual clara e evita a poluição cromática, respeitando o
            princípio de que a cor deve ser usada com propósito, e não como
            mero ornamento.
          </p>
        </section>

        {/* Contraste WCAG */}
        <section>
          <h2 className="text-[24px] font-semibold md:text-[28px]">
            2. Contraste e conformidade WCAG
          </h2>
          <p className="mt-6 text-base leading-relaxed text-foreground">
            Todas as combinações de cor seguem a diretriz WCAG 2.1, critério de
            sucesso 1.4.3 (Contraste Mínimo), que exige proporção de no mínimo{' '}
            <strong className="text-primary">4.5:1</strong> para texto normal. O
            texto claro{' '}
            <code className="rounded bg-secondary px-1.5 py-0.5 text-primary">
              #F2F2F2
            </code>{' '}
            sobre o fundo escuro atinge cerca de 14:1, enquanto o dourado de
            destaque sobre o mesmo fundo alcança aproximadamente 7.3:1 — ambos
            muito acima do mínimo exigido, contemplando inclusive o nível AAA
            para textos grandes. O texto secundário{' '}
            <code className="rounded bg-secondary px-1.5 py-0.5 text-primary">
              #B8B8B8
            </code>{' '}
            mantém cerca de 7:1, garantindo legibilidade para usuários com baixa
            visão.
          </p>
        </section>

        {/* Tipografia */}
        <section>
          <h2 className="text-[24px] font-semibold md:text-[28px]">
            3. Escala tipográfica
          </h2>
          <p className="mt-6 text-base leading-relaxed text-foreground">
            Foi adotada a fonte <strong>Poppins</strong>, uma sans-serif
            geométrica de alta legibilidade em telas, com excelente
            diferenciação entre caracteres. A escala segue uma hierarquia
            modular consistente:
          </p>
          <ul className="mt-4 space-y-2 pl-5 text-base leading-relaxed text-foreground [list-style:disc]">
            <li>
              <strong>H1 (32px – 40px):</strong> títulos de página, garantindo
              ponto focal imediato.
            </li>
            <li>
              <strong>H2 (24px – 28px):</strong> subtítulos de seção, criando
              ritmo de leitura e escaneabilidade.
            </li>
            <li>
              <strong>Corpo (mínimo de 16px):</strong> tamanho mínimo
              recomendado para leitura confortável, evitando que o usuário
              precise aplicar zoom.
            </li>
          </ul>
          <p className="mt-4 text-base leading-relaxed text-foreground">
            O espaçamento entre linhas (<em>line-height</em>) foi mantido entre
            1.4 e 1.6. Esse intervalo é o ideal apontado pela literatura de
            legibilidade: linhas muito próximas dificultam o rastreamento visual
            de uma linha para a outra, enquanto linhas muito afastadas quebram a
            percepção de bloco de texto. O valor adotado favorece o fluxo de
            leitura e atende ao critério WCAG 1.4.12 (Espaçamento de Texto).
          </p>
        </section>

        {/* Alinhamento à esquerda */}
        <section>
          <h2 className="text-[24px] font-semibold md:text-[28px]">
            4. Alinhamento à esquerda e legibilidade
          </h2>
          <p className="mt-6 text-base leading-relaxed text-foreground">
            Os parágrafos longos são estritamente alinhados à esquerda,
            evitando-se tanto a centralização quanto a justificação. O texto
            centralizado prejudica a leitura de blocos longos porque o olho
            precisa procurar o início de cada linha em uma posição diferente,
            quebrando o ritmo. Já o texto justificado, embora pareça organizado,
            cria os chamados <em>rios</em> — espaços irregulares entre palavras
            — que distraem e dificultam a leitura, problema especialmente
            crítico para pessoas com dislexia.
          </p>
          <p className="mt-4 text-base leading-relaxed text-foreground">
            O alinhamento à esquerda mantém uma margem inicial previsível para
            todas as linhas e um espaçamento uniforme entre palavras, sendo a
            recomendação consagrada para idiomas lidos da esquerda para a
            direita. Por isso, ele foi aplicado de forma consistente em todo o
            conteúdo textual descritivo das páginas.
          </p>
        </section>

        {/* Responsividade e navegação */}
        <section>
          <h2 className="text-[24px] font-semibold md:text-[28px]">
            5. Responsividade e navegação acessível
          </h2>
          <p className="mt-6 text-base leading-relaxed text-foreground">
            O layout foi construído com abordagem <em>mobile-first</em>,
            adaptando-se de forma fluida a celulares, tablets e desktops por
            meio de grades flexíveis. A navegação principal colapsa em um menu
            acessível em telas pequenas, com estados <code className="rounded bg-secondary px-1.5 py-0.5 text-primary">aria-expanded</code>{' '}
            e rótulos descritivos. Elementos interativos possuem foco visível
            (anel de foco dourado), atendendo ao critério WCAG 2.4.7 (Foco
            Visível), e os ícones decorativos são marcados com{' '}
            <code className="rounded bg-secondary px-1.5 py-0.5 text-primary">
              aria-hidden
            </code>{' '}
            para não poluir a experiência de leitores de tela. Imagens recebem
            texto alternativo significativo, garantindo equivalência textual ao
            conteúdo visual.
          </p>
        </section>
      </div>
    </article>
  )
}
