import React, { useState } from 'react';
import { LectureId, MCQQuestion } from '../types/quiz';
import { Timer, Sparkles, CheckCircle2, Sliders, Play, Award } from 'lucide-react';

interface ExamSetupProps {
  onStartExam: (config: {
    lecture: LectureId | 'all';
    questionCount: number;
    durationMinutes: number;
    shuffle: boolean;
  }) => void;
  selectedLectureDefault: LectureId | 'all';
}

export const ExamSetup: React.FC<ExamSetupProps> = ({
  onStartExam,
  selectedLectureDefault,
}) => {
  const [lecture, setLecture] = useState<LectureId | 'all'>(selectedLectureDefault);
  const [questionCount, setQuestionCount] = useState<number>(35);
  const [durationMinutes, setDurationMinutes] = useState<number>(35); // 1 min per question standard
  const [shuffle, setShuffle] = useState<boolean>(true);

  const maxQuestions = lecture === 'all' ? 140 : 70;

  const handleSelectCount = (count: number) => {
    setQuestionCount(count);
    setDurationMinutes(count); // 1 min per question default
  };

  const handleStart = () => {
    onStartExam({
      lecture,
      questionCount: Math.min(questionCount, maxQuestions),
      durationMinutes,
      shuffle,
    });
  };

  return (
    <div className="max-w-xl mx-auto px-4 py-12">
      <div className="bg-white rounded-3xl border border-slate-200 p-8 shadow-xs">
        <div className="w-12 h-12 bg-slate-900 rounded-2xl flex items-center justify-center text-white mb-6 mx-auto">
          <Timer className="w-6 h-6" />
        </div>

        <h2 className="text-2xl font-bold text-slate-900 text-center mb-2">
          Configure Your Exam Simulation
        </h2>
        <p className="text-xs text-slate-500 text-center mb-8 max-w-sm mx-auto">
          Simulate official university exam conditions with timer, question palette, and no instant answer reveals until final submission.
        </p>

        <div className="space-y-6">
          {/* 1. Exam Scope */}
          <div>
            <label className="text-xs font-bold uppercase tracking-wider text-slate-500 block mb-2">
              1. Select Lecture Scope
            </label>
            <div className="grid grid-cols-3 gap-2">
              <button
                type="button"
                onClick={() => {
                  setLecture('inorganic_1');
                  if (questionCount > 70) handleSelectCount(70);
                }}
                className={`p-3 rounded-xl border text-xs font-semibold text-center transition-all ${
                  lecture === 'inorganic_1'
                    ? 'border-slate-900 bg-slate-900 text-white shadow-xs'
                    : 'border-slate-200 bg-white text-slate-700 hover:bg-slate-50'
                }`}
              >
                Inorganic 1
                <span className="block text-[10px] opacity-75 font-normal">70 Questions</span>
              </button>

              <button
                type="button"
                onClick={() => {
                  setLecture('inorganic_2');
                  if (questionCount > 70) handleSelectCount(70);
                }}
                className={`p-3 rounded-xl border text-xs font-semibold text-center transition-all ${
                  lecture === 'inorganic_2'
                    ? 'border-slate-900 bg-slate-900 text-white shadow-xs'
                    : 'border-slate-200 bg-white text-slate-700 hover:bg-slate-50'
                }`}
              >
                Inorganic 2 (Limits)
                <span className="block text-[10px] opacity-75 font-normal">70 Questions</span>
              </button>

              <button
                type="button"
                onClick={() => setLecture('all')}
                className={`p-3 rounded-xl border text-xs font-semibold text-center transition-all ${
                  lecture === 'all'
                    ? 'border-slate-900 bg-slate-900 text-white shadow-xs'
                    : 'border-slate-200 bg-white text-slate-700 hover:bg-slate-50'
                }`}
              >
                Full Scope
                <span className="block text-[10px] opacity-75 font-normal">All 140 Questions</span>
              </button>
            </div>
          </div>

          {/* 2. Number of Questions */}
          <div>
            <label className="text-xs font-bold uppercase tracking-wider text-slate-500 block mb-2">
              2. Number of Questions
            </label>
            <div className="flex flex-wrap gap-2">
              {[15, 35, 50, 70, ...(lecture === 'all' ? [140] : [])].map((num) => (
                <button
                  key={num}
                  type="button"
                  onClick={() => handleSelectCount(num)}
                  className={`px-4 py-2 rounded-lg border text-xs font-semibold transition-all ${
                    questionCount === num
                      ? 'border-slate-900 bg-slate-900 text-white shadow-xs'
                      : 'border-slate-200 bg-white text-slate-700 hover:bg-slate-50'
                  }`}
                >
                  {num} Questions
                </button>
              ))}
            </div>
          </div>

          {/* 3. Duration */}
          <div>
            <label className="text-xs font-bold uppercase tracking-wider text-slate-500 block mb-2">
              3. Time Limit ({durationMinutes} minutes)
            </label>
            <input
              type="range"
              min={10}
              max={150}
              step={5}
              value={durationMinutes}
              onChange={(e) => setDurationMinutes(Number(e.target.value))}
              className="w-full accent-slate-900 h-1.5 bg-slate-200 rounded-lg cursor-pointer"
            />
            <div className="flex justify-between text-[11px] text-slate-400 mt-1">
              <span>Quick 10m</span>
              <span>Standard {durationMinutes}m (~1 min/Q)</span>
              <span>Extended 150m</span>
            </div>
          </div>

          {/* 4. Options */}
          <div className="pt-2 border-t border-slate-100 flex items-center justify-between">
            <span className="text-xs font-semibold text-slate-700">Shuffle question order</span>
            <input
              type="checkbox"
              checked={shuffle}
              onChange={(e) => setShuffle(e.target.checked)}
              className="w-4 h-4 rounded-sm accent-slate-900 cursor-pointer"
            />
          </div>

          {/* Start Exam CTA */}
          <button
            type="button"
            onClick={handleStart}
            className="w-full py-3.5 bg-slate-900 text-white rounded-xl text-sm font-semibold hover:bg-slate-800 transition-colors shadow-xs flex items-center justify-center gap-2 mt-4 cursor-pointer"
          >
            <Play className="w-4 h-4 fill-white" />
            <span>Begin Timed Exam ({questionCount} Qs · {durationMinutes}m)</span>
          </button>
        </div>
      </div>
    </div>
  );
};
