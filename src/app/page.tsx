'use client'; // ESSENCIAL: Permite interatividade como o clique no botão

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
      <section className="relative z-30 lg:-mt-16 pb-20 mt-8 lg:mt-0">
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
          <h2 className="text-4xl font-black text-blue-900 mb-4">Projetos Entregues</h2>
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
          <div className="relative h-64 md:h-80 overflow-hidden rounded-2xl group border border-gray-100 shadow-inner">
            <Image 
              src="https://images.unsplash.com/photo-1576013551627-0cc20b96c2a7?q=80&w=2070&auto=format&fit=crop" 
              alt="Piscina de alvenaria com iluminação LED azul noturna" 
              fill
              sizes="(max-width: 768px) 100vw, 33vw"
              className="object-cover transition-transform duration-700 group-hover:scale-110" 
              priority
            />
            <div className="absolute inset-0 bg-black/20 group-hover:bg-transparent transition-colors duration-500" />
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
                { name: "Rio Madeira", link: "https://www.google.com/maps/search/Residencial+Rio+Madreia+Porto+Velho" },
                { name: "Portal das Artes", link: "https://www.google.com/maps/search/Portal+das+Artes+Porto+Velho" },
                { name: "Pedras do Madeira", link: "https://www.google.com/maps/search/Pedras+do+Madeira+Porto+Velho" },
                { name: "Lagoa Residence", link: "https://www.google.com/maps/search/Lagoa+Residence+Porto+Velho" },
                { name: "Greenville", link: "https://www.google.com/maps/search/Residencial+Greenville+Porto+Velho" },
                { name: "Ecoville", link: "https://www.google.com/maps/search/Ecoville+Porto+Velho" },
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
                  const msg = `Olá Rafael! Meu nome é ${formData.get('nome')}. Gostaria de um orçamento para uma área de ${formData.get('area')}.`;
                  window.open(`https://wa.me/5569993041891?text=${encodeURIComponent(msg)}`, '_blank');
                }}
              >
                {/* Campo Nome */}
                <div>
                  <label htmlFor="nome" className="block text-sm font-bold mb-1">Seu Nome</label>
                  <input 
                    id="nome"
                    name="nome" 
                    required 
                    type="text" 
                    placeholder="Digite seu nome completo"
                    className="w-full px-4 py-3 rounded-xl bg-gray-50 border-none outline-none focus:ring-2 focus:ring-blue-500 text-gray-900" 
                  />
                </div>

                {/* Campo Área */}
                <div>
                  <label htmlFor="area" className="block text-sm font-bold mb-1">Área da Piscina (m²)</label>
                  <input 
                    id="area"
                    name="area" 
                    required 
                    type="text" 
                    placeholder="Ex: 6x3m ou 40m²" 
                    className="w-full px-4 py-3 rounded-xl bg-gray-50 border-none outline-none focus:ring-2 focus:ring-blue-500 text-gray-900" 
                  />
                </div>

                {/* BOTÃO AGORA COM MARGEM SUPERIOR PARA NÃO SUMIR */}
                <button 
                  type="submit" 
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