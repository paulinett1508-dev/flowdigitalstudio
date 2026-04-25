NOME DO PROJETO — Fullstack

Stack: [DESCREVER: ex Node.js + React + MongoDB]
Submodulo: .agnostic-core/

---

Orquestração do Fluxo de Trabalho:

1. Modo de Planejamento (padrão)
   - Tarefas não triviais (3+ etapas ou decisões arquiteturais): entre em plan mode antes de codar.
   - Se algo der errado durante a execução: PARE e replanejeje imediatamente — não force.
   - Use plan mode também para etapas de verificação, não apenas construção.
   - Escreva especificações detalhadas antecipadamente para reduzir ambiguidade.
   - Skill: .agnostic-core/skills/behavioral/goal-backward-planning.md

2. Estratégia de Subagentes
   - Use subagentes liberalmente para manter a janela de contexto principal limpa.
   - Descarregue pesquisa, exploração de codebase e análise paralela para subagentes.
   - Uma tarefa por subagente — execução focada, prompt auto-contido.
   - Skill: .agnostic-core/skills/behavioral/context-management.md

3. Verificação Antes de Concluir
   - Nunca marque uma tarefa como concluída sem provar que ela funciona.
   - Execute testes, leia logs, demonstre a correção — não confie só em "compilou".
   - Diferencie o comportamento entre main e suas mudanças quando relevante.
   - Pergunte-se: "um engenheiro sênior da equipe aprovaria isso em code review?"
   - Se não for possível testar (ex.: UI sem dev server), declare explicitamente em vez de afirmar sucesso.
   - Skill: .agnostic-core/skills/audit/validation-checklist.md

4. Exigência de Elegância (balanceada)
   - Mudanças não triviais: pause e pergunte "existe uma forma mais elegante?".
   - Se uma correção parecer paliativa: re-implemente sabendo tudo que sabe agora.
   - Pule isso para correções simples e óbvias — não super-engenhe.
   - Desafie seu próprio trabalho antes de apresentá-lo ao usuário.

5. Correção de Bugs Autônoma
   - Bug report recebido: conserte. Não peça ajuda nem instruções passo-a-passo.
   - Persiga logs, mensagens de erro, testes falhando — depois resolva a causa raiz.
   - Zero troca de contexto exigida do usuário.
   - Testes/CI quebrados: investigue e corrija sem que digam como.
   - Skill: .agnostic-core/skills/audit/systematic-debugging.md

6. Loop de Auto-aperfeiçoamento
   - Após qualquer correção do usuário: registre o padrão em tasks/lessons.md.
   - Escreva regras concretas para si mesmo que previnam o mesmo erro.
   - Revise tasks/lessons.md no início de cada sessão do projeto.
   - Itere implacavelmente até a taxa de erros cair.

---

Antes de implementar:

Backend:
  REST API design:    .agnostic-core/skills/backend/rest-api-design.md
  Error handling:     .agnostic-core/skills/backend/error-handling.md
  Seguranca de API:   .agnostic-core/skills/security/api-hardening.md
  OWASP checklist:    .agnostic-core/skills/security/owasp-checklist.md
  Banco de dados:     .agnostic-core/skills/database/query-compliance.md
  Schema design:      .agnostic-core/skills/database/schema-design.md
  Node.js patterns:   .agnostic-core/skills/nodejs/nodejs-patterns.md
  Express setup:      .agnostic-core/skills/nodejs/express-best-practices.md
  OpenAPI:            .agnostic-core/skills/documentation/openapi-swagger.md

Frontend:
  HTML e CSS:          .agnostic-core/skills/frontend/html-css-audit.md
  Acessibilidade:      .agnostic-core/skills/frontend/accessibility.md
  UX Guidelines:       .agnostic-core/skills/frontend/ux-guidelines.md
  CSS Governance:      .agnostic-core/skills/frontend/css-governance.md
  Tailwind:            .agnostic-core/skills/frontend/tailwind-patterns.md
  SEO:                 .agnostic-core/skills/frontend/seo-checklist.md
  Design com MCP:      .agnostic-core/skills/design/paper-mcp-workflow.md

Qualidade:
  Testes unitarios:    .agnostic-core/skills/testing/unit-testing.md
  Testes integracao:   .agnostic-core/skills/testing/integration-testing.md
  Testes E2E:          .agnostic-core/skills/testing/e2e-testing.md
  TDD workflow:        .agnostic-core/skills/testing/tdd-workflow.md
  Performance:         .agnostic-core/skills/performance/performance-audit.md
  Caching:             .agnostic-core/skills/performance/caching-strategies.md
  Validacao:           .agnostic-core/skills/audit/validation-checklist.md

Operacional:
  Commits:             .agnostic-core/skills/git/commit-conventions.md
  Branching:           .agnostic-core/skills/git/branching-strategy.md
  Deploy procedures:   .agnostic-core/skills/devops/deploy-procedures.md
  Documentacao:        .agnostic-core/skills/documentation/technical-docs.md
  Fact checking:       .agnostic-core/skills/behavioral/fact-checker.md
  Debugging:           .agnostic-core/skills/audit/systematic-debugging.md

