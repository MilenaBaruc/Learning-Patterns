import React from 'react';
import { HelpCircle } from 'lucide-react';

interface Props {
  respostas: { [key: number]: string };
  setRespostas: (respostas: { [key: number]: string }) => void;
}

const perguntas = [
  {
    id: 1,
    pergunta: "Nos slides de GRASP Parte I, a professora Milene destaca que as relações de TODO-PARTE possuem um 'forte apelo semântico'. No cenário do jogo Banco Imobiliário, a classe Board (Tabuleiro) possui uma relação de composição com a classe Square (Quadra). Diante disso, a quem pertence a responsabilidade de instanciar os objetos de Square?",
    alternativas: [
      { id: 'A', texto: 'À própria classe Square', explicacao: 'Square conhece suas propriedades, mas não é responsável pela própria criação.' },
      { id: 'B', texto: 'À classe Player', explicacao: 'O jogador caminha sobre as quadras, mas não as cria.' },
      { id: 'C', texto: 'À classe Board', explicacao: 'Na composição, as PARTES só existem se o TODO existir — Board cria Square.' },
      { id: 'D', texto: 'À classe MonopolyGame', explicacao: 'É a raiz do sistema, mas delega criação às classes de domínio.' }
    ],
    correta: 'C'
  },
  {
    id: 2,
    pergunta: "O Projeto Guiado por Responsabilidades (PGR) define que os objetos desempenham papéis divididos em 'fazer' e 'conhecer'. Qual das seguintes alternativas representa uma responsabilidade clássica do tipo CONHECER?",
    alternativas: [
      { id: 'A', texto: 'Iniciar uma ação direta em outros objetos do sistema', explicacao: "Iniciar ações é responsabilidade do tipo 'fazer'." },
      { id: 'B', texto: 'Controlar e coordenar atividades complexas entre componentes', explicacao: "Coordenar é uma responsabilidade do tipo 'fazer'." },
      { id: 'C', texto: 'Executar um cálculo matemático ou instanciar uma nova classe', explicacao: "Executar e instanciar são responsabilidades do tipo 'fazer'." },
      { id: 'D', texto: 'Saber sobre dados privados, objetos relacionados ou elementos derivados', explicacao: 'Conhecer atributos encapsulados, associações e derivados é responsabilidade do tipo conhecer.' }
    ],
    correta: 'D'
  },
  {
    id: 3,
    pergunta: "A classe RegistoVenda precisa de dados específicos contidos apenas dentro da classe Caixa para poder ser inicializada corretamente. Segundo o padrão GRASP Criador, qual deve ser a decisão de atribuição de responsabilidade?",
    alternativas: [
      { id: 'A', texto: 'Atribuir a criação à classe Caixa', explicacao: 'Caixa possui os dados de inicialização que serão passados a RegistoVenda — critério direto do Criador.' },
      { id: 'B', texto: 'Atribuir a criação a uma classe externa de Banco de Dados', explicacao: 'Desacopla conceitualmente, mas viola o critério do Criador baseado em posse de dados.' },
      { id: 'C', texto: 'Fazer a própria RegistoVenda buscar os dados por método global', explicacao: 'Viola encapsulamento e aumenta acoplamento desnecessariamente.' },
      { id: 'D', texto: 'Usar interface genérica para violar encapsulamento por performance', explicacao: 'Violar encapsulamento nunca é a solução indicada pelo GRASP.' }
    ],
    correta: 'A'
  },
  {
    id: 4,
    pergunta: "O padrão GRASP Baixo Acoplamento é uma diretriz que governa todo o design de software. De acordo com o material didático, o acoplamento é considerado prejudicial quando:",
    alternativas: [
      { id: 'A', texto: 'Classes de utilidade estáveis (como coleções nativas) são amplamente usadas', explicacao: 'Depender de elementos estáveis não é problemático para o acoplamento.' },
      { id: 'B', texto: 'Uma classe depende de outra altamente instável que muda frequentemente', explicacao: 'Dependência de elementos instáveis propaga mudanças e inflaciona o custo de manutenção.' },
      { id: 'C', texto: 'Objetos comunicam-se através de interfaces polimórficas estáveis', explicacao: 'Comunicação via interfaces estáveis é exatamente o que o GRASP recomenda.' },
      { id: 'D', texto: 'Herança é usada para reaproveitar comportamentos coesos', explicacao: 'Herança bem aplicada em hierarquias coesas é aceitável.' }
    ],
    correta: 'B'
  },
  {
    id: 5,
    pergunta: "Nos cenários abordados em aula, o uso de um Controlador de Caso de Uso é recomendado no lugar de um Controlador Fachada quando o sistema cresce. Qual o principal sintoma de que um Controlador Fachada deve ser substituído?",
    alternativas: [
      { id: 'A', texto: 'Quando ele possui alta coesão e delega todas as suas tarefas rapidamente', explicacao: 'Esse é o comportamento ideal — não é sintoma de problema.' },
      { id: 'B', texto: "Quando se torna um 'Controlador Inflado', acumulando responsabilidades e fingindo processar regras de negócio sozinho", explicacao: 'Um controlador gordo viola a coesão — criar controladores por caso de uso resolve o problema.' },
      { id: 'C', texto: 'Quando passa a usar interfaces polimórficas para mapear impostos', explicacao: 'Uso de polimorfismo não é sintoma de problema no controlador.' },
      { id: 'D', texto: 'Quando deixa de receber eventos da camada de Visão (UI)', explicacao: 'Não receber eventos da UI descaracteriza o papel do controlador, mas não é o sintoma clássico de inflação.' }
    ],
    correta: 'B'
  }
];

