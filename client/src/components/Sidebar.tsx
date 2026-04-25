import { useState } from "react";
import { Menu, X } from "lucide-react";
import { Link } from "wouter";

interface SidebarItem {
  id: string;
  label: string;
  href: string;
}

const sidebarItems: SidebarItem[] = [
  { id: "inicio", label: "Início", href: "#inicio" },
  { id: "logo", label: "Logo", href: "#logo" },
  { id: "cores", label: "Paleta de Cores", href: "#cores" },
  { id: "tipografia", label: "Tipografia", href: "#tipografia" },
  { id: "uso-correto", label: "Uso Correto", href: "#uso-correto" },
  { id: "uso-incorreto", label: "Uso Incorreto", href: "#uso-incorreto" },
  { id: "aplicacoes", label: "Aplicações", href: "#aplicacoes" },
  { id: "contato", label: "Contato", href: "#contato" },
];

export default function Sidebar() {
  const [isOpen, setIsOpen] = useState(false);

  const handleScroll = (e: React.MouseEvent<HTMLAnchorElement>) => {
    e.preventDefault();
    const href = e.currentTarget.getAttribute("href");
    if (href?.startsWith("#")) {
      const element = document.querySelector(href);
      if (element) {
        element.scrollIntoView({ behavior: "smooth" });
        setIsOpen(false);
      }
    }
  };

  return (
    <>
      {/* Mobile Toggle Button */}
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="fixed top-4 left-4 z-40 md:hidden bg-primary text-primary-foreground p-2 rounded-lg hover:bg-opacity-90 transition-all"
        aria-label="Toggle menu"
      >
        {isOpen ? <X size={24} /> : <Menu size={24} />}
      </button>

      {/* Sidebar */}
      <aside
        className={`fixed left-0 top-0 h-screen w-64 bg-card text-card-foreground border-r border-border transition-transform duration-300 ease-in-out z-30 ${
          isOpen ? "translate-x-0" : "-translate-x-full md:translate-x-0"
        } md:relative md:w-72`}
      >
        <div className="p-6 pt-8 md:pt-6">
          {/* Logo */}
          <div className="mb-12">
            <h1 className="text-heading-2 gradient-text">Flow</h1>
            <p className="text-body-small text-muted-foreground mt-1">
              Manual da Marca
            </p>
          </div>

          {/* Navigation */}
          <nav className="space-y-2">
            {sidebarItems.map((item) => (
              <a
                key={item.id}
                href={item.href}
                onClick={handleScroll}
                className="block px-4 py-3 rounded-lg text-body-small font-medium transition-all hover:bg-accent hover:text-accent-foreground active:bg-primary active:text-primary-foreground"
              >
                {item.label}
              </a>
            ))}
          </nav>

          {/* Footer Info */}
          <div className="absolute bottom-6 left-6 right-6 border-t border-border pt-4">
            <p className="text-body-small text-muted-foreground mb-3">
              Informações de Contato
            </p>
            <div className="space-y-2 text-xs text-muted-foreground">
              <p>
                <strong>Dev:</strong> M1randa
              </p>
              <p>
                <strong>WhatsApp:</strong>{" "}
                <a
                  href="https://wa.me/5589999128436"
                  className="text-primary hover:underline"
                >
                  (89) 99912-8436
                </a>
              </p>
              <p>
                <strong>Website:</strong>{" "}
                <a
                  href="https://flowdigitalstudio.com.br"
                  className="text-primary hover:underline"
                >
                  flowdigitalstudio.com.br
                </a>
              </p>
            </div>
          </div>
        </div>
      </aside>

      {/* Mobile Overlay */}
      {isOpen && (
        <div
          className="fixed inset-0 bg-black/50 z-20 md:hidden"
          onClick={() => setIsOpen(false)}
        />
      )}
    </>
  );
}
