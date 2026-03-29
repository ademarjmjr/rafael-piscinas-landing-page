'use client'; // ESSENCIAL: Permite interatividade como o clique no botão
import { sendGAEvent } from '@next/third-parties/google';

import React from 'react';
import Image from 'next/image';

export default function Home() {
  return (
    <main className="min-h-screen bg-white text-gray-900">
      {/* SEÇÃO HERO */}
      <section className="relative min-h-screen py-20 flex items-center justify-center overflow-hidden">
        <Image 
          src="https://images.unsplash.com/photo-1576013551627-0cc20b96c2a7?q=80&w=2070&auto=format&fit=crop"
          alt="Piscina de alvenaria luxuosa"
          fill
          className="object-cover transition-transform duration-1000 hover:scale-105"
          priority
        />
        <div className="absolute inset-0 bg-gradient-to-b from-black/70 via-black/40 to-black/70 z-10" />
        
        <div className="container mx-auto px-6 relative z-20 text-center">
          <span className="inline-block bg-blue-500 text-white px-4 py-1 rounded-full text-sm font-bold uppercase tracking-widest mb-4 animate-bounce">
            Especialista em Alvenaria e Concreto
          </span>
          <h1 className="text-5xl md:text-8xl font-black text-white mb-6 tracking-tighter uppercase">
            Rafael <span className="text-blue-400">Piscinas</span>
          </h1>
          <p className="text-xl md:text-2xl text-gray-200 mb-10 max-w-3xl mx-auto leading-relaxed">
            Realizando o lazer da sua família com engenharia de precisão em Porto Velho e região desde 2010.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <button 
              onClick={() => document.getElementById('contato')?.scrollIntoView({ behavior: 'smooth' })}
              className="w-full sm:w-auto bg-blue-600 hover:bg-blue-700 text-white px-10 py-5 rounded-xl font-bold text-xl transition-all shadow-2xl hover:-translate-y-1"
            >
              Quero um Orçamento
            </button>
            <button 
              onClick={() => document.getElementById('projetos')?.scrollIntoView({ behavior: 'smooth' })}
              className="w-full sm:w-auto bg-white/10 backdrop-blur-md border border-white/20 hover:bg-white/20 text-white px-10 py-5 rounded-xl font-bold text-xl transition-all"
              >
              Locais onde há projetos
            </button>
          </div>
        </div>
      </section>

      {/* SEÇÃO DE NÚMEROS */}
      {/*<section className="relative z-30 lg:-mt-16 pb-20 mt-8 lg:mt-0">*/}
      <section className="pt-28 pb-20 bg-gry-50">
        <div className="container mx-auto px-6">
          <div className="bg-white rounded-3xl shadow-2xl p-8 md:p-12 grid grid-cols-1 md:grid-cols-3 gap-8 text-center border border-gray-100">
            <div className="flex flex-col items-center">
              <span className="text-6xl font-black text-blue-600 mb-2">14+</span>
              <span className="text-gray-500 font-medium uppercase tracking-tighter">Anos de Mercado</span>
            </div>
            <div className="flex flex-col items-center border-y md:border-y-0 md:border-x border-gray-100 py-8 md:py-0">
              <span className="text-6xl font-black text-blue-600 mb-2">160+</span>
              <span className="text-gray-500 font-medium uppercase tracking-tighter">Obras Entregues</span>
            </div>
            <div className="flex flex-col items-center">
              <span className="text-6xl font-black text-blue-600 mb-2">100%</span>
              <span className="text-gray-500 font-medium uppercase tracking-tighter">Garantia Estrutural</span>
            </div>
          </div>
        </div>
      </section>

      {/* SEÇÃO GALERIA (Grid Moderna) */}
      <section className="py-24 bg-gray-50">
        <div className="container mx-auto px-6 text-center mb-12">
          <h2 className="text-4xl font-black text-blue-900 mb-4">Construção de piscinas</h2>
          <p className="text-gray-600 uppercase tracking-widest font-bold text-sm">Qualidade em cada detalhe</p>
        </div>
        <div className="container mx-auto px-6 grid grid-cols-2 md:grid-cols-4 gap-4">
          {/* Imagem 1 */}
          <div className="relative h-64 md:h-80 overflow-hidden rounded-2xl group">
            <Image 
              src="https://images.unsplash.com/photo-1576013551627-0cc20b96c2a7?q=80&w=1000" 
              alt="Piscina Moderna" 
              fill 
              className="object-cover transition-transform duration-700 group-hover:scale-110" 
            />
          </div>
          {/* Imagem 2 - Esta ocupará 2 colunas no computador */}
          <div className="relative h-64 md:h-80 overflow-hidden rounded-2xl group md:col-span-2">
            <Image 
              src="https://images.unsplash.com/photo-1572331165267-854da2b10ccc?q=80&w=1000" 
              alt="Piscina de Alvenaria" 
              fill 
              className="object-cover transition-transform duration-700 group-hover:scale-110" 
            />
          </div>
          {/* Imagem 3 - PISCINA COM LED AZUL (LINK TESTADO) */}
          <div className="relative h-64 md:h-80 overflow-hidden rounded-2xl group border border-gray-100 shadow-lg">
            <Image 
              src="https://images.unsplash.com/photo-1491510736257-3ad769ff47b6?w=1000&auto=format&fit=crop" 
              alt="Piscina de alvenaria com água azul cristalina e borda de pedra, cercada por um jardim tropical exuberante com coqueiros ao pôr do sol" 
              fill
              sizes="(max-width: 768px) 100vw, 33vw"
              className="object-cover transition-transform duration-700 group-hover:scale-110" 
              priority
            />
          </div>
        </div>
      </section>

      <section className="py-16 bg-gray-50 text-gray-800">
        <div className="container mx-auto px-6 max-w-4xl">
          <h2 className="text-3xl font-black text-blue-900 mb-8 text-center">
            Construindo mais que piscinas, realizamos o lazer da sua família em Porto Velho
          </h2>
          
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="space-y-4">
              <p className="text-lg leading-relaxed">
                Procurando por <strong>construção de piscinas em Porto Velho</strong>? Sabendo que o calor da nossa região não perdoa, o Rafael Piscinas entrega soluções em <strong>alvenaria e concreto armado</strong>, garantindo uma estrutura sólida que não deforma com o tempo como as de fibras.
              </p>
              <p className="text-lg leading-relaxed">
                Nosso diferencial é o <strong>pé no chão</strong>: não prometemos milagres, prometemos o cronograma levado a sério. Seja em <em>condomínios residenciais </em> ou em qualquer bairro da capital, nossa equipe trabalha com agilidade para que você não tenha uma obra eterna no seu quintal.
              </p>
            </div>

            <div className="bg-white p-6 rounded-2xl shadow-md border-l-4 border-blue-600">
              <h3 className="font-bold text-xl mb-4">Por que nos escolher?</h3>
              <ul className="space-y-3">
                <li className="flex items-start gap-2">
                  <span className="text-blue-600">✔</span> 
                  <span><strong>Especialista em Alvenaria:</strong> Mais durabilidade e valorização do seu imóvel.</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-blue-600">✔</span> 
                  <span><strong>Rapidez Real:</strong> Focamos em um projeto por vez para entregar no prazo.</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-blue-600">✔</span> 
                  <span><span>Transparência total nos custos de materiais e mão de obra.</span></span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-blue-600">✔</span> 
                  <span><span>Abandone os moldes prontos e invista na durabilidade do concreto armado. 
                    Solicite um orçamento para o seu projeto personalizado com quem entende de 
                    obras de alto padrão em Porto Velho.</span></span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/*Seção de SEO e Vendas*/}
      <section className="py-16 bg-gray-50 text-gray-800">
        <div className="container mx-auto px-6 max-w-4xl">
          <h2 className="text-3xl font-black text-blue-900 mb-8 text-center">
            A Solidez do Concreto para o Lazer da Sua Família
          </h2>
          
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="space-y-4">
              <p className="text-lg leading-relaxed">
                Diferente das soluções pré-fabricadas em fibra ou plástico, nossas <strong>piscinas de concreto armado e alvenaria</strong> são projetadas para durar gerações, resistindo perfeitamente às variações do solo e ao clima de Porto Velho.
              </p>
              <p className="text-lg leading-relaxed">
                Com vasta experiência em <strong>grandes piscinas em condomínios de alto padrão na capital</strong>, entregamos projetos com design ilimitado. Você define o formato, a profundidade e o acabamento, garantindo uma obra robusta que valoriza seu patrimônio de forma definitiva.
              </p>
            </div>

            <div className="bg-white p-6 rounded-2xl shadow-md border-l-4 border-blue-600">
              <h3 className="font-bold text-xl mb-4 text-blue-900">Por que escolher o Concreto?</h3>
              <ul className="space-y-3">
                <li className="flex items-start gap-2">
                  <span className="text-blue-600 font-bold">💎</span> 
                  <span><strong>Liberdade Total:</strong> Formatos personalizados, prainhas e bordas infinitas que a fibra não permite.</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-blue-600 font-bold">🏗️</span> 
                  <span><strong>Estrutura de Engenharia:</strong> Concreto de alta resistência, ideal para terrenos complexos em Rondônia.</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-blue-600 font-bold">📈</span> 
                  <span><strong>Valorização Real:</strong> Um investimento que se incorpora ao imóvel, aumentando seu valor de mercado.</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      <section id="projetos" className="py-20 bg-gray-50">
        <div className="container mx-auto px-6 max-w-4xl">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-black text-blue-900 mb-4">Onde Estamos Presentes</h2>
            <p className="text-gray-600 uppercase tracking-widest font-bold text-sm">
              Projetos de alto padrão entregues em Porto Velho
            </p>
          </div>
          
          <div className="bg-white p-8 md:p-12 rounded-[2.5rem] shadow-xl border border-gray-100">
            <h3 className="text-2xl font-black mb-10 text-blue-600 flex items-center justify-center gap-3">
              <span className="bg-blue-100 p-2 rounded-lg">🏆</span> 
              Alguns lugares onde há piscinas construídas pela nossa equipe:
            </h3>
            
            <ul className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 text-gray-700 font-bold">
              {[
                { name: "Alphaville", link: "https://www.google.com/maps/search/Alphaville+Porto+Velho" },
                { name: "Condomínio Residencial Rio Madeira", link: "https://www.google.com/maps/search/Residencial+Rio+Madreia+Porto+Velho" },
                { name: "Portal das Artes", link: "https://www.google.com/maps/search/Portal+das+Artes+Porto+Velho" },
                { name: "Pedras do Madeira", link: "https://www.google.com/maps/search/Pedras+do+Madeira+Porto+Velho" },
                { name: "Lagoa Residence", link: "https://www.google.com/maps/search/Lagoa+Residence+Porto+Velho" },
                { name: "Greenville", link: "https://www.google.com/maps/search/Residencial+Greenville+Porto+Velho" },
                { name: "Residencial Clube Lagunas", link: "https://www.google.com/maps/search/Residencial+Clube+Lagunas+Porto+Velho" },
                { name: "Vila Eletronorte", link: "https://www.google.com/maps/search/Vila+Eletronorte+Porto+Velho" },
                { name: "Parintins", link: "https://www.google.com/maps/search/Residencial+Parintins+Porto+Velho" },
                { name: "Nova Alphaville", link: "https://www.google.com/maps/search/Nova+Alphaville+Porto+Velho" },
                { name: "Jequitibá", link: "https://www.google.com/maps/search/Residencial+Jequitibá+Porto+Velho" },
                { name: "São Paulo", link: "https://www.google.com/maps/search/Residencial+São+Paulo+Porto+Velho" }
              ].map((item) => (
                <li key={item.name}>
                  <a 
                    href={item.link} 
                    target="_blank" 
                    rel="noopener noreferrer" 
                    className="flex items-center gap-2 hover:text-blue-600 transition-all hover:translate-x-1"
                  >
                    <span className="text-blue-500 text-lg">📍</span> {item.name}
                  </a>
                </li>
              ))}
            </ul>

            <div className="mt-12 p-6 bg-blue-50 rounded-2xl border border-blue-100 text-center">
              <p className="text-blue-800 font-bold">
                Expertise técnica comprovada em toda a região de Rondônia.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* SEÇÃO CONTATO (Formulário WhatsApp) */}
      <section id="contato" className="py-24 bg-white">
        <div className="container mx-auto px-6 max-w-4xl text-center">
          <div className="bg-blue-900 rounded-[3rem] p-8 md:p-16 shadow-2xl relative overflow-hidden text-white">
            <div className="relative z-10 grid md:grid-cols-2 gap-12 items-center">
              <div className="text-left">
                <h2 className="text-4xl font-black mb-6">Fale com o Rafael</h2>
                <p className="text-blue-100 text-lg mb-8">Solicite seu orçamento agora. Atendemos em toda Porto Velho e região.</p>
              </div>

              <form 
                className="bg-white p-8 rounded-3xl space-y-4 shadow-xl text-left text-gray-900"
                onSubmit={(e) => {
                  e.preventDefault();
                  const formData = new FormData(e.currentTarget);
                  const nome = formData.get('nome');
                  const area = formData.get('area');

                  // Usaremos a ONDA (🌊) porque é um dos emojis mais compatíveis do mundo
                  const emojiPiscina = "🌊"; 
                  const msg = `${emojiPiscina} Olá Rafael! Meu nome é ${nome}. Gostaria de um orçamento para uma área de ${area}.`;

                  // Número do Rafael (Confira se é 99304 ou 9304. Se for 9304, remova um '9')
                  const telefone = "5569993041891"; 

                  // O encodeURIComponent é o que impede a interrogação de aparecer!
                  const linkWhatsApp = `https://wa.me/${telefone}?text=${encodeURIComponent(msg)}`;
                  
                  window.open(linkWhatsApp, '_blank');
                }}
              >
                {/* Campos de Nome e Área */}
                <div>
                  <label htmlFor="nome" className="block text-sm font-bold mb-1">Seu Nome</label>
                  <input 
                    id="nome"
                    name="nome" 
                    required 
                    type="text" 
                    placeholder="Digite seu nome completo"
                    className="w-full px-4 py-3 rounded-xl bg-gray-50 border border-gray-200 outline-none focus:ring-2 focus:ring-blue-500 text-gray-900" 
                  />
                </div>

                <div>
                  <label htmlFor="area" className="block text-sm font-bold mb-1">Área da Piscina (m²)</label>
                  <input 
                    id="area"
                    name="area" 
                    required 
                    type="text" 
                    placeholder="Ex: 6x3m ou 40m²" 
                    className="w-full px-4 py-3 rounded-xl bg-gray-50 border border-gray-200 outline-none focus:ring-2 focus:ring-blue-500 text-gray-900" 
                  />
                </div>

                <button 
                  type="submit" 
                  onClick={() => sendGAEvent({ event: 'button_click', value: 'enviar_formulario_whatsapp' })}
                  className="w-full bg-blue-600 text-white font-black py-4 rounded-xl hover:bg-blue-700 transition-all shadow-lg mt-2"
                >
                  ENVIAR NO WHATSAPP
                </button>
              </form>
            </div>
          </div>
        </div>
      </section>

      {/* RODAPÉ */}
      <footer className="py-12 border-t border-gray-100 text-center">
        <p className="text-gray-400 font-medium">
          © 2026 Rafael Piscinas • Porto Velho, RO
        </p>
        <p className="text-xs text-gray-400 mt-2 uppercase tracking-widest">
          Construção de Piscinas de Alvenaria e Concreto
        </p>
      </footer>
    </main>
  );
}