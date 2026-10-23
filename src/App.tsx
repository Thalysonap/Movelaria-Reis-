import { useEffect, useLayoutEffect, useMemo, useRef, useState } from 'react'
import gsap from 'gsap'
import { categories, environments, instagramUrl, mapsUrl, navigation, projects, steps, whatsappUrl, type Project, type ProjectCategory } from './content'

const Arrow = () => (
  <svg viewBox="0 0 24 24" aria-hidden="true"><path d="M5 12h13M13 6l6 6-6 6" /></svg>
)

const InstagramIcon = () => (
  <svg viewBox="0 0 24 24" aria-hidden="true"><rect x="3.5" y="3.5" width="17" height="17" rx="5" /><circle cx="12" cy="12" r="4" /><path d="M17.7 6.3h.01" /></svg>
)

const WhatsAppIcon = () => (
  <svg viewBox="0 0 24 24" aria-hidden="true"><path d="M20 11.6a8 8 0 0 1-11.8 7l-4.2 1.1 1.1-4A8 8 0 1 1 20 11.6Z" /><path d="M9 8.2c.2-.4.4-.4.7-.4h.5c.2 0 .4.1.5.4l.7 1.7c.1.3 0 .5-.2.7l-.6.7c.8 1.5 1.8 2.5 3.3 3.2l.7-.8c.2-.2.4-.3.7-.2l1.7.8c.3.1.4.3.4.6v.5c0 .3-.1.6-.4.8-.5.4-1.3.7-2.1.6-3.7-.5-7.2-3.8-7.8-7.5-.1-.4 0-.8.2-1.1Z" /></svg>
)

