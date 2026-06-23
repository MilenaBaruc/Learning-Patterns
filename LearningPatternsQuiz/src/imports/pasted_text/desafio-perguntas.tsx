Aqui está o banco de dados completo e expandido, contendo exatamente **5 perguntas para cada um dos 3 tipos de desafio** presentes na sua aplicação React.

O conteúdo foi extraído estritamente dos slides das aulas da Professora Milene (UnB), abordando minuciosamente os conceitos de **Fazer vs. Conhecer, Criador, Especialista na Informação, Controlador, Alta Coesão, Baixo Acoplamento, Polimorfismo, Invenção Pura, Indireção e Variações Protegidas**.

---

## 🧱 Categoria 1: Múltipla Escolha (`Desafio1MultiplaEscolha.tsx`)

### 🎯 Pergunta 1: Todo-Parte e Relações de Composição (Princípio Criador)

* **Enunciado:** "Nos slides de GRASP Parte I, a professora Milene destaca que as relações de TODO-PARTE possuem um 'forte apelo semântico'. No cenário do jogo Banco Imobiliário, a classe `Board` (Tabuleiro) possui uma relação de composição com a classe `Square` (Quadra). Diante disso, a quem pertence a responsabilidade de instanciar os objetos de `Square`?"
* **Alternativas:**
* A) À própria classe `Square`, já que ela conhece melhor as suas próprias propriedades.
* B) À classe `Player`, pois o jogador caminha ativamente sobre as quadras.
* C) À classe `Board`, porque a relação é de composição e as PARTES só existem se o TODO existir. *(CORRETA)*
* D) À classe `MonopolyGame`, por ser a raiz global e controladora do sistema.


* **Gabarito/Feedback:** "Correto! Se a relação for de composição/agregação estrita, as PARTES dependem do TODO para coexistirem. Portanto, pelo padrão Criador, a responsabilidade de instanciação da PARTE (`Square`) é atribuída à entidade TODO (`Board`)."

### 🎯 Pergunta 2: Responsabilidades de 'Fazer' vs. 'Conhecer' (Princípio Geral)

* **Enunciado:** "O Projeto Guiado por Responsabilidades (PGR) define que os objetos desempenham papéis e possuem obrigações divididas em 'fazer' e 'conhecer'. Qual das seguintes alternativas representa uma responsabilidade clássica do tipo **CONHECER**?"
* **Alternativas:**
* A) Iniciar uma ação direta em outros objetos do sistema.
* B) Controlar e coordenar atividades complexas entre múltiplos componentes de infraestrutura.
* C) Executar um cálculo matemático complexo ou instanciar uma nova classe de domínio.
* D) Saber sobre dados privados encapsulados, objetos relacionados ou elementos derivados/calculáveis. *(CORRETA)*
* **Gabarito/Feedback:** "Excelente! Responsabilidades 'de conhecer' incluem o saber sobre dados encapsulados, objetos associados e elementos que o objeto pode derivar. Atributos e associações do modelo de domínio são excelentes fontes para isso."



### 🎯 Pergunta 3: O Padrão Criador e os Dados de Inicialização

* **Enunciado:** "A classe `RegistoVenda` precisa de dados muito específicos e confidenciais que estão contidos apenas dentro da classe `Caixa` para poder ser inicializada corretamente. Segundo o padrão GRASP Criador, qual deve ser a decisão de atribuição de responsabilidade?"
* **Alternativas:**
* A) Atribuir a criação à classe `Caixa`, pois ela possui os dados de inicialização que serão passados para `RegistoVenda`. *(CORRETA)*
* B) Atribuir a criação a uma classe externa de Banco de Dados para desacooplar o sistema.
* C) Fazer com que a própria `RegistoVenda` busque os dados através de um método global público.
* D) Utilizar uma interface genérica para violar o encapsulamento em prol da performance.


* **Gabarito/Feedback:** "Perfeito! Uma classe B deve ser a Criadora de uma classe A se B possui os dados de inicialização que serão passados para A no momento da sua criação, minimizando o acoplamento estrutural."

### 🎯 Pergunta 4: Acoplamento Evolutivo (Princípio do Baixo Acoplamento)

