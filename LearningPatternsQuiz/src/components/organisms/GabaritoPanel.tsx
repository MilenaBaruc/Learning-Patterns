import React from 'react';
import { CheckCircle, XCircle, Award, Circle } from 'lucide-react';

interface Props {
  respostasDesafio1: { [key: number]: string };
  respostasDesafio2: { [key: string]: string };
  respostasDesafio3: { [key: number]: string };
}

const perguntas1 = [
  {
    id: 1,
    pergunta: "Nos slides de GRASP Parte I, quem deve instanciar os objetos de Square na relação de composição Board → Square (Banco Imobiliário)?",
    correta: 'C',
    alternativas: [
      { id: 'A', texto: 'À própria classe Square' },
      { id: 'B', texto: 'À classe Player' },
      { id: 'C', texto: 'À classe Board' },
      { id: 'D', texto: 'À classe MonopolyGame' }
    ]
  },
  {
    id: 2,
    pergunta: "Qual das seguintes representa uma responsabilidade clássica do tipo CONHECER no PGR?",
    correta: 'D',
    alternativas: [
      { id: 'A', texto: 'Iniciar uma ação direta em outros objetos' },
      { id: 'B', texto: 'Controlar e coordenar atividades complexas' },
      { id: 'C', texto: 'Executar cálculo ou instanciar nova classe' },
      { id: 'D', texto: 'Saber sobre dados privados, objetos relacionados ou elementos derivados' }
    ]
  },
  {
    id: 3,
    pergunta: "A classe Caixa possui os dados de inicialização de RegistoVenda. Segundo o Criador, quem deve criar RegistoVenda?",
    correta: 'A',
    alternativas: [
      { id: 'A', texto: 'Atribuir a criação à classe Caixa' },
      { id: 'B', texto: 'Atribuir a criação a uma classe externa de BD' },
      { id: 'C', texto: 'Fazer RegistoVenda buscar os dados por método global' },
      { id: 'D', texto: 'Usar interface genérica para violar encapsulamento' }
    ]
  },
  {
    id: 4,
    pergunta: "O acoplamento GRASP é prejudicial quando:",
    correta: 'B',
    alternativas: [
      { id: 'A', texto: 'Classes de utilidade estáveis são amplamente usadas' },
      { id: 'B', texto: 'Uma classe depende de outra altamente instável que muda frequentemente' },
      { id: 'C', texto: 'Objetos comunicam-se por interfaces polimórficas estáveis' },
      { id: 'D', texto: 'Herança é usada para reaproveitar comportamentos coesos' }
    ]
  },
  {
    id: 5,
    pergunta: "Qual o principal sintoma de que um Controlador Fachada deve ser substituído por Controladores de Caso de Uso?",
    correta: 'B',
    alternativas: [
      { id: 'A', texto: 'Quando possui alta coesão e delega tarefas rapidamente' },
      { id: 'B', texto: "Quando se torna um 'Controlador Inflado', acumulando responsabilidades" },
      { id: 'C', texto: 'Quando usa interfaces polimórficas para mapear impostos' },
      { id: 'D', texto: 'Quando deixa de receber eventos da camada de Visão' }
    ]
  }
];

const gabarito2: { [key: string]: string } = {
  getTotal: 'Venda',
  getSubtotal: 'ItemVenda',
  getPrice: 'Produto',
  capturarEventos: 'CamadaUI',
  coordenarFluxo: 'Controlador'
};

const nomesFuncoes: { [key: string]: string } = {
  getTotal: 'getTotal()',
  getSubtotal: 'getSubtotal()',
  getPrice: 'getPrice()',
  capturarEventos: 'Capturar eventos de interface',
  coordenarFluxo: 'Coordenar fluxo de negócio'
};

const nomesClasses: { [key: string]: string } = {
  Venda: 'Venda',
  ItemVenda: 'ItemVenda',
  Produto: 'Produto',
  CamadaUI: 'Camada UI (Visão)',
  Controlador: 'Classe Controladora'
};