function App() {
  const rootRef = useRef<HTMLElement>(null)
  const dialogRef = useRef<HTMLElement>(null)
  const returnFocusRef = useRef<HTMLElement | null>(null)
  const [category, setCategory] = useState<ProjectCategory>('Todos')
  const [selectedProject, setSelectedProject] = useState<Project | null>(null)
  const [headerSolid, setHeaderSolid] = useState(false)

  const visibleProjects = useMemo(
    () => category === 'Todos' ? projects : projects.filter((project) => project.category === category),
    [category],
  )

  useEffect(() => {
    const updateHeader = () => setHeaderSolid(window.scrollY > 32)
    updateHeader()
    window.addEventListener('scroll', updateHeader, { passive: true })
    return () => window.removeEventListener('scroll', updateHeader)
  }, [])

  useEffect(() => {
    if (!selectedProject) return
    document.body.classList.add('dialog-open')
    const dialog = dialogRef.current
    dialog?.querySelector<HTMLElement>('button')?.focus()
    const onKeyDown = (event: KeyboardEvent) => {
      if (event.key === 'Escape') setSelectedProject(null)
      if (event.key !== 'Tab') return
      const focusable = Array.from(dialog?.querySelectorAll<HTMLElement>('button, a[href]') ?? [])
      if (!focusable.length) return
      const first = focusable[0]
      const last = focusable[focusable.length - 1]
      if (event.shiftKey && document.activeElement === first) { event.preventDefault(); last.focus() }
      if (!event.shiftKey && document.activeElement === last) { event.preventDefault(); first.focus() }
    }
    document.addEventListener('keydown', onKeyDown)
    return () => {
      document.body.classList.remove('dialog-open')
      document.removeEventListener('keydown', onKeyDown)
      returnFocusRef.current?.focus()
    }
  }, [selectedProject])

  useLayoutEffect(() => {
    const root = rootRef.current
    if (!root) return
    const context = gsap.context(() => {
      const media = gsap.matchMedia()
      media.add('(prefers-reduced-motion: no-preference)', () => {
        gsap.fromTo('.hero-content > *', { opacity: 0, y: 30 }, { opacity: 1, y: 0, duration: 1, stagger: 0.09, ease: 'expo.out', delay: 0.15 })
      })
      return () => media.revert()
    }, root)
    return () => context.revert()
  }, [])

  const openProject = (project: Project, trigger: HTMLElement) => {
    returnFocusRef.current = trigger
    setSelectedProject(project)
  }

  const chooseEnvironment = (nextCategory: ProjectCategory) => {
    setCategory(nextCategory)
    document.getElementById('projetos')?.scrollIntoView({ behavior: window.matchMedia('(prefers-reduced-motion: reduce)').matches ? 'auto' : 'smooth' })
  }

  return (
    <main ref={rootRef} className="site-shell">
      <a className="skip-link" href="#conteudo">Pular para o conteúdo</a>

      <header className={`site-header ${headerSolid ? 'is-solid' : ''}`}>
        <a className="brand" href="#inicio" aria-label="Movelaria Reis — início"><img className="brand-symbol" src="/assets/movelaria-reis-symbol.png" alt="" width="454" height="513" /><span className="brand-name">Movelaria Reis</span></a>
        <a className="header-cta" href={whatsappUrl} target="_blank" rel="noreferrer">Pedir orçamento <Arrow /></a>
      </header>

      <section id="inicio" className="hero" aria-labelledby="hero-title">
        <img className="hero-image" src="/assets/sala-planejada-autoral.png" alt="Sala conceitual com marcenaria planejada em madeira e verde profundo." fetchPriority="high" />
        <div className="hero-overlay" aria-hidden="true" />
        <div className="hero-content">
          <h1 id="hero-title">Seu espaço.<br /><em>Do seu jeito.</em></h1>
          <p className="hero-copy">Móveis planejados para transformar a rotina em ambientes que acolhem, organizam e têm a sua identidade.</p>
          <div className="hero-actions"><a className="button button-light" href={whatsappUrl} target="_blank" rel="noreferrer">Começar um projeto <Arrow /></a><a className="quiet-link" href="#projetos">Ver ambientes</a></div>
        </div>
        <p className="hero-caption">Imagem conceitual · Sala planejada</p>
        <a className="scroll-cue" href="#conteudo"><span>Descubra</span><i aria-hidden="true" /></a>
      </section>

      <section id="conteudo" className="brand-statement" aria-labelledby="brand-statement-title">
        <h2 id="brand-statement-title">Móveis pensados <em>para o seu jeito de viver.</em></h2>
        <p>Movelaria Reis · Projetos planejados</p>
      </section>

      <section id="ambientes" className="environments" aria-labelledby="environments-title">
        <div className="section-intro"><h2 id="environments-title">Pensado para cada<br /><em>momento da casa.</em></h2><p>Explore possibilidades para ambientes que pedem mais organização, presença e aconchego.</p></div>
        <div className="environment-list">
          {environments.map((environment) => (
            <button className="environment-row" type="button" onClick={() => chooseEnvironment(environment.title)} key={environment.title}>
              <div><h3>{environment.title}</h3><p>{environment.copy}</p></div>
              <div className="environment-thumb"><img src={environment.image} alt="" loading="lazy" /></div><span className="round-arrow"><Arrow /></span>
            </button>
          ))}
        </div>
      </section>

      <section id="projetos" className="projects" aria-labelledby="projects-title">
        <div className="projects-heading"><h2 id="projects-title">Ambientes que contam<br /><em>histórias reais.</em></h2><p>Referências visuais para imaginar novas combinações. Imagens conceituais estão identificadas.</p></div>
        <div className="project-tabs" aria-label="Filtrar projetos por ambiente">
          {categories.map((item) => <button key={item} type="button" aria-pressed={category === item} aria-controls="project-list" onClick={() => setCategory(item)}>{item}</button>)}
        </div>
        <div id="project-list" className="project-grid" aria-live="polite">
          {visibleProjects.map((project, index) => (
            <figure className={`project-card project-card-${(index % 3) + 1}`} key={project.title}>
              <button type="button" onClick={(event) => openProject(project, event.currentTarget)} aria-label={`Ampliar ${project.title}`}>
                <span className="project-image-wrap"><img src={project.image} alt={project.alt} loading={index < 2 ? 'eager' : 'lazy'} /></span><span className="project-view">Ver projeto <Arrow /></span>
              </button>
              <figcaption><div><h3>{project.title}</h3><p>{project.category}</p></div><span>{project.note}</span></figcaption>
            </figure>
          ))}
        </div>
      </section>

      <section id="processo" className="process" aria-labelledby="process-title">
        <div className="process-image"><img src="/assets/armario-verde-detalhe.jpg" alt="Detalhe de armário verde planejado com nichos iluminados." loading="lazy" /></div>
        <div className="process-content">
          <div>
            <h2 id="process-title">Ele muda a forma<br /><em>como a casa é vivida.</em></h2>
            <p className="process-belief">A conversa começa por você. Rotina, proporção e personalidade orientam cada escolha.</p>
            <p className="process-lead">Três pontos simples ajudam a apresentar seu ambiente e iniciar o contato.</p>
          </div>
          <ol>{steps.map((step) => <li key={step.number}><span>{step.number}</span><div><h3>{step.title}</h3><p>{step.copy}</p></div></li>)}</ol>
        </div>
      </section>

      <section id="localizacao" className="location" aria-labelledby="location-title">
        <div className="location-copy">
          <h2 id="location-title">Feito em Ubá.<br /><em>Pensado para você.</em></h2>
          <p>A Movelaria Reis está em Ubá, Minas Gerais. Fale com a gente pelo WhatsApp para consultar atendimento e iniciar seu projeto.</p>
          <div className="location-actions"><a className="button button-dark" href={whatsappUrl} target="_blank" rel="noreferrer">Falar com a Movelaria <Arrow /></a><a className="quiet-link dark" href={mapsUrl} target="_blank" rel="noreferrer">Abrir no Google Maps</a></div>
        </div>
        <div className="map-wrap">
          <div className="map-fallback" aria-hidden="true">
            {[1, 2, 3, 4, 5, 6, 7, 8, 9].map((tile) => <img key={tile} src={`/assets/mapa-uba-${tile}.png`} alt="" />)}
          </div>
          <iframe title="Mapa da Movelaria Reis em Ubá, Minas Gerais" src="https://www.google.com/maps?q=-21.1182957%2C-42.9426853&amp;z=17&amp;output=embed" loading="lazy" referrerPolicy="no-referrer-when-downgrade" />
          <span className="map-pin" aria-hidden="true"><i /></span>
          <div className="map-label"><strong>Movelaria Reis</strong><span>Localização exata · Ubá, MG</span></div><span className="map-credit">Mapa de apoio: © OpenStreetMap contributors</span>
        </div>
      </section>

      <section className="closing" aria-labelledby="closing-title">
        <div className="closing-media"><img src="/assets/cozinha-planejada-autoral.png" alt="Cozinha planejada em madeira e verde." loading="lazy" /></div><div className="closing-overlay" aria-hidden="true" />
        <div className="closing-content"><h2 id="closing-title">Vamos planejar<br /><em>o seu espaço?</em></h2><p>Conte sua ideia. A conversa pode começar pelo WhatsApp.</p><a className="button button-light" href={whatsappUrl} target="_blank" rel="noreferrer">Solicitar orçamento <Arrow /></a></div>
      </section>

      <footer id="contato" className="site-footer">
        <div className="footer-identity">
          <a className="footer-brand" href="#inicio" aria-label="Movelaria Reis — voltar ao início"><img className="footer-logo" src="/assets/movelaria-reis-logo-dark.png" alt="" width="1190" height="809" /></a>
          <p>Móveis planejados e soluções personalizadas para transformar seus ambientes.</p>
        </div>

        <div className="footer-column">
          <h2>Navegação</h2>
          <nav aria-label="Navegação do rodapé">{navigation.map((item) => <a key={item.href} href={item.href}>{item.label}</a>)}</nav>
        </div>

        <div className="footer-column footer-contact">
          <h2>Contato</h2>
          <ul>
            <li><span>Instagram</span><a href={instagramUrl} target="_blank" rel="noreferrer">@movelariareisuba</a></li>
            <li><span>Telefone/WhatsApp</span><a href={whatsappUrl} target="_blank" rel="noreferrer">(32) 98808-5566</a></li>
            <li><span>Localização</span><a href={mapsUrl} target="_blank" rel="noreferrer">Ubá e região</a></li>
          </ul>
          <div className="footer-social" aria-label="Redes sociais">
            <a href={instagramUrl} target="_blank" rel="noreferrer" aria-label="Abrir Instagram da Movelaria Reis"><InstagramIcon /></a>
            <a href={whatsappUrl} target="_blank" rel="noreferrer" aria-label="Conversar com a Movelaria Reis pelo WhatsApp"><WhatsAppIcon /></a>
          </div>
        </div>

        <div className="footer-bottom"><p>© 2026 Movelaria Reis. Todos os direitos reservados.</p><p>Desenvolvido com cuidado para Movelaria Reis.</p></div>
      </footer>

      {selectedProject && (
        <div className="dialog-backdrop" role="presentation" onMouseDown={() => setSelectedProject(null)}>
          <section className="project-dialog" ref={dialogRef} role="dialog" aria-modal="true" aria-labelledby="dialog-title" onMouseDown={(event) => event.stopPropagation()}>
            <button className="dialog-close" type="button" onClick={() => setSelectedProject(null)}>Fechar <span aria-hidden="true">×</span></button><div className="dialog-image"><img src={selectedProject.image} alt={selectedProject.alt} /></div>
            <div className="dialog-copy"><p>{selectedProject.category} · {selectedProject.note}</p><h2 id="dialog-title">{selectedProject.title}</h2><a href={whatsappUrl} target="_blank" rel="noreferrer">Quero planejar um ambiente assim <Arrow /></a></div>
          </section>
        </div>
      )}
    </main>
  )
}

export default App
