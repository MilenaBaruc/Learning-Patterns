# 🎓 Laboratório Imersivo 3D & Módulo de Avaliação GRASP

> **Trabalho de Conclusão de Curso (TCC)** > *Faculdade de Ciências e Tecnologias em Engenharia – Campus Gama (FCTE)* > **Universidade de Brasília (UnB)** > **Data da Defesa:** 10/07/2026

---

## 📌 Sobre o Projeto
Este repositório armazena a implementação de uma arquitetura de software integrada projetada para o ensino de conceitos abstratos de Engenharia de Software—especificamente os **Padrões GRASP** (*General Responsibility Assignment Software Patterns*). 

O ecossistema combina o poder de engajamento de um **Mundo Virtual 3D** com a precisão analítica de um **Módulo de Avaliação Web**, mitigando os gargalos pedagógicos do ensino puramente teórico tradicional.

---

## 🛠️ Tecnologias e Ferramentas

A solução foi desenvolvida de forma totalmente desacoplada, utilizando tecnologias de ponta em ambas as frentes:

| Módulo Imersivo 3D | Módulo Web (Quiz & Analytics) | Infraestrutura & DevOps |
| :--- | :--- | :--- |
| • **Roblox Studio**<br>• **Luau** (Scripting)<br> | • **React** (SPA)<br>• **Vite** (Build Tool)<br> | • **Vercel** (Deploy & Hosting)<br>• **GitHub** (Versionamento)<br>|

---

## 📐 Engenharia de Componentes: Atomic Design Expandido

O grande diferencial metodológico deste projeto foi a unificação do desenvolvimento sob a filosofia do **Atomic Design**. O padrão clássico de interfaces web foi estendido e adaptado de forma inédita para mapear a arquitetura do espaço tridimensional.

### ⚛️ 1. Módulo Web (React)
Seguindo o design de sistemas convencional para manter o código modular e reutilizável:
* **Átomos:** Botões puros (`Button`), rótulos de texto isolados (`Text`).
* **Moléculas:** Cards de métricas (`MetricCard`), botões dinâmicos de opções do quiz (`Option`).
* **Organismos:** O bloco de questões completo (`Question`), o painel de gráficos estatísticos integrando o Recharts (`Dashboard`).

### 🎮 2. Módulo Virtual (Roblox) — *Extensão Metodológica*
Adaptação da teoria de componentização para o design de mundos virtuais:
* **Átomos:** Primitivas geométricas (cubos brutos), áudios (`.mp3` isolados) e blocos puramente lógicos de código.
* **Moléculas:** Elementos interativos complexos (ex: a `TelaTV` composta por malha 3D + `ClickDetector` + Script de ativação).
* **Organismos:** Sistemas funcionais autônomos dentro da cena (ex: o acionador de telas GUI cliente-servidor).
* **Templates:** O zoneamento e a arquitetura de fluxo espacial do aluno dentro do laboratório (Área de Vídeo, Área de Desafio).
* **Páginas:** O mundo virtual completamente instanciado, textualizado e populado com a matéria específica de GRASP.

---

## 📂 Estrutura do Repositório

```text
Learning-Patterns/
├── LearningPatternsQuiz/    # Aplicação Frontend React SPA (Quiz)
│   ├── src/                 
│   │   ├── app/             # Camada principal/App React (App.tsx, ativos)
│   │   ├── components/      # Estrutura completa de Atomic Design
│   │   │   ├── atoms/       # Componentes básicos (ex: ImageWithFallback)
│   │   │   ├── molecules/   # Elementos interativos (ex: ResumoConceitosCard)
│   │   │   ├── organisms/   # Blocos completos (ex: Desafios, GabaritoPanel)
│   │   │   └── ui/          # Componentes utilitários do shadcn/ui
│   │   ├── imports/         # Importações e assets globais
│   │   └── styles/          # Estilos globais e temas CSS
│   └── vite.config.ts
│
└── roblox-environment/      # Ambiente Imersivo 3D
    ├── src/                 # Scripts desacoplados em Luau (.luau)
    │   ├── BoxSenha.luau
    │   ├── DestinoDuvidaGRASP.luau
    │   ├── DestinoDuvidaLobby.luau
    │   ├── DestinoGRASPDuvida.luau
    │   ├── DestinoGRASPLobby.luau
    │   ├── DestinoVoltarDuvida.luau
    │   ├── DestinoVoltarGRASP.luau
    │   ├── InterfaceQuiz.luau
    │   └── ScriptCliqueTV.luau
    └── laboratorio_grasp.rbxl # Arquivo binário de backup do mapa 3D
```