* **Enunciado:** "O padrão GRASP Baixo Acoplamento (Low Coupling) é uma diretriz de avaliação que governa todo o design de software. De acordo com o material didático, o acoplamento é considerado prejudicial e problemático quando:"
* **Alternativas:**
* A) Classes de utilidade geral e estáveis (como as coleções nativas do Java/C#) são amplamente utilizadas.
* B) Uma classe depende de outra classe que é altamente instável e muda de estrutura frequentemente. *(CORRETA)*
* C) Os objetos comunicam-se exclusivamente através de interfaces polimórficas estáveis.
* D) A herança é utilizada para reaproveitar comportamentos puramente coesos.


* **Gabarito/Feedback:** "Exatamente! O perigo reside no acoplamento com elementos instáveis. Se a classe X depende da classe Y, e Y sofre modificações constantes, a classe X quebrará repetidamente, inflando o custo de manutenção."

### 🎯 Pergunta 5: Escopo do Controlador de Caso de Uso

* **Enunciado:** "Nos cenários abordados em aula, o uso de um Controlador de Caso de Uso é recomendado no lugar de um Controlador Fachada (Facade) quando o sistema começa a crescer. Qual o principal sintoma de que um Controlador Fachada deve ser substituído?"
* **Alternativas:**
* A) Quando ele possui alta coesão e delega todas as suas tarefas rapidamente.
* B) Quando ele se torna um 'Controlador Inflado/Gordo', acumulando muitas responsabilidades e fingindo processar regras de negócio sozinho. *(CORRETA)*
* C) Quando ele passa a usar interfaces polimórficas para mapear os impostos do sistema.
* D) Quando ele deixa de receber eventos de sistema vindos da camada de Visão (UI).


* **Gabarito/Feedback:** "Correto! Um controlador gordo/inflado viola a coesão, acumulando atributos e centralizando lógica de negócio que deveria estar distribuída nos objetos de domínio. Criar controladores por caso de uso resolve esse problema."

---

## 🤝 Categoria 2: Associação / Arrastar e Soltar (`Desafio2ArrastarSoltar.tsx`)

### 🎯 Pergunta 6: Mapeamento de Especialistas no Ponto de Venda (PDV)

* **Enunciado:** "Para calcular o valor total de uma venda de forma coesa, precisamos computar o subtotal de cada `ItemVenda` (quantidade × preço do produto). Associe cada responsabilidade/método à sua respectiva classe especialista ideal segundo os diagramas de sequência dos slides:"
* **Mapeamento para Associação:**
* *Método:* `getTotal()` ➔ **Classe Especialista:** `Venda` (Pois ela conhece e itera sobre a coleção de todos os itens).
* *Método:* `getSubtotal()` ➔ **Classe Especialista:** `ItemVenda` (Pois ela possui o atributo `quantidade` e está diretamente ligada ao produto).
* *Método:* `getPrice()` ➔ **Classe Especialista:** `Produto` (Pois ela encapsula os dados nativos de `price` e `itemID`).


* **Gabarito/Feedback:** "Excelente! A atribuição seguiu o princípio básico do GRASP: delegar a responsabilidade para quem detém a informação necessária, preservando o encapsulamento."

### 🎯 Pergunta 7: Níveis de Coesão de Componentes (Grady Booch)

* **Enunciado:** "A coesão mede o quão focadas estão as obrigações de um elemento de software. Associe os diferentes níveis de coesão descritos pela professora Milene às suas respectivas situações reais:"
* **Mapeamento para Associação:**
* *Situação:* Classe com responsabilidades moderadas em uma única área, cooperando levemente com outras. ➔ **Conceito:** `Coesão Moderada`.
* *Situação:* Classe responsável por tarefas em áreas funcionais completamente distintas (ex: Banco de Dados + Renderização de Tela). ➔ **Conceito:** `Coesão Muito Baixa` (Classes Monstros).
* *Situação:* Classe focada exclusivamente em um conceito atómico do domínio, executando-o perfeitamente. ➔ **Conceito:** `Coesão Alta` (O Cenário Desejado).


* **Gabarito/Feedback:** "Perfeito! Manter uma Coesão Alta garante que o código permaneça legível, testável e altamente reaproveitável."

### 🎯 Pergunta 8: Responsabilidades da Camada Arquitetural MVC

* **Enunciado:** "O GRASP interage diretamente com padrões arquiteturais como o MVC. Associe cada elemento do sistema ao seu papel correto na cadeia de delegação de responsabilidades de eventos:"
* **Mapeamento para Associação:**
* *Elemento:* Capturar os cliques do rato do utilizador, sem embutir qualquer regra de negócio. ➔ **Papel:** `Camada de Interface (UI / Visão)`.
* *Elemento:* Receber a mensagem do sistema e coordenar qual fluxo de negócio deve ser disparado. ➔ **Papel:** `Classe Controladora`.
* *Elemento:* Armazenar os estados, dados privados e calcular os subtotais de negócio. ➔ **Papel:** `Camada de Domínio (Modelo)`.


