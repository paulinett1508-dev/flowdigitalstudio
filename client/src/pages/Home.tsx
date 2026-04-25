import Sidebar from "@/components/Sidebar";
import { Copy, Check, Download, FileJson, Package } from "lucide-react";
import { useState } from "react";

export default function Home() {
  const [copiedColor, setCopiedColor] = useState<string | null>(null);

  const copyToClipboard = (text: string, colorCode: string) => {
    navigator.clipboard.writeText(text);
    setCopiedColor(colorCode);
    setTimeout(() => setCopiedColor(null), 2000);
  };

  return (
    <div className="flex min-h-screen bg-background">
      <Sidebar />

      <main className="flex-1 md:ml-0">
        {/* Hero Section */}
        <section
          id="inicio"
          className="relative pt-20 pb-32 px-4 md:px-8 lg:px-12 bg-gradient-to-br from-background via-background to-slate-50"
        >
          <div className="max-w-4xl mx-auto">
            <div className="mb-8">
              <h1 className="text-display mb-4">
                <span className="gradient-text">Manual da Marca</span>
              </h1>
              <p className="text-2xl font-semibold text-foreground mb-4">
                Flow Digital Studio
              </p>
              <p className="text-lg text-muted-foreground max-w-2xl">
                Guia completo de diretrizes visuais, paleta de cores, tipografia
                e aplicações corretas da marca Flow Digital Studio. Automation
                Experts.
              </p>
            </div>

            {/* Quick Stats */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mt-12">
              <div className="card-elevated">
                <p className="text-3xl font-bold text-primary">2</p>
                <p className="text-body-small text-muted-foreground">Logos</p>
              </div>
              <div className="card-elevated">
                <p className="text-3xl font-bold text-primary">5</p>
                <p className="text-body-small text-muted-foreground">Cores</p>
              </div>
              <div className="card-elevated">
                <p className="text-3xl font-bold text-primary">2</p>
                <p className="text-body-small text-muted-foreground">Famílias</p>
              </div>
              <div className="card-elevated">
                <p className="text-3xl font-bold text-primary">∞</p>
                <p className="text-body-small text-muted-foreground">
                  Possibilidades
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Logo Section */}
        <section id="logo" className="py-20 px-4 md:px-8 lg:px-12">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-heading-1 mb-12">Logo Principal</h2>

            <div className="grid md:grid-cols-2 gap-12">
              {/* Light Version */}
              <div className="card-elevated">
                <h3 className="text-heading-3 mb-6">Versão Clara</h3>
                <div className="bg-white p-8 rounded-lg mb-6 flex items-center justify-center min-h-48">
                  <img
                    src="/manus-storage/logo_principal_claro_aed040ad.png"
                    alt="Logo Flow - Versão Clara"
                    className="max-w-full h-auto"
                  />
                </div>
                <p className="text-body-small text-muted-foreground mb-4">
                  Use a versão clara em fundos escuros ou neutros. Mantém a
                  legibilidade e o impacto visual em qualquer contexto.
                </p>
              </div>

              {/* Dark Version */}
              <div className="card-elevated">
                <h3 className="text-heading-3 mb-6">Versão Escura</h3>
                <div className="bg-slate-900 p-8 rounded-lg mb-6 flex items-center justify-center min-h-48">
                  <img
                    src="/manus-storage/logo_principal_dark_4d96613c.png"
                    alt="Logo Flow - Versão Escura"
                    className="max-w-full h-auto"
                  />
                </div>
                <p className="text-body-small text-muted-foreground mb-4">
                  Use a versão escura em fundos claros. Ideal para impressão,
                  web e aplicações em fundo branco.
                </p>
              </div>
            </div>

            {/* Favicon Section */}
            <div className="mt-16">
              <h3 className="text-heading-2 mb-8">Favicon (Ícone)</h3>
              <div className="grid md:grid-cols-4 gap-6">
                {[
                  {
                    src: "/manus-storage/favicon_claro_f3110c1a.png",
                    title: "Favicon - Clara",
                  },
                  {
                    src: "/manus-storage/favicon_dark_89a37e18.png",
                    title: "Favicon - Escura",
                  },
                  {
                    src: "/manus-storage/favicon2_circle_claro_8eb104ac.png",
                    title: "Favicon Circular - Clara",
                  },
                  {
                    src: "/manus-storage/favicon2_circle_dark_67d6c6bc.png",
                    title: "Favicon Circular - Escura",
                  },
                ].map((favicon, idx) => (
                  <div key={idx} className="card-elevated">
                    <div className="bg-slate-100 p-6 rounded-lg mb-4 flex items-center justify-center min-h-32">
                      <img
                        src={favicon.src}
                        alt={favicon.title}
                        className="max-w-24 h-auto"
                      />
                    </div>
                    <p className="text-body-small font-medium">{favicon.title}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Color Palette Section */}
        <section
          id="cores"
          className="py-20 px-4 md:px-8 lg:px-12 bg-slate-50"
        >
          <div className="max-w-6xl mx-auto">
            <h2 className="text-heading-1 mb-12">Paleta de Cores</h2>

            <div className="grid md:grid-cols-2 gap-8">
              {/* Primary Colors */}
              <div>
                <h3 className="text-heading-3 mb-6">Cores Primárias</h3>
                <div className="space-y-4">
                  {[
                    {
                      name: "Laranja",
                      hex: "#FF6500",
                      rgb: "255, 101, 0",
                      usage:
                        "Cor principal da marca, transmite energia e inovação",
                    },
                    {
                      name: "Azul Escuro",
                      hex: "#001F4D",
                      rgb: "0, 31, 77",
                      usage:
                        "Cor secundária, transmite confiança e profissionalismo",
                    },
                  ].map((color) => (
                    <div key={color.hex} className="card-elevated">
                      <div className="flex gap-4">
                        <div
                          className="w-20 h-20 rounded-lg flex-shrink-0"
                          style={{ backgroundColor: color.hex }}
                        />
                        <div className="flex-1">
                          <h4 className="font-semibold text-foreground mb-1">
                            {color.name}
                          </h4>
                          <button
                            onClick={() => copyToClipboard(color.hex, color.hex)}
                            className="flex items-center gap-2 text-primary hover:text-primary/80 transition-colors text-sm mb-2"
                          >
                            {copiedColor === color.hex ? (
                              <>
                                <Check size={16} />
                                Copiado!
                              </>
                            ) : (
                              <>
                                <Copy size={16} />
                                {color.hex}
                              </>
                            )}
                          </button>
                          <p className="text-body-small text-muted-foreground">
                            RGB: {color.rgb}
                          </p>
                          <p className="text-body-small text-muted-foreground mt-2">
                            {color.usage}
                          </p>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* Secondary Colors */}
              <div>
                <h3 className="text-heading-3 mb-6">Cores Secundárias</h3>
                <div className="space-y-4">
                  {[
                    {
                      name: "Roxo",
                      hex: "#4A1F5C",
                      rgb: "74, 31, 92",
                      usage: "Transição entre laranja e azul, elemento decorativo",
                    },
                    {
                      name: "Ciano",
                      hex: "#00D9FF",
                      rgb: "0, 217, 255",
                      usage: "Cor de destaque, para elementos interativos",
                    },
                    {
                      name: "Cinza Neutro",
                      hex: "#CCCCCC",
                      rgb: "204, 204, 204",
                      usage: "Elementos auxiliares e divisores",
                    },
                  ].map((color) => (
                    <div key={color.hex} className="card-elevated">
                      <div className="flex gap-4">
                        <div
                          className="w-20 h-20 rounded-lg flex-shrink-0 border border-border"
                          style={{ backgroundColor: color.hex }}
                        />
                        <div className="flex-1">
                          <h4 className="font-semibold text-foreground mb-1">
                            {color.name}
                          </h4>
                          <button
                            onClick={() => copyToClipboard(color.hex, color.hex)}
                            className="flex items-center gap-2 text-primary hover:text-primary/80 transition-colors text-sm mb-2"
                          >
                            {copiedColor === color.hex ? (
                              <>
                                <Check size={16} />
                                Copiado!
                              </>
                            ) : (
                              <>
                                <Copy size={16} />
                                {color.hex}
                              </>
                            )}
                          </button>
                          <p className="text-body-small text-muted-foreground">
                            RGB: {color.rgb}
                          </p>
                          <p className="text-body-small text-muted-foreground mt-2">
                            {color.usage}
                          </p>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* Gradient Examples */}
            <div className="mt-12">
              <h3 className="text-heading-3 mb-6">Gradientes</h3>
              <div className="grid md:grid-cols-3 gap-6">
                <div className="card-elevated">
                  <div
                    className="h-32 rounded-lg mb-4"
                    style={{
                      background:
                        "linear-gradient(90deg, #FF6500 0%, #001F4D 100%)",
                    }}
                  />
                  <p className="text-body-small font-medium">
                    Laranja → Azul
                  </p>
                  <p className="text-body-small text-muted-foreground">
                    Gradiente principal
                  </p>
                </div>
                <div className="card-elevated">
                  <div
                    className="h-32 rounded-lg mb-4"
                    style={{
                      background:
                        "linear-gradient(90deg, #FF6500 0%, #4A1F5C 50%, #001F4D 100%)",
                    }}
                  />
                  <p className="text-body-small font-medium">
                    Laranja → Roxo → Azul
                  </p>
                  <p className="text-body-small text-muted-foreground">
                    Gradiente completo
                  </p>
                </div>
                <div className="card-elevated">
                  <div
                    className="h-32 rounded-lg mb-4"
                    style={{
                      background:
                        "linear-gradient(90deg, #FF6500 0%, #00D9FF 100%)",
                    }}
                  />
                  <p className="text-body-small font-medium">
                    Laranja → Ciano
                  </p>
                  <p className="text-body-small text-muted-foreground">
                    Gradiente vibrante
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Typography Section */}
        <section id="tipografia" className="py-20 px-4 md:px-8 lg:px-12">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-heading-1 mb-12">Tipografia</h2>

            <div className="grid md:grid-cols-2 gap-12">
              {/* Poppins */}
              <div className="card-elevated">
                <h3 className="text-heading-3 mb-6">Títulos - Poppins</h3>
                <div className="space-y-6">
                  <div>
                    <p
                      style={{
                        fontFamily: "'Poppins', sans-serif",
                        fontSize: "2.5rem",
                        fontWeight: 700,
                      }}
                    >
                      Display Bold
                    </p>
                    <p className="text-body-small text-muted-foreground mt-2">
                      Tamanho: 40px | Peso: 700
                    </p>
                  </div>
                  <div>
                    <p
                      style={{
                        fontFamily: "'Poppins', sans-serif",
                        fontSize: "2rem",
                        fontWeight: 600,
                      }}
                    >
                      Heading SemiBold
                    </p>
                    <p className="text-body-small text-muted-foreground mt-2">
                      Tamanho: 32px | Peso: 600
                    </p>
                  </div>
                  <div>
                    <p
                      style={{
                        fontFamily: "'Poppins', sans-serif",
                        fontSize: "1.5rem",
                        fontWeight: 600,
                      }}
                    >
                      Subheading SemiBold
                    </p>
                    <p className="text-body-small text-muted-foreground mt-2">
                      Tamanho: 24px | Peso: 600
                    </p>
                  </div>
                </div>
              </div>

              {/* Inter */}
              <div className="card-elevated">
                <h3 className="text-heading-3 mb-6">Corpo - Inter</h3>
                <div className="space-y-6">
                  <div>
                    <p
                      style={{
                        fontFamily: "'Inter', sans-serif",
                        fontSize: "1rem",
                        fontWeight: 400,
                        lineHeight: 1.6,
                      }}
                    >
                      Este é um parágrafo de corpo em Inter Regular. Usado para
                      textos longos e descrições. Mantém excelente legibilidade
                      em qualquer tamanho.
                    </p>
                    <p className="text-body-small text-muted-foreground mt-2">
                      Tamanho: 16px | Peso: 400 | Line Height: 1.6
                    </p>
                  </div>
                  <div>
                    <p
                      style={{
                        fontFamily: "'Inter', sans-serif",
                        fontSize: "0.875rem",
                        fontWeight: 400,
                        lineHeight: 1.5,
                      }}
                    >
                      Texto pequeno para informações secundárias e notas.
                    </p>
                    <p className="text-body-small text-muted-foreground mt-2">
                      Tamanho: 14px | Peso: 400 | Line Height: 1.5
                    </p>
                  </div>
                  <div>
                    <p
                      style={{
                        fontFamily: "'Inter', sans-serif",
                        fontSize: "1rem",
                        fontWeight: 600,
                      }}
                    >
                      Texto em Semibold para ênfase
                    </p>
                    <p className="text-body-small text-muted-foreground mt-2">
                      Tamanho: 16px | Peso: 600
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* Typography Rules */}
            <div className="mt-12 card-elevated bg-blue-50 border-l-4 border-primary">
              <h3 className="text-heading-3 mb-4">Regras de Tipografia</h3>
              <ul className="space-y-3 text-body">
                <li className="flex gap-3">
                  <span className="text-primary font-bold">•</span>
                  <span>
                    Use Poppins para todos os títulos e elementos de destaque
                  </span>
                </li>
                <li className="flex gap-3">
                  <span className="text-primary font-bold">•</span>
                  <span>
                    Use Inter para corpo de texto e descrições (máxima
                    legibilidade)
                  </span>
                </li>
                <li className="flex gap-3">
                  <span className="text-primary font-bold">•</span>
                  <span>
                    Mantenha contraste mínimo de 4.5:1 entre texto e fundo
                  </span>
                </li>
                <li className="flex gap-3">
                  <span className="text-primary font-bold">•</span>
                  <span>
                    Line height mínimo de 1.5 para melhor legibilidade
                  </span>
                </li>
              </ul>
            </div>
          </div>
        </section>

        {/* Usage Section */}
        <section
          id="uso-correto"
          className="py-20 px-4 md:px-8 lg:px-12 bg-green-50"
        >
          <div className="max-w-6xl mx-auto">
            <h2 className="text-heading-1 mb-4">Uso Correto</h2>
            <p className="text-lg text-muted-foreground mb-12">
              Exemplos de como usar corretamente a identidade visual da Flow
            </p>

            <div className="grid md:grid-cols-2 gap-8">
              <div className="card-elevated">
                <h3 className="text-heading-3 mb-6">Em Fundos Claros</h3>
                <div className="bg-white p-8 rounded-lg mb-6 flex items-center justify-center min-h-48 border border-border">
                  <img
                    src="/manus-storage/logo_principal_claro_aed040ad.png"
                    alt="Logo em fundo claro"
                    className="max-w-xs h-auto"
                  />
                </div>
                <p className="text-body-small text-muted-foreground">
                  Use a versão clara da logo em fundos brancos ou neutros.
                  Garante máximo contraste e legibilidade.
                </p>
              </div>

              <div className="card-elevated">
                <h3 className="text-heading-3 mb-6">Em Fundos Escuros</h3>
                <div className="bg-slate-900 p-8 rounded-lg mb-6 flex items-center justify-center min-h-48">
                  <img
                    src="/manus-storage/logo_principal_dark_4d96613c.png"
                    alt="Logo em fundo escuro"
                    className="max-w-xs h-auto"
                  />
                </div>
                <p className="text-body-small text-muted-foreground">
                  Use a versão escura da logo em fundos pretos ou muito escuros.
                  Mantém a visibilidade e o impacto.
                </p>
              </div>

              <div className="card-elevated">
                <h3 className="text-heading-3 mb-6">Com Gradiente</h3>
                <div
                  className="p-8 rounded-lg mb-6 flex items-center justify-center min-h-48"
                  style={{
                    background:
                      "linear-gradient(135deg, #FF6500 0%, #001F4D 100%)",
                  }}
                >
                  <img
                    src="/manus-storage/logo_principal_dark_4d96613c.png"
                    alt="Logo com gradiente"
                    className="max-w-xs h-auto"
                  />
                </div>
                <p className="text-body-small text-muted-foreground">
                  A logo funciona perfeitamente sobre o gradiente principal da
                  marca.
                </p>
              </div>

              <div className="card-elevated">
                <h3 className="text-heading-3 mb-6">Favicon em Aplicações</h3>
                <div className="bg-slate-100 p-8 rounded-lg mb-6 flex items-center justify-center min-h-48 gap-4">
                  <img
                    src="/manus-storage/favicon_claro_f3110c1a.png"
                    alt="Favicon"
                    className="max-w-24 h-auto"
                  />
                  <img
                    src="/manus-storage/favicon2_circle_claro_8eb104ac.png"
                    alt="Favicon Circular"
                    className="max-w-24 h-auto"
                  />
                </div>
                <p className="text-body-small text-muted-foreground">
                  Use o favicon em abas de navegador e ícones de aplicação.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Incorrect Usage Section */}
        <section
          id="uso-incorreto"
          className="py-20 px-4 md:px-8 lg:px-12 bg-red-50"
        >
          <div className="max-w-6xl mx-auto">
            <h2 className="text-heading-1 mb-4">Uso Incorreto</h2>
            <p className="text-lg text-muted-foreground mb-12">
              Erros comuns a evitar ao usar a identidade visual
            </p>

            <div className="grid md:grid-cols-2 gap-8">
              <div className="card-elevated border-l-4 border-red-500">
                <h3 className="text-heading-3 mb-4 text-red-700">
                  ❌ Não Distorça
                </h3>
                <div className="bg-slate-100 p-8 rounded-lg mb-4 flex items-center justify-center min-h-40">
                  <img
                    src="/manus-storage/logo_principal_claro_aed040ad.png"
                    alt="Logo distorcida"
                    className="max-w-xs h-auto"
                    style={{ transform: "scaleX(0.7)" }}
                  />
                </div>
                <p className="text-body-small text-muted-foreground">
                  Nunca distorça, estique ou comprima a logo. Sempre mantenha
                  as proporções originais.
                </p>
              </div>

              <div className="card-elevated border-l-4 border-red-500">
                <h3 className="text-heading-3 mb-4 text-red-700">
                  ❌ Não Rotacione
                </h3>
                <div className="bg-slate-100 p-8 rounded-lg mb-4 flex items-center justify-center min-h-40">
                  <img
                    src="/manus-storage/logo_principal_claro_aed040ad.png"
                    alt="Logo rotacionada"
                    className="max-w-xs h-auto"
                    style={{ transform: "rotate(45deg)" }}
                  />
                </div>
                <p className="text-body-small text-muted-foreground">
                  Não rotacione a logo. Use sempre na posição horizontal
                  original.
                </p>
              </div>

              <div className="card-elevated border-l-4 border-red-500">
                <h3 className="text-heading-3 mb-4 text-red-700">
                  ❌ Não Altere Cores
                </h3>
                <div className="bg-slate-100 p-8 rounded-lg mb-4 flex items-center justify-center min-h-40">
                  <img
                    src="/manus-storage/logo_principal_claro_aed040ad.png"
                    alt="Logo com cores alteradas"
                    className="max-w-xs h-auto"
                    style={{ filter: "hue-rotate(120deg)" }}
                  />
                </div>
                <p className="text-body-small text-muted-foreground">
                  Use apenas as cores especificadas. Não altere, inverta ou
                  aplique filtros.
                </p>
              </div>

              <div className="card-elevated border-l-4 border-red-500">
                <h3 className="text-heading-3 mb-4 text-red-700">
                  ❌ Não Sobreponha Texto
                </h3>
                <div className="bg-slate-100 p-8 rounded-lg mb-4 flex items-center justify-center min-h-40 relative">
                  <img
                    src="/manus-storage/logo_principal_claro_aed040ad.png"
                    alt="Logo com texto sobreposto"
                    className="max-w-xs h-auto"
                  />
                  <p
                    className="absolute text-white font-bold"
                    style={{ textShadow: "2px 2px 4px rgba(0,0,0,0.5)" }}
                  >
                    Texto
                  </p>
                </div>
                <p className="text-body-small text-muted-foreground">
                  Nunca sobreponha texto ou elementos sobre a logo.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Applications Section */}
        <section id="aplicacoes" className="py-20 px-4 md:px-8 lg:px-12">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-heading-1 mb-12">Aplicações em Diferentes Mídias</h2>

            <div className="grid md:grid-cols-2 gap-8">
              <div className="card-elevated">
                <h3 className="text-heading-3 mb-6">Web</h3>
                <div className="bg-slate-100 p-8 rounded-lg mb-6 flex items-center justify-center min-h-40">
                  <img
                    src="/manus-storage/logo_principal_claro_aed040ad.png"
                    alt="Logo para web"
                    className="max-w-xs h-auto"
                  />
                </div>
                <ul className="space-y-2 text-body-small">
                  <li>• Use em headers e footers</li>
                  <li>• Tamanho mínimo: 200px de largura</li>
                  <li>• Adicione padding ao redor</li>
                  <li>• Versão clara em fundos escuros</li>
                </ul>
              </div>

              <div className="card-elevated">
                <h3 className="text-heading-3 mb-6">Impressão</h3>
                <div className="bg-white p-8 rounded-lg mb-6 flex items-center justify-center min-h-40 border-2 border-border">
                  <img
                    src="/manus-storage/logo_principal_claro_aed040ad.png"
                    alt="Logo para impressão"
                    className="max-w-xs h-auto"
                  />
                </div>
                <ul className="space-y-2 text-body-small">
                  <li>• Use em papel branco ou off-white</li>
                  <li>• Tamanho mínimo: 1 polegada</li>
                  <li>• Resolução: 300 DPI</li>
                  <li>• Formato: CMYK para impressão</li>
                </ul>
              </div>

              <div className="card-elevated">
                <h3 className="text-heading-3 mb-6">Redes Sociais</h3>
                <div className="bg-slate-900 p-8 rounded-lg mb-6 flex items-center justify-center min-h-40">
                  <img
                    src="/manus-storage/favicon2_circle_dark_67d6c6bc.png"
                    alt="Logo para redes sociais"
                    className="max-w-24 h-auto"
                  />
                </div>
                <ul className="space-y-2 text-body-small">
                  <li>• Use o favicon circular</li>
                  <li>• Tamanho: 400x400px mínimo</li>
                  <li>• Formato: PNG com transparência</li>
                  <li>• Versão clara e escura disponíveis</li>
                </ul>
              </div>

              <div className="card-elevated">
                <h3 className="text-heading-3 mb-6">Aplicações Mobile</h3>
                <div className="bg-slate-100 p-8 rounded-lg mb-6 flex items-center justify-center min-h-40 gap-4">
                  <div className="flex flex-col items-center">
                    <img
                      src="/manus-storage/favicon_claro_f3110c1a.png"
                      alt="App Icon"
                      className="max-w-16 h-auto mb-2"
                    />
                    <p className="text-xs text-muted-foreground">App Icon</p>
                  </div>
                  <div className="flex flex-col items-center">
                    <img
                      src="/manus-storage/favicon2_circle_claro_8eb104ac.png"
                      alt="Splash Screen"
                      className="max-w-16 h-auto mb-2"
                    />
                    <p className="text-xs text-muted-foreground">Splash</p>
                  </div>
                </div>
                <ul className="space-y-2 text-body-small">
                  <li>• Use o favicon para ícone do app</li>
                  <li>• Tamanho: 192x192px (Android)</li>
                  <li>• Tamanho: 180x180px (iOS)</li>
                  <li>• Sempre com espaço de segurança</li>
                </ul>
              </div>
            </div>
          </div>
        </section>

        {/* Downloads Section */}
        <section
          id="downloads"
          className="py-20 px-4 md:px-8 lg:px-12 bg-slate-50"
        >
          <div className="max-w-6xl mx-auto">
            <h2 className="text-heading-1 mb-4">Downloads</h2>
            <p className="text-lg text-muted-foreground mb-12">
              Baixe todos os arquivos da marca em alta qualidade para usar em
              seus projetos.
            </p>

            {/* Download Categories */}
            <div className="grid md:grid-cols-3 gap-8 mb-12">
              {/* Logos */}
              <div className="card-elevated">
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center">
                    <Package className="text-primary" size={24} />
                  </div>
                  <h3 className="text-heading-3">Logos</h3>
                </div>
                <p className="text-body-small text-muted-foreground mb-6">
                  Versões clara e escura em alta resolução
                </p>
                <div className="space-y-2">
                  <a
                    href="/manus-storage/logo_principal_claro_aed040ad.png"
                    download="flow-logo-claro.png"
                    className="flex items-center gap-2 px-4 py-2 bg-primary text-primary-foreground rounded-lg hover:bg-primary/90 transition-colors text-sm font-medium"
                  >
                    <Download size={16} />
                    Logo Clara
                  </a>
                  <a
                    href="/manus-storage/logo_principal_dark_4d96613c.png"
                    download="flow-logo-escura.png"
                    className="flex items-center gap-2 px-4 py-2 bg-primary text-primary-foreground rounded-lg hover:bg-primary/90 transition-colors text-sm font-medium"
                  >
                    <Download size={16} />
                    Logo Escura
                  </a>
                </div>
              </div>

              {/* Favicons */}
              <div className="card-elevated">
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center">
                    <FileJson className="text-primary" size={24} />
                  </div>
                  <h3 className="text-heading-3">Favicons</h3>
                </div>
                <p className="text-body-small text-muted-foreground mb-6">
                  Ícones para web e aplicações
                </p>
                <div className="space-y-2">
                  <a
                    href="/manus-storage/favicon_claro_f3110c1a.png"
                    download="favicon-claro.png"
                    className="flex items-center gap-2 px-4 py-2 bg-primary text-primary-foreground rounded-lg hover:bg-primary/90 transition-colors text-sm font-medium"
                  >
                    <Download size={16} />
                    Favicon Clara
                  </a>
                  <a
                    href="/manus-storage/favicon_dark_89a37e18.png"
                    download="favicon-escura.png"
                    className="flex items-center gap-2 px-4 py-2 bg-primary text-primary-foreground rounded-lg hover:bg-primary/90 transition-colors text-sm font-medium"
                  >
                    <Download size={16} />
                    Favicon Escura
                  </a>
                </div>
              </div>

              {/* Circular Favicons */}
              <div className="card-elevated">
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center">
                    <Package className="text-primary" size={24} />
                  </div>
                  <h3 className="text-heading-3">Favicons Circulares</h3>
                </div>
                <p className="text-body-small text-muted-foreground mb-6">
                  Versão circular para redes sociais
                </p>
                <div className="space-y-2">
                  <a
                    href="/manus-storage/favicon2_circle_claro_8eb104ac.png"
                    download="favicon-circular-claro.png"
                    className="flex items-center gap-2 px-4 py-2 bg-primary text-primary-foreground rounded-lg hover:bg-primary/90 transition-colors text-sm font-medium"
                  >
                    <Download size={16} />
                    Circular Clara
                  </a>
                  <a
                    href="/manus-storage/favicon2_circle_dark_67d6c6bc.png"
                    download="favicon-circular-escura.png"
                    className="flex items-center gap-2 px-4 py-2 bg-primary text-primary-foreground rounded-lg hover:bg-primary/90 transition-colors text-sm font-medium"
                  >
                    <Download size={16} />
                    Circular Escura
                  </a>
                </div>
              </div>
            </div>

            {/* Complete Package */}
            <div className="card-elevated bg-gradient-to-r from-primary/5 to-blue-50 border-2 border-primary/20">
              <div className="flex flex-col md:flex-row items-start md:items-center justify-between">
                <div className="mb-4 md:mb-0">
                  <h3 className="text-heading-3 mb-2">Pacote Completo</h3>
                  <p className="text-body-small text-muted-foreground">
                    Baixe todos os arquivos de uma vez em um arquivo ZIP compactado
                  </p>
                </div>
                <a
                  href="/manus-storage/brand-assets_3516144a.zip"
                  download="flow-brand-assets.zip"
                  className="flex items-center gap-2 px-6 py-3 bg-primary text-primary-foreground rounded-lg hover:bg-primary/90 transition-colors font-semibold whitespace-nowrap"
                >
                  <Download size={20} />
                  Baixar Tudo
                </a>
              </div>
            </div>

            {/* File Info */}
            <div className="mt-12 grid md:grid-cols-2 gap-6">
              <div className="card-elevated">
                <h4 className="text-heading-3 mb-4">Formatos Inclusos</h4>
                <ul className="space-y-2 text-body-small">
                  <li className="flex gap-2">
                    <span className="text-primary font-bold">•</span>
                    <span>PNG com transparência (alta qualidade)</span>
                  </li>
                  <li className="flex gap-2">
                    <span className="text-primary font-bold">•</span>
                    <span>Resolução: 300 DPI para impressão</span>
                  </li>
                  <li className="flex gap-2">
                    <span className="text-primary font-bold">•</span>
                    <span>Versões clara e escura</span>
                  </li>
                  <li className="flex gap-2">
                    <span className="text-primary font-bold">•</span>
                    <span>Formatos quadrado e retangular</span>
                  </li>
                </ul>
              </div>

              <div className="card-elevated">
                <h4 className="text-heading-3 mb-4">Dicas de Uso</h4>
                <ul className="space-y-2 text-body-small">
                  <li className="flex gap-2">
                    <span className="text-primary font-bold">•</span>
                    <span>Mantenha as proporções originais</span>
                  </li>
                  <li className="flex gap-2">
                    <span className="text-primary font-bold">•</span>
                    <span>Use versão clara em fundos escuros</span>
                  </li>
                  <li className="flex gap-2">
                    <span className="text-primary font-bold">•</span>
                    <span>Use versão escura em fundos claros</span>
                  </li>
                  <li className="flex gap-2">
                    <span className="text-primary font-bold">•</span>
                    <span>Consulte o manual para mais detalhes</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </section>

        {/* Contact Section */}
        <section
          id="contato"
          className="py-20 px-4 md:px-8 lg:px-12 bg-gradient-to-br from-primary/10 to-blue-50"
        >
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-heading-1 mb-6">Dúvidas sobre a Marca?</h2>
            <p className="text-lg text-muted-foreground mb-12">
              Entre em contato com a equipe Flow Digital Studio para esclarecimentos
              ou solicitações especiais.
            </p>

            <div className="grid md:grid-cols-3 gap-6">
              <div className="card-elevated">
                <h3 className="text-heading-3 mb-3">WhatsApp</h3>
                <a
                  href="https://wa.me/5589999128436"
                  className="text-primary font-semibold hover:underline text-lg"
                >
                  (89) 99912-8436
                </a>
              </div>

              <div className="card-elevated">
                <h3 className="text-heading-3 mb-3">Website</h3>
                <a
                  href="https://flowdigitalstudio.com.br"
                  className="text-primary font-semibold hover:underline"
                >
                  flowdigitalstudio.com.br
                </a>
              </div>

              <div className="card-elevated">
                <h3 className="text-heading-3 mb-3">Dev</h3>
                <p className="text-foreground font-semibold">M1randa</p>
              </div>
            </div>
          </div>
        </section>

        {/* Footer */}
        <footer className="bg-foreground text-background py-12 px-4 md:px-8 lg:px-12">
          <div className="max-w-6xl mx-auto">
            <div className="flex flex-col md:flex-row justify-between items-center mb-8">
              <div>
                <h3 className="text-heading-3 mb-2">Flow Digital Studio</h3>
                <p className="text-sm opacity-80">Automation Experts</p>
              </div>
              <div className="flex gap-6 mt-4 md:mt-0">
                <a href="#" className="hover:opacity-80 transition-opacity">
                  Início
                </a>
                <a href="#logo" className="hover:opacity-80 transition-opacity">
                  Logo
                </a>
                <a href="#cores" className="hover:opacity-80 transition-opacity">
                  Cores
                </a>
              </div>
            </div>
            <div className="border-t border-background/20 pt-8 text-center text-sm opacity-70">
              <p>
                © 2026 Flow Digital Studio. Manual da Marca - Todos os direitos
                reservados.
              </p>
            </div>
          </div>
        </footer>
      </main>
    </div>
  );
}
