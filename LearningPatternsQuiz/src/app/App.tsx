import React, { useState } from 'react';
import { ResumoConceitosCard } from '../components/molecules/ResumoConceitosCard';
import { Desafio1MultiplaEscolha } from '../components/organisms/Desafio1MultiplaEscolha';
import { Desafio2ArrastarSoltar } from '../components/organisms/Desafio2ArrastarSoltar';
import { Desafio3Refatoracao } from '../components/organisms/Desafio3Refatoracao';
import { GabaritoPanel } from '../components/organisms/GabaritoPanel';
import { ImageWithFallback } from '../components/atoms/ImageWithFallback';
import { CheckCircle } from 'lucide-react';
import logoImg from './Logo.png';

export default function App() {
  const [respostasDesafio1, setRespostasDesafio1] = useState<{ [key: number]: string }>({});
  const [respostasDesafio2, setRespostasDesafio2] = useState<{ [key: string]: string }>({});
  const [respostasDesafio3, setRespostasDesafio3] = useState<{ [key: number]: string }>({});
  const [mostrarGabarito, setMostrarGabarito] = useState(false);

  const handleFinalizarDesafio = () => {
    setMostrarGabarito(true);
    window.scrollTo({ top: document.body.scrollHeight, behavior: 'smooth' });
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-50 via-blue-50 to-indigo-50 py-12 px-4">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="text-center mb-12">
          <div className="flex justify-center mb-4">
            <ImageWithFallback
              src={logoImg}
              alt="LearningPatterns logo"
              className="h-28 w-28 object-contain drop-shadow-xl"
            />
          </div>
          <p className="text-purple-600">Módulo: Padrões GRASP</p>
        </div>

        {/* Seção 1 - Resumo */}
        <ResumoConceitosCard />

        {/* Seção 2 - Desafio 1 */}
        <Desafio1MultiplaEscolha 
          respostas={respostasDesafio1}
          setRespostas={setRespostasDesafio1}
        />

        {/* Seção 3 - Desafio 2 */}
        <Desafio2ArrastarSoltar 
          respostas={respostasDesafio2}
          setRespostas={setRespostasDesafio2}
        />

        {/* Seção 4 - Desafio 3 */}
        <Desafio3Refatoracao 
          respostas={respostasDesafio3}
          setRespostas={setRespostasDesafio3}
        />

        {/* Botão de Finalização */}
        {!mostrarGabarito && (
          <div className="mt-12 text-center">
            <button
              onClick={handleFinalizarDesafio}
              className="group relative inline-flex items-center gap-3 bg-gradient-to-r from-purple-600 to-blue-600 text-white px-12 py-5 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105"
            >
              <CheckCircle className="w-6 h-6" />
              <span className="text-lg">Finalizar e Ver Gabarito</span>
              <div className="absolute inset-0 bg-white opacity-0 group-hover:opacity-10 rounded-2xl transition-opacity"></div>
            </button>
          </div>
        )}

        {/* Seção 5 - Gabarito */}
        {mostrarGabarito && (
          <GabaritoPanel 
            respostasDesafio1={respostasDesafio1}
            respostasDesafio2={respostasDesafio2}
            respostasDesafio3={respostasDesafio3}
          />
        )}
      </div>
    </div>
  );
}