export function Desafio1MultiplaEscolha({ respostas, setRespostas }: Props) {
  const handleSelecionar = (perguntaId: number, alternativaId: string) => {
    setRespostas({ ...respostas, [perguntaId]: alternativaId });
  };

  return (
    <div className="mb-16">
      <div className="flex items-center gap-3 mb-6">
        <div className="w-10 h-10 bg-gradient-to-br from-blue-600 to-indigo-600 rounded-lg shadow-md flex items-center justify-center">
          <HelpCircle className="w-5 h-5 text-white" />
        </div>
        <h2 className="text-blue-900">Desafio 1: Múltipla Escolha</h2>
      </div>

      <div className="space-y-8">
        {perguntas.map((pergunta) => (
          <div key={pergunta.id} className="bg-white rounded-2xl shadow-lg p-8 border border-blue-100/50">
            <div className="mb-6">
              <div className="inline-flex items-center gap-2 bg-gradient-to-r from-blue-100 to-indigo-100 px-4 py-2 rounded-lg mb-3">
                <span className="text-blue-700">Questão {pergunta.id}</span>
              </div>
              <h3 className="text-gray-800 text-base font-normal leading-relaxed">{pergunta.pergunta}</h3>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {pergunta.alternativas.map((alt) => (
                <button
                  key={alt.id}
                  onClick={() => handleSelecionar(pergunta.id, alt.id)}
                  className={`text-left p-5 rounded-xl border-2 transition-all duration-300 hover:scale-[1.02] ${
                    respostas[pergunta.id] === alt.id
                      ? 'border-blue-600 bg-gradient-to-br from-blue-50 to-indigo-50 shadow-md'
                      : 'border-gray-200 bg-white hover:border-blue-300 hover:shadow-md'
                  }`}
                >
                  <div className="flex items-start gap-3">
                    <div className={`flex-shrink-0 w-8 h-8 rounded-lg flex items-center justify-center transition-colors ${
                      respostas[pergunta.id] === alt.id
                        ? 'bg-blue-600 text-white'
                        : 'bg-gray-100 text-gray-600'
                    }`}>
                      {alt.id}
                    </div>
                    <div className="flex-1">
                      <p className="text-gray-800 mb-2">{alt.texto}</p>
                      <p className="text-sm text-gray-500">{alt.explicacao}</p>
                    </div>
                  </div>
                </button>
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
