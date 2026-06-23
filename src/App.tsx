import React, { useState } from 'react'
import { motion } from 'framer-motion'

// Utility for creating bubbles
const Bubble = ({ left, size, delay, duration }: any) => (
  <div 
    className="bubble"
    style={{
      left: `${left}%`,
      width: `${size}px`,
      height: `${size}px`,
      animationDelay: `${delay}s`,
      animationDuration: `${duration}s`
    }}
  />
)

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <header className="fixed top-0 w-full bg-white shadow-sm z-50">
      <div className="container mx-auto px-4 h-20 flex items-center justify-between">
        <div className="flex items-center gap-2 text-lux-royal font-bold text-2xl">
          <i className="bi bi-droplet-half text-lux-cyan"></i>
          LUXLIMP
        </div>
        
        {/* Desktop Nav */}
        <nav className="hidden md:flex gap-6 text-slate-600 font-medium">
          <a href="#inicio" className="hover:text-lux-cyan transition-colors">Início</a>
          <a href="#produtos" className="hover:text-lux-cyan transition-colors">Produtos</a>
          <a href="#piscinas" className="hover:text-lux-cyan transition-colors">Piscinas</a>
          <a href="#limpeza-pesada" className="hover:text-lux-cyan transition-colors">Limpeza Pesada</a>
          <a href="#sobre" className="hover:text-lux-cyan transition-colors">Sobre</a>
          <a href="#contato" className="hover:text-lux-cyan transition-colors">Contato</a>
        </nav>

        <div className="flex items-center gap-3">
          <a 
            href={`https://wa.me/5511960842449?text=${encodeURIComponent('Olá! Gostaria de mais informações sobre os produtos da Luxlimp.')}`}
            target="_blank"
            rel="noopener noreferrer"
            className="bg-lux-green hover:bg-green-600 text-white px-4 py-2 md:px-6 md:py-2 rounded-full font-semibold transition-all shadow-md flex items-center gap-2 text-sm md:text-base"
          >
            <i className="bi bi-whatsapp"></i>
            <span className="hidden sm:inline">WhatsApp</span>
          </a>
          
          <button 
            className="md:hidden text-3xl text-lux-royal" 
            onClick={() => setIsOpen(!isOpen)}
            aria-label="Toggle Menu"
          >
            <i className={`bi ${isOpen ? 'bi-x' : 'bi-list'}`}></i>
          </button>
        </div>
      </div>
      
      {/* Mobile Menu */}
      {isOpen && (
        <div className="md:hidden bg-white border-t border-gray-100 absolute w-full shadow-lg">
          <nav className="flex flex-col text-slate-600 font-medium">
            <a href="#inicio" onClick={() => setIsOpen(false)} className="px-6 py-4 border-b border-gray-50 hover:bg-gray-50">Início</a>
            <a href="#produtos" onClick={() => setIsOpen(false)} className="px-6 py-4 border-b border-gray-50 hover:bg-gray-50">Produtos</a>
            <a href="#piscinas" onClick={() => setIsOpen(false)} className="px-6 py-4 border-b border-gray-50 hover:bg-gray-50">Piscinas</a>
            <a href="#limpeza-pesada" onClick={() => setIsOpen(false)} className="px-6 py-4 border-b border-gray-50 hover:bg-gray-50">Limpeza Pesada</a>
            <a href="#sobre" onClick={() => setIsOpen(false)} className="px-6 py-4 border-b border-gray-50 hover:bg-gray-50">Sobre</a>
            <a href="#contato" onClick={() => setIsOpen(false)} className="px-6 py-4 hover:bg-gray-50">Contato</a>
          </nav>
        </div>
      )}
    </header>
  )
}

