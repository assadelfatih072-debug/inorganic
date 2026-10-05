export type LectureId = 'inorganic_1' | 'inorganic_2';

export type OptionKey = 'A' | 'B' | 'C' | 'D';

export interface MCQOption {
  key: OptionKey;
  text: string;
}

export interface MCQQuestion {
  id: number;
  lecture: LectureId;
  questionNumber: number; // 1-70 in lecture
  globalId: string; // 'lec1_q1', 'lec2_q1'
  topic: string;
  topicAr: string;
  question: string;
  questionAr?: string;
  options: MCQOption[];
  correctAnswer: OptionKey;
  explanationEn: string;
  explanationAr: string;
  keyPoints?: string[];
  chemicalReagents?: string[];
  isHighYield?: boolean;
}

export type QuizMode = 'practice' | 'exam' | 'lab' | 'summary' | 'search';

export interface UserAnswerRecord {
  questionId: number;
  selectedOption: OptionKey | null;
  isCorrect: boolean;
  timestamp: number;
  flagged?: boolean;
}

export interface QuizProgress {
  answers: Record<number, OptionKey>;
  flagged: Record<number, boolean>;
  timeSpentSeconds: number;
  isSubmitted: boolean;
  score?: number;
}
