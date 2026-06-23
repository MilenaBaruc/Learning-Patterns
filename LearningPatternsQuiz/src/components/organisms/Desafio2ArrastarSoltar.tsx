import React from 'react';
import { DndProvider, useDrag, useDrop } from 'react-dnd';
import { HTML5Backend } from 'react-dnd-html5-backend';
import { Move, X } from 'lucide-react';

interface Props {
  respostas: { [key: string]: string };
  setRespostas: (respostas: { [key: string]: string }) => void;
}

const itensArrastaveis = [
  { id: 'getTotal', nome: 'getTotal()' },
  { id: 'getSubtotal', nome: 'getSubtotal()' },
  { id: 'getPrice', nome: 'getPrice()' },
  { id: 'capturarEventos', nome: 'Capturar eventos de interface' },
  { id: 'coordenarFluxo', nome: 'Coordenar fluxo de negócio' }
];

const classes = [
  { id: 'Venda', nome: 'Venda' },
  { id: 'ItemVenda', nome: 'ItemVenda' },
  { id: 'Produto', nome: 'Produto' },
  { id: 'CamadaUI', nome: 'Camada UI (Visão)' },
  { id: 'Controlador', nome: 'Classe Controladora' }
];

interface ItemArrastavelProps {
  item: typeof itensArrastaveis[0];
  onRemove?: () => void;
  inSlot?: boolean;
}

function ItemArrastavel({ item, onRemove, inSlot = false }: ItemArrastavelProps) {
  const [{ isDragging }, drag] = useDrag(() => ({
    type: 'funcao',
    item: { id: item.id, nome: item.nome },
    collect: (monitor) => ({
      isDragging: !!monitor.isDragging()
    })
  }), [item.id, item.nome]);

  return (
    <div
      ref={drag}
      className={`bg-gradient-to-r from-blue-500 to-indigo-600 text-white px-4 py-3 rounded-xl shadow-lg cursor-move hover:shadow-xl transition-all hover:scale-105 relative group ${
        isDragging ? 'opacity-40' : 'opacity-100'
      }`}
    >
      <div className="flex items-center justify-between gap-2">
        <div className="flex items-center gap-2 flex-1">
          <Move className="w-4 h-4" />
          <span className="text-sm">{item.nome}</span>
        </div>
        {inSlot && onRemove && (
          <button
            onClick={onRemove}
            className="opacity-0 group-hover:opacity-100 transition-opacity bg-white/20 hover:bg-white/30 rounded-full p-1"
            title="Remover"
          >
            <X className="w-4 h-4" />
          </button>
        )}
      </div>
    </div>
  );
}

interface SlotClasseProps {
  classe: typeof classes[0];
  respostas: Props['respostas'];
  setRespostas: Props['setRespostas'];
}

function SlotClasse({ classe, respostas, setRespostas }: SlotClasseProps) {
  const [{ isOver }, drop] = useDrop(() => ({
    accept: 'funcao',
    drop: (item: { id: string; nome: string }) => {
      const novasRespostas = { ...respostas };
      novasRespostas[item.id] = classe.id;
      setRespostas(novasRespostas);
    },
    collect: (monitor) => ({
      isOver: !!monitor.isOver()
    })
  }), [classe.id, respostas]);

  const funcaoAssociada = Object.keys(respostas).find(key => respostas[key] === classe.id);
  const itemAssociado = funcaoAssociada ? itensArrastaveis.find(item => item.id === funcaoAssociada) : null;

  const handleRemove = () => {
    if (funcaoAssociada) {
      const novasRespostas = { ...respostas };
      delete novasRespostas[funcaoAssociada];
      setRespostas(novasRespostas);
    }
  };

  return (
    <div
      ref={drop}
      className={`bg-white border-2 rounded-xl p-5 min-h-[100px] transition-all ${
        isOver
          ? 'border-blue-500 bg-blue-50 shadow-lg scale-105'
          : 'border-blue-200 hover:border-blue-300'
      }`}
    >
      <div className="mb-3">
        <div className="inline-block bg-gradient-to-r from-purple-100 to-blue-100 px-3 py-1 rounded-lg">
          <span className="text-sm text-purple-700 font-medium">{classe.nome}</span>
        </div>
      </div>

      {itemAssociado ? (
        <ItemArrastavel item={itemAssociado} onRemove={handleRemove} inSlot={true} />
      ) : (
        <div className="text-center text-gray-400 text-sm py-4 border-2 border-dashed border-gray-200 rounded-lg">
          Arraste uma responsabilidade aqui
        </div>
      )}
    </div>
  );
}

export function Desafio2ArrastarSoltar({ respostas, setRespostas }: Props) {
  const itensDisponiveis = itensArrastaveis.filter(item => !respostas[item.id]);

  return (
    <DndProvider backend={HTML5Backend}>
      <div className="mb-16">
        <div className="flex items-center gap-3 mb-6">
          <div className="w-10 h-10 bg-gradient-to-br from-indigo-600 to-purple-600 rounded-lg shadow-md flex items-center justify-center">
            <Move className="w-5 h-5 text-white" />
          </div>
          <h2 className="text-indigo-900">Desafio 2: Arraste e Solte</h2>
        </div>

        <div className="bg-white rounded-2xl shadow-lg p-8 border border-indigo-100/50">
          <p className="text-gray-700 mb-2">
            Associe cada responsabilidade/método à sua classe especialista ideal segundo o padrão GRASP Especialista na Informação e o modelo MVC.
          </p>
          <p className="text-sm text-gray-500 mb-8">
            Contexto: sistema de Ponto de Venda (PDV) com arquitetura em camadas.
          </p>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            <div>
              <h3 className="text-purple-800 mb-4">Responsabilidades</h3>
              <div className="min-h-[360px] bg-gradient-to-br from-gray-50 to-blue-50 p-6 rounded-xl border border-blue-100">
                {itensDisponiveis.length > 0 ? (
                  <div className="space-y-3">
                    {itensDisponiveis.map((item) => (
                      <ItemArrastavel key={item.id} item={item} />
                    ))}
                  </div>
                ) : (
                  <div className="flex flex-col items-center justify-center h-full text-center py-12">
                    <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mb-4">
                      <span className="text-3xl">✓</span>
                    </div>
                    <p className="text-green-700">Todas as responsabilidades foram associadas!</p>
                    <p className="text-sm text-gray-600 mt-2">Você pode reorganizar arrastando entre as classes</p>
                  </div>
                )}
              </div>
            </div>

            <div>
              <h3 className="text-blue-800 mb-4">Classes / Camadas</h3>
              <div className="space-y-4">
                {classes.map((classe) => (
                  <SlotClasse
                    key={classe.id}
                    classe={classe}
                    respostas={respostas}
                    setRespostas={setRespostas}
                  />
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </DndProvider>
  );
}