const Hero = () => {
  const bubbles = Array.from({ length: 15 }).map((_, i) => ({
    id: i,
    left: Math.random() * 100,
    size: Math.random() * 40 + 10,
    delay: Math.random() * 5,
    duration: Math.random() * 5 + 5
  }))

  return (
    <section id="inicio" className="relative pt-32 pb-20 lg:pt-40 lg:pb-32 overflow-hidden bg-gradient-to-br from-lux-royal via-lux-blue to-lux-cyan text-white">
      {bubbles.map(b => (
        <Bubble key={b.id} left={b.left} size={b.size} delay={b.delay} duration={b.duration} />
      ))}
      <div className="container mx-auto px-4 relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h1 className="text-4xl lg:text-6xl font-bold leading-tight mb-6">
              Produtos de Limpeza Profissional para Piscinas, Pisos e Pedras
            </h1>
            <p className="text-lg lg:text-xl text-lux-light mb-8 max-w-xl">
              Soluções eficientes para limpeza pesada, manutenção de piscinas, pedras rústicas, pisos e ambientes que exigem resultado de verdade.
            </p>
            <div className="flex flex-wrap gap-4">
              <a href="#produtos" className="bg-white text-lux-royal px-8 py-3 rounded-full font-bold hover:bg-gray-100 transition-colors shadow-lg">
                Conhecer Produtos
              </a>
              <a 
                href={`https://wa.me/5511960842449?text=${encodeURIComponent('Olá! Gostaria de solicitar um atendimento e conhecer mais sobre os produtos.')}`}
                target="_blank"
                rel="noopener noreferrer"
                className="bg-transparent border-2 border-white text-white px-8 py-3 rounded-full font-bold hover:bg-white/10 transition-colors"
              >
                Solicitar Atendimento
              </a>
            </div>
          </motion.div>
          <motion.div 
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="relative"
          >
            <div className="absolute inset-0 bg-lux-cyan blur-[100px] opacity-30 rounded-full"></div>
            <img 
              src="/produtos/limpa_piso-Photoroom.png" 
              alt="Produtos Luxlimp" 
              className="relative z-10 w-full h-auto object-contain drop-shadow-2xl hover:scale-105 transition-transform duration-500"
            />
          </motion.div>
        </div>
      </div>
    </section>
  )
}

