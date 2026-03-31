# ⚛️ Atomic Design System - Learning Patterns 

Este repositório é dedicado à implementação de uma interface utilizando a metodologia **Atomic Design**, proposta por Brad Frost. O foco principal é a criação de componentes modulares, reutilizáveis e escaláveis.

## 📌 Sobre o Projeto

O **Atomic Design** é uma metodologia que divide a interface do utilizador em cinco níveis distintos:

1.  **Átomos**: As peças fundamentais (ex: botões, inputs, labels, cores).
2.  **Moléculas**: Grupos de átomos que formam uma unidade funcional (ex: um campo de pesquisa).
3.  **Organismos**: Componentes complexos formados por moléculas e átomos (ex: header, barra lateral).
4.  **Templates**: Estruturas de página que organizam os componentes no layout.
5.  **Páginas**: Instâncias reais com conteúdo final para testar a eficácia do design.

## 🛠️ Tecnologias Principais

* [Inserir Tecnologia, ex: React / Next.js / Vue]
* [Inserir Estilização, ex: Tailwind CSS / Styled Components]
* [Opcional: Storybook para documentação]

## 📁 Estrutura de Pastas

A organização do código reflete a hierarquia do Atomic Design:

```text
src/
 └── components/
     ├── atoms/          # Componentes básicos e indivisíveis
     ├── molecules/      # Combinações simples de átomos
     ├── organisms/      # Secções complexas da interface
     ├── templates/      # Layouts estruturais das páginas
     └── pages/          # Páginas com dados e estado real
```

## 📖 Referências e Inspirações

### Metodologia e Design
* **FROST, Brad.** [Atomic Design](https://atomicdesign.bradfrost.com/). Massachusetts: O'Reilly Media, 2016.
* **Design Systems Repo.** [A comprehensive guide to design systems](https://designsystemsrepo.com/).
* **Nielsen Norman Group.** [Component Libraries in Design Systems](https://www.nngroup.com/articles/design-system-component-library/).

### Engenharia de Software e Padrões (Contexto TCC)
* **GAMMA, Erich et al.** *Design Patterns: Elements of Reusable Object-Oriented Software*. Addison-Wesley, 1994. (Padrões de Projeto).
* **SERRANO, Milene; SERRANO, Maurício.** Conteúdos acadêmicos sobre Arquitetura e Engenharia de Software - UnB/FCTE.
* **MORAIS, Milena Baruc.** *Learning Patterns: Um Ambiente Imersivo de Metaverso para Aprendizagem de Padrões de Projeto*. Trabalho de Conclusão de Curso (Bacharelado em Engenharia de Software) – Universidade de Brasília, 2025.

### Ferramentas de Apoio
* [React Documentation](https://reactjs.org/)
* [Storybook Guide](https://storybook.js.org/docs/react/get-started/introduction)
