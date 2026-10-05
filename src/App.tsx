import React, { useState, useEffect, useRef } from 'react';
import { QuizMode, LectureId, OptionKey, MCQQuestion } from './types/quiz';
import { allQuestions, getQuestionsByLecture } from './data/questions';
import { Navbar } from './components/Navbar';
import { QuizView } from './components/QuizView';
import { ExamSetup } from './components/ExamSetup';
import { ExamResults } from './components/ExamResults';
import { LimitTestsLab } from './components/LimitTestsLab';
import { LectureSummary } from './components/LectureSummary';
import { QuestionSearchList } from './components/QuestionSearchList';
import { FlaskConical, RotateCcw, Sparkles } from 'lucide-react';

const STORAGE_KEYS = {
  PRACTICE_ANSWERS: 'pharminorganica_practice_answers_v1',
  FLAGGED: 'pharminorganica_flagged_v1',
  SHOW_ARABIC: 'pharminorganica_show_arabic_v1',
};

export default function App() {
  const [currentMode, setCurrentMode] = useState<QuizMode>('practice');
  const [selectedLecture, setSelectedLecture] = useState<LectureId | 'all'>('inorganic_1');
  const [showArabic, setShowArabic] = useState<boolean>(true);

  // Persistent Practice answers and flagged questions
  const [practiceAnswers, setPracticeAnswers] = useState<Record<number, OptionKey>>(() => {
    try {
      const saved = localStorage.getItem(STORAGE_KEYS.PRACTICE_ANSWERS);
      return saved ? JSON.parse(saved) : {};
    } catch {
      return {};
    }
  });

  const [flaggedQuestions, setFlaggedQuestions] = useState<Record<number, boolean>>(() => {
    try {
      const saved = localStorage.getItem(STORAGE_KEYS.FLAGGED);
      return saved ? JSON.parse(saved) : {};
    } catch {
      return {};
    }
  });

  // Save to localStorage
  useEffect(() => {
    try {
      localStorage.setItem(STORAGE_KEYS.PRACTICE_ANSWERS, JSON.stringify(practiceAnswers));
    } catch {
      // ignore
    }
  }, [practiceAnswers]);

  useEffect(() => {
    try {
      localStorage.setItem(STORAGE_KEYS.FLAGGED, JSON.stringify(flaggedQuestions));
    } catch {
      // ignore
    }
  }, [flaggedQuestions]);

  // Exam specific state
  const [isExamActive, setIsExamActive] = useState<boolean>(false);
  const [isExamFinished, setIsExamFinished] = useState<boolean>(false);
  const [examQuestions, setExamQuestions] = useState<MCQQuestion[]>([]);
  const [examAnswers, setExamAnswers] = useState<Record<number, OptionKey>>({});
  const [timeRemaining, setTimeRemaining] = useState<number>(0);
  const [examTotalDurationSeconds, setExamTotalDurationSeconds] = useState<number>(0);
  const [examTimeSpent, setExamTimeSpent] = useState<number>(0);

  // Exam timer effect
  useEffect(() => {
    if (!isExamActive || isExamFinished) return;

    const timer = setInterval(() => {
      setTimeRemaining((prev) => {
        if (prev <= 1) {
          clearInterval(timer);
          handleFinishExam();
          return 0;
        }
        return prev - 1;
      });
      setExamTimeSpent((prev) => prev + 1);
    }, 1000);

    return () => clearInterval(timer);
  }, [isExamActive, isExamFinished]);

  // Handle answer in practice or exam
  const handleSelectAnswer = (questionId: number, option: OptionKey) => {
    if (currentMode === 'exam') {
      setExamAnswers((prev) => ({ ...prev, [questionId]: option }));
    } else {
      setPracticeAnswers((prev) => ({ ...prev, [questionId]: option }));
    }
  };

  const handleToggleFlag = (questionId: number) => {
    setFlaggedQuestions((prev) => ({
      ...prev,
      [questionId]: !prev[questionId],
    }));
  };

  const handleStartExam = (config: {
    lecture: LectureId | 'all';
    questionCount: number;
    durationMinutes: number;
    shuffle: boolean;
  }) => {
    let pool = [...getQuestionsByLecture(config.lecture)];

    if (config.shuffle) {
      // Fisher-Yates shuffle
      for (let i = pool.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [pool[i], pool[j]] = [pool[j], pool[i]];
      }
    }

    const selected = pool.slice(0, config.questionCount);
    setExamQuestions(selected);
    setExamAnswers({});
    setTimeRemaining(config.durationMinutes * 60);
    setExamTotalDurationSeconds(config.durationMinutes * 60);
    setExamTimeSpent(0);
    setIsExamActive(true);
    setIsExamFinished(false);
  };

  const handleFinishExam = () => {
    setIsExamActive(false);
    setIsExamFinished(true);
  };

  const handleRetakeExam = () => {
    setIsExamActive(false);
    setIsExamFinished(false);
    setExamAnswers({});
  };

  const handleRetakeIncorrect = () => {
    const wrongQs = examQuestions.filter(
      (q) => !examAnswers[q.id] || examAnswers[q.id] !== q.correctAnswer
    );
    if (wrongQs.length > 0) {
      setExamQuestions(wrongQs);
      setExamAnswers({});
      setTimeRemaining(wrongQs.length * 60);
      setExamTotalDurationSeconds(wrongQs.length * 60);
      setExamTimeSpent(0);
      setIsExamActive(true);
      setIsExamFinished(false);
    }
  };

  const handleReviewInPractice = () => {
    setCurrentMode('practice');
  };

  // Questions currently active for Practice mode
  const currentPracticeQuestions = React.useMemo(() => {
    return getQuestionsByLecture(selectedLecture);
  }, [selectedLecture]);

  // Overall counters
  const totalQuestions = allQuestions.length;
  const answeredPracticeCount = Object.keys(practiceAnswers).length;
  const flaggedCount = Object.values(flaggedQuestions).filter(Boolean).length;
  let correctPracticeCount = 0;
  allQuestions.forEach((q) => {
    if (practiceAnswers[q.id] === q.correctAnswer) {
      correctPracticeCount += 1;
    }
  });

  return (
    <div className="min-h-screen flex flex-col bg-slate-50 font-sans selection:bg-teal-500 selection:text-white">
      {/* Navigation Header */}
      <Navbar
        currentMode={currentMode}
        onSelectMode={(mode) => {
          setCurrentMode(mode);
          if (mode !== 'exam') {
            setIsExamActive(false);
            setIsExamFinished(false);
          }
        }}
        selectedLecture={selectedLecture}
        onSelectLecture={(lec) => {
          setSelectedLecture(lec);
          if (currentMode === 'exam' && !isExamActive) {
            // keep aligned
          }
        }}
        showArabic={showArabic}
        onToggleArabic={() => setShowArabic(!showArabic)}
        answeredCount={answeredPracticeCount}
        totalQuestions={totalQuestions}
        flaggedCount={flaggedCount}
        correctCount={correctPracticeCount}
      />

      {/* Main Content Area */}
      <main className="flex-1 pb-16">
        {/* Practice Mode */}
        {currentMode === 'practice' && (
          <QuizView
            questions={currentPracticeQuestions}
            mode="practice"
            userAnswers={practiceAnswers}
            onSelectAnswer={handleSelectAnswer}
            flaggedQuestions={flaggedQuestions}
            onToggleFlag={handleToggleFlag}
            showArabic={showArabic}
          />
        )}

        {/* Exam Mode */}
        {currentMode === 'exam' && (
          <>
            {!isExamActive && !isExamFinished && (
              <ExamSetup
                onStartExam={handleStartExam}
                selectedLectureDefault={selectedLecture}
              />
            )}

            {isExamActive && !isExamFinished && (
              <QuizView
                questions={examQuestions}
                mode="exam"
                userAnswers={examAnswers}
                onSelectAnswer={handleSelectAnswer}
                flaggedQuestions={flaggedQuestions}
                onToggleFlag={handleToggleFlag}
                showArabic={showArabic}
                onFinishExam={handleFinishExam}
                timeRemaining={timeRemaining}
              />
            )}

            {isExamFinished && (
              <ExamResults
                questions={examQuestions}
                userAnswers={examAnswers}
                timeSpentSeconds={examTimeSpent}
                onRetakeExam={handleRetakeExam}
                onRetakeIncorrect={handleRetakeIncorrect}
                onReviewInPractice={handleReviewInPractice}
                showArabic={showArabic}
              />
            )}
          </>
        )}

        {/* Limit Tests Interactive Lab */}
        {currentMode === 'lab' && <LimitTestsLab showArabic={showArabic} />}

        {/* High-Yield Lecture Notes */}
        {currentMode === 'summary' && <LectureSummary showArabic={showArabic} />}

        {/* Question Bank & Print Sheet */}
        {currentMode === 'search' && (
          <QuestionSearchList
            questions={allQuestions}
            flaggedQuestions={flaggedQuestions}
            onToggleFlag={handleToggleFlag}
            showArabic={showArabic}
          />
        )}
      </main>

      {/* Footer (Zero-Pill discipline: unboxed clean typographic layout) */}
      <footer className="bg-white border-t border-slate-200 py-8 px-4 sm:px-6 print:hidden">
        <div className="max-w-7xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-slate-500">
          <div className="flex items-center gap-3">
            <div className="w-6 h-6 rounded-md bg-teal-600 flex items-center justify-center text-white font-bold text-xs">
              Ψ
            </div>
            <div>
              <span className="font-semibold text-slate-800">PharmInorganica</span>
              <span className="mx-2">·</span>
              <span>Inorganic Pharmaceutical Chemistry 1 & 2 Course Revision</span>
            </div>
          </div>

          <div className="flex items-center gap-4 text-slate-400">
            <span>BP / USP / IP Pharmacopeial Standards</span>
            <span>·</span>
            <span>All 140 Questions & Rationales</span>
          </div>
        </div>
      </footer>
    </div>
  );
}
