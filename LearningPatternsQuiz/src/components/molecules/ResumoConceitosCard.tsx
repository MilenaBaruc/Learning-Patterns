import React from 'react';
import { BookOpen } from 'lucide-react';

export function ResumoConceitosCard() {
  return (
    <div className="mb-16">
      <div className="flex items-center gap-3 mb-6">
        <div className="w-10 h-10 bg-gradient-to-br from-purple-600 to-blue-600 rounded-lg shadow-md flex items-center justify-center">
          <BookOpen className="w-5 h-5 text-white" />
        </div>
        <h2 className="text-purple-900">Resumo Conceitual</h2>
      </div>
      
      <div className="bg-white rounded-3xl shadow-lg p-10 border border-purple-100/50 hover:shadow-xl transition-shadow duration-300">
        <div className="relative">
          <div className="absolute -left-6 top-0 bottom-0 w-1 bg-gradient-to-b from-purple-600 to-blue-600 rounded-full"></div>
          <p className="text-gray-700 leading-relaxed">
            Os padrões GRASP fornecem diretrizes para distribuir responsabilidades em sistemas orientados a objetos, 
            buscando coesão alta, baixo acoplamento e flexibilidade arquitetural. Os principais padrões incluem: 
            <span className="text-purple-700"> Creator</span>, 
            <span className="text-purple-700"> Information Expert</span>, 
            <span className="text-purple-700"> Controller</span>, 
            <span className="text-purple-700"> High Cohesion</span>, 
            <span className="text-purple-700"> Low Coupling</span>, 
            <span className="text-purple-700"> Polymorphism</span>, 
            <span className="text-purple-700"> Pure Fabrication</span>, 
            <span className="text-purple-700"> Indirection</span> e 
            <span className="text-purple-700"> Protected Variations</span>.
          </p>
        </div>
      </div>
    </div>
  );
}