* **Gabarito/Feedback:** "Muito bem! Respeitar as fronteiras do MVC garante que modificações na interface gráfica não exijam alterações nas regras de negócio subjacentes."

### 🎯 Pergunta 9: Acoplamento e Conexões de Design

* **Enunciado:** "O acoplamento mede a força da conexão entre os elementos. Associe os cenários de design abaixo ao impacto gerado no acoplamento geral do software:"
* **Mapeamento para Associação:**
* *Cenário:* Uma classe conhece apenas a interface genérica e abstrata de um componente. ➔ **Impacto:** `Baixo Acoplamento (Desejável)`.
* *Cenário:* Uma classe acede diretamente a variáveis globais e atributos privados de outra classe. ➔ **Impacto:** `Alto Acoplamento (Perigoso)`.
* *Cenário:* Um objeto herda de uma superclasse gigantesca e instável. ➔ **Impacto:** `Acoplamento Estrutural Complexo`.


* **Gabarito/Feedback:** "Exatamente! Projetar voltado para interfaces e abstrações blinda o seu sistema contra o efeito dominó, onde uma alteração quebra múltiplos pontos do código."

### 🎯 Pergunta 10: Padrões Avançados de Design GRASP

* **Enunciado:** "Na Parte II da matéria, são introduzidos padrões para solucionar problemas complexos de extensibilidade. Associe os objetivos listados abaixo aos seus respectivos padrões GRASP:"
* **Mapeamento para Associação:**
* *Objetivo:* Tratar caminhos alternativos de comportamento com base no tipo do objeto sem usar condicionais (`if/switch`). ➔ **Padrão:** `Polimorfismo`.
* *Objetivo:* Atribuir responsabilidades a um objeto intermediário para atuar como mediador e evitar conexão direta. ➔ **Padrão:** `Indireção`.
* *Objetivo:* Atribuir responsabilidades de modo a evitar que instabilidades externas quebrem o núcleo do sistema. ➔ **Padrão:** `Variações Protegidas`.


* **Gabarito/Feedback:** "Perfeito! Esses padrões avançados convertem designs rígidos em sistemas flexíveis e preparados para evoluir conforme as necessidades de negócio."

---

## 💻 Categoria 3: Análise de Código e Refatoração (`Desafio3Refatoracao.tsx`)

### 🎯 Pergunta 11: Invenção Pura (Pure Fabrication) vs. Baixa Coesão

* **Enunciado:** "Analise o trecho de código abaixo. A classe `Venda` possui os dados de negócio, mas também concentra código SQL para persistência:
`class Venda { float total; void salvarEmBancoDados() { /* Código SQL */ } }`
Segundo os slides da Parte II, esta abordagem destrói a coesão da classe de domínio. Qual a refatoração recomendada aplicando **Invenção Pura**?"
* **Alternativas:**
* A) Transferir o método `salvarEmBancoDados` para a classe `ItemVenda`.
* B) Criar uma classe puramente artificial e técnica (ex: `VendaDAO` ou `PersistentStorage`) para assumir a responsabilidade exclusiva de persistência, limpando a classe `Venda`. *(CORRETA)*
* C) Mudar o método para estático dentro da própria classe `Venda`.
* D) Eliminar o banco de dados e forçar a camada de interface gráfica a executar as queries SQL.


* **Gabarito/Feedback:** "Excelente! A Invenção Pura serve para salvar a coesão de objetos do domínio. Criamos um conceito artificial (que não existe no mundo real) para tratar de um comportamento puramente técnico."

### 🎯 Pergunta 12: Eliminação de Condicionais por Polimorfismo

* **Enunciado:** "Observe o seguinte método contido numa classe de cálculo fiscal:
`if (tipo == "Agrario") return calcAgrario(); else if (tipo == "Servico") return calcServico();`
De acordo com as diretrizes de **Polimorfismo e Variações Protegidas**, como este código deve ser refatorado para suportar novos impostos sem precisar de ser modificado?"
* **Alternativas:**
* A) Adicionar novos blocos `else if` conforme novos impostos surjam no sistema.
* B) Centralizar as strings de tipos num arquivo de configuração JSON externo.
* C) Criar uma interface comum chamada `Imposto` com o método polimórfico `calcular()`, permitindo que cada novo tipo de imposto seja uma classe isolada que implemente a sua própria regra. *(CORRETA)*
* D) Substituir os blocos `if-else` por uma estrutura de `switch-case` tradicional.


