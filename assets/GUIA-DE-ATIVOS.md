# Guia de Ativos — Flow Digital Studio

## Convenção de Nomenclatura

```
[tipo]-[variante]-[cor]-[fundo].[ext]
```

| Segmento   | Valores possíveis                                      |
|------------|--------------------------------------------------------|
| `tipo`     | `logo-principal` · `simbolo-circular` · `simbolo-solo` |
| `cor`      | `gradiente` · `mono-branco`                            |
| `fundo`    | `fundo-claro` · `fundo-escuro`                         |

---

## Arquivos disponíveis

### Logo Principal (wordmark completo)

| Arquivo | Quando usar |
|---------|-------------|
| `logo-principal-gradiente-fundo-claro` | Fundo branco ou cinza claro — versão padrão preferencial |
| `logo-principal-gradiente-fundo-escuro` | Dark mode, banners escuros, apresentações fundo preto |
| `logo-principal-mono-branco-fundo-escuro` | Quando gradiente não é possível (ex: serigrafia, bordado) em fundo escuro |

### Símbolo Circular (ícone FD com borda circular)

| Arquivo | Quando usar |
|---------|-------------|
| `simbolo-circular-gradiente-fundo-claro` | Favicon em tema claro, foto de perfil fundo branco |
| `simbolo-circular-gradiente-fundo-escuro` | Favicon em tema escuro, foto de perfil fundo preto |

### Símbolo Solo (ícone FD sem borda)

| Arquivo | Quando usar |
|---------|-------------|
| `simbolo-solo-gradiente-fundo-claro` | Ícone em apps, watermark em fundo claro |
| `simbolo-solo-mono-branco-fundo-escuro` | Ícone monocromático em fundo escuro, impressão P&B |

---

## Uso Correto vs Incorreto

**Correto**
- Logo gradiente em fundo branco ou neutro
- Logo gradiente em fundo preto
- Símbolo FD circular como favicon

**Incorreto** (conforme compilados.png)
- Aplicar gradiente com cores fora da paleta da marca (ex: arco-íris)
- Distorcer, rotacionar ou comprimir a logo
- Sobrepor texto ou elementos sobre a logo
- Usar versão fundo claro sobre fundos muito escuros sem contraste

---

## Paleta de Cores (referência)

| Cor | Hex | Uso |
|-----|-----|-----|
| Laranja→Azul (gradiente) | `#FF6560` → `#CCCCSD` | Gradiente principal da marca |
| Branco | `#FFFFFF` | Fundo claro padrão |
| Cinza claro | `#CCCCCC` | Fundo neutro alternativo |

---

## Formatos

- **PNG** — uso digital (web, apresentações, redes sociais)
- **SVG** — uso escalável (impressão, grandes formatos, desenvolvimento web)

Prefira SVG sempre que o destino for desenvolvimento ou impressão.
