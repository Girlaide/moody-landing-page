# Moody Landing Page

Este projeto é uma landing page moderna construída com Vite, React, TypeScript e estilizada com Tailwind CSS. Ele é configurado com ferramentas de qualidade de código como ESLint e Prettier para garantir um desenvolvimento consistente e livre de erros.

---

## 📃 Guia Técnico 

Para garantir a consistência, todo o desenvolvimento deve seguir as diretrizes de padronização detalhadas em nosso [Guia Técnico](https://docs.google.com/document/d/17anntQVBceitos4YcOjVkHFWRf0DzGkzsm-oEImyC94/edit?tab=t.0).

---

## 💻 Tecnologias Utilizadas
- [Vite](https://vite.dev/)
- [React](https://react.dev/)
- [TypeScript](https://www.typescriptlang.org/)
- [Tailwind CSS](https://tailwindcss.com/)
- [ESLint](https://eslint.org/)
- [Prettier](https://prettier.io/)

---

## 📋 Pré-requisitos
Antes de começar, você vai precisar ter instalado em sua máquina:

- [Node.js](https://nodejs.org/pt)
- [pnpm](https://pnpm.io/pt/) (ou outro gerenciador de pacotes)


## ⚙️ Como Rodar o Projeto
Siga os passos abaixo para configurar e rodar o projeto em seu ambiente local:

```bash
# 1. Clone este repositório
$ git clone https://github.com/seu-usuario/nome-do-repositorio.git

# 2. Acesse a pasta do projeto no seu terminal
$ cd nome-do-repositorio

# 3. Instale as dependências
$ pnpm install

# 4. Rode a aplicação em modo de desenvolvimento
$ pnpm dev
```

Após executar o último comando, abra `http://localhost:5173` (ou a porta indicada no terminal) no seu navegador para ver o resultado.

---

## 📜 Scripts Disponíveis
No `package.json`, você encontrará os seguintes scripts:

- `pnpm dev`: Inicia o servidor de desenvolvimento.
- `pnpm build`: Compila e otimiza a aplicação para produção na pasta dist/.
- `pnpm lint`: Executa o ESLint para analisar o código em busca de erros e problemas de estilo.
- `pnpm format`: Formata todos os arquivos do projeto com o Prettier.
- `pnpm preview`: Inicia um servidor local para visualizar a versão de produção (após rodar pnpm build).

---

## ✨ Qualidade de Código
Este projeto utiliza ESLint e Prettier para manter a qualidade e a consistência do código.

- Para verificar por erros, rode: `pnpm lint`
- Para formatar todo o código automaticamente, rode: `pnpm format`

É altamente recomendado configurar seu editor de código para formatar ao salvar (Format on Save) para uma melhor experiência de desenvolvimento.
