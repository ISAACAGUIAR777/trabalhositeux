'use client'

import { useState } from 'react'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { Textarea } from '@/components/ui/textarea'
import { Label } from '@/components/ui/label'

const modelos = [
  'BYD Han',
  'BYD Tang',
  'BYD Dolphin',
  'BYD Seal',
  'BYD Yuan Plus',
  'BYD Dolphin Mini',
]

export function TestDriveForm() {
  const [enviado, setEnviado] = useState(false)

  function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault()
    setEnviado(true)
  }

  if (enviado) {
    return (
      <div
        className="rounded-lg border border-primary/40 bg-card p-8 text-left"
        role="status"
      >
        <h2 className="text-[24px] font-semibold text-primary">
          Solicitação enviada!
        </h2>
        <p className="mt-3 text-base leading-relaxed text-foreground">
          Obrigado pelo interesse. Em breve nossa equipe entrará em contato para
          confirmar o seu test-drive.
        </p>
        <Button
          className="mt-6 bg-primary text-primary-foreground hover:bg-primary/90"
          onClick={() => setEnviado(false)}
        >
          Enviar nova solicitação
        </Button>
      </div>
    )
  }

  return (
    <form
      onSubmit={handleSubmit}
      className="rounded-lg border border-border bg-card p-6 text-left md:p-8"
    >
      <div className="grid gap-5">
        <div className="grid gap-2">
          <Label htmlFor="nome">Nome completo</Label>
          <Input id="nome" name="nome" required placeholder="Seu nome" />
        </div>

        <div className="grid gap-2 sm:grid-cols-2 sm:gap-4">
          <div className="grid gap-2">
            <Label htmlFor="email">E-mail</Label>
            <Input
              id="email"
              name="email"
              type="email"
              required
              placeholder="voce@email.com"
            />
          </div>
          <div className="grid gap-2">
            <Label htmlFor="telefone">Telefone</Label>
            <Input
              id="telefone"
              name="telefone"
              type="tel"
              required
              placeholder="(11) 90000-0000"
            />
          </div>
        </div>

        <div className="grid gap-2 sm:grid-cols-2 sm:gap-4">
          <div className="grid gap-2">
            <Label htmlFor="modelo">Modelo de interesse</Label>
            <select
              id="modelo"
              name="modelo"
              required
              defaultValue=""
              className="h-9 rounded-md border border-input bg-input/30 px-3 text-base text-foreground focus-visible:border-ring focus-visible:ring-[3px] focus-visible:ring-ring/50 focus-visible:outline-none"
            >
              <option value="" disabled>
                Selecione um modelo
              </option>
              {modelos.map((m) => (
                <option key={m} value={m}>
                  {m}
                </option>
              ))}
            </select>
          </div>
          <div className="grid gap-2">
            <Label htmlFor="data">Data preferida</Label>
            <Input id="data" name="data" type="date" required />
          </div>
        </div>

        <div className="grid gap-2">
          <Label htmlFor="mensagem">Mensagem (opcional)</Label>
          <Textarea
            id="mensagem"
            name="mensagem"
            rows={4}
            placeholder="Conte-nos mais sobre o que procura"
          />
        </div>

        <Button
          type="submit"
          size="lg"
          className="bg-primary text-primary-foreground hover:bg-primary/90"
        >
          Agendar test-drive
        </Button>
      </div>
    </form>
  )
}
