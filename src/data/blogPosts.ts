export type BlogCategory = "ai" | "technology" | "career" | "travel";

export type ContentBlock =
  | { type: "paragraph"; text: string }
  | { type: "heading"; text: string }
  | { type: "list"; items: string[] }
  | { type: "quote"; text: string }
  | { type: "code"; language?: string; code: string }
  | { type: "image"; src: string; alt?: string; caption?: string };

export type Lang = "en" | "pt" | "es";

export interface LocalizedContent {
  title: string;
  excerpt: string;
  content: ContentBlock[];
}

export interface BlogPost {
  slug: string;
  category: BlogCategory;
  tags: string[];
  date: string; // ISO format YYYY-MM-DD
  readTime: number; // minutes
  cover?: string; // optional image url
  featured?: boolean;
  /** Same post translated into every supported language. */
  translations: Record<Lang, LocalizedContent>;
}

/**
 * To publish a new post, just add a new object to this array.
 * - `slug` must be unique (used in the URL: /blog/your-slug)
 * - `category` can be "ai", "technology", "career" or "travel"
 * - `translations` must contain en, pt and es. English is the default fallback.
 * - `content` is a list of blocks (paragraph, heading, list, quote, code, image)
 */
export const blogPosts: BlogPost[] = [
  {
    slug: "atomic-design-methodology-for-design-systems",
    category: "technology",
    cover: "/assets/blog/atomic_design/4.png",
    tags: [
      "Atomic Design",
      "Design Systems",
      "UI/UX",
      "React",
      "TypeScript",
      "Architecture",
    ],
    date: "2026-06-28",
    readTime: 11,
    featured: true,
    translations: {
      en: {
        title:
          "From Atoms to Pages: The Atomic Design Methodology for Scalable Design Systems",
        excerpt:
          "A deep dive into Brad Frost's Atomic Design — the chemistry-inspired methodology for building scalable design systems — and how I applied it, level by level, to architect this very portfolio.",
        content: [
          {
            type: "paragraph",
            text: "Every time someone visits a portfolio, they only see the top layer: the animations, the colors, the projects. But for me, the most interesting part has always been under the hood. In this article I open the source of this very site and explain, from scratch, how it was designed: the stack, the architecture pattern, the folder organization and the decisions that make the project easy to maintain and evolve.",
          },
          {
            type: "heading",
            text: "The stack: the technologies that power the project",
          },
          {
            type: "paragraph",
            text: "Before talking about architecture, it helps to understand the tools. I prioritized a modern, type-safe set with an excellent developer experience and no unnecessary weight. Everything runs as a purely front-end SPA (Single Page Application), with no backend.",
          },
          {
            type: "list",
            items: [
              "React 18 — the declarative foundation for building the interface in components.",
              "TypeScript — static typing to catch errors right in the editor, not in production.",
              "Vite — an ultra-fast build tool and dev server with instant Hot Module Replacement.",
              "styled-components — CSS-in-JS with component-scoped styles and native theming support.",
              "React Router DOM — declarative routing between the Home and the blog pages.",
              "i18next + react-i18next — internationalization in three languages (PT, EN, ES).",
              "react-icons — a unified icon library (Feather, Ant Design, Bootstrap...).",
              "Swiper — the carousel used in the testimonials section.",
              "EmailJS — sending the contact form straight from the front end, with no server.",
            ],
          },
          {
            type: "heading",
            text: "Why Vite (and not Create React App)",
          },
          {
            type: "paragraph",
            text: "Vite changed my workflow. Instead of bundling everything on every change, it serves modules on demand through the browser's native ES Modules. In practice, the server boots in under half a second and any change shows up on screen almost instantly. For the production build it uses Rollup, generating an optimized bundle. It is lightweight in development and performant in delivery.",
          },
          {
            type: "heading",
            text: "Atomic Design: thinking of the UI as Lego blocks",
          },
          {
            type: "paragraph",
            text: "The heart of the architecture is Atomic Design, a methodology created by Brad Frost. He borrowed an analogy from chemistry: in nature, everything is made of atoms — the smallest, indivisible units of matter.",
          },
          {
            type: "image",
            src: "/assets/blog/atomic_design/1.png",
            alt: "Structure of an atom",
            caption: "Atoms are the smallest building blocks. In an interface, they map to things like a label, an input or a button.",
          },
          {
            type: "paragraph",
            text: "Atoms bond together to form molecules — slightly more complex structures with their own properties. A search field, for example, is a molecule made of a label atom, an input atom and a button atom working as a single unit.",
          },
          {
            type: "image",
            src: "/assets/blog/atomic_design/2.png",
            alt: "Water molecule",
            caption: "Molecules: a few atoms combined into a small, reusable group with a single, clear purpose.",
          },
          {
            type: "paragraph",
            text: "Molecules group into organisms, organisms fill out templates, and templates become real pages. Translating that chemistry to code, I organized this site's components into three core levels, sitting on top of a layer of design tokens:",
          },
          {
            type: "list",
            items: [
              "Atoms (Atomos) — the indivisible blocks, such as the language switcher (ChangeLanguage) and the filter tabs (NavTab).",
              "Molecules — small groups of atoms with a single purpose, like the CTA button, the social icons (HeaderSocial) and the blog card (BlogCard).",
              "Organisms (Organism) — complete, independent page sections: Header, Nav, Portfolio, About, Services, Testimonials, Contact and Footer.",
            ],
          },
          {
            type: "paragraph",
            text: "The pages are simply the composition of these organisms. The Home, for example, is literally a sequence of stacked organisms — which makes it easy to reorder sections or add new ones, as was the case with the blog.",
          },
          {
            type: "image",
            src: "/assets/blog/atomic_design/4.png",
            alt: "Atomic Design applied to a UI: sub-atomic, atoms, molecules, organisms, templates and pages",
            caption: "The full spectrum applied to interfaces: from design tokens and atoms all the way up to finished pages.",
          },
          {
            type: "quote",
            text: "Good architecture is not about writing clever code; it is about writing code that someone else (or you, six months from now) can understand in minutes.",
          },
          { type: "heading", text: "The folder structure" },
          {
            type: "paragraph",
            text: "The directory organization follows Atomic Design directly, with responsibilities clearly separated between components, data, styles, routes and translations:",
          },
          {
            type: "code",
            language: "bash",
            code: "src/\n  components/\n    Atomos/        -> ChangeLanguage, NavTab\n    Molecules/     -> Cta, HeaderSocial, BlogCard\n    Organism/      -> Header, Nav, Portfolio, About,\n                      Services, Testimonials, Blog...\n  pages/           -> Home, Blog, BlogPost\n  data/            -> blogPosts.ts, blogCategories.ts\n  styles/          -> global.ts, themes/\n  translate/       -> json (pt, en, es)\n  routes/          -> index.tsx\n  context/         -> global app context",
          },
          {
            type: "paragraph",
            text: "Each component lives in its own folder with two files: index.tsx (the logic and markup) and styles.ts (the styles). This separation keeps files short and the styling always next to the component it belongs to.",
          },
          {
            type: "heading",
            text: "Styling with styled-components and a central theme",
          },
          {
            type: "paragraph",
            text: "The whole visual identity comes from a single theme file. Colors, transitions and container widths are centralized, and any component consumes those values via props.theme. Changing the primary color of the entire site is a matter of editing one line.",
          },
          {
            type: "code",
            language: "typescript",
            code: "export const defaultTheme = {\n  color_bg: '#1f1f38',\n  color_bg_variant: '#2c2c6c',\n  color_primary: '#4db5ff',\n  color_white: '#fff',\n  color_light: 'rgba(255,255,255, 0.6)',\n  transition: 'all 400ms ease',\n  container_width_lg: '75%',\n};",
          },
          {
            type: "image",
            src: "/assets/blog/atomic_design/3.png",
            alt: "Design tokens highlighted on a real interface",
            caption: "Subatomic particles: the design tokens (colors, typography, spacing) that every atom is made of.",
          },
          {
            type: "paragraph",
            text: "These values are what Atomic Design calls the 'subatomic particles' — in modern terms, design tokens. Centralizing them in a single theme is exactly what keeps the whole interface coherent: change one token and it cascades everywhere.",
          },
          {
            type: "paragraph",
            text: "Together with a GlobalStyle that defines the CSS reset, the typography (Poppins) and utility classes like .container and .btn, this guarantees visual consistency across every page without repeating CSS.",
          },
          {
            type: "heading",
            text: "Internationalization: one site, three languages",
          },
          {
            type: "paragraph",
            text: "All interface text lives in JSON files split by language (pt, en, es). Components never hardcode text: they use the useTranslation hook and keys like t('Blog.title'). i18next also auto-detects the browser language and stores the preference in localStorage. Even the blog posts are translated this way, so every article shows up in the reader's language. Adding a fourth language would just mean creating one more JSON.",
          },
          {
            type: "heading",
            text: "Routing and the blog data layer",
          },
          {
            type: "paragraph",
            text: "The blog was the most recent addition and shows the strength of this architecture well. It only took creating two new routes — one for the listing and another for the individual post — and isolating all the content in a data layer decoupled from the interface.",
          },
          {
            type: "code",
            language: "tsx",
            code: '<Routes>\n  <Route path="/" element={<Home />} />\n  <Route path="/blog" element={<Blog />} />\n  <Route path="/blog/:slug" element={<BlogPost />} />\n</Routes>',
          },
          {
            type: "paragraph",
            text: "The posts live in a single file (data/blogPosts.ts), where each article is an object with title, category, cover and content structured into blocks (paragraph, heading, list, quote, code, image), translated into each language. The pages just render those blocks. This decoupling is intentional: tomorrow I could swap the data source for a CMS or Markdown files without rewriting a single visual component.",
          },
          { type: "heading", text: "Lessons from this architecture" },
          {
            type: "list",
            items: [
              "Componentizing small pays off: I reused the BlogCard both in the listing and in the related-posts section.",
              "Centralizing the theme and the texts turns global changes into one-line edits.",
              "Separating data from presentation keeps the project ready to grow without technical debt.",
              "A predictable structure is, in practice, documentation: any developer finds what they need fast.",
            ],
          },
          {
            type: "paragraph",
            text: "In the end, this site is more than a business card: it is a living demonstration of how I think about software. Clean architecture, conscious decisions and code that anyone can open and understand. If you made it this far driven by curiosity about how it was all built, I hope I have opened a good window into the behind-the-scenes.",
          },
          {
            type: "paragraph",
            text: "This article adapts and builds on Rohan Kamath's excellent piece, 'Atomic Design methodology for building design systems' (blog.kamathrohan.com), applying its concepts and visuals to a real React + TypeScript codebase.",
          },
        ],
      },
      es: {
        title:
          "De Átomos a Páginas: La Metodología Atomic Design para Design Systems Escalables",
        excerpt:
          "Una inmersión en el Atomic Design de Brad Frost — la metodología inspirada en la química para construir design systems escalables — y cómo lo apliqué, nivel a nivel, en la arquitectura de este portafolio.",
        content: [
          {
            type: "paragraph",
            text: "Cada vez que alguien visita un portafolio, solo ve la capa superior: las animaciones, los colores, los proyectos. Pero, para mí, lo más interesante siempre ha estado bajo el capó. En este artículo abro el código de este mismo sitio y explico, desde cero, cómo fue pensado: el stack, el patrón de arquitectura, la organización de las carpetas y las decisiones que hacen que el proyecto sea fácil de mantener y evolucionar.",
          },
          {
            type: "heading",
            text: "El stack: las tecnologías que mueven el proyecto",
          },
          {
            type: "paragraph",
            text: "Antes de hablar de arquitectura, conviene entender las herramientas. Prioricé un conjunto moderno, type-safe y con una excelente experiencia de desarrollo, sin peso innecesario. Todo funciona como una SPA (Single Page Application) puramente en el front-end, sin backend.",
          },
          {
            type: "list",
            items: [
              "React 18 — la base declarativa para construir la interfaz en componentes.",
              "TypeScript — tipado estático para detectar errores en el editor, no en producción.",
              "Vite — build tool y dev server ultrarrápidos, con Hot Module Replacement instantáneo.",
              "styled-components — CSS-in-JS con estilos por componente y soporte nativo de temas.",
              "React Router DOM — enrutamiento declarativo entre la Home y las páginas del blog.",
              "i18next + react-i18next — internacionalización en tres idiomas (PT, EN, ES).",
              "react-icons — biblioteca unificada de íconos (Feather, Ant Design, Bootstrap...).",
              "Swiper — el carrusel usado en la sección de testimonios.",
              "EmailJS — envío del formulario de contacto directo desde el front, sin servidor.",
            ],
          },
          {
            type: "heading",
            text: "Por qué Vite (y no Create React App)",
          },
          {
            type: "paragraph",
            text: "Vite cambió mi flujo de trabajo. En lugar de empaquetar todo en cada cambio, sirve los módulos bajo demanda mediante los ES Modules nativos del navegador. En la práctica, el servidor arranca en menos de medio segundo y cualquier cambio aparece en pantalla casi al instante. Para el build de producción usa Rollup, generando un bundle optimizado. Es ligereza en el desarrollo y rendimiento en la entrega.",
          },
          {
            type: "heading",
            text: "Atomic Design: pensar la UI como bloques de Lego",
          },
          {
            type: "paragraph",
            text: "El corazón de la arquitectura es Atomic Design, metodología creada por Brad Frost. Tomó prestada una analogía de la química: en la naturaleza, todo está hecho de átomos, las unidades más pequeñas e indivisibles de la materia.",
          },
          {
            type: "image",
            src: "/assets/blog/atomic_design/1.png",
            alt: "Estructura de un átomo",
            caption: "Los átomos son los bloques más pequeños. En una interfaz equivalen a una etiqueta, un input o un botón.",
          },
          {
            type: "paragraph",
            text: "Los átomos se unen para formar moléculas, estructuras algo más complejas con propiedades propias. Un campo de búsqueda, por ejemplo, es una molécula formada por un átomo de etiqueta, uno de input y uno de botón funcionando como una sola unidad.",
          },
          {
            type: "image",
            src: "/assets/blog/atomic_design/2.png",
            alt: "Molécula de agua",
            caption: "Moléculas: unos pocos átomos combinados en un grupo pequeño y reutilizable con un propósito claro.",
          },
          {
            type: "paragraph",
            text: "Las moléculas se agrupan en organismos, los organismos completan plantillas y las plantillas se convierten en páginas reales. Llevando esa química al código, organicé los componentes de este sitio en tres niveles principales, sobre una capa de design tokens:",
          },
          {
            type: "list",
            items: [
              "Átomos (Atomos) — los bloques indivisibles, como el selector de idioma (ChangeLanguage) y las pestañas de filtro (NavTab).",
              "Moléculas (Molecules) — pequeños grupos de átomos con una función, como el botón CTA, los íconos sociales (HeaderSocial) y la tarjeta del blog (BlogCard).",
              "Organismos (Organism) — secciones completas e independientes de la página: Header, Nav, Portfolio, About, Services, Testimonials, Contact y Footer.",
            ],
          },
          {
            type: "paragraph",
            text: "Las páginas (pages) son solo la composición de esos organismos. La Home, por ejemplo, es literalmente una secuencia de organismos apilados, lo que facilita reordenar secciones o agregar nuevas, como fue el caso del blog.",
          },
          {
            type: "image",
            src: "/assets/blog/atomic_design/4.png",
            alt: "Atomic Design aplicado a una UI: sub-atómico, átomos, moléculas, organismos, plantillas y páginas",
            caption: "El espectro completo aplicado a interfaces: desde los design tokens y los átomos hasta las páginas terminadas.",
          },
          {
            type: "quote",
            text: "La buena arquitectura no se trata de escribir código ingenioso; se trata de escribir código que otra persona (o tú dentro de seis meses) pueda entender en minutos.",
          },
          { type: "heading", text: "La estructura de carpetas" },
          {
            type: "paragraph",
            text: "La organización del directorio sigue directamente Atomic Design, con responsabilidades bien separadas entre componentes, datos, estilos, rutas y traducciones:",
          },
          {
            type: "code",
            language: "bash",
            code: "src/\n  components/\n    Atomos/        -> ChangeLanguage, NavTab\n    Molecules/     -> Cta, HeaderSocial, BlogCard\n    Organism/      -> Header, Nav, Portfolio, About,\n                      Services, Testimonials, Blog...\n  pages/           -> Home, Blog, BlogPost\n  data/            -> blogPosts.ts, blogCategories.ts\n  styles/          -> global.ts, themes/\n  translate/       -> json (pt, en, es)\n  routes/          -> index.tsx\n  context/         -> global app context",
          },
          {
            type: "paragraph",
            text: "Cada componente vive en su propia carpeta con dos archivos: index.tsx (la lógica y el marcado) y styles.ts (los estilos). Esta separación mantiene los archivos cortos y el estilo siempre junto al componente al que pertenece.",
          },
          {
            type: "heading",
            text: "Estilización con styled-components y un tema central",
          },
          {
            type: "paragraph",
            text: "Toda la identidad visual nace de un único archivo de tema. Los colores, transiciones y anchos de contenedor están centralizados, y cualquier componente consume esos valores vía props.theme. Cambiar el color primario de todo el sitio es cuestión de editar una línea.",
          },
          {
            type: "code",
            language: "typescript",
            code: "export const defaultTheme = {\n  color_bg: '#1f1f38',\n  color_bg_variant: '#2c2c6c',\n  color_primary: '#4db5ff',\n  color_white: '#fff',\n  color_light: 'rgba(255,255,255, 0.6)',\n  transition: 'all 400ms ease',\n  container_width_lg: '75%',\n};",
          },
          {
            type: "image",
            src: "/assets/blog/atomic_design/3.png",
            alt: "Design tokens resaltados sobre una interfaz real",
            caption: "Partículas subatómicas: los design tokens (colores, tipografía, espaciado) de los que está hecho cada átomo.",
          },
          {
            type: "paragraph",
            text: "Estos valores son lo que Atomic Design llama las 'partículas subatómicas' — en términos modernos, los design tokens. Centralizarlos en un único tema es justo lo que mantiene coherente toda la interfaz: cambias un token y se propaga a todas partes.",
          },
          {
            type: "paragraph",
            text: "Junto con un GlobalStyle que define el reset de CSS, la tipografía (Poppins) y clases utilitarias como .container y .btn, esto garantiza consistencia visual en todas las páginas sin repetir CSS.",
          },
          {
            type: "heading",
            text: "Internacionalización: un sitio, tres idiomas",
          },
          {
            type: "paragraph",
            text: "Todo el texto de la interfaz vive en archivos JSON separados por idioma (pt, en, es). Los componentes nunca incluyen texto fijo: usan el hook useTranslation y claves como t('Blog.title'). i18next además detecta automáticamente el idioma del navegador y guarda la preferencia en localStorage. Incluso las publicaciones del blog están traducidas así, para que cada artículo aparezca en el idioma del lector. Agregar un cuarto idioma sería solo crear un JSON más.",
          },
          {
            type: "heading",
            text: "Enrutamiento y la capa de datos del blog",
          },
          {
            type: "paragraph",
            text: "El blog fue la incorporación más reciente y muestra bien la fuerza de esta arquitectura. Solo hizo falta crear dos rutas nuevas, una para el listado y otra para la publicación individual, y aislar todo el contenido en una capa de datos desacoplada de la interfaz.",
          },
          {
            type: "code",
            language: "tsx",
            code: '<Routes>\n  <Route path="/" element={<Home />} />\n  <Route path="/blog" element={<Blog />} />\n  <Route path="/blog/:slug" element={<BlogPost />} />\n</Routes>',
          },
          {
            type: "paragraph",
            text: "Las publicaciones viven en un único archivo (data/blogPosts.ts), donde cada artículo es un objeto con título, categoría, portada y un contenido estructurado en bloques (párrafo, título, lista, cita, código, imagen), traducido a cada idioma. Las páginas solo renderizan esos bloques. Este desacople es intencional: mañana podría cambiar la fuente de datos por un CMS o archivos Markdown sin reescribir ningún componente visual.",
          },
          { type: "heading", text: "Lecciones de esta arquitectura" },
          {
            type: "list",
            items: [
              "Componentizar en pequeño vale la pena: reutilicé el BlogCard tanto en el listado como en la sección de publicaciones relacionadas.",
              "Centralizar el tema y los textos convierte los cambios globales en ediciones de una línea.",
              "Separar datos de presentación deja el proyecto listo para crecer sin deuda técnica.",
              "Una estructura predecible es, en la práctica, documentación: cualquier desarrollador encuentra lo que busca rápido.",
            ],
          },
          {
            type: "paragraph",
            text: "Al final, este sitio es más que una tarjeta de presentación: es una demostración viva de cómo pienso el software. Arquitectura limpia, decisiones conscientes y un código que cualquiera puede abrir y entender. Si llegaste hasta aquí movido por la curiosidad de cómo se hizo todo, espero haber abierto una buena ventana a lo que hay detrás de escena.",
          },
          {
            type: "paragraph",
            text: "Este artículo adapta y amplía el excelente texto de Rohan Kamath, 'Atomic Design methodology for building design systems' (blog.kamathrohan.com), aplicando sus conceptos y gráficos a una base de código real en React + TypeScript.",
          },
        ],
      },
      pt: {
        title:
          "De Átomos a Páginas: A Metodologia Atomic Design para Design Systems Escaláveis",
        excerpt:
          "Um mergulho no Atomic Design de Brad Frost — a metodologia inspirada na química para construir design systems escaláveis — e como apliquei, nível a nível, na arquitetura deste portfólio.",
        content: [
          {
            type: "paragraph",
            text: "Toda vez que alguém visita um portfólio, vê apenas a camada de cima: as animações, as cores, os projetos. Mas, para mim, o mais interessante sempre esteve embaixo do capô. Neste artigo abro o código deste próprio site e explico, do zero, como ele foi pensado: a stack, o padrão de arquitetura, a organização das pastas e as decisões que tornam o projeto fácil de manter e de evoluir.",
          },
          {
            type: "heading",
            text: "A stack: as tecnologias que movem o projeto",
          },
          {
            type: "paragraph",
            text: "Antes de falar de arquitetura, vale entender as ferramentas. Eu priorizei um conjunto moderno, type-safe e com excelente experiência de desenvolvimento, sem peso desnecessário. Tudo roda como uma SPA (Single Page Application) puramente no front-end, sem backend.",
          },
          {
            type: "list",
            items: [
              "React 18 — a base declarativa para construir a interface em componentes.",
              "TypeScript — tipagem estática para pegar erros ainda no editor, não em produção.",
              "Vite — build tool e dev server ultrarrápidos, com Hot Module Replacement instantâneo.",
              "styled-components — CSS-in-JS com escopo por componente e suporte nativo a temas.",
              "React Router DOM — roteamento declarativo entre a Home e as páginas do blog.",
              "i18next + react-i18next — internacionalização em três idiomas (PT, EN, ES).",
              "react-icons — biblioteca unificada de ícones (Feather, Ant Design, Bootstrap...).",
              "Swiper — carrossel usado na seção de depoimentos.",
              "EmailJS — envio do formulário de contato direto do front, sem servidor.",
            ],
          },
          {
            type: "heading",
            text: "Por que Vite (e não Create React App)",
          },
          {
            type: "paragraph",
            text: "O Vite mudou meu fluxo de trabalho. Em vez de empacotar tudo a cada alteração, ele serve os módulos sob demanda via ESModules nativos do navegador. Na prática, o servidor sobe em menos de meio segundo e qualquer mudança aparece na tela quase instantaneamente. Para o build de produção ele usa o Rollup, gerando um bundle otimizado. É leveza no desenvolvimento e performance na entrega.",
          },
          {
            type: "heading",
            text: "Atomic Design: pensando a UI como blocos de Lego",
          },
          {
            type: "paragraph",
            text: "O coração da arquitetura é o Atomic Design, metodologia criada por Brad Frost. Ele tomou emprestada uma analogia da química: na natureza, tudo é feito de átomos — as menores unidades indivisíveis da matéria.",
          },
          {
            type: "image",
            src: "/assets/blog/atomic_design/1.png",
            alt: "Estrutura de um átomo",
            caption: "Átomos são os menores blocos de construção. Numa interface, equivalem a um rótulo, um input ou um botão.",
          },
          {
            type: "paragraph",
            text: "Os átomos se ligam para formar moléculas — estruturas um pouco mais complexas, com propriedades próprias. Um campo de busca, por exemplo, é uma molécula feita de um átomo de rótulo, um de input e um de botão funcionando como uma unidade.",
          },
          {
            type: "image",
            src: "/assets/blog/atomic_design/2.png",
            alt: "Molécula de água",
            caption: "Moléculas: alguns átomos combinados em um grupo pequeno e reutilizável, com um propósito claro.",
          },
          {
            type: "paragraph",
            text: "Moléculas se agrupam em organismos, organismos preenchem templates, e templates viram páginas reais. Levando essa química para o código, organizei os componentes deste site em três níveis principais, apoiados sobre uma camada de design tokens:",
          },
          {
            type: "list",
            items: [
              "Átomos (Atomos) — os blocos indivisíveis, como o seletor de idioma (ChangeLanguage) e as abas de filtro (NavTab).",
              "Moléculas (Molecules) — pequenos grupos de átomos com uma função, como o botão de CTA, os ícones sociais (HeaderSocial) e o card do blog (BlogCard).",
              "Organismos (Organism) — seções completas e independentes da página: Header, Nav, Portfolio, About, Services, Testimonials, Contact e Footer.",
            ],
          },
          {
            type: "paragraph",
            text: "As páginas (pages) são apenas a composição desses organismos. A Home, por exemplo, é literalmente uma sequência de organismos empilhados — o que torna fácil reordenar seções ou adicionar novas, como foi o caso do blog.",
          },
          {
            type: "image",
            src: "/assets/blog/atomic_design/4.png",
            alt: "Atomic Design aplicado a uma UI: sub-atômico, átomos, moléculas, organismos, templates e páginas",
            caption: "O espectro completo aplicado a interfaces: dos design tokens e átomos até as páginas finalizadas.",
          },
          {
            type: "quote",
            text: "Boa arquitetura não é sobre escrever código esperto; é sobre escrever código que outra pessoa (ou você daqui a seis meses) consiga entender em minutos.",
          },
          { type: "heading", text: "A estrutura de pastas" },
          {
            type: "paragraph",
            text: "A organização do diretório segue diretamente o Atomic Design, com responsabilidades bem separadas entre componentes, dados, estilos, rotas e traduções:",
          },
          {
            type: "code",
            language: "bash",
            code: "src/\n  components/\n    Atomos/        -> ChangeLanguage, NavTab\n    Molecules/     -> Cta, HeaderSocial, BlogCard\n    Organism/      -> Header, Nav, Portfolio, About,\n                      Services, Testimonials, Blog...\n  pages/           -> Home, Blog, BlogPost\n  data/            -> blogPosts.ts, blogCategories.ts\n  styles/          -> global.ts, themes/\n  translate/       -> json (pt, en, es)\n  routes/          -> index.tsx\n  context/         -> Context global da aplicacao",
          },
          {
            type: "paragraph",
            text: "Cada componente vive na própria pasta com dois arquivos: index.tsx (a lógica e a marcação) e styles.ts (os estilos). Essa separação mantém os arquivos curtos e o estilo sempre ao lado do componente a que pertence.",
          },
          {
            type: "heading",
            text: "Estilização com styled-components e um tema central",
          },
          {
            type: "paragraph",
            text: "Toda a identidade visual nasce de um único arquivo de tema. As cores, transições e larguras de container ficam centralizadas, e qualquer componente consome esses valores via props.theme. Mudar a cor primária do site inteiro é questão de editar uma linha.",
          },
          {
            type: "code",
            language: "typescript",
            code: "export const defaultTheme = {\n  color_bg: '#1f1f38',\n  color_bg_variant: '#2c2c6c',\n  color_primary: '#4db5ff',\n  color_white: '#fff',\n  color_light: 'rgba(255,255,255, 0.6)',\n  transition: 'all 400ms ease',\n  container_width_lg: '75%',\n};",
          },
          {
            type: "image",
            src: "/assets/blog/atomic_design/3.png",
            alt: "Design tokens destacados sobre uma interface real",
            caption: "Partículas subatômicas: os design tokens (cores, tipografia, espaçamento) de que cada átomo é feito.",
          },
          {
            type: "paragraph",
            text: "Esses valores são o que o Atomic Design chama de 'partículas subatômicas' — em termos modernos, os design tokens. Centralizá-los em um único tema é justamente o que mantém toda a interface coerente: muda um token e ele se propaga por toda parte.",
          },
          {
            type: "paragraph",
            text: "Junto com um GlobalStyle que define o reset de CSS, a tipografia (Poppins) e classes utilitárias como .container e .btn, isso garante consistência visual em todas as páginas sem repetir CSS.",
          },
          {
            type: "heading",
            text: "Internacionalização: um site, três idiomas",
          },
          {
            type: "paragraph",
            text: "Todo o texto da interface fica em arquivos JSON separados por idioma (pt, en, es). Os componentes nunca trazem texto fixo: usam o hook useTranslation e chaves como t('Blog.title'). O i18next ainda detecta automaticamente o idioma do navegador e guarda a preferência no localStorage. Adicionar um quarto idioma seria só criar mais um JSON.",
          },
          {
            type: "heading",
            text: "Roteamento e a camada de dados do blog",
          },
          {
            type: "paragraph",
            text: "O blog foi a adição mais recente e mostra bem a força dessa arquitetura. Bastou criar duas rotas novas — uma para a listagem e outra para o post individual — e isolar todo o conteúdo numa camada de dados desacoplada da interface.",
          },
          {
            type: "code",
            language: "tsx",
            code: "<Routes>\n  <Route path=\"/\" element={<Home />} />\n  <Route path=\"/blog\" element={<Blog />} />\n  <Route path=\"/blog/:slug\" element={<BlogPost />} />\n</Routes>",
          },
          {
            type: "paragraph",
            text: "Os posts vivem em um único arquivo (data/blogPosts.ts), onde cada artigo é um objeto com título, categoria, capa e um conteúdo estruturado em blocos (parágrafo, título, lista, citação, código, imagem). As páginas apenas renderizam esses blocos. Esse desacoplamento é proposital: amanhã eu posso trocar a fonte de dados por um CMS ou por arquivos Markdown sem reescrever nenhum componente visual.",
          },
          { type: "heading", text: "Lições que tirei dessa arquitetura" },
          {
            type: "list",
            items: [
              "Componentizar pequeno compensa: reutilizei o BlogCard tanto na listagem quanto na seção de posts relacionados.",
              "Centralizar o tema e os textos transforma mudanças globais em edições de uma linha.",
              "Separar dados de apresentação deixa o projeto pronto para crescer sem dívida técnica.",
              "Uma estrutura previsível é, na prática, documentação: qualquer dev encontra o que procura rápido.",
            ],
          },
          {
            type: "paragraph",
            text: "No fim, este site é mais do que um cartão de visitas: é uma demonstração viva de como eu penso software. Arquitetura limpa, decisões conscientes e um código que qualquer pessoa consegue abrir e entender. Se você chegou até aqui movido pela curiosidade de como tudo foi feito, espero ter aberto uma boa janela para os bastidores.",
          },
          {
            type: "paragraph",
            text: "Este artigo adapta e expande o excelente texto de Rohan Kamath, 'Atomic Design methodology for building design systems' (blog.kamathrohan.com), aplicando seus conceitos e ilustrações a uma base de código real em React + TypeScript.",
          },
        ],
      },
    },
  },
  {
    slug: "neural-networks-from-a-single-neuron-to-deep-learning",
    category: "ai",
    cover: "/assets/blog/neural_networking/image.png",
    tags: [
      "AI",
      "Neural Networks",
      "Deep Learning",
      "Machine Learning",
      "Python",
    ],
    date: "2026-06-29",
    readTime: 10,
    translations: {
      en: {
        title:
          "Neural Networks Explained: From a Single Neuron to Deep Learning",
        excerpt:
          "What actually happens inside a neural network? A friendly, from-scratch walkthrough of neurons, weights, activation functions, training and why deep learning changed everything.",
        content: [
          {
            type: "paragraph",
            text: "Neural networks power everything from the photos your phone organizes to the chatbots you talk to. They sound intimidating, but the core idea is surprisingly simple — and it is borrowed straight from biology. In this article we build the intuition from the ground up, one neuron at a time.",
          },
          {
            type: "heading",
            text: "The biological inspiration",
          },
          {
            type: "paragraph",
            text: "Your brain has roughly 86 billion neurons. Each one receives electrical signals through its dendrites, decides whether the combined signal is strong enough, and — if so — fires its own signal down to the next neurons. An artificial neuron is a tiny mathematical caricature of exactly this behavior.",
          },
          {
            type: "heading",
            text: "The artificial neuron",
          },
          {
            type: "paragraph",
            text: "An artificial neuron takes a list of numbers as input. It multiplies each input by a weight (how important that input is), adds them all up together with a bias, and passes the result through an activation function that decides the neuron's final output.",
          },
          {
            type: "code",
            language: "python",
            code: "import numpy as np\n\ndef sigmoid(z):\n    return 1 / (1 + np.exp(-z))\n\ndef neuron(inputs, weights, bias):\n    z = np.dot(inputs, weights) + bias\n    return sigmoid(z)",
          },
          {
            type: "heading",
            text: "Weights, bias and activation functions",
          },
          {
            type: "paragraph",
            text: "Weights and bias are the parts the network actually learns. The activation function is what gives the network its power: without it, stacking neurons would only ever produce a straight line. Non-linear activations let the network bend and curve to fit complex patterns.",
          },
          {
            type: "list",
            items: [
              "Sigmoid — squashes any value into a 0-1 range; great for probabilities.",
              "ReLU — returns 0 for negatives and the value itself for positives; fast and the default for hidden layers.",
              "Tanh — like sigmoid but centered on zero (-1 to 1).",
              "Softmax — turns a vector of scores into probabilities that sum to 1; used for classification.",
            ],
          },
          {
            type: "heading",
            text: "Layers: stacking neurons together",
          },
          {
            type: "paragraph",
            text: "One neuron alone is weak. The magic happens when we organize them into layers: an input layer that receives the data, one or more hidden layers that transform it, and an output layer that produces the answer. Every neuron in a layer is connected to every neuron in the next — that is what we call a fully connected network.",
          },
          {
            type: "image",
            src: "/assets/blog/neural_networking/image.png",
            alt: "Neural network trained in R on the Iris dataset",
            caption: "A network I trained in R to classify Iris flowers: four inputs (petal and sepal measurements), hidden layers, and one output — the species.",
          },
          {
            type: "paragraph",
            text: "The diagram above comes from a real project I built during my master's degree using R and the neuralnet package. Each arrow is a weight the network learned on its own; after 26,200 training steps the error dropped to just 0.0017. You can explore the full code on GitHub: github.com/danrleyney2210/Redes_Neurais_em_R.",
          },
          {
            type: "quote",
            text: "A neural network is just a very flexible function that learns its own shape from data.",
          },
          {
            type: "heading",
            text: "How a network learns: training",
          },
          {
            type: "paragraph",
            text: "At first the weights are random, so the predictions are nonsense. Training is the loop that fixes this. We measure how wrong the network is with a loss function, then use backpropagation and gradient descent to nudge every weight in the direction that reduces the error — a little at a time, over many passes through the data.",
          },
          {
            type: "list",
            items: [
              "Forward pass — feed the inputs through the network to get a prediction.",
              "Compute the loss — compare the prediction to the correct answer.",
              "Backpropagation — calculate how much each weight contributed to the error.",
              "Update the weights — adjust them slightly using gradient descent.",
              "Repeat — do this for many examples across many epochs until the loss is low.",
            ],
          },
          {
            type: "heading",
            text: "What makes it 'deep' learning",
          },
          {
            type: "paragraph",
            text: "Deep learning simply means a neural network with many hidden layers. Each layer learns increasingly abstract features: in an image network, the first layers detect edges, the next ones shapes, and the deepest ones whole objects like faces or cats. This became practical only recently thanks to huge datasets and powerful GPUs.",
          },
          {
            type: "list",
            items: [
              "Computer vision — convolutional networks (CNNs) for recognizing images.",
              "Language — Transformers and large language models (LLMs) like the one you may be reading about.",
              "Speech — turning audio into text and back again.",
              "Recommendations — predicting what you might want to watch or buy next.",
            ],
          },
          {
            type: "heading",
            text: "A mental model to keep",
          },
          {
            type: "paragraph",
            text: "Picture a giant control panel covered in millions of tiny knobs. Each knob is a weight. Training is the automatic process of turning those knobs until the right inputs produce the right outputs. That, stripped of the math, is all a neural network really is — and understanding that intuition is the first real step into the world of AI.",
          },
        ],
      },
      es: {
        title:
          "Redes Neuronales Explicadas: de una Sola Neurona al Deep Learning",
        excerpt:
          "¿Qué ocurre realmente dentro de una red neuronal? Un recorrido desde cero por neuronas, pesos, funciones de activación, entrenamiento y por qué el deep learning lo cambió todo.",
        content: [
          {
            type: "paragraph",
            text: "Las redes neuronales están detrás de todo: desde las fotos que tu teléfono organiza hasta los chatbots con los que hablas. Suenan intimidantes, pero la idea central es sorprendentemente simple — y está tomada directamente de la biología. En este artículo construimos la intuición desde cero, neurona por neurona.",
          },
          {
            type: "heading",
            text: "La inspiración biológica",
          },
          {
            type: "paragraph",
            text: "Tu cerebro tiene unas 86 mil millones de neuronas. Cada una recibe señales eléctricas a través de sus dendritas, decide si la señal combinada es lo bastante fuerte y, si lo es, dispara su propia señal hacia las siguientes neuronas. Una neurona artificial es una diminuta caricatura matemática de exactamente este comportamiento.",
          },
          {
            type: "heading",
            text: "La neurona artificial",
          },
          {
            type: "paragraph",
            text: "Una neurona artificial recibe una lista de números como entrada. Multiplica cada entrada por un peso (qué tan importante es esa entrada), los suma todos junto con un sesgo (bias) y pasa el resultado por una función de activación que decide la salida final de la neurona.",
          },
          {
            type: "code",
            language: "python",
            code: "import numpy as np\n\ndef sigmoid(z):\n    return 1 / (1 + np.exp(-z))\n\ndef neuron(inputs, weights, bias):\n    z = np.dot(inputs, weights) + bias\n    return sigmoid(z)",
          },
          {
            type: "heading",
            text: "Pesos, sesgo y funciones de activación",
          },
          {
            type: "paragraph",
            text: "Los pesos y el sesgo son lo que la red realmente aprende. La función de activación es lo que le da su poder: sin ella, apilar neuronas solo produciría una línea recta. Las activaciones no lineales permiten que la red se curve para ajustarse a patrones complejos.",
          },
          {
            type: "list",
            items: [
              "Sigmoid — comprime cualquier valor a un rango 0-1; ideal para probabilidades.",
              "ReLU — devuelve 0 para negativos y el propio valor para positivos; rápida y la opción por defecto en capas ocultas.",
              "Tanh — como sigmoid pero centrada en cero (-1 a 1).",
              "Softmax — convierte un vector de puntuaciones en probabilidades que suman 1; se usa en clasificación.",
            ],
          },
          {
            type: "heading",
            text: "Capas: apilando neuronas",
          },
          {
            type: "paragraph",
            text: "Una sola neurona es débil. La magia ocurre cuando las organizamos en capas: una capa de entrada que recibe los datos, una o más capas ocultas que los transforman y una capa de salida que produce la respuesta. Cada neurona de una capa se conecta con todas las de la siguiente — eso es lo que llamamos una red totalmente conectada.",
          },
          {
            type: "image",
            src: "/assets/blog/neural_networking/image.png",
            alt: "Red neuronal entrenada en R sobre el dataset Iris",
            caption: "Una red que entrené en R para clasificar flores Iris: cuatro entradas (medidas de pétalo y sépalo), capas ocultas y una salida — la especie.",
          },
          {
            type: "paragraph",
            text: "El diagrama de arriba proviene de un proyecto real que construí durante mi maestría usando R y el paquete neuralnet. Cada flecha es un peso que la red aprendió por sí sola; tras 26.200 pasos de entrenamiento el error bajó a apenas 0,0017. Puedes explorar el código completo en GitHub: github.com/danrleyney2210/Redes_Neurais_em_R.",
          },
          {
            type: "quote",
            text: "Una red neuronal es simplemente una función muy flexible que aprende su propia forma a partir de los datos.",
          },
          {
            type: "heading",
            text: "Cómo aprende una red: el entrenamiento",
          },
          {
            type: "paragraph",
            text: "Al principio los pesos son aleatorios, así que las predicciones no tienen sentido. El entrenamiento es el bucle que arregla esto. Medimos cuánto se equivoca la red con una función de pérdida y luego usamos backpropagation y descenso de gradiente para ajustar cada peso en la dirección que reduce el error — poco a poco, a lo largo de muchas pasadas por los datos.",
          },
          {
            type: "list",
            items: [
              "Paso hacia adelante — pasar las entradas por la red para obtener una predicción.",
              "Calcular la pérdida — comparar la predicción con la respuesta correcta.",
              "Backpropagation — calcular cuánto contribuyó cada peso al error.",
              "Actualizar los pesos — ajustarlos ligeramente con descenso de gradiente.",
              "Repetir — hacerlo con muchos ejemplos durante muchas épocas hasta que la pérdida sea baja.",
            ],
          },
          {
            type: "heading",
            text: "Qué hace que sea aprendizaje 'profundo'",
          },
          {
            type: "paragraph",
            text: "Deep learning significa simplemente una red neuronal con muchas capas ocultas. Cada capa aprende características cada vez más abstractas: en una red de imágenes, las primeras capas detectan bordes, las siguientes formas y las más profundas objetos completos como rostros o gatos. Esto solo se volvió práctico hace poco gracias a enormes conjuntos de datos y GPUs potentes.",
          },
          {
            type: "list",
            items: [
              "Visión por computadora — redes convolucionales (CNNs) para reconocer imágenes.",
              "Lenguaje — Transformers y grandes modelos de lenguaje (LLMs) como el que quizá estés usando.",
              "Voz — convertir audio en texto y viceversa.",
              "Recomendaciones — predecir qué querrás ver o comprar a continuación.",
            ],
          },
          {
            type: "heading",
            text: "Un modelo mental para recordar",
          },
          {
            type: "paragraph",
            text: "Imagina un panel de control gigante cubierto de millones de pequeñas perillas. Cada perilla es un peso. El entrenamiento es el proceso automático de girar esas perillas hasta que las entradas correctas produzcan las salidas correctas. Eso, despojado de las matemáticas, es todo lo que realmente es una red neuronal — y entender esa intuición es el primer paso real al mundo de la IA.",
          },
        ],
      },
      pt: {
        title:
          "Redes Neurais Explicadas: do Neurônio Único ao Deep Learning",
        excerpt:
          "O que realmente acontece dentro de uma rede neural? Um passo a passo do zero sobre neurônios, pesos, funções de ativação, treinamento e por que o deep learning mudou tudo.",
        content: [
          {
            type: "paragraph",
            text: "As redes neurais estão por trás de tudo: das fotos que o seu celular organiza aos chatbots com quem você conversa. Elas parecem intimidadoras, mas a ideia central é surpreendentemente simples — e foi emprestada diretamente da biologia. Neste artigo construímos a intuição do zero, um neurônio de cada vez.",
          },
          {
            type: "heading",
            text: "A inspiração biológica",
          },
          {
            type: "paragraph",
            text: "Seu cérebro tem cerca de 86 bilhões de neurônios. Cada um recebe sinais elétricos pelos dendritos, decide se o sinal combinado é forte o suficiente e, se for, dispara o próprio sinal para os neurônios seguintes. Um neurônio artificial é uma pequena caricatura matemática exatamente desse comportamento.",
          },
          {
            type: "heading",
            text: "O neurônio artificial",
          },
          {
            type: "paragraph",
            text: "Um neurônio artificial recebe uma lista de números como entrada. Ele multiplica cada entrada por um peso (o quão importante aquela entrada é), soma tudo junto com um viés (bias) e passa o resultado por uma função de ativação que decide a saída final do neurônio.",
          },
          {
            type: "code",
            language: "python",
            code: "import numpy as np\n\ndef sigmoid(z):\n    return 1 / (1 + np.exp(-z))\n\ndef neuron(inputs, weights, bias):\n    z = np.dot(inputs, weights) + bias\n    return sigmoid(z)",
          },
          {
            type: "heading",
            text: "Pesos, viés e funções de ativação",
          },
          {
            type: "paragraph",
            text: "Os pesos e o viés são justamente o que a rede aprende. A função de ativação é o que dá poder à rede: sem ela, empilhar neurônios produziria apenas uma linha reta. Ativações não lineares permitem que a rede se curve para se ajustar a padrões complexos.",
          },
          {
            type: "list",
            items: [
              "Sigmoid — comprime qualquer valor para um intervalo de 0 a 1; ótima para probabilidades.",
              "ReLU — devolve 0 para negativos e o próprio valor para positivos; rápida e o padrão em camadas ocultas.",
              "Tanh — como a sigmoid, mas centrada no zero (-1 a 1).",
              "Softmax — transforma um vetor de pontuações em probabilidades que somam 1; usada em classificação.",
            ],
          },
          {
            type: "heading",
            text: "Camadas: empilhando neurônios",
          },
          {
            type: "paragraph",
            text: "Um neurônio sozinho é fraco. A mágica acontece quando os organizamos em camadas: uma camada de entrada que recebe os dados, uma ou mais camadas ocultas que os transformam e uma camada de saída que produz a resposta. Cada neurônio de uma camada se conecta a todos os da próxima — é o que chamamos de rede totalmente conectada.",
          },
          {
            type: "image",
            src: "/assets/blog/neural_networking/image.png",
            alt: "Rede neural treinada em R no dataset Iris",
            caption: "Uma rede que treinei em R para classificar flores Iris: quatro entradas (medidas de pétala e sépala), camadas ocultas e uma saída — a espécie.",
          },
          {
            type: "paragraph",
            text: "O diagrama acima vem de um projeto real que desenvolvi durante o meu mestrado usando R e o pacote neuralnet. Cada seta é um peso que a rede aprendeu sozinha; após 26.200 passos de treinamento o erro caiu para apenas 0,0017. Você pode explorar o código completo no GitHub: github.com/danrleyney2210/Redes_Neurais_em_R.",
          },
          {
            type: "quote",
            text: "Uma rede neural é apenas uma função muito flexível que aprende a própria forma a partir dos dados.",
          },
          {
            type: "heading",
            text: "Como uma rede aprende: o treinamento",
          },
          {
            type: "paragraph",
            text: "No começo os pesos são aleatórios, então as previsões não fazem sentido. O treinamento é o ciclo que corrige isso. Medimos o quanto a rede erra com uma função de perda e, em seguida, usamos backpropagation e gradiente descendente para ajustar cada peso na direção que reduz o erro — pouco a pouco, ao longo de muitas passagens pelos dados.",
          },
          {
            type: "list",
            items: [
              "Passagem para frente — alimentar as entradas pela rede para obter uma previsão.",
              "Calcular a perda — comparar a previsão com a resposta correta.",
              "Backpropagation — calcular o quanto cada peso contribuiu para o erro.",
              "Atualizar os pesos — ajustá-los levemente com gradiente descendente.",
              "Repetir — fazer isso com muitos exemplos por muitas épocas até a perda ficar baixa.",
            ],
          },
          {
            type: "heading",
            text: "O que torna o aprendizado 'profundo'",
          },
          {
            type: "paragraph",
            text: "Deep learning significa simplesmente uma rede neural com muitas camadas ocultas. Cada camada aprende características cada vez mais abstratas: numa rede de imagens, as primeiras camadas detectam bordas, as seguintes formas e as mais profundas objetos inteiros, como rostos ou gatos. Isso só se tornou prático recentemente graças a enormes conjuntos de dados e GPUs poderosas.",
          },
          {
            type: "list",
            items: [
              "Visão computacional — redes convolucionais (CNNs) para reconhecer imagens.",
              "Linguagem — Transformers e grandes modelos de linguagem (LLMs), como o que você talvez esteja usando.",
              "Voz — transformar áudio em texto e vice-versa.",
              "Recomendações — prever o que você vai querer assistir ou comprar em seguida.",
            ],
          },
          {
            type: "heading",
            text: "Um modelo mental para guardar",
          },
          {
            type: "paragraph",
            text: "Imagine um painel de controle gigante coberto por milhões de pequenos botões giratórios. Cada botão é um peso. O treinamento é o processo automático de girar esses botões até que as entradas certas produzam as saídas certas. Isso, sem a matemática, é tudo o que uma rede neural realmente é — e entender essa intuição é o primeiro passo de verdade para o mundo da IA.",
          },
        ],
      },
    },
  },
];

export const getPostBySlug = (slug?: string): BlogPost | undefined =>
  blogPosts.find((post) => post.slug === slug);

/**
 * Returns the post content for the given language, falling back to English.
 * Accepts full locale codes like "pt-BR" and normalizes them to "pt".
 */
export const getLocalizedContent = (
  post: BlogPost,
  lang?: string
): LocalizedContent => {
  const normalized = (lang?.split("-")[0] || "en") as Lang;
  return post.translations[normalized] ?? post.translations.en;
};

export const getRelatedPosts = (
  current: BlogPost,
  limit = 2
): BlogPost[] =>
  blogPosts
    .filter(
      (post) =>
        post.slug !== current.slug && post.category === current.category
    )
    .slice(0, limit);