const Categories = () => {
  const cats = [
    { icon: "bi-water", title: "Produtos para Piscinas" },
    { icon: "bi-tools", title: "Limpeza Pesada" },
    { icon: "bi-gem", title: "Limpeza de Pedras Rústicas" },
    { icon: "bi-layers", title: "Limpeza de Pisos" },
    { icon: "bi-shield-check", title: "Desinfetantes" },
    { icon: "bi-droplet", title: "Algicidas e Manutenção" },
  ]

  return (
    <section className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6">
          {cats.map((cat, i) => (
            <motion.div 
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className="bg-white p-6 rounded-2xl shadow-sm hover:shadow-md transition-shadow text-center group cursor-pointer border border-gray-100"
            >
              <div className="w-16 h-16 mx-auto bg-lux-light/20 text-lux-royal rounded-full flex items-center justify-center mb-4 group-hover:bg-lux-cyan group-hover:text-white transition-colors">
                <i className={`bi ${cat.icon} text-2xl`}></i>
              </div>
              <h3 className="font-semibold text-slate-800 text-sm md:text-base">{cat.title}</h3>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}

const FeaturedProducts = () => {
  const prods = [
    { name: "Algicida de Choque 5L", desc: "Elimina algas rapidamente, recuperando águas verdes.", img: "/produtos/algicida_choque-Photoroom.png" },
    { name: "Algicida de Choque 1L", desc: "Ação de choque concentrada para piscinas menores.", img: "/produtos/algicida_choque_1lt-Photoroom.png" },
    { name: "Kit Algicidas de Choque", desc: "Leve mais para tratar grandes volumes de água.", img: "/produtos/algicida_choque_duplo-Photoroom.png" },
    { name: "Algicida de Manutenção", desc: "Previne o aparecimento de algas na sua piscina.", img: "/produtos/algicida_manutencao-Photoroom.png" },
    { name: "Decantador Uni Floc 5L", desc: "Clarifica a água aglomerando partículas em suspensão.", img: "/produtos/decantador-Photoroom.png" },
    { name: "Decantador Uni Floc 1L", desc: "Ideal para piscinas menores e manutenção rápida.", img: "/produtos/decantador_1lt-Photoroom.png" },
    { name: "Desinfetante Eucalipto", desc: "Limpeza profunda com perfume duradouro de eucalipto.", img: "/produtos/desinfetante_eucalipto-Photoroom.png" },
    { name: "Desinfetante Lavanda", desc: "Perfume agradável e desinfecção para o seu ambiente.", img: "/produtos/desinfetante_lavanda-Photoroom.png" },
    { name: "Kit Desinfetantes", desc: "Diferentes aromas para a limpeza do dia a dia.", img: "/produtos/desinfetantes-Photoroom.png" },
    { name: "Limpa Pedra", desc: "Remove sujeiras incrustadas em pedras rústicas.", img: "/produtos/limpa_pedra-Photoroom.png" },
    { name: "Limpa Piso", desc: "Limpeza profunda para todos os tipos de pisos.", img: "/produtos/limpa_piso-Photoroom.png" },
    { name: "Oxidante MultiAção", desc: "Tratamento de alta performance sem cloro para piscinas.", img: "/produtos/oxidante-Photoroom.png" },
    { name: "Removedor de Rejunte 1L", desc: "Limpeza de rejuntes encardidos ou recém-aplicados.", img: "/produtos/removedor_rejunte-Photoroom.png" },
    { name: "Super Removedor de Rejunte", desc: "Elimina resíduos difíceis de cimento e rejunte pós-obra.", img: "/produtos/removedor_rejunte_2-Photoroom.png" }
  ]

  return (
    <section id="produtos" className="py-24 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-lux-royal mb-4">Produtos em Destaque</h2>
          <div className="h-1 w-20 bg-lux-cyan mx-auto rounded-full"></div>
        </div>
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {prods.map((p, i) => (
            <motion.div 
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.05 }}
              className="bg-white border border-gray-100 rounded-2xl overflow-hidden shadow-md hover:shadow-lg transition-all duration-300 group flex flex-col"
            >
              <div className="h-64 bg-transparent flex items-center justify-center relative overflow-hidden pt-4">
                <div className="absolute inset-0 bg-lux-cyan/5 group-hover:bg-transparent transition-colors z-10 pointer-events-none"></div>
                <img src={p.img} alt={p.name} className="w-full h-full object-contain scale-110 group-hover:scale-125 transition-transform duration-500 drop-shadow-xl" />
              </div>
              <div className="p-6 flex flex-col flex-1 bg-white relative z-20">
                <h3 className="text-lg font-bold text-lux-royal mb-2 leading-tight">{p.name}</h3>
                <p className="text-sm text-gray-600 mb-6 flex-1">{p.desc}</p>
                <a 
                  href={`https://wa.me/5511960842449?text=${encodeURIComponent(`Olá! Gostaria de pedir um orçamento para o produto: ${p.name}`)}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="block w-full text-center bg-lux-light/10 text-lux-royal hover:bg-lux-cyan hover:text-white font-semibold py-2.5 rounded-xl transition-colors text-sm"
                >
                  Pedir orçamento
                </a>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}

const PoolsSection = () => {
  return (
    <section id="piscinas" className="py-24 bg-lux-royal text-white relative overflow-hidden">
      <div className="absolute inset-0 opacity-10">
        <img src="https://images.unsplash.com/photo-1576013551627-11971f398af6?ixlib=rb-4.0.3&auto=format&fit=crop&w=1920&q=80" alt="Piscina" className="w-full h-full object-cover" />
      </div>
      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center max-w-4xl mx-auto mb-16">
          <h2 className="text-3xl md:text-5xl font-bold mb-6">Linha Completa para Manutenção de Piscinas</h2>
          <p className="text-xl text-lux-light">
            Produtos desenvolvidos para auxiliar na limpeza, conservação e tratamento da água, oferecendo mais praticidade para piscinas residenciais, comerciais e áreas de lazer.
          </p>
        </div>
        <div className="grid grid-cols-2 md:grid-cols-5 gap-4 lg:gap-8">
          {['Algicidas', 'Cloros', 'Decantadores', 'Corretores de pH', 'Manutenção'].map((item, i) => (
            <div key={i} className="bg-white/10 backdrop-blur-md border border-white/20 p-6 rounded-2xl text-center hover:bg-white/20 transition-colors">
              <i className="bi bi-droplet-half text-3xl text-lux-cyan mb-3 block"></i>
              <span className="font-semibold">{item}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

const HeavyCleaning = () => (
  <section id="limpeza-pesada" className="py-24 bg-gray-50 overflow-hidden">
    <div className="container mx-auto px-4">
      <div className="grid lg:grid-cols-2 gap-16 items-center">
        <motion.div 
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-3xl md:text-4xl font-bold text-lux-royal mb-6">Alta Performance na Remoção de Sujeiras Difíceis</h2>
          <p className="text-lg text-gray-600 mb-8">
            Linha ideal para limpeza de pisos, pedras, calçadas, áreas externas, resíduos de obra, manchas e sujeiras pesadas.
          </p>
          <ul className="space-y-4">
            {[
              "Ação rápida contra sujeira incrustada",
              "Rendimento superior e economia",
              "Seguro para diversas superfícies rústicas",
              "Fórmulas balanceadas e de alto impacto"
            ].map((ben, i) => (
              <li key={i} className="flex items-center gap-3 text-gray-700 font-medium">
                <i className="bi bi-check-circle-fill text-lux-cyan text-xl"></i>
                {ben}
              </li>
            ))}
          </ul>
        </motion.div>
        <motion.div 
          initial={{ opacity: 0, x: 50 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="relative"
        >
          <div className="absolute -inset-4 bg-lux-cyan/20 rounded-3xl transform rotate-3"></div>
          <img 
            src="/produtos/removedor_rejunte_2-Photoroom.png" 
            alt="Limpeza Pesada" 
            className="relative object-contain w-full h-[500px] drop-shadow-2xl hover:scale-105 transition-transform duration-500"
          />
        </motion.div>
      </div>
    </div>
  </section>
)

const WhyChoose = () => (
  <section className="py-24 bg-white">
    <div className="container mx-auto px-4">
      <div className="text-center mb-16">
        <h2 className="text-3xl md:text-4xl font-bold text-lux-royal mb-4">Por que escolher a Luxlimp?</h2>
        <div className="h-1 w-20 bg-lux-cyan mx-auto rounded-full"></div>
      </div>
      <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
        {[
          { icon: "bi-shield-check", t: "Qualidade", d: "Produtos fabricados com rigoroso controle" },
          { icon: "bi-box-seam", t: "Linha Completa", d: "Soluções para todas as necessidades" },
          { icon: "bi-whatsapp", t: "Atendimento Rápido", d: "Suporte direto via WhatsApp" },
          { icon: "bi-building-check", t: "Versatilidade", d: "Uso residencial e profissional" }
        ].map((item, i) => (
          <div key={i} className="text-center p-6">
            <div className="w-20 h-20 mx-auto bg-lux-light/10 text-lux-cyan rounded-2xl flex items-center justify-center text-3xl mb-6 shadow-sm">
              <i className={`bi ${item.icon}`}></i>
            </div>
            <h3 className="text-xl font-bold text-lux-royal mb-3">{item.t}</h3>
            <p className="text-gray-600">{item.d}</p>
          </div>
        ))}
      </div>
    </div>
  </section>
)

const About = () => (
  <section id="sobre" className="py-24 bg-lux-royal text-white">
    <div className="container mx-auto px-4 max-w-4xl text-center">
      <i className="bi bi-droplet text-5xl text-lux-cyan mb-8 block opacity-80"></i>
      <h2 className="text-3xl font-bold mb-8">Sobre a Empresa</h2>
      <p className="text-xl leading-relaxed text-lux-light/90">
        A Luxlimp desenvolve produtos de limpeza e manutenção pensados para quem busca eficiência, praticidade e qualidade. Atuamos com soluções para piscinas, pisos, pedras rústicas, limpeza pesada e desinfecção, oferecendo produtos que ajudam a manter ambientes mais limpos, tratados e bem cuidados.
      </p>
    </div>
  </section>
)

const CTA = () => {
  const bubbles = Array.from({ length: 8 }).map((_, i) => ({
    id: i,
    left: Math.random() * 100,
    size: Math.random() * 30 + 10,
    delay: Math.random() * 5,
    duration: Math.random() * 5 + 4
  }))

  return (
    <section className="relative py-24 overflow-hidden bg-lux-blue text-white">
      {bubbles.map(b => (
        <Bubble key={b.id} left={b.left} size={b.size} delay={b.delay} duration={b.duration} />
      ))}
      <div className="container mx-auto px-4 text-center relative z-10">
        <h2 className="text-3xl md:text-4xl font-bold mb-8">Precisa de produtos de limpeza para sua casa, empresa ou revenda?</h2>
        <a 
          href={`https://wa.me/5511960842449?text=${encodeURIComponent('Olá! Preciso de produtos de limpeza e gostaria de um orçamento.')}`}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-3 bg-lux-green hover:bg-green-600 text-white px-8 py-4 rounded-full font-bold text-xl transition-all shadow-xl hover:scale-105"
        >
          <i className="bi bi-whatsapp"></i>
          Falar com a Luxlimp no WhatsApp
        </a>
      </div>
    </section>
  )
}

const Contact = () => {
  const [form, setForm] = useState({ name: '', phone: '', city: '', product: '', message: '' })

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    // handle submit to whatsapp or api
    const text = `Olá, me chamo ${form.name} de ${form.city}. Tenho interesse em ${form.product}. ${form.message}`
    window.open(`https://wa.me/5511960842449?text=${encodeURIComponent(text)}`, '_blank')
  }

  return (
    <section id="contato" className="py-24 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="max-w-3xl mx-auto bg-white rounded-3xl shadow-xl overflow-hidden">
          <div className="p-8 md:p-12">
            <h2 className="text-3xl font-bold text-lux-royal mb-2">Solicitar Orçamento</h2>
            <p className="text-gray-600 mb-8">Preencha os dados abaixo e retornaremos rapidamente.</p>
            
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">Nome Completo</label>
                  <input required type="text" className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:ring-2 focus:ring-lux-cyan focus:border-transparent outline-none transition-all" onChange={e => setForm({...form, name: e.target.value})} />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">Telefone / WhatsApp</label>
                  <input required type="text" className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:ring-2 focus:ring-lux-cyan focus:border-transparent outline-none transition-all" onChange={e => setForm({...form, phone: e.target.value})} />
                </div>
              </div>
              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">Cidade / Estado</label>
                  <input required type="text" className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:ring-2 focus:ring-lux-cyan focus:border-transparent outline-none transition-all" onChange={e => setForm({...form, city: e.target.value})} />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">Produto de Interesse</label>
                  <select className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:ring-2 focus:ring-lux-cyan focus:border-transparent outline-none transition-all bg-white" onChange={e => setForm({...form, product: e.target.value})}>
                    <option value="">Selecione...</option>
                    <option value="Piscinas">Linha Piscinas</option>
                    <option value="Limpeza Pesada">Limpeza Pesada</option>
                    <option value="Pedras">Pedras Rústicas</option>
                    <option value="Revenda">Quero Revender</option>
                    <option value="Outros">Outros</option>
                  </select>
                </div>
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">Mensagem</label>
                <textarea rows={4} className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:ring-2 focus:ring-lux-cyan focus:border-transparent outline-none transition-all" onChange={e => setForm({...form, message: e.target.value})}></textarea>
              </div>
              <button type="submit" className="w-full bg-lux-royal hover:bg-lux-blue text-white font-bold py-4 rounded-xl transition-colors shadow-lg">
                Enviar Solicitação
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  )
}

const Footer = () => (
  <footer className="bg-lux-royal text-white pt-16 pb-8 border-t border-white/10">
    <div className="container mx-auto px-4">
      <div className="grid md:grid-cols-4 gap-12 mb-12">
        <div className="md:col-span-1">
          <div className="flex items-center gap-2 font-bold text-2xl mb-4">
            <i className="bi bi-droplet-half text-lux-cyan"></i>
            LUXLIMP
          </div>
          <p className="text-lux-light/80 text-sm">
            Soluções profissionais para limpeza pesada e manutenção de piscinas. Qualidade que gera resultado de verdade.
          </p>
        </div>
        <div>
          <h4 className="font-bold text-lg mb-4">Região de Atendimento</h4>
          <ul className="space-y-3 text-lux-light/80 text-sm">
            <li className="flex items-center gap-2">
              <i className="bi bi-geo-alt text-lux-cyan"></i>
              Atibaia e região
            </li>
            <li className="flex items-center gap-2">
              <i className="bi bi-geo-alt text-lux-cyan"></i>
              São Paulo
            </li>
            <li className="flex items-center gap-2">
              <i className="bi bi-geo-alt text-lux-cyan"></i>
              Campinas
            </li>
          </ul>
        </div>
        <div>
          <h4 className="font-bold text-lg mb-4">Categorias</h4>
          <ul className="space-y-2 text-lux-light/80 text-sm">
            <li><a href="#piscinas" className="hover:text-white transition-colors">Piscinas e Algicidas</a></li>
            <li><a href="#limpeza-pesada" className="hover:text-white transition-colors">Limpeza Pesada</a></li>
            <li><a href="#produtos" className="hover:text-white transition-colors">Pedras Rústicas</a></li>
            <li><a href="#produtos" className="hover:text-white transition-colors">Desinfetantes</a></li>
          </ul>
        </div>
        <div>
          <h4 className="font-bold text-lg mb-4">Contato</h4>
          <ul className="space-y-3 text-lux-light/80 text-sm mb-6">
            <li className="flex items-center gap-2">
              <i className="bi bi-whatsapp text-lux-cyan"></i>
              (11) 96084-2449
            </li>
            <li className="flex items-center gap-2">
              <i className="bi bi-envelope text-lux-cyan"></i>
              marcioribeirotadeu1@gmail.com
            </li>
          </ul>
          <h4 className="font-bold text-lg mb-4">Redes Sociais</h4>
          <div className="flex gap-4">
            <a href="https://www.instagram.com/luxlimp_?utm_source=qr&igsh=eDJrejZpM2RwbW1p" target="_blank" rel="noopener noreferrer" className="bg-white/10 w-10 h-10 rounded-full flex items-center justify-center hover:bg-pink-500 hover:text-white transition-colors" aria-label="Instagram">
              <i className="bi bi-instagram text-xl"></i>
            </a>
            <a href="https://www.facebook.com/share/18P6tjTqq2/" target="_blank" rel="noopener noreferrer" className="bg-white/10 w-10 h-10 rounded-full flex items-center justify-center hover:bg-blue-600 hover:text-white transition-colors" aria-label="Facebook">
              <i className="bi bi-facebook text-xl"></i>
            </a>
          </div>
        </div>
      </div>
      <div className="text-center text-lux-light/50 text-sm pt-8 border-t border-white/10">
        &copy; {new Date().getFullYear()} Luxlimp. Todos os direitos reservados.
      </div>
    </div>
  </footer>
)

const FloatingWhatsApp = () => (
  <a
    href={`https://wa.me/5511960842449?text=${encodeURIComponent('Olá! Gostaria de falar com um atendente da Luxlimp.')}`}
    target="_blank"
    rel="noopener noreferrer"
    className="fixed bottom-6 right-6 bg-[#25D366] text-white w-16 h-16 rounded-full flex items-center justify-center shadow-2xl hover:scale-110 transition-transform z-50 hover:bg-[#20bd5a]"
    aria-label="Fale conosco no WhatsApp"
  >
    <svg xmlns="http://www.w3.org/2000/svg" width="36" height="36" fill="currentColor" viewBox="0 0 16 16">
      <path d="M13.601 2.326A7.854 7.854 0 0 0 7.994 0C3.627 0 .068 3.558.064 7.926c0 1.399.366 2.76 1.057 3.965L0 16l4.204-1.102a7.933 7.933 0 0 0 3.79.965h.004c4.368 0 7.926-3.558 7.93-7.93A7.898 7.898 0 0 0 13.6 2.326zM7.994 14.521a6.573 6.573 0 0 1-3.356-.92l-.24-.144-2.494.654.666-2.433-.156-.251a6.56 6.56 0 0 1-1.007-3.505c0-3.626 2.957-6.584 6.591-6.584a6.56 6.56 0 0 1 4.66 1.931 6.557 6.557 0 0 1 1.928 4.66c-.004 3.639-2.961 6.592-6.592 6.592zm3.615-4.934c-.197-.099-1.17-.578-1.353-.646-.182-.065-.315-.099-.445.099-.133.197-.513.646-.627.775-.114.133-.232.148-.43.05-.197-.1-.836-.308-1.592-.985-.59-.525-.985-1.175-1.103-1.372-.114-.198-.011-.304.088-.403.087-.088.197-.232.296-.346.1-.114.133-.198.198-.33.065-.134.034-.248-.015-.347-.05-.099-.445-1.076-.612-1.47-.16-.389-.323-.335-.445-.34-.114-.007-.247-.007-.38-.007a.729.729 0 0 0-.529.247c-.182.198-.691.677-.691 1.654 0 .977.71 1.916.81 2.049.098.133 1.394 2.132 3.383 2.992.47.205.84.326 1.129.418.475.152.904.129 1.246.08.38-.058 1.171-.48 1.338-.943.164-.464.164-.86.114-.943-.049-.084-.182-.133-.38-.232z"/>
    </svg>
  </a>
)

function App() {
  return (
    <div className="font-sans antialiased bg-background">
      <Header />
      <main>
        <Hero />
        <Categories />
        <FeaturedProducts />
        <PoolsSection />
        <HeavyCleaning />
        <WhyChoose />
        <About />
        <CTA />
        <Contact />
      </main>
      <Footer />
      <FloatingWhatsApp />
    </div>
  )
}

export default App
