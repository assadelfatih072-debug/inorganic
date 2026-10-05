import React from 'react';
import { MCQQuestion, OptionKey } from '../types/quiz';
import { 
  Trophy, 
  RotateCcw, 
  CheckCircle, 
  XCircle, 
  Clock, 
  AlertTriangle, 
  BookOpen, 
  ChevronRight,
  Bookmark
} from 'lucide-react';

interface ExamResultsProps {
  questions: MCQQuestion[];
  userAnswers: Record<number, OptionKey>;
  timeSpentSeconds: number;
  onRetakeExam: () => void;
  onRetakeIncorrect: () => void;
  onReviewInPractice: () => void;
  showArabic: boolean;
}

export const ExamResults: React.FC<ExamResultsProps> = ({
  questions,
  userAnswers,
  timeSpentSeconds,
  onRetakeExam,
  onRetakeIncorrect,
  onReviewInPractice,
  showArabic,
}) => {
  const total = questions.length;
  let correctCount = 0;
  let incorrectCount = 0;
  let unansweredCount = 0;

  // Breakdown by Topic
  const topicStats: Record<string, { total: number; correct: number }> = {};

  questions.forEach((q) => {
    const ans = userAnswers[q.id];
    if (!topicStats[q.topic]) {
      topicStats[q.topic] = { total: 0, correct: 0 };
    }
    topicStats[q.topic].total += 1;

    if (!ans) {
      unansweredCount += 1;
    } else if (ans === q.correctAnswer) {
      correctCount += 1;
      topicStats[q.topic].correct += 1;
    } else {
      incorrectCount += 1;
    }
  });

  const percentage = total > 0 ? Math.round((correctCount / total) * 100) : 0;
  const isPassed = percentage >= 60; // 60% passing mark standard

  const formatTime = (secs: number) => {
    const mins = Math.floor(secs / 60);
    const s = secs % 60;
    return `${mins}m ${s}s`;
  };

  return (
    <div className="max-w-4xl mx-auto px-4 sm:px-6 py-8">
      {/* Top Banner Card */}
      <div className={`p-8 rounded-2xl border mb-8 text-center relative overflow-hidden ${
        isPassed 
          ? 'bg-gradient-to-b from-emerald-50 to-white border-emerald-200' 
          : 'bg-gradient-to-b from-rose-50 to-white border-rose-200'
      }`}>
        <div className={`w-16 h-16 mx-auto rounded-2xl flex items-center justify-center mb-4 ${
          isPassed ? 'bg-emerald-600 text-white' : 'bg-rose-600 text-white'
        }`}>
          {isPassed ? <Trophy className="w-8 h-8" /> : <AlertTriangle className="w-8 h-8" />}
        </div>

        <h2 className="text-2xl sm:text-3xl font-bold text-slate-900 mb-1">
          {isPassed ? 'Congratulations! You Passed' : 'Exam Completed'}
        </h2>
        <p className="text-sm text-slate-600 mb-6 max-w-lg mx-auto">
          {isPassed
            ? 'Strong clinical grasp of Inorganic Pharmaceutical Chemistry concepts and pharmacopeial limit tests.'
            : 'Good effort! Review the missed questions below and reinforce the limit test reagents and chemical principles.'}
        </p>

        {/* Primary Metrics Row (Zero-Pill discipline: unboxed clean numbers) */}
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 max-w-2xl mx-auto py-4 border-y border-slate-200/80">
          <div>
            <div className="text-3xl font-extrabold text-slate-900">{percentage}%</div>
            <div className="text-xs text-slate-500 font-medium">Final Score</div>
          </div>
          <div>
            <div className="text-3xl font-extrabold text-emerald-600">{correctCount}</div>
            <div className="text-xs text-slate-500 font-medium">Correct Answers</div>
          </div>
          <div>
            <div className="text-3xl font-extrabold text-rose-600">{incorrectCount}</div>
            <div className="text-xs text-slate-500 font-medium">Incorrect</div>
          </div>
          <div>
            <div className="text-3xl font-extrabold text-slate-700">{formatTime(timeSpentSeconds)}</div>
            <div className="text-xs text-slate-500 font-medium">Time Taken</div>
          </div>
        </div>

        {/* Action Buttons */}
        <div className="flex flex-wrap items-center justify-center gap-3 mt-6">
          <button
            type="button"
            onClick={onReviewInPractice}
            className="px-5 py-2.5 bg-slate-900 text-white rounded-xl text-sm font-medium hover:bg-slate-800 transition-colors shadow-xs flex items-center gap-2"
          >
            <BookOpen className="w-4 h-4" />
            <span>Review All Explanations</span>
          </button>

          {incorrectCount > 0 && (
            <button
              type="button"
              onClick={onRetakeIncorrect}
              className="px-5 py-2.5 bg-rose-600 text-white rounded-xl text-sm font-medium hover:bg-rose-700 transition-colors shadow-xs flex items-center gap-2"
            >
              <RotateCcw className="w-4 h-4" />
              <span>Retake Missed Questions ({incorrectCount})</span>
            </button>
          )}

          <button
            type="button"
            onClick={onRetakeExam}
            className="px-5 py-2.5 bg-white border border-slate-300 text-slate-700 rounded-xl text-sm font-medium hover:bg-slate-50 transition-colors flex items-center gap-2"
          >
            <RotateCcw className="w-4 h-4" />
            <span>Start Fresh Exam</span>
          </button>
        </div>
      </div>

      {/* Topic Mastery Breakdown */}
      <div className="bg-white rounded-2xl border border-slate-200 p-6 sm:p-8 mb-8 shadow-xs">
        <h3 className="text-base font-bold text-slate-900 mb-4 flex items-center gap-2">
          <span>Topic Mastery Breakdown</span>
        </h3>

        <div className="space-y-4">
          {Object.entries(topicStats).map(([topic, stats]) => {
            const topicPct = Math.round((stats.correct / stats.total) * 100);
            return (
              <div key={topic} className="space-y-1.5">
                <div className="flex items-center justify-between text-xs">
                  <span className="font-semibold text-slate-800">{topic}</span>
                  <span className="text-slate-500">
                    {stats.correct}/{stats.total} ({topicPct}%)
                  </span>
                </div>
                <div className="w-full bg-slate-100 rounded-full h-2 overflow-hidden">
                  <div
                    className={`h-full rounded-full transition-all duration-500 ${
                      topicPct >= 80 ? 'bg-emerald-500' : topicPct >= 50 ? 'bg-amber-500' : 'bg-rose-500'
                    }`}
                    style={{ width: `${topicPct}%` }}
                  />
                </div>
              </div>
            );
          })}
        </div>
      </div>

      {/* Detailed Question Review List */}
      <div className="bg-white rounded-2xl border border-slate-200 p-6 sm:p-8 shadow-xs">
        <div className="flex items-center justify-between mb-6">
          <h3 className="text-base font-bold text-slate-900">
            Question-by-Question Review ({questions.length})
          </h3>
        </div>

        <div className="divide-y divide-slate-100 space-y-4">
          {questions.map((q) => {
            const userChoice = userAnswers[q.id];
            const isRight = userChoice === q.correctAnswer;

            return (
              <div key={q.id} className="pt-4 first:pt-0">
                <div className="flex items-start justify-between gap-4 mb-2">
                  <div className="flex items-center gap-2">
                    <span className={`w-5 h-5 rounded-full flex items-center justify-center text-xs font-bold text-white shrink-0 ${
                      isRight ? 'bg-emerald-600' : 'bg-rose-600'
                    }`}>
                      {isRight ? '✓' : '✗'}
                    </span>
                    <span className="font-bold text-slate-900 text-sm">
                      Q{q.questionNumber}. {q.question}
                    </span>
                  </div>
                </div>

                <div className="ml-7 text-xs space-y-1 text-slate-600">
                  <div className="flex items-center gap-3">
                    <span>
                      Your answer: <strong className={isRight ? 'text-emerald-700' : 'text-rose-700'}>
                        Option {userChoice || 'Unanswered'}
                      </strong>
                    </span>
                    <span>·</span>
                    <span>
                      Correct answer: <strong className="text-emerald-700">Option {q.correctAnswer}</strong>
                    </span>
                  </div>
                  <p className="text-slate-700 mt-1 leading-relaxed">
                    {q.explanationEn}
                  </p>
                  {showArabic && q.explanationAr && (
                    <p className="text-slate-600 mt-1 leading-relaxed font-arabic" dir="rtl">
                      {q.explanationAr}
                    </p>
                  )}
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};
