import React from 'react';
import { Code2 } from 'lucide-react';

interface Props {
  respostas: { [key: number]: string };
  setRespostas: (respostas: { [key: number]: string }) => void;
}

const perguntas = [
  {
    id: 11,
    pergunta: "Analise o trecho de código abaixo. A classe Venda possui os dados de negócio, mas também concentra código SQL para persistência:",
    codigo: "class Venda { float total; void salvarEmBancoDados() { /* Código SQL */ } }",
    enunciado: "Segundo o GRASP, esta abordagem destrói a coesão da classe de domínio. Qual a refatoração recomendada aplicando Invenção Pura?",
    alternativas: [
      { id: 'A', texto: 'Transferir o método salvarEmBancoDados para a classe ItemVenda', explicacao: 'Mover o problema de lugar não resolve a violação de coesão.' },
      { id: 'B', texto: 'Criar uma classe puramente artificial (ex: VendaDAO) para assumir exclusivamente a responsabilidade de persistência', explicacao: 'A Invenção Pura cria um conceito artificial técnico para preservar a coesão das classes de domínio.' },
      { id: 'C', texto: 'Mudar o método para estático dentro da própria classe Venda', explicacao: 'Estático não resolve a violação de responsabilidade — o método ainda pertence à classe errada.' },
      { id: 'D', texto: 'Eliminar o banco de dados e forçar a UI a executar as queries SQL', explicacao: 'Delegar SQL para a UI viola ainda mais camadas arquiteturais.' }
    ],
    correta: 'B'
  },
  {
    id: 12,
    pergunta: "Observe o seguinte método contido numa classe de cálculo fiscal:",
    codigo: 'if (tipo == "Agrario") return calcAgrario();\nelse if (tipo == "Servico") return calcServico();',
    enunciado: "De acordo com Polimorfismo e Variações Protegidas, como este código deve ser refatorado para suportar novos impostos sem modificar o código existente?",
    alternativas: [
      { id: 'A', texto: 'Adicionar novos blocos else if conforme novos impostos surjam', explicacao: "Cada adição viola o princípio Open/Closed — o sistema 'vaza' para fora do ponto de variação." },
      { id: 'B', texto: 'Centralizar as strings de tipos num arquivo de configuração JSON externo', explicacao: 'Externalizar strings não elimina a cadeia de condicionais.' },
      { id: 'C', texto: 'Criar uma interface Imposto com o método polimórfico calcular(), onde cada tipo é uma classe isolada', explicacao: 'Polimorfismo delega o comportamento variável aos próprios tipos, blindando a classe chamadora.' },
      { id: 'D', texto: 'Substituir os blocos if-else por uma estrutura switch-case tradicional', explicacao: 'Switch-case é semanticamente equivalente ao if-else — não resolve o problema de extensibilidade.' }
    ],
    correta: 'C'
  },
  {
    id: 13,
    pergunta: "Analise a seguinte linha de código executada dentro de um controlador:",
    codigo: "cliente.obterPlanoManager().obterContrato().obterConfiguracao().aplicarDesconto();",
    enunciado: "De acordo com a diretriz de Ocultação da Estrutura ('Não fale com estranhos'), por que essa linha representa um design frágil?",
    alternativas: [
      { id: 'A', texto: 'Porque consome ciclos de CPU excessivos ao invocar métodos em sequência', explicacao: 'O problema é arquitetural, não de performance.' },
      { id: 'B', texto: 'Porque viola o encapsulamento, forçando o objeto a navegar por estruturas internas de terceiros, gerando acoplamento severo', explicacao: "A 'Lei de Demeter' diz que um método só deve enviar mensagens aos seus colaboradores diretos." },
      { id: 'C', texto: 'Porque o método aplicarDesconto deveria retornar uma string', explicacao: 'O tipo de retorno não é o problema central aqui.' },
      { id: 'D', texto: 'Porque impede a execução de queries assíncronas no banco de dados', explicacao: 'Assincronia não tem relação com encadeamento de mensagens.' }
    ],
    correta: 'B'
  },
  {
    id: 14,
    pergunta: "Uma classe SensorTemperatura precisa enviar dados diretamente para a classe PainelJanela (UI). Isso criou um acoplamento direto prejudicial. Para solucionar isso usando o padrão Indireção, o que deve ser inserido entre elas?",
    codigo: "SensorTemperatura --> PainelJanela  // acoplamento direto",
    enunciado: "Qual elemento deve ser inserido para quebrar o acoplamento direto entre as duas classes?",
    alternativas: [
      { id: 'A', texto: 'Um bloco try-catch para capturar exceções térmicas', explicacao: 'Tratamento de exceções não é um mecanismo de desacoplamento arquitetural.' },
      { id: 'B', texto: 'Uma classe ou interface intermediária (mediador ou despachante de eventos) que quebra o elo direto', explicacao: 'A Indireção insere um intermediário para que Sensor e UI permaneçam independentes e reutilizáveis.' },
      { id: 'C', texto: 'Uma variável global para centralizar a leitura do sensor', explicacao: 'Variáveis globais aumentam o acoplamento — o efeito oposto ao desejado.' },
      { id: 'D', texto: 'Mesclar as duas classes numa única entidade SensorPainel', explicacao: 'Fusão de responsabilidades gera baixa coesão, não desacoplamento.' }
    ],
    correta: 'B'
  },
  {
    id: 15,
    pergunta: "Analise o escopo conceitual da classe abaixo:",
    codigo: "class ControladorGeral {\n  void renderizarTela();\n  void validarCampos();\n  void calcularDesconto();\n  void persistirSQL();\n}",
    enunciado: "Com base nos princípios GRASP, quais padrões esta classe está violando simultaneamente?",
    alternativas: [
      { id: 'A', texto: 'Alta Coesão e Baixo Acoplamento, por estar muito encapsulada', explicacao: 'Alta coesão e encapsulamento são virtudes — mas essa classe não os possui.' },
      { id: 'B', texto: 'Polimorfismo e Invenção Pura, por não possuir métodos privados estáveis', explicacao: 'O problema central não é polimorfismo, mas sim a acumulação de responsabilidades díspares.' },
      { id: 'C', texto: 'Alta Coesão e Baixo Acoplamento — é uma classe monstro com baixa coesão (faz coisas demais) e alto acoplamento (depende de múltiplas camadas)', explicacao: 'Um controlador que renderiza, valida, calcula e persiste possui Baixa Coesão e Alto Acoplamento — requer distribuição por camadas especialistas.' },
      { id: 'D', texto: 'Variações Protegidas, por usar herança múltipla de interfaces', explicacao: 'A classe não demonstra uso de herança — o problema é de distribuição de responsabilidades.' }
    ],
    correta: 'C'
  }
];

