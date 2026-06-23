# 🎓 Learning Patterns Quiz (Módulo Web React)

Este é o módulo web de quiz e avaliação de conceitos sobre os **Padrões GRASP** (*General Responsibility Assignment Software Patterns*), desenvolvido em **React** + **Vite** e estruturado segundo os princípios do **Atomic Design**.

## 📁 Estrutura de Pastas (Atomic Design)

Dentro da pasta `src/`, os componentes de UI estão divididos em:
* ⚛️ **atoms/**: Componentes puros e fundamentais (ex: botões, inputs, imagens com fallback).
* 🧪 **molecules/**: Combinação de átomos formando unidades funcionais simples (ex: `ResumoConceitosCard`).
* 🧬 **organisms/**: Blocos funcionais mais complexos e completos que compõem a página (ex: blocos de questões `DesafioX`, painel de resultados `GabaritoPanel`).
* 📦 **ui/**: Componentes utilitários base gerados pelo shadcn/ui.

## 🛠️ Scripts Disponíveis

Nesta pasta, você pode rodar os seguintes comandos:

### Instalar Dependências
```bash
npm install
```
*(Recomendado utilizar Node.js v20+)*

### Rodar em Desenvolvimento Local
```bash
npm run dev
```
Inicia o servidor local (por padrão em [http://localhost:5173/](http://localhost:5173/)).

### Gerar Build de Produção
```bash
npm run build
```
Compila e gera a pasta estática `dist/` com o bundle otimizado.