const perguntas3 = [
  {
    id: 11,
    pergunta: "class Venda { float total; void salvarEmBancoDados() { /* SQL */ } } — Qual refatoração aplicando Invenção Pura?",
    correta: 'B',
    alternativas: [
      { id: 'A', texto: 'Transferir salvarEmBancoDados para ItemVenda' },
      { id: 'B', texto: 'Criar classe VendaDAO para responsabilidade exclusiva de persistência' },
      { id: 'C', texto: 'Mudar o método para estático em Venda' },
      { id: 'D', texto: 'Forçar a UI a executar as queries SQL' }
    ]
  },
  {
    id: 12,
    pergunta: 'if (tipo == "Agrario") return calcAgrario(); else if... — Como refatorar com Polimorfismo?',
    correta: 'C',
    alternativas: [
      { id: 'A', texto: 'Adicionar novos else if conforme novos impostos' },
      { id: 'B', texto: 'Centralizar strings de tipo em JSON externo' },
      { id: 'C', texto: 'Criar interface Imposto com método calcular() polimórfico' },
      { id: 'D', texto: 'Substituir if-else por switch-case' }
    ]
  },
  {
    id: 13,
    pergunta: "cliente.obterPlanoManager().obterContrato().obterConfiguracao().aplicarDesconto() — Por que é design frágil?",
    correta: 'B',
    alternativas: [
      { id: 'A', texto: 'Consome ciclos de CPU excessivos' },
      { id: 'B', texto: 'Viola encapsulamento navegando por estruturas internas de terceiros' },
      { id: 'C', texto: 'aplicarDesconto deveria retornar string' },
      { id: 'D', texto: 'Impede queries assíncronas no BD' }
    ]
  },
  {
    id: 14,
    pergunta: "SensorTemperatura → PainelJanela (acoplamento direto). O que inserir para aplicar o padrão Indireção?",
    correta: 'B',
    alternativas: [
      { id: 'A', texto: 'Um bloco try-catch para exceções térmicas' },
      { id: 'B', texto: 'Uma classe/interface intermediária (mediador ou despachante de eventos)' },
      { id: 'C', texto: 'Uma variável global para centralizar a leitura' },
      { id: 'D', texto: 'Mesclar as duas classes em SensorPainel' }
    ]
  },
  {
    id: 15,
    pergunta: "class ControladorGeral { renderizarTela(); validarCampos(); calcularDesconto(); persistirSQL(); } — Quais princípios GRASP viola?",
    correta: 'C',
    alternativas: [
      { id: 'A', texto: 'Alta Coesão e Baixo Acoplamento, por estar muito encapsulada' },
      { id: 'B', texto: 'Polimorfismo e Invenção Pura, por não ter métodos privados' },
      { id: 'C', texto: 'Alta Coesão e Baixo Acoplamento — classe monstro com baixa coesão e alto acoplamento' },
      { id: 'D', texto: 'Variações Protegidas, por usar herança múltipla' }
    ]
  }
];

function AlternativasGabarito({
  alternativas,
  correta,
  escolhida,
  accentColor = 'blue'
}: {
  alternativas: { id: string; texto: string }[];
  correta: string;
  escolhida: string | undefined;
  accentColor?: 'blue' | 'purple';
}) {
  const colors = {
    blue: { badge: 'bg-blue-600 text-white', border: 'border-blue-400 bg-blue-50' },
    purple: { badge: 'bg-purple-600 text-white', border: 'border-purple-400 bg-purple-50' }
  };

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-3 mt-4">
      {alternativas.map((alt) => {
        const isCorreta = alt.id === correta;
        const isEscolhidaErrada = alt.id === escolhida && !isCorreta;

        let borderStyle = 'border-gray-200 bg-white';
        let badgeStyle = 'bg-gray-100 text-gray-600';
        let icon = <Circle className="w-4 h-4 text-gray-300 flex-shrink-0" />;

        if (isCorreta) {
          borderStyle = 'border-green-400 bg-green-50';
          badgeStyle = 'bg-green-500 text-white';
          icon = <CheckCircle className="w-4 h-4 text-green-600 flex-shrink-0" />;
        } else if (isEscolhidaErrada) {
          borderStyle = 'border-red-400 bg-red-50';
          badgeStyle = 'bg-red-500 text-white';
          icon = <XCircle className="w-4 h-4 text-red-500 flex-shrink-0" />;
        }

        return (
          <div key={alt.id} className={`flex items-start gap-3 p-3 rounded-xl border-2 ${borderStyle}`}>
            <div className={`flex-shrink-0 w-7 h-7 rounded-md flex items-center justify-center text-sm font-semibold ${badgeStyle}`}>
              {alt.id}
            </div>
            <p className="flex-1 text-sm text-gray-800">{alt.texto}</p>
            <div className="flex-shrink-0 mt-0.5">{icon}</div>
          </div>
        );
      })}
    </div>
  );
}

