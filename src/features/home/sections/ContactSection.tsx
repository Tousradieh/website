import { Mail, MapPin, Phone, Send } from 'lucide-react'
import { useTranslation } from 'react-i18next'

import { Container } from '@/components/layout/Container'
import { Button } from '@/components/ui/Button'

export function ContactSection() {
  const { t } = useTranslation()

  const contactItems = [
    { key: 'phone', icon: Phone, href: 'tel:+982112345678' },
    { key: 'email', icon: Mail, href: 'mailto:info@tousradieh.com' },
    { key: 'address', icon: MapPin, href: undefined },
  ] as const

  return (
    <section id="contact" className="py-16 sm:py-20 lg:py-24">
      <Container>
        <div className="overflow-hidden rounded-3xl bg-gradient-to-br from-brand-700 to-brand-900 text-white shadow-xl">
          <div className="grid lg:grid-cols-2">
            <div className="p-8 sm:p-10 lg:p-12">
              <p className="text-sm font-semibold uppercase tracking-wider text-brand-200">
                {t('contact.label')}
              </p>
              <h2 className="mt-3 text-2xl font-bold sm:text-3xl">
                {t('contact.title')}
              </h2>
              <p className="mt-4 text-sm leading-relaxed text-brand-100 sm:text-base">
                {t('contact.description')}
              </p>

              <ul className="mt-8 space-y-4">
                {contactItems.map(({ key, icon: Icon, href }) => {
                  const content = (
                    <>
                      <span className="flex size-10 shrink-0 items-center justify-center rounded-xl bg-white/10">
                        <Icon className="size-5" aria-hidden />
                      </span>
                      <span className="text-sm sm:text-base">{t(`contact.${key}`)}</span>
                    </>
                  )

                  return (
                    <li key={key}>
                      {href ? (
                        <a
                          href={href}
                          className="flex items-center gap-3 transition-opacity hover:opacity-80"
                        >
                          {content}
                        </a>
                      ) : (
                        <div className="flex items-center gap-3">{content}</div>
                      )}
                    </li>
                  )
                })}
              </ul>
            </div>

            <div className="flex flex-col justify-center border-t border-white/10 bg-white/5 p-8 sm:p-10 lg:border-s lg:border-t-0 lg:p-12">
              <form
                className="space-y-4"
                onSubmit={(event) => event.preventDefault()}
              >
                <div>
                  <label htmlFor="name" className="sr-only">
                    Name
                  </label>
                  <input
                    id="name"
                    type="text"
                    placeholder={t('contact.cta')}
                    className="w-full rounded-xl border border-white/20 bg-white/10 px-4 py-3 text-sm text-white placeholder:text-brand-200 focus:border-accent-400 focus:outline-none sm:text-base"
                  />
                </div>
                <div>
                  <label htmlFor="email" className="sr-only">
                    Email
                  </label>
                  <input
                    id="email"
                    type="email"
                    placeholder={t('contact.email')}
                    className="w-full rounded-xl border border-white/20 bg-white/10 px-4 py-3 text-sm text-white placeholder:text-brand-200 focus:border-accent-400 focus:outline-none sm:text-base"
                  />
                </div>
                <div>
                  <label htmlFor="message" className="sr-only">
                    Message
                  </label>
                  <textarea
                    id="message"
                    rows={4}
                    placeholder={t('contact.description')}
                    className="w-full resize-none rounded-xl border border-white/20 bg-white/10 px-4 py-3 text-sm text-white placeholder:text-brand-200 focus:border-accent-400 focus:outline-none sm:text-base"
                  />
                </div>
                <Button
                  type="submit"
                  size="lg"
                  className="w-full bg-white text-brand-800 hover:bg-brand-50 sm:w-auto"
                >
                  <Send className="size-4" aria-hidden />
                  {t('contact.cta')}
                </Button>
              </form>
            </div>
          </div>
        </div>
      </Container>
    </section>
  )
}
