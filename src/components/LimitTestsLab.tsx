import React, { useState } from 'react';
import { LIMIT_TESTS_DATA, LimitTestInfo } from '../data/limitTestsSummary';
import { 
  FlaskConical, 
  Beaker, 
  Sparkles, 
  ShieldCheck, 
  AlertCircle, 
  CheckCircle2, 
  Info,
  Layers,
  Eye
} from 'lucide-react';

interface LimitTestsLabProps {
  showArabic: boolean;
}

export const LimitTestsLab: React.FC<LimitTestsLabProps> = ({ showArabic }) => {
  const [selectedTestId, setSelectedTestId] = useState<string>('chloride');
  const [sampleState, setSampleState] = useState<'pass' | 'fail'>('pass');

  const currentTest = LIMIT_TESTS_DATA.find((t) => t.id === selectedTestId) || LIMIT_TESTS_DATA[0];

  return (
    <div className="max-w-6xl mx-auto px-4 sm:px-6 py-8">
      {/* Lab Header */}
      <div className="mb-8">
        <div className="flex items-center gap-2 text-xs font-semibold text-teal-800 mb-1">
          <FlaskConical className="w-4 h-4" />
          <span>PHARMACOPEIAL QUALITY CONTROL LABORATORY</span>
        </div>
        <h1 className="text-2xl sm:text-3xl font-extrabold text-slate-900 tracking-tight">
          Limit Tests Interactive Laboratory & Reagent Manual
        </h1>
        <p className="text-sm text-slate-600 mt-1 max-w-3xl">
          Detailed visual reference for pharmacopeial limit tests (BP / USP / IP): Chemical principles, reagents, masking agents, optical endpoints, and critical exam caveats.
        </p>
      </div>

      {/* Test Selection Tabs (Segmented control) */}
      <div className="flex flex-wrap gap-2 p-1.5 bg-slate-100 rounded-xl mb-8 border border-slate-200">
        {LIMIT_TESTS_DATA.map((test) => (
          <button
            key={test.id}
            type="button"
            onClick={() => setSelectedTestId(test.id)}
            className={`px-4 py-2 text-xs font-semibold rounded-lg transition-all ${
              selectedTestId === test.id
                ? 'bg-white text-slate-950 shadow-xs'
                : 'text-slate-600 hover:text-slate-900'
            }`}
          >
            {test.nameEn.replace('Limit Test for ', '')}
          </button>
        ))}
      </div>

      {/* Main Grid: Interactive Simulation + Reagents & Notes */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
        {/* Left Column: Visual Nessler Tube Simulation (4 cols) */}
        <div className="lg:col-span-5 bg-white rounded-2xl border border-slate-200 p-6 shadow-xs flex flex-col justify-between">
          <div>
            <div className="flex items-center justify-between mb-4">
              <span className="text-xs font-bold uppercase tracking-wider text-slate-500">
                Optical Inspection Simulator
              </span>
              <div className="inline-flex p-0.5 bg-slate-100 rounded-lg text-xs">
                <button
                  type="button"
                  onClick={() => setSampleState('pass')}
                  className={`px-2.5 py-1 rounded-md transition-colors ${
                    sampleState === 'pass'
                      ? 'bg-emerald-600 text-white font-medium shadow-xs'
                      : 'text-slate-600 hover:text-slate-900'
                  }`}
                >
                  Pass Sample
                </button>
                <button
                  type="button"
                  onClick={() => setSampleState('fail')}
                  className={`px-2.5 py-1 rounded-md transition-colors ${
                    sampleState === 'fail'
                      ? 'bg-rose-600 text-white font-medium shadow-xs'
                      : 'text-slate-600 hover:text-slate-900'
                  }`}
                >
                  Fail Sample
                </button>
              </div>
            </div>

            {/* Side-by-Side Nessler Tubes Illustration */}
            <div className="p-6 bg-slate-950 rounded-xl border border-slate-800 text-center relative overflow-hidden">
              <div className="text-[11px] text-slate-400 mb-6 flex items-center justify-center gap-2">
                <Eye className="w-3.5 h-3.5 text-teal-400" />
                <span>Viewing: {currentTest.viewingMethod}</span>
              </div>

              <div className="flex items-end justify-center gap-8 h-56 pt-4">
                {/* Standard Tube */}
                <div className="flex flex-col items-center">
                  <div className="w-14 h-40 rounded-b-xl border-2 border-slate-500 bg-slate-900/60 relative overflow-hidden flex flex-col justify-end">
                    {/* Simulated liquid */}
                    <div 
                      className="w-full h-32 transition-all duration-500"
                      style={{
                        backgroundColor: currentTest.colorHex,
                        opacity: currentTest.id === 'arsenic' ? 0.3 : 0.6,
                        filter: currentTest.id === 'chloride' || currentTest.id === 'sulfate' ? 'blur(1px)' : 'none'
                      }}
                    />
                    {currentTest.id === 'arsenic' && (
                      <div className="absolute top-2 left-1/2 -translate-x-1/2 w-8 h-3 bg-amber-400 rounded-xs shadow-xs" title="HgCl2 Paper Stain" />
                    )}
                  </div>
                  <span className="text-xs font-semibold text-slate-200 mt-3">Standard Tube</span>
                  <span className="text-[10px] text-slate-400">{currentTest.standardConcentration}</span>
                </div>

                {/* Test Sample Tube */}
                <div className="flex flex-col items-center">
                  <div className="w-14 h-40 rounded-b-xl border-2 border-slate-500 bg-slate-900/60 relative overflow-hidden flex flex-col justify-end">
                    {/* Simulated liquid */}
                    <div 
                      className="w-full h-32 transition-all duration-500"
                      style={{
                        backgroundColor: currentTest.colorHex,
                        opacity: sampleState === 'pass' 
                          ? (currentTest.id === 'arsenic' ? 0.15 : 0.3)
                          : (currentTest.id === 'arsenic' ? 0.7 : 0.95),
                        filter: currentTest.id === 'chloride' || currentTest.id === 'sulfate' ? 'blur(1px)' : 'none'
                      }}
                    />
                    {currentTest.id === 'arsenic' && (
                      <div 
                        className={`absolute top-2 left-1/2 -translate-x-1/2 rounded-xs shadow-xs transition-all ${
                          sampleState === 'pass' ? 'w-4 h-2 bg-amber-200' : 'w-10 h-3 bg-amber-700'
                        }`} 
                        title="Sample Paper Stain" 
                      />
                    )}
                  </div>
                  <span className="text-xs font-semibold text-slate-200 mt-3">Test Sample</span>
                  <span className={`text-[10px] font-bold ${
                    sampleState === 'pass' ? 'text-emerald-400' : 'text-rose-400'
                  }`}>
                    {sampleState === 'pass' ? 'PASS (≤ Standard)' : 'FAIL (> Standard)'}
                  </span>
                </div>
              </div>

              {/* Status explanation */}
              <div className="mt-4 pt-3 border-t border-slate-800 text-xs text-slate-300">
                {sampleState === 'pass' ? (
                  <span className="text-emerald-400 flex items-center justify-center gap-1.5">
                    <CheckCircle2 className="w-4 h-4 shrink-0" />
                    <span>Conforms with Pharmacopeial Limit Specification</span>
                  </span>
                ) : (
                  <span className="text-rose-400 flex items-center justify-center gap-1.5">
                    <AlertCircle className="w-4 h-4 shrink-0" />
                    <span>Exceeds Tolerable Impurity Limit — Batch Rejected</span>
                  </span>
                )}
              </div>
            </div>
          </div>

          {/* Quick Specifications */}
          <div className="mt-6 pt-6 border-t border-slate-200 text-xs space-y-2 text-slate-600">
            <div className="flex justify-between">
              <span className="text-slate-400 font-medium">Apparatus:</span>
              <span className="font-semibold text-slate-900">{currentTest.container}</span>
            </div>
            <div className="flex justify-between">
              <span className="text-slate-400 font-medium">Impurity Tested:</span>
              <span className="font-semibold text-slate-900">{currentTest.impurity}</span>
            </div>
            <div className="flex justify-between">
              <span className="text-slate-400 font-medium">Standard Limit:</span>
              <span className="font-semibold text-slate-900">{currentTest.standardConcentration}</span>
            </div>
            <div className="flex justify-between">
              <span className="text-slate-400 font-medium">Endpoint:</span>
              <span className="font-semibold text-slate-900">{currentTest.visualEndpoint}</span>
            </div>
          </div>
        </div>

        {/* Right Column: Chemical Principle, Reagents, Equations & Arabic Summary (7 cols) */}
        <div className="lg:col-span-7 space-y-6">
          {/* Principle & Equation Card */}
          <div className="bg-white rounded-2xl border border-slate-200 p-6 sm:p-7 shadow-xs">
            <h3 className="text-lg font-bold text-slate-900 mb-2">
              {currentTest.nameEn}
            </h3>
            {showArabic && currentTest.nameAr && (
              <p className="text-sm font-semibold text-teal-800 font-arabic mb-3" dir="rtl">
                {currentTest.nameAr}
              </p>
            )}

            <p className="text-sm text-slate-700 leading-relaxed mb-4">
              {currentTest.principleEn}
            </p>

            {showArabic && (
              <p className="text-xs text-slate-600 font-arabic leading-relaxed mb-4 bg-teal-50/50 p-3 rounded-lg border border-teal-100" dir="rtl">
                {currentTest.principleAr}
              </p>
            )}

            {/* Chemical Equation Box */}
            <div className="p-4 bg-slate-900 text-emerald-400 font-mono text-xs sm:text-sm rounded-xl overflow-x-auto whitespace-pre-line border border-slate-800 leading-relaxed shadow-inner">
              {currentTest.chemicalEquation}
            </div>
          </div>

          {/* Reagents & Purpose Table */}
          <div className="bg-white rounded-2xl border border-slate-200 p-6 sm:p-7 shadow-xs">
            <h4 className="text-sm font-bold text-slate-900 uppercase tracking-wider mb-4 flex items-center gap-2">
              <Layers className="w-4 h-4 text-teal-600" />
              <span>Key Reagents & Chemical Roles</span>
            </h4>

            <div className="divide-y divide-slate-100">
              {currentTest.mainReagents.map((reagent, idx) => (
                <div key={idx} className="py-2.5 first:pt-0 last:pb-0 flex flex-col sm:flex-row sm:items-baseline justify-between gap-1">
                  <span className="font-semibold text-sm text-slate-900 sm:w-1/2">
                    {reagent.name}
                  </span>
                  <span className="text-xs text-slate-600 sm:w-1/2 sm:text-right">
                    {reagent.role}
                  </span>
                </div>
              ))}
            </div>
          </div>

          {/* Critical Exam Pearls */}
          <div className="bg-amber-50/70 border border-amber-200/80 rounded-2xl p-6 sm:p-7">
            <h4 className="text-sm font-bold text-amber-900 flex items-center gap-2 mb-3">
              <AlertCircle className="w-4 h-4 text-amber-600" />
              <span>High-Yield Pharmacopeial Pearls & Exam Traps</span>
            </h4>

            <ul className="space-y-2 text-xs text-amber-950">
              {currentTest.criticalNotesEn.map((note, i) => (
                <li key={i} className="flex items-start gap-2">
                  <span className="text-amber-600 font-bold shrink-0">•</span>
                  <span>{note}</span>
                </li>
              ))}
            </ul>

            {showArabic && currentTest.criticalNotesAr && (
              <div className="mt-3 pt-3 border-t border-amber-200/60 font-arabic text-xs text-amber-950" dir="rtl">
                <ul className="space-y-1.5">
                  {currentTest.criticalNotesAr.map((note, i) => (
                    <li key={i} className="flex items-start gap-2">
                      <span className="text-amber-700 font-bold shrink-0">◀</span>
                      <span>{note}</span>
                    </li>
                  ))}
                </ul>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};
