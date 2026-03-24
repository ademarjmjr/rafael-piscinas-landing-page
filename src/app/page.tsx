import React from 'react';
import Image from 'next/image';

export default function Home() {
  return (
    <main className="min-h-screen bg-white text-gray-900">
      {/* SEÇÃO HERO */}
      {/*<section className="relative h-screen flex items-center justify-center overflow-hidden">*/}
      <section className="relative min-h-screen py-20 flex items-center justify-center overflow-hidden">
        {/* Imagem de Fundo Profissional */}
        <Image 
          src="https://images.unsplash.com/photo-1576013551627-0cc20b96c2a7?q=80&w=2070&auto=format&fit=crop"
          alt="Piscina de alvenaria luxuosa"
          fill
          className="object-cover transition-transform duration-1000 hover:scale-105"
          priority
        />
        
        {/* Camada de sobreposição (Overlay) para legibilidade */}
        <div className="absolute inset-0 bg-gradient-to-b from-black/70 via-black/40 to-black/70 z-10" />
        
        {/* Conteúdo Centralizado */}
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
          <div className="flex flex-col md:flex-row gap-4 justify-center items-center">
            <button className="bg-blue-600 hover:bg-blue-700 text-white px-10 py-5 rounded-xl font-bold text-xl transition-all shadow-2xl hover:-translate-y-1">
              Quero um Orçamento via WhatsApp
            </button>
            <button className="bg-white/10 backdrop-blur-md border border-white/20 hover:bg-white/20 text-white px-10 py-5 rounded-xl font-bold text-xl transition-all">
              Conhecer os 160 Projetos
            </button>
          </div>
        </div>
      </section>

      {/* SEÇÃO DE NÚMEROS (Estilo Glassmorphism) */}
      <section className="relative z-30 -mt-16 pb-20">
        <div className="container mx-auto px-6">
          <div className="bg-white rounded-3xl shadow-2xl p-8 md:p-12 grid grid-cols-1 md:grid-cols-3 gap-12 border border-gray-100">
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
              <span className="text-gray-500 font-medium uppercase tracking-tighter">Garantia e Robustez</span>
            </div>
          </div>
        </div>
      </section>

      {/* SEÇÃO NOSSOS SERVIÇOS */}
      <section className="py-24 bg-white">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-extrabold text-blue-900 mb-4 tracking-tight">
              Especialista em Construção de Alto Padrão
            </h2>
            <div className="h-1.5 w-24 bg-blue-500 mx-auto rounded-full" />
            <p className="mt-6 text-gray-600 text-lg max-w-2xl mx-auto italic">
              "Desde 2010 entregando estruturas que duram gerações em Porto Velho."
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* Card 1: Piscinas de Alvenaria */}
            <div className="group p-8 rounded-3xl bg-gray-50 border border-gray-100 hover:bg-blue-900 transition-all duration-500 hover:-translate-y-2">
              <div className="w-16 h-16 bg-blue-100 rounded-2xl flex items-center justify-center mb-6 group-hover:bg-blue-500 transition-colors">
                <svg className="w-8 h-8 text-blue-600 group-hover:text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
                </svg>
              </div>
              <h3 className="text-2xl font-bold mb-4 text-blue-900 group-hover:text-white">Piscinas de Alvenaria</h3>
              <p className="text-gray-600 group-hover:text-blue-100 leading-relaxed">
                Personalização total de formatos e tamanhos. Ideal para quem busca um design exclusivo que se adapta perfeitamente ao terreno.
              </p>
            </div>

            {/* Card 2: Concreto Armado */}
            <div className="group p-8 rounded-3xl bg-gray-50 border border-gray-100 hover:bg-blue-900 transition-all duration-500 hover:-translate-y-2">
              <div className="w-16 h-16 bg-blue-100 rounded-2xl flex items-center justify-center mb-6 group-hover:bg-blue-500 transition-colors">
                <svg className="w-8 h-8 text-blue-600 group-hover:text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 10V3L4 14h7v7l9-11h-7z" />
                </svg>
              </div>
              <h3 className="text-2xl font-bold mb-4 text-blue-900 group-hover:text-white">Concreto Armado</h3>
              <p className="text-gray-600 group-hover:text-blue-100 leading-relaxed">
                O máximo em durabilidade e resistência. Estruturas robustas com ferragem dupla, garantindo zero infiltrações por décadas.
              </p>
            </div>

            {/* Card 3: Revestimentos e Leds */}
            <div className="group p-8 rounded-3xl bg-gray-50 border border-gray-100 hover:bg-blue-900 transition-all duration-500 hover:-translate-y-2">
              <div className="w-16 h-16 bg-blue-100 rounded-2xl flex items-center justify-center mb-6 group-hover:bg-blue-500 transition-colors">
                <svg className="w-8 h-8 text-blue-600 group-hover:text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 3v4M3 5h4M6 17v4m-2-2h4m5-16l2.286 6.857L21 12l-7.714 2.143L11 21l-2.143-7.714L1 12l6.857-2.143L11 3z" />
                </svg>
              </div>
              <h3 className="text-2xl font-bold mb-4 text-blue-900 group-hover:text-white">Acabamento Premium</h3>
              <p className="text-gray-600 group-hover:text-blue-100 leading-relaxed">
                Instalação de pastilhas, bordas infinitas, sistemas de filtragem modernos e iluminação subaquática controlada por celular.
              </p>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}