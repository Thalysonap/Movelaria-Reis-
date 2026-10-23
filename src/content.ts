export const instagramUrl = 'https://www.instagram.com/movelariareisuba/'
export const whatsappUrl = 'https://wa.me/5532988085566'
export const mapsUrl = 'https://maps.app.goo.gl/Kp2EEEhSHP4NGmGd6'

export const navigation = [
  { label: 'Início', href: '#inicio' },
  { label: 'Sobre nós', href: '#conteudo' },
  { label: 'Serviços', href: '#ambientes' },
  { label: 'Projetos', href: '#projetos' },
  { label: 'Contato', href: '#contato' },
] as const

export type ProjectCategory = 'Todos' | 'Cozinhas' | 'Salas' | 'Quartos' | 'Banheiros'

export type Project = {
  title: string
  category: Exclude<ProjectCategory, 'Todos'>
  image: string
  alt: string
  note: string
  generated?: boolean
}

export const categories: ProjectCategory[] = ['Todos', 'Cozinhas', 'Salas', 'Quartos', 'Banheiros']

export const projects: Project[] = [
  { title: 'Cozinha para viver junto', category: 'Cozinhas', image: '/assets/cozinha-planejada-autoral.png', alt: 'Cozinha planejada verde e madeira com ilha central e nichos iluminados.', note: 'Imagem conceitual', generated: true },
  { title: 'Sala emoldurada pela madeira', category: 'Salas', image: '/assets/sala-planejada-autoral.png', alt: 'Sala com painel planejado em madeira e verde profundo, nichos e iluminação quente.', note: 'Imagem conceitual', generated: true },
  { title: 'Trabalho e descanso', category: 'Quartos', image: '/assets/home-office-planejado-autoral.png', alt: 'Quarto com home office integrado, armário claro e marcenaria em madeira.', note: 'Imagem conceitual', generated: true },
  { title: 'Cristaleira e refeições', category: 'Cozinhas', image: '/assets/cristaleira-verde-refeicoes.jpg', alt: 'Cristaleira verde com portas de vidro e mesa de refeições à frente.', note: 'Registro do acervo' },
  { title: 'Painel e estantes', category: 'Salas', image: '/assets/painel-tv-estantes.jpg', alt: 'Painel claro de televisão com estantes e armários inferiores.', note: 'Registro do acervo' },
  { title: 'Gabinete essencial', category: 'Banheiros', image: '/assets/gabinete-banheiro.jpg', alt: 'Gabinete claro de banheiro com bancada em tom de madeira e cuba branca.', note: 'Registro do acervo' },
]

export const environments = [
  { title: 'Cozinhas', copy: 'Lugar de encontro, rotina e boas conversas.', image: '/assets/cozinha-planejada-autoral.png' },
  { title: 'Salas', copy: 'Organização que acolhe sem perder a leveza.', image: '/assets/sala-planejada-autoral.png' },
  { title: 'Quartos', copy: 'Soluções que combinam descanso e praticidade.', image: '/assets/home-office-planejado-autoral.png' },
  { title: 'Banheiros', copy: 'Cada centímetro pensado com simplicidade.', image: '/assets/gabinete-banheiro.jpg' },
] as const

export const steps = [
  { number: '01', title: 'Conte sua ideia', copy: 'Mostre qual ambiente você deseja planejar e o que precisa fazer parte dele.' },
  { number: '02', title: 'Compartilhe referências', copy: 'Imagens e inspirações ajudam a tornar a conversa mais clara desde o início.' },
  { number: '03', title: 'Combine os próximos passos', copy: 'Fale pelo WhatsApp para consultar atendimento e entender como continuar.' },
] as const
