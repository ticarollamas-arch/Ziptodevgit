<p align="center"><img src="assets/banner.svg" alt="ForgeLab Studio — pacote inicial com portal, GitHub Intelligence, ZipToGit e HACKMIND" width="100%"></p>

# ForgeLab Studio — pacote inicial com portal e três módulos

Primeira integração do **ForgeLab Studio**: um portal em **Node.js** com páginas separadas e três projetos preservados em `modules/`, cada um com stack, scripts e backend próprios.

| Módulo | Pasta | Função |
|---|---|---|
| **GitHub Intelligence Career Suite** | `modules/github-intelligence/` | Currículo, curadoria de repositórios e README de perfil no GitHub (React/Vite + Express, monorepo pnpm) |
| **ZipToGit** | `modules/ziptogit/` | Inspeção de ZIP/APK, análise de arquitetura clean-room e publicação no GitHub |
| **HACKMIND** | `modules/hackmind/` | Geração e avaliação de ideias e planos para hackathons |

> Versões posteriores, com autenticação e persistência: [Cyberhuntlab-Dev](https://github.com/ticarollamas-arch/Cyberhuntlab-Dev) (Railway + PostgreSQL) e [forgelab-cyberhuntlab](https://github.com/ticarollamas-arch/forgelab-cyberhuntlab) (Vercel + Supabase).

## Recursos do portal

- Páginas `/`, `/apresentacao` e `/venda` (sem preços ou números inventados).
- Telas de `/login` e `/admin/login` (só interface; a autenticação ainda não está conectada).
- `/painel` com acesso aos módulos: `/painel/carreira`, `/painel/github`, `/painel/engenharia` (ZipToGit) e `/painel/hackmind`.
- `/api/health`, que verifica o processo do portal.

## Instalação

Requisitos: **Node.js 20+**. Os módulos podem exigir **pnpm** e variáveis próprias.

```bash
git clone https://github.com/ticarollamas-arch/Ziptodevgit.git
cd Ziptodevgit
npm start          # portal em http://localhost:4173
```

Para executar cada módulo, siga o README e o `.env.example` da pasta correspondente.

## Limitações

Este pacote é uma integração inicial, não uma implantação de produção. Ainda faltam:

- autenticação real (hash de senhas, sessões, RBAC) e proteção das rotas administrativas;
- banco de dados, GitHub OAuth/App e execução integrada dos três módulos;
- configuração comercial (preços, checkout, webhooks);
- endurecimento de segurança: rate limiting, CSRF, CSP, validação de uploads e logs de auditoria.

A auditoria inicial dos pacotes está em [docs/INVENTARIO-E-INTEGRACAO.md](docs/INVENTARIO-E-INTEGRACAO.md).

## Tecnologias

Node.js · HTML/CSS/JavaScript · TypeScript · React · Vite · Express · pnpm

## Licença

Este repositório ainda **não tem licença única definida**. O módulo `github-intelligence` declara MIT no seu `package.json`; `ziptogit` e `hackmind` não declaram licença. Confirme os direitos antes de redistribuir.
