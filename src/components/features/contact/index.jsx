"use client";;
import { zodResolver } from "@hookform/resolvers/zod";
import { LoaderIcon, MailIcon, MessageCircle } from "lucide-react";
import { useState } from "react";
import { Controller, useForm } from "react-hook-form";
import { z } from "zod";

import { Button } from "@/components/ui/button";
import {
  Field,
  FieldError,
  FieldGroup,
  FieldLabel,
} from "@/components/ui/field";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";

import { cn } from "@/lib/utils";

const defaultProps = {
  title: "Vamos conversar?",
  description: "Tire suas dúvidas, peça informações ou simplesmente diga oi. Respondemos rapidinho!",
  phone: "+55 11 99955-6612",
  email: "Nosotras.empresarial@gmail.com",
  instagram: {
    label: "@nosotras_espanhol",
    url: "https://www.instagram.com/nosotras_espanhol",
  },
  whatsappText: "Prefere falar direto com a gente? Manda um WhatsApp! Respondemos em até algumas horas durante o horário comercial.",
  whatsappLabel: "Chamar no WhatsApp",
  whatsappUrl: "https://wa.me/5511999556612",
  formSubheading: "Envie uma mensagem e respondemos em breve.",
  formHeading: "Envie uma mensagem",
  successMessage: "Obrigado! Sua mensagem foi enviada com sucesso.",
  submitLabel: "Enviar mensagem",
  submittingLabel: "Enviando…",
};

const contactFormSchema = z.object({
  firstName: z.string().min(1, "O nome é obrigatório"),
  lastName: z.string().min(1, "O sobrenome é obrigatório"),
  email: z
    .string()
    .min(1, "O e-mail é obrigatório")
    .email("Informe um e-mail válido"),
  phone: z.string().min(1, "O telefone é obrigatório"),
  subject: z.string().min(1, "O idioma de interesse é obrigatório"),
  message: z.string().min(1, "A mensagem é obrigatória"),
});

