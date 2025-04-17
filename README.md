# ws-mf-module-federation

Este projeto demonstra uma arquitetura de micro frontends utilizando **Module Federation** com **Rsbuild** em um monorepo gerenciado por **pnpm** e **Lerna**.

## 📦 Estrutura do Monorepo

```
ws-mf-module-federation/
├── apps/
│   ├── mf_provider/   # Módulo que fornece componentes remotos
│   └── mf_consumer/   # Módulo que consome componentes remotos
├── package.json       # Scripts e dependências do monorepo
├── pnpm-workspace.yaml
└── lerna.json
```

## 🚀 Tecnologias Utilizadas

- [Rsbuild](https://rsbuild.dev) com suporte a Module Federation
- [@module-federation/rsbuild-plugin](https://www.npmjs.com/package/@module-federation/rsbuild-plugin)
- [React 18](https://reactjs.org)
- [pnpm](https://pnpm.io)
- [Lerna](https://lerna.js.org)

## 📚 Como Executar

1. **Instale as dependências:**

   ```bash
   pnpm install
   ```

2. **Inicie os aplicativos em paralelo:**

   ```bash
   pnpm dev
   ```

   Este comando executa os scripts `dev` definidos em cada pacote (`mf_provider` e `mf_consumer`) simultaneamente.

3. **Acesse os aplicativos:**

   - **mf_provider:** http://localhost:3001
   - **mf_consumer:** http://localhost:3002

## 🧩 Configuração do Module Federation

No `rsbuild.config.ts` de cada aplicativo, o plugin `@module-federation/rsbuild-plugin` é utilizado para configurar o Module Federation.

### Exemplo de configuração para o `mf_provider`:

```ts
import { defineConfig } from "@rsbuild/core";
import { pluginReact } from "@rsbuild/plugin-react";
import { pluginModuleFederation } from "@module-federation/rsbuild-plugin";

export default defineConfig({
  plugins: [
    pluginReact(),
    pluginModuleFederation({
      name: "mf_provider",
      filename: "remoteEntry.js",
      exposes: {
        "./Button": "./src/components/Button.tsx",
      },
      shared: ["react", "react-dom"],
    }),
  ],
});
```

### Exemplo de configuração para o `mf_consumer`:

```ts
import { defineConfig } from "@rsbuild/core";
import { pluginReact } from "@rsbuild/plugin-react";
import { pluginModuleFederation } from "@module-federation/rsbuild-plugin";

export default defineConfig({
  plugins: [
    pluginReact(),
    pluginModuleFederation({
      name: "mf_consumer",
      remotes: {
        mf_provider: "mf_provider@http://localhost:3001/remoteEntry.js",
      },
      shared: ["react", "react-dom"],
    }),
  ],
});
```

## 🛠️ Scripts Disponíveis

- `pnpm dev`: Inicia todos os aplicativos em modo de desenvolvimento.
- `pnpm build`: Compila todos os aplicativos para produção.

## 📖 Recursos Adicionais

- [Documentação do Rsbuild sobre Module Federation](https://rsbuild.dev/guide/advanced/module-federation)
- [Repositório oficial do Module Federation](https://github.com/module-federation)

---

## 🛠️ Scripts Disponíveis

- `pnpm dev`: Inicia todos os aplicativos em modo de desenvolvimento.

- `pnpm build`: Compila todos os aplicativos para produção.

## 🚢 Deploy

Esse projeto pode ser facilmente adaptado para deploy via serviços como Vercel, Netlify, AWS S3 ou Cloudflare Pages.

Cada app (`mf_provider` e `mf_consumer`) pode ser construído individualmente:

```bash
cd apps/mf_provider
pnpm build

cd ../mf_consumer
pnpm build
```

Em seguida, o conteúdo da pasta `dist` de cada app pode ser enviado para um bucket/CDN ou hospedado em servidores diferentes, respeitando as URLs usadas nas configurações de `remotes`.

## 🧪 Testes

Este projeto ainda não inclui testes automatizados. Sugestão de ferramentas que podem ser integradas:

- **Jest** para testes unitários
- **React Testing Library** para componentes React
- **Playwright ou Cypress** para testes de integração E2E (especialmente útil para apps federados)

## 👤 Autor

Desenvolvido por [Werliton Silva](https://github.com/werliton) 🚀
