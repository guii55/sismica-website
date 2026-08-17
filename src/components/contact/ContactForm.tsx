"use client"

import { useState } from "react"
import { useForm, Controller } from "react-hook-form"
import { zodResolver } from "@hookform/resolvers/zod"
import { z } from "zod"
import { CircleCheck } from "lucide-react"

import { Label } from "@/components/ui/label"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import {
  Select,
  SelectTrigger,
  SelectValue,
  SelectContent,
  SelectItem,
} from "@/components/ui/select"
import { Button } from "@/components/ui/button"
import { WaveformDivider } from "@/components/instrument/Waveform"
import { services } from "@/lib/services"
import { contactLinks } from "@/lib/site-config"

const contactSchema = z.object({
  nome: z.string().min(2, "Informe seu nome."),
  empresa: z.string().optional(),
  telefone: z.string().min(8, "Informe um telefone válido."),
  email: z.string().email("Informe um e-mail válido."),
  tipoServico: z.string().min(1, "Selecione um serviço."),
  mensagem: z.string().min(10, "Conte um pouco mais sobre sua necessidade."),
})

type ContactFormValues = z.infer<typeof contactSchema>

const fieldClass = "h-11 rounded-lg"

export function ContactForm() {
  const [submitted, setSubmitted] = useState(false)

  const {
    register,
    handleSubmit,
    control,
    formState: { errors, isSubmitting },
  } = useForm<ContactFormValues>({
    resolver: zodResolver(contactSchema),
    mode: "onBlur",
    defaultValues: {
      nome: "",
      empresa: "",
      telefone: "",
      email: "",
      tipoServico: "",
      mensagem: "",
    },
  })

  function onSubmit(data: ContactFormValues) {
    // O envio por e-mail será conectado a um provedor (Resend/Formspree) quando
    // o cliente definir. Por ora, validamos e orientamos para os canais diretos.
    console.log("Contato (envio ainda não conectado):", data)
    setSubmitted(true)
  }

  if (submitted) {
    return (
      <div
        role="status"
        className="flex flex-col items-start gap-4 rounded-xl border border-primary/40 bg-surface p-8"
      >
        <WaveformDivider className="h-8 w-full" />
        <CircleCheck className="size-7 text-primary" strokeWidth={1.5} />
        <div>
          <h2 className="font-display text-lg font-medium text-foreground">
            Dados validados
          </h2>
          <p className="mt-2 max-w-md text-sm leading-relaxed text-muted-foreground">
            O envio automático por e-mail ainda não foi configurado. Para garantir o recebimento da
            sua mensagem agora, fale com a gente pelo WhatsApp ou por e-mail — respondemos em até
            24h úteis.
          </p>
        </div>
        <div className="flex flex-wrap gap-3">
          <Button
            nativeButton={false}
            render={<a href={contactLinks.whatsapp} target="_blank" rel="noopener noreferrer" />}
          >
            Falar no WhatsApp
          </Button>
          <Button
            variant="secondary"
            nativeButton={false}
            render={<a href={contactLinks.mailtoGeneral} />}
          >
            Enviar e-mail
          </Button>
        </div>
      </div>
    )
  }

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="space-y-6" noValidate>
      <div className="grid gap-6 sm:grid-cols-2">
        <div className="space-y-2">
          <Label htmlFor="nome">Nome</Label>
          <Input
            id="nome"
            className={fieldClass}
            autoComplete="name"
            aria-invalid={!!errors.nome}
            {...register("nome")}
          />
          {errors.nome && <p role="alert" className="text-sm text-destructive">{errors.nome.message}</p>}
        </div>

        <div className="space-y-2">
          <Label htmlFor="empresa">Empresa</Label>
          <Input
            id="empresa"
            className={fieldClass}
            autoComplete="organization"
            {...register("empresa")}
          />
        </div>

        <div className="space-y-2">
          <Label htmlFor="telefone">Telefone</Label>
          <Input
            id="telefone"
            className={fieldClass}
            autoComplete="tel"
            inputMode="tel"
            aria-invalid={!!errors.telefone}
            {...register("telefone")}
          />
          {errors.telefone && (
            <p role="alert" className="text-sm text-destructive">{errors.telefone.message}</p>
          )}
        </div>

        <div className="space-y-2">
          <Label htmlFor="email">E-mail</Label>
          <Input
            id="email"
            type="email"
            className={fieldClass}
            autoComplete="email"
            aria-invalid={!!errors.email}
            {...register("email")}
          />
          {errors.email && <p role="alert" className="text-sm text-destructive">{errors.email.message}</p>}
        </div>
      </div>

      <div className="space-y-2">
        <Label htmlFor="tipoServico">Tipo de serviço</Label>
        <Controller
          control={control}
          name="tipoServico"
          render={({ field }) => (
            <Select value={field.value} onValueChange={field.onChange}>
              <SelectTrigger
                id="tipoServico"
                className="h-11 w-full rounded-lg"
                aria-invalid={!!errors.tipoServico}
              >
                <SelectValue placeholder="Selecione um serviço" />
              </SelectTrigger>
              <SelectContent>
                {services.map((service) => (
                  <SelectItem key={service.id} value={service.id}>
                    {service.title}
                  </SelectItem>
                ))}
              </SelectContent>
            </Select>
          )}
        />
        {errors.tipoServico && (
          <p role="alert" className="text-sm text-destructive">{errors.tipoServico.message}</p>
        )}
      </div>

      <div className="space-y-2">
        <Label htmlFor="mensagem">Mensagem</Label>
        <Textarea
          id="mensagem"
          rows={5}
          className="rounded-lg"
          aria-invalid={!!errors.mensagem}
          {...register("mensagem")}
        />
        {errors.mensagem && (
          <p role="alert" className="text-sm text-destructive">{errors.mensagem.message}</p>
        )}
      </div>

      <div className="flex flex-wrap items-center gap-4 pt-1">
        <Button type="submit" size="lg" disabled={isSubmitting}>
          Enviar mensagem
        </Button>
        <span className="text-sm text-muted-foreground">
          ou{" "}
          <a
            href={contactLinks.whatsapp}
            target="_blank"
            rel="noopener noreferrer"
            className="text-primary underline-offset-4 hover:underline"
          >
            fale no WhatsApp
          </a>
        </span>
      </div>
    </form>
  )
}
