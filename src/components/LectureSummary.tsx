import React, { useState } from 'react';
import { CHELATING_AGENTS, WATER_PURIFICATION_SUMMARY, LIMIT_TESTS_DATA } from '../data/limitTestsSummary';
import { 
  BookOpen, 
  ShieldAlert, 
  Droplet, 
  Atom, 
  TrendingUp, 
  Compass, 
  Check, 
  HelpCircle 
} from 'lucide-react';

interface LectureSummaryProps {
  showArabic: boolean;
}

export const LectureSummary: React.FC<LectureSummaryProps> = ({ showArabic }) => {
  const [activeTab, setActiveTab] = useState<'chelators' | 'water' | 'quantum' | 'trends' | 'coordination'>('chelators');

  return (
    <div className="max-w-6xl mx-auto px-4 sm:px-6 py-8">
      {/* Title */}
      <div className="mb-8">
        <div className="flex items-center gap-2 text-xs font-semibold text-teal-800 mb-1">
          <BookOpen className="w-4 h-4" />
          <span>INORGANIC PHARMACEUTICAL CHEMISTRY 1 & 2</span>
        </div>
        <h1 className="text-2xl sm:text-3xl font-extrabold text-slate-900 tracking-tight">
          High-Yield Lecture Summary & Clinical Revision Matrices
        </h1>
        <p className="text-sm text-slate-600 mt-1 max-w-3xl">
          Concentrated cheat sheets extracted from the course slides: Chelating antidotes, water standards, quantum mechanics, periodic trends, and coordination complexes.
        </p>
      </div>

      {/* Topic Switcher Tabs */}
      <div className="flex flex-wrap gap-2 p-1.5 bg-slate-100 rounded-xl mb-8 border border-slate-200">
        <button
          type="button"
          onClick={() => setActiveTab('chelators')}
          className={`flex items-center gap-1.5 px-3.5 py-2 text-xs font-semibold rounded-lg transition-all ${
            activeTab === 'chelators' ? 'bg-white text-slate-950 shadow-xs' : 'text-slate-600 hover:text-slate-900'
          }`}
        >
          <ShieldAlert className="w-4 h-4 text-rose-600" />
          <span>Chelating Antidotes</span>
        </button>

        <button
          type="button"
          onClick={() => setActiveTab('water')}
          className={`flex items-center gap-1.5 px-3.5 py-2 text-xs font-semibold rounded-lg transition-all ${
            activeTab === 'water' ? 'bg-white text-slate-950 shadow-xs' : 'text-slate-600 hover:text-slate-900'
          }`}
        >
          <Droplet className="w-4 h-4 text-cyan-600" />
          <span>Water Types in Pharmacy</span>
        </button>

        <button
          type="button"
          onClick={() => setActiveTab('quantum')}
          className={`flex items-center gap-1.5 px-3.5 py-2 text-xs font-semibold rounded-lg transition-all ${
            activeTab === 'quantum' ? 'bg-white text-slate-950 shadow-xs' : 'text-slate-600 hover:text-slate-900'
          }`}
        >
          <Atom className="w-4 h-4 text-indigo-600" />
          <span>Atomic & Quantum Numbers</span>
        </button>

        <button
          type="button"
          onClick={() => setActiveTab('trends')}
          className={`flex items-center gap-1.5 px-3.5 py-2 text-xs font-semibold rounded-lg transition-all ${
            activeTab === 'trends' ? 'bg-white text-slate-950 shadow-xs' : 'text-slate-600 hover:text-slate-900'
          }`}
        >
          <TrendingUp className="w-4 h-4 text-amber-600" />
          <span>Periodic Trends Matrix</span>
        </button>

        <button
          type="button"
          onClick={() => setActiveTab('coordination')}
          className={`flex items-center gap-1.5 px-3.5 py-2 text-xs font-semibold rounded-lg transition-all ${
            activeTab === 'coordination' ? 'bg-white text-slate-950 shadow-xs' : 'text-slate-600 hover:text-slate-900'
          }`}
        >
          <Compass className="w-4 h-4 text-teal-600" />
          <span>Coordination & D-Orbitals</span>
        </button>
      </div>

      {/* Tab 1: Chelating Antidotes */}
      {activeTab === 'chelators' && (
        <div className="space-y-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {CHELATING_AGENTS.map((chelator, i) => (
              <div key={i} className="bg-white rounded-2xl border border-slate-200 p-6 shadow-xs flex flex-col justify-between">
                <div>
                  <div className="flex items-start justify-between gap-3 mb-2">
                    <div>
                      <h3 className="font-bold text-base text-slate-900">{chelator.name}</h3>
                      <p className="text-xs text-slate-500 font-mono">{chelator.chemicalName}</p>
                    </div>
                    {showArabic && (
                      <span className="text-xs font-bold text-teal-800 font-arabic bg-teal-50 px-2 py-0.5 rounded border border-teal-200">
                        {chelator.nameAr}
                      </span>
                    )}
                  </div>

                  <div className="mt-4 space-y-2 text-xs">
                    <div>
                      <span className="text-slate-400 font-medium">Denticity / Ligand:</span>{' '}
                      <span className="font-semibold text-slate-800">{chelator.denticity}</span>
                    </div>
                    <div>
                      <span className="text-slate-400 font-medium">Target Toxic Metals:</span>{' '}
                      <span className="font-semibold text-rose-700">{chelator.targetMetals}</span>
                    </div>
                    <div>
                      <span className="text-slate-400 font-medium">Administration:</span>{' '}
                      <span className="font-semibold text-slate-800">{chelator.route}</span>
                    </div>
                    <div>
                      <span className="text-slate-400 font-medium">Indications:</span>
                      <ul className="list-disc list-inside text-slate-700 mt-1 space-y-0.5">
                        {chelator.clinicalUses.map((use, uIdx) => (
                          <li key={uIdx}>{use}</li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </div>

                <div className="mt-4 pt-4 border-t border-slate-100 bg-slate-50 -mx-6 -mb-6 p-4 rounded-b-2xl">
                  <span className="text-[11px] font-bold text-slate-700 block mb-1">Key Clinical Insight:</span>
                  <ul className="text-xs text-slate-600 space-y-1">
                    {chelator.criticalPoints.map((pt, pIdx) => (
                      <li key={pIdx}>• {pt}</li>
                    ))}
                  </ul>
                </div>
              </div>
            ))}
          </div>
        </div>
      )}

      {/* Tab 2: Water Types in Pharmacy */}
      {activeTab === 'water' && (
        <div className="bg-white rounded-2xl border border-slate-200 p-6 sm:p-8 shadow-xs">
          <h3 className="text-lg font-bold text-slate-900 mb-2">
            Pharmaceutical Water Specifications & Purification Types
          </h3>
          <p className="text-xs text-slate-500 mb-6">
            Crucial for quality control questions on raw material impurities and formulations.
          </p>

          <div className="divide-y divide-slate-100">
            {WATER_PURIFICATION_SUMMARY.map((water, idx) => (
              <div key={idx} className="py-4 first:pt-0 last:pb-0 grid grid-cols-1 md:grid-cols-4 gap-4">
                <div>
                  <h4 className="font-bold text-sm text-slate-900">{water.type}</h4>
                  <span className="text-xs text-slate-500">Method: {water.preparation}</span>
                </div>
                <div className="md:col-span-2 text-xs text-slate-700">
                  <span className="font-semibold text-slate-800 block mb-1">Impurities / Composition:</span>
                  <p>{water.composition}</p>
                </div>
                <div className="text-xs">
                  <span className="font-semibold text-slate-800 block mb-1">Pharmacopeial Suitability:</span>
                  <p className="text-slate-600">{water.pharmaceuticalSuitability}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      )}

      {/* Tab 3: Quantum Numbers & Atomic Structure */}
      {activeTab === 'quantum' && (
        <div className="space-y-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="bg-white rounded-2xl border border-slate-200 p-6 shadow-xs">
              <h3 className="font-bold text-base text-slate-900 mb-4">
                The Four Quantum Numbers
              </h3>
              <div className="space-y-3 text-xs">
                <div className="p-3 bg-slate-50 rounded-xl border border-slate-100">
                  <div className="font-bold text-slate-900 text-sm">Principal Quantum Number (n)</div>
                  <p className="text-slate-600 mt-0.5">
                    Specifies main energy level / electron shell (n = 1, 2, 3, 4...). Controls orbital size and overall energy.
                  </p>
                </div>

                <div className="p-3 bg-slate-50 rounded-xl border border-slate-100">
                  <div className="font-bold text-slate-900 text-sm">Angular Momentum / Azimuthal Number (l)</div>
                  <p className="text-slate-600 mt-0.5">
                    Defines orbital subshell and geometric shape. Values 0 to (n - 1). 
                    <span className="font-semibold block mt-1">l = 0 (s, spherical), l = 1 (p, dumbbell), l = 2 (d, cloverleaf), l = 3 (f).</span>
                  </p>
                </div>

                <div className="p-3 bg-slate-50 rounded-xl border border-slate-100">
                  <div className="font-bold text-slate-900 text-sm">Magnetic Quantum Number (ml)</div>
                  <p className="text-slate-600 mt-0.5">
                    Defines spatial orientation of the orbital in 3D space. Values range from -l to +l (total 2l + 1 orientations).
                  </p>
                </div>

                <div className="p-3 bg-slate-50 rounded-xl border border-slate-100">
                  <div className="font-bold text-slate-900 text-sm">Spin Quantum Number (ms)</div>
                  <p className="text-slate-600 mt-0.5">
                    Defines intrinsic angular momentum (spin) of the electron. Only two possible values: <span className="font-bold">+1/2</span> (spin-up) and <span className="font-bold">-1/2</span> (spin-down).
                  </p>
                </div>
              </div>
            </div>

            <div className="bg-white rounded-2xl border border-slate-200 p-6 shadow-xs">
              <h3 className="font-bold text-base text-slate-900 mb-4">
                Fundamental Atomic Rules
              </h3>
              <div className="space-y-4 text-xs text-slate-700 leading-relaxed">
                <div>
                  <h4 className="font-bold text-slate-900">Hund&apos;s Rule of Maximum Multiplicity:</h4>
                  <p className="text-slate-600 mt-1">
                    Orbitals of equal energy (degenerate subshells) are each occupied singly with parallel spins before any orbital is doubly occupied.
                  </p>
                </div>

                <div>
                  <h4 className="font-bold text-slate-900">Pauli Exclusion Principle:</h4>
                  <p className="text-slate-600 mt-1">
                    No two electrons in the same atom can have an identical set of all four quantum numbers (an orbital holds at most 2 electrons with opposite spins).
                  </p>
                </div>

                <div>
                  <h4 className="font-bold text-slate-900">Atomic Number (Z) vs Mass Number (A):</h4>
                  <p className="text-slate-600 mt-1">
                    Z = number of protons = number of electrons in a neutral atom.
                    Mass number A = protons + neutrons (mp + mn). Isotopes share Z but differ in neutron count (different A).
                  </p>
                </div>

                <div>
                  <h4 className="font-bold text-slate-900">Electronic Configurations in Lecture:</h4>
                  <ul className="list-disc list-inside text-slate-600 mt-1 space-y-1">
                    <li>Lithium (Li, Z = 3): 1s² 2s¹</li>
                    <li>Oxygen (O, Z = 8): 1s² 2s² 2p⁴</li>
                    <li>Neon (Ne, Z = 10): 1s² 2s² 2p⁶ (complete noble octet)</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* Tab 4: Periodic Trends */}
      {activeTab === 'trends' && (
        <div className="bg-white rounded-2xl border border-slate-200 p-6 sm:p-8 shadow-xs">
          <h3 className="text-lg font-bold text-slate-900 mb-2">
            Periodic Table Trends Summary
          </h3>
          <p className="text-xs text-slate-500 mb-6">
            Summary of atomic radius, ionization energy, and electronegativity directions across periods and groups.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="p-5 rounded-xl border border-slate-200 bg-slate-50">
              <h4 className="font-bold text-sm text-slate-900 mb-2">Atomic Radius</h4>
              <p className="text-xs text-slate-600 leading-relaxed mb-3">
                Distance from nucleus to outermost electron boundary.
              </p>
              <div className="space-y-2 text-xs">
                <div className="flex justify-between font-medium">
                  <span className="text-slate-500">Across Period (L → R):</span>
                  <span className="font-bold text-rose-600">Decreases (↓)</span>
                </div>
                <div className="flex justify-between font-medium">
                  <span className="text-slate-500">Down a Group (↓):</span>
                  <span className="font-bold text-emerald-600">Increases (↑)</span>
                </div>
              </div>
            </div>

            <div className="p-5 rounded-xl border border-slate-200 bg-slate-50">
              <h4 className="font-bold text-sm text-slate-900 mb-2">Ionization Energy (IE)</h4>
              <p className="text-xs text-slate-600 leading-relaxed mb-3">
                Energy required to remove a valence electron from a gaseous atom: X(g) → X⁺(g) + e⁻.
              </p>
              <div className="space-y-2 text-xs">
                <div className="flex justify-between font-medium">
                  <span className="text-slate-500">Across Period (L → R):</span>
                  <span className="font-bold text-emerald-600">Increases (↑)</span>
                </div>
                <div className="flex justify-between font-medium">
                  <span className="text-slate-500">Down a Group (↓):</span>
                  <span className="font-bold text-rose-600">Decreases (↓)</span>
                </div>
              </div>
            </div>

            <div className="p-5 rounded-xl border border-slate-200 bg-slate-50">
              <h4 className="font-bold text-sm text-slate-900 mb-2">Electronegativity (EN)</h4>
              <p className="text-xs text-slate-600 leading-relaxed mb-3">
                Tendency of a bonded atom to attract shared bonding electrons toward itself.
              </p>
              <div className="space-y-2 text-xs">
                <div className="flex justify-between font-medium">
                  <span className="text-slate-500">Across Period (L → R):</span>
                  <span className="font-bold text-emerald-600">Increases (↑)</span>
                </div>
                <div className="flex justify-between font-medium">
                  <span className="text-slate-500">Down a Group (↓):</span>
                  <span className="font-bold text-rose-600">Decreases (↓)</span>
                </div>
                <div className="mt-2 pt-2 border-t border-slate-200 text-[11px] text-slate-700">
                  ★ Highest: <strong>Fluorine (F ~ 4.0)</strong>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* Tab 5: Coordination Compounds & D-orbitals */}
      {activeTab === 'coordination' && (
        <div className="bg-white rounded-2xl border border-slate-200 p-6 sm:p-8 shadow-xs">
          <h3 className="text-lg font-bold text-slate-900 mb-2">
            Coordination Chemistry & Crystal Field Theory
          </h3>
          <p className="text-xs text-slate-500 mb-6">
            D-orbital spatial orientations, high-spin vs. low-spin complexes, and geometries.
          </p>

          <div className="space-y-6 text-xs text-slate-700">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="p-4 bg-slate-50 rounded-xl border border-slate-200">
                <h4 className="font-bold text-slate-900 text-sm mb-2">D-Orbital Orientations</h4>
                <p className="mb-2">
                  The five d-orbitals split in an octahedral field into two sets:
                </p>
                <ul className="space-y-1.5 list-disc list-inside">
                  <li>
                    <strong className="text-teal-800">eg set (along Cartesian axes):</strong>{' '}
                    <span className="font-mono">dx²−y²</span> and <span className="font-mono">dz²</span>. Point directly at octahedral ligands, experiencing highest electrostatic repulsion.
                  </li>
                  <li>
                    <strong className="text-slate-800">t2g set (between Cartesian axes):</strong>{' '}
                    <span className="font-mono">dxy</span>, <span className="font-mono">dyz</span>, and <span className="font-mono">dxz</span>. Point between ligand axes, lower in energy.
                  </li>
                </ul>
              </div>

              <div className="p-4 bg-slate-50 rounded-xl border border-slate-200">
                <h4 className="font-bold text-slate-900 text-sm mb-2">High-Spin vs Low-Spin Iron(III)</h4>
                <p className="mb-2">
                  Iron(III) is a <span className="font-bold">d⁵ ion</span>:
                </p>
                <ul className="space-y-1.5 list-disc list-inside">
                  <li>
                    <strong>[Fe(H₂O)₆]³⁺ (Hexa-aquo iron III):</strong> Water is a weak-field ligand. Small splitting Δo produces a <span className="font-bold text-amber-700">High-Spin complex</span> (5 unpaired electrons).
                  </li>
                  <li>
                    <strong>[Fe(CN)₆]³⁻ (Hexacyanoferrate III):</strong> Cyanide is a strong-field ligand. Large splitting Δo forces electrons to <span className="font-bold text-teal-700">pair in the lower d orbitals</span>, producing a <span className="font-bold text-teal-700">Low-Spin complex</span>.
                  </li>
                </ul>
              </div>
            </div>

            <div className="p-4 bg-teal-50/60 rounded-xl border border-teal-200">
              <h4 className="font-bold text-teal-950 text-sm mb-1">Transition Metals with 7–9 d Electrons & CN = 4</h4>
              <p className="text-teal-900 leading-relaxed">
                Ions with d⁷ to d⁹ configurations (e.g. Ni²⁺, Pt²⁺) characteristically adopt coordination number 4.
                Weak ligands produce an <strong>sp³ tetrahedral</strong> complex, whereas strong-field ligands cause electron pairing in d⁸, vacating an inner d-orbital to form a <strong>dsp² square planar</strong> complex.
              </p>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};