export function GabaritoPanel({ respostasDesafio1, respostasDesafio2, respostasDesafio3 }: Props) {
  const acertosD1 = perguntas1.filter((p) => respostasDesafio1[p.id] === p.correta).length;
  const acertosD2 = Object.keys(gabarito2).filter((k) => respostasDesafio2[k] === gabarito2[k]).length;
  const acertosD3 = perguntas3.filter((p) => respostasDesafio3[p.id] === p.correta).length;

  const totalQuestoes = perguntas1.length + Object.keys(gabarito2).length + perguntas3.length;
  const totalAcertos = acertosD1 + acertosD2 + acertosD3;
  const percentual = Math.round((totalAcertos / totalQuestoes) * 100);

  return (
    <div className="mt-12 animate-fade-in">
      {/* Header */}
      <div className="bg-gradient-to-r from-purple-600 via-blue-600 to-indigo-600 rounded-3xl shadow-2xl p-8 mb-8 text-white">
        <div className="flex items-center gap-4 mb-4">
          <div className="w-16 h-16 bg-white/20 rounded-2xl flex items-center justify-center">
            <Award className="w-10 h-10 text-white" />
          </div>
          <div>
            <h2 className="text-white mb-2">Gabarito Completo</h2>
            <p className="text-purple-100">Confira suas respostas e o gabarito oficial</p>
          </div>
        </div>
        <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6 mt-6">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-purple-100 text-sm mb-1">Sua Pontuação</p>
              <p className="text-3xl">{totalAcertos}/{totalQuestoes} questões corretas</p>
            </div>
            <div className="text-right">
              <div className="text-5xl">{percentual}%</div>
              <p className="text-purple-100 text-sm">de aproveitamento</p>
            </div>
          </div>
        </div>
      </div>

      {/* Desafio 1 */}
      <div className="bg-white rounded-2xl shadow-lg p-8 mb-8 border border-blue-100">
        <h3 className="text-blue-900 mb-6">Desafio 1: Múltipla Escolha</h3>
        <div className="space-y-6">
          {perguntas1.map((p) => {
            const escolhida = respostasDesafio1[p.id];
            const acertou = escolhida === p.correta;
            return (
              <div key={p.id} className="bg-gray-50 rounded-2xl p-6 border border-gray-200">
                <div className="flex items-center gap-3 mb-2">
                  <div className={`w-8 h-8 rounded-lg flex items-center justify-center ${acertou ? 'bg-green-100' : 'bg-red-100'}`}>
                    {acertou ? <CheckCircle className="w-5 h-5 text-green-600" /> : <XCircle className="w-5 h-5 text-red-500" />}
                  </div>
                  <span className="text-xs text-gray-500">Questão {p.id}</span>
                </div>
                <p className="text-gray-800 text-sm mb-1">{p.pergunta}</p>
                <AlternativasGabarito alternativas={p.alternativas} correta={p.correta} escolhida={escolhida} accentColor="blue" />
                <div className="flex flex-wrap gap-2 mt-3 pt-3 border-t border-gray-200">
                  {!escolhida && <span className="text-xs text-gray-500 italic">Não respondida</span>}
                  {escolhida && acertou && <span className="text-xs text-green-700 bg-green-100 px-2 py-1 rounded-md">✓ Você acertou!</span>}
                  {escolhida && !acertou && (
                    <>
                      <span className="text-xs text-red-700 bg-red-100 px-2 py-1 rounded-md">✗ Você escolheu: {escolhida}</span>
                      <span className="text-xs text-green-700 bg-green-100 px-2 py-1 rounded-md">✓ Correta: {p.correta}</span>
                    </>
                  )}
                </div>
              </div>
            );
          })}
        </div>
      </div>

      {/* Desafio 2 */}
      <div className="bg-white rounded-2xl shadow-lg p-8 mb-8 border border-indigo-100">
        <h3 className="text-indigo-900 mb-6">Desafio 2: Arraste e Solte</h3>
        <div className="space-y-5">
          {Object.keys(gabarito2).map((funcaoId) => {
            const respostaUsuario = respostasDesafio2[funcaoId];
            const respostaCorreta = gabarito2[funcaoId];
            const acertou = respostaUsuario === respostaCorreta;
            const todasClasses = Object.keys(nomesClasses);

            return (
              <div key={funcaoId} className="bg-gray-50 rounded-2xl p-6 border border-gray-200">
                <div className="flex items-center gap-3 mb-4">
                  <div className={`w-8 h-8 rounded-lg flex items-center justify-center ${acertou ? 'bg-green-100' : 'bg-red-100'}`}>
                    {acertou ? <CheckCircle className="w-5 h-5 text-green-600" /> : <XCircle className="w-5 h-5 text-red-500" />}
                  </div>
                  <div className="bg-gradient-to-r from-blue-500 to-indigo-600 text-white text-sm px-4 py-1.5 rounded-xl shadow">
                    {nomesFuncoes[funcaoId]}
                  </div>
                </div>
                <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-2">
                  {todasClasses.map((classeId) => {
                    const isCorreta = classeId === respostaCorreta;
                    const isEscolhidaErrada = classeId === respostaUsuario && !isCorreta;
                    let style = 'border-gray-200 bg-white text-gray-600';
                    let dot = 'bg-gray-200';
                    let icon = <Circle className="w-4 h-4 text-gray-300" />;
                    if (isCorreta) {
                      style = 'border-green-400 bg-green-50 text-green-800';
                      dot = 'bg-green-500';
                      icon = <CheckCircle className="w-4 h-4 text-green-600" />;
                    } else if (isEscolhidaErrada) {
                      style = 'border-red-400 bg-red-50 text-red-800';
                      dot = 'bg-red-500';
                      icon = <XCircle className="w-4 h-4 text-red-500" />;
                    }
                    return (
                      <div key={classeId} className={`flex items-center justify-between gap-1 px-2 py-2 rounded-xl border-2 text-xs ${style}`}>
                        <div className="flex items-center gap-1.5">
                          <div className={`w-2 h-2 rounded-full flex-shrink-0 ${dot}`} />
                          <span>{nomesClasses[classeId]}</span>
                        </div>
                        {icon}
                      </div>
                    );
                  })}
                </div>
                <div className="flex flex-wrap gap-2 mt-3 pt-3 border-t border-gray-200">
                  {!respostaUsuario && <span className="text-xs text-gray-500 italic">Não associada</span>}
                  {respostaUsuario && acertou && <span className="text-xs text-green-700 bg-green-100 px-2 py-1 rounded-md">✓ Correto: {nomesClasses[respostaCorreta]}</span>}
                  {respostaUsuario && !acertou && (
                    <>
                      <span className="text-xs text-red-700 bg-red-100 px-2 py-1 rounded-md">✗ Você associou: {nomesClasses[respostaUsuario]}</span>
                      <span className="text-xs text-green-700 bg-green-100 px-2 py-1 rounded-md">✓ Correto: {nomesClasses[respostaCorreta]}</span>
                    </>
                  )}
                </div>
              </div>
            );
          })}
        </div>
      </div>

      {/* Desafio 3 */}
      <div className="bg-white rounded-2xl shadow-lg p-8 border border-purple-100">
        <h3 className="text-purple-900 mb-6">Desafio 3: Análise de Código</h3>
        <div className="space-y-6">
          {perguntas3.map((p) => {
            const escolhida = respostasDesafio3[p.id];
            const acertou = escolhida === p.correta;
            return (
              <div key={p.id} className="bg-gray-50 rounded-2xl p-6 border border-gray-200">
                <div className="flex items-center gap-3 mb-2">
                  <div className={`w-8 h-8 rounded-lg flex items-center justify-center ${acertou ? 'bg-green-100' : 'bg-red-100'}`}>
                    {acertou ? <CheckCircle className="w-5 h-5 text-green-600" /> : <XCircle className="w-5 h-5 text-red-500" />}
                  </div>
                  <span className="text-xs text-gray-500">Questão {p.id}</span>
                </div>
                <p className="text-gray-800 text-sm mb-1">{p.pergunta}</p>
                <AlternativasGabarito alternativas={p.alternativas} correta={p.correta} escolhida={escolhida} accentColor="purple" />
                <div className="flex flex-wrap gap-2 mt-3 pt-3 border-t border-gray-200">
                  {!escolhida && <span className="text-xs text-gray-500 italic">Não respondida</span>}
                  {escolhida && acertou && <span className="text-xs text-green-700 bg-green-100 px-2 py-1 rounded-md">✓ Você acertou!</span>}
                  {escolhida && !acertou && (
                    <>
                      <span className="text-xs text-red-700 bg-red-100 px-2 py-1 rounded-md">✗ Você escolheu: {escolhida}</span>
                      <span className="text-xs text-green-700 bg-green-100 px-2 py-1 rounded-md">✓ Correta: {p.correta}</span>
                    </>
                  )}
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}
