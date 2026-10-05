import React, { useState, useEffect } from 'react';
import { MCQQuestion, OptionKey, QuizMode } from '../types/quiz';
import { 
  ChevronLeft, 
  ChevronRight, 
  Bookmark, 
  Check, 
  X, 
  RotateCcw, 
  HelpCircle, 
  LayoutGrid, 
  Shuffle, 
  CheckCircle2, 
  AlertCircle,
  Eye,
  EyeOff,
  Filter
} from 'lucide-react';

interface QuizViewProps {
  questions: MCQQuestion[];
  mode: QuizMode;
  userAnswers: Record<number, OptionKey>;
  onSelectAnswer: (questionId: number, option: OptionKey) => void;
  flaggedQuestions: Record<number, boolean>;
  onToggleFlag: (questionId: number) => void;
  showArabic: boolean;
  onFinishExam?: () => void;
  timeRemaining?: number; // in seconds for exam
}

export const QuizView: React.FC<QuizViewProps> = ({
  questions,
  mode,
  userAnswers,
  onSelectAnswer,
  flaggedQuestions,
  onToggleFlag,
  showArabic,
  onFinishExam,
  timeRemaining,
}) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [filterType, setFilterType] = useState<'all' | 'unanswered' | 'incorrect' | 'flagged'>('all');
  const [showPalette, setShowPalette] = useState(false);
  const [showExplanationAlways, setShowExplanationAlways] = useState(false);

  // Filtered subset of questions if requested
  const filteredQuestions = React.useMemo(() => {
    if (filterType === 'all') return questions;
    if (filterType === 'unanswered') {
      return questions.filter(q => !userAnswers[q.id]);
    }
    if (filterType === 'incorrect') {
      return questions.filter(q => userAnswers[q.id] && userAnswers[q.id] !== q.correctAnswer);
    }
    if (filterType === 'flagged') {
      return questions.filter(q => flaggedQuestions[q.id]);
    }
    return questions;
  }, [questions, filterType, userAnswers, flaggedQuestions]);

  // Keep index within range if filter shrinks list
  useEffect(() => {
    if (currentIndex >= filteredQuestions.length && filteredQuestions.length > 0) {
      setCurrentIndex(0);
    }
  }, [filteredQuestions.length, currentIndex]);

  const currentQ = filteredQuestions[currentIndex] || questions[0];
  const selectedOption = currentQ ? userAnswers[currentQ.id] : null;
  const isFlagged = currentQ ? !!flaggedQuestions[currentQ.id] : false;
  const isAnswered = selectedOption !== null && selectedOption !== undefined;
  const isCorrect = isAnswered && selectedOption === currentQ.correctAnswer;

  // Keyboard navigation A, B, C, D and Arrows
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      // Don't trigger if user is in an input or textarea
      if (['INPUT', 'TEXTAREA'].includes((e.target as HTMLElement).tagName)) return;

      const key = e.key.toUpperCase();
      if (['A', 'B', 'C', 'D'].includes(key) && currentQ) {
        onSelectAnswer(currentQ.id, key as OptionKey);
      } else if (e.key === 'ArrowRight' || e.key === 'PageDown') {
        goToNext();
      } else if (e.key === 'ArrowLeft' || e.key === 'PageUp') {
        goToPrev();
      } else if (e.key === 'f' || e.key === 'F') {
        if (currentQ) onToggleFlag(currentQ.id);
      }
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [currentQ, currentIndex, filteredQuestions.length]);

  const goToNext = () => {
    if (currentIndex < filteredQuestions.length - 1) {
      setCurrentIndex(currentIndex + 1);
    }
  };

  const goToPrev = () => {
    if (currentIndex > 0) {
      setCurrentIndex(currentIndex - 1);
    }
  };

  if (!currentQ || filteredQuestions.length === 0) {
    return (
      <div className="max-w-3xl mx-auto px-4 py-16 text-center">
        <div className="w-14 h-14 bg-slate-100 rounded-full flex items-center justify-center mx-auto mb-4 text-slate-500">
          <Filter className="w-7 h-7" />
        </div>
        <h3 className="text-lg font-bold text-slate-900 mb-1">No questions found in this filter</h3>
        <p className="text-sm text-slate-500 mb-6">
          No items match the filter &quot;{filterType}&quot;.
        </p>
        <button
          type="button"
          onClick={() => setFilterType('all')}
          className="px-4 py-2 bg-slate-900 text-white rounded-lg text-sm font-medium hover:bg-slate-800 transition-colors"
        >
          Reset to All Questions
        </button>
      </div>
    );
  }

  // Format timer MM:SS
  const formatTime = (secs: number) => {
    const mins = Math.floor(secs / 60);
    const remainingSecs = secs % 60;
    return `${mins.toString().padStart(2, '0')}:${remainingSecs.toString().padStart(2, '0')}`;
  };

  return (
    <div className="max-w-4xl mx-auto px-4 sm:px-6 py-6">
      {/* Top bar: Question progress, timer, filters, question palette toggle */}
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 mb-6 pb-4 border-b border-slate-200">
        <div className="flex items-center gap-3">
          <div className="text-sm">
            <span className="font-bold text-slate-900 text-base">Question {currentIndex + 1}</span>
            <span className="text-slate-400"> of {filteredQuestions.length}</span>
            {filterType !== 'all' && (
              <span className="ml-2 text-xs text-amber-700 bg-amber-50 px-2 py-0.5 rounded border border-amber-200">
                Filtered: {filterType}
              </span>
            )}
          </div>

          <div className="h-4 w-px bg-slate-200 hidden sm:block" />

          {/* Quick filter segmented control */}
          <div className="hidden sm:inline-flex p-0.5 bg-slate-100 rounded-lg text-xs">
            <button
              type="button"
              onClick={() => setFilterType('all')}
              className={`px-2.5 py-1 rounded-md transition-colors ${
                filterType === 'all' ? 'bg-white font-medium text-slate-900 shadow-xs' : 'text-slate-600 hover:text-slate-900'
              }`}
            >
              All ({questions.length})
            </button>
            <button
              type="button"
              onClick={() => setFilterType('incorrect')}
              className={`px-2.5 py-1 rounded-md transition-colors ${
                filterType === 'incorrect' ? 'bg-white font-medium text-rose-700 shadow-xs' : 'text-slate-600 hover:text-slate-900'
              }`}
            >
              Incorrect
            </button>
            <button
              type="button"
              onClick={() => setFilterType('flagged')}
              className={`px-2.5 py-1 rounded-md transition-colors ${
                filterType === 'flagged' ? 'bg-white font-medium text-amber-700 shadow-xs' : 'text-slate-600 hover:text-slate-900'
              }`}
            >
              Flagged
            </button>
          </div>
        </div>

        <div className="flex items-center gap-2 self-end sm:self-auto">
          {/* Exam Mode Timer */}
          {mode === 'exam' && timeRemaining !== undefined && (
            <div className={`px-3 py-1 rounded-md font-mono text-sm font-semibold border ${
              timeRemaining < 300 
                ? 'bg-rose-50 text-rose-700 border-rose-300 animate-pulse' 
                : 'bg-slate-100 text-slate-800 border-slate-200'
            }`}>
              ⏱ {formatTime(timeRemaining)}
            </div>
          )}

          {/* Question Palette Drawer Button */}
          <button
            type="button"
            onClick={() => setShowPalette(!showPalette)}
            className={`flex items-center gap-1.5 px-3 py-1.5 text-xs font-medium rounded-lg border transition-colors ${
              showPalette ? 'bg-slate-900 text-white border-slate-900' : 'bg-white border-slate-200 text-slate-700 hover:bg-slate-50'
            }`}
          >
            <LayoutGrid className="w-3.5 h-3.5" />
            <span>Grid ({currentIndex + 1}/{filteredQuestions.length})</span>
          </button>

          {/* Flag / Bookmark Button */}
          <button
            type="button"
            onClick={() => onToggleFlag(currentQ.id)}
            className={`flex items-center gap-1.5 px-3 py-1.5 text-xs font-medium rounded-lg border transition-colors ${
              isFlagged
                ? 'bg-amber-50 text-amber-800 border-amber-300 font-semibold'
                : 'bg-white text-slate-600 border-slate-200 hover:bg-slate-50'
            }`}
            title="Flag question for review (Shortcut: F)"
          >
            <Bookmark className={`w-3.5 h-3.5 ${isFlagged ? 'fill-amber-500 text-amber-500' : ''}`} />
            <span>{isFlagged ? 'Flagged' : 'Flag'}</span>
          </button>
        </div>
      </div>

      {/* Palette Grid Drawer (Collapsible) */}
      {showPalette && (
        <div className="mb-6 p-4 bg-slate-50 rounded-xl border border-slate-200">
          <div className="flex items-center justify-between mb-3 text-xs text-slate-600">
            <span className="font-semibold">Question Navigator Palette</span>
            <div className="flex items-center gap-3">
              <span className="flex items-center gap-1">
                <span className="w-2.5 h-2.5 rounded-full bg-emerald-500 inline-block" /> Correct / Done
              </span>
              <span className="flex items-center gap-1">
                <span className="w-2.5 h-2.5 rounded-full bg-amber-400 inline-block" /> Flagged
              </span>
              <span className="flex items-center gap-1">
                <span className="w-2.5 h-2.5 rounded-full bg-slate-300 inline-block" /> Unanswered
              </span>
            </div>
          </div>
          <div className="grid grid-cols-10 sm:grid-cols-14 md:grid-cols-20 gap-1.5 max-h-48 overflow-y-auto p-1">
            {filteredQuestions.map((q, idx) => {
              const ans = userAnswers[q.id];
              const flg = flaggedQuestions[q.id];
              const isCurr = idx === currentIndex;
              const isCorrectQ = ans === q.correctAnswer;

              let btnBg = 'bg-white text-slate-700 border-slate-200';
              if (mode === 'practice') {
                if (ans) {
                  btnBg = isCorrectQ 
                    ? 'bg-emerald-600 text-white border-emerald-600' 
                    : 'bg-rose-600 text-white border-rose-600';
                }
              } else {
                if (ans) {
                  btnBg = 'bg-slate-800 text-white border-slate-800';
                }
              }

              if (flg) {
                btnBg += ' ring-2 ring-amber-400';
              }

              if (isCurr) {
                btnBg += ' ring-2 ring-teal-500 ring-offset-1 font-bold';
              }

              return (
                <button
                  key={q.id}
                  type="button"
                  onClick={() => {
                    setCurrentIndex(idx);
                    setShowPalette(false);
                  }}
                  className={`h-7 w-7 text-xs rounded-md border flex items-center justify-center transition-all ${btnBg}`}
                >
                  {idx + 1}
                </button>
              );
            })}
          </div>
        </div>
      )}

      {/* Main Question Card */}
      <div className="bg-white rounded-2xl border border-slate-200 shadow-xs p-6 sm:p-8">
        {/* Question Header Kicker (Zero-Pill discipline: unboxed subtle text) */}
        <div className="flex flex-wrap items-center justify-between gap-2 text-xs text-slate-500 mb-3">
          <div className="flex items-center gap-2">
            <span className="font-semibold text-teal-800">
              {currentQ.lecture === 'inorganic_1' ? 'Inorganic 1' : 'Inorganic 2 (Limit Tests)'}
            </span>
            <span aria-hidden="true" className="text-slate-300">·</span>
            <span className="text-slate-700 font-medium">{currentQ.topic}</span>
            {showArabic && currentQ.topicAr && (
              <>
                <span aria-hidden="true" className="text-slate-300">·</span>
                <span className="text-slate-600 font-arabic">{currentQ.topicAr}</span>
              </>
            )}
          </div>
          {currentQ.isHighYield && (
            <span className="text-amber-800 bg-amber-50 px-2 py-0.5 rounded text-[11px] font-semibold border border-amber-200">
              ★ High-Yield Exam Concept
            </span>
          )}
        </div>

        {/* Question Prompt */}
        <h2 className="text-lg sm:text-xl font-bold text-slate-900 leading-snug tracking-tight mb-6">
          <span className="text-slate-400 font-normal mr-2">Q{currentQ.questionNumber}.</span>
          {currentQ.question}
        </h2>

        {/* Options List */}
        <div className="space-y-3 mb-6">
          {currentQ.options.map((option) => {
            const isThisSelected = selectedOption === option.key;
            const isThisCorrect = option.key === currentQ.correctAnswer;

            // Practice Mode Styling
            let optionStyles = 'border-slate-200 bg-white hover:border-slate-300 hover:bg-slate-50/50 text-slate-800';
            let badgeStyles = 'bg-slate-100 text-slate-700 border-slate-200';
            let iconElement = null;

            if (mode === 'practice' && isAnswered) {
              if (isThisCorrect) {
                optionStyles = 'border-emerald-500 bg-emerald-50/80 text-emerald-950 ring-1 ring-emerald-500';
                badgeStyles = 'bg-emerald-600 text-white border-emerald-600';
                iconElement = <Check className="w-4 h-4 text-emerald-700 shrink-0" />;
              } else if (isThisSelected && !isThisCorrect) {
                optionStyles = 'border-rose-400 bg-rose-50/80 text-rose-950 ring-1 ring-rose-400';
                badgeStyles = 'bg-rose-600 text-white border-rose-600';
                iconElement = <X className="w-4 h-4 text-rose-700 shrink-0" />;
              } else {
                optionStyles = 'border-slate-200 bg-white opacity-60 text-slate-600';
                badgeStyles = 'bg-slate-100 text-slate-500 border-slate-200';
              }
            } else if (isThisSelected) {
              // Exam Mode or Practice before answer
              optionStyles = 'border-slate-900 bg-slate-50 ring-2 ring-slate-900 text-slate-950';
              badgeStyles = 'bg-slate-900 text-white border-slate-900';
            }

            return (
              <button
                key={option.key}
                type="button"
                onClick={() => onSelectAnswer(currentQ.id, option.key)}
                className={`w-full text-left p-4 rounded-xl border transition-all flex items-center justify-between gap-4 cursor-pointer ${optionStyles}`}
              >
                <div className="flex items-center gap-3.5">
                  <span className={`w-7 h-7 rounded-lg flex items-center justify-center font-bold text-xs shrink-0 border ${badgeStyles}`}>
                    {option.key}
                  </span>
                  <span className="text-sm font-medium leading-relaxed">
                    {option.text}
                  </span>
                </div>
                {iconElement}
              </button>
            );
          })}
        </div>

        {/* Practice Mode: Instant Rationale & Arabic Explanation Box */}
        {mode === 'practice' && isAnswered && (
          <div className="mt-6 pt-6 border-t border-slate-200 animate-in fade-in duration-300">
            <div className={`p-5 rounded-xl border ${
              isCorrect ? 'bg-emerald-50/60 border-emerald-200' : 'bg-rose-50/60 border-rose-200'
            }`}>
              <div className="flex items-center gap-2 mb-2 font-bold text-sm">
                {isCorrect ? (
                  <>
                    <CheckCircle2 className="w-5 h-5 text-emerald-600" />
                    <span className="text-emerald-900">Correct! Option {currentQ.correctAnswer}</span>
                  </>
                ) : (
                  <>
                    <AlertCircle className="w-5 h-5 text-rose-600" />
                    <span className="text-rose-900">Incorrect. The correct answer is Option {currentQ.correctAnswer}</span>
                  </>
                )}
              </div>

              {/* English Explanation */}
              <p className="text-sm text-slate-800 leading-relaxed mb-3">
                {currentQ.explanationEn}
              </p>

              {/* Arabic High-Yield Note */}
              {showArabic && currentQ.explanationAr && (
                <div className="mt-3 pt-3 border-t border-slate-200/80 bg-white/70 p-3 rounded-lg text-right font-arabic" dir="rtl">
                  <span className="text-xs font-bold text-teal-900 block mb-1">
                    💡 التفسير والملاحظة الصيدلانية السريعة:
                  </span>
                  <p className="text-sm text-slate-800 leading-relaxed">
                    {currentQ.explanationAr}
                  </p>
                </div>
              )}
            </div>
          </div>
        )}
      </div>

      {/* Bottom Navigation Buttons */}
      <div className="flex items-center justify-between mt-6">
        <button
          type="button"
          onClick={goToPrev}
          disabled={currentIndex === 0}
          className={`flex items-center gap-2 px-4 py-2 text-sm font-medium rounded-lg border transition-colors ${
            currentIndex === 0
              ? 'bg-slate-100 text-slate-400 border-slate-200 cursor-not-allowed'
              : 'bg-white text-slate-700 border-slate-200 hover:bg-slate-50'
          }`}
        >
          <ChevronLeft className="w-4 h-4" />
          <span>Previous</span>
        </button>

        <div className="flex items-center gap-2">
          {mode === 'exam' && onFinishExam && (
            <button
              type="button"
              onClick={onFinishExam}
              className="px-4 py-2 bg-emerald-600 text-white rounded-lg text-sm font-medium hover:bg-emerald-700 transition-colors shadow-xs"
            >
              Submit & Grade Exam
            </button>
          )}

          <button
            type="button"
            onClick={goToNext}
            disabled={currentIndex === filteredQuestions.length - 1}
            className={`flex items-center gap-2 px-5 py-2 text-sm font-medium rounded-lg transition-colors ${
              currentIndex === filteredQuestions.length - 1
                ? 'bg-slate-100 text-slate-400 cursor-not-allowed'
                : 'bg-slate-900 text-white hover:bg-slate-800 shadow-xs'
            }`}
          >
            <span>Next</span>
            <ChevronRight className="w-4 h-4" />
          </button>
        </div>
      </div>
    </div>
  );
};
