import React, { useState } from 'react';
import { MCQQuestion, LectureId } from '../types/quiz';
import { 
  Search, 
  Filter, 
  Printer, 
  Eye, 
  EyeOff, 
  Bookmark, 
  Check,
  ChevronDown
} from 'lucide-react';

interface QuestionSearchListProps {
  questions: MCQQuestion[];
  flaggedQuestions: Record<number, boolean>;
  onToggleFlag: (questionId: number) => void;
  showArabic: boolean;
}

export const QuestionSearchList: React.FC<QuestionSearchListProps> = ({
  questions,
  flaggedQuestions,
  onToggleFlag,
  showArabic,
}) => {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedLecture, setSelectedLecture] = useState<LectureId | 'all'>('all');
  const [selectedTopic, setSelectedTopic] = useState<string>('all');
  const [showAllAnswers, setShowAllAnswers] = useState(false);
  const [revealedIds, setRevealedIds] = useState<Record<number, boolean>>({});

  // Unique topics
  const topics = React.useMemo(() => {
    const set = new Set<string>();
    questions.forEach(q => set.add(q.topic));
    return Array.from(set);
  }, [questions]);

  // Filtered list
  const filtered = React.useMemo(() => {
    return questions.filter((q) => {
      // Lecture filter
      if (selectedLecture !== 'all' && q.lecture !== selectedLecture) return false;
      // Topic filter
      if (selectedTopic !== 'all' && q.topic !== selectedTopic) return false;
      // Search term
      if (searchTerm.trim()) {
        const term = searchTerm.toLowerCase();
        const matchesQ = q.question.toLowerCase().includes(term);
        const matchesOpts = q.options.some(o => o.text.toLowerCase().includes(term));
        const matchesExpl = q.explanationEn.toLowerCase().includes(term);
        const matchesTopic = q.topic.toLowerCase().includes(term);
        if (!matchesQ && !matchesOpts && !matchesExpl && !matchesTopic) return false;
      }
      return true;
    });
  }, [questions, selectedLecture, selectedTopic, searchTerm]);

  const toggleReveal = (id: number) => {
    setRevealedIds(prev => ({ ...prev, [id]: !prev[id] }));
  };

  const handlePrint = () => {
    window.print();
  };

  return (
    <div className="max-w-5xl mx-auto px-4 sm:px-6 py-8">
      {/* Header */}
      <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4 mb-6">
        <div>
          <h1 className="text-2xl font-bold text-slate-900 tracking-tight">
            Complete 140 Question Bank & Search
          </h1>
          <p className="text-xs text-slate-500 mt-0.5">
            Instant search, topic filtering, and printable study sheets with full answers & rationales.
          </p>
        </div>

        <div className="flex items-center gap-2 print:hidden">
          <button
            type="button"
            onClick={() => setShowAllAnswers(!showAllAnswers)}
            className="flex items-center gap-1.5 px-3 py-1.5 text-xs font-medium rounded-lg border border-slate-200 bg-white text-slate-700 hover:bg-slate-50 transition-colors"
          >
            {showAllAnswers ? <EyeOff className="w-3.5 h-3.5 text-slate-500" /> : <Eye className="w-3.5 h-3.5 text-teal-600" />}
            <span>{showAllAnswers ? 'Hide All Answers' : 'Reveal All Answers'}</span>
          </button>

          <button
            type="button"
            onClick={handlePrint}
            className="flex items-center gap-1.5 px-3 py-1.5 text-xs font-medium rounded-lg bg-slate-900 text-white hover:bg-slate-800 transition-colors shadow-xs"
          >
            <Printer className="w-3.5 h-3.5" />
            <span>Print Sheet</span>
          </button>
        </div>
      </div>

      {/* Search & Filter Bar (Hidden in print) */}
      <div className="p-4 bg-white rounded-xl border border-slate-200 shadow-xs mb-6 space-y-3 print:hidden">
        <div className="relative">
          <Search className="w-4 h-4 text-slate-400 absolute left-3 top-1/2 -translate-y-1/2" />
          <input
            type="text"
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            placeholder="Search questions by reagent, compound, symptom (e.g. Gutzeit, Dithizone, Wilson, EDTA, Fe3+, AgCl)..."
            className="w-full pl-9 pr-4 py-2 text-xs rounded-lg border border-slate-200 focus:outline-none focus:border-teal-500 focus:ring-1 focus:ring-teal-500 transition-all text-slate-900 placeholder:text-slate-400"
          />
        </div>

        <div className="flex flex-wrap items-center gap-3 text-xs">
          <div className="flex items-center gap-2">
            <span className="text-slate-400 font-medium">Lecture:</span>
            <select
              value={selectedLecture}
              onChange={(e) => setSelectedLecture(e.target.value as any)}
              className="bg-slate-50 border border-slate-200 rounded-md px-2.5 py-1 text-slate-700 font-medium focus:outline-none"
            >
              <option value="all">All Lectures (1 & 2)</option>
              <option value="inorganic_1">Inorganic 1 (1–70)</option>
              <option value="inorganic_2">Inorganic 2: Limit Tests (71–140)</option>
            </select>
          </div>

          <div className="flex items-center gap-2">
            <span className="text-slate-400 font-medium">Topic:</span>
            <select
              value={selectedTopic}
              onChange={(e) => setSelectedTopic(e.target.value)}
              className="bg-slate-50 border border-slate-200 rounded-md px-2.5 py-1 text-slate-700 font-medium focus:outline-none max-w-xs truncate"
            >
              <option value="all">All Topics ({topics.length})</option>
              {topics.map((t) => (
                <option key={t} value={t}>{t}</option>
              ))}
            </select>
          </div>

          <div className="ml-auto text-slate-400">
            Showing <strong className="text-slate-700">{filtered.length}</strong> of {questions.length} questions
          </div>
        </div>
      </div>

      {/* Questions List */}
      <div className="space-y-4">
        {filtered.map((q) => {
          const isRevealed = showAllAnswers || !!revealedIds[q.id];
          const isFlagged = !!flaggedQuestions[q.id];

          return (
            <div
              key={q.id}
              className="bg-white rounded-xl border border-slate-200 p-5 shadow-xs transition-all hover:border-slate-300 print:border-b print:rounded-none print:shadow-none print:p-3"
            >
              {/* Question Header */}
              <div className="flex items-start justify-between gap-4 mb-2">
                <div className="flex items-center gap-2 text-xs text-slate-500">
                  <span className="font-semibold text-teal-800">
                    {q.lecture === 'inorganic_1' ? 'Inorganic 1' : 'Inorganic 2'}
                  </span>
                  <span>·</span>
                  <span>{q.topic}</span>
                  {q.isHighYield && (
                    <>
                      <span>·</span>
                      <span className="text-amber-700 font-medium">High Yield</span>
                    </>
                  )}
                </div>

                <div className="flex items-center gap-2 print:hidden">
                  <button
                    type="button"
                    onClick={() => onToggleFlag(q.id)}
                    className="text-slate-400 hover:text-amber-500 transition-colors p-1"
                    title="Bookmark Question"
                  >
                    <Bookmark className={`w-4 h-4 ${isFlagged ? 'fill-amber-500 text-amber-500' : ''}`} />
                  </button>

                  <button
                    type="button"
                    onClick={() => toggleReveal(q.id)}
                    className="text-xs text-teal-700 font-semibold hover:underline flex items-center gap-1"
                  >
                    <span>{isRevealed ? 'Hide Answer' : 'Show Answer'}</span>
                  </button>
                </div>
              </div>

              {/* Question Text */}
              <h3 className="text-sm sm:text-base font-bold text-slate-900 leading-snug mb-3">
                <span className="text-slate-400 font-normal mr-2">Q{q.questionNumber}.</span>
                {q.question}
              </h3>

              {/* Options */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-xs mb-3">
                {q.options.map((opt) => {
                  const isCorrect = opt.key === q.correctAnswer;
                  return (
                    <div
                      key={opt.key}
                      className={`p-2.5 rounded-lg border flex items-center gap-2.5 ${
                        isRevealed && isCorrect
                          ? 'bg-emerald-50 border-emerald-400 text-emerald-950 font-semibold'
                          : 'bg-slate-50/60 border-slate-200 text-slate-700'
                      }`}
                    >
                      <span className={`w-5 h-5 rounded flex items-center justify-center font-bold text-[11px] shrink-0 border ${
                        isRevealed && isCorrect
                          ? 'bg-emerald-600 text-white border-emerald-600'
                          : 'bg-white text-slate-600 border-slate-300'
                      }`}>
                        {opt.key}
                      </span>
                      <span>{opt.text}</span>
                    </div>
                  );
                })}
              </div>

              {/* Revealed Answer & Rationale */}
              {isRevealed && (
                <div className="mt-3 pt-3 border-t border-slate-100 text-xs bg-slate-50 p-3 rounded-lg">
                  <div className="font-bold text-emerald-800 mb-1">
                    Correct Answer: Option {q.correctAnswer}
                  </div>
                  <p className="text-slate-700 leading-relaxed mb-1">
                    {q.explanationEn}
                  </p>
                  {showArabic && q.explanationAr && (
                    <p className="text-slate-600 font-arabic text-right leading-relaxed mt-2 pt-2 border-t border-slate-200" dir="rtl">
                      {q.explanationAr}
                    </p>
                  )}
                </div>
              )}
            </div>
          );
        })}
      </div>
    </div>
  );
};
