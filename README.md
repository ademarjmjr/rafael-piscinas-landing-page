# 🏊‍♂️ Rafael Piscinas | Landing Page Profissional

Landing Page de alta conversão desenvolvida para **Rafael Piscinas**, especialista em construção e reforma de piscinas de alvenaria e concreto em Porto Velho - RO.

---

## 🚀 Tecnologias e Ferramentas

* **Framework:** [Next.js 15+](https://nextjs.org/) (App Router)
* **Estilização:** [Tailwind CSS](https://tailwindcss.com/)
* **Linguagem:** [TypeScript](https://www.typescriptlang.org/)
* **Analytics:** Google Analytics 4 (GA4) via `@next/third-parties`
* **Hospedagem:** [Vercel](https://vercel.com/)
* **Versionamento:** GitHub Desktop

---

## ✨ Diferenciais do Projeto

### 📱 Experiência do Usuário (UX) para o Cliente
Como o proprietário (Rafael) utiliza o WhatsApp Business como principal canal de vendas e prefere comunicações visuais, implementei um **Identificador por Emoji**:
* Toda mensagem vinda do site inicia com o emoji **`🌊`**.
* Isso permite que o Rafael identifique instantaneamente que o contato é um "Lead quente" vindo da internet, sem precisar ler o texto completo de imediato.

### 📈 Rastreamento e Métricas
O site não é apenas um cartão de visitas, é uma ferramenta de marketing:
* **Google Analytics 4:** Configurado via variáveis de ambiente seguras.
* **Eventos Personalizados:** O sistema rastreia cliques no botão de envio (`button_click`) para medir o interesse real dos usuários.

### ⚡ Performance e SEO
* Uso do componente `next/image` para carregamento otimizado de fotos de alta resolução.
* Design totalmente responsivo (Mobile-First).

---

## 🛠️ Instalação e Configuração Local

Se desejar rodar este projeto na sua máquina:

1.  **Clone o repositório:**
    ```bash
    git clone [https://github.com/ademarjmjr/rafael-piscinas-landing-page.git](https://github.com/ademarjmjr/rafael-piscinas-landing-page.git)
    ```

2.  **Instale as dependências:**
    ```bash
    npm install
    ```

3.  **Configure as Variáveis de Ambiente:**
    Crie um arquivo `.env.local` na raiz e adicione:
    ```env
    NEXT_PUBLIC_GA_ID=G-FY0FH456B1
    ```

4.  **Inicie o servidor de desenvolvimento:**
    ```bash
    npm run dev
    ```
    Acesse: `http://localhost:3000`

---

## 📦 Deploy na Vercel

O deploy foi realizado conectando o repositório do GitHub à Vercel. As variáveis de ambiente foram configuradas diretamente no painel da Vercel para garantir a segurança das chaves de API.

---

## 👤 Desenvolvedor

Projeto desenvolvido com foco em soluções práticas para empresas locais.

* **Nome:** Ademar José Martins Junior
* **Localização:** Porto Velho, RO
* **Especialidade:** Eletrônica e Desenvolvimento de Software (Flutter/Next.js)

---
*Este projeto faz parte de um portfólio de soluções digitais para prestadores de serviço.*