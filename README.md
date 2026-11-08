# FORGELAB STUDIO

Pacote unificado inicial que preserva os três projetos ZIP recebidos e adiciona um portal com páginas separadas.

## Executar o portal

Requisitos: Node.js 20 ou superior.

```bash
npm start
```

Abra `http://localhost:4173`.

Rotas incluídas:

- `/` — página inicial
- `/apresentacao` — apresentação institucional
- `/venda` — página comercial (sem preços ou faturamento inventados)
- `/login` — login do usuário (interface; autenticação ainda não conectada)
- `/admin/login` — login administrativo (interface; autenticação ainda não conectada)
- `/painel` — painel do usuário
- `/painel/carreira` — Professional Skills & Career Evolution
- `/painel/github` — acesso informativo ao módulo GitHub Intelligence
- `/painel/engenharia` — ZIPTOGIT
- `/painel/hackmind` — Hackmind
- `/admin` — painel administrativo (interface; não é área protegida até configurar autenticação)

## Projetos-fonte preservados

- `modules/github-intelligence/` — GitHub-Intelligence-Career-Suite original (diretório `.git` removido do pacote para não transportar metadados locais).
- `modules/ziptogit/` — conteúdo de `ziptogithub.zip`.
- `modules/hackmind/` — conteúdo de `Gerador-Ideias-Hackathons--main.zip`.

Os módulos são projetos independentes. Cada um mantém seu próprio `package.json`, scripts, backend e dependências. Consulte seus READMEs e `.env.example`. Não foram fundidos artificialmente em um único processo, pois suas stacks e contratos são diferentes.

## Estado honesto / limitações

Este pacote é uma integração inicial de fontes + portal, não uma implantação de produção. O portal não simula login, não cria contas e não mostra métricas de faturamento, usuários, vendas, avaliações ou crescimento. O endpoint `/api/health` verifica somente o processo do portal.

Ainda exigem implementação/configuração antes de produção:

1. Autenticação real (hash de senhas, sessões seguras, recuperação, MFA opcional, RBAC e proteção das rotas admin).
2. Banco de dados e persistência de usuários, arquivos, aprovações e versões de currículo.
3. GitHub OAuth/App e testes de permissões; operações de escrita devem exigir aprovação explícita e verificação pós-execução.
4. Execução integrada dos três módulos por serviços separados ou adaptação de suas APIs; as telas do portal não fingem executá-los.
5. Upload e parsing de currículo DOCX/TXT/Markdown, preservação integral, diff, aprovação e exportação DOCX/TXT/Markdown. PDF não é gerado.
6. Hackathon discovery com fontes reais, URLs verificadas, datas e estado de disponibilidade; sem eventos demonstrativos.
7. Configuração comercial real: preços, checkout, webhook, afiliados e impostos só após definição pelo proprietário.
8. Segurança de produção: rate limiting, CSRF, validação de upload, isolamento de jobs, logs auditáveis, CSP, gestão de segredos e testes.

## Regras de produto aplicadas

- Não inventar faturamento, preços, vendas, usuários, métricas, depoimentos ou estatísticas.
- Não inventar habilidades, senioridade, experiência, certificações ou anos de atuação.
- Preservar o GitHub Intelligence original como núcleo; não duplicar ou reescrever seus recursos.
- O currículo existente deve ser preservado; enriquecimento é uma nova versão com evidências e aprovação humana.
- Nenhum PDF é gerado.
- Módulos indisponíveis devem ser marcados como não configurados, não como concluídos.

Veja `docs/INVENTARIO-E-INTEGRACAO.md` para a auditoria inicial dos ZIPs.
