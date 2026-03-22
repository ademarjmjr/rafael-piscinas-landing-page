import React from 'react';

export default function Home() {
  return (
    <main className="min-h-screen bg-white text-gray-900">
      {/* SEÇÃO HERO */}
      <section className="relative h-[90vh] flex items-center justify-center bg-blue-900 text-white overflow-hidden">
        {/* Camada de sobreposição para o texto brilhar */}
        <div className="absolute inset-0 bg-black/40 z-10" />
        
        {/* Conteúdo */}
        <div className="container mx-auto px-6 relative z-20 text-center">
          <h1 className="text-5xl md:text-7xl font-extrabold mb-4 tracking-tight">
            Rafael <span className="text-blue-400">Piscinas</span>
          </h1>
          <p className="text-xl md:text-2xl mb-8 max-w-2xl mx-auto font-light">
            Construindo sonhos em concreto e alvenaria desde 2010. Mais de 160 projetos entregues com excelência.
          </p>
          <div className="flex flex-col md:flex-row gap-4 justify-center">
            <button className="bg-blue-500 hover:bg-blue-600 text-white px-8 py-4 rounded-full font-bold text-lg transition-all shadow-lg">
              Solicitar Orçamento Grátis
            </button>
            <button className="bg-transparent border-2 border-white hover:bg-white hover:text-blue-900 text-white px-8 py-4 rounded-full font-bold text-lg transition-all">
              Ver Galeria de Projetos
            </button>
          </div>
        </div>
      </section>

      {/* SEÇÃO DE NÚMEROS (PROVA SOCIAL) */}
      <section className="py-12 bg-gray-100">
        <div className="container mx-auto px-6 grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
          <div>
            <h3 className="text-4xl font-bold text-blue-900">14+</h3>
            <p className="text-gray-600 uppercase tracking-widest text-sm font-semibold">Anos de Experiência</p>
          </div>
          <div>
            <h3 className="text-4xl font-bold text-blue-900">160+</h3>
            <p className="text-gray-600 uppercase tracking-widest text-sm font-semibold">Piscinas Construídas</p>
          </div>
          <div>
            <h3 className="text-4xl font-bold text-blue-900">100%</h3>
            <p className="text-gray-600 uppercase tracking-widest text-sm font-semibold">Garantia Estrutural</p>
          </div>
        </div>
      </section>
    </main>
  );
}