AI / LLM (se aplicavel):
  AI patterns:         .agnostic-core/skills/ai/ai-integration-patterns.md
  Prompt engineering:  .agnostic-core/skills/behavioral/prompt-engineering.md

Planejamento:
  Goal-backward:       .agnostic-core/skills/behavioral/goal-backward-planning.md
  Workflow 6 fases:    .agnostic-core/skills/behavioral/project-workflow.md
  Context management:  .agnostic-core/skills/behavioral/context-management.md
  Claude Code tips:    .agnostic-core/skills/behavioral/claude-code-productivity.md

Antes de fazer deploy:
  .agnostic-core/skills/devops/pre-deploy-checklist.md
  .agnostic-core/skills/devops/deploy-procedures.md

---

Todos os Agents disponiveis:

Reviewers:
  Security Reviewer:       .agnostic-core/agents/reviewers/security-reviewer.md
  Frontend Reviewer:       .agnostic-core/agents/reviewers/frontend-reviewer.md
  Code Inspector (SPARC):  .agnostic-core/agents/reviewers/code-inspector.md
  Test Reviewer:           .agnostic-core/agents/reviewers/test-reviewer.md
  Performance Reviewer:    .agnostic-core/agents/reviewers/performance-reviewer.md
  Codebase Mapper:         .agnostic-core/agents/reviewers/codebase-mapper.md

Validators:
  Migration Validator:     .agnostic-core/agents/validators/migration-validator.md

Generators:
  Project Planner:         .agnostic-core/agents/generators/project-planner.md
  Boilerplate Generator:   .agnostic-core/agents/generators/boilerplate-generator.md
  Docs Generator:          .agnostic-core/agents/generators/docs-generator.md
  UI Designer (Paper MCP): .agnostic-core/agents/generators/ui-designer.md

Specialists:
  DevOps Engineer:         .agnostic-core/agents/specialists/devops-engineer.md
  Database Architect:      .agnostic-core/agents/specialists/database-architect.md
  Mobile Developer:        .agnostic-core/agents/specialists/mobile-developer.md
  SEO Specialist:          .agnostic-core/agents/specialists/seo-specialist.md

Workflows:
  Brainstorm:              .agnostic-core/commands/workflows/brainstorm.md
  Create:                  .agnostic-core/commands/workflows/create.md
  Debug:                   .agnostic-core/commands/workflows/debug.md
  Deploy:                  .agnostic-core/commands/workflows/deploy.md

Guia de roteamento (qual agent/skill usar):
  .agnostic-core/docs/agent-routing-guide.md

---

Git Auto-Push Workflow:
  Após cada commit, o hook PostToolUse faz push automático para a branch atual.
  Hook script:       .agnostic-core/scripts/hooks/post-tool-use-autopush
  Configuração:      ~/.claude/settings.json (PostToolUse → Bash matcher)
  Instalação:        scripts/install.sh configura automaticamente (passo 5/6)
  Comportamento:     detecta "git commit" → push origin <branch> → retry 1x se falhar

---

Convencoes do projeto (preencher):

  Backend: [LINGUAGEM] [VERSAO] + [FRAMEWORK] [VERSAO]
  Frontend: [FRAMEWORK] [VERSAO]
  Banco: [BANCO] [VERSAO] via [ORM/DRIVER]
  Auth: JWT / OAuth / sessao
  Cache: Redis / in-memory / nenhum
  Testes: [FRAMEWORK DE TESTES]
  CI/CD: GitHub Actions / outro
  Deploy: [PLATAFORMA]
  Estilo de commits: Conventional Commits

---

Gerenciamento de Tarefas:

  1. Plano primeiro:        escreva o plano em tasks/todo.md com itens marcáveis [ ]
  2. Verifique o plano:     confirme com o usuário (ou consigo) antes de iniciar
  3. Acompanhe o progresso: marque [x] conforme avança, um item por vez
  4. Explique mudanças:     resumo de alto nível em cada etapa concluída
  5. Documente resultados:  seção de revisão em tasks/todo.md ao final
  6. Capture lições:        atualize tasks/lessons.md após cada correção do usuário

---

Princípios Básicos:

  - Simplicidade primeiro: cada mudança o mais simples possível, impacto mínimo no codebase.
  - Sem paliativos:        encontre causas raiz; padrões de dev sênior, não correções temporárias.
  - Impacto mínimo:        toque apenas no necessário; sem efeitos colaterais ou novos bugs.
  - Sem over-engineering:  não adicione features, abstrações ou error handling que a tarefa não pede.
  - Honestidade técnica:   se não pode verificar (ex.: UI), declare explicitamente; nunca finja sucesso.

---
Comportamento
  Ao iniciar cada sessão, execute automaticamente o comando /status.
  Status panel skill:  .agnostic-core/skills/ai/project-status.md
  Comando:             .agnostic-core/templates/commands/status.md