const ContactPage = (props) => {
  const {
    title,
    description,
    phone,
    email,
    instagram,
    whatsappText,
    whatsappLabel,
    whatsappUrl,
    formHeading,
    formSubheading,
    successMessage,
    submitLabel,
    submittingLabel,
    className,
    onSubmit,
  } = { ...defaultProps, ...props };

  const [isSubmitted, setIsSubmitted] = useState(false);
  const [showSuccess, setShowSuccess] = useState(false);

  const form = useForm({
    resolver: zodResolver(contactFormSchema),
    mode: "onSubmit",
    reValidateMode: "onSubmit",
    defaultValues: {
      firstName: "",
      lastName: "",
      email: "",
      phone: "",
      subject: "",
      message: "",
    },
  });

  const handleFormSubmit = async (data) => {
    try {
      if (onSubmit) {
        await onSubmit(data);
      } else {
        console.log("Form submitted:", data);
        await new Promise((resolve) => setTimeout(resolve, 1000));
      }
      setIsSubmitted(true);
      setShowSuccess(true);
      form.reset();
      setTimeout(() => setShowSuccess(false), 4500);
      setTimeout(() => setIsSubmitted(false), 5000);
    } catch {
      form.setError("root", {
        message: "Something went wrong. Please try again.",
      });
    }
  };

  return (
    <section className={cn("py-32", className)} id="contato">
      <div className="container mx-auto">
        <div className="flex flex-col gap-16 lg:flex-row lg:gap-24">
          <div className="flex flex-1 flex-col gap-10">
            <div className="flex flex-col gap-4">
              <h1
                className="text-4xl font-semibold tracking-tight text-pretty md:text-5xl lg:text-6xl">
                {title}
              </h1>
              <p className="text-muted-foreground lg:text-xl lg:text-balance">
                {description}
              </p>
            </div>
            <div className="flex flex-col gap-6">
              <a href={`https://wa.me/5511999556612`} className="group flex items-center gap-3">
                <MessageCircle className="size-5 text-muted-foreground" />
                <span className="group-hover:underline">{phone}</span>
              </a>
              <a href={`mailto:${email}`} className="group flex items-center gap-3">
                <MailIcon className="size-5 text-muted-foreground" />
                <span className="group-hover:underline">{email}</span>
              </a>
              <a
                href={instagram.url}
                target="_blank"
                rel="noreferrer"
                aria-label={`${instagram.label} (abre em nova aba)`}
                className="group flex items-center gap-3">
                <svg
                  aria-hidden="true"
                  className="size-5 text-muted-foreground"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path d="M7.03 2h9.94A5.03 5.03 0 0 1 22 7.03v9.94A5.03 5.03 0 0 1 16.97 22H7.03A5.03 5.03 0 0 1 2 16.97V7.03A5.03 5.03 0 0 1 7.03 2Zm0 2A3.03 3.03 0 0 0 4 7.03v9.94A3.03 3.03 0 0 0 7.03 20h9.94A3.03 3.03 0 0 0 20 16.97V7.03A3.03 3.03 0 0 0 16.97 4H7.03Zm9.75 1.5a1.25 1.25 0 1 1 0 2.5 1.25 1.25 0 0 1 0-2.5ZM12 7a5 5 0 1 1 0 10 5 5 0 0 1 0-10Zm0 2a3 3 0 1 0 0 6 3 3 0 0 0 0-6Z" />
                </svg>
                <span className="group-hover:underline">{instagram.label}</span>
              </a>
            </div>

            <div className="rounded-2xl border border-border/60 bg-background/70 p-6 shadow-sm">
              <p className="text-sm font-medium text-foreground">{whatsappText}</p>
              <a
                href={whatsappUrl}
                target="_blank"
                rel="noreferrer"
                className="mt-4 inline-flex items-center gap-2 rounded-full bg-primary px-5 py-3 text-sm font-medium text-primary-foreground transition-colors hover:bg-primary/90"
              >
                <MessageCircle className="size-4" />
                {whatsappLabel}
              </a>
            </div>
          </div>
          <div className="flex-1">
            <form
              onSubmit={form.handleSubmit(handleFormSubmit)}
              className="flex flex-col gap-6 rounded-xl bg-muted/50 p-8 md:p-10">
              <div className="flex flex-col gap-1">
                <h2 className="text-xl font-semibold tracking-tight text-balance">
                  {formHeading}
                </h2>
                <p className="text-sm text-muted-foreground">
                  {formSubheading}
                </p>
              </div>
              {isSubmitted && (
                <div
                  role="status"
                  aria-live="polite"
                  className={cn(
                    "rounded-lg border border-green-500/20 bg-green-500/10 p-4 text-center transition-opacity duration-500",
                    showSuccess ? "opacity-100" : "opacity-0"
                  )}>
                  <p className="text-sm font-medium text-green-600 dark:text-green-400">
                    {successMessage}
                  </p>
                </div>
              )}
              <FieldGroup className="gap-6">
                <div className="grid gap-4 sm:grid-cols-2">
                  <Controller
                    control={form.control}
                    name="firstName"
                    render={({ field, fieldState }) => (
                      <Field data-invalid={fieldState.invalid}>
                        <FieldLabel htmlFor={field.name}>
                          Nome <span className="text-destructive">*</span>
                        </FieldLabel>
                        <Input
                          {...field}
                          id={field.name}
                          aria-invalid={fieldState.invalid}
                          placeholder="Seu nome"
                          className="bg-background" />
                        {fieldState.invalid && (
                          <FieldError errors={[fieldState.error]} />
                        )}
                      </Field>
                    )} />
                  <Controller
                    control={form.control}
                    name="lastName"
                    render={({ field, fieldState }) => (
                      <Field data-invalid={fieldState.invalid}>
                        <FieldLabel htmlFor={field.name}>
                          Sobrenome <span className="text-destructive">*</span>
                        </FieldLabel>
                        <Input
                          {...field}
                          id={field.name}
                          aria-invalid={fieldState.invalid}
                          placeholder="Seu sobrenome"
                          className="bg-background" />
                        {fieldState.invalid && (
                          <FieldError errors={[fieldState.error]} />
                        )}
                      </Field>
                    )} />
                </div>
                <Controller
                  control={form.control}
                  name="email"
                  render={({ field, fieldState }) => (
                    <Field data-invalid={fieldState.invalid}>
                      <FieldLabel htmlFor={field.name}>
                        E-mail <span className="text-destructive">*</span>
                      </FieldLabel>
                      <Input
                        {...field}
                        id={field.name}
                        type="email"
                        aria-invalid={fieldState.invalid}
                        placeholder="seu@email.com"
                        className="bg-background" />
                      {fieldState.invalid && (
                        <FieldError errors={[fieldState.error]} />
                      )}
                    </Field>
                  )} />
                <Controller
                  control={form.control}
                  name="phone"
                  render={({ field, fieldState }) => (
                    <Field data-invalid={fieldState.invalid}>
                      <FieldLabel htmlFor={field.name}>
                        Telefone / WhatsApp <span className="text-destructive">*</span>
                      </FieldLabel>
                      <Input
                        {...field}
                        id={field.name}
                        aria-invalid={fieldState.invalid}
                        placeholder="(11) 99999-9999"
                        className="bg-background" />
                      {fieldState.invalid && (
                        <FieldError errors={[fieldState.error]} />
                      )}
                    </Field>
                  )} />
                <Controller
                  control={form.control}
                  name="subject"
                  render={({ field, fieldState }) => (
                    <Field data-invalid={fieldState.invalid}>
                      <FieldLabel htmlFor={field.name}>
                        Idioma de interesse <span className="text-destructive">*</span>
                      </FieldLabel>
                      <Input
                        {...field}
                        id={field.name}
                        aria-invalid={fieldState.invalid}
                        placeholder="Inglês, Espanhol, Ambos..."
                        className="bg-background" />
                      {fieldState.invalid && (
                        <FieldError errors={[fieldState.error]} />
                      )}
                    </Field>
                  )} />
                <Controller
                  control={form.control}
                  name="message"
                  render={({ field, fieldState }) => (
                    <Field data-invalid={fieldState.invalid}>
                      <FieldLabel htmlFor={field.name}>
                        Mensagem <span className="text-destructive">*</span>
                      </FieldLabel>
                      <Textarea
                        {...field}
                        id={field.name}
                        aria-invalid={fieldState.invalid}
                        placeholder="Escreva sua dúvida ou interesse…"
                        rows={4}
                        className="bg-background" />
                      {fieldState.invalid && (
                        <FieldError errors={[fieldState.error]} />
                      )}
                    </Field>
                  )} />
                {form.formState.errors.root && (
                  <p className="text-sm text-destructive">
                    {form.formState.errors.root.message}
                  </p>
                )}
                <Button size="lg" className="w-full" disabled={form.formState.isSubmitting}>
                  {form.formState.isSubmitting ? (
                    <LoaderIcon className="size-4 animate-spin" aria-hidden />
                  ) : null}
                  {form.formState.isSubmitting ? submittingLabel : submitLabel}
                </Button>
              </FieldGroup>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export { ContactPage };
