# Estante Livre 2.0

Aplicação web instalável para descoberta de filmes e séries em acervos abertos, com atalhos e validação informativa de manifestos de complementos Stremio.

## Executar localmente

Requer Node.js 20 ou superior.

```bash
npm test
npx serve .
```

Abra a URL local exibida pelo servidor. O Service Worker/PWA requer `localhost` ou HTTPS.

## Recursos

- Catálogo inicial com obras clássicas e projetos audiovisuais abertos.
- Pesquisa e filtros por título, gênero, ano e tipo.
- Favoritos armazenados localmente no dispositivo.
- Busca adicional no Internet Archive Advanced Search API, com links para a ficha de cada item.
- PWA instalável e cache do shell para acesso básico offline.
- Campo de manifesto Stremio com validação HTTPS, leitura do JSON e checagem dos campos básicos do manifesto antes de oferecer o deep link de instalação.
- Layout responsivo para celular e desktop.
- Cabeçalhos básicos de segurança configurados em `vercel.json`.

## Limites importantes

- O app não hospeda, copia, retransmite nem desbloqueia vídeos.
- A busca do Internet Archive é uma busca de metadados, não uma certificação jurídica. Verifique a licença e os direitos da edição/território na página do item antes de assistir, baixar ou reutilizar.
- A leitura do manifesto pode falhar quando o servidor do complemento não permite CORS. Isso não significa necessariamente que o manifesto seja inválido.
- Complementos Stremio são software de terceiros. Instale somente complementos cuja origem e comportamento você reconheça. A validação verifica apenas formato básico, não segurança.
- A reprodução depende do Stremio, da compatibilidade do dispositivo e das fontes legais oferecidas pelo complemento.

## Estrutura

- `index.html`: interface principal.
- `src/core.js`: filtros, validação de URL e funções de deep link.
- `tests/core.test.js`: testes automatizados das funções centrais.
- `manifest.webmanifest`, `sw.js`, `assets/icon.svg`: suporte PWA.
- `vercel.json`: cabeçalhos para hospedagem na Vercel.

## Referências

- [Stremio Add-on SDK](https://github.com/Stremio/stremio-addon-sdk)
- [Documentação do Internet Archive Advanced Search](https://archive.org/advancedsearch.php)