* **Gabarito/Feedback:** "Perfeito! O GRASP Polimorfismo orienta que, se o comportamento varia por tipo, devemos delegar a responsabilidade aos próprios tipos através de herança/interfaces, blindando a classe chamadora (Variações Protegidas)."

### 🎯 Pergunta 13: Ocultação da Estrutura e a Lei de Demeter

* **Enunciado:** "Analise a seguinte linha de código executada dentro de um controlador:
`cliente.obterPlanoManager().obterContrato().obterConfiguracao().aplicarDesconto();`
De acordo com a diretriz de **Ocultação da Estrutura ('Não fale com estranhos')**, por que essa linha representa um design frágil e perigoso?"
* **Alternativas:**
* A) Porque consome ciclos de CPU excessivos ao invocar métodos em sequência.
* B) Porque viola o encapsulamento, forçando o objeto a navegar por caminhos longos em estruturas internas de terceiros, gerando um acoplamento severo e propenso a quebras se qualquer classe da cadeia mudar. *(CORRETA)*
* C) Porque o método `aplicarDesconto` deveria obrigatoriamente retornar uma string.
* D) Porque impede a execução de queries assíncronas no banco de dados.


* **Gabarito/Feedback:** "Correto! A Ocultação da Estrutura diz que um método só deve enviar mensagens aos seus colaboradores diretos. Navegar por uma longa linha de dependências expõe a arquitetura interna e gera fragilidade sistémica."

### 🎯 Pergunta 14: Indireção para Desacooplamento de Componentes

* **Enunciado:** "Uma classe de telemetria `SensorTemperatura` precisa de enviar dados diretamente para uma classe de interface gráfica `PainelJanela`. Isso criou um acoplamento direto prejudicial. Para solucionar isto usando o padrão **Indireção**, o que deve ser inserido entre elas?"
* **Alternativas:**
* A) Um bloco de decisão `try-catch` para capturar exceções térmicas.
* B) Uma classe ou interface intermediária (como um mediador ou um despachante de eventos) para que o Sensor converse com o intermediário e a Interface consuma dele, quebrando o elo direto. *(CORRETA)*
* C) Uma variável global para centralizar a leitura do sensor.
* D) Mesclar as duas classes numa única entidade chamada `SensorPainel` para obter alta coesão.


* **Gabarito/Feedback:** "Exatamente! A Indireção resolve problemas de acoplamento direto inserindo um elemento intermediário na comunicação entre dois componentes, permitindo que ambos permaneçam independentes e reutilizáveis."

### 🎯 Pergunta 15: Identificação de Violações de Design (O Controlador Inflado)

* **Enunciado:** "Analise o escopo conceitual da classe abaixo:
`class ControladorGeral { void renderizarTela(); void validarCampos(); void calcularDesconto(); void persistirSQL(); }`
Com base nos slides analisados, quais princípios fundamentais do GRASP esta classe está a violar simultaneamente?"
* **Alternativas:**
* A) Alta Coesão e Baixo Acoplamento, por estar muito encapsulada.
* B) Polimorfismo e Invenção Pura, por não possuir métodos privados estáveis.
* C) Alta Coesão e Baixo Acoplamento, pois tornou-se uma classe monstro com baixa coesão (faz coisas demais) e alto acoplamento (depende de múltiplas camadas). *(CORRETA)*
* D) Variações Protegidas, por usar herança múltipla de interfaces.


* **Gabarito/Feedback:** "Perfeito! Um controlador que assume a responsabilidade de pintar a tela, validar negócio, calcular e salvar no banco possui Baixa Coesão e Alto Acoplamento. A refatoração exige a distribuição dessas tarefas para as suas respectivas camadas especialistas."

---

### 🚀 Próximo Passo no React:

Basta copiar os textos de cada bloco e alimentar as variáveis de estado ou ficheiros JSON que o seu código TypeScript utiliza para renderizar a interface. O seu Módulo de Avaliação agora está extremamente robusto, académico e totalmente alinhado com a ementa de Engenharia de Software da UnB!