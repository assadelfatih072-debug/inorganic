import React from 'react';
import { QuizMode, LectureId } from '../types/quiz';
import { LECTURE_INFO } from '../data/questions';
import { 
  GraduationCap, 
  Timer, 
  FlaskConical, 
  BookOpen, 
  Search, 
  Globe, 
  Bookmark, 
  CheckCircle2, 
  Sparkles 
} from 'lucide-react';

interface NavbarProps {
  currentMode: QuizMode;
  onSelectMode: (mode: QuizMode) => void;
  selectedLecture: LectureId | 'all';
  onSelectLecture: (lec: LectureId | 'all') => void;
  showArabic: boolean;
  onToggleArabic: () => void;
  answeredCount: number;
  totalQuestions: number;
  flaggedCount: number;
  correctCount: number;
}

export const Navbar: React.FC<NavbarProps> = ({
  currentMode,
  onSelectMode,
  selectedLecture,
  onSelectLecture,
  showArabic,
  onToggleArabic,
  answeredCount,
  totalQuestions,
  flaggedCount,
  correctCount,
}) => {
  const accuracy = answeredCount > 0 ? Math.round((correctCount / answeredCount) * 100) : 0;

  return (
    <header className="sticky top-0 z-40 bg-white/95 backdrop-blur-md border-b border-slate-200 shadow-xs">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Top brand & lecture bar */}
        <div className="flex flex-col md:flex-row md:items-center md:justify-between py-3 border-b border-slate-100 gap-3">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-xl bg-teal-600 flex items-center justify-center text-white shadow-xs">
              <FlaskConical className="w-5 h-5" />
            </div>
            <div>
              <div className="flex items-center gap-2">
                <span className="font-bold text-lg text-slate-900 tracking-tight font-serif">PharmInorganica</span>
                <span className="text-xs font-semibold px-2 py-0.5 rounded bg-teal-50 text-teal-800 border border-teal-200">
                  Lec 1 & 2 Hub
                </span>
              </div>
              <p className="text-xs text-slate-500">
                Inorganic Pharmaceutical Chemistry · 140 Verified MCQs
              </p>
            </div>
          </div>

          {/* Lecture Switcher Segmented Control */}
          <div className="flex items-center flex-wrap gap-2">
            <div className="inline-flex p-1 bg-slate-100 rounded-lg border border-slate-200/80">
              <button
                type="button"
                onClick={() => onSelectLecture('inorganic_1')}
                className={`px-3 py-1.5 text-xs font-medium rounded-md transition-all ${
                  selectedLecture === 'inorganic_1'
                    ? 'bg-white text-slate-900 shadow-xs font-semibold'
                    : 'text-slate-600 hover:text-slate-900'
                }`}
              >
                Inorganic 1 (70 Qs)
              </button>
              <button
                type="button"
                onClick={() => onSelectLecture('inorganic_2')}
                className={`px-3 py-1.5 text-xs font-medium rounded-md transition-all ${
                  selectedLecture === 'inorganic_2'
                    ? 'bg-white text-slate-900 shadow-xs font-semibold'
                    : 'text-slate-600 hover:text-slate-900'
                }`}
              >
                Inorganic 2: Limit Tests (70 Qs)
              </button>
              <button
                type="button"
                onClick={() => onSelectLecture('all')}
                className={`px-3 py-1.5 text-xs font-medium rounded-md transition-all ${
                  selectedLecture === 'all'
                    ? 'bg-white text-slate-900 shadow-xs font-semibold'
                    : 'text-slate-600 hover:text-slate-900'
                }`}
              >
                All 140 Questions
              </button>
            </div>

            {/* Arabic commentary toggle button */}
            <button
              type="button"
              onClick={onToggleArabic}
              className={`inline-flex items-center gap-1.5 px-3 py-1.5 text-xs font-medium rounded-lg border transition-colors ${
                showArabic
                  ? 'bg-teal-50 border-teal-300 text-teal-900 font-semibold'
                  : 'bg-white border-slate-200 text-slate-600 hover:bg-slate-50'
              }`}
              title="Toggle Arabic Explanations & Notes"
            >
              <Globe className="w-3.5 h-3.5 text-teal-600" />
              <span>{showArabic ? 'عربي: مفعّل' : 'العربية: إيقاف'}</span>
            </button>
          </div>
        </div>

        {/* Lower navigation tabs & mini counters */}
        <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between py-2.5 gap-2 overflow-x-auto">
          {/* Main Mode Tabs */}
          <nav className="flex items-center gap-1 min-w-max">
            <button
              type="button"
              onClick={() => onSelectMode('practice')}
              className={`flex items-center gap-2 px-3 py-1.5 text-xs font-medium rounded-md transition-colors ${
                currentMode === 'practice'
                  ? 'bg-slate-900 text-white shadow-xs'
                  : 'text-slate-600 hover:text-slate-900 hover:bg-slate-100'
              }`}
            >
              <GraduationCap className="w-4 h-4" />
              <span>Practice & Quiz</span>
            </button>

            <button
              type="button"
              onClick={() => onSelectMode('exam')}
              className={`flex items-center gap-2 px-3 py-1.5 text-xs font-medium rounded-md transition-colors ${
                currentMode === 'exam'
                  ? 'bg-slate-900 text-white shadow-xs'
                  : 'text-slate-600 hover:text-slate-900 hover:bg-slate-100'
              }`}
            >
              <Timer className="w-4 h-4" />
              <span>Exam Simulator</span>
            </button>

            <button
              type="button"
              onClick={() => onSelectMode('lab')}
              className={`flex items-center gap-2 px-3 py-1.5 text-xs font-medium rounded-md transition-colors ${
                currentMode === 'lab'
                  ? 'bg-slate-900 text-white shadow-xs'
                  : 'text-slate-600 hover:text-slate-900 hover:bg-slate-100'
              }`}
            >
              <FlaskConical className="w-4 h-4" />
              <span>Limit Tests Lab</span>
            </button>

            <button
              type="button"
              onClick={() => onSelectMode('summary')}
              className={`flex items-center gap-2 px-3 py-1.5 text-xs font-medium rounded-md transition-colors ${
                currentMode === 'summary'
                  ? 'bg-slate-900 text-white shadow-xs'
                  : 'text-slate-600 hover:text-slate-900 hover:bg-slate-100'
              }`}
            >
              <BookOpen className="w-4 h-4" />
              <span>High-Yield Notes</span>
            </button>

            <button
              type="button"
              onClick={() => onSelectMode('search')}
              className={`flex items-center gap-2 px-3 py-1.5 text-xs font-medium rounded-md transition-colors ${
                currentMode === 'search'
                  ? 'bg-slate-900 text-white shadow-xs'
                  : 'text-slate-600 hover:text-slate-900 hover:bg-slate-100'
              }`}
            >
              <Search className="w-4 h-4" />
              <span>Question Bank & Print</span>
            </button>
          </nav>

          {/* Clean metadata indicators (Zero-Pill discipline: unboxed text with subtle separators) */}
          <div className="flex items-center gap-3 text-xs text-slate-500 whitespace-nowrap self-end sm:self-center">
            <span className="flex items-center gap-1.5">
              <CheckCircle2 className="w-3.5 h-3.5 text-emerald-600" />
              <span className="font-semibold text-slate-800">{answeredCount}/{totalQuestions}</span>
              <span>answered</span>
            </span>
            <span aria-hidden="true" className="text-slate-300">·</span>
            <span>
              Accuracy: <span className="font-semibold text-slate-800">{accuracy}%</span>
            </span>
            {flaggedCount > 0 && (
              <>
                <span aria-hidden="true" className="text-slate-300">·</span>
                <span className="flex items-center gap-1 text-amber-700 font-medium">
                  <Bookmark className="w-3.5 h-3.5 fill-amber-500 text-amber-500" />
                  <span>{flaggedCount} flagged</span>
                </span>
              </>
            )}
          </div>
        </div>
      </div>
    </header>
  );
};