export function Desafio3Refatoracao({ respostas, setRespostas }: Props) {
  const handleSelecionar = (perguntaId: number, alternativaId: string) => {
    setRespostas({ ...respostas, [perguntaId]: alternativaId });
  };

  return (
    <div className="mb-16">
      <div className="flex items-center gap-3 mb-6">
        <div className="w-10 h-10 bg-gradient-to-br from-purple-600 to-pink-600 rounded-lg shadow-md flex items-center justify-center">
          <Code2 className="w-5 h-5 text-white" />
        </div>
        <h2 className="text-purple-900">Desafio 3: Análise de Código</h2>
      </div>

      <div className="space-y-8">
        {perguntas.map((pergunta) => (
          <div key={pergunta.id} className="bg-white rounded-2xl shadow-lg p-8 border border-purple-100/50">
            <div className="mb-5">
              <div className="inline-flex items-center gap-2 bg-gradient-to-r from-purple-100 to-pink-100 px-4 py-2 rounded-lg mb-3">
                <span className="text-purple-700">Questão {pergunta.id}</span>
              </div>
              <p className="text-gray-800 leading-relaxed mb-4">{pergunta.pergunta}</p>

              <div className="bg-gray-900 rounded-xl px-5 py-4 mb-4 overflow-x-auto">
                <pre className="text-green-400 text-sm font-mono whitespace-pre-wrap">{pergunta.codigo}</pre>
              </div>

              <p className="text-gray-700 leading-relaxed">{pergunta.enunciado}</p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {pergunta.alternativas.map((alt) => (
                <button
                  key={alt.id}
                  onClick={() => handleSelecionar(pergunta.id, alt.id)}
                  className={`text-left p-5 rounded-xl border-2 transition-all duration-300 hover:scale-[1.02] ${
                    respostas[pergunta.id] === alt.id
                      ? 'border-purple-600 bg-gradient-to-br from-purple-50 to-pink-50 shadow-md'
                      : 'border-gray-200 bg-white hover:border-purple-300 hover:shadow-md'
                  }`}
                >
                  <div className="flex items-start gap-3">
                    <div className={`flex-shrink-0 w-8 h-8 rounded-lg flex items-center justify-center transition-colors ${
                      respostas[pergunta.id] === alt.id
                        ? 'bg-purple-600 text-white'
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
