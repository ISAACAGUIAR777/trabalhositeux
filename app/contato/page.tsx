import { MapPin, Phone, Mail, Clock } from 'lucide-react'
import { TestDriveForm } from '@/components/test-drive-form'

export default function ContatoPage() {
  return (
    <section className="mx-auto max-w-6xl px-4 py-16 md:py-20">
      <div className="max-w-2xl text-left">
        <h1 className="text-[32px] font-bold leading-tight md:text-[40px]">
          Agende seu test-drive
        </h1>
        <p className="mt-4 text-base leading-relaxed text-muted-foreground">
          Preencha o formulário abaixo e nossa equipe entrará em contato para
          confirmar o melhor horário para você experimentar um BYD.
        </p>
      </div>

      <div className="mt-12 grid grid-cols-1 gap-12 lg:grid-cols-2">
        {/* Formulário */}
        <TestDriveForm />

        {/* Informações */}
        <div className="text-left">
          <h2 className="text-[24px] font-semibold md:text-[28px]">
            Nossa loja
          </h2>
          <ul className="mt-6 space-y-5">
            <li className="flex items-start gap-3">
              <MapPin className="mt-0.5 shrink-0 text-primary" size={20} aria-hidden="true" />
              <span className="text-base leading-relaxed text-foreground">
                Brasília, DF
                <br />
                CEP 70000-0
              </span>
            </li>
            <li className="flex items-start gap-3">
              <Phone className="mt-0.5 shrink-0 text-primary" size={20} aria-hidden="true" />
              <a
                href="tel:+556130000000"
                className="text-base leading-relaxed text-foreground hover:text-primary"
              >
                (61) 3000-0000
              </a>
            </li>
            <li className="flex items-start gap-3">
              <Mail className="mt-0.5 shrink-0 text-primary" size={20} aria-hidden="true" />
              <a
                href="mailto:bydbyd@bydbyd"
                className="text-base leading-relaxed text-foreground hover:text-primary"
              >
                bydbyd@bydbyd
              </a>
            </li>
            <li className="flex items-start gap-3">
              <Clock className="mt-0.5 shrink-0 text-primary" size={20} aria-hidden="true" />
              <span className="text-base leading-relaxed text-foreground">
                Segunda a sábado, das 9h às 19h
              </span>
            </li>
          </ul>
        </div>
      </div>
    </section>
  )
}
